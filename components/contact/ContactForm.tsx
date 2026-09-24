"use client";

import Link from "@/components/i18n/Link";
import { useActionState, useEffect, useRef, useState, startTransition, type FormEvent } from "react";
import { submitContact, type ContactState } from "@/lib/actions/contact";
import {
  budgetRanges,
  contactFields,
  emptyContactValues,
  limits,
  normalizeContactValues,
  projectTypeByService,
  projectTypes,
  validateContact,
  validateContactField,
  type ContactErrors,
  type ContactErrorText,
  type ContactField,
  type ContactValues,
} from "@/lib/contact";
import type { Ui } from "@/lib/content/en/ui";
import type { Locale } from "@/lib/i18n/config";
import { format } from "@/lib/i18n/format";
import { isServiceSlug } from "@/lib/services";
import { site } from "@/lib/site";
import { SubmitButton } from "@/components/ui/Button";
import { describedBy, Field, inputClass } from "./Field";

const initialState: ContactState = { status: "idle" };

function focusField(form: HTMLFormElement | null, field: ContactField) {
  form?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
}

interface ContactFormProps {
  locale: Locale;
  labels: Ui["contactForm"];
  errorText: ContactErrorText;
  projectTypeLabels: Ui["projectTypes"];
  budgetLabels: Ui["budgetRanges"];
}

export function ContactForm({ locale, labels: t, errorText, projectTypeLabels, budgetLabels }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [handledState, setHandledState] = useState(state);
  const [startedAt] = useState(() => Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  if (state !== handledState) {
    setHandledState(state);
    setErrors(state.errors ?? {});
  }

  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (isServiceSlug(service)) {
      setValues((current) => (current.projectType ? current : { ...current, projectType: projectTypeByService[service] }));
    }
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    } else if (state.status === "error") {
      const firstInvalid = contactFields.find((field) => state.errors?.[field]);
      if (firstInvalid) focusField(formRef.current, firstInvalid);
      else alertRef.current?.focus();
    }
  }, [state]);

  function revalidate(field: ContactField, next: ContactValues) {
    setErrors((current) => ({ ...current, [field]: validateContactField(field, normalizeContactValues(next), errorText, locale) }));
  }

  function update(field: ContactField, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) revalidate(field, next);
  }

  function validateOnBlur(field: ContactField) {
    if (values[field].trim() || errors[field]) revalidate(field, values);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(normalizeContactValues(values), errorText, locale);
    setErrors(found);

    const firstInvalid = contactFields.find((field) => found[field]);
    if (firstInvalid) {
      focusField(event.currentTarget, firstInvalid);
      return;
    }

    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-canvas p-8 sm:p-10">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8 text-success">
          <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 12.5l3.5 3.5L17 9" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
        <h2 ref={successRef} tabIndex={-1} className="mt-6 text-2xl font-semibold tracking-tight focus:outline-none">
          {t.successTitle}
        </h2>
        <p className="mt-4 leading-relaxed">
          {t.successBody}{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const control = (field: ContactField, hint?: string) => ({
    id: field,
    name: field,
    value: values[field],
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": describedBy(field, errors[field], hint),
    onBlur: () => validateOnBlur(field),
  });

  const messageHint = format(t.messageHint, { min: limits.messageMin });

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
        <Field id="name" label={t.name} optionalLabel={t.optional} error={errors.name}>
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
        <Field id="company" label={t.company} optional optionalLabel={t.optional} error={errors.company}>
          <input
            {...control("company")}
            type="text"
            autoComplete="organization"
            maxLength={limits.company}
            className={inputClass}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
        <Field id="email" label={t.email} optionalLabel={t.optional} error={errors.email}>
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
        <Field id="phone" label={t.phone} optional optionalLabel={t.optional} error={errors.phone}>
          <input
            {...control("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={limits.phone}
            className={inputClass}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field id="projectType" label={t.projectType} optionalLabel={t.optional} error={errors.projectType}>
          <select
            {...control("projectType")}
            required
            className={`${inputClass} select-chevron pr-10`}
            onChange={(event) => update("projectType", event.target.value)}
          >
            <option value="" disabled>
              {t.projectTypePlaceholder}
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {projectTypeLabels[type]}
              </option>
            ))}
          </select>
        </Field>
        <Field id="budget" label={t.budget} optionalLabel={t.optional} error={errors.budget}>
          <select
            {...control("budget")}
            required
            className={`${inputClass} select-chevron pr-10`}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="" disabled>
              {t.budgetPlaceholder}
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {budgetLabels[range]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label={t.message} optionalLabel={t.optional} error={errors.message} hint={messageHint}>
        <textarea
          {...control("message", messageHint)}
          rows={6}
          required
          maxLength={limits.messageMax}
          className={`${inputClass} resize-y`}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">{t.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input type="hidden" name="locale" value={locale} />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {t.privacyNote}{" "}
          <Link href="/privacy" className="text-ink underline underline-offset-4">
            {t.privacyLink}
          </Link>
        </p>
        <SubmitButton pending={pending} label={t.submit} pendingLabel={t.submitting} className="shrink-0" />
      </div>
      <p aria-live="polite" className="sr-only">
        {pending ? t.sendingStatus : ""}
      </p>
    </form>
  );
}
