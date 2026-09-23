import { cn } from "@/lib/cn";

interface TechListProps {
  tools: string[];
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Wrapping list of technology names shown as small outlined tags. */
export function TechList({ tools, label, tone = "light", className }: TechListProps) {
  const dark = tone === "dark";

  return (
    <ul aria-label={label} className={cn("flex flex-wrap content-start gap-2", className)}>
      {tools.map((tool) => (
        <li
          key={tool}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm",
            dark ? "border-night-line text-paper/90" : "border-line-strong bg-paper text-ink",
          )}
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
