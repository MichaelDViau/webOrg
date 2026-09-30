import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { howWeWork } = await getContent();
  return pageMetadata({ title: howWeWork.metaTitle, description: howWeWork.metaDescription, path: "/how-we-work" });
}

/** How we work: five flexible steps, the principles behind them, who owns what, and answers for technical reviewers. */
export default async function HowWeWorkPage() {
  const { ui, locale, howWeWork: t } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <h2 className="sr-only">{t.stepsTitle}</h2>
          <ol className="divide-y divide-line border-b border-line">
            {t.steps.map((step, index) => (
              <li key={step.title} className="grid gap-4 py-10 lg:grid-cols-12 lg:gap-12 lg:py-12" data-reveal>
                <span className="text-sm text-muted tabular-nums lg:col-span-1 lg:pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="text-subheading">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed">{step.detail}</p>
                </div>
                <ul className="space-y-2 text-lg lg:col-span-4">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="lg:col-span-3">
                  <p className="text-sm font-medium text-muted">{t.youGet}</p>
                  <p className="mt-2 text-lg leading-relaxed text-ink">{step.youGet}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="text-heading">{t.flexibleTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed">{t.flexibleBody}</p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-base font-semibold text-ink">{t.principlesTitle}</h3>
            <FeatureList items={t.principles} className="mt-4" />
          </div>
        </Container>
      </Section>

      <Section tone="night">
        <Container className="space-y-8 sm:space-y-10">
          <div data-reveal>
            <h2 className="text-heading text-paper">{t.ownershipTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-night-muted">{t.ownershipLead}</p>
          </div>
          <FeatureList items={t.ownership} tone="dark" />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <div data-reveal>
            <h2 className="text-heading">{t.reviewerTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed">{t.reviewerLead}</p>
            <TextLink href="/standards" className="mt-6">
              {t.standardsLink}
            </TextLink>
          </div>
          <FaqList faqs={t.reviewerFaqs} />
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-subheading">{t.neededTitle}</h2>
          <CheckList items={t.needed} className="text-lg" />
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: t.eyebrow, path: localizePath("/how-we-work", locale) },
          ]),
          faqSchema(t.reviewerFaqs),
        ]}
      />
    </>
  );
}
