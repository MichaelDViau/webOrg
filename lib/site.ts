export const site = {
  name: "Michael",
  legalName: "Michael",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  description:
    "Michael designs and builds websites, web applications, AI and automation systems for businesses that depend on their software working well.",
  email: "hello@example.com",
  phone: "+1 (512) 555-0147",
  location: "Austin, Texas",
  hours: "Monday–Friday, 9am–6pm CT",
} as const;

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
