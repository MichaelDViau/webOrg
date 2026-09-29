import { cn } from "@/lib/cn";

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

/** A plain bulleted list. */
export function CheckList({ items, columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn("max-w-3xl list-disc space-y-2.5 pl-6 text-lg leading-relaxed marker:text-ink", columns === 2 && "sm:columns-2", className)}>
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
