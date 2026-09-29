import type { MetadataRoute } from "next";
import { demoSlugs } from "@/lib/demos";
import { localizePath, locales } from "@/lib/i18n/config";
import { industrySlugs } from "@/lib/industries";
import { articleSlugs } from "@/lib/insights";
import { serviceSlugs } from "@/lib/services";
import { bookingUrl, site } from "@/lib/site";
import { standardSlugs } from "@/lib/standards";

/** Every page in every language, each entry listing its translations for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/audit",
    "/snapshot",
    "/services",
    "/industries",
    "/work",
    "/how-we-work",
    "/standards",
    "/about",
    "/partners",
    "/insights",
    "/contact",
    "/website-check",
    ...(bookingUrl ? ["/book"] : []),
    "/privacy",
    "/terms",
    "/cookies",
    "/aviso-de-privacidad",
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...industrySlugs.map((slug) => `/industries/${slug}`),
    ...demoSlugs.map((slug) => `/work/${slug}`),
    ...standardSlugs.map((slug) => `/standards/${slug}`),
    ...articleSlugs.map((slug) => `/insights/${slug}`),
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
