import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getProject } from "@/lib/projects";

export function WebDevelopment() {
  const project = getProject("meridian-health-website");

  return (
    <Section tone="canvas">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionIntro
            eyebrow="Web Development"
            title="Websites built to explain, persuade and load instantly."
            lead="We plan the content before the design, design every breakpoint on purpose, and build on modern frameworks your team can maintain. The result is a site that earns trust quickly and is easy to keep up to date."
          />
          <CheckList
            className="mt-8"
            items={[
              "Content strategy and site structure",
              "Custom design, built from scratch",
              "A CMS configured for your editors",
              "Accessibility and SEO built in from the start",
            ]}
          />
          <TextLink href="/services/website-development" className="mt-10">
            Website development
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
