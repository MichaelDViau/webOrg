export const site = {
  name: "Michael",
  legalName: "Michael",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, ""),
  description:
    "Michael designs and builds websites, web applications, AI solutions and business automation for startups, growing companies and established organizations.",
  email: "hello@example.com",
  phone: "+1 (512) 555-0147",
  address: {
    locality: "Austin",
    region: "TX",
    regionName: "Texas",
    country: "US",
  },
  hours: "Monday to Friday, 9am to 6pm Central",
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
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

/** Contact is reached through the header's "Contact Us" button rather than the main navigation. */
export const contactNavItem: NavItem = { label: "Contact", href: "/contact" };
