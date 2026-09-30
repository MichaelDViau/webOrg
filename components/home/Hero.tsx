import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { getContent } from "@/lib/i18n/server";

/** Inline so the ink block breaks into one rectangle per line, sized to the font's ascent and descent. */
function Knockout({ children }: { children: ReactNode }) {
  return (
    <span className="-mx-[0.04em] bg-ink px-[0.04em] py-[0.02em] text-paper box-decoration-clone selection:bg-accent">
      {children}
    </span>
  );
}

/**
 * Section 1: the first screen. It says what kind of company this is (custom software and technology
 * solutions), shows the kind of work in one illustration, and offers the two next steps.
 */
export async function Hero() {
  const { ui, home } = await getContent();
  const t = home.hero;

  return (
    <section className="overflow-hidden py-12 sm:py-16 lg:py-20">
      <Container>
        {/*
         * Knocked-out headline in a "Z": a plain lead-in and a black block on the first line, a black block
         * and plain text on the second. Two lines from sm up, in every language; on phones each phrase gets
         * its own line so the blocks never wrap mid-phrase. The size follows the width (see text-display).
         */}
        <h1 className="max-w-5xl text-display">
          {t.lead} <br className="sm:hidden" />
          <Knockout>{t.block1}</Knockout>
          <br />
          <Knockout>{t.block2}</Knockout> <br className="sm:hidden" />
          {t.tail}
        </h1>

        <div className="mt-10 grid gap-10 sm:mt-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5 xl:col-span-6">
            <p className="max-w-xl text-lead text-pretty">{t.intro}</p>
            {/* Stacked while the column is narrow, side by side once it can hold the longer French and Spanish labels. */}
            <CtaPair className="mt-8 lg:flex-col lg:items-start xl:flex-row" />
            <ul aria-label={t.factsLabel} className="mt-8 divide-y divide-line border-y border-line text-base text-body">
              {t.facts.map((fact) => (
                <li key={fact} className="py-3">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 xl:col-span-6">
            <HeroVisual labels={ui.visuals} />
          </div>
        </div>
      </Container>
    </section>
  );
}
