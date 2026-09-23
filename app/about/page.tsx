import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { principles } from "@/lib/principles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `How ${site.name} approaches technology, design, development and performance — and why we start with the problem, not the tools.`,
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    topic: "Technology",
    title: "The right tool is usually the simplest one that works.",
    body: "We choose established, well-supported technologies over whatever is newest. When a spreadsheet, an existing product or a small integration solves the problem, we'll recommend it — even if it means a smaller project for us.",
  },
  {
    topic: "Development",
    title: "Code is a long-term asset, so we write it that way.",
    body: "Automated tests, code review, documentation and repeatable deployments are part of every project, not extras. The goal is software your team can change confidently long after launch.",
  },
  {
    topic: "Performance",
    title: "Speed is part of the product.",
    body: "Every page and every screen has a performance budget from the start. Fast software is easier to use, ranks better in search, and costs less to run.",
  },
  {
    topic: "Design",
    title: "Good design makes the next step obvious.",
    body: "We design for clarity first: clear content, predictable interactions and accessible interfaces that work for everyone, on every device.",
  },
  {
    topic: "Business",
    title: "Success is measured in your numbers, not ours.",
    body: "Before we start, we agree on what should change — fewer support requests, more qualified leads, hours saved each week — and we report against it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We don't build technology simply because we can. We build it because it solves a problem."
        lead={`${site.name} is a design and engineering company based in ${site.location}. We work with established businesses on the websites, applications and systems they rely on every day.`}
      />

      <Section>
        <Container>
          <div className="divide-y divide-line border-y border-line">
            {beliefs.map((belief) => (
              <section key={belief.topic} className="grid gap-4 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16" data-reveal>
                <p className="text-sm font-medium text-muted lg:col-span-3 lg:pt-2">{belief.topic}</p>
                <div className="lg:col-span-8">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{belief.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed">{belief.body}</p>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="night">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:col-span-4" data-reveal>
            How we work with clients
          </h2>
          <dl className="grid gap-x-12 border-b border-night-line sm:grid-cols-2 lg:col-span-8">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t border-night-line py-8" data-reveal>
                <dt className="text-lg font-medium text-paper">{principle.title}</dt>
                <dd className="mt-2 leading-relaxed">{principle.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
