import Link from "@/components/i18n/Link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getContent } from "@/lib/i18n/server";
import { homeAlsoSlugs, homeBuildSlugs } from "@/lib/services";

/** Block 4: what we build. Five short entries, each linking to its service page. */
export async function WhatWeBuild() {
  const { home, services } = await getContent();
  const t = home.whatWeBuild;
  const also = homeAlsoSlugs.flatMap((slug) => services.find((service) => service.slug === slug) ?? []);

  return (
    <Section tone="canvas" aria-labelledby="what-we-build">
      <Container>
        <SectionIntro id="what-we-build" title={t.title} lead={t.lead} />

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {t.cards.map((card, index) => (
            <li key={card.title} data-reveal>
              <Link href={`/services/${homeBuildSlugs[index]}`} className="group grid gap-x-8 gap-y-1 py-5 lg:grid-cols-12">
                <span className="text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline lg:col-span-5">
                  {card.title}
                </span>
                <span className="text-lg leading-relaxed text-body lg:col-span-7">{card.detail}</span>
                <span className="sr-only">{t.linkLabel}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* The other services, so nothing we offer is hidden behind the five entries. */}
        <p className="mt-6 text-lg text-body" data-reveal>
          <span className="font-semibold text-ink">{t.also}</span>{" "}
          {also.map((service, index) => (
            <span key={service.slug}>
              {index > 0 && ", "}
              <Link href={`/services/${service.slug}`} className="text-ink underline underline-offset-4 hover:no-underline">
                {service.name}
              </Link>
            </span>
          ))}
        </p>
      </Container>
    </Section>
  );
}
