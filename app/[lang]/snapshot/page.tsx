import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { bookingUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { snapshot } = await getContent();
  return pageMetadata({ title: snapshot.metaTitle, description: snapshot.metaDescription, path: "/snapshot" });
}

/** The free Snapshot: the low-commitment second action. Three specific observations on the visitor's site. */
export default async function SnapshotPage() {
  const { ui, locale, snapshot: t } = await getContent();

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-subheading">{t.whatTitle}</h2>
            <CheckList items={t.what} className="mt-6 text-lg" />

            <h2 className="mt-12 text-subheading">{t.howTitle}</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {t.how.map((step, index) => (
                <li key={step} className="flex gap-4 py-4 leading-relaxed">
                  <span className="text-body tabular-nums">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded border border-line p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">{t.formTitle}</h2>
              <p className="mt-2 mb-8 text-lg text-body">{t.formLead}</p>
              <LeadForm
                locale={locale}
                intent="snapshot"
                labels={ui.leadForm}
                errorText={ui.leadErrors}
                hours={ui.site.hours}
                canBook={Boolean(bookingUrl)}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="canvas" padding="compact">
        <Container className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-subheading">{t.instantTitle}</h2>
            <p className="mt-2 leading-relaxed">{t.instantBody}</p>
            <ButtonLink href="/website-check" variant="secondary" className="mt-5">
              {t.instantLink}
            </ButtonLink>
          </div>
          <div>
            <h2 className="text-subheading">{t.auditTitle}</h2>
            <p className="mt-2 leading-relaxed">{t.auditBody}</p>
            <ButtonLink href="/audit" className="mt-5">
              {ui.cta.auditLong}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: t.eyebrow, path: localizePath("/snapshot", locale) },
        ])}
      />
    </>
  );
}
