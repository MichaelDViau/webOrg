import type { IndustrySlug, IndustryText } from "@/lib/industries";

/**
 * Industry pages prove we understand their world: daily problems in their vocabulary, the systems we
 * build for them, the software they use, and the relevant demo. Product names are examples of software
 * we can connect to, never a claim of partnership or of past clients.
 */
export const industries: Record<IndustrySlug, IndustryText> = {
  property: {
    name: "Property and real-estate operators",
    short: "Property and real estate",
    seoTitle: "Software for Property and Real-Estate Operators",
    metaDescription:
      "Owner and tenant portals, maintenance request flows and reporting for property managers and real-estate operators. Connected to your property management software.",
    headline: "Owners and tenants get answers without calling your office.",
    lead: "For property managers, landlords and real-estate operators running many units, owners and vendors at once.",
    homeProblems: [
      "Owners ask for statements, and we send PDFs by hand.",
      "Maintenance requests arrive by text, email and phone.",
      "Leases live in one system, work orders in another.",
    ],
    problems: [
      {
        quote: "Tenants text, email and call about the same maintenance request.",
        detail: "Requests get logged three times or not at all, and nobody can say who's on it.",
      },
      {
        quote: "Owners ask for their statement, and we send a PDF by hand.",
        detail: "Month-end turns into a week of exports, attachments and follow-up emails.",
      },
      {
        quote: "Work orders are in one system, leases in another.",
        detail: "Staff jump between tools to answer a simple question.",
      },
      {
        quote: "Move-in and renewal paperwork moves by email.",
        detail: "Missing signatures and documents surface days after they were due.",
      },
    ],
    systems: [
      {
        title: "Owner and tenant portal",
        detail: "Statements, documents, requests and status in one place, each person seeing only their own.",
      },
      {
        title: "Maintenance request flow",
        detail: "A request is captured once, assigned to a vendor and tracked until it's closed.",
      },
      {
        title: "Leasing and renewal intake",
        detail: "Applications and renewal paperwork collected, checked for what's missing and routed.",
      },
      {
        title: "Owner reporting",
        detail: "The monthly numbers assembled from your systems, ready to review.",
      },
    ],
    softwareIntro:
      "We connect to the software you already run, through its API, exports or database access where they exist. For example:",
    software: ["AppFolio", "Buildium", "Yardi", "Rent Manager", "QuickBooks", "Google Workspace", "Microsoft 365"],
    faqs: [
      {
        question: "Do we have to replace our property management software?",
        answer:
          "No. The portal reads from it and, where possible, writes back to it. The audit confirms what your software allows.",
      },
      {
        question: "Can owners and tenants use it on their phones?",
        answer: "Yes. It works in the browser on a phone or a computer, with nothing to install.",
      },
    ],
  },

  accounting: {
    name: "Accounting and professional firms",
    short: "Accounting and professional firms",
    seoTitle: "Software for Accounting and Professional Firms",
    metaDescription:
      "Client document intake, engagement status and internal dashboards for accounting and professional firms. Stop chasing documents by email.",
    headline: "Client documents arrive complete and on time, without chasing.",
    lead: "For accounting firms, bookkeepers and professional practices that spend busy season chasing clients for the same missing documents.",
    homeProblems: [
      "We chase clients for the same missing documents every season.",
      "Files arrive by email, text and shared drives.",
      "Nobody can see at a glance which clients are ready.",
    ],
    problems: [
      {
        quote: "We chase clients for the same missing documents every season.",
        detail: "Staff write the same reminder emails by hand, client after client.",
      },
      {
        quote: "Files arrive by email, by text and in three shared drives.",
        detail: "Someone renames and refiles each one before real work can begin.",
      },
      {
        quote: "I can't see which clients are ready and which are waiting.",
        detail: "Status lives in people's heads and in a spreadsheet nobody trusts.",
      },
      {
        quote: "Clients keep asking where their return or file stands.",
        detail: "Every status question interrupts someone doing billable work.",
      },
    ],
    systems: [
      {
        title: "Client document intake hub",
        detail: "A checklist for each client, secure upload and automatic reminders for what's still missing.",
      },
      {
        title: "Engagement status portal",
        detail: "Clients see where their file stands without calling.",
      },
      {
        title: "Onboarding intake",
        detail: "New client details and engagement paperwork collected once, in one place.",
      },
      {
        title: "Internal readiness dashboard",
        detail: "Who is ready, who is waiting and who is late, at a glance.",
      },
    ],
    softwareIntro:
      "We connect to the tools your firm already uses, through their APIs, exports or email. For example:",
    software: ["QuickBooks", "Xero", "Karbon", "TaxDome", "Canopy", "Microsoft 365", "Google Workspace"],
    faqs: [
      {
        question: "How do you protect client documents?",
        answer:
          "Documents are stored encrypted, each client sees only their own, and access is logged. It all follows our published security and privacy standards.",
      },
      {
        question: "Does AI read our clients' documents?",
        answer:
          "Only if you want it to. When it does, AI drafts a label or a summary and a person on your team approves it. Read our AI policy for the details.",
      },
    ],
  },

  distribution: {
    name: "B2B distribution and trade",
    short: "B2B distribution and trade",
    seoTitle: "Software for B2B Distribution and Trade Businesses",
    metaDescription:
      "Customer portals, quote intake and order and inventory integrations for B2B distributors and trade businesses. Stop retyping orders.",
    headline: "Orders, quotes and customer questions handled without retyping.",
    lead: "For distributors, wholesalers and trade businesses where orders and quote requests arrive by email and phone.",
    homeProblems: [
      "Customers email orders, and we retype them.",
      "Quote requests wait for the one person who knows the prices.",
      "Customers call to ask where their order is.",
    ],
    problems: [
      {
        quote: "Customers email their orders, and we retype them into the system.",
        detail: "Every retyped line is a chance for a wrong quantity or a missed item.",
      },
      {
        quote: "Quote requests wait for the one person who knows the prices.",
        detail: "When that person is away, deals slow down or go to a competitor.",
      },
      {
        quote: "Customers call to ask where their order is.",
        detail: "The answer exists in the ERP, where the customer can't see it.",
      },
      {
        quote: "Stock levels and open orders don't match across systems.",
        detail: "Sales promises what the warehouse doesn't have.",
      },
    ],
    systems: [
      {
        title: "Customer portal for orders and account status",
        detail: "Customers place orders, see history and check status without calling.",
      },
      {
        title: "Quote request intake",
        detail: "A structured request that reaches the right person with everything they need.",
      },
      {
        title: "Order and inventory sync",
        detail: "Your ERP, e-commerce and accounting systems kept in step.",
      },
      {
        title: "Sales and operations dashboards",
        detail: "Open quotes, late orders and stock in one view.",
      },
    ],
    softwareIntro:
      "We connect to your ERP, accounting and sales tools, through their APIs, exports or database access where they exist. For example:",
    software: ["NetSuite", "Sage", "Acumatica", "QuickBooks", "Odoo", "Shopify", "WooCommerce"],
    faqs: [
      {
        question: "Can customers see their own prices?",
        answer:
          "Yes, if your system holds customer-specific pricing and lets us read it. The portal shows each customer only their own prices and orders.",
      },
      {
        question: "Do we have to change our ERP?",
        answer: "No. We build around it and keep it as the source for orders, stock and pricing.",
      },
    ],
  },
};

export const industriesPage = {
  metaTitle: "Industries: Property, Accounting and Distribution",
  metaDescription:
    "Systems built for property and real-estate operators, accounting and professional firms, and B2B distribution and trade businesses.",
  eyebrow: "Industries",
  title: "We know their daily problems, and the software they run on.",
  lead: "Three industries, chosen because their problems repeat and because we know the software they run on.",
  problemsLabel: "Typical problems",
  linkLabel: "See the industry page",
  ctaTitle: "Your business isn't on this list?",
  ctaLead: "The audit works for any established service or operations business. Tell us what you want to fix.",
};

export type IndustriesPage = typeof industriesPage;
