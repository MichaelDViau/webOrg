import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";

export async function AiAutomation() {
  const { ui } = await getContent();
  const t = ui.home.aiAutomation;
  const columns = [
    { ...t.ai, href: "/services/ai-solutions" },
    { ...t.automation, href: "/services/automation" },
  ];

  return (
    <Section>
      <Container>
        <SectionIntro
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
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
              <p className="mt-8 text-sm font-medium text-ink">{t.inPractice}</p>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {column.examples.map((example) => (
                  <li key={example} className="py-4 leading-relaxed">
                    {example}
                  </li>
                ))}
              </ul>
              <TextLink href={column.href} className="mt-8">
                {column.linkLabel}
              </TextLink>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
