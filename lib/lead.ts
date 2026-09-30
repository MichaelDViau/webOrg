import type { Ui } from "./content/en/ui";
import { isLocale, type Locale } from "./i18n/config";
import { format } from "./i18n/format";
import { serviceSlugs } from "./services";
import { normalizeWebsiteUrl } from "./website-check";

/**
 * The three ways a visitor asks for something: a project conversation (the contact form), the Digital
 * Systems Audit, or a free Snapshot of their site. The project form asks for name, business email,
 * company, project type, a description of the challenge and an optional scope, plus consent. The audit
 * form uses five groups of fields at most (name and role, company and website, email and phone, what to
 * fix, preferred language) plus consent.
 */
export const leadIntents = ["audit", "contact", "snapshot"] as const;
export type LeadIntent = (typeof leadIntents)[number];

export function isLeadIntent(value: unknown): value is LeadIntent {
  return typeof value === "string" && (leadIntents as readonly string[]).includes(value);
}

export const leadFields = [
  "name",
  "role",
  "company",
  "website",
  "email",
  "phone",
  "projectType",
  "need",
  "scope",
  "language",
  "consent",
] as const;
export type LeadField = (typeof leadFields)[number];
export type LeadValues = Record<LeadField, string>;
export type LeadErrors = Partial<Record<LeadField, string>>;
export type LeadErrorText = Ui["leadErrors"];

/** What a project inquiry is about: one of the nine capability categories, or "not sure yet". */
export const projectTypes = [...serviceSlugs, "not-sure"] as const;
export type ProjectType = (typeof projectTypes)[number];

/** The optional size of the project, from exploring to a multi-system effort. */
export const scopes = ["exploring", "focused", "project", "program"] as const;
export type Scope = (typeof scopes)[number];

/** The fields each form shows. Everything else is left out of the form and ignored by the server. */
export const fieldsByIntent: Record<LeadIntent, readonly LeadField[]> = {
  audit: ["name", "role", "company", "website", "email", "phone", "need", "language", "consent"],
  contact: ["name", "company", "email", "projectType", "need", "scope", "language", "consent"],
  snapshot: ["name", "email", "website", "language", "consent"],
};

const requiredByIntent: Record<LeadIntent, readonly LeadField[]> = {
  audit: ["name", "email", "need", "language", "consent"],
  contact: ["name", "email", "projectType", "need", "language", "consent"],
  snapshot: ["name", "email", "website", "language", "consent"],
};

export const limits = {
  name: 100,
  role: 100,
  company: 120,
  website: 2048,
  email: 254,
  phone: 30,
  needMin: 10,
  needMax: 2000,
} as const;

export function emptyLeadValues(language: Locale): LeadValues {
  return {
    name: "",
    role: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    projectType: "",
    need: "",
    scope: "",
    language,
    consent: "",
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{7,}$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const LINE_BREAKS = /[\r\n]+/g;

/** Trims input, strips control characters, and removes line breaks from single-line fields. */
export function normalizeLeadValues(input: Partial<Record<LeadField, unknown>>): LeadValues {
  const clean = (value: unknown, multiline = false) => {
    const text = typeof value === "string" ? value.replace(CONTROL_CHARS, "") : "";
    return (multiline ? text : text.replace(LINE_BREAKS, " ")).trim();
  };
  const language = clean(input.language);

  return {
    name: clean(input.name),
    role: clean(input.role),
    company: clean(input.company),
    website: clean(input.website),
    email: clean(input.email).toLowerCase(),
    phone: clean(input.phone),
    projectType: (projectTypes as readonly string[]).includes(clean(input.projectType)) ? clean(input.projectType) : "",
    need: clean(input.need, true),
    scope: (scopes as readonly string[]).includes(clean(input.scope)) ? clean(input.scope) : "",
    language: isLocale(language) ? language : "",
    consent: clean(input.consent) === "yes" ? "yes" : "",
  };
}

/** Returns the error for one field in the visitor's language, or undefined if it's valid. */
export function validateLeadField(
  field: LeadField,
  values: LeadValues,
  intent: LeadIntent,
  t: LeadErrorText,
): string | undefined {
  const value = values[field];
  const required = requiredByIntent[intent].includes(field);

  switch (field) {
    case "name":
      if (!value) return t.nameRequired;
      if (value.length > limits.name) return format(t.nameTooLong, { max: limits.name });
      return;
    case "role":
      if (value.length > limits.role) return format(t.roleTooLong, { max: limits.role });
      return;
    case "company":
      if (value.length > limits.company) return format(t.companyTooLong, { max: limits.company });
      return;
    case "website":
      if (!value) return required ? t.websiteRequired : undefined;
      if (value.length > limits.website || !normalizeWebsiteUrl(value)) return t.websiteInvalid;
      return;
    case "email":
      if (!value) return t.emailRequired;
      if (value.length > limits.email || !EMAIL_PATTERN.test(value)) return t.emailInvalid;
      return;
    case "phone":
      if (value && (value.length > limits.phone || !PHONE_PATTERN.test(value))) return t.phoneInvalid;
      return;
    case "projectType":
      return required && !value ? t.projectTypeRequired : undefined;
    case "scope":
      return;
    case "need":
      if (!required) return;
      if (value.length < limits.needMin) return format(t.needTooShort, { min: limits.needMin });
      if (value.length > limits.needMax) return format(t.needTooLong, { max: limits.needMax });
      return;
    case "language":
      return isLocale(value) ? undefined : t.languageInvalid;
    case "consent":
      return value === "yes" ? undefined : t.consentRequired;
  }
}

export function validateLead(values: LeadValues, intent: LeadIntent, t: LeadErrorText): LeadErrors {
  const errors: LeadErrors = {};
  for (const field of fieldsByIntent[intent]) {
    const error = validateLeadField(field, values, intent, t);
    if (error) errors[field] = error;
  }
  return errors;
}

/** Splits "Ana María López" into a first name and the rest, as CRMs expect. */
export function splitName(name: string): { first: string; last: string } {
  const [first = "", ...rest] = name.trim().split(/\s+/);
  return { first, last: rest.join(" ") };
}
