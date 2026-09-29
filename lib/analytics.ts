/**
 * Privacy-friendly analytics events. They only run when the Plausible script is loaded
 * (see components/Analytics.tsx), and never carry personal data: just the event, the page and the language.
 */
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export type AnalyticsEvent = "audit_request" | "snapshot_request" | "contact_request" | "newsletter_signup";

export function track(event: AnalyticsEvent, props: { page: string; language: string }): void {
  try {
    window.plausible?.(event, { props });
  } catch {
    // Analytics must never break the page.
  }
}
