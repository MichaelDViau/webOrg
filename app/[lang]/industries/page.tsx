import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
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
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="grid gap-x-8 gap-y-12 lg:grid-cols-3">
            {industries.map((industry) => (
              <li key={industry.slug} className="flex flex-col border-t-2 border-ink pt-6" data-reveal>
                <h2 className="text-subheading">{industry.name}</h2>
                <p className="mt-3 leading-relaxed">{industry.lead}</p>
                <p className="mt-6 text-sm font-medium text-muted">{t.problemsLabel}</p>
                <ul className="mt-3 space-y-3">
                  {industry.homeProblems.map((problem) => (
                    <li key={problem} className="border-l-2 border-line-strong pl-4 leading-relaxed">
                      <q>{problem}</q>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group mt-8 inline-flex items-center gap-1.5 self-start font-medium text-ink hover:underline hover:underline-offset-4"
                >
                  {t.linkLabel}
                  <span className="sr-only">: {industry.name}</span>
                  <ArrowIcon className="group-hover:translate-x-0.5" />
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
