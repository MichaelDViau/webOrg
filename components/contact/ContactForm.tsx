"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState, startTransition, type FormEvent } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
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
  type ContactField,
  type ContactValues,
} from "@/lib/contact";
import type { ServiceSlug } from "@/lib/services";
import { site } from "@/lib/site";
import { SubmitButton } from "@/components/ui/Button";
import { describedBy, Field, inputClass } from "./Field";

const initialState: ContactState = { status: "idle" };

function isServiceSlug(value: string | null): value is ServiceSlug {
  return value !== null && Object.hasOwn(projectTypeByService, value);
}

function focusField(form: HTMLFormElement | null, field: ContactField) {
  form?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
}

export function ContactForm() {
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
    setErrors((current) => ({ ...current, [field]: validateContactField(field, normalizeContactValues(next)) }));
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
    const found = validateContact(normalizeContactValues(values));
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
          Thank you. We&apos;ve received your request.
        </h2>
        <p className="mt-4 leading-relaxed">
          Someone from our team will read it and reply within one business day, usually sooner. If anything is
          urgent, email us at{" "}
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

  const messageHint = `At least ${limits.messageMin} characters. Goals, timeline and any existing systems are helpful.`;

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
        <Field id="name" label="Name" error={errors.name}>
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
        <Field id="company" label="Company" optional error={errors.company}>
          <input
            {...control("company")}
            type="text"
            autoComplete="organization"
            maxLength={limits.company}
            className={inputClass}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
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
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            {...control("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={limits.phone}
            className={inputClass}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field id="projectType" label="Project type" error={errors.projectType}>
          <select
            {...control("projectType")}
            required
            className={`${inputClass} select-chevron pr-10`}
            onChange={(event) => update("projectType", event.target.value)}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field id="budget" label="Budget range" error={errors.budget}>
          <select
            {...control("budget")}
            required
            className={`${inputClass} select-chevron pr-10`}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Project description" error={errors.message} hint={messageHint}>
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
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We&apos;ll only use these details to respond to your inquiry.{" "}
          <Link href="/privacy" className="text-ink underline underline-offset-4">
            Privacy policy
          </Link>
        </p>
        <SubmitButton pending={pending} label="Send request" pendingLabel="Sending…" className="shrink-0" />
      </div>
      <p aria-live="polite" className="sr-only">
        {pending ? "Sending your request." : ""}
      </p>
    </form>
  );
}
