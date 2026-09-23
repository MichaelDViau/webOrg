import { cn } from "@/lib/cn";
import type { ContentItem } from "@/lib/company";

interface FeatureListProps {
  items: ContentItem[];
  tone?: "light" | "dark";
  className?: string;
}

/** Two-column list of titled items separated by hairlines. */
export function FeatureList({ items, tone = "light", className }: FeatureListProps) {
  const dark = tone === "dark";

  return (
    <dl className={cn("grid gap-x-12 border-b sm:grid-cols-2", dark ? "border-night-line" : "border-line", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className={cn("border-t py-7 sm:py-8", dark ? "border-night-line" : "border-line")}
          data-reveal
        >
          <dt className={cn("text-lg font-medium", dark ? "text-paper" : "text-ink")}>{item.title}</dt>
          <dd className={cn("mt-2 max-w-md leading-relaxed", dark ? "text-night-muted" : "text-muted")}>
            {item.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}
