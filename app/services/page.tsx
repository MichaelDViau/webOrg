import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Website, Software and AI Development Services",
  description:
    "Website development, custom web applications, AI solutions, business automation, performance optimization and technical SEO for companies of every size.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites, software and AI, designed and built by one team."
        lead="We work across the full life of a digital product, from the first conversation about what to build to keeping it fast, secure and useful years later."
      />

      <Section padding="no-top">
        <Container>
          <ul>
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-4 py-10 sm:py-12 lg:grid-cols-12 lg:gap-16"
                >
                  <span className="font-mono text-sm text-muted lg:col-span-1 lg:pt-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:col-span-4">{service.name}</h2>
                  <span className="lg:col-span-6">
                    <span className="block text-lg leading-relaxed">{service.summary}</span>
                    <span className="mt-3 block text-sm text-muted">
                      {service.included
                        .slice(0, 4)
                        .map((item) => item.title)
                        .join(" · ")}
                    </span>
                  </span>
                  <ArrowIcon
                    size="md"
                    className="hidden text-muted group-hover:translate-x-1 group-hover:text-ink lg:col-span-1 lg:mt-2 lg:block lg:justify-self-end" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta
        title="Not sure which service you need?"
        lead="Most projects involve more than one. Describe the problem and we'll recommend where to start."
      />
    </>
  );
}
