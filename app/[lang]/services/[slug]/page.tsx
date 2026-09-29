import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { FaqList } from "@/components/ui/FaqList";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { DemoCard } from "@/components/work/DemoCard";
import { localizePath } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { servicePriceText } from "@/lib/pricing";
import { serviceSlugs } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = (await getContent()).services.find((item) => item.slug === slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

/**
 * A service page, in the guideline's order: the problem in the client's words, what changes, what's
 * included, how it works in phases, the "from" price, a related demo and the two buttons.
 */
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = await getContent();
  const { ui, locale, services, demos } = content;
  const t = ui.sections;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const path = localizePath(`/services/${service.slug}`, locale);
  const demo = demos.find((item) => item.slug === service.demo);
  const otherServices = services.filter((other) => other.slug !== service.slug);

  return (
    <>
      <PageHeader title={service.headline} lead={service.lead}>
        <p className="mt-6 text-base text-body">
          <span className="font-medium text-ink">{t.forWhom}:</span> {service.forWhom}
        </p>
        <CtaPair className="mt-8" />
      </PageHeader>

      {/* The problem, in the client's words */}
      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.problem}
          </h2>
          <div data-reveal>
            <ul className="space-y-3 text-xl leading-snug text-ink sm:text-2xl">
              {service.problemQuotes.map((quote) => (
                <li key={quote}>
                  <q>{quote}</q>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">{service.problemDetail}</p>
          </div>
        </Container>
      </Section>

      {/* What changes */}
      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.changes}
          </h2>
          <CheckList items={service.changes} className="text-lg" />
        </Container>
      </Section>

      {/* What's included */}
      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.included}
          </h2>
          <FeatureList items={service.included} />
        </Container>
      </Section>

      {/* How it works in phases, and the price */}
      <Section>
        <Container>
          <h2 className="text-heading" data-reveal>
            {t.phases}
          </h2>
          <ol className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.phases.map((phase, index) => (
              <li key={phase.title} data-reveal>
                <p className="text-base text-body">{format(t.phase, { number: index + 1 })}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{phase.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{phase.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-y border-line py-6" data-reveal>
            <h2 className="text-xl font-semibold text-ink">{t.price}</h2>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-ink">{servicePriceText(service.slug, locale, ui.price)}</p>
            <p className="mt-2 max-w-xl text-lg leading-relaxed">{ui.price.fixedPhases}</p>
          </div>
        </Container>
      </Section>

      {demo && (
        <Section tone="canvas" padding="compact">
          <Container>
            <h2 className="mb-4 text-xl font-semibold text-ink">{t.relatedDemo}</h2>
            <div className="max-w-2xl">
              <DemoCard demo={demo} />
            </div>
          </Container>
        </Section>
      )}

      <TrustStrip />

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading">{t.questions}</h2>
          <FaqList faqs={service.faqs} />
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container>
          <h2 className="text-xl font-semibold text-ink">{t.otherServices}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-block py-1 text-lg text-ink underline underline-offset-4 hover:no-underline"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={[
          serviceSchema(content, { name: service.name, description: service.metaDescription, path }),
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: ui.nav.services, path: localizePath("/services", locale) },
            { name: service.name, path },
          ]),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
