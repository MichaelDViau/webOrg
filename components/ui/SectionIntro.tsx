import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionIntroProps {
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  /** Id for the heading, so the surrounding section can reference it with aria-labelledby. */
  id?: string;
  className?: string;
}

/** The h2 and optional lead paragraph that open a section. */
export function SectionIntro({ title, lead, tone = "light", id, className }: SectionIntroProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)} data-reveal>
      <h2 id={id} className={cn("text-heading", dark && "text-paper")}>
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-lg leading-relaxed text-pretty", dark ? "text-night-muted" : "text-body")}>{lead}</p>
      )}
    </div>
  );
}
