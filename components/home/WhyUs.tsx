import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureList } from "@/components/ui/FeatureList";
import { getContent } from "@/lib/i18n/server";

export async function WhyUs() {
  const { ui, company } = await getContent();
  const t = ui.home.whyUs;

  return (
    <Section tone="night">
      <Container>
        <p className="text-sm font-medium text-accent-light" data-reveal>
          {t.eyebrow}
        </p>
        <h2
          className="mt-6 max-w-5xl text-heading text-paper"
          data-reveal
        >
          {t.title}
        </h2>

        <FeatureList items={company.principles} tone="dark" className="mt-16 lg:mt-20" />
      </Container>
    </Section>
  );
}
