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

/** Shared classes so links and form buttons look identical. */
export function buttonClass(variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md"): string {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
  );
}

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
    <Link className={cn(buttonClass(variant, size), className)} {...props}>
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

export function Spinner() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 animate-spin">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <path d="M14.5 8A6.5 6.5 0 0 0 8 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

interface SubmitButtonProps {
  pending: boolean;
  label: string;
  pendingLabel: string;
  className?: string;
}

/** Primary form submit button with a loading state. */
export function SubmitButton({ pending, label, pendingLabel, className }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={pending} className={cn(buttonClass(), className)}>
      {pending && <Spinner />}
      {pending ? pendingLabel : label}
    </button>
  );
}
