import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { location, site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: ui.about.metaTitle,
    description: format(ui.about.metaDescription, { name: site.name, location }),
    path: "/about",
  });
}

export default async function AboutPage() {
  const { ui, company, photos } = await getContent();
  const t = ui.about;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        title={t.title}
        lead={format(t.lead, { name: site.name, location })}
      >
        <Image
          src={photos.teamAtWork.src}
          alt={photos.teamAtWork.alt}
          width={photos.teamAtWork.width}
          height={photos.teamAtWork.height}
          sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
          preload
          className="mt-12 h-auto w-full rounded-lg sm:mt-16"
        />
      </PageHeader>

      {/* What we believe */}
      <Section>
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {company.beliefs.map((belief) => (
              <section
                key={belief.topic}
                className="grid gap-3 py-10 sm:gap-4 lg:grid-cols-12 lg:gap-16 lg:py-16"
                data-reveal
              >
                <p className="text-sm font-medium text-muted lg:col-span-3 lg:pt-2">{belief.topic}</p>
                <div className="lg:col-span-8">
                  <h2 className="text-subheading">{belief.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed">{belief.detail}</p>
                </div>
              </section>
            ))}
          </div>

          <Image
            src={photos.meetingRoom.src}
            alt={photos.meetingRoom.alt}
            width={photos.meetingRoom.width}
            height={photos.meetingRoom.height}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
            className="mt-16 h-auto w-full rounded-lg lg:mt-20"
            data-reveal
          />
        </Container>
      </Section>

      {/* How we work */}
      <Section tone="night">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-heading text-paper lg:col-span-4" data-reveal>
            {t.howWeWork}
          </h2>
          <FeatureList items={company.principles} tone="dark" className="lg:col-span-8" />
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
