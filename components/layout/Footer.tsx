import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { mainNav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Websites, web applications, AI and automation for businesses that depend on their software.
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">Services</h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-muted hover:text-ink">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-sm font-medium text-ink">Company</h2>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-muted">
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-ink">
                  {site.phone}
                </a>
              </p>
              <p>{site.location}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-ink">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
