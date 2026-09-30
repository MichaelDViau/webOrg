import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { IntegrationVisual } from "@/components/visuals/HeroVisual";
import { getContent } from "@/lib/i18n/server";

/** Section 2: what we do, and how each kind of technology connects to a business outcome. */
export async function WhatWeDo() {
  const { home, ui } = await getContent();
  const t = home.whatWeDo;

  return (
    <Section tone="canvas" aria-labelledby="what-we-do">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro id="what-we-do" eyebrow={t.eyebrow} title={t.title} lead={t.body} />
          <div className="mt-10" data-reveal>
            <IntegrationVisual labels={ui.visuals} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="hidden grid-cols-[1fr_1.25rem_1.2fr] gap-4 border-b border-ink pb-3 text-sm font-medium text-muted sm:grid">
            <span>{t.engineerLabel}</span>
            <span />
            <span>{t.outcomeLabel}</span>
          </div>
          <ul>
            {t.outcomes.map((outcome) => (
              <li
                key={outcome.tech}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_1.25rem_1.2fr] sm:items-center sm:gap-4"
                data-reveal
              >
                <span className="text-lg font-semibold tracking-tight text-ink">{outcome.tech}</span>
                <ArrowIcon className="hidden text-accent sm:block" />
                <span className="text-lg leading-relaxed">{outcome.result}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
