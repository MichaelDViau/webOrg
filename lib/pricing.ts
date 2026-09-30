import type { Ui } from "./content/en/ui";
import type { Locale } from "./i18n/config";
import { format } from "./i18n/format";

/**
 * Every price on the site comes from this file, so a change here updates all pages and languages.
 * Amounts are in US dollars. Only the technical assessment (the Digital Systems Audit) has a published range;
 * projects are scoped and quoted in writing after a conversation.
 */

/** The Digital Systems Audit: the guideline's range, credited in full to a project signed in time. */
export const audit = {
  from: 1500,
  to: 7500,
  creditDays: 60,
} as const;

/** Amount formatted for the language: 15000 becomes "15,000" (en, es) or "15 000" (fr). Unset prices show "0000". */
export function formatAmount(amount: number, locale: Locale): string {
  if (amount <= 0) return "0000";
  const tag = locale === "fr" ? "fr-CA" : locale === "es" ? "es-MX" : "en-US";
  return new Intl.NumberFormat(tag, { maximumFractionDigits: 0 }).format(amount);
}

/** The audit price range in the visitor's language, for example "US$1,500–7,500". */
export function auditPriceText(locale: Locale, t: Ui["price"]): string {
  return format(t.auditRange, { from: formatAmount(audit.from, locale), to: formatAmount(audit.to, locale) });
}
