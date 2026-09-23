import { site } from "./site";

export interface ContentItem {
  title: string;
  detail: string;
}

/** The four stages shown under "Our approach" on the homepage. */
export const approachSteps: ContentItem[] = [
  {
    title: "Understand",
    detail:
      "We talk to the people involved, review what already exists, and agree on the problem and how we will measure success.",
  },
  {
    title: "Plan",
    detail: "You get a written scope, timeline and fixed estimate for the first phase, so there are no surprises later.",
  },
  {
    title: "Build",
    detail: "Design and engineering happen in two-week cycles, with working software to review at the end of each one.",
  },
  {
    title: "Support",
    detail: "We launch, monitor and keep improving what we built, or hand it over cleanly to your own team.",
  },
];

/** How we work with clients. Shown on the homepage and the About page. */
export const principles: ContentItem[] = [
  {
    title: "Senior people on every project",
    detail: "The people you meet in the first conversation are the people who design and build your project.",
  },
  {
    title: "Honest scoping",
    detail:
      "We'll tell you when something isn't worth building, when a simpler tool will do, or when we aren't the right fit.",
  },
  {
    title: "You own everything",
    detail: "Code, designs, accounts and data belong to you from day one. No proprietary platforms and no lock-in.",
  },
  {
    title: "Built to last",
    detail: "Tested, documented and monitored software that your own team or any capable developer can maintain.",
  },
];

export interface Belief extends ContentItem {
  topic: string;
}

/** Our position on each part of the work. Shown on the About page. */
export const beliefs: Belief[] = [
  {
    topic: "Technology",
    title: "The right tool is usually the simplest one that works.",
    detail:
      "We choose established, well-supported technology over whatever is newest. If a spreadsheet, an existing product or a small integration solves the problem, we'll recommend it, even when that means a smaller project for us.",
  },
  {
    topic: "Development",
    title: "Code is a long-term asset, so we write it that way.",
    detail:
      "Automated tests, code review, documentation and repeatable deployments are part of every project, not extras. The goal is software your team can change with confidence long after launch.",
  },
  {
    topic: "Performance",
    title: "Speed is part of the product.",
    detail:
      "Every page and screen has a performance budget from the start. Fast software is easier to use, ranks better in search and costs less to run.",
  },
  {
    topic: "Design",
    title: "Good design makes the next step obvious.",
    detail:
      "We design for clarity first: clear content, predictable interactions and accessible interfaces that work for everyone, on every device.",
  },
  {
    topic: "Business",
    title: "Success is measured in your numbers, not ours.",
    detail:
      "Before we start, we agree on what should change, such as fewer support requests, more qualified leads or hours saved each week. Then we report against it.",
  },
];

/** Short commitments shown under the homepage call to action. */
export const promises: string[] = [
  "Free initial consultation",
  "Reply within one business day",
  "Fixed price for each phase",
  "You own 100% of the code",
];

export interface Audience extends ContentItem {
  examples: string;
}

/** The kinds of organizations we work with. Shown on the homepage. */
export const audiences: Audience[] = [
  {
    title: "Small businesses",
    detail:
      "A professional website that brings in customers, and simple automation that gives you back hours every week. Clear prices, no jargon.",
    examples: "Websites, online booking, Google visibility",
  },
  {
    title: "Startups",
    detail:
      "Get your product in front of customers quickly with a focused first version, built on technology that holds up as you grow.",
    examples: "MVPs, SaaS products, AI features",
  },
  {
    title: "Growing companies",
    detail:
      "Replace spreadsheets and disconnected tools with custom software and integrations that fit the way your team works.",
    examples: "Portals, dashboards, automation",
  },
  {
    title: "Enterprises and organizations",
    detail:
      "Senior engineering with the security, documentation and review process your IT and compliance teams expect.",
    examples: "Platforms, AI programs, performance",
  },
];

export interface EngagementModel {
  title: string;
  summary: string;
  points: string[];
  cta: string;
}

/** How clients can start working with us. Shown on the homepage. */
export const engagementModels: EngagementModel[] = [
  {
    title: "Free consultation",
    summary: "A 30-minute call about your goals. You leave with honest advice, whether or not you hire us.",
    points: ["No cost and no obligation", "Clear next steps and rough budget", "Straight answers about what you need"],
    cta: "Book a free call",
  },
  {
    title: "Fixed-scope project",
    summary: "A website, application, AI or automation project with an agreed scope, timeline and price for each phase.",
    points: ["Written proposal before work starts", "Progress you can see every two weeks", "Launch, training and handover included"],
    cta: "Start a project",
  },
  {
    title: "Ongoing support and growth",
    summary: "A monthly plan to keep your site or software fast, secure and improving after launch.",
    points: ["Updates, fixes and security patches", "Monitoring and monthly reporting", "New features when you need them"],
    cta: "Ask about support",
  },
];

/** Common questions answered on the homepage. */
export const homeFaqs: { question: string; answer: string }[] = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on what you need. Every project is quoted individually, and after a free consultation you receive a fixed-price proposal for the first phase, so you know the cost before any work begins.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most websites launch in 8 to 14 weeks. The first version of a web application usually ships in 8 to 12 weeks, and smaller automation projects can be live in 3 to 8 weeks.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with small businesses, startups and large organizations. We size the project to your goals and budget, and we'll tell you when a simpler, less expensive option will do the job.",
  },
  {
    question: "Will we own the website or software?",
    answer:
      "Yes. You own the code, designs, accounts and data from day one. There are no proprietary platforms and nothing that locks you in.",
  },
  {
    question: "Is AI right for my business?",
    answer:
      "Sometimes. AI works well for answering questions from documents, handling routine emails and extracting data from paperwork. In a free consultation we'll tell you honestly whether it would save you time or money.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We train your team and hand over documentation. If you want us to stay involved, a monthly support plan covers updates, security, monitoring and improvements.",
  },
  {
    question: "Can you work with our existing website or software?",
    answer:
      "Yes. We regularly improve, speed up, integrate and take over existing websites and applications, including WordPress, Shopify and custom-built systems.",
  },
  {
    question: `Do you only work with clients in ${site.address.regionName}?`,
    answer: `No. We're based in ${site.address.locality} and work with clients across the United States by video call, email and shared project tools.`,
  },
];
