import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Tell ${site.name} about your website, web application, AI or automation project. We reply within one business day.`,
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We read every request and reply within one business day.",
  "A 30-minute call to understand your goals, constraints and timeline.",
  "A written proposal with scope, timeline and a fixed estimate for the first phase.",
];

export default function ContactPage() {
  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-muted">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">Start a project</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Tell us about the problem you&apos;re trying to solve. A rough idea is enough — we&apos;ll help shape the
            details.
          </p>

          <h2 className="mt-12 text-sm font-medium text-ink">What happens next</h2>
          <ol className="mt-4 divide-y divide-line border-y border-line">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-4 py-4 leading-relaxed">
                <span className="font-mono text-sm text-muted">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-sm font-medium text-ink">Prefer to reach us directly?</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>
              <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                {site.email}
              </a>
            </p>
            <p>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="text-ink underline underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="text-muted">{site.hours}</p>
          </address>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-lg border border-line p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
