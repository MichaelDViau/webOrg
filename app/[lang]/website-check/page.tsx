import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { WebsiteCheckForm } from "@/components/tools/WebsiteCheckForm";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

/** PageSpeed Insights can take up to a minute on slow sites. */
export const maxDuration = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.websiteCheckPage.metaTitle,
    description: ui.websiteCheckPage.metaDescription,
    path: "/website-check",
  });
}

export default async function WebsiteCheckPage() {
  const { ui, locale } = await getContent();
  const t = ui.websiteCheckPage;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        eyebrowIsHeading
        title={t.title}
        lead={t.lead}
      />

      <Section padding="no-bottom">
        <Container>
          <WebsiteCheckForm locale={locale} labels={ui.websiteCheck} />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-subheading">{t.whyTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed">
              {t.whyBody}
            </p>
          </div>
          <CheckList
            className="lg:col-span-7"
            items={t.points}
          />
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: t.eyebrow, path: localizePath("/website-check", locale) },
        ])}
      />
    </>
  );
}
