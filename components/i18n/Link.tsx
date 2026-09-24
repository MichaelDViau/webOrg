"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, isLocale, localizePath } from "@/lib/i18n/config";

/** The current page language, from the [lang] route segment. */
export function useLocale() {
  const { lang } = useParams<{ lang?: string }>();
  return lang && isLocale(lang) ? lang : defaultLocale;
}

/** next/link that keeps visitors in their language: href="/work" becomes "/es/work" on Spanish pages. */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  return <NextLink href={typeof href === "string" ? localizePath(href, locale) : href} {...props} />;
}
