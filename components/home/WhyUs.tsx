import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { getContent } from "@/lib/i18n/server";

/** Block 6: why work with us. Five reasons that don't depend on a client list. */
export async function WhyUs() {
  const { home } = await getContent();
  const t = home.whyUs;

  return (
    <Section tone="night">
      <Container>
        <h2 className="text-heading text-paper" data-reveal>
          {t.eyebrow}
        </h2>

        <FeatureList items={t.items} tone="dark" className="mt-8" />
        <TextLink href="/standards" tone="light" className="mt-8 inline-block text-lg">
          {t.standardsLink}
        </TextLink>
      </Container>
    </Section>
  );
}
