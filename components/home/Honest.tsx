import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

/** Block 7: honest about who we are. A new company, with demos and standards instead of a client list. */
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
            <p className="text-2xl leading-snug text-ink sm:text-3xl">{format(t.body, { year: site.foundedYear })}</p>
            <ButtonLink href="/work" variant="secondary" withArrow className="mt-8">
              {t.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
