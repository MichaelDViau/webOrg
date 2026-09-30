import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CapabilityIcon } from "@/components/visuals/CapabilityIcon";
import { localizePath } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const { servicesPage } = await getContent();
  return pageMetadata({ title: servicesPage.metaTitle, description: servicesPage.metaDescription, path: "/services" });
}

/** All nine capability categories, each with what it covers and a link to its page. */
export default async function ServicesPage() {
  const { ui, servicesPage: t, services, locale } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <ul>
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="group relative grid gap-4 border-b border-line py-10 first:pt-0 sm:py-12 lg:grid-cols-12 lg:gap-10"
                data-reveal
              >
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span className="pt-1 text-sm text-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <CapabilityIcon slug={service.slug} className="size-8 shrink-0 text-accent-strong" />
                  <h2 className="text-subheading">
                    <Link
                      href={`/services/${service.slug}`}
                      className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:underline-offset-4"
                    >
                      {service.name}
                    </Link>
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-lg leading-relaxed">{service.card}</p>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {service.capabilities.slice(0, 4).join(" · ")}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end lg:justify-start">
                  <span className="text-sm text-muted">
                    {format(t.capabilityCount, { count: service.capabilities.length })}
                  </span>
                  <ArrowIcon size="md" className="text-muted group-hover:translate-x-1 group-hover:text-ink" />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: ui.nav.services, path: localizePath("/services", locale) },
        ])}
      />
    </>
  );
}
