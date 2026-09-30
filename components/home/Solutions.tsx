import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CapabilityIcon } from "@/components/visuals/CapabilityIcon";
import { getContent } from "@/lib/i18n/server";
import { solutionServices } from "@/lib/site";

/**
 * Section 5: the technical challenges businesses bring us, each pointing at the capability that answers it.
 * Each item takes four rows of the grid with `subgrid` (icon, question, answer, arrow), so the answers line up
 * across a row even when one question wraps to a second line.
 */
export async function Solutions() {
  const { home } = await getContent();
  const t = home.solutions;

  return (
    <Section aria-labelledby="solutions">
      <Container>
        <SectionIntro id="solutions" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <ul className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <li key={item.question} className="subgrid-rows-4 border-t border-line" data-reveal>
              <Link
                href={`/services/${solutionServices[index]}`}
                className="group subgrid-rows-4 flex-1 py-6"
              >
                <CapabilityIcon slug={solutionServices[index]} className="size-7 text-accent-strong" />
                <span className="mt-4 text-lg font-semibold tracking-tight text-ink group-hover:underline group-hover:underline-offset-4">
                  {item.question}
                </span>
                <span className="mt-2 text-base leading-relaxed">{item.answer}</span>
                <span className="mt-auto flex pt-3">
                  <ArrowIcon className="text-muted group-hover:translate-x-1 group-hover:text-ink" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body" data-reveal>
          {t.note}
        </p>
      </Container>
    </Section>
  );
}
