import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function GhostLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink",
        className,
      )}
      {...props}
    />
  );
}
