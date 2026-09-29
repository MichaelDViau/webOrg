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
        <SectionIntro id="what-we-do" title={t.title} />
        <ul className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-3">
          {t.steps.map((step) => (
            <li key={step.title} data-reveal>
              <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-lg leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
