import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
          <span className="text-sm text-ink-subtle">{site.tagline}</span>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-xs text-ink-subtle">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
      </Container>
    </footer>
  );
}
