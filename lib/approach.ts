export interface ApproachStep {
  title: string;
  detail: string;
}

export const approachSteps: ApproachStep[] = [
  {
    title: "Understand",
    detail:
      "We talk to the people involved, review what exists, and agree on the problem and how we'll measure success.",
  },
  {
    title: "Plan",
    detail: "A written scope, timeline and fixed estimate for the first phase. No surprises later.",
  },
  {
    title: "Build",
    detail: "Design and engineering in two-week cycles, with working software to review at the end of each one.",
  },
  {
    title: "Support",
    detail: "Launch, monitoring and ongoing improvements — or a clean handover to your own team.",
  },
];
