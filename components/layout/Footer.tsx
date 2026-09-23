import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";
import { location, mainNav, phoneHref, site } from "@/lib/site";
import { Logo } from "./Logo";

const linkClass = "inline-block py-1 text-sm text-muted transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Websites, web applications, AI and automation for businesses of every size.
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">Services</h2>
            <ul className="mt-3 space-y-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-sm font-medium text-ink">Company</h2>
            <ul className="mt-3 space-y-1">
              {[...mainNav, { label: "Free website check", href: "/website-check" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">Contact</h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-muted">
              <p>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </p>
              <p>
                <a href={phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </p>
              <p className="py-1">{location}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <Link href="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
