import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { founderPhoto, site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { about } = await getContent();
  return pageMetadata({
    title: about.metaTitle,
    description: format(about.metaDescription, { name: site.name }),
    path: "/about",
  });
}

/** About: human credibility and a "check our work" block. No stock photos, no invented history. */
export default async function AboutPage() {
  const { about: t } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={format(t.lead, { name: site.name })} />

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.whyTitle}
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed" data-reveal>
            {t.why.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.founderTitle}
          </h2>
          <div className={`grid gap-8 lg:gap-12 ${founderPhoto ? "lg:grid-cols-[18rem_1fr]" : ""}`} data-reveal>
            {/* A real photo of the founder, when one is set in lib/site.ts. Never a stock photo. */}
            {founderPhoto && (
              <Image
                src={founderPhoto.src}
                alt={format(t.founderPhotoAlt, { name: site.name })}
                width={founderPhoto.width}
                height={founderPhoto.height}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="h-auto w-full max-w-xs rounded-lg"
              />
            )}
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
              {t.founder.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.teamTitle}
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed" data-reveal>
            {t.team.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="night">
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading text-paper" data-reveal>
            {t.proofTitle}
          </h2>
          <div data-reveal>
            <p className="max-w-2xl text-xl leading-relaxed text-night-muted sm:text-2xl">
              {t.proofBody}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/standards" variant="inverse" withArrow>
                {t.proofLinks.standards}
              </ButtonLink>
              <ButtonLink href="/how-we-work" variant="outlineInverse">
                {t.proofLinks.process}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8 sm:space-y-10">
          <h2 className="text-heading" data-reveal>
            {t.beliefsTitle}
          </h2>
          <FeatureList items={t.beliefs} />
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
