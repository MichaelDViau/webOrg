import type { DemoSlug, DemoText } from "@/lib/demos";

/**
 * Concept demos, not client projects. Every screen uses obviously fictional sample data and and says so.
 * Never add a real client name, logo, quote or result here.
 * Add a case study only when a real client approves it in writing, with measured results.
 */
export const demos: Record<DemoSlug, DemoText> = {
  "property-portal": {
    name: "Owner and tenant portal",
    card: "Owners and tenants see status, statements and requests without calling the office.",
    seoTitle: "Concept Demo: Owner and Tenant Portal",
    metaDescription:
      "A concept demo of a portal where property owners and tenants see statements, documents and maintenance status without calling the office.",
    headline: "A portal where owners and tenants see status without calling.",
    lead: "A concept demo for property managers and real-estate operators: one place for statements, documents and maintenance requests.",
    problem:
      "A property office fields the same questions all day. Where is my maintenance request? Is my statement ready? Where's my lease? Each answer exists somewhere. The person asking can't see it.",
    does: [
      {
        title: "Owner view",
        detail: "The latest statement, open requests and documents, with nothing from other owners.",
      },
      {
        title: "Tenant view",
        detail: "Submit a request with photos, see who's assigned and when it's done.",
      },
      {
        title: "Office view",
        detail: "Every request in one queue, with status, vendor and history.",
      },
      {
        title: "Connected to your software",
        detail: "Reads from your property management system through its API or exports, where they exist.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Owner dashboard",
        caption: "What an owner sees after signing in: their statement, open requests and documents.",
        app: "Owner portal",
        tabs: ["Overview", "Statements", "Requests", "Documents"],
        kpis: [
          { label: "Open requests", value: "2" },
          { label: "New statement", value: "Ready" },
          { label: "Documents to review", value: "1" },
        ],
        listTitle: "Requests at your properties",
        rows: [
          { primary: "Unit 4B · Kitchen faucet leaking", secondary: "Vendor assigned · Visit booked", badge: "In progress", tone: "info" },
          { primary: "Unit 12 · Hallway light out", secondary: "Reported by tenant", badge: "New", tone: "warn" },
          { primary: "Unit 7 · Smoke detector battery", secondary: "Completed, photo attached", badge: "Done", tone: "good" },
        ],
      },
      {
        kind: "flow",
        title: "One request, from report to done",
        caption: "The history of a single maintenance request. Everyone sees the same status.",
        app: "Request history",
        steps: [
          { when: "Day 1", title: "Tenant reports the problem", detail: "Photos and a short description, submitted once.", state: "done" },
          { when: "Day 1", title: "Office confirms and assigns a vendor", detail: "The tenant and the owner are notified.", state: "done" },
          { when: "Day 2", title: "Vendor visit booked", detail: "The tenant picks a time window.", state: "active" },
          { when: "Day 3", title: "Work completed and closed", detail: "Photo and invoice attached to the request.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Status calls and emails per week, before and after.",
      "Time from a new request to an assigned vendor.",
      "Share of owners who open their statement in the portal.",
      "Hours the office spends assembling month-end statements.",
    ],
    honestNote:
      "This is a concept demo built to show what we would build for a property business. It uses sample data and isn't connected to any real property, owner or tenant.",
  },

  "firm-intake-hub": {
    name: "Client document intake hub",
    card: "Documents arrive complete and on time, with reminders sent for you.",
    seoTitle: "Concept Demo: Client Document Intake Hub",
    metaDescription:
      "A concept demo of a document intake hub for accounting and professional firms: checklists, secure upload, automatic reminders and AI that drafts while your team approves.",
    headline: "A hub where client documents arrive complete, without chasing.",
    lead: "A concept demo for accounting and professional firms: a checklist for each client, secure upload and reminders that send themselves.",
    problem:
      "Every busy season, staff chase clients for the same missing documents by email and text. Files arrive in different places under different names. Nobody can see at a glance who is ready.",
    does: [
      {
        title: "A checklist for each client",
        detail: "Clients see exactly what's needed and what's already received.",
      },
      {
        title: "Secure upload",
        detail: "Documents go straight into the right client's file, not into an inbox.",
      },
      {
        title: "Automatic reminders",
        detail: "Clients are reminded of what's missing, so staff don't write the same email again.",
      },
      {
        title: "AI drafts, your team approves",
        detail: "AI suggests what each document is. A person confirms before anything is filed.",
      },
    ],
    screens: [
      {
        kind: "list",
        title: "Office dashboard",
        caption: "Which clients are ready, waiting or late, at a glance.",
        app: "Intake hub",
        tabs: ["Clients", "Reminders", "Settings"],
        kpis: [
          { label: "Ready", value: "12" },
          { label: "Waiting on client", value: "8" },
          { label: "Late", value: "3" },
        ],
        listTitle: "Clients this week",
        rows: [
          { primary: "Client A · Individual return", secondary: "8 of 8 documents received", badge: "Ready", tone: "good" },
          { primary: "Client B · Small business", secondary: "5 of 9 received · Reminder sent", badge: "Waiting", tone: "warn" },
          { primary: "Client C · Individual return", secondary: "2 of 8 received · Due in 3 days", badge: "Late", tone: "neutral" },
        ],
      },
      {
        kind: "list",
        title: "AI drafts, your team approves",
        caption: "AI suggests a label for each uploaded file. Nothing is filed until a person approves it.",
        app: "Review queue",
        tabs: ["To review", "Approved"],
        kpis: [
          { label: "To review", value: "4" },
          { label: "Approved today", value: "9" },
        ],
        listTitle: "Suggested labels",
        rows: [
          { primary: "scan_0412.pdf", secondary: "Suggested: Bank statement, March", badge: "Awaiting approval", tone: "info" },
          { primary: "IMG_2231.jpg", secondary: "Suggested: Receipt, office supplies", badge: "Awaiting approval", tone: "info" },
          { primary: "notes.docx", secondary: "Unclear, needs a person to label it", badge: "Needs a person", tone: "warn" },
        ],
      },
    ],
    measure: [
      "Days from the first request to a complete file.",
      "Reminders staff send by hand per client.",
      "Share of clients complete before the deadline.",
      "How often a person corrects the AI's suggested label.",
    ],
    honestNote:
      "This is a concept demo. It uses sample data, no real client documents, and shows how an intake hub could work. AI suggestions in it are illustrations, not measured results.",
  },

  "revenue-website": {
    name: "Revenue website with lead flow",
    card: "Every inquiry gets an instant confirmation and a personal reply within one business hour.",
    seoTitle: "Concept Demo: Revenue Website With Lead Flow",
    metaDescription:
      "A concept demo of a website whose forms confirm instantly, route to the right person in the CRM and lead to a personal reply within one business hour.",
    headline: "A website whose inquiries never wait.",
    lead: "A concept demo of the lead flow behind a revenue website: a short form, an instant confirmation, routing to the right person and a personal reply.",
    problem:
      "Inquiries arrive and wait. Nobody is sure who owns them, replies take days, and the website can't show which pages actually bring inquiries.",
    does: [
      {
        title: "A short form",
        detail: "Five fields at most, in the visitor's language, with consent where the law requires it.",
      },
      {
        title: "An instant confirmation",
        detail: "The visitor gets an email at once, in their language, so they know it arrived.",
      },
      {
        title: "Routing in the CRM",
        detail: "The inquiry lands in the CRM and goes to the right person.",
      },
      {
        title: "A personal reply and a booked call",
        detail: "A person replies within one business hour and books the discovery call.",
      },
    ],
    screens: [
      {
        kind: "form",
        title: "The inquiry form",
        caption: "Five short groups of fields, a consent line and no puzzles.",
        app: "Contact form",
        heading: "Tell us what you want to fix",
        fields: [
          { label: "Name and role", value: "Sample Person, Operations manager" },
          { label: "Company and website", value: "Sample Company · example.com" },
          { label: "Email", value: "sample@example.com" },
          { label: "What do you want to fix?", value: "Inquiries wait too long for a reply.", tall: true },
          { label: "Preferred language", value: "English" },
        ],
        submit: "Send request",
        note: "By sending, you agree that we may reply to you. See the privacy policy.",
      },
      {
        kind: "flow",
        title: "What happens after Send",
        caption: "The flow the form triggers. This site runs the same one.",
        app: "Lead flow",
        steps: [
          { when: "Instantly", title: "Confirmation in the visitor's language", detail: "An automatic email says the request arrived.", state: "done" },
          { when: "Instantly", title: "Entry in the CRM, routed to the right person", detail: "Source page and language are recorded.", state: "done" },
          { when: "Within one business hour", title: "Personal reply", detail: "A person answers, in the visitor's language.", state: "active" },
          { when: "Next", title: "Discovery call booked", detail: "The visitor picks a time.", state: "todo" },
        ],
      },
    ],
    measure: [
      "Time to the first personal reply.",
      "Visits to inquiries, by page and by language.",
      "Inquiries by source.",
      "Share of inquiries that turn into a booked call.",
    ],
    honestNote:
      "This is a concept demo with sample data. The same flow runs on this website, so you can try it yourself: send a request, and watch what arrives in your inbox.",
  },
};

export const workPage = {
  metaTitle: "Work: Concept Demos of Systems We Build",
  metaDescription:
    "Working concept demos of a property portal, a document intake hub and a revenue website with lead flow. They use sample data and are not client projects.",
  eyebrow: "Work",
  title: "Working demos of the systems we build.",
  lead: "Three concept demos of systems for the industries we serve. Each uses sample data, so you always know what you're looking at.",
  honestTitle: "What you're looking at",
  honestBody:
    "Concept demos use sample data and aren't client projects.",
  seeDemo: "See the demo",
};

export const demoPage = {
  problem: "The problem",
  whatItDoes: "What it does",
  screens: "The screens",
  technology: "Technology",
  measure: "What we would measure for a client",
  built: "Built for",
  services: "Services behind it",
  otherDemos: "Other demos",
  aboutThisDemo: "About this demo",
};

export type WorkPage = typeof workPage;
export type DemoPage = typeof demoPage;
