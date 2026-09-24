import type { ProjectSlug, ProjectText } from "@/lib/projects";

export const projects: Record<ProjectSlug, ProjectText> = {
  "harbor-line-customer-portal": {
    linkLabel: "Inside the customer portal",
    client: "Harbor Line Logistics",
    title: "A shipment portal that replaced 400 support emails a week",
    type: "Web Application",
    industry: "Logistics",
    summary:
      "A customer portal for a regional freight carrier, giving shippers live tracking, documents and invoicing in one place.",
    results: [
      { value: "−71%", label: "Status-request emails" },
      { value: "2,300", label: "Active customer accounts" },
      { value: "11 wks", label: "To first release" },
    ],
    imageAlt:
      "Harbor Line shipper portal in dark mode, with a live shipment map, delivery status cards and on-time metrics",
    challenge:
      "Harbor Line's customer service team spent most of each day answering the same question: where is my shipment? Tracking data existed across three internal systems, but customers had no way to see it, and invoices were still sent as PDF attachments.",
    approach: [
      "We interviewed shippers and the customer service team to identify the six questions that made up most inbound requests, and designed the first release around answering those without a phone call.",
      "The portal reads from the carrier's dispatch system and NetSuite through a small integration layer that normalizes status updates and pushes changes to customers in real time.",
      "Invoices, proof-of-delivery documents and rate confirmations are generated automatically and available for download the moment they exist.",
    ],
    outcome:
      "Within three months of launch, status-request emails fell by 71%, and the customer service team was reorganized around account growth instead of inbox triage.",
  },
  "meridian-health-website": {
    linkLabel: "Walk through the new site",
    client: "Meridian Family Health",
    title: "A clinic website patients can actually navigate",
    type: "Website",
    industry: "Healthcare",
    summary:
      "A rebuilt website for a network of twelve primary care clinics, organized around locations, services and online booking.",
    results: [
      { value: "+46%", label: "Online appointment requests" },
      { value: "0.9s", label: "Largest Contentful Paint (p75)" },
      { value: "AA", label: "WCAG 2.2 conformance" },
    ],
    imageAlt:
      "Meridian Family Health homepage with next available appointments, a clinic finder and an overview of services",
    challenge:
      "Meridian's previous site had grown to over 300 pages through years of additions. Patients struggled to find hours for their nearest clinic, and the booking link was buried three levels deep on mobile.",
    approach: [
      "We reduced the site to a clear structure built around three things patients look for: a location, a service, or a provider. Every clinic page now carries its hours, services and a direct booking link.",
      "Content moved to Sanity with structured fields for clinics and providers, so updates to hours or staff appear everywhere at once.",
      "We implemented LocalBusiness and MedicalClinic structured data for every location and managed the redirect map from the old site.",
    ],
    outcome:
      "Online appointment requests rose 46% in the first quarter after launch, and organic traffic to clinic pages recovered to previous levels within five weeks.",
  },
  "cobalt-legal-document-assistant": {
    linkLabel: "How the assistant works",
    client: "Cobalt & Reyes LLP",
    title: "A document assistant that cites its sources",
    type: "AI Solution",
    industry: "Legal",
    summary:
      "An internal assistant that answers questions across 18,000 firm precedents and policy documents, with every answer linked to its source.",
    results: [
      { value: "6 hrs", label: "Saved per associate each week" },
      { value: "94%", label: "Answer accuracy on firm test set" },
      { value: "0", label: "Documents leaving the firm's tenant" },
    ],
    imageAlt:
      "Cobalt & Reyes research assistant answering a contract question, with cited firm precedents listed beside the answer",
    challenge:
      "Associates were spending hours locating precedent clauses and internal guidance spread across shared drives. The firm wanted to use AI, but only if answers could be verified and no client data left its Microsoft tenant.",
    approach: [
      "We built a test set of 250 real questions with answers verified by senior associates, and measured every design decision against it before rollout.",
      "Documents are indexed inside the firm's Azure environment, access follows existing matter permissions, and every answer links directly to the passages it was drawn from.",
      "Questions the system can't answer confidently are declined rather than guessed, with suggested documents to review instead.",
    ],
    outcome:
      "The assistant is now used daily by 60 attorneys. Internal surveys estimate six hours saved per associate each week on research and drafting.",
  },
  "fieldstone-commerce-performance": {
    linkLabel: "Where the speed came from",
    client: "Fieldstone Outdoor",
    title: "Cutting load times in half on a high-traffic storefront",
    type: "Web Optimization",
    industry: "Retail",
    summary:
      "A performance program for an outdoor equipment retailer, improving Core Web Vitals across 14,000 product pages ahead of peak season.",
    results: [
      { value: "3.8s → 1.6s", label: "Mobile LCP (p75)" },
      { value: "+18%", label: "Mobile conversion rate" },
      { value: "92%", label: "Pages passing Core Web Vitals" },
    ],
    imageAlt:
      "Fieldstone site speed report with Core Web Vitals scores, a load time trend and before-and-after results by page type",
    challenge:
      "Fieldstone's product pages had slowed steadily as marketing scripts, larger images and new features were added. Mobile visitors, who make up 70% of traffic, were waiting almost four seconds for the main product image.",
    approach: [
      "Field data showed three causes accounted for most of the delay: an unoptimized hero image pipeline, render-blocking third-party scripts, and uncached API calls on every page view.",
      "We rebuilt the image pipeline with AVIF and responsive sizing, deferred non-essential scripts until after interaction, and moved product data to edge caching with background revalidation.",
      "Performance budgets now run on every pull request, so regressions are caught before they reach customers.",
    ],
    outcome:
      "Mobile LCP improved from 3.8 to 1.6 seconds, and the mobile conversion rate rose 18% through the following peak season compared with the year before.",
  },
};
