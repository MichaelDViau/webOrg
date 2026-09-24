import type { Ui } from "./content/en/ui";
import type { Locale } from "./i18n/config";
import { format } from "./i18n/format";
import type { ServiceSlug } from "./services";

/** Submitted values stay in English, so notification emails read the same in every language. */

export const projectTypes = [
  "Website",
  "Web application",
  "AI solution",
  "Automation",
  "Performance optimization",
  "SEO",
  "Something else",
] as const;

export const budgetRanges = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "Over $250,000",
  "Not sure yet",
] as const;

export const projectTypeByService: Record<ServiceSlug, (typeof projectTypes)[number]> = {
  "website-development": "Website",
  "web-applications": "Web application",
  "ai-solutions": "AI solution",
  automation: "Automation",
  "web-optimization": "Performance optimization",
  seo: "SEO",
};

export const contactFields = ["name", "company", "email", "phone", "projectType", "budget", "message"] as const;

export type ContactField = (typeof contactFields)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const emptyContactValues: ContactValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export const limits = {
  name: 100,
  company: 120,
  email: 254,
  phone: 30,
  messageMin: 20,
  messageMax: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{7,}$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const LINE_BREAKS = /[\r\n]+/g;

/** Trims input, strips control characters, and removes line breaks from single-line fields. */
export function normalizeContactValues(input: Partial<Record<ContactField, unknown>>): ContactValues {
  const clean = (value: unknown, multiline = false) => {
    const text = typeof value === "string" ? value.replace(CONTROL_CHARS, "") : "";
    return (multiline ? text : text.replace(LINE_BREAKS, " ")).trim();
  };

  return {
    name: clean(input.name),
    company: clean(input.company),
    email: clean(input.email).toLowerCase(),
    phone: clean(input.phone),
    projectType: clean(input.projectType),
    budget: clean(input.budget),
    message: clean(input.message, true),
  };
}

export type ContactErrorText = Ui["contactErrors"];

/** Returns the error for one field in the visitor's language, or undefined if it's valid. */
export function validateContactField(
  field: ContactField,
  values: ContactValues,
  t: ContactErrorText,
  locale: Locale,
): string | undefined {
  const value = values[field];

  switch (field) {
    case "name":
      if (!value) return t.nameRequired;
      if (value.length > limits.name) return format(t.nameTooLong, { max: limits.name });
      return;
    case "company":
      if (value.length > limits.company) return format(t.companyTooLong, { max: limits.company });
      return;
    case "email":
      if (!value) return t.emailRequired;
      if (value.length > limits.email || !EMAIL_PATTERN.test(value))
        return t.emailInvalid;
      return;
    case "phone":
      if (value && (value.length > limits.phone || !PHONE_PATTERN.test(value)))
        return t.phoneInvalid;
      return;
    case "projectType":
      if (!projectTypes.includes(value as (typeof projectTypes)[number])) return t.projectTypeRequired;
      return;
    case "budget":
      if (!budgetRanges.includes(value as (typeof budgetRanges)[number])) return t.budgetRequired;
      return;
    case "message":
      if (value.length < limits.messageMin)
        return format(t.messageTooShort, { min: limits.messageMin });
      if (value.length > limits.messageMax)
        return format(t.messageTooLong, { max: limits.messageMax.toLocaleString(locale) });
      return;
  }
}

export function validateContact(values: ContactValues, t: ContactErrorText, locale: Locale): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const error = validateContactField(field, values, t, locale);
    if (error) errors[field] = error;
  }
  return errors;
}
