import Link from "@/components/i18n/Link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

/** Block 5: who we help. One column per industry, with their problems in their own words. */
export async function WhoWeHelp() {
  const { home, industries } = await getContent();
  const t = home.whoWeHelp;

  return (
    <Section aria-labelledby="who-we-help">
      <Container>
        <SectionIntro id="who-we-help" title={t.title} lead={t.lead} />

        <ul className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug} className="flex flex-col" data-reveal>
              <h3 className="text-xl font-semibold tracking-tight">{industry.name}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed marker:text-ink">
                {industry.homeProblems.map((problem) => (
                  <li key={problem} className="pl-1">
                    {problem}
                  </li>
                ))}
              </ul>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-5 inline-block self-start text-ink underline underline-offset-4 hover:no-underline"
              >
                {t.linkLabel}
                <span className="sr-only">: {industry.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
