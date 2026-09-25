import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";
import { findProject } from "@/lib/projects";

export async function WebDevelopment() {
  const { ui, projects } = await getContent();
  const t = ui.home.webDevelopment;
  const project = findProject(projects, "meridian-health-website");

  return (
    <Section tone="canvas">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionIntro
            eyebrow={t.eyebrow}
            title={t.title}
            lead={t.lead}
          />
          <CheckList
            className="mt-8"
            items={t.points}
          />
          <TextLink href="/services/website-development" className="mt-10">
            {t.link}
          </TextLink>
        </div>

        {project && (
          <figure data-reveal>
            <div className="overflow-hidden rounded-lg border border-line bg-paper">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1024px) 600px, calc(100vw - 40px)"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">{project.client}</figcaption>
          </figure>
        )}
      </Container>
    </Section>
  );
}
