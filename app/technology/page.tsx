import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TechGroupList } from "@/components/ui/TechGroupList";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { aiCatalog, webCatalog } from "@/lib/technology";

export const metadata: Metadata = pageMetadata({
  title: "Our Technology Stack: Web Development and AI",
  description:
    "The web and AI technology we build with, from HTML, CSS, JavaScript, React and Node.js to OpenAI, Claude, Gemini, AI agents and vector search.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        eyebrowIsHeading
        title="The tools behind everything we build."
        lead="Every name below is a proven, widely used technology. You don't need to understand them to work with us. Each group starts with a one-line explanation in plain English, followed by the exact tools for technical teams."
      />

      {/* Web and software */}
      <Section aria-labelledby="web-stack">
        <Container>
          <SectionIntro
            id="web-stack"
            eyebrow="Web and software"
            title="From HTML and CSS to cloud infrastructure."
            lead="Websites, web applications and mobile apps built on modern standards, with the same tools used by the world's leading software teams."
          />
          <TechGroupList groups={webCatalog} className="mt-14 sm:mt-16" />
        </Container>
      </Section>

      {/* Artificial intelligence */}
      <Section tone="night" aria-labelledby="ai-stack">
        <Container>
          <SectionIntro
            tone="dark"
            id="ai-stack"
            eyebrow="Artificial intelligence"
            title="The current generation of AI, applied to real work."
            lead="We work with the leading AI models and the tools around them: agents that take actions, assistants that answer from your documents, and the testing that proves they're accurate. We choose models for accuracy, cost and privacy, not hype."
          />
          <TechGroupList groups={aiCatalog} tone="dark" className="mt-14 sm:mt-16" />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-subheading" data-reveal>
            Not sure which of these you need?
          </h2>
          <p className="mt-4 text-lg leading-relaxed" data-reveal>
            That&apos;s our job. Tell us what you want to achieve and we&apos;ll recommend the simplest setup that
            does it well. Often that means fewer tools, not more.
          </p>
          </div>
        </Container>
      </Section>

      <ClosingCta />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ])}
      />
    </>
  );
}
