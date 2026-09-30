"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/Link";
import { cn } from "@/lib/cn";
import { localeNames, localizePath, splitLocale, type Locale } from "@/lib/i18n/config";

/** The order the languages are offered in: English first, since it is the default. */
const order: Locale[] = ["en", "es", "fr"];

/**
 * Language dropdown at the top right. It shows the current language by name ("English") and opens a list
 * of the others in their own language ("Español", "Français"). Each option opens the same page in that
 * language, at its own address. Text only, no flags: a flag stands for a country, not a language.
 *
 * The options are plain links on purpose. The language is the root of the app: a new language means a new
 * <html>, so the browser should load a fresh document. A client-side transition would make React build
 * the new <html> and its inline theme script itself, which React warns about ("Encountered a script tag
 * while rendering React component") and which would not run the script anyway.
 */
export function LanguageSwitch({ label }: { label: string }) {
  const locale = useLocale();
  const path = splitLocale(usePathname()).path;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  // Close on Escape (returning focus to the button), on a click elsewhere, and when focus leaves the control.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-1.5 rounded-md border border-line-strong px-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink sm:px-3"
      >
        <span aria-hidden="true" className="uppercase sm:hidden">
          {locale}
        </span>
        <span aria-hidden="true" className="hidden sm:inline">
          {localeNames[locale]}
        </span>
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={cn("size-3.5 shrink-0 text-muted transition-transform duration-200", open && "rotate-180")}
          fill="none"
        >
          <path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <ul
        id={listId}
        hidden={!open}
        className="bg-night absolute right-0 top-full z-50 mt-2 min-w-40 rounded-lg border border-night-line p-1.5 shadow-lg"
      >
        {order
          .filter((option) => option !== locale)
          .map((option) => (
            <li key={option}>
              <a
                href={localizePath(path, option)}
                hrefLang={option}
                lang={option}
                className="block rounded-md px-3 py-2.5 text-base text-paper transition-colors duration-150 hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink focus-visible:outline-none"
              >
                {localeNames[option]}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
