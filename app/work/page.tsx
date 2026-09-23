import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies: Websites, Web Apps and AI Projects",
  description:
    "Case studies covering website development, custom web applications, AI solutions and performance optimization, with the results each client measured.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects measured by what they changed."
        lead="Each case study covers the problem we were asked to solve, how we approached it and the results the client measured afterward."
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
