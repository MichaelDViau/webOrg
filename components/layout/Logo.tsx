import Link from "@/components/i18n/Link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/** `label` is the accessible name, e.g. "Michael home", in the page language. */
export function Logo({ label, className }: { label: string; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
    >
      {/* Two interlocking ink blocks, echoing the homepage headline. */}
      <svg viewBox="0 0 1000 211" aria-hidden="true" className="h-3.5 w-auto">
        <path d="M413 0H1000V120H626V211H0V96H413Z" fill="currentColor" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">{site.name}</span>
    </Link>
  );
}
