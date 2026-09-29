import type { ReactNode } from "react";
import { SystemMap } from "@/components/illustrations/SystemMap";
import { Container } from "@/components/ui/Container";
import { CtaPair } from "@/components/ui/CtaPair";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { audit, auditPriceText } from "@/lib/pricing";

/** Inline so the ink block breaks into one rectangle per line, sized to the font's ascent and descent. */
function Knockout({ children }: { children: ReactNode }) {
  return (
    <span className="-mx-[0.04em] bg-ink px-[0.04em] text-paper box-decoration-clone selection:bg-accent">
      {children}
    </span>
  );
}

/**
 * Block 1: the first screen. In ten seconds a visitor learns what we do, for whom, why to trust us,
 * what it costs to start and what to do next.
 */
export async function Hero() {
  const { ui, home, locale } = await getContent();
  const t = home.hero;
  const facts = t.facts.map((fact) =>
    format(fact, { price: auditPriceText(locale, ui.price), days: audit.creditDays }),
  );

  return (
    <section className="overflow-hidden py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-5xl">
          {/*
           * Knocked-out headline in a "Z": a plain lead-in and a black block on the first line, a black block
           * and plain text on the second. Two lines from sm up, in every language; on phones each phrase gets
           * its own line so the blocks never wrap mid-phrase. The size follows the width (see text-display)
           * so the longer French and Spanish lines stay on two lines too.
           */}
          <h1 className="text-display">
            {t.lead} <br className="sm:hidden" />
            <Knockout>{t.block1}</Knockout>
            <br />
            <Knockout>{t.block2}</Knockout> <br className="sm:hidden" />
            {t.tail}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">{t.intro}</p>
          <CtaPair long className="mt-10" />
        </div>

        <ul
          aria-label={t.factsLabel}
          className="mt-10 grid gap-x-8 gap-y-4 text-base leading-relaxed text-body sm:grid-cols-3"
        >
          {facts.map((fact) => (
            <li key={fact} className="border-t border-line pt-4">
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-10 sm:mt-14">
          <SystemMap map={t.map} />
        </div>
      </Container>
    </section>
  );
}
