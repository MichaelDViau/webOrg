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
        <div className="max-w-3xl" data-reveal>
          <h2 id="honest" className="text-heading">
            {t.eyebrow}
          </h2>
          <p className="mt-4 text-xl leading-relaxed">{format(t.body, { year: site.foundedYear })}</p>
          <ButtonLink href="/work" variant="secondary" className="mt-6">
            {t.cta}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
