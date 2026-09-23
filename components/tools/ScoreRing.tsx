import { cn } from "@/lib/cn";

interface ScoreRingProps {
  score: number;
  label: string;
}

function scoreTone(score: number) {
  if (score >= 90) return "text-accent";
  return score >= 50 ? "text-warn" : "text-danger";
}

/** Circular 0 to 100 score, colored with the same thresholds Lighthouse uses. */
export function ScoreRing({ score, label }: ScoreRingProps) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className={cn("relative size-20", scoreTone(score))}>
        <svg viewBox="0 0 64 64" aria-hidden="true" className="size-full -rotate-90">
          <circle cx="32" cy="32" r={radius} fill="none" strokeWidth="6" className="stroke-line" />
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - score / 100)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold tabular-nums">
          {score}
        </span>
      </div>
      <span className="text-sm text-ink">
        {label}
        <span className="sr-only">: {score} out of 100</span>
      </span>
    </div>
  );
}
