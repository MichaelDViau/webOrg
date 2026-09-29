import { site } from "@/lib/site";

/**
 * security.txt (RFC 9116): tells security researchers how to report a vulnerability. The expiry date is
 * set a year ahead each time the site is built, so keep deploying at least once a year.
 */
export const dynamic = "force-static";

export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);

  const body = [
    `Contact: mailto:${site.email}`,
    `Expires: ${expires.toISOString()}`,
    "Preferred-Languages: en, fr, es",
    `Canonical: ${site.url}/.well-known/security.txt`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
