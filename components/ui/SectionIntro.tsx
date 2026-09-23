import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionIntroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionIntro({ eyebrow, title, lead, tone = "light", as: Heading = "h2", className }: SectionIntroProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)} data-reveal>
      {eyebrow && <p className={cn("text-sm font-medium", dark ? "text-night-muted" : "text-muted")}>{eyebrow}</p>}
      <Heading
        className={cn(
          "font-semibold tracking-tight",
          eyebrow && "mt-4",
          Heading === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl",
          dark && "text-paper",
        )}
      >
        {title}
      </Heading>
      {lead && (
        <p className={cn("mt-6 text-lg leading-relaxed text-pretty", dark ? "text-night-muted" : "text-body")}>
          {lead}
        </p>
      )}
    </div>
  );
}
