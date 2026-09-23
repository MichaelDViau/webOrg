import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectFeature } from "@/components/work/ProjectFeature";
import { projects } from "@/lib/projects";
import { getService, services } from "@/lib/services";

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

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const related = projects.find((project) => project.services.includes(service.slug));
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <PageHeader eyebrow={service.name} title={service.headline} lead={service.intro}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact?service=${service.slug}`} withArrow>
            Start a Project
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            See our work
          </ButtonLink>
        </div>
      </PageHeader>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-4" data-reveal>
            What&apos;s included
          </h2>
          <dl className="grid gap-x-12 border-b border-line sm:grid-cols-2 lg:col-span-8">
            {service.included.map((item) => (
              <div key={item.title} className="border-t border-line py-7" data-reveal>
                <dt className="font-medium text-ink">{item.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

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
                  <dt className="text-muted">{row.label}</dt>
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
            <h2 className="mb-12 text-sm font-medium text-muted">Related work</h2>
            <ProjectFeature project={related} />
          </Container>
        </Section>
      )}

      <Section tone={related ? "canvas" : "paper"}>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-4">Common questions</h2>
          <div className="divide-y divide-line border-y border-line lg:col-span-8">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink">
                  {faq.question}
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="no-bottom">
        <Container>
          <h2 className="text-sm font-medium text-muted">Other services</h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {services
              .filter((other) => other.slug !== service.slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link href={`/services/${other.slug}`} className="text-lg text-ink hover:underline hover:underline-offset-4">
                    {other.name}
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
