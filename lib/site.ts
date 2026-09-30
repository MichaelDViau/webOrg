import type { ServiceSlug } from "./services";

export const site = {
  name: "Michael",
  legalName: "Michael",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  /** Replace with the company's real address before launch (`npm run launch-check` flags example.com). */
  email: "hello@example.com",
  address: {
    locality: "Austin",
    region: "TX",
    regionName: "Texas",
    country: "US",
  },
  /** Countries served, shown on Contact and in structured data. Names live in each language's `ui.site.countries`. */
  countries: ["US", "CA", "MX"],
} as const;

export const location = `${site.address.locality}, ${site.address.regionName}`;

/**
 * Domicile printed in the Mexican privacy notice (LFPDPPP requires it). Replace the bracketed text
 * with the company's registered address; `npm run launch-check` fails while a bracket remains.
 */
export const legalAddress = "[registered address to confirm]";

/**
 * Founder photo for the About page: a real photo of a real person, never stock. Put the file in
 * `public/photos/` and set the path here, for example "/photos/founder.webp". Until then the About
 * page shows the founder section without a photo.
 */
export const founderPhoto: { src: string; width: number; height: number } | null = null;

/** Public scheduling link (Cal.com, Calendly or similar) for discovery calls. Enables the /book page. */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || null;

/** The main button everywhere: start a conversation about a project. */
export const contactHref = "/contact";
/** The second button: the capabilities overview. */
export const capabilitiesHref = "/services";
/** The Digital Systems Audit (a fixed-scope technical assessment) and the free website Snapshot. */
export const auditHref = "/audit";
export const snapshotHref = "/snapshot";

/**
 * The problems on the home page's "technology solutions" section, each pointing at the capability that
 * answers it. The order matches `home.solutions.items` in every language.
 */
export const solutionServices: ServiceSlug[] = [
  "custom-software",
  "application-modernization",
  "cloud-solutions",
  "database-solutions",
  "ai-solutions",
  "software-architecture",
  "technology-consulting",
  "digital-transformation",
  "web-applications",
];

/**
 * The Work section (concept demos). Off until there are real demos or case studies to show. While it is
 * off, /work and /work/<demo> return 404 and nothing links to them: no menu item, sitemap entry, demo card
 * or copy. The pages, components and content stay in the repo; set this to true to bring them all back.
 */
export const workEnabled = false;

export interface NavItem {
  /** Key into the `nav` labels of the current language. */
  key: "services" | "industries" | "audit" | "work" | "howWeWork" | "about";
  href: string;
}

/** Top menu, in the order the guideline sets. The "Book an audit" button sits beside it. */
export const mainNav: NavItem[] = [
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  ...(workEnabled ? [{ key: "work" as const, href: "/work" }] : []),
  { key: "howWeWork", href: "/how-we-work" },
  { key: "about", href: "/about" },
];

export interface FooterItem {
  key: "standards" | "insights" | "contact" | "partners" | "audit" | "snapshot" | "websiteCheck" | "privacy" | "terms" | "cookies" | "mexicoNotice";
  href: string;
}

/** Footer groups: the guideline puts Standards, Insights, Contact and Legal here. */
export const footerNav: { company: FooterItem[]; legal: FooterItem[] } = {
  company: [
    { key: "standards", href: "/standards" },
    { key: "insights", href: "/insights" },
    { key: "partners", href: "/partners" },
    { key: "audit", href: "/audit" },
    { key: "contact", href: "/contact" },
    { key: "snapshot", href: "/snapshot" },
    { key: "websiteCheck", href: "/website-check" },
  ],
  legal: [
    { key: "privacy", href: "/privacy" },
    { key: "terms", href: "/terms" },
    { key: "cookies", href: "/cookies" },
    { key: "mexicoNotice", href: "/aviso-de-privacidad" },
  ],
};
