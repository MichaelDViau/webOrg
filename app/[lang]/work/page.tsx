import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { pageMetadata } from "@/lib/metadata";
import { getContent } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({ title: ui.workPage.metaTitle, description: ui.workPage.metaDescription, path: "/work" });
}

export default async function WorkPage() {
  const { ui, projects } = await getContent();
  const t = ui.workPage;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <Section>
        <Container className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reverse={index % 2 === 1} headingLevel="h2" />
          ))}
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
