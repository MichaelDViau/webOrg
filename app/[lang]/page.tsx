import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Approach } from "@/components/home/Approach";
import { Capabilities } from "@/components/home/Capabilities";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { Solutions } from "@/components/home/Solutions";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyUs } from "@/components/home/WhyUs";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { websiteSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getContent();
  return pageMetadata({
    title: format(home.metaTitle, { name: site.name }),
    absoluteTitle: true,
    description: home.metaDescription,
    path: "/",
  });
}

/** The home page: eight sections, from what kind of company this is to how to start a conversation. */
export default async function HomePage() {
  const { locale } = await getContent();

  return (
    <>
      <Hero />
      <WhatWeDo />
      <Capabilities />
      <Approach />
      <Solutions />
      <WhyUs />
      <IndustriesGrid />
      <ContactSection />
      <JsonLd data={websiteSchema(locale)} />
    </>
  );
}
