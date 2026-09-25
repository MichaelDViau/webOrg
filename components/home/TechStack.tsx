import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TechGroupList } from "@/components/ui/TechGroupList";
import { getContent } from "@/lib/i18n/server";

export async function TechStack() {
  const { ui, technology } = await getContent();
  const t = ui.home.techStack;

  return (
    <Section tone="night" aria-labelledby="technology">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            tone="dark"
            id="technology"
            eyebrow={t.eyebrow}
            title={t.title}
            lead={t.lead}
          />
          <ButtonLink href="/technology" variant="inverse" withArrow className="self-start lg:self-auto">
            {t.cta}
          </ButtonLink>
        </div>

        <TechGroupList groups={technology.techStack} tone="dark" className="mt-14 sm:mt-16" />
      </Container>
    </Section>
  );
}
