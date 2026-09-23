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

/** Phone number in the format expected by `tel:` links. */
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
