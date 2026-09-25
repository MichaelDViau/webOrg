import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureList } from "@/components/ui/FeatureList";
import { getContent } from "@/lib/i18n/server";

export async function WebApplications() {
  const { ui } = await getContent();
  const t = ui.home.webApplications;

  return (
    <Section tone="night">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              tone="dark"
              eyebrow={t.eyebrow}
              title={t.title}
              lead={t.lead}
            />
            <TextLink href="/services/web-applications" tone="light" className="mt-10">
              {t.link}
            </TextLink>
          </div>

          <FeatureList items={t.types} tone="dark" className="self-start lg:col-span-7" />
        </div>
      </Container>
    </Section>
  );
}
