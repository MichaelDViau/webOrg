import Script from "next/script";

/**
 * Optional privacy-friendly analytics (Plausible): no cookies, no consent banner needed.
 * Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN to your site's domain to turn it on. For a self-hosted instance,
 * also set NEXT_PUBLIC_PLAUSIBLE_SRC to its script URL and allow that origin in next.config.ts.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";

  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
