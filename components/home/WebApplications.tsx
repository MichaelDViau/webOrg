import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FeatureList } from "@/components/ui/FeatureList";
import type { ContentItem } from "@/lib/company";

const applicationTypes: ContentItem[] = [
  {
    title: "Customer portals",
    detail: "Self-service accounts, orders, documents and billing for your customers.",
  },
  {
    title: "Internal tools",
    detail: "Replacements for the spreadsheets and email threads your operations depend on.",
  },
  {
    title: "Dashboards and reporting",
    detail: "One reliable view of data that currently lives in several systems.",
  },
  {
    title: "Platforms and SaaS products",
    detail: "Multi-tenant products with billing, roles and the infrastructure to scale.",
  },
];

export function WebApplications() {
  return (
    <Section tone="night">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              tone="dark"
              eyebrow="Web Applications"
              title="Custom software for work that doesn't fit off-the-shelf tools."
              lead="We design and build applications from the data model up, release a focused first version within weeks, and keep improving it alongside your team."
            />
            <TextLink href="/services/web-applications" tone="light" className="mt-10">
              Web application development
            </TextLink>
          </div>

          <FeatureList items={applicationTypes} tone="dark" className="self-start lg:col-span-7" />
        </div>
      </Container>
    </Section>
  );
}
