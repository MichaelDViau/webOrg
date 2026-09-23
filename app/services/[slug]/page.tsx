import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { FaqList } from "@/components/services/FaqList";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/ui/FeatureList";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import { getService, services } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = projects.find((project) => project.services.includes(service.slug));
  const otherServices = services.filter((other) => other.slug !== service.slug);
  const offersWebsiteCheck = service.slug === "web-optimization" || service.slug === "seo";

  return (
    <>
      <PageHeader eyebrow={service.name} eyebrowIsHeading title={service.headline} lead={service.intro}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact?service=${service.slug}`} withArrow>
            Start a Project
          </ButtonLink>
          {offersWebsiteCheck ? (
            <ButtonLink href="/website-check" variant="secondary">
              Free website check
            </ButtonLink>
          ) : (
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          )}
        </div>
      </PageHeader>

      {/* Plain-language summary and the technology behind it */}
      <Section tone="canvas" padding="compact">
        <Container className="grid gap-10 py-4 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="text-sm font-medium text-muted">In plain terms</h2>
            <p className="mt-3 text-xl leading-relaxed text-ink sm:text-2xl">{service.plain}</p>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <h2 className="text-sm font-medium text-muted">Technology we use</h2>
            <TechList tools={service.stack} label={`${service.name} technologies`} className="mt-4" />
          </div>
        </Container>
      </Section>

      {/* Scope */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-4" data-reveal>
            What&apos;s included
          </h2>
          <FeatureList items={service.included} className="lg:col-span-8" />
        </Container>
      </Section>

      {/* Approach and engagement */}
      <Section tone="canvas">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we approach it</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed">
              {service.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9" data-reveal>
            <h2 className="text-sm font-medium text-ink">Typical engagement</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {service.engagement.map((row) => (
                <div key={row.label} className="flex justify-between gap-6 py-4">
                  <dt className="shrink-0 text-muted">{row.label}</dt>
                  <dd className="text-right text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </Section>

      {related && (
        <Section>
          <Container>
            <h2 className="mb-10 text-sm font-medium text-muted sm:mb-12">Related work</h2>
            <ProjectFeature project={related} />
          </Container>
        </Section>
      )}

      <Section tone={related ? "canvas" : "paper"}>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-4">Common questions</h2>
          <FaqList faqs={service.faqs} className="lg:col-span-8" />
        </Container>
      </Section>

      <Section padding="no-bottom">
        <Container>
          <h2 className="text-sm font-medium text-muted">Other services</h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="inline-block py-1 text-lg text-ink hover:underline hover:underline-offset-4"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={[
          serviceSchema({ name: service.name, description: service.metaDescription, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
