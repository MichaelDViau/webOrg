import type { Metadata } from "next";
import { defaultLocale, localizePath, locales, ogLocales } from "./i18n/config";
import { format } from "./i18n/format";
import { getContent } from "./i18n/server";
import { site } from "./site";

interface PageMetadataOptions {
  /** Page title. Rendered as "Title | Site name" unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Path of the page without a language prefix, starting with "/". */
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

/**
 * Builds consistent page metadata in the language being rendered. Next.js replaces nested
 * metadata objects such as `openGraph` rather than merging them, so every page sets the full
 * set of shared fields through this helper. Each page links to its other language versions.
 */
export async function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: PageMetadataOptions): Promise<Metadata> {
  const { locale, ui } = await getContent();
  const url = localizePath(path, locale);
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const images = [
    { url: "/opengraph-image.png", width: 1200, height: 630, alt: format(ui.site.shareImageAlt, { name: site.name }) },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((option) => [option, localizePath(path, option)])),
        "x-default": localizePath(path, defaultLocale),
      },
    },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((option) => option !== locale).map((option) => ogLocales[option]),
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
