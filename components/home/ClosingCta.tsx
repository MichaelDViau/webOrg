import { CtaPair } from "@/components/ui/CtaPair";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

interface ClosingCtaProps {
  title?: string;
  lead?: string;
  /** Replace the second button, for pages where another destination reads better. */
  secondary?: { href: string; label: string };
}

/**
 * The same two buttons at the end of every page that isn't a form: discuss a project first, explore the
 * capabilities second. A dark band, so it reads as the end of the page whatever section comes before it.
 */
export async function ClosingCta({ title, lead, secondary }: ClosingCtaProps) {
  const { ui } = await getContent();
  const t = ui.closingCta;

  return (
    <Section tone="night">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16" data-reveal>
          <div className="lg:col-span-7">
            <h2 className="text-title text-paper">{title ?? t.title}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-night-muted">{lead ?? t.lead}</p>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-5">
            <CtaPair tone="dark" secondary={secondary} className="lg:flex-col lg:items-start xl:flex-row" />
            <p className="text-sm text-night-muted">
              {ui.cta.replyPromise} {ui.cta.orEmail}{" "}
              <a href={`mailto:${site.email}`} className="text-paper underline underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
