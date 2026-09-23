import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { projects } from "@/lib/projects";

/** The Meridian website already appears in the hero and the Web Development section. */
const featuredProjects = projects.filter((project) => project.slug !== "meridian-health-website");

export function SelectedWork() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Selected work"
            title="Recent projects and what they changed."
            lead="A few examples of the websites, applications and systems we've built, and the results our clients measured afterward."
          />
          <ButtonLink href="/work" variant="secondary" withArrow className="self-start lg:self-auto">
            All work
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
