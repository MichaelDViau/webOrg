import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { servicePriceText } from "@/lib/pricing";

export async function generateMetadata(): Promise<Metadata> {
  const { servicesPage } = await getContent();
  return pageMetadata({ title: servicesPage.metaTitle, description: servicesPage.metaDescription, path: "/services" });
}

export default async function ServicesPage() {
  const { ui, servicesPage: t, services, locale } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <ul>
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 py-10 sm:py-12 lg:grid-cols-12 lg:gap-12"
                >
                  <span className="text-sm text-muted tabular-nums lg:col-span-1 lg:pt-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-subheading lg:col-span-4">{service.name}</h2>
                  <span className="lg:col-span-5">
                    <span className="block text-lg leading-relaxed">{service.card}</span>
                    <span className="mt-3 block text-sm text-muted">
                      {t.problemOf} <q>{service.problemQuotes[0]}</q>
                    </span>
                  </span>
                  <span className="flex items-start justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end">
                    <span className="text-sm text-muted">{servicePriceText(service.slug, locale, ui.price)}</span>
                    <ArrowIcon
                      size="md"
                      className="mt-1 text-muted group-hover:translate-x-1 group-hover:text-ink lg:mt-0"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
