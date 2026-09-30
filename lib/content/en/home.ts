/**
 * The home page, in the eight sections of the brief: hero, what we do, capabilities, how we solve problems,
 * technology solutions, why work with us, industries, and the project inquiry. In ten seconds it must answer:
 * what kind of company is this, what do they build, for whom, and how do I start.
 * Never claim clients, years, awards, certifications or statistics.
 */
export const home = {
  metaTitle: "{name}: custom software and technology solutions",
  metaDescription:
    "We design, build, and modernize the technology businesses run on: custom software, web applications, AI, databases, cloud, and enterprise systems.",

  hero: {
    // The headline alternates plain text and ink blocks: [lead] [block1] / [block2] [tail]
    lead: "Engineering",
    block1: "technology.",
    block2: "Solving business",
    tail: "challenges.",
    intro:
      "From custom software and web applications to AI solutions, enterprise systems, and cloud infrastructure, we engineer the technology businesses need to operate, evolve, and grow.",
    factsLabel: "At a glance",
    facts: [
      "A person replies within one business hour",
      "You own the code, accounts, and domains",
      "Projects in English, French, and Spanish",
    ],
    visualLabel: "An illustration of a business application, its architecture layers, and the cloud it runs on",
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Technology solutions for real business challenges.",
    body: "We are a software engineering and technology solutions company. We develop custom software, build web and mobile applications, engineer databases and cloud infrastructure, integrate AI, modernize aging systems, and solve complex technical problems. Some clients bring us a single technical challenge. Others need a complete system.",
    engineerLabel: "What we engineer",
    outcomeLabel: "What it does for the business",
    outcomes: [
      {
        tech: "Custom software and applications",
        result: "Your process runs in one purpose-built system instead of scattered tools.",
      },
      {
        tech: "Databases and integrations",
        result: "Your teams work from the same accurate data.",
      },
      {
        tech: "Cloud and infrastructure",
        result: "Your systems stay available, secure, and ready to grow.",
      },
      {
        tech: "AI and automation",
        result: "Routine work runs on its own, and people review what matters.",
      },
      {
        tech: "Modernization and architecture",
        result: "Aging software stops slowing the business down.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Our capabilities",
    title: "Everything a business needs from a technology partner.",
    lead: "Nine capabilities under one engineering team. Use one for a specific problem, or combine several for a complete solution.",
    explore: "Explore",
    viewAll: "See all services",
    more: "+ {count} more",
  },

  approach: {
    eyebrow: "How we solve problems",
    title: "From challenge to solution.",
    lead: "Every project is different, so the process adapts. Most work follows these five steps, and a specific fix may need only some of them.",
    step: "Step {number}",
    steps: [
      {
        title: "Understand",
        detail: "Understand the business, its challenges, objectives, and existing technology.",
      },
      {
        title: "Strategize",
        detail: "Identify the right technical approach, architecture, and implementation strategy.",
      },
      {
        title: "Engineer",
        detail: "Design and develop the appropriate software, applications, infrastructure, or integrations.",
      },
      {
        title: "Implement",
        detail: "Deploy, integrate, and test, and make sure the solution works within your business environment.",
      },
      {
        title: "Evolve",
        detail: "Improve, optimize, maintain, and adapt the technology as your needs change.",
      },
    ],
    engageTitle: "Work with us in the way that fits",
    engage: [
      {
        title: "A specific technical challenge",
        detail: "A fix, an assessment, or a second opinion. Focused, fast, and scoped in writing.",
      },
      {
        title: "A defined project",
        detail: "One application, migration, or integration, from planning through launch.",
      },
      {
        title: "A complete implementation",
        detail: "A multi-system program: architecture, development, migration, and ongoing support.",
      },
    ],
    link: "See how we work",
  },

  solutions: {
    eyebrow: "Technology solutions",
    title: "Whatever the technical challenge, we engineer the solution.",
    lead: "These are the problems businesses bring us. Find yours, and see how we would approach it.",
    /** In the order of `solutionServices` in lib/site.ts; each links to its capability page. */
    items: [
      { question: "Need a custom business application?", answer: "We design and build software tailored to your process." },
      { question: "Existing software no longer meets your needs?", answer: "We upgrade, restructure, or replace it in stages." },
      { question: "Looking to migrate to the cloud?", answer: "We plan and carry out the move without interrupting the business." },
      { question: "Need a database designed or optimized?", answer: "We structure your data so it is accurate and fast." },
      { question: "Want to integrate AI into your business?", answer: "We add it where it removes work, with people in control." },
      { question: "Need to connect multiple systems?", answer: "We design the integrations and APIs that make them work together." },
      { question: "Experiencing performance or infrastructure problems?", answer: "We diagnose the cause and fix it." },
      { question: "Looking to automate manual processes?", answer: "We turn manual steps into reliable digital workflows." },
      { question: "Need a complete digital platform developed?", answer: "We build it from the ground up, on a foundation that scales." },
    ],
    note: "Most projects need only a few of these capabilities. We recommend what fits and leave out what doesn't.",
  },

  whyUs: {
    eyebrow: "Why work with us",
    title: "Engineering decisions made for your business.",
    items: [
      {
        title: "Custom-engineered solutions",
        detail: "We build for your process and constraints, not from a template.",
      },
      {
        title: "Business-oriented technical decisions",
        detail: "Every recommendation is tied to what it means for cost, risk, and operations.",
      },
      {
        title: "Broad technical capabilities",
        detail: "Software, data, cloud, AI, and architecture under one team, so nothing falls between vendors.",
      },
      {
        title: "Flexible project approaches",
        detail: "From a single fix to a full program, we adapt the process to the work.",
      },
      {
        title: "Scalable architecture",
        detail: "Systems designed to handle growth in users, data, and features.",
      },
      {
        title: "Practical problem-solving",
        detail: "We choose the simplest approach that solves the problem well.",
      },
      {
        title: "Integration with existing systems",
        detail: "New technology works with what you already run, instead of replacing everything.",
      },
      {
        title: "Long-term technology thinking",
        detail: "Documentation, clear ownership, and maintainable code, so the system serves you for years.",
      },
    ],
    standardsLink: "Read our engineering standards",
  },

  industries: {
    eyebrow: "Industries",
    title: "Technology for the way your industry works.",
    lead: "The problems differ by industry. The engineering carries across them. These are the kinds of solutions businesses in each one often need.",
    link: "See all industries",
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what you need to build or fix.",
    lead: "It can be a new application, an older system that needs work, or a technical problem you haven't been able to solve. A short description is enough to start.",
    cta: "Start a conversation",
    points: [
      "You get a confirmation right away.",
      "A person replies within one business hour.",
      "No obligation. We start by understanding the problem.",
    ],
    emailLabel: "Prefer email?",
  },
};

export type Home = typeof home;
