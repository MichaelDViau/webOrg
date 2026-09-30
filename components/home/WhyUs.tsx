import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { getContent } from "@/lib/i18n/server";

/** Section 6: why work with a comprehensive technology partner. Eight reasons, none of them a statistic. */
export async function WhyUs() {
  const { home } = await getContent();
  const t = home.whyUs;

  return (
    <Section tone="night" aria-labelledby="why-us">
      <Container>
        <p className="text-sm font-medium text-accent-light" data-reveal>
          {t.eyebrow}
        </p>
        <h2 id="why-us" className="mt-4 max-w-4xl text-heading text-paper" data-reveal>
          {t.title}
        </h2>

        <FeatureList items={t.items} tone="dark" className="mt-12 lg:mt-14" />
        <TextLink href="/standards" tone="light" className="mt-10">
          {t.standardsLink}
        </TextLink>
      </Container>
    </Section>
  );
}
