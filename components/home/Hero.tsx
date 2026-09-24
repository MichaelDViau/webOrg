import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { promises } from "@/lib/company";
import { showcase } from "@/lib/showcase";
import { site } from "@/lib/site";
import { HeroShowcase } from "./HeroShowcase";

/** Inline so the ink block breaks into one rectangle per line, sized to the font's ascent and descent. */
function Knockout({ children }: { children: ReactNode }) {
  return (
    <span className="-mx-[0.04em] bg-ink px-[0.04em] text-paper box-decoration-clone selection:bg-accent">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <div className="max-w-4xl">
          {/*
           * Knocked-out headline: phrases sit on tight ink blocks that follow each line of text.
           * Two lines from sm up; on phones each phrase gets its own line so the blocks never wrap mid-phrase.
           */}
          <h1 className="text-display">
            We build <br className="sm:hidden" />
            <Knockout>the software</Knockout>
            <br />
            <Knockout>your business</Knockout> <br className="sm:hidden" />
            runs on.
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
          <ul
            aria-label="Our commitments"
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted sm:flex sm:flex-wrap sm:gap-x-0"
          >
            {promises.map((promise) => (
              <li key={promise} className="sm:border-l sm:border-line sm:px-4 sm:first:border-l-0 sm:first:pl-0">
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
