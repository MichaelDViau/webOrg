import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { buildShowcase } from "@/lib/showcase";
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

export async function Hero() {
  const { ui, company, projects } = await getContent();
  const t = ui.home.hero;

  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      <Container>
        <div className="max-w-4xl">
          {/*
           * Knocked-out headline: phrases sit on tight ink blocks that follow each line of text.
           * Two lines from sm up; on phones each phrase gets its own line so the blocks never wrap mid-phrase.
           */}
          <h1 className="text-display">
            {t.lead} <br className="sm:hidden" />
            <Knockout>{t.block1}</Knockout>
            <br />
            <Knockout>{t.block2}</Knockout> <br className="sm:hidden" />
            {t.tail}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
            {format(t.intro, { name: site.name })}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" withArrow>
              {ui.contactUs}
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              {t.explore}
            </ButtonLink>
          </div>
          <ul
            aria-label={t.commitments}
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted sm:flex sm:flex-wrap sm:gap-x-0"
          >
            {company.promises.map((promise) => (
              <li key={promise} className="sm:border-l sm:border-line sm:px-4 sm:first:border-l-0 sm:first:pl-0">
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <HeroShowcase items={buildShowcase(projects, ui.showcase)} label={t.whatWeBuild} />
      </Container>
    </section>
  );
}
