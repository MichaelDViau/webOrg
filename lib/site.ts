export const site = {
  name: "Michael",
  legalName: "Michael",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  /** Replace with the company's real address before launch (`npm run launch-check` flags example.com). */
  email: "hello@example.com",
  foundedYear: 2026,
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

/** The main button everywhere: booking a Digital Systems Audit. */
export const auditHref = "/audit";
/** The second button everywhere: the free Snapshot of the visitor's site. */
export const snapshotHref = "/snapshot";

export interface NavItem {
  /** Key into the `nav` labels of the current language. */
  key: "services" | "industries" | "audit" | "work" | "howWeWork" | "about";
  href: string;
}

/** Top menu, in the order the guideline sets. The "Book an audit" button sits beside it. */
export const mainNav: NavItem[] = [
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  { key: "audit", href: "/audit" },
  { key: "work", href: "/work" },
  { key: "howWeWork", href: "/how-we-work" },
  { key: "about", href: "/about" },
];

export interface FooterItem {
  key: "standards" | "insights" | "contact" | "partners" | "snapshot" | "websiteCheck" | "privacy" | "terms" | "cookies" | "mexicoNotice";
  href: string;
}

/** Footer groups: the guideline puts Standards, Insights, Contact and Legal here. */
export const footerNav: { company: FooterItem[]; legal: FooterItem[] } = {
  company: [
    { key: "standards", href: "/standards" },
    { key: "insights", href: "/insights" },
    { key: "partners", href: "/partners" },
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
