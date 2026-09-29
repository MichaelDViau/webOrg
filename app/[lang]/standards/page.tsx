import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { TextLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { standardsPage } = await getContent();
  return pageMetadata({ title: standardsPage.metaTitle, description: standardsPage.metaDescription, path: "/standards" });
}

export default async function StandardsPage() {
  const { standardsPage: t, standards } = await getContent();

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <Section padding="no-top">
        <Container>
          <ul className="divide-y divide-line border-b border-line">
            {standards.map((standard) => (
              <li key={standard.slug} data-reveal>
                <Link href={`/standards/${standard.slug}`} className="group grid gap-x-8 gap-y-1 py-6 lg:grid-cols-12">
                  <h2 className="text-xl font-semibold tracking-tight text-ink underline-offset-4 group-hover:underline lg:col-span-4">
                    {standard.name}
                  </h2>
                  <span className="text-lg leading-relaxed text-body lg:col-span-8">{standard.card}</span>
                  <span className="sr-only">{t.readStandard}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h2 className="text-subheading">{t.ownershipTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed">{t.ownershipBody}</p>
            <TextLink href="/how-we-work" className="mt-6">
              {t.processLink}
            </TextLink>
          </div>
          <div data-reveal>
            <h2 className="text-subheading">{t.technologyTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed">{t.technologyBody}</p>
          </div>
        </Container>
      </Section>

      <ClosingCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
