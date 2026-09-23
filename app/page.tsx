import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
    </>
  );
}
