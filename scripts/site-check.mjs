#!/usr/bin/env node
/**
 * Site check: crawls a running copy of the site and verifies what search engines and visitors rely on.
 *
 *   npm run build && npm run start          (in one terminal)
 *   npm run site-check                      (in another; pass a URL to check somewhere else)
 *
 * It reads /sitemap.xml and then fetches every listed page, so a new page is covered as soon as it is in
 * the sitemap. Checked per page: HTTP status, one <h1>, a unique title and description of sensible length,
 * a canonical URL that matches the sitemap, reciprocal hreflang links, Open Graph tags, valid JSON-LD,
 * images with alt text, and internal links (including #anchors) that resolve without redirects.
 * It also checks robots.txt. It needs no dependencies and exits with an error if anything blocking is found.
 */

const base = (process.argv[2] ?? process.env.SITE_CHECK_URL ?? "http://localhost:3000").replace(/\/$/, "");

const errors = [];
const warnings = [];
const fail = (page, message) => errors.push(`${page}: ${message}`);
const warn = (page, message) => warnings.push(`${page}: ${message}`);

/** Fetches a path on the site without following redirects, so redirects are seen and reported. */
async function get(path) {
  return fetch(new URL(path, base), { redirect: "manual", headers: { "user-agent": "site-check" } });
}

const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

/** Reads the value of one attribute from a tag's source text. */
function attr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  return match ? decode(match[2] ?? match[3]) : undefined;
}

const tagsOf = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
const pathOf = (url) => new URL(url, base).pathname;

// ── robots.txt ──────────────────────────────────────────────────────────────────────────────────────────
const robots = await get("/robots.txt");
const robotsText = await robots.text();
if (robots.status !== 200) fail("/robots.txt", `status ${robots.status}`);
if (!/^sitemap:\s*\S+\/sitemap\.xml/im.test(robotsText)) fail("/robots.txt", "does not point to the sitemap");
if (/^disallow:\s*\/\s*$/im.test(robotsText)) fail("/robots.txt", "blocks the whole site");

// ── sitemap ─────────────────────────────────────────────────────────────────────────────────────────────
const sitemapResponse = await get("/sitemap.xml");
if (sitemapResponse.status !== 200) {
  console.error(`/sitemap.xml returned ${sitemapResponse.status}. Is the site running at ${base}?`);
  process.exit(1);
}
const sitemap = await sitemapResponse.text();
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
  const block = match[1];
  return {
    loc: block.match(/<loc>([^<]+)<\/loc>/)[1],
    alternates: [...block.matchAll(/<xhtml:link[^>]*>/g)].map((link) => ({
      lang: attr(link[0], "hreflang"),
      href: attr(link[0], "href"),
    })),
  };
});
// The sitemap holds the public URL; the check runs against `base`, so compare paths.
const sitemapPaths = new Set(entries.map((entry) => pathOf(entry.loc)));
if (new Set(entries.map((entry) => entry.loc)).size !== entries.length) fail("sitemap.xml", "contains duplicate URLs");

// ── pages ───────────────────────────────────────────────────────────────────────────────────────────────
const pages = new Map();
for (const entry of entries) {
  const path = pathOf(entry.loc);
  const response = await get(path);
  if (response.status !== 200) {
    fail(path, `status ${response.status} (the sitemap should list only pages that return 200)`);
    continue;
  }
  pages.set(path, { entry, html: await response.text() });
}

const titles = new Map();
const descriptions = new Map();
const linkTargets = new Map(); // internal href -> pages that link to it

for (const [path, { entry, html }] of pages) {
  const head = html.slice(0, html.indexOf("</head>") + 7 || undefined);

  // Language
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/i)?.[1];
  const expectedLang = /^\/(es|fr)(\/|$)/.exec(path)?.[1] ?? "en";
  if (lang !== expectedLang) fail(path, `<html lang="${lang}"> should be "${expectedLang}"`);

  // Title and description
  const title = decode(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? "").trim();
  if (!title) fail(path, "missing <title>");
  else {
    if (title.length > 65) warn(path, `title is ${title.length} characters (search results cut around 60): "${title}"`);
    (titles.get(`${lang}|${title}`) ?? titles.set(`${lang}|${title}`, []).get(`${lang}|${title}`)).push(path);
  }
  const description = tagsOf(head, "meta").map((tag) => (attr(tag, "name") === "description" ? attr(tag, "content") : null)).find(Boolean);
  if (!description) fail(path, "missing meta description");
  else {
    if (description.length < 70 || description.length > 165) warn(path, `description is ${description.length} characters (aim for 70 to 160, hard limit around 165)`);
    (descriptions.get(`${lang}|${description}`) ?? descriptions.set(`${lang}|${description}`, []).get(`${lang}|${description}`)).push(path);
  }

  // Headings
  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1Count !== 1) fail(path, `has ${h1Count} <h1> elements (expected exactly 1)`);

  // Canonical and hreflang
  const links = tagsOf(head, "link");
  const canonical = links.map((tag) => (attr(tag, "rel") === "canonical" ? attr(tag, "href") : null)).find(Boolean);
  if (!canonical) fail(path, "missing canonical link");
  else if (pathOf(canonical) !== path) fail(path, `canonical points to ${canonical}`);
  const alternates = links.filter((tag) => attr(tag, "rel") === "alternate" && attr(tag, "hreflang"));
  const hreflangs = new Map(alternates.map((tag) => [attr(tag, "hreflang"), attr(tag, "href")]));
  for (const code of ["en", "es", "fr", "x-default"]) {
    if (!hreflangs.has(code)) fail(path, `missing hreflang="${code}"`);
  }
  for (const [code, href] of hreflangs) {
    if (!sitemapPaths.has(pathOf(href))) fail(path, `hreflang="${code}" points to ${href}, which is not in the sitemap`);
    else if (code !== "x-default" && code !== lang) {
      const back = pages.get(pathOf(href))?.html.match(new RegExp(`hreflang="${lang}"[^>]*href="([^"]+)"|href="([^"]+)"[^>]*hreflang="${lang}"`, "i"));
      const backHref = back?.[1] ?? back?.[2];
      if (pages.has(pathOf(href)) && (!backHref || pathOf(backHref) !== path)) fail(path, `hreflang="${code}" is not reciprocated by ${pathOf(href)}`);
    }
  }
  if (entry.alternates.length && entry.alternates.length < 3) warn(path, "sitemap entry lists fewer than three language alternates");

  // Robots meta
  const robotsMeta = tagsOf(head, "meta").find((tag) => attr(tag, "name") === "robots");
  if (robotsMeta && /noindex/i.test(attr(robotsMeta, "content") ?? "")) fail(path, "is marked noindex but is in the sitemap");

  // Open Graph and social
  const properties = new Map(tagsOf(head, "meta").map((tag) => [attr(tag, "property") ?? attr(tag, "name"), attr(tag, "content")]));
  for (const key of ["og:title", "og:description", "og:image", "og:url", "og:locale", "twitter:card"]) {
    if (!properties.get(key)) fail(path, `missing ${key}`);
  }
  const ogImage = properties.get("og:image");
  if (ogImage && !pages.has(path + "#og-checked")) {
    if (!linkTargets.has(pathOf(ogImage))) linkTargets.set(pathOf(ogImage), []);
    linkTargets.get(pathOf(ogImage)).push(`${path} (og:image)`);
  }

  // Structured data
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(json);
      for (const item of Array.isArray(data) ? data : [data]) {
        if (item["@context"] !== "https://schema.org" || !item["@type"]) fail(path, "JSON-LD block without @context or @type");
      }
    } catch {
      fail(path, "JSON-LD block is not valid JSON");
    }
  }
  if (!/application\/ld\+json/.test(html)) warn(path, "has no structured data");

  // Images
  for (const tag of tagsOf(html, "img")) {
    if (attr(tag, "alt") === undefined) fail(path, `image without alt: ${attr(tag, "src")}`);
  }

  // Internal links
  for (const tag of tagsOf(html.replace(/<script[\s\S]*?<\/script>/gi, ""), "a")) {
    const href = attr(tag, "href");
    if (!href || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    const url = new URL(href, new URL(path, base));
    if (url.origin !== new URL(base).origin && !href.startsWith("/")) continue;
    const target = url.pathname + (url.hash || "");
    if (!linkTargets.has(target)) linkTargets.set(target, []);
    linkTargets.get(target).push(path);
  }
}

for (const [key, list] of [...titles, ...descriptions]) {
  if (list.length > 1) fail(list[0], `title or description "${key.split("|")[1].slice(0, 60)}…" is shared with ${list.length - 1} other page(s): ${list.slice(1, 3).join(", ")}`);
}

// Every internal link should return 200 directly, and its #anchor should exist on the target page.
const checked = new Map();
for (const [target, sources] of linkTargets) {
  const [path, hash] = target.split("#");
  if (!checked.has(path)) {
    const response = await get(path || "/");
    checked.set(path, { status: response.status, location: response.headers.get("location"), html: response.status === 200 ? await response.text() : "" });
  }
  const result = checked.get(path);
  const from = [...new Set(sources)].slice(0, 2).join(", ");
  if (result.status >= 300 && result.status < 400) warn(from, `link to ${path} redirects (${result.status}) to ${result.location}`);
  else if (result.status !== 200) fail(from, `link to ${path} returns ${result.status}`);
  else if (hash && !new RegExp(`\\sid="${hash}"`).test(result.html)) fail(from, `link to ${target}: no element with id="${hash}"`);
}

// ── report ──────────────────────────────────────────────────────────────────────────────────────────────
const list = (title, items, mark) => {
  if (!items.length) return;
  console.log(`\n${title} (${items.length})`);
  for (const item of items) console.log(`  ${mark} ${item}`);
};
console.log(`Site check of ${base}: ${pages.size} pages from the sitemap, ${linkTargets.size} distinct internal targets.`);
list("Errors", errors, "✗");
list("Warnings", warnings, "•");
console.log(errors.length ? `\n${errors.length} error(s) found.` : "\nNo errors.");
process.exit(errors.length ? 1 : 0);
