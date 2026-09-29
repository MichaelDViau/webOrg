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
    description: format(about.metaDescription, { name: site.name, year: site.foundedYear }),
    path: "/about",
  });
}

/** About: human credibility, and an honest "we're new" statement. No stock photos, no invented history. */
export default async function AboutPage() {
  const { about: t } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={format(t.lead, { name: site.name })} />

      <Section padding="no-top">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading lg:col-span-4" data-reveal>
            {t.whyTitle}
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed lg:col-span-8" data-reveal>
            {t.why.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading lg:col-span-4" data-reveal>
            {t.founderTitle}
          </h2>
          <div className="grid gap-8 lg:col-span-8 lg:grid-cols-8 lg:gap-12" data-reveal>
            {/* A real photo of the founder, when one is set in lib/site.ts. Never a stock photo. */}
            {founderPhoto && (
              <Image
                src={founderPhoto.src}
                alt={format(t.founderPhotoAlt, { name: site.name })}
                width={founderPhoto.width}
                height={founderPhoto.height}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="h-auto w-full max-w-xs rounded-lg lg:col-span-3"
              />
            )}
            <div className={`max-w-2xl space-y-6 text-lg leading-relaxed ${founderPhoto ? "lg:col-span-5" : "lg:col-span-8"}`}>
              {t.founder.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading lg:col-span-4" data-reveal>
            {t.teamTitle}
          </h2>
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed lg:col-span-8" data-reveal>
            {t.team.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="night">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading text-paper lg:col-span-4" data-reveal>
            {t.newTitle}
          </h2>
          <div className="lg:col-span-8" data-reveal>
            <p className="max-w-2xl text-xl leading-relaxed text-night-muted sm:text-2xl">
              {format(t.newBody, { year: site.foundedYear })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/work" variant="inverse" withArrow>
                {t.newLinks.demos}
              </ButtonLink>
              <ButtonLink href="/standards" variant="outlineInverse">
                {t.newLinks.standards}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading lg:col-span-4" data-reveal>
            {t.beliefsTitle}
          </h2>
          <FeatureList items={t.beliefs} className="lg:col-span-8" />
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
