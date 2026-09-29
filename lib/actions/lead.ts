"use server";

import { submitToCrm } from "@/lib/crm";
import { sendConfirmation, sendNotification } from "@/lib/email";
import { defaultLocale, isLocale, localeNames, type Locale } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import {
  fieldsByIntent,
  isLeadIntent,
  leadFields,
  normalizeLeadValues,
  validateLead,
  type LeadErrors,
  type LeadIntent,
  type LeadValues,
} from "@/lib/lead";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp } from "@/lib/request";
import { site } from "@/lib/site";
import { normalizeWebsiteUrl } from "@/lib/website-check";

export interface LeadState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: LeadErrors;
}

const MIN_FILL_TIME_MS = 3000;

/** Internal notifications are always in English, so the team reads them the same way whatever the visitor's language. */
const intentLabels: Record<LeadIntent, string> = {
  audit: "Audit request",
  contact: "Contact message",
  snapshot: "Snapshot request",
};

function safePagePath(value: FormDataEntryValue | null): string {
  const path = typeof value === "string" ? value : "";
  return /^\/[\w\-./]{0,199}$/.test(path) ? path : "/";
}

function formatInquiry(values: LeadValues, intent: LeadIntent, page: string, website: string): string {
  const line = (label: string, value: string) => `${label}: ${value || "Not provided"}`;
  return [
    `Type: ${intentLabels[intent]}`,
    `Reply due: within one business hour of ${new Date().toISOString()}`,
    "",
    line("Name", values.name),
    line("Role", values.role),
    line("Company", values.company),
    line("Website", website),
    line("Email", values.email),
    line("Phone", values.phone),
    line("Preferred language", localeNames[values.language as Locale]),
    line("Source page", page),
    "",
    values.need,
  ].join("\n");
}

/** The instant confirmation, in the visitor's language. */
function confirmationEmail(locale: Locale, intent: LeadIntent, name: string) {
  const { ui } = getContentFor(locale);
  const t = ui.confirmation;
  const lines = [
    format(t.greeting, { name }),
    "",
    t.kinds[intent],
    t.automatic,
    "",
    format(t.promise, { hours: ui.site.hours }),
    ...(intent === "audit" ? [t.nextAudit] : intent === "snapshot" ? [t.nextSnapshot] : []),
    "",
    format(t.signoff, { name: site.name }),
    site.email,
    "",
    t.ignore,
  ];
  return { subject: t.subject, text: lines.join("\n") };
}

export async function submitLead(_previous: LeadState, formData: FormData): Promise<LeadState> {
  // Server Actions can't read the route's language, so the form sends it along.
  const requested = String(formData.get("locale") ?? "");
  const locale = isLocale(requested) ? requested : defaultLocale;
  const t = getContentFor(locale).ui.leadErrors;
  const rawIntent = formData.get("intent");
  const intent: LeadIntent = isLeadIntent(rawIntent) ? rawIntent : "contact";

  // Bots commonly fill hidden fields and submit instantly. Report success so they don't retry.
  const honeypot = formData.get("hp_url");
  const startedAt = Number(formData.get("startedAt"));
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const ip = await clientIp();
  if (!rateLimit(`lead:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 })) {
    return { status: "error", message: format(t.rateLimited, { email: site.email }) };
  }

  const values = normalizeLeadValues(Object.fromEntries(leadFields.map((field) => [field, formData.get(field)])));
  const errors = validateLead(values, intent, t);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: t.fixFields, errors };
  }

  // Ignore anything the form for this intent doesn't show.
  const shown = fieldsByIntent[intent];
  for (const field of leadFields) if (!shown.includes(field)) values[field] = field === "language" ? locale : "";

  const page = safePagePath(formData.get("page"));
  const website = values.website ? (normalizeWebsiteUrl(values.website) ?? values.website) : "";
  const language = values.language as Locale;
  const ui = getContentFor(language).ui;

  // The team's inbox and the CRM are independent: the request counts as received if either one has it.
  const [notified, crm] = await Promise.all([
    sendNotification({
      subject: `[${intentLabels[intent]}] ${values.name}${values.company ? `, ${values.company}` : ""}`,
      text: formatInquiry(values, intent, page, website),
      replyTo: values.email,
    }),
    submitToCrm(intent, {
      email: values.email,
      name: values.name,
      role: values.role,
      company: values.company,
      website,
      phone: values.phone,
      message: values.need,
      language,
      page,
      consentText: format(ui.leadForm.consent, { name: site.name }),
    }),
  ]);
  if (!notified && !crm) {
    return { status: "error", message: format(t.sendFailed, { email: site.email }) };
  }

  // One automatic confirmation per address per hour, so the form can't be used to mail strangers repeatedly.
  if (rateLimit(`confirm:${values.email}`, { limit: 2, windowMs: 60 * 60 * 1000 })) {
    await sendConfirmation(values.email, confirmationEmail(language, intent, values.name));
  }

  return { status: "success" };
}
