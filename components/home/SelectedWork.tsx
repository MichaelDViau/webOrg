import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { getContent } from "@/lib/i18n/server";

export async function SelectedWork() {
  const { ui, projects } = await getContent();
  const t = ui.home.selectedWork;
  // The Meridian website already appears in the hero and the Web Development section.
  const featuredProjects = projects.filter((project) => project.slug !== "meridian-health-website");

  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow={t.eyebrow}
            title={t.title}
            lead={t.lead}
          />
          <ButtonLink href="/work" variant="secondary" withArrow className="self-start lg:self-auto">
            {t.allWork}
          </ButtonLink>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {featuredProjects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
