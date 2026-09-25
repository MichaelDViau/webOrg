# Michael website

Marketing site for Michael, built with Next.js (App Router), TypeScript and Tailwind CSS v4. Marketing pages are statically generated. Client-side JavaScript is limited to the mobile navigation, the homepage showcase, the contact form, the website check and the AI assistant.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

In development, contact form submissions are printed to the server console when email delivery isn't configured. In production, the form reports an error instead of silently dropping requests.

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Local development server         |
| `npm run build`     | Production build (type-checked)  |
| `npm run start`     | Serve the production build       |
| `npm run typecheck` | TypeScript check without a build |

## Environment variables

| Variable               | Required   | Description                                                   |
| ---------------------- | ---------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes        | Canonical site URL used for metadata, sitemap and schema.org. |
| `RESEND_API_KEY`       | Production | API key for [Resend](https://resend.com), used by the form.   |
| `CONTACT_TO_EMAIL`     | Production | Inbox that receives project requests.                         |
| `CONTACT_FROM_EMAIL`   | Production | Verified sender, e.g. `Michael <website@example.com>`.   |
| `ANTHROPIC_API_KEY`    | Optional   | Enables the AI assistant. The chat widget is hidden without it. |
| `PAGESPEED_API_KEY`    | Recommended | Google PageSpeed Insights key for the free website check.   |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Cal.com or Calendly link. Enables `/book`; otherwise booking links go to `/contact`. |

Secrets are only read on the server (`lib/actions/contact.ts`) and are never exposed to the browser.

## Languages

The site is available in English (`/services`), Spanish (`/es/services`) and French (`/fr/services`). Visitors switch with the globe menu in the header, which opens the same page in the other language.

- Pages live under `app/[lang]` and are prerendered for every language. Rewrites in `next.config.ts` serve English at unprefixed URLs and redirect `/en/...` to them, so each page has one address per language.
- Server Components read the current language with `getLocale()` or `getContent()` from `lib/i18n/server.ts`. Client Components receive their text as props.
- Internal links use `components/i18n/Link.tsx`, which keeps the visitor's language (`/work` becomes `/es/work` on Spanish pages).
- Every page lists its translations for search engines (`hreflang`), and the sitemap includes all three languages.
- Spanish uses the formal "usted". French is written for North American readers ("vous", "courriel").

## Editing content

All copy lives in typed data files, so most updates don't touch components. Each language has its own folder, `lib/content/en`, `lib/content/es` and `lib/content/fr`, with the same files; TypeScript reports anything missing from a translation:

- `ui.ts`: interface text for every page, form, error message and the assistant
- `services.ts`: the six service pages, including their search titles, meta descriptions and technology lists
- `projects.ts`: case study text shown on the homepage and `/work`
- `technology.ts`: the homepage technology summary and the full web and AI catalogs on `/technology`
- `company.ts`: process steps, working principles, the beliefs on the About page and the homepage FAQ
- `photos.ts`: alt text for the office and team photos

Details shared by every language stay in `lib/`:

- `lib/site.ts`: company name, contact details, address and navigation links
- `lib/projects.ts`: each project's year, services, technology and image
- `lib/services.ts`: the service slugs and their order
- `lib/showcase.ts`: the images that change when visitors hover the disciplines in the homepage hero
- `lib/photos.ts`: the photo files (in `public/photos/`)
- `lib/contact.ts`: form options (project types, budget ranges) and validation rules. Submitted values stay in English so notification emails read the same whatever the visitor's language.

Project images live in `public/work/`. Use 1600 × 1000 WebP or AVIF files; `next/image` generates responsive sizes automatically. Set `liveUrl` on a project to show a link to the live site.

## Brand

- Typeface: Geist Sans, self-hosted through the `geist` package.
- Colors and the heading scale are defined once in `app/globals.css`. The brand slate `#607D8B` is used for lines, indicators and the logo; the deeper `accent-strong` shade is used for small text so it meets WCAG AA contrast.

## Lead generation features

- **Free website check** (`/website-check`): runs Google PageSpeed Insights on a visitor's site and shows scores, Core Web Vitals and the top fixes (`lib/website-check.ts`, `lib/actions/website-check.ts`). If the visitor leaves an email, the results are sent to `CONTACT_TO_EMAIL` as a lead. Rate-limited to 5 checks per hour per IP.
- **AI assistant**: a chat widget on every page, answering in the page language from the site's own content (`lib/assistant.ts`) through `app/api/assistant/route.ts`. It streams replies from Claude Opus 5 at low effort with prompt caching, falls back automatically if a request is declined, only accepts same-origin requests, and is rate-limited to 20 messages per 10 minutes per IP. Set a monthly spend limit in the Anthropic Console.
- **Online booking** (`/book`): embeds your scheduling page when `NEXT_PUBLIC_BOOKING_URL` is set, and every "Book a free call" link points to it.

## SEO

- Page metadata is built with `pageMetadata()` in `lib/metadata.ts`, which sets the title, description, canonical URL, Open Graph and X/Twitter tags consistently.
- Schema.org structured data is defined in `lib/structured-data.ts` and rendered with `components/JsonLd.tsx`: the organization on every page, the website on the homepage, a service, breadcrumb and FAQ block on each service page, and an article and breadcrumb block on each case study.
- `app/opengraph-image.png` is the default image shown when a page is shared. `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.

## Structure

```
app/[lang]/            Pages, one version per language
app/                   Metadata files, sitemap, robots and the assistant API route
components/layout/     Header, footer, page header, logo, theme toggle and language menu
components/i18n/       Language-aware link
components/home/       Homepage sections
components/services/   Service page pieces
components/work/       Case study presentation
components/contact/    Contact form and field primitives
components/ui/         Buttons, sections, lists and other shared building blocks
lib/content/           Copy for each language
lib/i18n/              Languages, path helpers and content lookup
lib/actions/           Contact and website check server actions
lib/                   Shared data, metadata, structured data, validation and utilities
```

## Security

- Strict security headers (CSP, HSTS, frame protection, referrer and permissions policies) in `next.config.ts`.
- The contact form validates and normalizes all input on the server, uses a honeypot field and minimum fill time to filter bots, and is rate-limited per IP. The rate limiter is in memory; if you deploy across several instances, back it with a shared store such as Redis.
- Email is sent as plain text, so submitted content can't inject markup.

## Before launch

- Replace the sample case studies in `lib/projects.ts` and `lib/content/*/projects.ts` and the images in `public/work/` with real client work (and confirm each client's permission to publish).
- Replace the placeholder email address and domain (`example.com`) and confirm the phone number and location in `lib/site.ts`.
- Replace the photos in `public/photos/` with photos of your own team and workspace when you have them, or confirm the license for the current ones.
- Review the privacy policy (`privacy` in `lib/content/*/ui.ts`) with legal counsel, and have a native speaker review the Spanish and French copy.
- Set the environment variables above in your hosting provider.
