import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A method built for momentum."
            description="Transparent, iterative and relentlessly focused on outcomes."
          />
        </Reveal>
        <Reveal className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step) => (
            <RevealItem key={step.step} className="flex flex-col gap-4 border-t border-line pt-6">
              <span className="font-mono text-sm text-accent">{step.step}</span>
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
