import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DemoCard } from "@/components/work/DemoCard";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { workPage } = await getContent();
  return pageMetadata({ title: workPage.metaTitle, description: workPage.metaDescription, path: "/work" });
}

/** Demos now; case studies when real ones exist. Every demo is labeled so nobody mistakes it for client work. */
export default async function WorkPage() {
  const { workPage: t, demos } = await getContent();

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-3">
            {demos.map((demo) => (
              <li key={demo.slug}>
                <DemoCard demo={demo} headingLevel="h2" />
              </li>
            ))}
          </ul>

          <aside className="mt-12 max-w-2xl rounded border border-line bg-canvas p-5" data-reveal>
            <h2 className="text-lg font-medium text-ink">{t.honestTitle}</h2>
            <p className="mt-2 leading-relaxed">{t.honestBody}</p>
          </aside>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
