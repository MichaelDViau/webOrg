/** Fills `{placeholders}` in a translated string: format("Step {number}", { number: 2 }) → "Step 2". */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** A date such as "September 29, 2026" in the visitor's language, from an ISO date (2026-09-29). */
export function formatDate(iso: string, locale: "en" | "es" | "fr"): string {
  const tag = locale === "fr" ? "fr-CA" : locale === "es" ? "es-MX" : "en-US";
  return new Intl.DateTimeFormat(tag, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}
