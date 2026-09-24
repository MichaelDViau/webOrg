import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AiAutomation } from "@/components/home/AiAutomation";
import { Approach } from "@/components/home/Approach";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { Optimization } from "@/components/home/Optimization";
import { Seo } from "@/components/home/Seo";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TechStack } from "@/components/home/TechStack";
import { WaysToWork } from "@/components/home/WaysToWork";
import { WebApplications } from "@/components/home/WebApplications";
import { WebDevelopment } from "@/components/home/WebDevelopment";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { WhyUs } from "@/components/home/WhyUs";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { websiteSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({
    title: format(ui.home.metaTitle, { name: site.name }),
    absoluteTitle: true,
    description: ui.home.metaDescription,
    path: "/",
  });
}

export default async function HomePage() {
  const { locale } = await getContent();

  return (
    <>
      <Hero />
      <WhoWeHelp />
      <WhatWeDo />
      <WebDevelopment />
      <WebApplications />
      <AiAutomation />
      <Optimization />
      <Seo />
      <TechStack />
      <Approach />
      <SelectedWork />
      <WhyUs />
      <WaysToWork />
      <HomeFaq />
      <ClosingCta />
      <JsonLd data={websiteSchema(locale)} />
    </>
  );
}
