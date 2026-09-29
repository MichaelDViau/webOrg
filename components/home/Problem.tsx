import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

/** Block 2: the problem, in the buyer's own words. */
export async function Problem() {
  const { home } = await getContent();
  const t = home.problem;

  return (
    <Section tone="canvas" aria-labelledby="problem">
      <Container>
        <SectionIntro id="problem" eyebrow={t.eyebrow} title={t.title} />
        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 lg:grid-cols-3">
          {t.items.map((item) => (
            <li key={item} className="border-t-2 border-ink pt-6 text-xl leading-snug text-ink" data-reveal>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
