import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="divide-y divide-line border-b border-line">
            {services.map((service) => (
              <li key={service.slug} data-reveal>
                <Link href={`/services/${service.slug}`} className="group grid gap-x-8 gap-y-1 py-6 lg:grid-cols-12">
                  <h2 className="text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline lg:col-span-4">
                    {service.name}
                  </h2>
                  <span className="text-lg leading-relaxed text-body lg:col-span-6">{service.card}</span>
                  <span className="text-base text-body lg:col-span-2 lg:text-right">
                    {servicePriceText(service.slug, locale, ui.price)}
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
