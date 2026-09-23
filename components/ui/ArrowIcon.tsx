import { cn } from "@/lib/cn";

const sizes = { sm: "size-4", md: "size-5", lg: "size-6" } as const;

interface ArrowIconProps {
  size?: keyof typeof sizes;
  className?: string;
}

export function ArrowIcon({ size = "sm", className }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0 transition-transform duration-200 ease-out-soft", sizes[size], className)}
    >
      <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
