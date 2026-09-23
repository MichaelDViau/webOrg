export interface Principle {
  title: string;
  detail: string;
}

export const principles: Principle[] = [
  {
    title: "Senior people on every project",
    detail:
      "The people you meet in the first conversation are the people who design and build your project.",
  },
  {
    title: "Honest scoping",
    detail:
      "We'll tell you when something isn't worth building, when a simpler tool will do, or when we're not the right fit.",
  },
  {
    title: "You own everything",
    detail: "Code, designs, accounts and data belong to you from day one. No proprietary platforms, no lock-in.",
  },
  {
    title: "Built to last",
    detail:
      "Tested, documented and monitored software that your team — or any competent developer — can maintain.",
  },
];
