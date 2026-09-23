import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { services } from "@/lib/services";

export function WhatWeDo() {
  return (
    <Section aria-labelledby="what-we-do">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro
            eyebrow="What we do"
            id="what-we-do"
            title="One team for your website, software and AI."
            lead="Most clients come to us for one thing and stay for several. Design, engineering, AI and performance work all sit with the same team, so nothing gets lost between vendors."
          />
        </div>

        <ol className="border-t border-line lg:col-span-7">
          {services.map((service, index) => (
            <li key={service.slug} className="border-b border-line" data-reveal>
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 sm:py-7"
              >
                <span className="col-span-2 text-sm text-muted tabular-nums sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 sm:col-span-10">
                  <span className="block text-xl font-medium tracking-tight text-ink sm:text-2xl">
                    {service.name}
                  </span>
                  <span className="mt-1.5 block leading-relaxed text-muted">{service.summary}</span>
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
