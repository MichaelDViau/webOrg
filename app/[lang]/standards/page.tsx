import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { ClosingCta } from "@/components/home/ClosingCta";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
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
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <Container>
          <ul>
            {standards.map((standard, index) => (
              <li key={standard.slug} className="border-b border-line" data-reveal>
                <Link
                  href={`/standards/${standard.slug}`}
                  className="group grid gap-4 py-8 sm:py-10 lg:grid-cols-12 lg:gap-12"
                >
                  <span className="text-sm text-muted tabular-nums lg:col-span-1 lg:pt-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-subheading lg:col-span-4">{standard.name}</h2>
                  <span className="text-lg leading-relaxed lg:col-span-6">{standard.card}</span>
                  <ArrowIcon
                    size="md"
                    className="hidden text-muted group-hover:translate-x-1 group-hover:text-ink lg:col-span-1 lg:block lg:justify-self-end"
                  />
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
