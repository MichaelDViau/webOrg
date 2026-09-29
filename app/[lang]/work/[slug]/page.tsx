import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { DemoBadge } from "@/components/work/DemoBadge";
import { DemoCard } from "@/components/work/DemoCard";
import { DemoScreen } from "@/components/work/DemoScreen";
import { demoSlugs } from "@/lib/demos";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return demoSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = (await getContent()).demos.find((item) => item.slug === slug);
  if (!demo) return {};
  return pageMetadata({ title: demo.seoTitle, description: demo.metaDescription, path: `/work/${demo.slug}` });
}

/**
 * A concept demo: the problem, what it does, the screens, the technology, and what we would measure for
 * a client. The "Concept demo: not a client project" label is on the page and on every screen.
 */
export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const { ui, locale, demoPage: t, workPage, demos, industries, services } = await getContent();
  const demo = demos.find((item) => item.slug === slug);
  if (!demo) notFound();

  const path = localizePath(`/work/${demo.slug}`, locale);
  const industry = industries.find((item) => item.slug === demo.industry);
  const demoServices = demo.services.flatMap((service) => services.find((item) => item.slug === service) ?? []);
  const otherDemos = demos.filter((other) => other.slug !== demo.slug);

  return (
    <>
      <PageHeader title={demo.headline} lead={demo.lead}>
        <DemoBadge className="mt-8" />
      </PageHeader>

      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.problem}
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-ink" data-reveal>
            {demo.problem}
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.whatItDoes}
          </h2>
          <FeatureList items={demo.does} />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <h2 className="text-heading" data-reveal>
            {t.screens}
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
            {demo.screens.map((screen) => (
              <DemoScreen key={screen.title} screen={screen} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="text-heading">{t.measure}</h2>
            <CheckList items={demo.measure} className="mt-8 text-lg" />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9" data-reveal>
            <h2 className="text-lg font-semibold text-ink">{t.technology}</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {demo.stack.map((item) => (
                <li key={item} className="py-3">
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-lg font-semibold text-ink">{t.services}</h2>
            <ul className="mt-3 space-y-1">
              {demoServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block py-1 text-ink underline underline-offset-4 hover:no-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            {industry && (
              <>
                <h2 className="mt-8 text-lg font-semibold text-ink">{t.built}</h2>
                <p className="mt-3">
                  <Link href={`/industries/${industry.slug}`} className="text-ink underline underline-offset-4">
                    {industry.name}
                  </Link>
                </p>
              </>
            )}
          </aside>
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container>
          <aside className="max-w-2xl rounded border border-line bg-paper p-5">
            <h2 className="text-lg font-medium text-ink">{t.aboutThisDemo}</h2>
            <p className="mt-2 leading-relaxed">{demo.honestNote}</p>
          </aside>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-4 text-xl font-semibold text-ink">{t.otherDemos}</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {otherDemos.map((other) => (
              <li key={other.slug}>
                <DemoCard demo={other} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: workPage.eyebrow, path: localizePath("/work", locale) },
          { name: demo.name, path },
        ])}
      />
    </>
  );
}
