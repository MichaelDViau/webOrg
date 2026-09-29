import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  /** Id for the heading, so the surrounding section can reference it with aria-labelledby. */
  id?: string;
  className?: string;
}

/** Eyebrow, h2 and optional lead paragraph that open a section. */
export function SectionIntro({ eyebrow, title, lead, tone = "light", id, className }: SectionIntroProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)} data-reveal>
      {eyebrow && <p className={cn("text-sm font-medium", dark ? "text-accent-light" : "text-accent-strong")}>{eyebrow}</p>}
      <h2
        id={id}
        className={cn(
          "text-heading",
          eyebrow && "mt-4",
          dark && "text-paper",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-5 text-lg leading-relaxed text-pretty sm:mt-6", dark ? "text-night-muted" : "text-body")}>
          {lead}
        </p>
      )}
    </div>
  );
}
