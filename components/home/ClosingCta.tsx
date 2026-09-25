import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

interface ClosingCtaProps {
  title?: string;
  lead?: string;
}

export async function ClosingCta({ title, lead }: ClosingCtaProps) {
  const { ui } = await getContent();
  const t = ui.closingCta;

  return (
    <Section>
      <Container>
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16" data-reveal>
          <div className="lg:col-span-7">
            <h2 className="text-title">{title ?? t.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{lead ?? t.lead}</p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5 lg:items-start lg:justify-end">
            <ButtonLink href="/contact" withArrow>
              {ui.contactUs}
            </ButtonLink>
            <p className="text-sm text-muted">
              {t.orEmail}{" "}
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
