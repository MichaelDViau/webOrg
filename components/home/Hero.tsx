import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroShowcase } from "./HeroShowcase";
import { showcase } from "@/lib/showcase";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
            We build the software your business runs on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
            {site.name} designs and builds websites, applications and internal systems for companies that need
            them to work properly — and keep working as they grow.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" withArrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <HeroShowcase items={showcase} initialIndex={1} />
      </Container>
    </section>
  );
}
