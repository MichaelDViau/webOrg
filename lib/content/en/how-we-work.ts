/**
 * How we work: reduces the feeling of risk. Audit, scope, fixed-price phases, build in the open
 * (staging link, written update every week), quality gates, launch and 90 days of care, then a plan.
 */
export const howWeWork = {
  metaTitle: "How We Work",
  metaDescription:
    "Audit, scope, fixed-price phases, building in the open with a weekly written update, quality gates, and 90 days of care after launch. You own the code, accounts and domains.",
  eyebrow: "How we work",
  title: "A clear process, with no surprises.",
  lead: "Every project follows the same path. You know what happens next, what it costs and who is responsible, at every step.",

  stepsTitle: "The path from first call to daily operation",
  step: "Step {number}",
  youGet: "You get",
  steps: [
    {
      title: "Audit",
      detail: "We review how your website, inbox, tools and team work together, and find where time and inquiries leak.",
      youGet: "A system map, findings with evidence and a costed plan.",
    },
    {
      title: "Scope",
      detail: "We turn the plan into a written scope: what's in, what's out and how we'll know it worked.",
      youGet: "A scope you approve before anything is built.",
    },
    {
      title: "Fixed-price phases",
      detail: "Each phase has its own deliverables and its own price. You approve one at a time.",
      youGet: "A fixed price for the next phase, in writing.",
    },
    {
      title: "Build in the open",
      detail: "You can see the work as it happens. There is nothing to wait for at the end.",
      youGet: "A staging link from the first week and a written update every week.",
    },
    {
      title: "Quality gates",
      detail: "Before launch, the work passes the same checks every time.",
      youGet: "A checklist: accessibility, speed on phones, security, and forms tested end to end in every language.",
    },
    {
      title: "Launch and 90 days of care",
      detail: "We go live, then we watch. For 90 days we monitor and fix anything that comes up.",
      youGet: "A launch you can rely on, and a named person to call.",
    },
    {
      title: "Plan",
      detail: "Then you choose what's next: a managed plan, the next phase, or handing over to your own team.",
      youGet: "A clear recommendation, and the freedom to say no.",
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
      detail: "Hosting, CMS, analytics and email accounts are opened in your company's name, protected by multi-factor authentication.",
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

  reviewerTitle: "For your IT person or adviser",
  reviewerLead: "The questions a careful reviewer asks, answered plainly.",
  reviewerFaqs: [
    {
      question: "What happens if you disappear?",
      answer:
        "Nothing breaks. The code, the accounts and the domains are already yours, and the documentation is in your repository. Any capable developer can take over.",
    },
    {
      question: "Is it secure?",
      answer:
        "We follow a published security standard: HTTPS everywhere, security headers, no secrets in code, monitored uptime, backups and quick updates.",
    },
    {
      question: "What technology do you use?",
      answer:
        "Mainstream, well-documented tools, such as TypeScript, React and Next.js, PostgreSQL and managed hosting, chosen per project so anyone qualified can maintain them.",
    },
    {
      question: "Who has access to our data?",
      answer:
        "Only the people who need it, through named accounts, with multi-factor authentication. You can review and remove access whenever you like.",
    },
  ],
  standardsLink: "Read all our standards",

  neededTitle: "What we need from you",
  needed: [
    "One person who can make decisions.",
    "Access to the systems we review, on terms you control.",
    "A short weekly look at the written update.",
  ],
};

export type HowWeWork = typeof howWeWork;
