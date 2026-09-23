import { BentoGrid } from "@/components/bento/BentoGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything your product needs. Nothing it doesn't."
            description="A focused set of disciplines, delivered by one senior team — from first pixel to production AI."
          />
        </Reveal>
        <BentoGrid items={services} />
      </Container>
    </section>
  );
}
