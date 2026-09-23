import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

interface ClosingCtaProps {
  title?: string;
  lead?: string;
}

export function ClosingCta({
  title = "Tell us what you're working on.",
  lead = "Share a few details about your project and we'll reply within one business day. If we're not the right fit, we'll say so and point you somewhere better.",
}: ClosingCtaProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16" data-reveal>
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{lead}</p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5 lg:items-start lg:justify-end">
            <ButtonLink href="/contact" withArrow>
              Start a Project
            </ButtonLink>
            <p className="text-sm text-muted">
              Or email{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
