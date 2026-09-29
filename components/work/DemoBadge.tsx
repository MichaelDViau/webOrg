import { cn } from "@/lib/cn";
import { getContent } from "@/lib/i18n/server";

/** The label every demo must carry, so nobody mistakes it for a client project. A simple rectangular label. */
export async function DemoBadge({ className }: { className?: string }) {
  const { ui } = await getContent();

  return (
    <span className={cn("inline-block rounded-sm border border-line-strong bg-canvas px-3 py-1.5 text-sm font-medium text-ink", className)}>
      {ui.demo.label}
    </span>
  );
}
