"use server";

import { headers } from "next/headers";
import {
  contactFields,
  normalizeContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactErrors;
}

const MIN_FILL_TIME_MS = 3000;

async function sendEmail(values: ContactValues): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Contact form submission (email delivery not configured in development):", values);
      return true;
    }
    console.error("Contact form email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return false;
  }

  const text = [
    `Name: ${values.name}`,
    `Company: ${values.company || "—"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Project type: ${values.projectType}`,
    `Budget: ${values.budget}`,
    "",
    values.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `New project inquiry: ${values.name}${values.company ? `, ${values.company}` : ""}`,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null);

  if (!response?.ok) {
    console.error("Contact form email failed", response?.status);
    return false;
  }
  return true;
}

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  // Bots commonly fill hidden fields and submit instantly. Report success so they don't retry.
  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("startedAt"));
  if ((typeof honeypot === "string" && honeypot.length > 0) || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "success" };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 })) {
    return {
      status: "error",
      message: `You've sent several requests in a short time. Please wait a few minutes, or email us at ${site.email}.`,
    };
  }

  const values = normalizeContactValues(
    Object.fromEntries(contactFields.map((field) => [field, formData.get(field)])),
  );
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the highlighted fields.", errors };
  }

  const sent = await sendEmail(values);
  if (!sent) {
    return {
      status: "error",
      message: `We couldn't send your message just now. Please try again, or email us directly at ${site.email}.`,
    };
  }

  return { status: "success" };
}
