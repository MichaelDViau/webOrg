import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const kinds = [
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
              lead="We design and engineer applications from the data model up, release a focused first version in weeks, and keep improving it with your team."
            />
            <TextLink href="/services/web-applications" tone="light" className="mt-10">
              Web applications
            </TextLink>
          </div>

          <dl className="grid self-start border-b border-night-line sm:grid-cols-2 sm:gap-x-10 lg:col-span-7">
            {kinds.map((kind) => (
              <div key={kind.title} className="border-t border-night-line py-8" data-reveal>
                <dt className="text-lg font-medium text-paper">{kind.title}</dt>
                <dd className="mt-2 leading-relaxed">{kind.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
