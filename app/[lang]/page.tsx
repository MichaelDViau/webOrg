import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { Honest } from "@/components/home/Honest";
import { Problem } from "@/components/home/Problem";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { WhyUs } from "@/components/home/WhyUs";
import { audit } from "@/lib/pricing";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { site, workEnabled } from "@/lib/site";
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

/** The home page: eight blocks, in the order the guideline sets. */
export default async function HomePage() {
  const { locale, home } = await getContent();

  return (
    <>
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhatWeBuild />
      <WhoWeHelp />
      <WhyUs />
      {workEnabled && <Honest />}
      <ClosingCta
        tone={workEnabled ? "night" : "light"}
        title={home.finalCta.title}
        lead={format(home.finalCta.lead, { days: audit.creditDays })}
      />
      <JsonLd data={websiteSchema(locale)} />
    </>
  );
}
