import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { showcase } from "@/lib/showcase";
import { site } from "@/lib/site";
import { HeroShowcase } from "./HeroShowcase";

export function Hero() {
  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
            We build the software your business runs on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
            {site.name} designs and builds websites, web applications, AI solutions and business automation for
            startups, growing companies and established organizations.
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
