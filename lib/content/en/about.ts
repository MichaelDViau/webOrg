/**
 * About: human credibility. Why the company exists, the founder, how the team works across countries,
 * and a "read how we work" block. Never invent a biography, a client, a number or an award.
 * Add a real photo through `founderPhoto` in lib/site.ts. No stock people.
 */
export const about = {
  metaTitle: "About",
  metaDescription:
    "{name} designs, builds and runs the systems established businesses run on. One accountable team, in English, French and Spanish.",
  eyebrow: "About",
  title: "One accountable team for the systems your business runs on.",
  lead: "{name} designs, builds and runs websites, client portals, internal software and automations.",

  whyTitle: "Why we exist",
  why: [
    "Many established businesses run on tools that don't talk to each other. One vendor builds the website, another sells the software, and nobody looks after the gaps between them.",
    "We exist to be the one accountable team for all of it: to diagnose where time and inquiries leak, to engineer connected systems, and to operate them afterward.",
  ],

  founderTitle: "Who you'll work with",
  founder: [
    "You'll know who is responsible for your project from the first call. Every client has a named person accountable for the work, and for the care after launch.",
    "That person works in English, French or Spanish, in your language and, as far as possible, your time zone.",
  ],
  founderPhotoAlt: "The founder of {name}",

  teamTitle: "How the team works across countries",
  team: [
    "We serve businesses in the United States, Canada and Mexico, and we work across time zones. Calls are booked in yours.",
    "So nothing depends on who was on which call, decisions and progress are written down: a written update every week, and a staging link you can open any time.",
  ],

  proofTitle: "Read how we work before you hire us",
  proofBody:
    "We publish the standards we follow and the process every project uses, in plain language. The audit shows you the evidence before you pay for a build.",
  proofLinks: { standards: "Read the standards", process: "See how we work" },

  beliefsTitle: "What we believe",
  beliefs: [
    {
      title: "Evidence before proposals.",
      detail: "We'd rather show you where the time goes than ask you to trust a promise.",
    },
    {
      title: "The simplest tool that works.",
      detail: "If a spreadsheet or an existing product solves it, we'll say so, even when that means a smaller project for us.",
    },
    {
      title: "Written down, not remembered.",
      detail: "Scope, prices, decisions and updates are in writing, so everyone works from the same facts.",
    },
    {
      title: "Speed is part of the product.",
      detail: "Fast systems are easier to use, easier to find and cheaper to run.",
    },
  ],
};

export type About = typeof about;

export const partners = {
  metaTitle: "Partners",
  metaDescription:
    "For IT firms, accountants and fractional CTOs: how referring a client to us works, what we do first, and the standards you can check before you refer.",
  eyebrow: "Partners",
  title: "Can you safely refer your clients to us?",
  lead: "For IT firms, accountants and fractional CTOs whose clients need systems built and looked after. Here's how we'd handle a referral, and what you can check first.",

  checkTitle: "What you can check before you refer",
  check: [
    {
      title: "Our standards",
      detail: "Security, performance, accessibility, AI and privacy, written in plain language.",
      href: "/standards",
      link: "Read the standards",
    },
    {
      title: "How we work",
      detail: "A process with fixed-price phases, weekly written updates and quality gates.",
      href: "/how-we-work",
      link: "See how we work",
    },
    {
      title: "The demos",
      detail: "Working concept demos for the industries we serve, built on sample data.",
      href: "/work",
      link: "See the demos",
    },
  ],

  howTitle: "How a referral works",
  how: [
    { title: "You introduce us", detail: "A short email is enough. We reply personally within one business hour." },
    { title: "We start with the audit", detail: "It shows your client what's worth fixing, with evidence, before anyone commits to a build." },
    { title: "You stay in the loop", detail: "If your client agrees, we share the findings and the plan with you." },
    { title: "Your client owns everything", detail: "Code, accounts and domains belong to your client, so you can keep advising them." },
  ],

  termsTitle: "Partner terms",
  termsBody: "We agree partner terms in writing before the first referral. Ask us and we'll walk you through them.",
  cta: "Talk to us about partnering",
};

export type Partners = typeof partners;
