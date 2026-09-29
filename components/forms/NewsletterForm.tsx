"use client";

import Link from "@/components/i18n/Link";
import { usePathname } from "next/navigation";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { SubmitButton } from "@/components/ui/Button";
import { subscribeNewsletter, type NewsletterState } from "@/lib/actions/newsletter";
import { track } from "@/lib/analytics";
import type { Ui } from "@/lib/content/en/ui";
import { locales, type Locale } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { site } from "@/lib/site";
import { CheckboxField, Field, inputClass } from "./Field";

const initialState: NewsletterState = { status: "idle" };

interface NewsletterFormProps {
  locale: Locale;
  labels: Ui["newsletter"];
  privacyLabel: string;
  languageNames: Ui["leadForm"]["languageNames"];
}

/** One short form for visitors who aren't ready yet. It sits at the bottom of articles. */
export function NewsletterForm({ locale, labels: t, privacyLabel, languageNames }: NewsletterFormProps) {
  const pathname = usePathname();
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<Locale>(locale);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<{ email?: string; consent?: string }>({});
  const [startedAt] = useState(() => Date.now());
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") track("newsletter_signup", { page: pathname, language: locale });
    if (state.status !== "idle") messageRef.current?.focus();
    // Only react to a new server response.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found: typeof error = {};
    const value = email.trim();
    if (!value) found.email = t.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) found.email = t.errors.emailInvalid;
    if (!consent) found.consent = t.errors.consentRequired;
    setError(found);
    if (found.email) return event.currentTarget.querySelector<HTMLElement>('[name="email"]')?.focus();
    if (found.consent) return event.currentTarget.querySelector<HTMLElement>('[name="consent"]')?.focus();
    startTransition(() => formAction(new FormData(event.currentTarget)));
  }

  if (state.status === "success") {
    return (
      <div ref={messageRef} tabIndex={-1} role="status" className="focus:outline-none">
        <h2 className="text-xl font-semibold tracking-tight">{t.successTitle}</h2>
        <p className="mt-2 leading-relaxed">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className="space-y-5">
      {state.status === "error" && state.message && (
        <div
          ref={messageRef}
          role="alert"
          tabIndex={-1}
          className="rounded-md border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger focus:outline-none"
        >
          {state.message}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="newsletter-email" label={t.email} error={error.email}>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            value={email}
            aria-invalid={error.email ? true : undefined}
            aria-describedby={error.email ? "newsletter-email-error" : undefined}
            className={inputClass}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field id="newsletter-language" label={t.language}>
          <select
            id="newsletter-language"
            name="language"
            value={language}
            className={`${inputClass} select-chevron pr-10`}
            onChange={(event) => setLanguage(event.target.value as Locale)}
          >
            {locales.map((option) => (
              <option key={option} value={option}>
                {languageNames[option]}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <CheckboxField id="newsletter-consent" name="consent" checked={consent} onChange={setConsent} error={error.consent}>
        {format(t.consent, { name: site.name })}{" "}
        <Link href="/privacy" className="text-ink underline underline-offset-4">
          {privacyLabel}
        </Link>
      </CheckboxField>
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="newsletter-hp">{t.email}</label>
        <input id="newsletter-hp" name="hp_url" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page" value={pathname} />
      <SubmitButton pending={pending} label={t.submit} pendingLabel={t.submitting} />
    </form>
  );
}
