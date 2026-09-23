import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/Button";
import { bookingUrl, phoneHref, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us and Start a Project",
  description:
    "Tell us about your website, web application, AI or automation project. We reply to every request within one business day.",
  path: "/contact",
});

const nextSteps = [
  "We read every request and reply within one business day.",
  "We schedule a free 30-minute call to understand your goals, constraints and timeline.",
  "You receive a written proposal with scope, timeline and a fixed estimate for the first phase.",
];

export default function ContactPage() {
  return (
    <section className="pt-14 pb-16 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      {/* On phones the form follows the introduction; on large screens it sits in its own column. */}
      <Container className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-muted">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">Start a project</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Tell us about the problem you&apos;re trying to solve. A rough idea is enough, and we&apos;ll help you
            shape the details. The first consultation is free, with no obligation.
          </p>
        </div>

        <div className="lg:col-span-7 lg:row-span-2">
          <div className="sm:rounded-lg sm:border sm:border-line sm:p-10">
            <ContactForm />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-sm font-medium text-ink">What happens next</h2>
          <ol className="mt-4 divide-y divide-line border-y border-line">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-4 py-4 leading-relaxed">
                <span className="font-mono text-sm text-muted">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {bookingUrl && (
            <>
              <h2 className="mt-12 text-sm font-medium text-ink">Prefer to pick a time?</h2>
              <ButtonLink href="/book" variant="secondary" withArrow className="mt-4">
                Book a free 30-minute call
              </ButtonLink>
            </>
          )}

          <h2 className="mt-12 text-sm font-medium text-ink">Prefer to reach us directly?</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>
              <a href={`mailto:${site.email}`} className="inline-block py-1 text-ink underline underline-offset-4">
                {site.email}
              </a>
            </p>
            <p>
              <a href={phoneHref} className="inline-block py-1 text-ink underline underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="text-muted">{site.hours}</p>
          </address>
        </div>
      </Container>
    </section>
  );
}
