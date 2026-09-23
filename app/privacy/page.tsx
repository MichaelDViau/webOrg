import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" lead="Last updated September 2026." />
      <Section>
        <Container>
          <div className="max-w-2xl space-y-10 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Information we collect</h2>
              <p className="mt-4">
                When you submit the contact form, we collect the details you provide: your name, company, email
                address, phone number, project type, budget range and project description. We don&apos;t use
                advertising trackers or sell personal information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">How we use it</h2>
              <p className="mt-4">
                We use this information only to respond to your inquiry and, if we work together, to manage our
                business relationship. We keep inquiries for up to two years unless you ask us to delete them
                sooner.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Website check and AI assistant</h2>
              <p className="mt-4">
                When you use the free website check, the address you enter is sent to Google PageSpeed Insights for
                testing. If you also enter your email, we receive it with your results so we can follow up. Messages
                you send to the AI assistant are processed by Anthropic to generate answers and are not used to
                identify you. Please don&apos;t share sensitive personal information in the assistant.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Service providers</h2>
              <p className="mt-4">
                Form submissions are delivered by email through a transactional email provider and hosted with
                our website infrastructure provider. Consultation bookings are handled by our scheduling
                provider. Both process data on our behalf and are not permitted to use
                it for their own purposes.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Your choices</h2>
              <p className="mt-4">
                You can ask us to access, correct or delete the information you&apos;ve sent us at any time by
                emailing{" "}
                <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
