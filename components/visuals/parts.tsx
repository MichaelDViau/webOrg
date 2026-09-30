import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Building blocks for the technical illustrations. Everything is plain HTML and SVG in the site's own
 * colors, so it scales to any screen, reads in every language and is announced once, as one image.
 * The illustrations sit in a dark panel, with light interface windows inside it.
 */

/** A dark panel that holds one illustration. Its content is hidden from screen readers; `label` describes it. */
export function VisualPanel({
  label,
  caption,
  children,
  className,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)}>
      <div role="img" aria-label={label} className="rounded-lg bg-night p-4 text-night-muted sm:p-6">
        <div aria-hidden="true">{children}</div>
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}

/** A labeled box in a diagram. */
export function Node({
  children,
  accent,
  dashed,
  className,
}: {
  children: ReactNode;
  accent?: boolean;
  dashed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border px-3 py-2 text-sm leading-snug",
        dashed ? "border-dashed border-night-line text-night-muted" : "bg-night-line/40 text-paper",
        !dashed && (accent ? "border-accent-light/70" : "border-night-line"),
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A small caption above a group of nodes. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-xs font-medium text-night-muted", className)}>{children}</p>;
}

/** A thin arrow pointing right, or down when `down` is set. */
export function Arrow({ down, className }: { down?: boolean; className?: string }) {
  return down ? (
    <svg viewBox="0 0 12 36" className={cn("h-7 w-3 shrink-0 text-accent-light", className)} fill="none">
      <path d="M6 0v31M1.5 26 6 32l4.5-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 36 12" className={cn("h-3 w-7 shrink-0 text-accent-light", className)} fill="none">
      <path d="M0 6h31M26 1.5 32 6l-6 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** A window with a light interface inside the dark panel: the "software" in a software illustration. */
export function AppWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-line-strong bg-paper text-ink", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-canvas px-3 py-2">
        <span className="text-xs font-medium text-ink">{title}</span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

/** A status label inside a light interface. */
export function StatusPill({
  tone,
  children,
}: {
  tone: "new" | "active" | "done" | "high" | "medium";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-sm border px-1.5 py-0.5 text-[0.6875rem] font-medium leading-none",
        tone === "done" && "border-success/40 text-success",
        tone === "active" && "border-accent/50 text-accent-strong",
        tone === "new" && "border-line-strong text-body",
        tone === "high" && "border-danger/40 text-danger",
        tone === "medium" && "border-warn/40 text-warn",
      )}
    >
      {children}
    </span>
  );
}
