/**
 * How we work: five flexible steps (understand, strategize, engineer, implement, evolve), the working
 * principles behind them, who owns what, and answers for a careful technical reviewer.
 * The process is presented as adaptable to each project, never as one rigid method.
 */
export const howWeWork = {
  metaTitle: "How We Work: From Challenge to Solution",
  metaDescription:
    "Our approach to technology projects: understand, strategize, engineer, implement, and evolve. A flexible process adapted to each project, with weekly written updates and full ownership of the code.",
  eyebrow: "How we work",
  title: "From challenge to solution.",
  lead: "Every technology project is different, so our process adapts to the work. Most projects follow five steps. Here is what happens in each one, and what you get.",

  stepsTitle: "Five steps, adapted to each project",
  step: "Step {number}",
  youGet: "You get",
  steps: [
    {
      title: "Understand",
      detail: "We learn the business, its challenges and objectives, and the technology already in place.",
      points: [
        "Conversations with the people who use and run the systems",
        "A review of existing software, data, and infrastructure",
        "A clear statement of the problem and what success looks like",
      ],
      youGet: "A shared, written understanding of the problem and the goals.",
    },
    {
      title: "Strategize",
      detail: "We identify the right technical approach, architecture, and plan for carrying it out.",
      points: [
        "Options compared, with the trade-offs in plain language",
        "An architecture and technology recommendation",
        "A phased plan with scope, timing, and cost",
      ],
      youGet: "A written recommendation and plan you can approve, or take elsewhere.",
    },
    {
      title: "Engineer",
      detail: "We design and develop the software, applications, infrastructure, or integrations the plan calls for.",
      points: [
        "Design and development in working increments",
        "A staging environment you can open at any time",
        "A short written update every week",
      ],
      youGet: "Working software early, and visibility into progress throughout.",
    },
    {
      title: "Implement",
      detail: "We deploy, integrate, and test the solution so it works within your real environment.",
      points: [
        "Integration with your existing systems and data",
        "Testing before launch, including security and performance",
        "A planned launch, with a way back if something goes wrong",
      ],
      youGet: "A solution that is live, tested, and running in your business.",
    },
    {
      title: "Evolve",
      detail: "We improve, optimize, maintain, and adapt the technology as your needs change.",
      points: [
        "Monitoring and fixes after launch",
        "Updates and improvements as the business grows",
        "Documentation and a smooth handover, if you want your own team to take over",
      ],
      youGet: "Technology that keeps up with the business, and the freedom to choose who maintains it.",
    },
  ],

  flexibleTitle: "A flexible process, not a rigid method",
  flexibleBody:
    "We don't push every project through the same sequence. A performance problem may need only Understand and Engineer. A platform migration needs all five. We agree on the steps that fit before we start.",
  principlesTitle: "How we work with you",
  principles: [
    {
      title: "A named person is accountable",
      detail: "You know who is responsible for your project, and how to reach them.",
    },
    {
      title: "Written updates every week",
      detail: "A short written update, so you always know where things stand.",
    },
    {
      title: "Work in the open",
      detail: "A staging environment you can open at any time, from early in the project.",
    },
    {
      title: "Scope agreed in writing",
      detail: "Scope and price are agreed in writing before each phase begins, and you approve them first.",
    },
  ],

  ownershipTitle: "Who owns what",
  ownershipLead: "You do. This is how we make that true in practice, not only in the contract.",
  ownership: [
    {
      title: "Code",
      detail: "The code lives in a repository in your organization, not ours.",
    },
    {
      title: "Accounts",
      detail: "Hosting, analytics, and email accounts are opened in your company's name, protected by multi-factor authentication.",
    },
    {
      title: "Domains",
      detail: "Your domain is registered to you. We never hold it on your behalf.",
    },
    {
      title: "Access",
      detail: "We work through named access to your accounts. You can remove it at any time.",
    },
  ],

  reviewerTitle: "For your technical team",
  reviewerLead: "The questions a careful reviewer asks, answered plainly.",
  reviewerFaqs: [
    {
      question: "What happens if you disappear?",
      answer:
        "Nothing breaks. The code, the accounts, and the domains are already yours, and the documentation is in your repository. Any capable developer can take over.",
    },
    {
      question: "Is it secure?",
      answer:
        "We follow a published security standard: HTTPS everywhere, security headers, no secrets in code, monitored uptime, backups, and quick updates.",
    },
    {
      question: "What technology do you use?",
      answer:
        "Mainstream, well-documented tools chosen per project, such as TypeScript, React, PostgreSQL, and major cloud platforms, so anyone qualified can maintain them.",
    },
    {
      question: "Who has access to our data?",
      answer:
        "Only the people who need it, through named accounts, with multi-factor authentication. You can review and remove access whenever you like.",
    },
  ],
  standardsLink: "Read our engineering standards",

  neededTitle: "What we need from you",
  needed: [
    "One person who can make decisions.",
    "Access to the systems we review, on terms you control.",
    "A short weekly look at the written update.",
  ],
};

export type HowWeWork = typeof howWeWork;
