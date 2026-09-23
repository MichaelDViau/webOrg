import { cn } from "@/lib/cn";

interface TechListProps {
  tools: string[];
  label: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Technology names laid out as a plain multi-column list, like a spec sheet. */
export function TechList({ tools, label, tone = "light", className }: TechListProps) {
  return (
    <ul
      aria-label={label}
      className={cn(
        "grid content-start grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3",
        tone === "dark" ? "text-paper/90" : "text-ink",
        className,
      )}
    >
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  );
}
