import Link from "@/components/i18n/Link";
import { Container } from "@/components/ui/Container";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { contactNavItem, location, mainNav, phoneHref, site } from "@/lib/site";
import { Logo } from "./Logo";

const linkClass = "inline-block py-1 text-sm text-muted transition-colors hover:text-ink";

export async function Footer() {
  const { ui, services } = await getContent();
  const t = ui.footer;

  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo label={format(ui.logoLabel, { name: site.name })} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {t.tagline}
            </p>
          </div>

          <nav aria-label={t.services} className="lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">{t.services}</h2>
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

          <nav aria-label={t.company} className="lg:col-span-2">
            <h2 className="text-sm font-medium text-ink">{t.company}</h2>
            <ul className="mt-3 space-y-1">
              {[
                ...[...mainNav, contactNavItem].map((item) => ({ href: item.href, label: ui.nav[item.key] })),
                { label: t.websiteCheck, href: "/website-check" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">{t.contact}</h2>
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
            © {new Date().getFullYear()} {site.legalName}. {t.rights}
          </p>
          <Link href="/privacy" className={linkClass}>
            {t.privacy}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
