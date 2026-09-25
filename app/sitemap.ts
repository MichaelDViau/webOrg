import type { MetadataRoute } from "next";
import { localizePath, locales } from "@/lib/i18n/config";
import { projectSlugs } from "@/lib/projects";
import { serviceSlugs } from "@/lib/services";
import { bookingUrl, site } from "@/lib/site";

/** Every page in every language, each entry listing its translations for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/technology",
    "/work",
    "/about",
    "/contact",
    "/website-check",
    ...(bookingUrl ? ["/book"] : []),
    "/privacy",
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...projectSlugs.map((slug) => `/work/${slug}`),
  ];

  const url = (path: string, locale: (typeof locales)[number]) => {
    const localized = localizePath(path, locale);
    return `${site.url}${localized === "/" ? "" : localized}`;
  };

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: url(path, locale),
      alternates: { languages: Object.fromEntries(locales.map((option) => [option, url(path, option)])) },
    })),
  );
}
