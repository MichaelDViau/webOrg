# Michael website

Marketing site for Michael, built with Next.js (App Router), TypeScript and Tailwind CSS v4. Every page is statically generated; the only client-side JavaScript is the mobile navigation, the homepage showcase and the contact form.

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

Secrets are only read on the server (`app/contact/actions.ts`) and are never exposed to the browser.

## Editing content

All copy lives in typed data files, so most updates don't touch components:

- `lib/site.ts`: company name, contact details, address and navigation
- `lib/services.ts`: the six service pages, including their search titles and meta descriptions
- `lib/projects.ts`: case studies shown on the homepage and `/work`
- `lib/showcase.ts`: the images that change when visitors hover the disciplines in the homepage hero
- `lib/technology.ts`: the technology groups shown on the homepage (each service also lists its own `stack`)
- `lib/company.ts`: process steps, working principles and the beliefs on the About page
- `lib/contact.ts`: form options (project types, budget ranges) and validation rules

Project images live in `public/work/`. Use 1600 × 1000 WebP or AVIF files; `next/image` generates responsive sizes automatically. Set `liveUrl` on a project to show a link to the live site.

## SEO

- Page metadata is built with `pageMetadata()` in `lib/metadata.ts`, which sets the title, description, canonical URL, Open Graph and X/Twitter tags consistently.
- Schema.org structured data is defined in `lib/structured-data.ts` and rendered with `components/JsonLd.tsx`: the organization on every page, the website on the homepage, a service, breadcrumb and FAQ block on each service page, and an article and breadcrumb block on each case study.
- `app/opengraph-image.png` is the default image shown when a page is shared. `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.

## Structure

```
app/                   Routes, metadata files, sitemap, robots and the contact server action
components/layout/     Header, footer, page header and logo
components/home/       Homepage sections
components/services/   Service page pieces
components/work/       Case study presentation
components/contact/    Contact form and field primitives
components/ui/         Buttons, sections, lists and other shared building blocks
lib/                   Content, metadata, structured data, validation and utilities
```

## Security

- Strict security headers (CSP, HSTS, frame protection, referrer and permissions policies) in `next.config.ts`.
- The contact form validates and normalizes all input on the server, uses a honeypot field and minimum fill time to filter bots, and is rate-limited per IP. The rate limiter is in memory; if you deploy across several instances, back it with a shared store such as Redis.
- Email is sent as plain text, so submitted content can't inject markup.

## Before launch

- Replace the sample case studies in `lib/projects.ts` and the images in `public/work/` with real client work (and confirm each client's permission to publish).
- Replace the placeholder email address and domain (`example.com`) and confirm the phone number and location in `lib/site.ts`.
- Review `app/privacy/page.tsx` with legal counsel.
- Set the environment variables above in your hosting provider.
