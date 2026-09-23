import type { ServiceSlug } from "./services";

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

export function validateContactField(field: ContactField, values: ContactValues): string | undefined {
  const value = values[field];

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length > limits.name) return `Please keep your name under ${limits.name} characters.`;
      return;
    case "company":
      if (value.length > limits.company) return `Please keep the company name under ${limits.company} characters.`;
      return;
    case "email":
      if (!value) return "Please enter your email address.";
      if (value.length > limits.email || !EMAIL_PATTERN.test(value))
        return "Please enter a valid email address, like name@company.com.";
      return;
    case "phone":
      if (value && (value.length > limits.phone || !PHONE_PATTERN.test(value)))
        return "Please enter a valid phone number, or leave this field blank.";
      return;
    case "projectType":
      if (!projectTypes.includes(value as (typeof projectTypes)[number])) return "Please choose a project type.";
      return;
    case "budget":
      if (!budgetRanges.includes(value as (typeof budgetRanges)[number])) return "Please choose a budget range.";
      return;
    case "message":
      if (value.length < limits.messageMin)
        return `Please tell us a little more about your project (at least ${limits.messageMin} characters).`;
      if (value.length > limits.messageMax)
        return `Please keep your description under ${limits.messageMax.toLocaleString("en-US")} characters.`;
      return;
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const error = validateContactField(field, values);
    if (error) errors[field] = error;
  }
  return errors;
}
