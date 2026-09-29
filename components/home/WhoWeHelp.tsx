import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

/** Block 5: who we help. One card per industry, with their problems in their own words. */
export async function WhoWeHelp() {
  const { home, industries } = await getContent();
  const t = home.whoWeHelp;

  return (
    <Section aria-labelledby="who-we-help">
      <Container>
        <SectionIntro id="who-we-help" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug} className="flex flex-col border-t-2 border-ink pt-6" data-reveal>
              <h3 className="text-xl font-semibold tracking-tight">{industry.name}</h3>
              <ul className="mt-4 space-y-3">
                {industry.homeProblems.map((problem) => (
                  <li key={problem} className="border-l-2 border-line-strong pl-4 text-lg leading-relaxed">
                    <q>{problem}</q>
                  </li>
                ))}
              </ul>
              <Link
                href={`/industries/${industry.slug}`}
                className="group mt-auto inline-flex items-center gap-1.5 self-start pt-6 font-medium text-ink hover:underline hover:underline-offset-4"
              >
                {t.linkLabel}
                <span className="sr-only">: {industry.name}</span>
                <ArrowIcon className="group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
