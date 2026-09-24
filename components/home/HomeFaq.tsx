import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/services/FaqList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";
import { faqSchema } from "@/lib/structured-data";

export async function HomeFaq() {
  const { ui, company } = await getContent();
  const t = ui.home.faq;

  return (
    <Section tone="canvas" aria-labelledby="faq">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <SectionIntro
          id="faq"
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
          className="lg:col-span-4"
        />
        <FaqList faqs={company.homeFaqs} className="lg:col-span-8" />
      </Container>
      <JsonLd data={faqSchema(company.homeFaqs)} />
    </Section>
  );
}
