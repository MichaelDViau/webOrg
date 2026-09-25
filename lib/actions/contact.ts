"use server";

import {
  contactFields,
  normalizeContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import { sendNotification } from "@/lib/email";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp } from "@/lib/request";
import { site } from "@/lib/site";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactErrors;
}

const MIN_FILL_TIME_MS = 3000;

function formatInquiry(values: ContactValues, language: string): string {
  return [
    `Name: ${values.name}`,
    `Company: ${values.company || "Not provided"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Project type: ${values.projectType}`,
    `Budget: ${values.budget}`,
    `Site language: ${language}`,
    "",
    values.message,
  ].join("\n");
}

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  // Server Actions can't read the route's language, so the form sends it along.
  const requested = String(formData.get("locale") ?? "");
  const locale = isLocale(requested) ? requested : defaultLocale;
  const t = getContentFor(locale).ui.contactErrors;

  // Bots commonly fill hidden fields and submit instantly. Report success so they don't retry.
  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("startedAt"));
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  if (!rateLimit(`contact:${await clientIp()}`, { limit: 5, windowMs: 10 * 60 * 1000 })) {
    return {
      status: "error",
      message: format(t.rateLimited, { email: site.email }),
    };
  }

  const values = normalizeContactValues(
    Object.fromEntries(contactFields.map((field) => [field, formData.get(field)])),
  );
  const errors = validateContact(values, t, locale);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: t.fixFields, errors };
  }

  const sent = await sendNotification({
    subject: `New project inquiry: ${values.name}${values.company ? `, ${values.company}` : ""}`,
    text: formatInquiry(values, locale),
    replyTo: values.email,
  });
  if (!sent) {
    return {
      status: "error",
      message: format(t.sendFailed, { email: site.email }),
    };
  }

  return { status: "success" };
}
