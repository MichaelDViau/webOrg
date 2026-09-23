import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/services/FaqList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { homeFaqs } from "@/lib/company";
import { faqSchema } from "@/lib/structured-data";

export function HomeFaq() {
  return (
    <Section tone="canvas" aria-labelledby="faq">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <SectionIntro
          id="faq"
          eyebrow="FAQ"
          title="Frequently asked questions"
          lead="The questions business owners ask us most often. Anything else, just ask on a call."
          className="lg:col-span-4"
        />
        <FaqList faqs={homeFaqs} className="lg:col-span-8" />
      </Container>
      <JsonLd data={faqSchema(homeFaqs)} />
    </Section>
  );
}
