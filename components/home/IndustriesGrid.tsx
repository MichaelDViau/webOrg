import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

/**
 * Section 7: industries where the capabilities apply, as ten tiles. These are not client claims.
 * Each tile takes three rows of the grid with `subgrid` (name, description, arrow), so descriptions and
 * arrows line up across a row whatever the language. The 1px grid gap draws the dividers: a tile spans the
 * gaps inside it, so they only show between tiles.
 */
export async function IndustriesGrid() {
  const { home, industries } = await getContent();
  const t = home.industries;

  return (
    <Section tone="canvas" aria-labelledby="industries">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro id="industries" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <ButtonLink href="/industries" variant="secondary" withArrow className="self-start lg:self-auto">
            {t.link}
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <li key={industry.slug} className="subgrid-rows-3 bg-paper" data-reveal>
              <Link
                href={`/industries#${industry.slug}`}
                className="group subgrid-rows-3 flex-1 p-5 transition-colors duration-200 hover:bg-canvas"
              >
                <span className="text-lg font-semibold tracking-tight text-ink">{industry.name}</span>
                <span className="mt-2 text-base leading-relaxed text-body">{industry.needs[0]}</span>
                <span className="mt-auto flex pt-4">
                  <ArrowIcon className="text-muted group-hover:translate-x-1 group-hover:text-ink" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
