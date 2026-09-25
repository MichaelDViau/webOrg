/**
 * Interface text for every page and component, in English.
 * The Spanish and French files must match this shape (see `Ui`).
 * `{placeholders}` are filled in with `format()` from lib/i18n/format.ts.
 */
export const ui = {
  site: {
    description:
      "{name} designs and builds websites, web applications, AI solutions and business automation for startups, growing companies and established organizations.",
    hours: "Monday to Friday, 9am to 6pm Central",
    shareImageAlt: "{name}: websites, web apps, AI solutions, automation and optimization",
    audienceType: "Startups, small and medium-sized businesses, enterprises and organizations",
    country: "United States",
  },

  skipToContent: "Skip to content",
  contactUs: "Contact Us",
  breadcrumbHome: "Home",
  logoLabel: "{name} home",

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
    technology: "Technology",
    work: "Work",
    about: "About",
    contact: "Contact",
  },

  footer: {
    tagline: "Websites, web applications, AI and automation for businesses of every size.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    websiteCheck: "Free website check",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
  },

  closingCta: {
    title: "Tell us what you're working on.",
    lead: "Share a few details and we'll reply within one business day to set up a free consultation. No obligation, and if we're not the right fit, we'll say so and point you somewhere better.",
    orEmail: "Or email",
  },

  /** Discipline tabs under the homepage headline. */
  showcase: {
    websites: "Websites",
    webApps: "Web Apps",
    ai: "AI Solutions",
    automation: "Automation",
    optimization: "Optimization",
    automationAlt:
      "Harbor Line delivery-to-invoice workflow built from connected steps, with run history and automation rates",
    automationType: "Automation",
    automationLink: "Follow the workflow",
  },

  projectFeature: {
    services: "Services: ",
    technologies: "Technologies: ",
  },

  home: {
    metaTitle: "{name} | Website, Web App and AI Development",
    metaDescription:
      "Website development, custom web applications, AI integration and business automation for startups, small businesses and established organizations.",
    hero: {
      // The headline alternates plain text and ink blocks: [lead] [block1] / [block2] [tail]
      lead: "We build",
      block1: "the software",
      block2: "your business",
      tail: "runs on.",
      intro:
        "{name} designs and builds websites, web applications, AI solutions and business automation for startups, growing companies and established organizations.",
      explore: "Explore Our Services",
      commitments: "Our commitments",
      whatWeBuild: "What we build",
    },
    whoWeHelp: {
      eyebrow: "Who we work with",
      title: "From local businesses to large organizations.",
      lead: "Whether you need your first professional website or an AI system for thousands of users, you get the same senior team and the same standards.",
    },
    whatWeDo: {
      eyebrow: "What we do",
      title: "One team for your website, software and AI.",
      lead: "Most clients come to us for one thing and stay for several. Design, engineering, AI and performance work all sit with the same team, so nothing gets lost between vendors.",
    },
    webDevelopment: {
      eyebrow: "Web Development",
      title: "Websites that explain clearly, earn trust and load fast.",
      lead: "We plan the content before the design, design for every screen size on purpose, and build on modern frameworks your team can maintain. The result is a site that earns trust quickly and is easy to keep up to date.",
      points: [
        "Content strategy and site structure",
        "Custom design, built from scratch",
        "A CMS configured for your editors",
        "Accessibility and SEO built in from the start",
      ],
      link: "Website development services",
    },
    webApplications: {
      eyebrow: "Web Applications",
      title: "Custom software for work that doesn't fit off-the-shelf tools.",
      lead: "We design and build applications from the data model up, release a focused first version within weeks, and keep improving it alongside your team.",
      link: "Web application development",
      types: [
        {
          title: "Customer portals",
          detail: "Self-service accounts, orders, documents and billing for your customers.",
        },
        {
          title: "Internal tools",
          detail: "Replacements for the spreadsheets and email threads your operations depend on.",
        },
        {
          title: "Dashboards and reporting",
          detail: "One reliable view of data that currently lives in several systems.",
        },
        {
          title: "Platforms and SaaS products",
          detail: "Multi-tenant products with billing, roles and the infrastructure to scale.",
        },
      ],
    },
    aiAutomation: {
      eyebrow: "AI & Automation",
      title: "Automation and AI that save your team real time.",
      lead: "We start with the task, not the technology. If a process is predictable, we automate it. If it involves judgment across large amounts of text, AI may help. Often the answer is a combination of both.",
      inPractice: "In practice",
      ai: {
        title: "AI Solutions",
        linkLabel: "AI development services",
        description:
          "Language models applied to specific, measurable problems, with answers you can verify and data that stays under your control.",
        examples: [
          "An assistant that answers staff questions from policy documents, citing each source",
          "Extracting line items from supplier invoices into your accounting system",
          "Drafting first responses to routine support tickets for review",
        ],
      },
      automation: {
        title: "Automation",
        linkLabel: "Business automation services",
        description:
          "Integrations and workflows that move data between your systems, so people stop copying it by hand.",
        examples: [
          "New CRM deals creating projects, folders and invoices automatically",
          "Weekly operations reports assembled and sent without anyone touching a spreadsheet",
          "Approval requests routed, reminded and logged across teams",
        ],
      },
    },
    optimization: {
      eyebrow: "Web Optimization & Performance",
      title: "Faster pages, measured with real visitor data.",
      lead: "We find what's actually slowing your site down, fix it in your codebase, and set up monitoring so it stays fast long after the project ends.",
      testCta: "Test your website for free",
      serviceLink: "Website performance optimization",
      metricHeader: "Metric (mobile, 75th percentile)",
      before: "Before",
      after: "After",
      metrics: [
        { name: "Largest Contentful Paint", before: "3.8 s", after: "1.6 s" },
        { name: "Interaction to Next Paint", before: "410 ms", after: "140 ms" },
        { name: "Cumulative Layout Shift", before: "0.21", after: "0.02" },
        { name: "JavaScript transferred", before: "1.2 MB", after: "480 KB" },
      ],
      caption: "Fieldstone Outdoor product pages, before and after an eight-week performance program.",
      captionLink: "Read the full breakdown",
    },
    seo: {
      eyebrow: "SEO & Digital Growth",
      title: "Search visibility starts with how your site is built.",
      body: "We handle the technical foundation of search, including site structure, indexing, metadata and speed, and give your team clear guidance on content that brings in qualified visitors. No link schemes and no ranking guarantees.",
      points: [
        "Technical SEO audits",
        "Site architecture and internal links",
        "Structured data and metadata",
        "Indexing and crawl budget",
        "Migration and redirect planning",
        "Search Console reporting",
      ],
      link: "Technical SEO services",
    },
    techStack: {
      eyebrow: "Technology",
      title: "The technology we use, explained in plain English.",
      lead: "You don't need to know what any of these names mean. We choose established, well-supported tools so your project is fast, secure and easy to maintain, and any good developer can work on it later. For technical teams, here is what we use most.",
      cta: "Full technology stack",
    },
    approach: {
      eyebrow: "Our approach",
      title: "A clear process, run by the people doing the work.",
      lead: "You work directly with the designers and engineers on your project. There are no account managers relaying messages and no handoffs to junior staff after the pitch.",
      step: "Step {number}",
    },
    selectedWork: {
      eyebrow: "Selected work",
      title: "Recent projects and what they changed.",
      lead: "A few examples of the websites, applications and systems we've built, and the results our clients measured afterward.",
      allWork: "All work",
    },
    whyUs: {
      eyebrow: "Why work with us",
      title: "We don't build technology simply because we can. We build it because it solves a problem.",
    },
    waysToWork: {
      eyebrow: "Ways to work with us",
      title: "Most clients start with a free conversation.",
      lead: "There's no pressure and no long contract to sign before you know us. Choose the level of involvement that fits your project.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      lead: "The questions business owners ask us most often. Anything else, just ask on a call.",
    },
  },

  about: {
    metaTitle: "About Us",
    metaDescription:
      "{name} is a software design and engineering company in {location}. Learn how we approach technology, design, development and performance.",
    eyebrow: "About",
    title: "We don't build technology simply because we can. We build it because it solves a problem.",
    lead: "{name} is a software design and engineering company based in {location}. We work with startups, growing businesses and established organizations on the websites, applications and systems they rely on every day.",
    howWeWork: "How we work with clients",
  },

  servicesPage: {
    metaTitle: "Website, Software and AI Development Services",
    metaDescription:
      "Website development, custom web applications, AI solutions, business automation, performance optimization and technical SEO for companies of every size.",
    eyebrow: "Services",
    title: "Websites, software and AI, designed and built by one team.",
    lead: "We work across the full life of a digital product, from the first conversation about what to build to keeping it fast, secure and useful years later.",
    ctaTitle: "Not sure which service you need?",
    ctaLead: "Most projects involve more than one. Describe the problem and we'll recommend where to start.",
  },

  servicePage: {
    websiteCheck: "Free website check",
    seeWork: "See our work",
    inPlainTerms: "In plain terms",
    technologyWeUse: "Technology we use",
    technologiesLabel: "{service} technologies",
    included: "What's included",
    approach: "How we approach it",
    engagement: "Typical engagement",
    relatedWork: "Related work",
    questions: "Common questions",
    otherServices: "Other services",
  },

  technologyPage: {
    metaTitle: "Our Technology Stack: Web Development and AI",
    metaDescription:
      "The web and AI technology we build with, from HTML, CSS, JavaScript, React and Node.js to OpenAI, Claude, Gemini, AI agents and vector search.",
    eyebrow: "Technology",
    title: "The tools behind everything we build.",
    lead: "Every name below is a proven, widely used technology. You don't need to understand them to work with us. Each group starts with a one-line explanation in plain English, followed by the exact tools for technical teams.",
    web: {
      eyebrow: "Web and software",
      title: "From HTML and CSS to cloud infrastructure.",
      lead: "Websites, web applications and mobile apps built on modern standards, with the same tools used by the world's leading software teams.",
    },
    ai: {
      eyebrow: "Artificial intelligence",
      title: "The current generation of AI, applied to real work.",
      lead: "We work with the leading AI models and the tools around them: agents that take actions, assistants that answer from your documents, and the testing that proves they're accurate. We choose models for accuracy, cost and privacy, not hype.",
    },
    unsureTitle: "Not sure which of these you need?",
    unsureBody:
      "That's our job. Tell us what you want to achieve and we'll recommend the simplest setup that does it well. Often that means fewer tools, not more.",
  },

  workPage: {
    metaTitle: "Case Studies: Websites, Web Apps and AI Projects",
    metaDescription:
      "Case studies covering website development, custom web applications, AI solutions and performance optimization, with the results each client measured.",
    eyebrow: "Work",
    title: "Projects measured by what they changed.",
    lead: "Each case study covers the problem we were asked to solve, how we approached it and the results the client measured afterward.",
  },

  caseStudy: {
    metaTitle: "{client} Case Study: {type}",
    breadcrumb: "Breadcrumb",
    client: "Client",
    industry: "Industry",
    services: "Services",
    year: "Year",
    visitLive: "Visit the live project",
    challenge: "The challenge",
    whatWeDid: "What we did",
    outcome: "The outcome",
    technology: "Technology",
    nextProject: "Next project",
  },

  book: {
    metaTitle: "Book a Free Consultation",
    metaDescription:
      "Pick a time for a free 30-minute call about your website, web application, AI or automation project. No cost and no obligation.",
    eyebrow: "Book a call",
    title: "Pick a time that works for you.",
    lead: "A free 30-minute video call to talk through your goals. You'll leave with honest advice and clear next steps, whether or not you hire us.",
    frameTitle: "Schedule a free consultation",
    trouble: "Having trouble with the calendar?",
    openInTab: "Open it in a new tab",
    or: "or",
    sendMessage: "send us a message",
  },

  contactPage: {
    metaTitle: "Contact Us",
    metaDescription:
      "Tell us about your website, web application, AI or automation project. We reply to every request within one business day.",
    eyebrow: "Contact",
    title: "Contact us",
    lead: "Tell us about the problem you're trying to solve. A rough idea is enough, and we'll help you shape the details. The first consultation is free, with no obligation.",
    nextTitle: "What happens next",
    nextSteps: [
      "We read every request and reply within one business day.",
      "We schedule a free 30-minute call to understand your goals, constraints and timeline.",
      "You receive a written proposal with scope, timeline and a fixed estimate for the first phase.",
    ],
    pickTime: "Prefer to pick a time?",
    bookCall: "Book a free 30-minute call",
    reachDirectly: "Prefer to reach us directly?",
  },

  contactForm: {
    successTitle: "Thank you. We've received your request.",
    successBody:
      "Someone from our team will read it and reply within one business day, usually sooner. If anything is urgent, email us at",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    projectType: "Project type",
    projectTypePlaceholder: "Select a project type",
    budget: "Budget range",
    budgetPlaceholder: "Select a budget range",
    message: "Project description",
    messageHint: "At least {min} characters. Goals, timeline and any existing systems are helpful.",
    optional: "Optional",
    honeypot: "Website",
    privacyNote: "We'll only use these details to respond to your inquiry.",
    privacyLink: "Privacy policy",
    submit: "Send request",
    submitting: "Sending…",
    sendingStatus: "Sending your request.",
  },

  contactErrors: {
    nameRequired: "Please enter your name.",
    nameTooLong: "Please keep your name under {max} characters.",
    companyTooLong: "Please keep the company name under {max} characters.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address, like name@company.com.",
    phoneInvalid: "Please enter a valid phone number, or leave this field blank.",
    projectTypeRequired: "Please choose a project type.",
    budgetRequired: "Please choose a budget range.",
    messageTooShort: "Please tell us a little more about your project (at least {min} characters).",
    messageTooLong: "Please keep your description under {max} characters.",
    rateLimited: "You've sent several requests in a short time. Please wait a few minutes, or email us at {email}.",
    fixFields: "Please correct the highlighted fields.",
    sendFailed: "We couldn't send your message just now. Please try again, or email us directly at {email}.",
  },

  /** Labels for the contact form's select options. The submitted values stay in English. */
  projectTypes: {
    Website: "Website",
    "Web application": "Web application",
    "AI solution": "AI solution",
    Automation: "Automation",
    "Performance optimization": "Performance optimization",
    SEO: "SEO",
    "Something else": "Something else",
  },
  budgetRanges: {
    "Under $25,000": "Under $25,000",
    "$25,000 – $50,000": "$25,000 – $50,000",
    "$50,000 – $100,000": "$50,000 – $100,000",
    "$100,000 – $250,000": "$100,000 – $250,000",
    "Over $250,000": "Over $250,000",
    "Not sure yet": "Not sure yet",
  },

  privacy: {
    metaTitle: "Privacy Policy",
    metaDescription: "How {name} collects, uses and protects information submitted through this website.",
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated September 2026.",
    sections: [
      {
        title: "Information we collect",
        body: "When you submit the contact form, we collect the details you provide: your name, company, email address, phone number, project type, budget range and project description. We don't use advertising trackers or sell personal information.",
      },
      {
        title: "How we use it",
        body: "We use this information only to respond to your inquiry and, if we work together, to manage our business relationship. We keep inquiries for up to two years unless you ask us to delete them sooner.",
      },
      {
        title: "Website check and AI assistant",
        body: "When you use the free website check, the address you enter is sent to Google PageSpeed Insights for testing. If you also enter your email, we receive it with your results so we can follow up. Messages you send to the AI assistant are processed by Anthropic to generate answers and are not used to identify you. Please don't share sensitive personal information in the assistant.",
      },
      {
        title: "Service providers",
        body: "Form submissions are delivered by email through a transactional email provider and hosted with our website infrastructure provider. Consultation bookings are handled by our scheduling provider. Both process data on our behalf and are not permitted to use it for their own purposes.",
      },
    ],
    choicesTitle: "Your choices",
    choicesBody:
      "You can ask us to access, correct or delete the information you've sent us at any time by emailing",
  },

  websiteCheckPage: {
    metaTitle: "Free Website Speed and SEO Check",
    metaDescription:
      "Test your website for free. Get your speed, SEO, accessibility and best practices scores, Core Web Vitals and the top fixes in under a minute.",
    eyebrow: "Free website check",
    title: "How fast and findable is your website?",
    lead: "Enter your address to see how your site scores for speed, SEO, accessibility and best practices on a mobile phone, and what to fix first. It's free and takes under a minute.",
    whyTitle: "Why these scores matter",
    whyBody:
      "Google uses page speed and technical quality when ranking websites, and most visitors leave a page that takes more than a few seconds to load on their phone.",
    points: [
      "Performance: how quickly your pages load and respond on a typical phone",
      "Accessibility: whether people using screen readers or keyboards can use your site",
      "Best practices: security and modern web standards",
      "SEO: whether search engines can find, read and understand your pages",
    ],
  },

  websiteCheck: {
    address: "Website address",
    placeholder: "yourcompany.com",
    email: "Email",
    optional: "Optional",
    submit: "Run free check",
    submitting: "Checking…",
    emailHint: "Add your email if you'd like us to follow up with a personal review. We'll only use it for that.",
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
      "No major issues found in this quick test. A full review can still uncover content, conversion and search improvements.",
    emailSent: "Thanks. We'll review your results and reply within one business day.",
    followUp: "Want these fixed? We'll walk you through the results in a free consultation.",
    talk: "Talk to us about it",
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
      rateLimited: "You've run several checks in the last hour. Please try again later, or contact us for a full review.",
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
      "Hi! Ask me anything about our websites, web apps, AI and automation work. I can also help you figure out where to start.",
    open: "Ask a question",
    close: "Close",
    title: "Ask us anything",
    disclaimer: "AI assistant. Answers can be imperfect, so please don't share sensitive information.",
    suggested: "Suggested questions",
    suggestions: [
      "How much does a website cost?",
      "Can AI help my small business?",
      "How long does a web app take to build?",
    ],
    you: "You: ",
    assistant: "Assistant: ",
    thinking: "Thinking…",
    limit: "For anything more, the team will be glad to help.",
    book: "Book a free consultation",
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
    declined: "Sorry, I can't help with that one. For anything else, email {email} or book a free consultation at {contact}.",
    serverError: "Sorry, something went wrong on our side. Please try again, or email {email}.",
    // Written into the system prompt so the model answers in the page language
    replyLanguage: "plain, friendly American English",
  },
};

export type Ui = typeof ui;
