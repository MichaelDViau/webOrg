import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { beliefs, principles } from "@/lib/company";
import { pageMetadata } from "@/lib/metadata";
import { location, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `${site.name} is a software design and engineering company in ${location}. Learn how we approach technology, design, development and performance.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We don't build technology simply because we can. We build it because it solves a problem."
        lead={`${site.name} is a software design and engineering company based in ${location}. We work with startups, growing businesses and established organizations on the websites, applications and systems they rely on every day.`}
      />

      {/* What we believe */}
      <Section>
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {beliefs.map((belief) => (
              <section
                key={belief.topic}
                className="grid gap-3 py-10 sm:gap-4 lg:grid-cols-12 lg:gap-16 lg:py-16"
                data-reveal
              >
                <p className="text-sm font-medium text-muted lg:col-span-3 lg:pt-2">{belief.topic}</p>
                <div className="lg:col-span-8">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{belief.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed">{belief.detail}</p>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section tone="night">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:col-span-4" data-reveal>
            How we work with clients
          </h2>
          <FeatureList items={principles} tone="dark" className="lg:col-span-8" />
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
