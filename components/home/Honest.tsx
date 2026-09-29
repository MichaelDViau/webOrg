import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";

/** Block 7: see it for yourself. Working demos and published standards, so a visitor can check the work. */
export async function Honest() {
  const { home } = await getContent();
  const t = home.honest;

  return (
    <Section aria-labelledby="honest">
      <Container>
        <div className="grid gap-10 rounded-lg border border-line bg-canvas p-8 sm:p-12 lg:grid-cols-12 lg:items-baseline lg:gap-16" data-reveal>
          <div className="lg:col-span-4">
            <h2 id="honest" className="text-sm font-medium text-accent-strong">
              {t.eyebrow}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl leading-snug text-ink sm:text-3xl">{t.body}</p>
            <ButtonLink href="/work" variant="secondary" withArrow className="mt-8">
              {t.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
