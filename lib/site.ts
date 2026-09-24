export const site = {
  name: "Michael",
  legalName: "Michael",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  email: "hello@example.com",
  phone: "+1 (512) 555-0147",
  address: {
    locality: "Austin",
    region: "TX",
    regionName: "Texas",
    country: "US",
  },
} as const;

export const location = `${site.address.locality}, ${site.address.regionName}`;

/**
 * Public scheduling link (Cal.com, Calendly or similar) for free consultations.
 * When it isn't set, "book a call" links fall back to the contact form.
 */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || null;
export const bookingHref = bookingUrl ? "/book" : "/contact";

/** Phone number in the format expected by `tel:` links. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

export interface NavItem {
  /** Key into the `nav` labels of the current language. */
  key: "services" | "technology" | "work" | "about" | "contact";
  href: string;
}

export const mainNav: NavItem[] = [
  { key: "services", href: "/services" },
  { key: "technology", href: "/technology" },
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
];

/** Contact is reached through the header's "Contact Us" button rather than the main navigation. */
export const contactNavItem: NavItem = { key: "contact", href: "/contact" };
