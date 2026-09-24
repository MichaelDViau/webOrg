import type { Metadata } from "next";
import Link from "@/components/i18n/Link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { bookingUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getContent();
  return pageMetadata({ title: ui.book.metaTitle, description: ui.book.metaDescription, path: "/book" });
}

export default async function BookPage() {
  if (!bookingUrl) notFound();
  const t = (await getContent()).ui.book;

  return (
    <>
      <PageHeader
        eyebrow={t.eyebrow}
        eyebrowIsHeading
        title={t.title}
        lead={t.lead}
      />
      <Section padding="compact">
        <Container>
          <div className="overflow-hidden rounded-lg border border-line bg-paper">
            <iframe
              src={bookingUrl}
              title={t.frameTitle}
              loading="lazy"
              className="h-176 w-full"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            {t.trouble}{" "}
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
              {t.openInTab}
            </a>{" "}
            {t.or}{" "}
            <Link href="/contact" className="text-ink underline underline-offset-4">
              {t.sendMessage}
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
