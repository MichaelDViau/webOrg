import "server-only";

interface Email {
  subject: string;
  text: string;
  /** Where replies go. */
  replyTo?: string;
}

interface OutgoingEmail extends Email {
  to: string;
}

function emailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  return apiKey && to && from ? { apiKey, to, from } : null;
}

async function deliver(config: { apiKey: string; from: string }, message: OutgoingEmail): Promise<boolean> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: config.from,
      to: [message.to],
      reply_to: message.replyTo,
      subject: message.subject,
      text: message.text,
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null);

  if (!response?.ok) {
    console.error("Email failed", response?.status);
    return false;
  }
  return true;
}

/**
 * Sends a plain-text notification to the team inbox through Resend.
 * In development without credentials, the email is printed to the server console instead.
 */
export async function sendNotification({ subject, text, replyTo }: Email): Promise<boolean> {
  const config = emailConfig();
  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[email not configured in development] ${subject}\n${text}`);
      return true;
    }
    console.error("Email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return false;
  }
  return deliver(config, { to: config.to, subject, text, replyTo });
}

/**
 * Sends the instant confirmation to a visitor, from the company's own domain. Replies go to the team
 * inbox so a person sees them. SPF, DKIM and DMARC on the sending domain keep it out of spam.
 */
export async function sendConfirmation(to: string, { subject, text }: Pick<Email, "subject" | "text">): Promise<boolean> {
  const config = emailConfig();
  if (!config) {
    if (process.env.NODE_ENV !== "production") console.info(`[confirmation not sent in development] to ${to}\n${subject}\n${text}`);
    return false;
  }
  return deliver(config, { to, subject, text, replyTo: config.to });
}
