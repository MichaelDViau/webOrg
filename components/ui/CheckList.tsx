import { cn } from "@/lib/cn";

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

export function CheckList({ items, columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-x-10 gap-y-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1.5 size-3.5 shrink-0 text-accent">
            <path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.75" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
