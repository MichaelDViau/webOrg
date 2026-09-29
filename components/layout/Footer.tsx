import Link from "@/components/i18n/Link";
import { Container } from "@/components/ui/Container";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { footerNav, site } from "@/lib/site";
import { Logo } from "./Logo";

const linkClass = "inline-block py-1 text-base text-body transition-colors hover:text-ink hover:underline hover:underline-offset-4";

export async function Footer() {
  const { ui, services, industries } = await getContent();
  const t = ui.footer;
  const label = (key: keyof typeof ui.nav | "privacy" | "terms" | "cookies" | "mexicoNotice") =>
    key === "privacy" || key === "terms" || key === "cookies" || key === "mexicoNotice" ? t[key] : ui.nav[key];

  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-3">
            <Logo label={format(ui.logoLabel, { name: site.name })} />
            <p className="mt-5 max-w-xs text-base leading-relaxed text-body">{t.tagline}</p>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-body">
              {format(t.newCompany, { year: site.foundedYear })}
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

          <div className="lg:col-span-3">
            <nav aria-label={t.industries}>
              <h2 className="text-sm font-medium text-ink">{t.industries}</h2>
              <ul className="mt-3 space-y-1">
                {industries.map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/industries/${industry.slug}`} className={linkClass}>
                      {industry.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav aria-label={t.company} className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h2 className="text-sm font-medium text-ink">{t.company}</h2>
            <ul className="mt-3 space-y-1">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {label(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-8 text-base text-body sm:grid-cols-2 lg:grid-cols-12">
          <address className="not-italic lg:col-span-6">
            <h2 className="text-sm font-medium text-ink">{t.contact}</h2>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </p>
            <p>{ui.site.hours}</p>
            <p>
              {ui.site.countriesLabel}: {ui.site.countries.join(", ")}
            </p>
            <p>
              {ui.site.languagesLabel}: {ui.site.languages}
            </p>
          </address>
          <nav aria-label={t.legal} className="lg:col-span-6 lg:justify-self-end">
            <h2 className="text-sm font-medium text-ink">{t.legal}</h2>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 lg:justify-end">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {label(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-base text-muted">
          © {new Date().getFullYear()} {site.legalName}. {t.rights}
        </p>
      </Container>
    </footer>
  );
}
