import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TechGroupList } from "@/components/ui/TechGroupList";
import { techStack } from "@/lib/technology";

export function TechStack() {
  return (
    <Section tone="night" aria-labelledby="technology">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            tone="dark"
            id="technology"
            eyebrow="Technology"
            title="The technology we use, explained in plain English."
            lead="You don't need to know what any of these names mean. We choose established, well-supported tools so your project is fast, secure and easy to maintain, and any good developer can work on it later. For technical teams, here is what we use most."
          />
          <ButtonLink href="/technology" variant="inverse" withArrow className="self-start lg:self-auto">
            Full technology stack
          </ButtonLink>
        </div>

        <TechGroupList groups={techStack} tone="dark" className="mt-14 sm:mt-16" />
      </Container>
    </Section>
  );
}
