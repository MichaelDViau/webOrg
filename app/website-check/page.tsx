import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { WebsiteCheckForm } from "@/components/tools/WebsiteCheckForm";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

/** PageSpeed Insights can take up to a minute on slow sites. */
export const maxDuration = 60;

export const metadata: Metadata = pageMetadata({
  title: "Free Website Speed and SEO Check",
  description:
    "Test your website for free. Get your speed, SEO, accessibility and best practices scores, Core Web Vitals and the top fixes in under a minute.",
  path: "/website-check",
});

export default function WebsiteCheckPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free website check"
        eyebrowIsHeading
        title="How fast and findable is your website?"
        lead="Enter your address to see how your site scores for speed, SEO, accessibility and best practices on a mobile phone, and what to fix first. It's free and takes under a minute."
      />

      <Section padding="no-bottom">
        <Container>
          <WebsiteCheckForm />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why these scores matter</h2>
            <p className="mt-4 text-lg leading-relaxed">
              Google uses page speed and technical quality when ranking websites, and most visitors leave a page that
              takes more than a few seconds to load on their phone.
            </p>
          </div>
          <CheckList
            className="lg:col-span-7"
            items={[
              "Performance: how quickly your pages load and respond on a typical phone",
              "Accessibility: whether people using screen readers or keyboards can use your site",
              "Best practices: security and modern web standards",
              "SEO: whether search engines can find, read and understand your pages",
            ]}
          />
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free website check", path: "/website-check" },
        ])}
      />
    </>
  );
}
