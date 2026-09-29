import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DemoCard } from "@/components/work/DemoCard";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { workEnabled } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  if (!workEnabled) return {};
  const { workPage } = await getContent();
  return pageMetadata({ title: workPage.metaTitle, description: workPage.metaDescription, path: "/work" });
}

/** Off while `workEnabled` is false (lib/site.ts). Every demo says its data is sample data. */
export default async function WorkPage() {
  if (!workEnabled) notFound();
  const { workPage: t, demos } = await getContent();

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <ul className="grid gap-6 lg:grid-cols-3">
            {demos.map((demo) => (
              <li key={demo.slug}>
                <DemoCard demo={demo} headingLevel="h2" />
              </li>
            ))}
          </ul>

          <aside className="mt-16 max-w-2xl border-l-2 border-accent pl-6" data-reveal>
            <h2 className="text-lg font-medium text-ink">{t.honestTitle}</h2>
            <p className="mt-2 leading-relaxed">{t.honestBody}</p>
          </aside>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
