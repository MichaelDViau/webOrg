import { CtaPair } from "@/components/ui/CtaPair";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { audit } from "@/lib/pricing";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { site } from "@/lib/site";

interface ClosingCtaProps {
  title?: string;
  lead?: string;
  /** Label for the second button, for pages where "Or start with a free Snapshot" reads better. */
  secondLabel?: string;
  /** "night" (default) is a dark band. Use "light" where the section before it is already dark. */
  tone?: "night" | "light";
}

/**
 * The same two buttons at the end of every page that isn't a form: audit first, Snapshot second.
 * A dark band, so it reads as the end of the page whatever section comes before it.
 */
export async function ClosingCta({ title, lead, secondLabel, tone = "night" }: ClosingCtaProps) {
  const { ui } = await getContent();
  const t = ui.closingCta;
  const dark = tone === "night";

  return (
    <Section tone={dark ? "night" : "paper"}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16" data-reveal>
          <div className="lg:col-span-7">
            <h2 className={dark ? "text-title text-paper" : "text-title"}>{title ?? t.title}</h2>
            <p className={dark ? "mt-6 max-w-xl text-lg leading-relaxed text-night-muted" : "mt-6 max-w-xl text-lg leading-relaxed"}>
              {lead ?? format(t.lead, { days: audit.creditDays })}
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-5">
            <CtaPair tone={dark ? "dark" : "light"} secondLabel={secondLabel ?? ui.cta.snapshotAlt} />
            <p className={dark ? "text-sm text-night-muted" : "text-sm text-muted"}>
              {ui.cta.replyPromise} {ui.cta.orEmail}{" "}
              <a href={`mailto:${site.email}`} className={dark ? "text-paper underline underline-offset-4" : "text-ink underline underline-offset-4"}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
