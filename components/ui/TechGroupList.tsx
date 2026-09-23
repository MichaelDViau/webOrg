import { cn } from "@/lib/cn";
import type { TechGroup } from "@/lib/technology";
import { TechList } from "./TechList";

interface TechGroupListProps {
  groups: TechGroup[];
  tone?: "light" | "dark";
  className?: string;
}

/** Rows of technology groups: name and plain-language summary beside the list of tools. */
export function TechGroupList({ groups, tone = "light", className }: TechGroupListProps) {
  const dark = tone === "dark";
  const line = dark ? "border-night-line" : "border-line";

  return (
    <div className={cn("border-b", line, className)}>
      {groups.map((group) => (
        <div key={group.name} className={cn("grid gap-4 border-t py-7 lg:grid-cols-12 lg:gap-12 lg:py-8", line)} data-reveal>
          <div className="lg:col-span-4">
            <h3 className={cn("text-lg font-medium", dark ? "text-paper" : "text-ink")}>{group.name}</h3>
            <p className={cn("mt-1.5 text-sm leading-relaxed", dark ? "text-night-muted" : "text-muted")}>
              {group.plain}
            </p>
          </div>
          <TechList tools={group.tools} label={`${group.name} technologies`} tone={tone} className="lg:col-span-8" />
        </div>
      ))}
    </div>
  );
}
