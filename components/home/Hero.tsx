import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { promises } from "@/lib/company";
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
          <ul aria-label="Our commitments" className="mt-8 grid gap-x-8 gap-y-2 text-sm text-muted sm:flex sm:flex-wrap">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 shrink-0 text-accent">
                  <path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.75" />
                </svg>
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <HeroShowcase items={showcase} />
      </Container>
    </section>
  );
}
