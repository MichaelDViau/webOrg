import Link from "@/components/i18n/Link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-line-strong text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-paper/85",
  /** Outline button for dark ("night") sections. */
  outlineInverse: "border border-night-line text-paper hover:border-paper",
} as const;

const sizes = {
  sm: "h-10 px-4",
  md: "h-12 px-6",
} as const;

/** Shared classes so links and form buttons look identical. */
export function buttonClass(variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md"): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded text-base font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
  );
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function ButtonLink({ variant = "primary", size = "md", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(buttonClass(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}

interface TextLinkProps extends ComponentProps<typeof Link> {
  tone?: "dark" | "light";
}

/** A plain underlined text link. */
export function TextLink({ tone = "dark", className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn("underline underline-offset-4 hover:no-underline", tone === "dark" ? "text-ink" : "text-paper", className)}
      {...props}
    >
      {children}
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
