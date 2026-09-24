"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
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
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
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
              Contact Us
            </ButtonLink>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
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
          <nav aria-label="Mobile">
            <ul className="divide-y divide-line">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-medium tracking-tight text-ink"
                >
                  Home
                </Link>
              </li>
              {mainNav.map((item) => (
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
            Contact Us
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
