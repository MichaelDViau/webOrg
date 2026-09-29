import type { ServiceSlug, ServiceText } from "@/lib/services";

/** Every service page follows the same structure so buyers can compare them. */
export const services: Record<ServiceSlug, ServiceText> = {
  "revenue-websites": {
    name: "Revenue websites",
    card: "Websites built to turn visitors into qualified inquiries, answered fast.",
    seoTitle: "Revenue Websites for Service Businesses",
    metaDescription:
      "Company websites built around one job: getting the right visitors to ask for help, and answering fast. Fast, accessible, in English, French and Spanish.",
    headline: "A website that brings in inquiries, not just visitors.",
    lead: "We design and build company websites around one job: getting the right people to ask for help, and making sure someone answers quickly.",
    forWhom: "For service and operations businesses whose website is their first salesperson.",
    problemQuotes: [
      "People visit, but few reach out.",
      "Our website looks fine, but I can't tell what it earns us.",
      "Inquiries land in an inbox and wait.",
    ],
    problemDetail:
      "Most websites explain what a company is. A revenue website explains what will change for the visitor, shows what it costs to start, and connects every form to a fast reply.",
    changes: [
      "Visitors see what you do, for whom, and what to do next within ten seconds.",
      "Every inquiry gets an instant confirmation and reaches the right person.",
      "You see inquiries by page and by language, so you know what works.",
      "Pages load fast on phones and meet accessibility standards.",
    ],
    included: [
      {
        title: "Content and structure",
        detail: "Pages organized around your buyer's questions, not around your org chart.",
      },
      {
        title: "Design and build",
        detail: "A calm, fast, accessible site your team can edit in every language you need.",
      },
      {
        title: "Lead flow",
        detail: "Forms connected to your CRM, an instant confirmation, and routing to the right person.",
      },
      {
        title: "Measurement",
        detail: "Analytics and Search Console set up, with a monthly view of inquiries and reply times.",
      },
      {
        title: "Launch checks",
        detail: "Redirects, phone testing, keyboard and contrast checks, and forms tested in every language.",
      },
    ],
    phases: [
      {
        title: "Plan",
        detail: "Sitemap, messages and the inquiry flow, agreed in writing.",
      },
      {
        title: "Design",
        detail: "Layouts and a visual system you approve on real content.",
      },
      {
        title: "Build in the open",
        detail: "A staging link from the first week and a written update every week.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We go live, monitor and fix anything that comes up for 90 days.",
      },
    ],
    faqs: [
      {
        question: "Can our team edit the site?",
        answer:
          "Yes. We set up content editing so your team can change pages in every language without calling a developer.",
      },
      {
        question: "Do you rebuild or improve what we already have?",
        answer: "Either. The audit tells you which one costs less for what you need.",
      },
      {
        question: "Will the site rank on Google?",
        answer:
          "We build the technical foundation: structure, speed, metadata and structured data. We don't promise rankings, and we don't sell links.",
      },
    ],
  },

  "client-portals": {
    name: "Client and owner portals",
    card: "One secure place for status, documents and invoices, so clients stop calling.",
    seoTitle: "Client and Owner Portals",
    metaDescription:
      "Secure portals where clients and owners see their status, documents and invoices without calling your office. Connected to the software you already use.",
    headline: "Clients see their own status. Your team stops answering the same calls.",
    lead: "We build secure portals where clients, tenants or owners find their status, documents and invoices themselves.",
    forWhom: "For businesses whose clients keep calling or emailing to ask where things stand.",
    problemQuotes: [
      "Clients call to ask where things stand.",
      "We send the same documents by email again and again.",
      "Owners want reports, and we assemble them by hand.",
    ],
    problemDetail:
      "Every status call is a sign that information exists somewhere your client can't see. A portal puts the right information in front of the right person, and nobody else.",
    changes: [
      "Clients find status, documents and invoices on their own.",
      "Your team answers fewer status calls and emails.",
      "Every request has a history: who asked, who answered, when.",
      "Each person sees only their own information.",
    ],
    included: [
      {
        title: "Secure sign-in and permissions",
        detail: "Each client, owner or tenant sees only their own records.",
      },
      {
        title: "Status and documents",
        detail: "Dashboards, files and statements, updated from your existing software.",
      },
      {
        title: "Requests and messages",
        detail: "One place to ask, with a clear record of who answered and when.",
      },
      {
        title: "Connection to your software",
        detail: "Billing, management or accounting software, through its API, exports or database.",
      },
      {
        title: "Admin view for your team",
        detail: "Everything in one queue, with status and history.",
      },
    ],
    phases: [
      {
        title: "Map what clients ask",
        detail: "We list the questions that fill your inbox and phone, and pick the ones to answer first.",
      },
      {
        title: "First release",
        detail: "The few screens that answer most questions, tested with real users.",
      },
      {
        title: "Grow with real use",
        detail: "We add what people ask for, in fixed-price phases.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We launch, monitor and fix anything that comes up for 90 days.",
      },
    ],
    faqs: [
      {
        question: "How do you keep client data safe?",
        answer:
          "Each user sees only their own records, sign-in uses multi-factor authentication where it fits, and everything follows our published security standard.",
      },
      {
        question: "Can it connect to the software we already use?",
        answer:
          "Often yes, through its API, exports or database access. We check what's possible during the audit, before you commit to anything.",
      },
      {
        question: "Do clients need to install anything?",
        answer: "No. It works in the browser, on a phone or a computer.",
      },
    ],
  },

  "operations-apps": {
    name: "Operations apps and dashboards",
    card: "Your process in one tool instead of five spreadsheets.",
    seoTitle: "Operations Apps and Dashboards",
    metaDescription:
      "Internal tools and dashboards that replace spreadsheets and email threads with software shaped like your process, so your team sees what's late and what's next.",
    headline: "Your process in one tool, not in five spreadsheets.",
    lead: "We build internal apps and dashboards shaped like the way your team actually works, so everyone sees the same status.",
    forWhom: "For teams running their operations on spreadsheets, shared inboxes and memory.",
    problemQuotes: [
      "The real process lives in a spreadsheet only one person understands.",
      "We can't see what's late until someone tells us.",
      "Reports take a day to assemble.",
    ],
    problemDetail:
      "Spreadsheets are a fine start. They stop working when several people depend on them, and when the answer to \"what's late?\" takes a meeting.",
    changes: [
      "One place to see the work in progress and what's late.",
      "The same information is entered once.",
      "Managers get reports without assembling them.",
      "New staff learn one tool, not a chain of files.",
    ],
    included: [
      {
        title: "Workflow mapping",
        detail: "We follow the work as it really happens, then agree on how it should.",
      },
      {
        title: "The internal app",
        detail: "Screens and roles built for your team's daily tasks.",
      },
      {
        title: "Dashboards",
        detail: "What's in progress, what's late and what's next, without a meeting.",
      },
      {
        title: "Data import",
        detail: "Your current spreadsheets moved in, cleaned and checked.",
      },
      {
        title: "Training and handover",
        detail: "Short guides and a working session for your team.",
      },
    ],
    phases: [
      {
        title: "Map the workflow",
        detail: "Who does what, in what order, and where it gets stuck.",
      },
      {
        title: "Build the smallest useful version",
        detail: "The first version removes real work. Nothing more.",
      },
      {
        title: "Improve with use",
        detail: "We adjust with your team's feedback, in fixed-price phases.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We launch, monitor and fix anything that comes up for 90 days.",
      },
    ],
    faqs: [
      {
        question: "Isn't off-the-shelf software cheaper?",
        answer:
          "Sometimes. If a standard product fits your process, we'll say so in the audit and skip the build.",
      },
      {
        question: "Who owns the data and the code?",
        answer: "You do. Both live in accounts in your company's name.",
      },
      {
        question: "Can we start small?",
        answer: "Yes. The first phase is the smallest version that removes real work.",
      },
    ],
  },

  automation: {
    name: "Automation",
    card: "Routine work that runs on its own, with a log you can read.",
    seoTitle: "Business Process Automation",
    metaDescription:
      "Automations that move data between your tools, send reminders and route approvals, with a log of every step so mistakes are easy to trace.",
    headline: "Routine work that runs on its own, with a record of what it did.",
    lead: "We automate the predictable steps between your tools, so your people spend their time on the work that needs judgment.",
    forWhom: "For teams that retype data, chase approvals or send the same reminders by hand.",
    problemQuotes: [
      "We retype the same details into three systems.",
      "Reminders depend on someone remembering.",
      "Approvals get stuck in inboxes.",
    ],
    problemDetail:
      "If a step is predictable, a machine should do it. If it needs judgment, a person should. Good automation keeps that line clear and leaves a record.",
    changes: [
      "Data moves between your tools without retyping.",
      "Reminders and approvals happen on time.",
      "Every automated step is logged, so mistakes are easy to trace.",
      "Your team keeps the judgment calls.",
    ],
    included: [
      {
        title: "Process review",
        detail: "We pick the steps worth automating, and leave the rest alone.",
      },
      {
        title: "Workflows",
        detail: "Intake, reminders, approvals and reports that run without anyone starting them.",
      },
      {
        title: "Error handling and alerts",
        detail: "When something fails, a named person is told, and nothing is lost quietly.",
      },
      {
        title: "Logs you can read",
        detail: "A plain record of what ran, when, and with what result.",
      },
      {
        title: "Documentation",
        detail: "What each automation does and how to change it.",
      },
    ],
    phases: [
      {
        title: "Choose the first workflow",
        detail: "The one that costs the most time for the least risk.",
      },
      {
        title: "Build and test",
        detail: "We run it beside the manual process before we switch over.",
      },
      {
        title: "Switch over",
        detail: "The automation takes over, with alerts on.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We monitor and fix anything that comes up for 90 days.",
      },
    ],
    faqs: [
      {
        question: "What if an automation makes a mistake?",
        answer:
          "Every run is logged and failures alert a named person. Steps with real consequences ask a person to approve first.",
      },
      {
        question: "Which tools can you connect?",
        answer:
          "Most business software that offers an API, an export, or email in and out. We check what's possible during the audit.",
      },
    ],
  },

  "ai-with-judgment": {
    name: "AI with judgment",
    card: "AI drafts. Your team approves.",
    seoTitle: "AI With Human Review for Operations",
    metaDescription:
      "AI that drafts, sorts and summarizes while your team reviews before anything reaches a client. Tested on your own examples, with your data kept in your accounts.",
    headline: "AI drafts. Your team approves.",
    lead: "We apply AI to specific, measurable tasks: reading documents, drafting replies, sorting requests. A person reviews the result before it reaches a client.",
    forWhom: "For teams that spend hours reading, sorting or drafting, and want to stay in control.",
    problemQuotes: [
      "Staff spend hours reading documents to find one answer.",
      "Replies to routine emails take too long.",
      "We're curious about AI, but worried about mistakes.",
    ],
    problemDetail:
      "AI is useful when the task is clear, the result can be checked and a person makes the final call. It's the wrong tool when a simple rule would do, and we'll tell you when that's the case.",
    changes: [
      "Drafts and summaries in minutes, each one reviewed by a person.",
      "Answers point to the documents they came from.",
      "You know how accurate it is, because we test it on your own examples.",
      "Your data stays in accounts you own.",
    ],
    included: [
      {
        title: "Use-case selection",
        detail: "We check that AI is the right tool at all, and pick one task to start.",
      },
      {
        title: "A test set from your examples",
        detail: "Real questions and documents, with answers your team has verified.",
      },
      {
        title: "A prototype with human review",
        detail: "Every result waits for a person's approval before it goes anywhere.",
      },
      {
        title: "Access and privacy controls",
        detail: "Who can see what, and where your data is processed, in line with our AI policy.",
      },
      {
        title: "Monitoring",
        detail: "We keep measuring accuracy after launch and tell you if it drifts.",
      },
    ],
    phases: [
      {
        title: "Choose one task",
        detail: "Narrow, measurable and low risk.",
      },
      {
        title: "Test on your examples",
        detail: "We measure accuracy before anyone relies on it.",
      },
      {
        title: "Pilot with human review",
        detail: "A small group uses it, and reviews every result.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We launch, monitor accuracy and fix issues for 90 days.",
      },
    ],
    faqs: [
      {
        question: "Will AI send anything to clients without review?",
        answer:
          "Not by default. Our AI policy requires a person to review anything that reaches a client, unless you decide otherwise in writing for a specific, low-risk task.",
      },
      {
        question: "Which AI models do you use?",
        answer:
          "We choose per task, for accuracy, cost and privacy, and we tell you which provider handles what.",
      },
      {
        question: "Is our data used to train AI models?",
        answer:
          "Our policy is not to send your data to a provider that uses it for training without your written consent. The AI policy page has the details.",
      },
    ],
  },

  "integrations-and-data": {
    name: "Integrations and data",
    card: "Your tools sharing the same facts.",
    seoTitle: "Software Integrations and Data Cleanup",
    metaDescription:
      "Connect your CRM, accounting, management and operations software so they share the same facts. Plan, test and monitor every integration and migration.",
    headline: "Your tools, sharing the same facts.",
    lead: "We connect the software you already use, so each fact lives in one place and every system stays up to date.",
    forWhom: "For businesses whose numbers differ depending on which system you ask.",
    problemQuotes: [
      "The number in the CRM doesn't match the number in accounting.",
      "Nobody trusts the report.",
      "Moving to a new system scares us.",
    ],
    problemDetail:
      "When the same information lives in several places, someone retypes it and someone forgets. Integrations decide which system is the source for each fact, and keep the others in step.",
    changes: [
      "One source of truth for each kind of information.",
      "Systems update each other automatically.",
      "Reports agree, because they read the same data.",
      "Migrations are planned, tested and reversible.",
    ],
    included: [
      {
        title: "System and data inventory",
        detail: "What you use, what data lives where, and what depends on what. It starts in the audit.",
      },
      {
        title: "Integrations",
        detail: "Connections through APIs, webhooks or scheduled sync, with monitoring.",
      },
      {
        title: "Data cleanup and migration",
        detail: "Duplicates found, records fixed, and moves rehearsed before the real one.",
      },
      {
        title: "Reporting layer",
        detail: "One set of numbers your team can trust.",
      },
      {
        title: "Monitoring and alerts",
        detail: "If a connection breaks, a named person knows the same day.",
      },
    ],
    phases: [
      {
        title: "Inventory",
        detail: "A map of your systems and the data that moves between them.",
      },
      {
        title: "Connect the most painful pair",
        detail: "The two systems where retyping costs the most.",
      },
      {
        title: "Extend",
        detail: "Add connections one at a time, in fixed-price phases.",
      },
      {
        title: "Launch and 90 days of care",
        detail: "We monitor every connection and fix issues for 90 days.",
      },
    ],
    faqs: [
      {
        question: "What if our software has no API?",
        answer:
          "There are often other routes: exports, email parsing or database access. We check the options in the audit and tell you plainly what's not worth doing.",
      },
      {
        question: "Can you migrate us to new software?",
        answer:
          "Yes. We plan the move, rehearse it on a copy, check the results with your team and keep a way back until you're sure.",
      },
    ],
  },

  "managed-plans": {
    name: "Managed plans",
    card: "A named person responsible for your systems, every month.",
    seoTitle: "Managed Care Plans for Websites and Systems",
    metaDescription:
      "Monthly care for your website and systems: monitoring, updates, backups and small improvements, with a named person responsible and a monthly report.",
    headline: "A named person is responsible for your systems, every month.",
    lead: "We monitor, update and improve what we've built, or what you already have, with a monthly report on what happened.",
    forWhom: "For businesses whose systems work today and need someone to keep them that way.",
    problemQuotes: [
      "Our website was built years ago and nobody looks after it.",
      "When something breaks, we don't know who to call.",
      "Updates get skipped, and that worries me.",
    ],
    problemDetail:
      "Systems don't stay still. Software needs updates, certificates expire and small problems grow. A managed plan means someone is watching, and accountable.",
    changes: [
      "Uptime and errors are monitored.",
      "Updates and security fixes are applied quickly.",
      "Backups are checked.",
      "A named person responds when something breaks.",
      "You get a monthly report and a few improvements each month.",
    ],
    included: [
      {
        title: "Monitoring",
        detail: "Uptime and errors watched, with alerts to a person.",
      },
      {
        title: "Updates and fixes",
        detail: "Software updates and security fixes applied quickly.",
      },
      {
        title: "Backups",
        detail: "Data and configuration backed up, and checked.",
      },
      {
        title: "Monthly report",
        detail: "Inquiries, speed, issues and what we improved, in plain language.",
      },
      {
        title: "Small improvements",
        detail: "Changes agreed each month, based on the report.",
      },
    ],
    phases: [
      {
        title: "Onboard",
        detail: "Access, an inventory and accounts in your company's name.",
      },
      {
        title: "Stabilize",
        detail: "Fix what's outdated or fragile first.",
      },
      {
        title: "Monthly care",
        detail: "Monitoring, updates, and a written report every month.",
      },
      {
        title: "Review",
        detail: "Regular check-ins on what to improve next.",
      },
    ],
    faqs: [
      {
        question: "Can you look after a system you didn't build?",
        answer:
          "Often yes. We start with a review to see what we'd be taking on, and tell you honestly if something needs fixing first.",
      },
      {
        question: "Who do I call when something breaks?",
        answer: "A named person, whose details you receive when you start.",
      },
    ],
  },
};

export const servicesPage = {
  metaTitle: "Services: Websites, Portals, Apps, Automation and AI",
  metaDescription:
    "Revenue websites, client and owner portals, operations apps, automation, AI with human review, integrations and managed plans. Fixed-price phases, from a Digital Systems Audit.",
  eyebrow: "Services",
  title: "Seven services, organized around your problem.",
  lead: "Every project starts with the audit. It shows which of these you need first, and what it costs.",
  from: "Price",
  ctaTitle: "Not sure which one you need?",
  ctaLead: "That's what the audit is for. It ends with a prioritized, costed plan.",
  problemOf: "Sound familiar?",
  detailLabel: "See the service",
};

export type ServicesPage = typeof servicesPage;
