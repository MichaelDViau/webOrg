"use server";

import { submitToCrm } from "@/lib/crm";
import { sendNotification } from "@/lib/email";
import { defaultLocale, isLocale, localeNames, type Locale } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp } from "@/lib/request";
import { site } from "@/lib/site";

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_TIME_MS = 2000;

export async function subscribeNewsletter(_previous: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const requested = String(formData.get("locale") ?? "");
  const locale = isLocale(requested) ? requested : defaultLocale;
  const t = getContentFor(locale).ui.newsletter;

  const honeypot = formData.get("hp_url");
  const startedAt = Number(formData.get("startedAt"));
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email) return { status: "error", message: t.errors.emailRequired };
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return { status: "error", message: t.errors.emailInvalid };
  if (formData.get("consent") !== "yes") return { status: "error", message: t.errors.consentRequired };

  const languageValue = String(formData.get("language") ?? "");
  const language: Locale = isLocale(languageValue) ? languageValue : locale;

  if (!rateLimit(`newsletter:${await clientIp()}`, { limit: 5, windowMs: 10 * 60 * 1000 })) {
    return { status: "error", message: t.errors.rateLimited };
  }

  const pageValue = String(formData.get("page") ?? "");
  const page = /^\/[\w\-./]{0,199}$/.test(pageValue) ? pageValue : "/";

  const [notified, crm] = await Promise.all([
    sendNotification({
      subject: `[Newsletter] ${email}`,
      text: `Newsletter sign-up\nEmail: ${email}\nLanguage: ${localeNames[language]}\nSource page: ${page}`,
      replyTo: email,
    }),
    submitToCrm("newsletter", {
      email,
      language,
      page,
      consentText: format(getContentFor(language).ui.newsletter.consent, { name: site.name }),
    }),
  ]);
  if (!notified && !crm) return { status: "error", message: t.errors.failed };

  return { status: "success" };
}
