import Link from "@/components/i18n/Link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";
import { homeBuildSlugs } from "@/lib/services";

/** Block 4: what we build. Five short cards, each linking to its service page. */
export async function WhatWeBuild() {
  const { home } = await getContent();
  const t = home.whatWeBuild;

  return (
    <Section tone="canvas" aria-labelledby="what-we-build">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro id="what-we-build" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        </div>

        <ol className="border-t border-line lg:col-span-7">
          {t.cards.map((card, index) => (
            <li key={card.title} className="border-b border-line" data-reveal>
              <Link
                href={`/services/${homeBuildSlugs[index]}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 sm:py-7"
              >
                <span className="col-span-2 text-sm text-muted tabular-nums sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 sm:col-span-10">
                  <span className="block text-xl font-medium tracking-tight text-ink sm:text-2xl">{card.title}</span>
                  <span className="mt-1.5 block leading-relaxed text-muted">{card.detail}</span>
                  <span className="sr-only">{t.linkLabel}</span>
                </span>
                <ArrowIcon className="hidden text-muted group-hover:translate-x-1 group-hover:text-ink sm:col-span-1 sm:block sm:justify-self-end" />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
