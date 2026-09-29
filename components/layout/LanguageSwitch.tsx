"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/components/i18n/Link";
import { cn } from "@/lib/cn";
import { localeNames, localizePath, locales, splitLocale } from "@/lib/i18n/config";

/**
 * Language switch at the top right: EN / FR / ES, always visible so one click changes language.
 * Each option opens the same page in that language, at its own address.
 *
 * These are plain links on purpose. The language is the root of the app: a new language means a new
 * <html>, so the browser should load a fresh document. A client-side transition would make React build
 * the new <html> and its inline theme script itself, which React warns about ("Encountered a script tag
 * while rendering React component") and which would not run the script anyway.
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
              <a
                href={localizePath(path, option)}
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
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
