import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { SystemMap } from "@/components/illustrations/SystemMap";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { audit as auditPricing, auditPriceText } from "@/lib/pricing";
import { bookingUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { audit } = await getContent();
  return pageMetadata({ title: audit.metaTitle, description: audit.metaDescription, path: "/audit" });
}

/**
 * The Digital Systems Audit page, the site's main conversion page. It has to contain what we review, what
 * you receive, timing, price, the credit and the booking form.
 */
export default async function AuditPage() {
  const { ui, locale, audit: t, home } = await getContent();
  const price = auditPriceText(locale, ui.price);
  const days = auditPricing.creditDays;
  const faqs = t.faqs.map((faq) => ({ ...faq, answer: format(faq.answer, { price, days }) }));

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} eyebrowIsHeading title={t.title} lead={t.lead}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#book" withArrow>
            {ui.cta.audit}
          </ButtonLink>
          <ButtonLink href="/snapshot" variant="secondary">
            {ui.cta.snapshot}
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Price and the credit */}
      <Section tone="canvas" padding="compact">
        <Container className="grid gap-8 py-4 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="text-sm font-medium text-muted">{t.priceTitle}</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {format(t.priceLabel, { price })}
            </p>
            <p className="mt-3 leading-relaxed">{t.priceDetail}</p>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <h2 className="text-sm font-medium text-muted">{t.creditTitle}</h2>
            <p className="mt-2 max-w-xl text-2xl leading-snug text-ink">{format(t.creditBody, { days })}</p>
          </div>
        </Container>
      </Section>

      {/* What we review */}
      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.reviewTitle}
          </h2>
          <FeatureList items={t.review} />
        </Container>
      </Section>

      {/* What you receive */}
      <Section tone="canvas">
        <Container>
          <h2 className="text-heading" data-reveal>
            {t.receiveTitle}
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-10 lg:grid-cols-3">
            {t.receive.map((item, index) => (
              <li key={item.title} className="border-t-2 border-ink pt-6" data-reveal>
                <span className="text-sm text-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <SystemMap map={{ ...home.hero.map, caption: t.mapCaption }} />
          </div>
        </Container>
      </Section>

      {/* Timing and how it works */}
      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <div data-reveal>
            <h2 className="text-heading">{t.timingTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed">{t.timingBody}</p>
          </div>
          <div data-reveal>
            <h2 className="text-subheading">{t.stepsTitle}</h2>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {t.steps.map((step, index) => (
                <li key={step.title} className="grid gap-1 py-5 sm:grid-cols-12 sm:gap-6">
                  <span className="text-sm text-muted tabular-nums sm:col-span-1 sm:pt-1">{index + 1}</span>
                  <span className="font-medium text-ink sm:col-span-5">{step.title}</span>
                  <span className="leading-relaxed sm:col-span-6">{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* The booking form */}
      <Section tone="canvas" id="book" aria-labelledby="book-heading">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="book-heading" className="text-heading">
              {t.formTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed">{t.formLead}</p>
            <p className="mt-6 text-sm text-muted">{ui.site.hours}</p>
          </div>
          <div className="lg:col-span-8">
            <div className="rounded-lg border border-line bg-paper p-6 sm:p-10">
              <LeadForm
                locale={locale}
                intent="audit"
                labels={ui.leadForm}
                errorText={ui.leadErrors}
                hours={ui.site.hours}
                canBook={Boolean(bookingUrl)}
              />
            </div>
            {bookingUrl && (
              <p className="mt-4 text-sm text-muted">
                {t.bookLabel}:{" "}
                <a href={localizePath("/book", locale)} className="text-ink underline underline-offset-4">
                  {ui.contactPage.bookCall}
                </a>
              </p>
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading">{t.faqTitle}</h2>
          <FaqList faqs={faqs} />
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-subheading">{t.smallerTitle}</h2>
            <p className="mt-2 max-w-xl leading-relaxed">{t.smallerBody}</p>
          </div>
          <ButtonLink href="/snapshot" variant="secondary" withArrow className="shrink-0">
            {ui.cta.snapshot}
          </ButtonLink>
        </Container>
      </Section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: localizePath("/", locale) },
            { name: t.eyebrow, path: localizePath("/audit", locale) },
          ]),
          faqSchema(faqs),
        ]}
      />
    </>
  );
}
