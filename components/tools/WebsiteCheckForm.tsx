"use client";

import { useActionState, useEffect, useRef } from "react";
import { runWebsiteCheck, type WebsiteCheckState } from "@/lib/actions/website-check";
import { inputClass } from "@/components/contact/Field";
import { ButtonLink, SubmitButton } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Ui } from "@/lib/content/en/ui";
import type { Locale } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { ScoreRing } from "./ScoreRing";

const initialState: WebsiteCheckState = { status: "idle" };

const ratingStyles = {
  good: "text-success",
  average: "text-warn",
  poor: "text-danger",
} as const;

export function WebsiteCheckForm({ locale, labels: t }: { locale: Locale; labels: Ui["websiteCheck"] }) {
  const [state, formAction, pending] = useActionState(runWebsiteCheck, initialState);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "success") resultsRef.current?.focus();
  }, [state]);

  const result = state.status === "success" ? state.result : undefined;

  return (
    <div>
      <form action={formAction} className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <input type="hidden" name="locale" value={locale} />
        <div className="lg:col-span-6">
          <label htmlFor="url" className="text-sm font-medium text-ink">
            {t.address}
          </label>
          <input
            id="url"
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder={t.placeholder}
            required
            maxLength={2048}
            className={cn(inputClass, "mt-2")}
          />
        </div>
        <div className="lg:col-span-4">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="check-email" className="text-sm font-medium text-ink">
              {t.email}
            </label>
            <span className="text-sm text-muted">{t.optional}</span>
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
        <SubmitButton pending={pending} label={t.submit} pendingLabel={t.submitting} className="lg:col-span-2" />
        <p id="check-email-hint" className="text-sm text-muted lg:col-span-12">
          {t.emailHint}
        </p>
      </form>

      <div aria-live="polite" className="mt-10">
        {pending && (
          <p className="rounded-md border border-line bg-canvas px-5 py-4 text-sm">
            {t.running}
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
                {format(t.resultsFor, { url: result.url.replace(/^https?:\/\//, "").replace(/\/$/, "") })}
              </h2>
              <p className="mt-2 text-sm text-muted">{t.resultsNote}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-b border-line px-6 py-8 sm:grid-cols-4 sm:px-8">
              <ScoreRing score={result.scores.performance} label={t.performance} />
              <ScoreRing score={result.scores.accessibility} label={t.accessibility} />
              <ScoreRing score={result.scores.bestPractices} label={t.bestPractices} />
              <ScoreRing score={result.scores.seo} label={t.seo} />
            </div>

            <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-ink">{t.loadingSpeed}</h3>
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
                <h3 className="text-sm font-medium text-ink">{t.fixFirst}</h3>
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
                    {t.noIssues}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-line bg-canvas px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="leading-relaxed">
                {state.emailSent ? t.emailSent : t.followUp}
              </p>
              <ButtonLink href="/contact?service=web-optimization" withArrow className="shrink-0">
                {t.talk}
              </ButtonLink>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
