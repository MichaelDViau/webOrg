import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const columns = [
  {
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description:
      "Language models applied to specific, measurable problems — with answers you can verify and data that stays under your control.",
    examples: [
      "An assistant that answers staff questions from policy documents, citing each source",
      "Extracting line items from supplier invoices into your accounting system",
      "Drafting first responses to routine support tickets for review",
    ],
  },
  {
    title: "Automation",
    href: "/services/automation",
    description:
      "Integrations and workflows that move data between your systems, so people stop copying it by hand.",
    examples: [
      "New CRM deals creating projects, folders and invoices automatically",
      "Weekly operations reports assembled and sent without anyone touching a spreadsheet",
      "Approval requests routed, reminded and logged across teams",
    ],
  },
];

export function AiAutomation() {
  return (
    <Section>
      <Container>
        <SectionIntro
          eyebrow="AI & Automation"
          title="Less repetitive work. More time for the work that matters."
          lead="We start with the task, not the technology. If a process is predictable, we automate it. If it needs judgment over large amounts of text, AI may help. Often it's a combination of both."
        />

        <div className="mt-16 grid border-t border-line lg:grid-cols-2">
          {columns.map((column, index) => (
            <div
              key={column.title}
              data-reveal
              className={
                index === 0
                  ? "border-b border-line py-10 lg:border-r lg:border-b-0 lg:pr-16"
                  : "py-10 lg:pl-16"
              }
            >
              <h3 className="text-2xl font-semibold tracking-tight">{column.title}</h3>
              <p className="mt-4 max-w-lg leading-relaxed">{column.description}</p>
              <p className="mt-8 text-sm font-medium text-ink">In practice</p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {column.examples.map((example) => (
                  <li key={example} className="py-4 leading-relaxed">
                    {example}
                  </li>
                ))}
              </ul>
              <TextLink href={column.href} className="mt-8">
                {column.title}
              </TextLink>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
