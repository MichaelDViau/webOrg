import type { StandardSlug, StandardText } from "@/lib/standards";

/**
 * Published standards: what we do by default, in plain language, for buyers and their IT reviewers.
 * These are commitments. Confirm each one matches the Digital Systems Operating Manual before launch.
 */
export const standards: Record<StandardSlug, StandardText> = {
  security: {
    name: "Security",
    card: "HTTPS everywhere, no secrets in code, monitored, backed up and quickly updated.",
    seoTitle: "Security Standard",
    metaDescription:
      "How we secure every project by default: HTTPS everywhere, security headers, spam protection on forms, no secrets in code, monitored uptime, backups and quick updates.",
    headline: "Security by default, in plain language.",
    lead: "This is what we do on every project without being asked, and how you can check it.",
    defaults: [
      {
        title: "HTTPS everywhere",
        detail: "Every page and every form is served over an encrypted connection, and browsers are told to insist on it.",
      },
      {
        title: "Security headers",
        detail: "Headers that limit what a page is allowed to load and do, so a mistake in one place can't spread.",
      },
      {
        title: "Spam protection on forms",
        detail: "Forms are protected without puzzles for your visitors, and rate-limited against abuse.",
      },
      {
        title: "No secrets in code",
        detail: "Passwords and keys live in protected settings and a password manager, never in the code.",
      },
      {
        title: "Monitored uptime",
        detail: "We're alerted when your site or system goes down, and a named person responds.",
      },
      {
        title: "Backups",
        detail: "Data and configuration are backed up, and restoring from a backup is tested before launch.",
      },
      {
        title: "Updates applied quickly",
        detail: "Software and platform updates, and security fixes, are applied promptly, not saved for later.",
      },
      {
        title: "Accounts in your name, with MFA",
        detail: "Hosting, domain, CMS and analytics accounts belong to your company and require multi-factor authentication.",
      },
    ],
    wontPromiseTitle: "What we don't promise",
    wontPromise: [
      "That nothing will ever go wrong. No one can promise that.",
      "Certifications we don't hold. If your industry needs one, we'll say so and help you plan for it.",
    ],
    verifyTitle: "How you can check",
    verify: [
      "Ask your IT person to inspect the security headers and HTTPS setup with any public scanner.",
      "Ask to see who has access to each account. It's a list you own.",
      "To report a vulnerability, write to us. We treat every report seriously and reply promptly.",
    ],
  },

  performance: {
    name: "Performance",
    card: "Good Core Web Vitals for real visitors, judged on field data.",
    seoTitle: "Performance Standard",
    metaDescription:
      "How we build fast sites: Core Web Vitals targets (LCP 2.5 s, INP 200 ms, CLS 0.1) judged on real-user data, optimized images, few fonts and minimal third-party scripts.",
    headline: "Fast for real visitors, on real phones.",
    lead: "A beautiful site that's slow contradicts everything we sell. This is how we keep ours, and yours, fast.",
    defaults: [
      {
        title: "Real-user data judges. Lab tools debug.",
        detail: "We judge speed on what real visitors experience (field data), and use lab tools to find what to fix.",
      },
      {
        title: "Optimized images",
        detail: "Modern formats, the right sizes for each screen, and loaded only when needed.",
      },
      {
        title: "Few fonts",
        detail: "One clear typeface, loaded efficiently, so text appears without a flash or a jump.",
      },
      {
        title: "Minimal third-party scripts",
        detail: "Every outside script slows every visitor, so each one has to earn its place.",
      },
      {
        title: "Checked on mobile",
        detail: "We test on phones first, because that's where most visitors are.",
      },
    ],
    targets: {
      title: "What we target",
      intro:
        "We aim for a \"good\" Core Web Vitals rating at the 75th percentile of real-user data, using Google's published thresholds.",
      rows: [
        { label: "Largest Contentful Paint (LCP)", value: "2.5 seconds or less" },
        { label: "Interaction to Next Paint (INP)", value: "200 milliseconds or less" },
        { label: "Cumulative Layout Shift (CLS)", value: "0.1 or less" },
      ],
      note: "Source: web.dev, Core Web Vitals thresholds.",
    },
    wontPromiseTitle: "What we don't promise",
    wontPromise: [
      "A guaranteed score on any speed test. Scores vary by tool, by day and by device.",
      "Results before there is real-user data. A new site needs visitors before field data exists.",
    ],
    verifyTitle: "How you can check",
    verify: [
      "Look at Core Web Vitals in Google Search Console, which reports real-user data for your site.",
      "Run the instant speed check on this site, or yours, to see a lab test on a simulated phone.",
    ],
  },

  accessibility: {
    name: "Accessibility",
    card: "WCAG 2.2 AA as the baseline, checked by tools and by hand.",
    seoTitle: "Accessibility Standard",
    metaDescription:
      "Our accessibility baseline is WCAG 2.2 AA: keyboard use, visible focus, contrast, labels, headings and alternative text, tested with an automated checker and a manual keyboard pass.",
    headline: "Usable by everyone, on any device.",
    lead: "Accessibility isn't an extra. It's part of building something that works.",
    defaults: [
      {
        title: "Keyboard use",
        detail: "Everything can be reached and used without a mouse, in a sensible order.",
      },
      {
        title: "Visible focus",
        detail: "You can always see where you are on the page.",
      },
      {
        title: "Contrast",
        detail: "Text and controls are easy to read against their background.",
      },
      {
        title: "Labels",
        detail: "Every form field has a clear label and a helpful error message.",
      },
      {
        title: "Headings and structure",
        detail: "Pages have a logical outline, so screen reader users can move through them quickly.",
      },
      {
        title: "Alternative text",
        detail: "Images that carry meaning have a text description. Decorative ones are hidden from assistive technology.",
      },
    ],
    wontPromiseTitle: "What we don't promise",
    wontPromise: [
      "That a site is \"fully accessible\" for every person in every situation. We aim for WCAG 2.2 AA and fix what we find.",
      "That an automated checker is enough. It finds only some problems, which is why we also test by hand.",
    ],
    verifyTitle: "How we test, and how you can",
    verify: [
      "An automated checker on every page, plus a manual keyboard pass before launch.",
      "Try it yourself: press the Tab key on any page of this site and follow the focus.",
      "If something doesn't work for you, tell us. We'll fix it.",
    ],
  },

  "ai-policy": {
    name: "AI policy",
    card: "AI drafts. Your team approves.",
    seoTitle: "AI Policy",
    metaDescription:
      "How we use AI on client work: AI drafts and your team approves, tested on your own examples, your data kept in your accounts and not used for training without written consent.",
    headline: "AI drafts. Your team approves.",
    lead: "AI is a tool for specific tasks, used with a person in charge. This is the policy we follow on every project that uses it.",
    defaults: [
      {
        title: "A person reviews what reaches a client",
        detail: "AI drafts, sorts and summarizes. A person approves before anything goes out, unless you decide otherwise in writing for a specific, low-risk task.",
      },
      {
        title: "One clear task at a time",
        detail: "We apply AI to a specific, measurable task. If a simple rule works better, we use the rule.",
      },
      {
        title: "Tested on your own examples",
        detail: "We measure accuracy on real examples that your team has verified, before anyone relies on the result.",
      },
      {
        title: "Your data stays yours",
        detail: "Data stays in accounts you own. We don't send it to a provider that uses it to train models without your written consent.",
      },
      {
        title: "We tell you what's used",
        detail: "You know which AI provider handles what, and where data is processed.",
      },
      {
        title: "Answers show their sources",
        detail: "Where an answer comes from documents, it points to them, so a person can check.",
      },
      {
        title: "Monitored after launch",
        detail: "We keep measuring accuracy and tell you if it drops.",
      },
    ],
    wontPromiseTitle: "What we don't promise",
    wontPromise: [
      "That AI is always right. It isn't, which is why a person reviews.",
      "Fully autonomous systems. We don't build them for tasks with real consequences.",
    ],
    verifyTitle: "How you can check",
    verify: [
      "Ask which AI provider is used for each task, and where data is processed.",
      "Ask to see the test results on your own examples.",
      "You can switch AI features off at any time.",
    ],
  },

  privacy: {
    name: "Privacy",
    card: "Collect only what's needed, keep it in your accounts, and follow the local rules.",
    seoTitle: "Privacy Standard",
    metaDescription:
      "How we handle personal data on client work: collect only what's needed, keep it in your accounts, and follow local rules including Quebec's Law 25 and Mexico's federal privacy law.",
    headline: "Only the data you need, kept where you control it.",
    lead: "This is the privacy standard for client work. How this website handles your data is in the privacy policy.",
    defaults: [
      {
        title: "Collect only what's needed",
        detail: "If a system doesn't need a piece of personal data, we don't collect it.",
      },
      {
        title: "Data lives in your accounts",
        detail: "Client data is stored in accounts you own, so you keep control of it.",
      },
      {
        title: "Consent set per country",
        detail: "Consent notices follow the rules where your visitors are, including Quebec's Law 25 and Mexico's federal privacy law.",
      },
      {
        title: "Access and deletion",
        detail: "We build in the ability to find, correct, export and delete a person's data when they ask.",
      },
      {
        title: "Named providers",
        detail: "We tell you which service providers handle personal data, and why.",
      },
      {
        title: "Kept only as long as needed",
        detail: "Retention periods are agreed up front, and old data is removed.",
      },
    ],
    wontPromiseTitle: "What we don't promise",
    wontPromise: [
      "Legal advice. We build the tools. Your lawyer decides what your business needs.",
      "That a law applies, or doesn't. We flag the questions, and your lawyer answers them.",
    ],
    verifyTitle: "How you can check",
    verify: [
      "Ask for the list of service providers that handle personal data on your project.",
      "Read the privacy policy, cookie notice and Mexican privacy notice for this site.",
    ],
  },
};

export const standardsPage = {
  metaTitle: "Standards: Security, Performance, Accessibility, AI and Privacy",
  metaDescription:
    "The standards behind every project, in plain language: security, performance, accessibility, AI policy and privacy. Published so your IT reviewer can check us.",
  eyebrow: "Standards",
  title: "What we do by default, written down.",
  lead: "Serious buyers and their IT reviewers should be able to check us before they sign. These five standards apply to every project.",
  readStandard: "Read the standard",
  ownershipTitle: "Who owns what",
  ownershipBody:
    "You own the code, the accounts and the domains, from the first day. We work through named access that you can remove at any time.",
  technologyTitle: "Technology",
  technologyBody:
    "We build with mainstream, well-documented tools, such as TypeScript, React and Next.js, PostgreSQL and managed hosting. We choose per project, and we choose tools that any qualified developer can maintain.",
  processLink: "See how we work",
  ctaTitle: "Need something checked before you decide?",
  ctaLead: "Send your IT person our way. We're glad to answer their questions.",
};

export const standardPage = {
  defaults: "What we do by default",
  otherStandards: "Other standards",
  lastReviewed: "Standards reviewed {date}.",
};

export type StandardsPage = typeof standardsPage;
export type StandardPage = typeof standardPage;
