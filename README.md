# Michael website

The company website. The company is a **custom software development and technology solutions company**: it designs, builds, integrates, and modernizes the technology businesses run on. The site says so at once, shows nine capability categories, and has one job: to start a conversation about a project (the Digital Systems Audit and the free Snapshot remain as ways to begin). It works in English, French (Quebec) and Spanish.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Pages are statically generated. Client-side JavaScript is limited to the header menu, the forms, the instant speed check and the AI assistant (which loads only once the browser is idle).

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

| Script                 | Purpose                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| `npm run dev`          | Local development server                                                    |
| `npm run build`        | Production build (type-checked)                                             |
| `npm run start`        | Serve the production build                                                  |
| `npm run typecheck`    | TypeScript check without a build                                            |
| `npm run launch-check` | Lists every placeholder and review still open before launch (exits 1 if any) |
| `npm run site-check`   | Crawls a running copy of the site and checks what search engines rely on (see below) |

In development, form submissions and confirmation emails are printed to the server console when email isn't configured. In production, the forms report an error instead of silently dropping requests.

## The pages

| Section       | Address                                             | Its job                                                  |
| ------------- | --------------------------------------------------- | -------------------------------------------------------- |
| Home          | `/`                                                 | Eight sections: hero, what we do, capabilities, approach, solutions, why us, industries, project inquiry |
| Services      | `/services`, `/services/<slug>` (9)                 | The nine capability categories: capabilities, challenges, approach, illustration, FAQ |
| Industries    | `/industries`                                       | Ten industries, with the solutions each often needs (not a client list) |
| Audit         | `/audit`                                            | The Digital Systems Audit: a fixed-scope technical assessment |
| Snapshot      | `/snapshot`                                         | A free, low-commitment look at a visitor's website       |
| Work          | `/work`, `/work/<slug>`: off for now (see below)    | 3 concept demos on sample data, hidden until real ones exist |
| How we work   | `/how-we-work`                                      | Reduce the feeling of risk                               |
| Standards     | `/standards`, `/standards/<slug>` (5)               | Security, performance, accessibility, AI policy, privacy |
| About         | `/about`, `/partners`                               | Human credibility and a "check our work" block          |
| Insights      | `/insights`, `/insights/<slug>`                     | Articles and the newsletter form                         |
| Contact       | `/contact`, `/book`                                 | Short form, booking calendar, reply promise              |
| Legal         | `/privacy`, `/terms`, `/cookies`, `/aviso-de-privacidad` | Privacy policy, terms, cookie notice, Mexican privacy notice |
| Tool          | `/website-check`                                    | Instant automated speed check (Google Lighthouse)        |

The top menu is Services · Industries · How we work · About, a **Discuss your project** button, and a language dropdown at the top right (English by default; it lists Español and Français in their own language, text only, no flags). Below 1280px wide the menu collapses behind a button. Standards, Insights, Partners, the Audit, Contact and Legal are in the footer.

The nine capability categories are custom software; web and application development; AI solutions and automation; database solutions; cloud solutions and infrastructure; software architecture; application modernization; digital transformation; and consulting and technical problem-solving. Every capability the company offers is listed under one of them, in all three languages.

## Languages

English lives at unprefixed URLs (`/services`), French at `/fr/services` and Spanish at `/es/services`. Each page has one address per language, lists its translations for search engines (`hreflang`), and appears in the sitemap in all three.

- Pages live under `app/[lang]` and are prerendered for every language. Rewrites in `next.config.ts` serve English at unprefixed URLs and redirect `/en/...` to them.
- Server Components read the current language with `getLocale()` or `getContent()` from `lib/i18n/server.ts`. Client Components receive their text as props.
- Internal links use `components/i18n/Link.tsx`, which keeps the visitor's language.
- French is written for Quebec ("vous", "courriel"). Spanish uses the formal "usted".
- **A native speaker should review the French and Spanish before launch.** The guideline asks for French written natively for Quebec, not machine-translated.

## Editing content

All copy lives in typed data files, so most updates don't touch components. Each language has its own folder, `lib/content/en`, `fr` and `es`, with the same files. English defines the shape, and TypeScript reports anything missing from a translation.

| File               | What it holds                                                                 |
| ------------------ | ----------------------------------------------------------------------------- |
| `ui.ts`            | Navigation, buttons, prices' wording, forms, errors, the confirmation email, the assistant |
| `home.ts`          | The eight home page sections                                                  |
| `audit.ts`         | The audit page and the Snapshot page                                          |
| `services.ts`      | The nine capability categories (every capability is listed here) and the overview |
| `industries.ts`    | The ten industries and the industries page                                    |
| `work.ts`          | The three concept demos, including the sample data on each screen             |
| `how-we-work.ts`   | The five-step approach, working principles, ownership and answers for technical reviewers |
| `standards.ts`     | The five standards and the overview                                           |
| `about.ts`         | About and Partners                                                            |
| `insights.ts`      | The articles and the Insights index                                           |
| `legal.ts`         | Privacy policy, terms, cookie notice, Mexican privacy notice                  |

Details shared by every language stay in `lib/`: `site.ts` (company name, contact, navigation), `pricing.ts` (every price), `services.ts`, `industries.ts`, `demos.ts`, `standards.ts` and `insights.ts` (slugs, order and links between them).

To add an article, add its slug and date in `lib/insights.ts` and its text in each language's `insights.ts`. If the headline is too long for a search result (over about 55 characters), add a shorter `seoTitle`: it becomes the page's `<title>`, and the visible headline stays as written.

### Prices

Every price comes from `lib/pricing.ts`. Only the Digital Systems Audit has a published range (US$1,500–7,500, credited in full to a project signed within 60 days). Projects have no listed prices: they are scoped and quoted in writing after a conversation.

### Tone

The guideline's rules for words are enforced by `npm run launch-check`, which fails on phrases such as "10x", "skyrocket", "game-changer", "revolutionize", "unlock your potential", "empowering innovation", "next-generation", "cutting-edge", "proof before promises", "trusted by hundreds", and any "new company" or "founded in" wording. Never invent clients, logos, testimonials, numbers, awards, certifications or years of experience. The illustrations use generic sample interfaces and are labeled as illustrations.

## The lead flow

Every form follows the same path: **instant confirmation in the visitor's language → entry in HubSpot, routed to the right person → a person replies within one business hour → discovery call.**

- The **project inquiry** form (on the home page and `/contact`) asks for name, company, business email, project type, a description of the challenge and an optional scope, plus a consent checkbox that links to the privacy policy. The reply comes in the language of the page. The audit form has five groups of fields at most; the Snapshot form is shorter. The newsletter form sits at the bottom of articles.
- Spam protection without puzzles: a hidden field, a minimum fill time and a rate limit per IP.
- `lib/actions/lead.ts` validates on the server, notifies the team by email (with the source page, language and a "reply due" line), sends the visitor an automatic confirmation in their preferred language (at most twice per address per hour), and submits to HubSpot. The request counts as received if either the team email or HubSpot has it.
- `lib/crm.ts` uses the HubSpot Forms API. Create one form per action in HubSpot (audit, Snapshot, contact, newsletter), give them the fields `email`, `firstname`, `lastname`, `jobtitle`, `company`, `website`, `phone`, `message` and `hs_language`, and route each with a HubSpot workflow. The project type and scope are sent at the top of the `message` field. Without HubSpot configured, email alone is used.

## Environment variables

| Variable                                 | Required   | Description                                                                 |
| ---------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                   | Yes        | Canonical site URL used for metadata, sitemap and schema.org.               |
| `RESEND_API_KEY`                         | Production | [Resend](https://resend.com) key, used for the team notification and the confirmation. |
| `CONTACT_TO_EMAIL`                       | Production | Inbox that receives requests and the replies to confirmations.              |
| `CONTACT_FROM_EMAIL`                     | Production | Verified sender, e.g. `Michael <website@example.com>`.                      |
| `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_*`    | Production | Portal ID and one form GUID each for audit, Snapshot, contact and newsletter. |
| `NEXT_PUBLIC_BOOKING_URL`                | Recommended | Cal.com or Calendly link. Enables `/book`.                                 |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`           | Recommended | Turns on privacy-friendly analytics (no cookies, no consent banner). Events: `audit_request`, `snapshot_request`, `contact_request`, `newsletter_signup`, each with the page and language. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`   | Recommended | Google Search Console token, from day one.                                 |
| `PAGESPEED_API_KEY`                      | Recommended | Google PageSpeed Insights key for the instant speed check.                 |
| `ANTHROPIC_API_KEY`                      | Optional   | Enables the AI assistant. The chat widget is hidden without it.            |

Secrets are only read on the server and are never exposed to the browser. For confirmations to reach inboxes, set up SPF, DKIM and DMARC on the sending domain.

## Look and feel

- **The home headline keeps its "Z" in every language**: a plain lead-in and a black block on the first line, a black block and plain text on the second (`lead`, `block1`, `block2`, `tail` in `home.ts`, for example "We build [the systems] / [your business] runs on."). Its size follows the screen width so the two lines never wrap; on phones each phrase gets its own line. When you edit or translate it, keep all four parts and check the result at several widths.
- Typeface: Geist Sans, self-hosted as a 17 KB Latin subset in `app/fonts/` (weights 400 to 600, loaded through `next/font/local`). It only contains the characters the site uses; `app/fonts/README.md` explains how to regenerate it if a new character or weight is needed. Colors and the heading scale are defined once in `app/globals.css`. One deep accent color plus neutrals; the deeper `accent-strong` shade is used for small text so it meets WCAG AA contrast.
- Illustrations sit in a `VisualPanel` (`components/visuals/parts.tsx`), which is a CSS size container. Diagrams switch between stacked and side-by-side layouts on the *panel's* width (`@lg:` and similar variants), not the viewport's, because the same panel is 400px wide in the two-column layout at 1024px and 900px wide in the single column just below it. Use `@lg` (512px) as the point where nodes go side by side.
- The signature illustration is the **system map** (`components/illustrations/SystemMap.tsx`), plain HTML and CSS so it reads in every language. There are no stock photos: the About page shows a real photo of the founder once you set `founderPhoto` in `lib/site.ts`.
- Share images are in `public/og/` (one per language, 1200 × 630).

## Search (SEO)

- Page metadata is built with `pageMetadata()` in `lib/metadata.ts`: title, description, canonical URL, Open Graph and X/Twitter tags, and the `hreflang` alternates. Keep titles to about 60 characters (65 with the site name) and descriptions to 160: search results cut them off beyond that, and `npm run site-check` warns.
- Structured data (`lib/structured-data.ts`): the organization on every page, the website on the home page, service, breadcrumb and FAQ blocks, and an article block on each article.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. `/.well-known/security.txt` tells researchers how to report a vulnerability.
- Old addresses from the previous version of the site redirect to their replacements (see `redirects()` in `next.config.ts`).

## Performance, accessibility and security

- Static pages, one self-hosted font, no images on most pages, and no third-party scripts unless you enable analytics. The AI assistant loads only when the browser is idle. Target: good Core Web Vitals in real-user data (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1). Check them in Search Console once there is traffic.
- WCAG 2.2 AA baseline: skip link, visible focus, labeled fields with error messages, contrast checked in every section, reduced-motion support. The pages were checked with axe at desktop and phone widths, in all three languages.
- Strict security headers (CSP, HSTS, frame protection, referrer, permissions and cross-origin policies) in `next.config.ts`. Forms validate on the server, and email is sent as plain text so submitted content can't inject markup. The rate limiter is in memory; if you deploy across several instances, back it with a shared store such as Redis.

## Checking the site

`npm run site-check` needs a running copy of the site (`npm run build && npm run start`, then in another terminal `npm run site-check`, or pass a URL to check another address). It reads `/sitemap.xml` and fetches every page in it, so a new page is covered automatically. It fails on: a status other than 200, a page without exactly one `<h1>`, a missing or duplicated title or description, a canonical that does not match the sitemap, missing or non-reciprocal `hreflang` links, missing Open Graph tags, invalid JSON-LD, images without `alt`, and internal links (including `#anchors`) that break or redirect. It also checks `robots.txt`. It has no dependencies.

It does not measure speed or contrast. For those, run Lighthouse and axe against a production build.

## Before launch

Run `npm run launch-check` with your production environment variables. It lists the blocking items. The people-only steps are:

- Fill in the service "from" prices in `lib/pricing.ts`.
- Replace the placeholder email address in `lib/site.ts`, and set the registered address (`legalAddress`) used in the Mexican privacy notice. Confirm the location and business hours, and the countries served.
- Add a real photo of the founder (`founderPhoto`) and, if you want, the founder's story on the About page.
- Have your lawyer write or review the privacy policy, terms, cookie notice and Mexican privacy notice in all three languages, including your Quebec Law 25 duties (Part 18 of the manual).
- Have a native speaker review the French (Quebec) and Spanish text.
- Confirm each commitment on the standards pages against the Digital Systems Operating Manual.
- Create the HubSpot forms and routing, set up SPF/DKIM/DMARC, and test every form in all three languages end to end, including the reply within one business hour.
- Put domain, hosting, HubSpot, analytics and email accounts in the company's name, protected by the password manager and MFA.
- Add Search Console and analytics, and check Core Web Vitals on mobile.

## Later

- The guideline suggests a headless CMS (for example Payload or Sanity) so pages can be edited in three languages without a developer. Content is typed data files for now, which keeps the site fast and dependency-free.
- The Work section (concept demos) is switched off: `workEnabled` is `false` in `lib/site.ts`. While it is off, `/work` and the demo pages return 404, and the menu item, sitemap entries, the Partners "demos" item, the assistant's links and the terms paragraph about demos are all hidden. Set it to `true` to bring them back. Replace concept demos with case studies only when a real client approves one in writing, with measured results. Partner logos only with written permission.
- Two articles a month; rewrite pages that don't convert. Measure every month: audit and Snapshot requests (by page and language), the visit-to-inquiry rate on service and industry pages, time to first personal reply, Core Web Vitals in real-user data, and newsletter sign-ups.
