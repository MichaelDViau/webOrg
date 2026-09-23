import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const tones = {
  paper: "bg-paper",
  canvas: "bg-canvas",
  night: "bg-night text-night-muted",
} as const;

const spacing = {
  top: "pt-16 sm:pt-24 lg:pt-28",
  bottom: "pb-16 sm:pb-24 lg:pb-28",
  compact: "py-12 sm:py-16",
} as const;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: keyof typeof tones;
  /** "default" pads both edges; "compact" uses tighter padding; the others drop one edge. */
  padding?: "default" | "compact" | "no-top" | "no-bottom";
}

export function Section({ tone = "paper", padding = "default", className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        tones[tone],
        padding === "compact" ? spacing.compact : null,
        padding === "default" || padding === "no-bottom" ? spacing.top : null,
        padding === "default" || padding === "no-top" ? spacing.bottom : null,
        className,
      )}
      {...props}
    />
  );
}
