import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { getContent } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.servicesPage.metaTitle,
    description: ui.servicesPage.metaDescription,
    path: "/services",
  });
}

export default async function ServicesPage() {
  const { ui, services } = await getContent();
  const t = ui.servicesPage;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <Section padding="no-top">
        <Container>
          <ul>
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 py-10 sm:py-12 lg:grid-cols-12 lg:gap-16"
                >
                  <span className="text-sm text-muted tabular-nums lg:col-span-1 lg:pt-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-subheading lg:col-span-4">{service.name}</h2>
                  <span className="lg:col-span-6">
                    <span className="block text-lg leading-relaxed">{service.summary}</span>
                    <span className="mt-3 block text-sm text-muted">
                      {service.included
                        .slice(0, 4)
                        .map((item) => item.title)
                        .join(" · ")}
                    </span>
                  </span>
                  <ArrowIcon
                    size="md"
                    className="hidden text-muted group-hover:translate-x-1 group-hover:text-ink lg:col-span-1 lg:mt-2 lg:block lg:justify-self-end" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta
        title={t.ctaTitle}
        lead={t.ctaLead}
      />
    </>
  );
}
