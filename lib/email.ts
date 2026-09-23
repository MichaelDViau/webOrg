import "server-only";

interface NotificationEmail {
  subject: string;
  text: string;
  replyTo?: string;
}

/**
 * Sends a plain-text notification to the site owner through Resend.
 * In development without credentials, the email is printed to the server console instead.
 */
export async function sendNotification({ subject, text, replyTo }: NotificationEmail): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[email not configured in development] ${subject}\n${text}`);
      return true;
    }
    console.error("Email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null);

  if (!response?.ok) {
    console.error("Notification email failed", response?.status);
    return false;
  }
  return true;
}
