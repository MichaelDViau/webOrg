export const locales = ["en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

/** English is served without a prefix (/services); the others use /es/… and /fr/…. */
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Names shown in the language menu, each written in its own language. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

/** Open Graph locale for each language. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_US",
  fr: "fr_CA",
};

/** Adds the language prefix to an internal path: ("/work", "es") → "/es/work". */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale || !path.startsWith("/") || path.startsWith("//")) return path;
  if (isLocale(path.split("/")[1] ?? "")) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Splits "/es/work" into { locale: "es", path: "/work" }. Unprefixed paths are English. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (isLocale(first)) return { locale: first, path: `/${rest.join("/")}` };
  return { locale: defaultLocale, path: pathname || "/" };
}
