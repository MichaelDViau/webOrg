"use client";

import Link from "@/components/i18n/Link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { splitLocale } from "@/lib/i18n/config";
import { capabilitiesHref, contactHref } from "@/lib/site";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

interface HeaderProps {
  nav: { href: string; label: string }[];
  labels: {
    mainNav: string;
    mobileNav: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    /** The main button: "Discuss your project". */
    primary: string;
    /** The second button, in the mobile menu: "Explore our capabilities". */
    secondary: string;
    logo: string;
  };
}

export function Header({ nav, labels }: HeaderProps) {
  // Active states compare against the path without its language prefix.
  const pathname = splitLocale(usePathname()).path;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    // Once the page scrolls, the bar turns 80% opaque with a light blur so content shows through.
    // It stays solid while the mobile menu is open: backdrop-filter would make the header the
    // containing block for the menu's fixed panel and collapse it.
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-line transition-colors duration-200",
        scrolled && !open ? "bg-paper/80 backdrop-blur-md" : "bg-paper",
      )}
    >
      {/* The bar spans the full width, wider than the page content below it, so the logo and the buttons sit near the edges. */}
      <div className="flex h-16 w-full items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8 lg:h-18 lg:px-10 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:px-12 2xl:px-16">
        <div className="flex justify-start">
          <Logo label={labels.logo} />
        </div>

        <nav aria-label={labels.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-6 whitespace-nowrap xl:gap-8">
            {nav.map((item) => (
              <li key={item.href} className="flex">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "flex h-10 items-center text-sm leading-none transition-colors duration-200 hover:text-ink",
                    isActive(pathname, item.href) ? "font-medium text-ink" : "text-body",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 whitespace-nowrap sm:gap-2 xl:justify-self-end">
          <div className="hidden sm:block">
            <ButtonLink href={contactHref} size="sm">
              {labels.primary}
            </ButtonLink>
          </div>
          <LanguageSwitch label={labels.language} />
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center text-ink xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? labels.closeMenu : labels.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5">
              {open ? (
                <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 6.5h14M3 13.5h14" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-paper xl:hidden"
      >
        <div className="flex flex-col px-5 py-6 sm:px-8 lg:px-10">
          <nav aria-label={labels.mobileNav}>
            <ul className="divide-y divide-line">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-2xl font-medium tracking-tight text-ink"
                >
                  {labels.home}
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 text-2xl font-medium tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href={contactHref} withArrow onClick={() => setOpen(false)}>
              {labels.primary}
            </ButtonLink>
            <ButtonLink href={capabilitiesHref} variant="secondary" onClick={() => setOpen(false)}>
              {labels.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
