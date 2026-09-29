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
        <SectionIntro id="problem" title={t.title} />
        <ul className="mt-10 grid gap-x-10 gap-y-6 lg:grid-cols-3">
          {t.items.map((item) => (
            <li key={item} className="text-xl leading-snug text-ink" data-reveal>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
