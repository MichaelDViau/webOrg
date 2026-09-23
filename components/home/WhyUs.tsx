import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FeatureList } from "@/components/ui/FeatureList";
import { principles } from "@/lib/company";

export function WhyUs() {
  return (
    <Section tone="night">
      <Container>
        <p className="text-sm font-medium text-accent-light" data-reveal>
          Why work with us
        </p>
        <h2
          className="mt-6 max-w-5xl text-heading text-paper"
          data-reveal
        >
          We don&apos;t build technology simply because we can. We build it because it solves a problem.
        </h2>

        <FeatureList items={principles} tone="dark" className="mt-16 lg:mt-20" />
      </Container>
    </Section>
  );
}
