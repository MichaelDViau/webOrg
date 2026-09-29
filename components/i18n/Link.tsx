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

/**
 * next/link that keeps visitors in their language: href="/work" becomes "/es/work" on Spanish pages.
 *
 * English pages live at unprefixed URLs that next.config.ts rewrites to /en/..., and Next.js can't
 * prefetch a rewritten route reliably (its segment prefetch asks for a path that doesn't exist and gets
 * a 404 in the console). Links to English pages therefore aren't prefetched; they still navigate
 * instantly on click because every page is prerendered.
 */
export default function Link({ href, prefetch, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const target = typeof href === "string" ? localizePath(href, locale) : href;
  const rewritten = locale === defaultLocale || (typeof target === "string" && target.startsWith("/") && !isLocale(target.split("/")[1] ?? ""));
  return <NextLink href={target} prefetch={prefetch ?? (rewritten ? false : undefined)} {...props} />;
}
