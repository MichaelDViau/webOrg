import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AiAutomation } from "@/components/home/AiAutomation";
import { Approach } from "@/components/home/Approach";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { Optimization } from "@/components/home/Optimization";
import { Seo } from "@/components/home/Seo";
import { SelectedWork } from "@/components/home/SelectedWork";
import { WebApplications } from "@/components/home/WebApplications";
import { WebDevelopment } from "@/components/home/WebDevelopment";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyUs } from "@/components/home/WhyUs";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { websiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} | Website, Web App and AI Development`,
  absoluteTitle: true,
  description:
    "Website development, custom web applications, AI integration and business automation for startups, small businesses and established organizations.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WebDevelopment />
      <WebApplications />
      <AiAutomation />
      <Optimization />
      <Seo />
      <Approach />
      <SelectedWork />
      <WhyUs />
      <ClosingCta />
      <JsonLd data={websiteSchema()} />
    </>
  );
}
