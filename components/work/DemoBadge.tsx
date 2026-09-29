import { cn } from "@/lib/cn";
import { getContent } from "@/lib/i18n/server";

/** The label every demo must carry, so nobody mistakes it for a client project. A plain, solid label. */
export async function DemoBadge({ className }: { className?: string }) {
  const { ui } = await getContent();

  return (
    <p className={cn("inline-block rounded-sm bg-ink px-3 py-1.5 text-sm font-medium text-paper", className)}>
      {ui.demo.label}
    </p>
  );
}
