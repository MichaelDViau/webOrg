import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section id="results" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="flex flex-col gap-2 bg-canvas p-6 sm:p-10">
              <span className="text-4xl font-semibold tracking-tighter sm:text-5xl">{stat.value}</span>
              <span className="text-sm text-ink-muted">{stat.label}</span>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
