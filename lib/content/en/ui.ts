/**
 * Interface text shared across pages, in English: navigation, buttons, forms, errors, emails and the
 * assistant. The Spanish and French files must match this shape (see `Ui`).
 * `{placeholders}` are filled in with `format()` from lib/i18n/format.ts.
 *
 * Tone rules (guideline, "Words"): short sentences, the client's vocabulary, outcomes not technology.
 * Never write "10x", "skyrocket", "game-changer", "digital transformation", "synergy", "cutting-edge",
 * "AI-powered everything", "fully autonomous", "trusted by hundreds" or a guaranteed speed score.
 */
export const ui = {
  site: {
    description:
      "{name} designs, builds and runs websites, client portals, internal software and automations for established service and operations businesses.",
    hours: "Monday to Friday, 9am to 6pm Central",
    shareImageAlt: "{name}: the systems your business runs on",
    audienceType: "Established service and operations businesses",
    countriesLabel: "Countries we serve",
    countries: ["United States", "Canada", "Mexico"],
    languagesLabel: "Languages",
    languages: "English, French and Spanish",
  },

  skipToContent: "Skip to content",
  breadcrumbHome: "Home",
  breadcrumb: "Breadcrumb",
  logoLabel: "{name} home",
  readMore: "Read more",

  /** The two buttons that end every service and industry page, and appear across the site. */
  cta: {
    audit: "Book an audit",
    auditLong: "Book a Digital Systems Audit",
    snapshot: "Get a free Snapshot",
    snapshotLong: "Get a free Snapshot of your site",
    snapshotAlt: "Or start with a free Snapshot",
    replyPromise: "A person replies within one business hour.",
    orEmail: "Or email",
  },

  closingCta: {
    title: "Find out where your systems are costing you.",
    lead: "The audit ends with a prioritized, costed plan. The fee is credited in full if you start a project within {days} days.",
  },

  header: {
    mainNav: "Main",
    mobileNav: "Mobile",
    home: "Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    darkTheme: "Dark theme",
    language: "Language",
  },

  nav: {
    services: "Services",
    industries: "Industries",
    audit: "Audit",
    work: "Work",
    howWeWork: "How we work",
    about: "About",
    standards: "Standards",
    insights: "Insights",
    contact: "Contact",
    partners: "Partners",
    snapshot: "Free Snapshot",
    websiteCheck: "Instant speed check",
  },

  footer: {
    tagline: "The systems your business runs on.",
    services: "Services",
    industries: "Industries",
    company: "Company",
    legal: "Legal",
    contact: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms of use",
    cookies: "Cookie notice",
    mexicoNotice: "Aviso de privacidad (Mexico)",
  },

  /** Prices come from lib/pricing.ts. `{from}` and `{to}` are formatted for the language. */
  price: {
    auditRange: "US${from}–{to}",
    /** For example "from US$15,000". */
    from: "from US${amount}",
    fromPerMonth: "from US${amount} per month",
    creditNote: "Credited in full to a project signed within {days} days.",
    fixedPhases: "Each phase has a fixed price, agreed in writing before it starts.",
    label: "Price",
    unset: "Price range to be confirmed",
  },

  trust: {
    title: "Why you can trust the work",
    items: [
      { title: "You own it", detail: "Code, accounts and domains belong to you from day one." },
      { title: "Fixed-price phases", detail: "A written scope and price before each phase starts." },
      { title: "Built in the open", detail: "A staging link and a written update every week." },
      { title: "Standards we publish", detail: "Security, performance, accessibility, AI and privacy, in plain language." },
    ],
    standardsLink: "Read our standards",
    processLink: "See how we work",
  },

  demo: {
    sampleData: "Sample data for illustration",
  },

  sections: {
    problem: "The problem",
    changes: "What changes",
    included: "What's included",
    phases: "How it works, in phases",
    phase: "Phase {number}",
    price: "Price",
    relatedDemo: "Related demo",
    forWhom: "Who it's for",
    questions: "Common questions",
    otherServices: "Other services",
    otherIndustries: "Other industries",
    relatedServices: "Related services",
    inTheirWords: "In their words",
    systemsWeBuild: "The systems we build",
    softwareWeConnect: "Software we connect to",
    theDemo: "The demo for this industry",
    whatNext: "What's next",
  },

  /** The audit / contact / Snapshot form: five groups of fields at most, plus consent. */
  leadForm: {
    name: "Name",
    role: "Role",
    company: "Company",
    website: "Website",
    websitePlaceholder: "yourcompany.com",
    email: "Email",
    phone: "Phone",
    need: "What do you want to fix?",
    needHint: "A sentence or two is enough. For example: inquiries wait too long, or staff retype the same data.",
    language: "Preferred language",
    optional: "Optional",
    consent: "I agree that {name} may use these details to reply to me.",
    privacyLink: "Privacy policy",
    honeypot: "Leave this field empty",
    submit: {
      audit: "Book my audit",
      contact: "Send message",
      snapshot: "Get my free Snapshot",
    },
    submitting: "Sending…",
    sendingStatus: "Sending your request.",
    successTitle: {
      audit: "Thank you. Your audit request is in.",
      contact: "Thank you. Your message is in.",
      snapshot: "Thank you. Your Snapshot request is in.",
    },
    successBody:
      "A confirmation is on its way to your inbox. A person will reply personally within one business hour ({hours}). If it's urgent, write to",
    bookTitle: "Want to pick the time yourself?",
    bookCall: "Choose a time for the discovery call",
    languageNames: { en: "English", fr: "Français", es: "Español" },
  },

  leadErrors: {
    nameRequired: "Please enter your name.",
    nameTooLong: "Please keep your name under {max} characters.",
    roleTooLong: "Please keep your role under {max} characters.",
    companyTooLong: "Please keep the company name under {max} characters.",
    websiteInvalid: "Please enter a website address, like yourcompany.com.",
    websiteRequired: "Please enter the address of your website.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address, like name@company.com.",
    phoneInvalid: "Please enter a valid phone number, or leave this field blank.",
    needTooShort: "Please tell us a little more (at least {min} characters).",
    needTooLong: "Please keep this under {max} characters.",
    languageInvalid: "Please choose a language.",
    consentRequired: "Please tick the box so we can reply to you.",
    rateLimited: "You've sent several requests in a short time. Please wait a few minutes, or email us at {email}.",
    fixFields: "Please correct the highlighted fields.",
    sendFailed: "We couldn't send your request just now. Please try again, or email us directly at {email}.",
  },

  /** The automatic confirmation email, sent to the visitor at once in their language. */
  confirmation: {
    subject: "We received your request",
    greeting: "Hello {name},",
    kinds: {
      audit: "Thank you for asking about a Digital Systems Audit.",
      contact: "Thank you for your message.",
      snapshot: "Thank you for asking for a free Snapshot of your site.",
    },
    automatic: "This is an automatic confirmation, so you know your request reached us.",
    promise: "A person on our team will reply to you personally within one business hour ({hours}).",
    nextAudit: "After you book, we'll send a short questionnaire so the call can focus on your business.",
    nextSnapshot: "We'll send you three specific observations about your site, with what to do about each.",
    signoff: "The {name} team",
    ignore: "If you didn't make this request, you can ignore this message.",
  },

  newsletter: {
    title: "Practical notes on systems for operations businesses",
    lead: "A short email when we publish a new article. No spam, and you can leave with one click.",
    email: "Email",
    language: "Language of the emails",
    consent: "I agree to receive emails from {name}. I can unsubscribe at any time.",
    submit: "Subscribe",
    submitting: "Subscribing…",
    successTitle: "You're subscribed.",
    successBody: "Thank you. We'll email you when there's something new to read.",
    errors: {
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address, like name@company.com.",
      consentRequired: "Please tick the box to subscribe.",
      rateLimited: "Too many attempts. Please try again in a few minutes.",
      failed: "We couldn't subscribe you just now. Please try again in a moment.",
    },
  },

  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Tell us what you want to fix. A person replies within one business hour. We serve businesses in the United States, Canada and Mexico, in English, French and Spanish.",
    eyebrow: "Contact",
    title: "Tell us what you want to fix.",
    lead: "Five short fields. You get a confirmation right away and a personal reply within one business hour.",
    nextTitle: "What happens next",
    nextSteps: [
      "You get a confirmation email at once, in your language.",
      "A person replies personally within one business hour.",
      "We book a discovery call, and send a short questionnaire once it's booked.",
    ],
    pickTime: "Prefer to pick a time?",
    bookCall: "Book a discovery call",
    reachDirectly: "Prefer to write directly?",
    servingTitle: "Countries and languages",
    servingBody: "We serve businesses in {countries}, in {languages}.",
  },

  bookPage: {
    metaTitle: "Book a discovery call",
    metaDescription:
      "Pick a time for a discovery call about your Digital Systems Audit. A person confirms within one business hour.",
    eyebrow: "Book a call",
    title: "Pick a time that works for you.",
    lead: "A discovery call to talk through what you want to fix. It's where the audit starts, and there's no cost for the call.",
    frameTitle: "Schedule a discovery call",
    trouble: "Having trouble with the calendar?",
    openInTab: "Open it in a new tab",
    or: "or",
    sendMessage: "send us a message",
  },

  websiteCheckPage: {
    metaTitle: "Instant website speed check",
    metaDescription:
      "Run an automated Google Lighthouse test on your site. See speed, accessibility, best-practices and SEO scores on a phone, and what to fix first.",
    eyebrow: "Instant speed check",
    title: "See how your site performs on a phone, right now.",
    lead: "An automated test that takes under a minute. It scores speed, accessibility, best practices and SEO basics. For a person's read on your site, ask for the free Snapshot.",
    whyTitle: "What the scores mean",
    whyBody:
      "The test simulates a mid-range phone on a mobile connection. It's a lab test: a useful way to find problems, not a promise about what your real visitors experience. Real-user data (Core Web Vitals) is the fairer judge.",
    points: [
      "Performance: how quickly your pages load and respond on a typical phone",
      "Accessibility: whether people using screen readers or keyboards can use your site",
      "Best practices: security and modern web standards",
      "SEO: whether search engines can find, read and understand your pages",
    ],
    snapshotTitle: "Want a person to look?",
    snapshotBody: "The free Snapshot gives you three specific observations about your site, written by a person.",
  },

  websiteCheck: {
    address: "Website address",
    placeholder: "yourcompany.com",
    email: "Email",
    optional: "Optional",
    submit: "Run the check",
    submitting: "Checking…",
    emailHint: "Add your email if you'd like a person to follow up on the results. We'll only use it for that.",
    running: "Testing your site on a simulated mobile phone. This usually takes 20 to 40 seconds.",
    resultsFor: "Results for {url}",
    resultsNote: "Mobile test, scored out of 100 by Google Lighthouse.",
    performance: "Performance",
    accessibility: "Accessibility",
    bestPractices: "Best practices",
    seo: "SEO",
    loadingSpeed: "Loading speed",
    fixFirst: "What to fix first",
    noIssues:
      "No major issues found in this quick test. A person's review can still find content, conversion and lead-flow improvements.",
    emailSent: "Thanks. A person will reply within one business hour.",
    followUp: "Want help with these? Ask for a free Snapshot, or book a Digital Systems Audit.",
    talk: "Get a free Snapshot",
    savings: "Could save about {seconds} s",
    metrics: {
      "largest-contentful-paint": "Largest Contentful Paint",
      "first-contentful-paint": "First Contentful Paint",
      "total-blocking-time": "Total Blocking Time",
      "cumulative-layout-shift": "Cumulative Layout Shift",
      "speed-index": "Speed Index",
    },
    errors: {
      invalidUrl: "Please enter a valid public website address, like example.com.",
      invalidEmail: "Please enter a valid email address, or leave it blank.",
      rateLimited: "You've run several checks in the last hour. Please try again later, or ask for a free Snapshot.",
      failed: "We couldn't analyze that website just now. Check the address and try again in a minute.",
    },
  },

  notFound: {
    metaTitle: "Page not found",
    title: "This page doesn't exist.",
    lead: "The link may be out of date, or the page may have moved.",
    home: "Back to home",
    contact: "Contact us",
  },

  assistant: {
    greeting:
      "Hi! Ask me about our audit, our services or how we work. I can also help you decide where to start.",
    open: "Ask a question",
    close: "Close",
    title: "Ask us anything",
    disclaimer: "AI assistant. Answers can be imperfect, so please don't share sensitive information.",
    suggested: "Suggested questions",
    suggestions: [
      "What does the audit include?",
      "How much does it cost to start?",
      "Do you work in French?",
    ],
    you: "You: ",
    assistant: "Assistant: ",
    thinking: "Thinking…",
    limit: "For anything more, a person will be glad to help.",
    book: "Book an audit",
    inputLabel: "Your question",
    placeholder: "Type your question",
    send: "Send",
    failed: "Sorry, I couldn't answer just now. Please try again.",
    interrupted: "Sorry, the connection was interrupted. Please try again.",
    // Replies from the server
    unavailable: "The assistant is not available right now.",
    wrongOrigin: "Requests must come from this website.",
    rateLimited: "You've sent a lot of messages in a short time. Please try again in a few minutes.",
    invalid: "That message couldn't be sent. Please try a shorter question.",
    declined: "Sorry, I can't help with that one. For anything else, email {email} or reach us at {contact}.",
    serverError: "Sorry, something went wrong on our side. Please try again, or email {email}.",
    // Written into the system prompt so the model answers in the page language
    replyLanguage: "plain, friendly American English",
  },
};

export type Ui = typeof ui;
