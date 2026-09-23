export const site = {
  name: "Nocturne",
  legalName: "Nocturne Studio LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nocturne.studio",
  description:
    "Nocturne designs and builds websites, web applications, AI and automation systems for businesses that depend on their software working well.",
  email: "hello@nocturne.studio",
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
