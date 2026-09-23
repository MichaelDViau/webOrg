import type { Metadata } from "next";
import { site } from "./site";

/** Default social sharing image, generated from app/opengraph-image.png. */
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: websites, web apps, AI solutions, automation and optimization`,
};

interface PageMetadataOptions {
  /** Page title. Rendered as "Title | Site name" unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Path of the page, starting with "/". Used for the canonical URL and Open Graph URL. */
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

/**
 * Builds consistent page metadata. Next.js replaces nested metadata objects
 * such as `openGraph` rather than merging them, so every page sets the full
 * set of shared fields through this helper.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const images = [{ url: shareImage.url, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
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
