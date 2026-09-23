import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
        <rect width="24" height="24" rx="5" fill="var(--color-accent)" />
        <path d="M6.5 17V7l5.5 6 5.5-6v10" fill="none" stroke="var(--color-paper)" strokeWidth="2" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">{site.name}</span>
    </Link>
  );
}
