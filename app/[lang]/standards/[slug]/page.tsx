import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { standardSlugs } from "@/lib/standards";
import { breadcrumbSchema } from "@/lib/structured-data";

interface StandardPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return standardSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StandardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const standard = (await getContent()).standards.find((item) => item.slug === slug);
  if (!standard) return {};
  return pageMetadata({ title: standard.seoTitle, description: standard.metaDescription, path: `/standards/${standard.slug}` });
}

export default async function StandardPage({ params }: StandardPageProps) {
  const { slug } = await params;
  const { ui, locale, standardPage: t, standards } = await getContent();
  const standard = standards.find((item) => item.slug === slug);
  if (!standard) notFound();

  const path = localizePath(`/standards/${standard.slug}`, locale);
  const others = standards.filter((other) => other.slug !== standard.slug);

  return (
    <>
      <PageHeader eyebrow={ui.nav.standards} title={standard.headline} lead={standard.lead} />

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.defaults}
          </h2>
          <FeatureList items={standard.defaults} />
        </Container>
      </Section>

      {standard.targets && (
        <Section tone="canvas">
          <Container className="space-y-8 sm:space-y-10">
            <div data-reveal>
              <h2 className="text-heading">{standard.targets.title}</h2>
            </div>
            <div data-reveal>
              <p className="max-w-2xl text-lg leading-relaxed">{standard.targets.intro}</p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {standard.targets.rows.map((row) => (
                  <div key={row.label} className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="font-medium text-ink sm:text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-muted">{standard.targets.note}</p>
            </div>
          </Container>
        </Section>
      )}

      <Section tone={standard.targets ? "paper" : "canvas"}>
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h2 className="text-subheading">{standard.wontPromiseTitle}</h2>
            <CheckList items={standard.wontPromise} className="mt-6 text-lg" />
          </div>
          <div data-reveal>
            <h2 className="text-subheading">{standard.verifyTitle}</h2>
            <CheckList items={standard.verify} className="mt-6 text-lg" />
          </div>
        </Container>
      </Section>

      <Section tone={standard.targets ? "canvas" : "paper"} padding="compact">
        <Container>
          <h2 className="text-sm font-medium text-muted">{t.otherStandards}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/standards/${other.slug}`}
                  className="group inline-flex items-center gap-1.5 py-1 text-lg text-ink hover:underline hover:underline-offset-4"
                >
                  {other.name}
                  <ArrowIcon className="group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: ui.nav.standards, path: localizePath("/standards", locale) },
          { name: standard.name, path },
        ])}
      />
    </>
  );
}
