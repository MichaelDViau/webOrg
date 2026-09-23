import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book a Free Consultation",
  description:
    "Pick a time for a free 30-minute call about your website, web application, AI or automation project. No cost and no obligation.",
  path: "/book",
});

export default function BookPage() {
  if (!bookingUrl) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Book a call"
        eyebrowIsHeading
        title="Pick a time that works for you."
        lead="A free 30-minute video call to talk through your goals. You'll leave with honest advice and clear next steps, whether or not you hire us."
      />
      <Section padding="compact">
        <Container>
          <div className="overflow-hidden rounded-lg border border-line bg-paper">
            <iframe
              src={bookingUrl}
              title="Schedule a free consultation"
              loading="lazy"
              className="h-176 w-full"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            Having trouble with the calendar?{" "}
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
              Open it in a new tab
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-ink underline underline-offset-4">
              send us a message
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
