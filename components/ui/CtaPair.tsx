import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getContent } from "@/lib/i18n/server";
import { auditHref, snapshotHref } from "@/lib/site";

interface CtaPairProps {
  /** Use "dark" inside night sections. */
  tone?: "light" | "dark";
  /** Use the longer labels ("Book a Digital Systems Audit") on the home page hero. */
  long?: boolean;
  /** Label for the second button, when it should read differently ("Or start with a free Snapshot"). */
  secondLabel?: string;
  className?: string;
}

/**
 * The two buttons the guideline puts at the end of every service and industry page, in this order:
 * book an audit (the main button everywhere), then the free Snapshot.
 */
export async function CtaPair({ tone = "light", long = false, secondLabel, className }: CtaPairProps) {
  const { ui } = await getContent();
  const dark = tone === "dark";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <ButtonLink href={auditHref} variant={dark ? "inverse" : "primary"} withArrow>
        {long ? ui.cta.auditLong : ui.cta.audit}
      </ButtonLink>
      <ButtonLink href={snapshotHref} variant={dark ? "outlineInverse" : "secondary"}>
        {secondLabel ?? (long ? ui.cta.snapshotLong : ui.cta.snapshot)}
      </ButtonLink>
    </div>
  );
}
