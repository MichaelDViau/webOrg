import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { audiences } from "@/lib/company";

export function WhoWeHelp() {
  return (
    <Section tone="canvas" aria-labelledby="who-we-help">
      <Container>
        <SectionIntro
          id="who-we-help"
          eyebrow="Who we work with"
          title="From local businesses to large organizations."
          lead="Whether you need your first professional website or an AI system for thousands of users, you get the same senior team and the same standards."
        />

        <ul className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <li key={audience.title} className="border-t-2 border-ink pt-6" data-reveal>
              <h3 className="text-xl font-semibold tracking-tight">{audience.title}</h3>
              <p className="mt-3 leading-relaxed">{audience.detail}</p>
              <p className="mt-4 text-sm text-muted">{audience.examples}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
