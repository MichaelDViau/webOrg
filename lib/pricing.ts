import type { Ui } from "./content/en/ui";
import type { Locale } from "./i18n/config";
import { format } from "./i18n/format";
import type { ServiceSlug } from "./services";

/**
 * Every price on the site comes from this file, so a change here updates all pages and languages.
 * Amounts are in US dollars.
 */

/** The Digital Systems Audit: the guideline's range, credited in full to a project signed in time. */
export const audit = {
  from: 1500,
  to: 7500,
  creditDays: 60,
} as const;

/**
 * "From" prices for each service, in US dollars. 0 means "not set yet": pages then show 0000 so the
 * placeholder is obvious, and `npm run launch-check` fails until every price is filled in.
 * `per: "month"` prices are shown as monthly amounts.
 */
export const servicePricing: Record<ServiceSlug, { from: number; per: "project" | "month" }> = {
  "revenue-websites": { from: 0, per: "project" },
  "client-portals": { from: 0, per: "project" },
  "operations-apps": { from: 0, per: "project" },
  automation: { from: 0, per: "project" },
  "ai-with-judgment": { from: 0, per: "project" },
  "integrations-and-data": { from: 0, per: "project" },
  "managed-plans": { from: 0, per: "month" },
};

/** Amount formatted for the language: 15000 becomes "15,000" (en, es) or "15 000" (fr). Unset prices show "0000". */
export function formatAmount(amount: number, locale: Locale): string {
  if (amount <= 0) return "0000";
  const tag = locale === "fr" ? "fr-CA" : locale === "es" ? "es-MX" : "en-US";
  return new Intl.NumberFormat(tag, { maximumFractionDigits: 0 }).format(amount);
}

export function isPriceSet(slug: ServiceSlug): boolean {
  return servicePricing[slug].from > 0;
}

/** The audit price range in the visitor's language, for example "US$1,500–7,500". */
export function auditPriceText(locale: Locale, t: Ui["price"]): string {
  return format(t.auditRange, { from: formatAmount(audit.from, locale), to: formatAmount(audit.to, locale) });
}

/** A service's "from" price in the visitor's language, for example "from US$15,000". */
export function servicePriceText(slug: ServiceSlug, locale: Locale, t: Ui["price"]): string {
  const { from, per } = servicePricing[slug];
  return format(per === "month" ? t.fromPerMonth : t.from, { amount: formatAmount(from, locale) });
}
