import { cn } from "@/lib/cn";
import { RevealItem } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", centered && "mx-auto items-center text-center", className)}>
      <RevealItem>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</span>
      </RevealItem>
      <RevealItem>
        <h2 className="text-3xl font-semibold tracking-tighter text-balance text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </RevealItem>
      {description && (
        <RevealItem>
          <p className="text-base leading-relaxed text-pretty text-ink-muted sm:text-lg">{description}</p>
        </RevealItem>
      )}
    </div>
  );
}
