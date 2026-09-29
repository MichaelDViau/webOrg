"use client";

import Link from "@/components/i18n/Link";
import { usePathname } from "next/navigation";
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { ButtonLink, SubmitButton } from "@/components/ui/Button";
import { submitLead, type LeadState } from "@/lib/actions/lead";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import type { Ui } from "@/lib/content/en/ui";
import { locales, type Locale } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import {
  emptyLeadValues,
  fieldsByIntent,
  leadFields,
  limits,
  normalizeLeadValues,
  validateLead,
  validateLeadField,
  type LeadErrors,
  type LeadErrorText,
  type LeadField,
  type LeadIntent,
  type LeadValues,
} from "@/lib/lead";
import { site } from "@/lib/site";
import { CheckboxField, describedBy, Field, inputClass } from "./Field";

const initialState: LeadState = { status: "idle" };

const events: Record<LeadIntent, AnalyticsEvent> = {
  audit: "audit_request",
  contact: "contact_request",
  snapshot: "snapshot_request",
};

function focusField(form: HTMLFormElement | null, field: LeadField) {
  form?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
}

interface LeadFormProps {
  locale: Locale;
  intent: LeadIntent;
  labels: Ui["leadForm"];
  errorText: LeadErrorText;
  /** Business hours, shown in the confirmation. */
  hours: string;
  /** Whether a booking calendar is configured, to offer it after an audit request. */
  canBook: boolean;
}

/**
 * The audit, contact and Snapshot form. Five short groups of fields at most, a consent checkbox with a
 * link to the privacy policy, and spam protection without puzzles (a hidden field and a minimum fill time).
 */
export function LeadForm({ locale, intent, labels: t, errorText, hours, canBook }: LeadFormProps) {
  const pathname = usePathname();
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState<LeadValues>(() => emptyLeadValues(locale));
  const [errors, setErrors] = useState<LeadErrors>({});
  const [handledState, setHandledState] = useState(state);
  const [startedAt] = useState(() => Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const shown = fieldsByIntent[intent];
  const full = intent !== "snapshot";

  if (state !== handledState) {
    setHandledState(state);
    setErrors(state.errors ?? {});
  }

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
      track(events[intent], { page: pathname, language: locale });
    } else if (state.status === "error") {
      const firstInvalid = leadFields.find((field) => state.errors?.[field]);
      if (firstInvalid) focusField(formRef.current, firstInvalid);
      else alertRef.current?.focus();
    }
    // Only react to a new server response.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function revalidate(field: LeadField, next: LeadValues) {
    setErrors((current) => ({ ...current, [field]: validateLeadField(field, normalizeLeadValues(next), intent, errorText) }));
  }

  function update(field: LeadField, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) revalidate(field, next);
  }

  function validateOnBlur(field: LeadField) {
    if (values[field].trim() || errors[field]) revalidate(field, values);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateLead(normalizeLeadValues(values), intent, errorText);
    setErrors(found);

    const firstInvalid = leadFields.find((field) => found[field]);
    if (firstInvalid) {
      focusField(event.currentTarget, firstInvalid);
      return;
    }
    startTransition(() => formAction(new FormData(event.currentTarget)));
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded border border-line bg-canvas p-6 sm:p-8">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8 text-success">
          <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12.5l3.5 3.5L17 9" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
        <h2 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-semibold tracking-tight focus:outline-none">
          {t.successTitle[intent]}
        </h2>
        <p className="mt-4 leading-relaxed">
          {format(t.successBody, { hours })}{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        {intent === "audit" && canBook && (
          <div className="mt-8">
            <p className="text-lg font-semibold text-ink">{t.bookTitle}</p>
            <ButtonLink href="/book" variant="secondary" className="mt-3">
              {t.bookCall}
            </ButtonLink>
          </div>
        )}
      </div>
    );
  }

  const id = (field: LeadField) => `${intent}-${field}`;
  const control = (field: LeadField, hint?: string) => ({
    id: id(field),
    name: field,
    value: values[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": describedBy(id(field), errors[field], hint),
    onBlur: () => validateOnBlur(field),
  });

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate className="space-y-6">
      {state.status === "error" && state.message && (
        <div
          ref={alertRef}
          role="alert"
          tabIndex={-1}
          className="rounded-md border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger focus:outline-none"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label={t.name} error={errors.name}>
          <input
            {...control("name")}
            type="text"
            autoComplete="name"
            required
            maxLength={limits.name}
            className={inputClass}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        {full && (
          <Field id={id("role")} label={t.role} optional optionalLabel={t.optional} error={errors.role}>
            <input
              {...control("role")}
              type="text"
              autoComplete="organization-title"
              maxLength={limits.role}
              className={inputClass}
              onChange={(event) => update("role", event.target.value)}
            />
          </Field>
        )}
        {full && (
          <Field id={id("company")} label={t.company} optional optionalLabel={t.optional} error={errors.company}>
            <input
              {...control("company")}
              type="text"
              autoComplete="organization"
              maxLength={limits.company}
              className={inputClass}
              onChange={(event) => update("company", event.target.value)}
            />
          </Field>
        )}
        {shown.includes("website") && (
          <Field
            id={id("website")}
            label={t.website}
            optional={full}
            optionalLabel={t.optional}
            error={errors.website}
          >
            <input
              {...control("website")}
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder={t.websitePlaceholder}
              required={!full}
              maxLength={limits.website}
              className={inputClass}
              onChange={(event) => update("website", event.target.value)}
            />
          </Field>
        )}
        <Field id={id("email")} label={t.email} error={errors.email}>
          <input
            {...control("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={limits.email}
            className={inputClass}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        {full && (
          <Field id={id("phone")} label={t.phone} optional optionalLabel={t.optional} error={errors.phone}>
            <input
              {...control("phone")}
              type="tel"
              autoComplete="tel"
              maxLength={limits.phone}
              className={inputClass}
              onChange={(event) => update("phone", event.target.value)}
            />
          </Field>
        )}
      </div>

      {full && (
        <Field id={id("need")} label={t.need} error={errors.need} hint={t.needHint}>
          <textarea
            {...control("need", t.needHint)}
            rows={4}
            required
            maxLength={limits.needMax}
            className={`${inputClass} resize-y`}
            onChange={(event) => update("need", event.target.value)}
          />
        </Field>
      )}

      <Field id={id("language")} label={t.language} error={errors.language} className="sm:max-w-xs">
        <select
          {...control("language")}
          required
          className={`${inputClass} select-chevron pr-10`}
          onChange={(event) => update("language", event.target.value)}
        >
          {locales.map((option) => (
            <option key={option} value={option}>
              {t.languageNames[option]}
            </option>
          ))}
        </select>
      </Field>

      <CheckboxField
        id={id("consent")}
        name="consent"
        checked={values.consent === "yes"}
        onChange={(checked) => update("consent", checked ? "yes" : "")}
        onBlur={() => validateOnBlur("consent")}
        error={errors.consent}
      >
        {format(t.consent, { name: site.name })}{" "}
        <Link href="/privacy" className="text-ink underline underline-offset-4">
          {t.privacyLink}
        </Link>
      </CheckboxField>

      {/* Spam protection without puzzles: bots fill this hidden field, people never see it. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor={`${intent}-hp`}>{t.honeypot}</label>
        <input id={`${intent}-hp`} name="hp_url" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="intent" value={intent} />
      <input type="hidden" name="page" value={pathname} />

      <SubmitButton pending={pending} label={t.submit[intent]} pendingLabel={t.submitting} />
      <p aria-live="polite" className="sr-only">
        {pending ? t.sendingStatus : ""}
      </p>
    </form>
  );
}
