"use client";

import Link from "@/components/i18n/Link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { splitLocale } from "@/lib/i18n/config";
import { Logo } from "./Logo";
import { LanguageMenu } from "./LanguageMenu";
import { ThemeToggle } from "./ThemeToggle";

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
    darkTheme: string;
    language: string;
    contactUs: string;
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
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-18">
        <Logo label={labels.logo} />

        <nav aria-label={labels.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors duration-200 hover:text-ink",
                    isActive(pathname, item.href) ? "font-medium text-ink" : "text-muted",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="sm">
              {labels.contactUs}
            </ButtonLink>
          </div>
          <ThemeToggle label={labels.darkTheme} />
          <LanguageMenu label={labels.language} />
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center text-ink lg:hidden"
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
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <Container className="flex flex-col py-6">
          <nav aria-label={labels.mobileNav}>
            <ul className="divide-y divide-line">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-medium tracking-tight text-ink"
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
                    className="block py-4 text-2xl font-medium tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href="/contact" withArrow className="mt-8" onClick={() => setOpen(false)}>
            {labels.contactUs}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
