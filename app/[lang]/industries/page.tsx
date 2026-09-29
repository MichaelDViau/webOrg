import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { industriesPage } = await getContent();
  return pageMetadata({
    title: industriesPage.metaTitle,
    description: industriesPage.metaDescription,
    path: "/industries",
  });
}

export default async function IndustriesPage() {
  const { industriesPage: t, industries } = await getContent();

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="grid gap-x-8 gap-y-12 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug} className="flex flex-col" data-reveal>
                <h2 className="text-2xl font-semibold tracking-tight">{industry.name}</h2>
                <p className="mt-2 text-lg leading-relaxed">{industry.lead}</p>
                <p className="mt-5 font-semibold text-ink">{t.problemsLabel}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-lg leading-relaxed marker:text-ink">
                  {industry.homeProblems.map((problem) => (
                    <li key={problem} className="pl-1">
                      {problem}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-5 inline-block self-start text-ink underline underline-offset-4 hover:no-underline"
                >
                  {t.linkLabel}
                  <span className="sr-only">: {industry.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
