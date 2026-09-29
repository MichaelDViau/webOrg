import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

/** Block 3: what we do, in three words. */
export async function WhatWeDo() {
  const { home } = await getContent();
  const t = home.whatWeDo;

  return (
    <Section aria-labelledby="what-we-do">
      <Container>
        <SectionIntro id="what-we-do" eyebrow={t.eyebrow} title={t.title} />
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 lg:grid-cols-3">
          {t.steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-6" data-reveal>
              <span className="text-sm text-muted tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-subheading">{step.title}</h3>
              <p className="mt-3 text-lg leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
