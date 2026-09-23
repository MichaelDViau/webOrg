import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlowButtonProps extends Omit<ComponentProps<typeof Link>, "children"> {
  children: ReactNode;
  size?: "md" | "lg";
}

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

const gradient =
  "bg-linear-to-r from-accent via-accent-violet to-accent-cyan bg-pan animate-gradient-pan";

export function GlowButton({ children, size = "md", className, ...props }: GlowButtonProps) {
  return (
    <Link
      className={cn("group relative isolate inline-flex rounded-full p-px", className)}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "absolute -inset-1 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 group-focus-visible:opacity-60",
          gradient,
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100",
          gradient,
        )}
      />
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-canvas font-medium tracking-tight text-ink transition-colors duration-500 group-hover:bg-surface",
          sizes[size],
        )}
      >
        {children}
      </span>
    </Link>
  );
}
