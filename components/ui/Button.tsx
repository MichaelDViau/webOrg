import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./ArrowIcon";

const variants = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-line-strong text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-paper/85",
} as const;

const sizes = {
  sm: "h-10 px-4",
  md: "h-12 px-6",
} as const;

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  withArrow?: boolean;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && <ArrowIcon className="group-hover:translate-x-0.5" />}
    </Link>
  );
}

interface TextLinkProps extends ComponentProps<typeof Link> {
  tone?: "dark" | "light";
}

export function TextLink({ tone = "dark", className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline",
        tone === "dark" ? "text-ink" : "text-paper",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowIcon className="group-hover:translate-x-0.5" />
    </Link>
  );
}
