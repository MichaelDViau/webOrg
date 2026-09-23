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
