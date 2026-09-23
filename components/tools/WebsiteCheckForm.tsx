"use client";

import { useActionState, useEffect, useRef } from "react";
import { runWebsiteCheck, type WebsiteCheckState } from "@/app/website-check/actions";
import { inputClass } from "@/components/contact/Field";
import { ButtonLink, SubmitButton } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { ScoreRing } from "./ScoreRing";

const initialState: WebsiteCheckState = { status: "idle" };

const ratingStyles = {
  good: "text-accent",
  average: "text-warn",
  poor: "text-danger",
} as const;

export function WebsiteCheckForm() {
  const [state, formAction, pending] = useActionState(runWebsiteCheck, initialState);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "success") resultsRef.current?.focus();
  }, [state]);

  const result = state.status === "success" ? state.result : undefined;

  return (
    <div>
      <form action={formAction} className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <label htmlFor="url" className="text-sm font-medium text-ink">
            Website address
          </label>
          <input
            id="url"
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourcompany.com"
            required
            maxLength={2048}
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div className="lg:col-span-4">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="check-email" className="text-sm font-medium text-ink">
              Email
            </label>
            <span className="text-sm text-muted">Optional</span>
          </div>
          <input
            id="check-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-describedby="check-email-hint"
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <SubmitButton pending={pending} label="Run free check" pendingLabel="Checking…" className="lg:col-span-2" />
        <p id="check-email-hint" className="text-sm text-muted lg:col-span-12">
          Add your email if you&apos;d like us to follow up with a personal review. We&apos;ll only use it for that.
        </p>
      </form>

      <div aria-live="polite" className="mt-10">
        {pending && (
          <p className="rounded-md border border-line bg-canvas px-5 py-4 text-sm">
            Testing your site on a simulated mobile phone. This usually takes 20 to 40 seconds.
          </p>
        )}

        {!pending && state.status === "error" && (
          <p role="alert" className="rounded-md border border-danger/30 bg-danger/5 px-5 py-4 text-sm text-danger">
            {state.message}
          </p>
        )}

        {!pending && result && (
          <section aria-labelledby="check-results" className="rounded-lg border border-line">
            <div className="border-b border-line px-6 py-6 sm:px-8">
              <h2
                id="check-results"
                ref={resultsRef}
                tabIndex={-1}
                className="text-2xl font-semibold tracking-tight focus:outline-none"
              >
                Results for {result.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </h2>
              <p className="mt-2 text-sm text-muted">Mobile test, scored out of 100 by Google Lighthouse.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-b border-line px-6 py-8 sm:grid-cols-4 sm:px-8">
              <ScoreRing score={result.scores.performance} label="Performance" />
              <ScoreRing score={result.scores.accessibility} label="Accessibility" />
              <ScoreRing score={result.scores.bestPractices} label="Best practices" />
              <ScoreRing score={result.scores.seo} label="SEO" />
            </div>

            <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-ink">Loading speed</h3>
                <dl className="mt-3 divide-y divide-line border-y border-line">
                  {result.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between gap-6 py-3">
                      <dt className="text-muted">{metric.label}</dt>
                      <dd className={cn("font-medium tabular-nums", ratingStyles[metric.rating])}>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink">What to fix first</h3>
                {result.findings.length > 0 ? (
                  <ol className="mt-3 divide-y divide-line border-y border-line">
                    {result.findings.map((finding) => (
                      <li key={finding.title} className="py-3">
                        <span className="text-ink">{finding.title}</span>
                        {finding.savings && <span className="block text-sm text-muted">{finding.savings}</span>}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-3 leading-relaxed">
                    No major issues found in this quick test. A full review can still uncover content, conversion and
                    search improvements.
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-line bg-canvas px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="leading-relaxed">
                {state.emailSent
                  ? "Thanks. We'll review your results and reply within one business day."
                  : "Want these fixed? We'll walk you through the results in a free consultation."}
              </p>
              <ButtonLink href="/contact?service=web-optimization" withArrow className="shrink-0">
                Talk to us about it
              </ButtonLink>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
