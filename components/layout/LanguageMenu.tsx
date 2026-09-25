"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/i18n/Link";
import { cn } from "@/lib/cn";
import { localeNames, localizePath, locales, splitLocale } from "@/lib/i18n/config";

/** Delay before closing, so the pointer can travel from the globe to the menu without it disappearing. */
const CLOSE_DELAY_MS = 150;

/**
 * Globe button listing the site's languages. Opens on hover for mouse users, and on click,
 * tap or keyboard for everyone else. Each option links to the current page in that language.
 */
export function LanguageMenu({ label }: { label: string }) {
  const locale = useLocale();
  const path = splitLocale(usePathname()).path;
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Set when hovering opened the menu, so the click that usually follows doesn't close it again.
  const openedByHover = useRef(false);

  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      openedByHover.current = false;
      setOpen(false);
    }, CLOSE_DELAY_MS);
  };

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
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        cancelClose();
        if (!open) openedByHover.current = true;
        setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") scheduleClose();
      }}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          if (openedByHover.current) {
            openedByHover.current = false;
            return;
          }
          setOpen((value) => !value);
        }}
        className="inline-flex h-10 items-center justify-center gap-1 rounded-md px-2 text-ink transition-colors hover:bg-canvas"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5">
          <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M2.75 10h14.5M10 2.75c-2 2-3 4.4-3 7.25s1 5.25 3 7.25M10 2.75c2 2 3 4.4 3 7.25s-1 5.25-3 7.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="text-xs font-medium uppercase">{locale}</span>
      </button>

      {/* pt-2 keeps the hover area continuous between the button and the menu. */}
      <div id={menuId} hidden={!open} className="absolute right-0 top-full z-50 pt-2">
        <ul className="min-w-40 overflow-hidden rounded-md border border-line bg-paper py-1 shadow-lg">
          {locales.map((option) => {
            const current = option === locale;
            return (
              <li key={option}>
                <NextLink
                  href={localizePath(path, option)}
                  hrefLang={option}
                  lang={option}
                  aria-current={current ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-6 px-4 py-2.5 text-sm transition-colors hover:bg-canvas",
                    current ? "font-medium text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {localeNames[option]}
                  <span className="text-xs uppercase text-muted">{option}</span>
                </NextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
