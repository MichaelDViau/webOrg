/**
 * The Digital Systems Audit page and the free Snapshot page: the two actions the whole site drives to.
 * The audit page must contain what we review, what you receive, timing, price, the credit and the booking form.
 * Prices come from lib/pricing.ts and are inserted with `{price}` and `{days}`.
 */
export const audit = {
  metaTitle: "Digital Systems Audit",
  metaDescription:
    "A fixed-scope review of how your website, inbox, tools and team work together. You get a system map, findings with evidence and a costed plan. Fee credited in full to a project signed within 60 days.",
  eyebrow: "Digital Systems Audit",
  title: "Find out where your systems cost you time, inquiries and money.",
  lead: "A fixed-scope review of how your website, inbox, tools and team work together. You get a system map, findings backed by evidence and a costed plan, whether or not you hire us afterward.",

  priceTitle: "Price",
  priceLabel: "{price}",
  priceDetail: "Where you land in the range depends on how many systems and channels we review. We confirm the price before we start.",
  creditTitle: "Credited in full",
  creditBody:
    "If you sign a project with us within {days} days of the audit, the audit fee is credited in full against it.",

  reviewTitle: "What we review",
  review: [
    {
      title: "Your website and how inquiries arrive",
      detail: "Forms, phone, email and any other channel a client can use to reach you.",
    },
    {
      title: "What happens to an inquiry",
      detail: "Who sees it, who answers, and how long that takes.",
    },
    {
      title: "The tools your team uses",
      detail: "What each one holds, and where people retype the same data.",
    },
    {
      title: "What clients ask that a portal could answer",
      detail: "The calls and emails that repeat, and the information behind them.",
    },
    {
      title: "The basics of what's public",
      detail: "Speed, accessibility and security of your site, checked from the outside.",
    },
  ],

  receiveTitle: "What you receive",
  receive: [
    {
      title: "A system map",
      detail: "A diagram of how your tools connect today, and where information is retyped, delayed or lost.",
    },
    {
      title: "Findings with evidence",
      detail: "Each finding shows what we saw, where, and what it costs you in time or missed inquiries. No finding without evidence.",
    },
    {
      title: "A costed plan",
      detail: "Prioritized fixes, each with a fixed-price phase. You choose what to do first, and who does it.",
    },
  ],
  mapCaption: "A system map shows where your tools connect, and where they don't.",

  timingTitle: "Timing",
  timingBody:
    "We schedule the audit when you book. We confirm the exact dates, and the price within the range, before we start, so there are no surprises.",

  stepsTitle: "How it works",
  steps: [
    { title: "You send the form below", detail: "Five short fields. You get a confirmation email at once." },
    { title: "A person replies within one business hour", detail: "We confirm what you want to fix and answer your first questions." },
    { title: "Discovery call", detail: "A short call to agree the scope and the price." },
    { title: "Questionnaire", detail: "After booking, we send the detailed questions. Nothing long on the website." },
    { title: "Review", detail: "We go through your systems, with access you control." },
    { title: "Readout", detail: "We walk you through the system map, the findings and the costed plan." },
  ],

  formTitle: "Book your audit",
  formLead: "Tell us what you want to fix. A person replies within one business hour.",
  bookLabel: "Or pick a time now",

  smallerTitle: "Want to start smaller?",
  smallerBody: "The free Snapshot gives you three specific observations about your website, at no cost.",

  faqTitle: "Questions about the audit",
  faqs: [
    {
      question: "How much does the audit cost?",
      answer:
        "{price}. The fee depends on how many systems and channels we review. We confirm it before we start, and credit it in full to a project you sign within {days} days.",
    },
    {
      question: "Do I have to hire you afterward?",
      answer:
        "No. The plan is yours. You can act on it with us, with someone else or on your own.",
    },
    {
      question: "What access do you need?",
      answer:
        "Only what the review needs, and only as far as you allow. We ask for read-only access where possible and record what we were given.",
    },
    {
      question: "What happens to what you see?",
      answer:
        "It stays confidential and is used only for your audit. Our privacy and security standards describe how we handle it.",
    },
  ],

  /** Labels for the system map illustration on the audit page. */
  map: {
    title: "A system map: how your tools connect",
    sources: { title: "Inquiries arrive", items: ["Website form", "Email", "Phone"] },
    core: { title: "One connected system", items: ["CRM", "Client portal", "Operations app"], foot: "One source of truth for each fact" },
    results: { title: "Everyone sees the same facts", items: ["Your team", "Your clients", "Your accounting"] },
  },
};

export type Audit = typeof audit;

export const snapshot = {
  metaTitle: "Free Snapshot of Your Website",
  metaDescription:
    "Get three specific observations about your website from a person, at no cost. The low-commitment way to see how we think.",
  eyebrow: "Free Snapshot",
  title: "Three specific observations about your website. Free.",
  lead: "Send us your address. A person looks at your site and tells you three specific things worth fixing, and why.",

  whatTitle: "What you get",
  what: [
    "Three specific observations about your site, not a generic report.",
    "What each one is costing you, and what to do about it.",
    "No obligation. If a Snapshot is all you need, that's fine.",
  ],
  howTitle: "How it works",
  how: [
    "You send your name, email and website address.",
    "You get a confirmation email at once.",
    "A person replies within one business hour.",
    "Your Snapshot follows: three observations, each with what to do about it.",
  ],
  formTitle: "Get your free Snapshot",
  formLead: "Four short fields. We only use them to send your Snapshot.",
  instantTitle: "Want numbers right now?",
  instantBody: "The instant speed check runs an automated test in under a minute. The Snapshot is the human read.",
  instantLink: "Run the instant speed check",
  auditTitle: "Ready for the full picture?",
  auditBody: "The Digital Systems Audit reviews your website, inbox, tools and team together.",
};

export type Snapshot = typeof snapshot;
