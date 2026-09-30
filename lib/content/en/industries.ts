import type { IndustrySlug, IndustryText } from "@/lib/industries";

/**
 * Industries where our capabilities apply. This is a list of the kinds of solutions each one often needs,
 * never a claim about past clients. Do not add client names, results, or compliance certifications.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  "real-estate": {
    name: "Real Estate",
    short: "Real estate",
    lead: "Property managers, brokerages, and developers coordinate people, documents, and properties across many systems.",
    needs: [
      "Owner and tenant portals",
      "Maintenance and work-order management",
      "Listing, lead, and CRM integration",
      "Reporting across properties and portfolios",
    ],
  },
  hospitality: {
    name: "Hospitality",
    short: "Hospitality",
    lead: "Hotels, restaurants, and venues run on timing, staffing, and guest experience.",
    needs: [
      "Reservation and booking systems",
      "Staff scheduling and operations tools",
      "Guest communication and feedback workflows",
      "Point-of-sale and inventory integration",
    ],
  },
  tourism: {
    name: "Tourism",
    short: "Tourism",
    lead: "Tour operators, destinations, and travel businesses sell experiences across seasons and channels.",
    needs: [
      "Online booking and availability management",
      "Multi-language customer platforms",
      "Partner and supplier integrations",
      "Itinerary, capacity, and demand planning tools",
    ],
  },
  retail: {
    name: "Retail",
    short: "Retail",
    lead: "Retailers connect storefronts, e-commerce, inventory, and customer data.",
    needs: [
      "E-commerce and storefront platforms",
      "Inventory and order management",
      "Customer data and loyalty systems",
      "Sales and demand reporting dashboards",
    ],
  },
  "professional-services": {
    name: "Professional Services",
    short: "Professional services",
    lead: "Accounting, legal, consulting, and other firms sell expertise and manage client work.",
    needs: [
      "Client portals and secure document exchange",
      "Workflow and case management",
      "Time, billing, and reporting integrations",
      "AI-assisted drafting and document review",
    ],
  },
  logistics: {
    name: "Logistics",
    short: "Logistics",
    lead: "Carriers, distributors, and warehouses depend on accurate, real-time information.",
    needs: [
      "Order, shipment, and inventory tracking",
      "Warehouse and dispatch applications",
      "Carrier, customer, and partner integrations",
      "Operational dashboards and analytics",
    ],
  },
  "financial-services": {
    name: "Financial Services",
    short: "Financial services",
    lead: "Financial firms need dependable systems that protect sensitive data and support accurate reporting.",
    needs: [
      "Secure client portals and onboarding workflows",
      "Modernization of legacy platforms",
      "Data integration and reporting",
      "Audit trails and access controls",
    ],
  },
  healthcare: {
    name: "Healthcare",
    short: "Healthcare",
    lead: "Healthcare organizations coordinate patients, providers, and records under strict privacy expectations.",
    needs: [
      "Scheduling and patient communication tools",
      "Integration between clinical and administrative systems",
      "Secure data handling and access controls",
      "Operational reporting and workflow automation",
    ],
  },
  manufacturing: {
    name: "Manufacturing",
    short: "Manufacturing",
    lead: "Manufacturers coordinate production, inventory, quality, and suppliers.",
    needs: [
      "Production and inventory tracking systems",
      "Connecting shop-floor and business software",
      "Quality and maintenance workflow tools",
      "Operational reporting and dashboards",
    ],
  },
  "technology-companies": {
    name: "Technology Companies",
    short: "Technology companies",
    lead: "Software and technology companies need engineering capacity and sound architecture.",
    needs: [
      "Product engineering and feature development",
      "Cloud infrastructure and deployment pipelines",
      "Architecture reviews and technical planning",
      "Integration and API development",
    ],
  },
};

export const industriesPage = {
  metaTitle: "Industries We Build Technology For",
  metaDescription:
    "Custom software and technology solutions for ten industries, including real estate, hospitality, retail, logistics, financial services, healthcare and manufacturing.",
  eyebrow: "Industries",
  title: "Technology for the way your industry works.",
  lead: "The details differ by industry. The engineering approach carries across them. These are the kinds of solutions businesses in each industry often need.",
  note: "This list shows where our capabilities apply. It isn't a list of past clients. For regulated industries such as financial services and healthcare, we design with your privacy and security requirements in mind, and your own compliance team makes the final call.",
  needsLabel: "Solutions often needed",
  relatedLabel: "Related capabilities",
  ctaTitle: "Don't see your industry?",
  ctaLead: "The approach works for any business with a technology challenge. Tell us about yours.",
};

export type IndustriesPage = typeof industriesPage;
