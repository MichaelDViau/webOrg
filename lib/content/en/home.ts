/**
 * The home page, in the eight blocks the guideline sets, in order: hero, the problem, what we do,
 * what we build, who we help, why work with us, honest about who we are, final call to action.
 * In ten seconds it must answer: what do you do, for whom, why trust you, what does it cost to start,
 * what do I do next.
 */
export const home = {
  metaTitle: "{name}: the systems your business runs on",
  metaDescription:
    "We design, build and run websites, client portals, internal software and automations for service and operations businesses. Start with a Digital Systems Audit.",

  hero: {
    // The headline alternates plain text and ink blocks: [lead] [block1] / [block2] [tail]
    lead: "We build",
    block1: "the systems",
    block2: "your business",
    tail: "runs on.",
    intro:
      "We design, build and run websites, client portals, internal software and automations for established service and operations businesses. One accountable team, from diagnosis to daily operation, in English, French and Spanish.",
    /** Facts under the buttons: the cost to start, the reply promise and ownership. */
    facts: [
      "Start with an audit: {price}, credited in full to a project signed within {days} days",
      "A person replies within one business hour",
      "You own the code, accounts and domains",
    ],
    factsLabel: "At a glance",
    /** The signature illustration: a system map showing how a client's tools connect. */
    map: {
      title: "A system map: how your tools connect",
      caption: "This is the kind of map the audit gives you: where inquiries arrive, what they connect to, and who can see them.",
      sources: { title: "Inquiries arrive", items: ["Website form", "Email", "Phone"] },
      core: { title: "One connected system", items: ["CRM", "Client portal", "Operations app"], foot: "One source of truth for each fact" },
      results: { title: "Everyone sees the same facts", items: ["Your team", "Your clients", "Your accounting"] },
    },
  },

  problem: {
    eyebrow: "The problem",
    title: "Most businesses don't need another website. They need their systems to work together.",
    items: [
      "Inquiries arrive through five channels, and some are answered days later.",
      "Staff type the same information into three systems.",
      "Clients call to ask for updates.",
    ],
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Diagnose. Engineer. Operate.",
    steps: [
      {
        title: "Diagnose",
        detail: "Where time, inquiries and money leak, with evidence.",
      },
      {
        title: "Engineer",
        detail: "Connected, secure, fast systems.",
      },
      {
        title: "Operate",
        detail: "Monitored, updated and improved every month, with a named person responsible.",
      },
    ],
  },

  whatWeBuild: {
    eyebrow: "What we build",
    title: "Five kinds of systems, each with one clear job.",
    lead: "Every one starts from a problem you can name, and ends with something you can measure.",
    linkLabel: "See how it works",
    also: "Also available:",
    /** In the order of `homeBuildSlugs` in lib/services.ts; each card links to its service page. */
    cards: [
      {
        title: "Revenue websites",
        detail: "Websites that turn visitors into qualified inquiries, answered fast.",
      },
      {
        title: "Client and owner portals",
        detail: "One secure place for status, documents and invoices, so clients stop calling.",
      },
      {
        title: "Operations apps and dashboards",
        detail: "Your process in one tool instead of five spreadsheets.",
      },
      {
        title: "Automation and integrations",
        detail: "Routine work that runs on its own, and tools that share the same facts.",
      },
      {
        title: "AI with human review",
        detail: "AI drafts. Your team approves.",
      },
    ],
  },

  whoWeHelp: {
    eyebrow: "Who we help",
    title: "Built for three kinds of business.",
    lead: "We know their daily problems and the software they run on.",
    linkLabel: "See the industry page",
  },

  whyUs: {
    eyebrow: "Why work with us",
    title: "Proof before promises.",
    items: [
      {
        title: "Evidence before proposals",
        detail: "The audit shows where time and inquiries leak. You see the evidence before you pay for a build.",
      },
      {
        title: "Fixed-price phases",
        detail: "Each phase has a written scope and a price. No open-ended hours.",
      },
      {
        title: "You own it",
        detail: "You own the code, the accounts and the domains, from the first day.",
      },
      {
        title: "Published standards",
        detail: "Security, performance, accessibility, AI and privacy. What we do by default is written down.",
      },
      {
        title: "Three languages, written natively",
        detail: "English, French and Spanish, each written for the people who read it.",
      },
    ],
    standardsLink: "Read the standards",
  },

  honest: {
    eyebrow: "Honest about who we are",
    /** {year} is the year the company was founded. */
    body: "We're a new company, founded in {year}. Instead of a long client list, here are working demos of systems built for the industries we serve, and the standards every project follows.",
    cta: "See the demos",
  },

  finalCta: {
    title: "Find out where your systems are costing you.",
    lead: "The audit ends with a prioritized, costed plan. The fee is credited in full if you start a project within {days} days.",
  },
};

export type Home = typeof home;
