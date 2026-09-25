import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  /** Text shown next to optional fields, in the page language. */
  optionalLabel?: string;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export const inputClass =
  "block w-full rounded-md border border-line-strong bg-paper px-3.5 py-3 text-base text-ink transition-colors duration-150 placeholder:text-muted/70 hover:border-muted focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ink aria-invalid:border-danger aria-invalid:focus-visible:outline-danger";

export function Field({ id, label, optional, optionalLabel, error, hint, className, children }: FieldProps) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        {optional && <span className="text-sm text-muted">{optionalLabel}</span>}
      </div>
      <div className="mt-2">{children}</div>
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function describedBy(id: string, error?: string, hint?: string): string | undefined {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}
