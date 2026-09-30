import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { industriesPage } = await getContent();
  return pageMetadata({
    title: industriesPage.metaTitle,
    description: industriesPage.metaDescription,
    path: "/industries",
  });
}

/**
 * Ten industries, each with the kinds of solutions its businesses often need and the capabilities that
 * answer them. The page says plainly that this is where the capabilities apply, not a list of clients.
 */
export default async function IndustriesPage() {
  const { ui, locale, industriesPage: t, industries, services } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <p className="mt-6 max-w-2xl border-l-2 border-line-strong pl-4 text-base leading-relaxed text-body">{t.note}</p>
      </PageHeader>

      <Section>
        <Container>
          <ul className="grid gap-x-12 gap-y-14 lg:grid-cols-2">
            {industries.map((industry) => {
              const related = industry.services.flatMap((slug) => services.find((item) => item.slug === slug) ?? []);
              return (
                <li key={industry.slug} id={industry.slug} className="scroll-mt-24 border-t-2 border-ink pt-6" data-reveal>
                  <h2 className="text-subheading">{industry.name}</h2>
                  <p className="mt-3 text-lg leading-relaxed">{industry.lead}</p>

                  <p className="mt-6 text-sm font-medium text-muted">{t.needsLabel}</p>
                  <ul className="mt-3 space-y-2 text-lg">
                    {industry.needs.map((need) => (
                      <li key={need} className="flex gap-3">
                        <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
                        <span className="text-ink">{need}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm font-medium text-muted">{t.relatedLabel}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                    {related.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group inline-flex items-center gap-1.5 py-1 font-medium text-ink hover:underline hover:underline-offset-4"
                        >
                          {service.name}
                          <ArrowIcon className="group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: ui.nav.industries, path: localizePath("/industries", locale) },
        ])}
      />
    </>
  );
}
