"use server";

import { sendNotification } from "@/lib/email";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp } from "@/lib/request";
import {
  normalizeWebsiteUrl,
  summarizeReport,
  type LighthouseReport,
  type WebsiteCheckResult,
} from "@/lib/website-check";

export interface WebsiteCheckState {
  status: "idle" | "success" | "error";
  message?: string;
  result?: WebsiteCheckResult;
  emailSent?: boolean;
}

const PAGESPEED_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function runPageSpeed(url: string, locale: Locale): Promise<LighthouseReport | null> {
  // `locale` makes Lighthouse write its audit titles in the visitor's language.
  const params = new URLSearchParams({ url, strategy: "mobile", locale });
  for (const category of ["performance", "accessibility", "best-practices", "seo"]) {
    params.append("category", category);
  }
  if (process.env.PAGESPEED_API_KEY) params.set("key", process.env.PAGESPEED_API_KEY);

  const response = await fetch(`${PAGESPEED_ENDPOINT}?${params}`, {
    signal: AbortSignal.timeout(90_000),
    cache: "no-store",
  }).catch(() => null);

  if (!response?.ok) {
    console.error("PageSpeed Insights request failed", response?.status);
    return null;
  }
  const data = (await response.json()) as { lighthouseResult?: LighthouseReport };
  return data.lighthouseResult ?? null;
}

export async function runWebsiteCheck(_previous: WebsiteCheckState, formData: FormData): Promise<WebsiteCheckState> {
  // Server Actions can't read the route's language, so the form sends it along.
  const requested = String(formData.get("locale") ?? "");
  const locale = isLocale(requested) ? requested : defaultLocale;
  const t = getContentFor(locale).ui.websiteCheck;

  const url = normalizeWebsiteUrl(String(formData.get("url") ?? ""));
  if (!url) {
    return { status: "error", message: t.errors.invalidUrl };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (email && (email.length > 254 || !EMAIL_PATTERN.test(email))) {
    return { status: "error", message: t.errors.invalidEmail };
  }

  if (!rateLimit(`website-check:${await clientIp()}`, { limit: 5, windowMs: 60 * 60 * 1000 })) {
    return {
      status: "error",
      message: t.errors.rateLimited,
    };
  }

  const report = await runPageSpeed(url, locale);
  if (!report) {
    return {
      status: "error",
      message: t.errors.failed,
    };
  }

  const result = summarizeReport(report, url, t);

  let emailSent = false;
  if (email) {
    const { scores } = result;
    emailSent = await sendNotification({
      subject: `Website check request: ${result.url}`,
      replyTo: email,
      text: [
        `Email: ${email}`,
        `Website: ${result.url}`,
        `Site language: ${locale}`,
        "",
        `Performance: ${scores.performance}`,
        `Accessibility: ${scores.accessibility}`,
        `Best practices: ${scores.bestPractices}`,
        `SEO: ${scores.seo}`,
        "",
        ...result.metrics.map((metric) => `${metric.label}: ${metric.value}`),
        "",
        "Top findings:",
        ...result.findings.map((finding) => `- ${finding.title}${finding.savings ? ` (${finding.savings})` : ""}`),
      ].join("\n"),
    });
  }

  return { status: "success", result, emailSent };
}
