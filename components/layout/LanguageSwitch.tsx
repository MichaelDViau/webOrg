"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/i18n/Link";
import { cn } from "@/lib/cn";
import { localeNames, localizePath, locales, splitLocale } from "@/lib/i18n/config";

/**
 * Language switch at the top right: EN / FR / ES, always visible so one click changes language.
 * Each option opens the same page in that language, at its own address.
 */
export function LanguageSwitch({ label }: { label: string }) {
  const locale = useLocale();
  const path = splitLocale(usePathname()).path;

  return (
    <nav aria-label={label}>
      <ul className="flex items-center">
        {locales.map((option, index) => {
          const current = option === locale;
          return (
            <li key={option} className="flex items-center">
              {index > 0 && (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              )}
              <NextLink
                href={localizePath(path, option)}
                prefetch={false}
                hrefLang={option}
                lang={option}
                aria-label={localeNames[option]}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "inline-flex h-10 min-w-7 items-center justify-center px-1 text-xs font-medium uppercase transition-colors",
                  current ? "text-ink underline decoration-accent decoration-2 underline-offset-8" : "text-muted hover:text-ink",
                )}
              >
                {option}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
