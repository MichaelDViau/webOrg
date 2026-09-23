import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { approachSteps } from "@/lib/company";

export function Approach() {
  return (
    <Section tone="canvas">
      <Container>
        <SectionIntro
          eyebrow="Our approach"
          title="A clear process, run by the people doing the work."
          lead="You work directly with the designers and engineers on your project. There are no account managers relaying messages and no handoffs to junior staff after the pitch."
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approachSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-6" data-reveal>
              <span className="font-mono text-sm text-muted">Step {index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
