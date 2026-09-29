import { getContent } from "@/lib/i18n/server";

/** The label every demo must carry, so nobody mistakes it for a client project. */
export async function DemoBadge({ className }: { className?: string }) {
  const { ui } = await getContent();

  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border border-accent bg-canvas px-3 py-1 text-xs font-medium text-accent-strong " +
        (className ?? "")
      }
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {ui.demo.label}
    </span>
  );
}
