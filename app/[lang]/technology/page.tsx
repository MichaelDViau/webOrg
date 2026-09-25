import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TechGroupList } from "@/components/ui/TechGroupList";
import { localizePath } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.technologyPage.metaTitle,
    description: ui.technologyPage.metaDescription,
    path: "/technology",
  });
}

export default async function TechnologyPage() {
  const { ui, locale, technology } = await getContent();
  const t = ui.technologyPage;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        eyebrowIsHeading
        title={t.title}
        lead={t.lead}
      />

      {/* Web and software */}
      <Section aria-labelledby="web-stack">
        <Container>
          <SectionIntro
            id="web-stack"
            eyebrow={t.web.eyebrow}
            title={t.web.title}
            lead={t.web.lead}
          />
          <TechGroupList groups={technology.webCatalog} className="mt-14 sm:mt-16" />
        </Container>
      </Section>

      {/* Artificial intelligence */}
      <Section tone="night" aria-labelledby="ai-stack">
        <Container>
          <SectionIntro
            tone="dark"
            id="ai-stack"
            eyebrow={t.ai.eyebrow}
            title={t.ai.title}
            lead={t.ai.lead}
          />
          <TechGroupList groups={technology.aiCatalog} tone="dark" className="mt-14 sm:mt-16" />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-subheading" data-reveal>
              {t.unsureTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed" data-reveal>
              {t.unsureBody}
            </p>
          </div>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: ui.breadcrumbHome, path: localizePath("/", locale) },
          { name: ui.nav.technology, path: localizePath("/technology", locale) },
        ])}
      />
    </>
  );
}
