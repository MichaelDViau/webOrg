import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { FaqList } from "@/components/ui/FaqList";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { DemoCard } from "@/components/work/DemoCard";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { industrySlugs } from "@/lib/industries";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = (await getContent()).industries.find((item) => item.slug === slug);
  if (!industry) return {};

  return pageMetadata({
    title: industry.seoTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

/**
 * An industry page proves we understand their world: their daily problems in their vocabulary, the
 * systems we build for them, the software they use, the relevant demo and the two buttons.
 */
export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const content = await getContent();
  const { ui, locale, industries, services, demos } = content;
  const t = ui.sections;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  const path = localizePath(`/industries/${industry.slug}`, locale);
  const demo = demos.find((item) => item.slug === industry.demo);
  const relatedServices = industry.services.flatMap((service) => services.find((item) => item.slug === service) ?? []);
  const otherIndustries = industries.filter((other) => other.slug !== industry.slug);

  return (
    <>
      <PageHeader eyebrow={ui.nav.industries} title={industry.headline} lead={industry.lead}>
        <CtaPair className="mt-10" />
      </PageHeader>

      <Section tone="canvas">
        <Container>
          <h2 className="text-heading" data-reveal>
            {t.inTheirWords}
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {industry.problems.map((problem) => (
              <li key={problem.quote} className="border-l-2 border-ink pl-5" data-reveal>
                <p className="text-xl leading-snug text-ink">
                  <q>{problem.quote}</q>
                </p>
                <p className="mt-3 text-lg leading-relaxed text-body">{problem.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.systemsWeBuild}
          </h2>
          <FeatureList items={industry.systems} />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <div data-reveal>
            <h2 className="text-heading">{t.softwareWeConnect}</h2>
          </div>
          <div data-reveal>
            <p className="max-w-2xl text-lg leading-relaxed">{industry.softwareIntro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {industry.software.map((name) => (
                <li key={name} className="rounded-sm border border-line-strong bg-paper px-3 py-1.5 text-base text-ink">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {demo && (
        <Section>
          <Container>
            <h2 className="mb-6 text-sm font-medium text-muted">{t.theDemo}</h2>
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
          <FaqList faqs={industry.faqs} />
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium text-muted">{t.relatedServices}</h2>
            <ul className="mt-4 space-y-1">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 py-1 text-lg text-ink hover:underline hover:underline-offset-4"
                  >
                    {service.name}
                    <ArrowIcon className="group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-medium text-muted">{t.otherIndustries}</h2>
            <ul className="mt-4 space-y-1">
              {otherIndustries.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/industries/${other.slug}`}
                    className="group inline-flex items-center gap-1.5 py-1 text-lg text-ink hover:underline hover:underline-offset-4"
                  >
                    {other.name}
                    <ArrowIcon className="group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={[
          serviceSchema(content, { name: industry.name, description: industry.metaDescription, path }),
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: ui.nav.industries, path: localizePath("/industries", locale) },
            { name: industry.name, path },
          ]),
          faqSchema(industry.faqs),
        ]}
      />
    </>
  );
}
