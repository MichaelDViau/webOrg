import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getContent } from "@/lib/i18n/server";
import { capabilitiesHref, contactHref } from "@/lib/site";

interface CtaPairProps {
  /** Use "dark" inside night sections. */
  tone?: "light" | "dark";
  /** Replace the second button, for example to point at another page. */
  secondary?: { href: string; label: string };
  className?: string;
}

/**
 * The two buttons the site repeats: discuss a project first, explore the capabilities second. The first
 * is the main button everywhere.
 */
export async function CtaPair({ tone = "light", secondary, className }: CtaPairProps) {
  const { ui } = await getContent();
  const dark = tone === "dark";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <ButtonLink href={contactHref} variant={dark ? "inverse" : "primary"} withArrow>
        {ui.cta.discuss}
      </ButtonLink>
      <ButtonLink href={secondary?.href ?? capabilitiesHref} variant={dark ? "outlineInverse" : "secondary"}>
        {secondary?.label ?? ui.cta.explore}
      </ButtonLink>
    </div>
  );
}
