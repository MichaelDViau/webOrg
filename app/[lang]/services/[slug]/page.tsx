import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import { CapabilityIcon } from "@/components/visuals/CapabilityIcon";
import { CategoryVisual } from "@/components/visuals/CategoryVisual";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { serviceSlugs, type ServiceSlug } from "@/lib/services";
import { auditHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

/** The two categories where a fixed-scope technical assessment is a natural first step. */
const assessmentSlugs: ServiceSlug[] = ["digital-transformation", "technology-consulting"];

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
 * One capability category: what it is, an illustration, every capability in it, the challenges it answers,
 * how we approach it, common questions and related categories.
 */
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const content = await getContent();
  const { ui, locale, services, servicesPage: t } = content;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const path = localizePath(`/services/${service.slug}`, locale);
  const related = service.related.flatMap((relatedSlug) => services.find((item) => item.slug === relatedSlug) ?? []);

  return (
    <>
      <section className="border-b border-line py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 text-sm font-medium text-accent-strong">
              <CapabilityIcon slug={service.slug} className="size-6" />
              <Link href="/services" className="hover:underline hover:underline-offset-4">
                {ui.nav.services}
              </Link>
            </p>
            <h1 className="mt-4 max-w-2xl text-title text-balance text-ink">{service.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">{service.lead}</p>
            <CtaPair className="mt-8" />
          </div>
          <div className="lg:col-span-6">
            <CategoryVisual slug={service.slug} labels={ui.visuals} />
          </div>
        </Container>
      </section>

      <Section tone="canvas" aria-labelledby="capabilities">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 id="capabilities" className="text-heading">
              {t.capabilitiesTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed">{service.overview}</p>
          </div>
          <CheckList items={service.capabilities} className="text-lg lg:col-span-7" />
        </Container>
      </Section>

      <Section aria-labelledby="challenges">
        <Container className="space-y-8 sm:space-y-10">
          <h2 id="challenges" className="text-heading" data-reveal>
            {t.challengesTitle}
          </h2>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.challenges.map((challenge) => (
              <li key={challenge} className="border-t-2 border-ink pt-5 text-lg leading-relaxed text-ink" data-reveal>
                {challenge}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="night" aria-labelledby="approach">
        <Container className="space-y-10 sm:space-y-12">
          <h2 id="approach" className="text-heading text-paper" data-reveal>
            {t.approachTitle}
          </h2>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {service.approach.map((step, index) => (
              <li key={step.title} className="border-t border-night-line pt-6" data-reveal>
                <span className="text-sm text-night-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-paper">{step.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-night-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="questions">
        <Container className="space-y-8 sm:space-y-10">
          <h2 id="questions" className="text-heading" data-reveal>
            {t.faqTitle}
          </h2>
          <FaqList faqs={service.faqs} />
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-base font-semibold text-ink">{t.relatedTitle}</h2>
            <ul className="mt-4 space-y-1">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group inline-flex items-center gap-2 py-1 text-lg text-ink hover:underline hover:underline-offset-4"
                  >
                    {other.name}
                    <ArrowIcon className="group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <TextLink href="/services" className="mt-4">
              {t.allServices}
            </TextLink>
          </div>
          {assessmentSlugs.includes(service.slug) && (
            <div className="lg:col-span-6">
              <h2 className="text-base font-semibold text-ink">{t.assessmentTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed">{t.assessmentBody}</p>
              <TextLink href={auditHref} className="mt-4">
                {t.assessmentLink}
              </TextLink>
            </div>
          )}
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
