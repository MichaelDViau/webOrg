import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

export async function WhoWeHelp() {
  const { ui, company } = await getContent();
  const t = ui.home.whoWeHelp;

  return (
    <Section tone="canvas" aria-labelledby="who-we-help">
      <Container>
        <SectionIntro
          id="who-we-help"
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
        />

        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {company.audiences.map((audience) => (
            <li key={audience.title} className="border-t-2 border-ink pt-6" data-reveal>
              <h3 className="text-xl font-semibold tracking-tight">{audience.title}</h3>
              <p className="mt-3 leading-relaxed">{audience.detail}</p>
              <p className="mt-4 text-sm text-muted">{audience.examples}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
