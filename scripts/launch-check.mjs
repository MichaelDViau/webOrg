#!/usr/bin/env node
/**
 * Launch check: finds everything that must be replaced or reviewed before the site goes live.
 * Run it with `npm run launch-check`. It exits with an error while a placeholder remains, so it can also
 * run in CI before a production deploy. It reads source files and environment variables only.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const errors = [];
const warnings = [];

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function walk(dir) {
  return readdirSync(join(root, dir)).flatMap((name) => {
    const path = join(dir, name);
    return statSync(join(root, path)).isDirectory() ? walk(path) : [path];
  });
}

// Environment: the process environment plus .env.local / .env.production, if present.
const env = { ...process.env };
for (const file of [".env", ".env.production", ".env.local"]) {
  if (!existsSync(join(root, file))) continue;
  for (const line of read(file).split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (match && match[2]) env[match[1]] = match[2].replace(/^["']|["']$/g, "");
  }
}

// 1. Company details in lib/site.ts
const site = read("lib/site.ts");
if (/email:\s*"[^"]*@example\.com"/.test(site)) errors.push("lib/site.ts: replace the placeholder email address (hello@example.com).");
if (/legalAddress\s*=\s*"[^"]*\[/.test(site)) errors.push("lib/site.ts: replace legalAddress with the registered address (required in the Mexican privacy notice).");
if (/founderPhoto[^=]*=\s*null/.test(site)) warnings.push("lib/site.ts: no founder photo yet. The About page needs a real photo, never a stock one.");

// 2. Prices
const pricing = read("lib/pricing.ts");
const unset = [...pricing.matchAll(/"?([\w-]+)"?:\s*\{\s*from:\s*0\b/g)].map((match) => match[1]);
if (unset.length) errors.push(`lib/pricing.ts: "from" price is still 0000 for ${unset.join(", ")}.`);

// 3. Environment variables
const needed = {
  NEXT_PUBLIC_SITE_URL: "canonical URLs, sitemap and structured data",
  RESEND_API_KEY: "the confirmation email and the team notification",
  CONTACT_TO_EMAIL: "where new requests are delivered",
  CONTACT_FROM_EMAIL: "the sender of the confirmation (needs SPF, DKIM and DMARC on the domain)",
  HUBSPOT_PORTAL_ID: "sending requests to HubSpot",
  HUBSPOT_FORM_AUDIT: "the audit form in HubSpot",
  HUBSPOT_FORM_SNAPSHOT: "the Snapshot form in HubSpot",
  HUBSPOT_FORM_CONTACT: "the contact form in HubSpot",
  HUBSPOT_FORM_NEWSLETTER: "the newsletter form in HubSpot",
};
for (const [name, purpose] of Object.entries(needed)) {
  if (!env[name]) errors.push(`Environment: ${name} is not set (${purpose}).`);
}
if (/example\.com/.test(env.NEXT_PUBLIC_SITE_URL ?? "")) errors.push("Environment: NEXT_PUBLIC_SITE_URL still points to example.com.");
const optional = {
  NEXT_PUBLIC_BOOKING_URL: "the booking calendar on /book",
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: "privacy-friendly analytics (inquiries by page and language)",
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: "Google Search Console",
  PAGESPEED_API_KEY: "the instant speed check",
  ANTHROPIC_API_KEY: "the AI assistant (hidden without it)",
};
for (const [name, purpose] of Object.entries(optional)) {
  if (!env[name]) warnings.push(`Environment: ${name} is not set (${purpose}).`);
}

// 4. Words the guideline forbids, in every language's content
const banned = [
  /\b10x\b/i, /skyrocket/i, /game[- ]changer/i, /digital transformation/i, /\bsynergy\b/i, /cutting[- ]edge/i,
  /AI[- ]powered/i, /trusted by (hundreds|thousands)/i, /AI agency/i, /transformation num[ée]rique/i, /synergie/i, /à la fine pointe/i, /transformación digital/i, /sinergia/i,
  /de vanguardia/i, /testimonial/i,
  // The site never calls the company new or gives a founding year.
  /new company/i, /founded in/i, /nouvelle entreprise/i, /fondée en/i, /empresa nueva/i, /fundada en/i,
];
// These two are fine inside "what we don't promise" lists on the standards pages, and nowhere else.
const onlyInPromises = [/fully autonomous/i, /guaranteed (100|speed|score|ranking)/i];
for (const file of walk("lib/content").filter((path) => path.endsWith(".ts"))) {
  const text = read(file);
  const patterns = file.endsWith("standards.ts") ? banned : [...banned, ...onlyInPromises];
  for (const pattern of patterns) {
    const hit = text.match(pattern);
    if (!hit) continue;
    // The word "testimonial" may appear in comments that forbid it.
    const line = text.split("\n").find((l) => pattern.test(l)) ?? "";
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) continue;
    errors.push(`${file}: forbidden phrase "${hit[0]}" (see the guideline, "Words" and "Never").`);
  }
}

// 5. Images: no stock photos of people
if (existsSync(join(root, "public/photos"))) {
  const photos = readdirSync(join(root, "public/photos")).filter((name) => !name.startsWith("."));
  if (photos.length) warnings.push(`public/photos has ${photos.length} file(s). Only real photos of your own team belong there, never stock.`);
}

// 6. Reviews that only a person can do
warnings.push("Have your lawyer review the privacy policy, terms, cookie notice and Mexican privacy notice (lib/content/*/legal.ts), in all three languages.");
warnings.push("Have a native speaker review the French (Quebec) and Spanish content before launch; the guideline asks for native writing.");
warnings.push("Confirm each commitment on the standards pages matches the Digital Systems Operating Manual (security, AI policy, privacy).");
warnings.push("Confirm business hours (ui.site.hours) and the countries served match how you operate.");

const list = (title, items, mark) => {
  if (!items.length) return;
  console.log(`\n${title} (${items.length})`);
  for (const item of items) console.log(`  ${mark} ${item}`);
};

console.log("Launch check for", relative(process.cwd(), root) || ".");
list("Must fix before launch", errors, "✗");
list("Review before launch", warnings, "•");
console.log(errors.length ? `\n${errors.length} blocking item(s) remain.` : "\nNo blocking items. Review the notes above before launch.");
process.exit(errors.length ? 1 : 0);
