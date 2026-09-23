import type { ReactNode } from "react";
import type { ServiceVisual } from "@/lib/content";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-2xl border border-line bg-canvas/60 p-4 backdrop-blur-sm">{children}</div>
  );
}

function AppVisual() {
  const bars = [40, 65, 50, 80, 60, 95, 75, 88];

  return (
    <Frame>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-3 h-2 w-24 rounded-full bg-white/5" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 flex flex-col gap-2">
          <span className="h-2 w-3/4 rounded-full bg-white/10" />
          <span className="h-2 w-1/2 rounded-full bg-white/5" />
          <span className="h-2 w-2/3 rounded-full bg-white/5" />
          <span className="h-2 w-1/2 rounded-full bg-white/5" />
        </div>
        <div className="col-span-2 flex h-24 items-end gap-1.5">
          {bars.map((height, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-linear-to-t from-accent/20 to-accent/70 transition-all duration-700 group-hover:to-accent-cyan"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function AIVisual() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="ml-8 self-end rounded-2xl rounded-br-sm bg-surface-raised px-4 py-3 text-sm text-ink-muted">
        Summarize churn risk for Q3 accounts.
      </div>
      <div className="mr-8 rounded-2xl rounded-bl-sm border border-accent/30 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-ink">
        12 accounts flagged. Top driver: declining weekly usage after onboarding.
        <span className="mt-3 flex items-center gap-2 font-mono text-xs text-accent">
          <span className="size-1.5 animate-pulse-soft rounded-full bg-accent" />
          Drafting outreach plan…
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {["RAG", "Agents", "Fine-tuning", "Evals"].map((tag) => (
          <span key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-subtle">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function PerformanceVisual() {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex w-full items-center gap-6">
      <div className="relative size-24 shrink-0">
        <svg viewBox="0 0 88 88" className="size-full -rotate-90">
          <circle cx="44" cy="44" r={radius} fill="none" strokeWidth="6" className="stroke-white/5" />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={0}
            className="stroke-accent-cyan"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-semibold tracking-tight">
          100
        </span>
      </div>
      <dl className="grid flex-1 gap-2 font-mono text-xs">
        {[
          ["LCP", "0.8s"],
          ["INP", "48ms"],
          ["CLS", "0.01"],
        ].map(([metric, value]) => (
          <div key={metric} className="flex justify-between border-b border-line pb-2 last:border-0">
            <dt className="text-ink-subtle">{metric}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function GrowthVisual() {
  return (
    <svg viewBox="0 0 400 100" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-violet)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-accent-violet)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 90 C 60 85, 100 70, 150 65 S 250 40, 300 30 S 370 8, 400 5 L 400 100 L 0 100 Z" fill="url(#growth-fill)" />
      <path
        d="M0 90 C 60 85, 100 70, 150 65 S 250 40, 300 30 S 370 8, 400 5"
        fill="none"
        stroke="var(--color-accent-violet)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function WebVisual() {
  return (
    <Frame>
      <div className="flex flex-col items-center gap-2 py-3">
        <span className="h-2.5 w-2/3 rounded-full bg-white/15" />
        <span className="h-2.5 w-1/2 rounded-full bg-linear-to-r from-accent/60 to-accent-violet/60" />
        <span className="mt-2 h-1.5 w-3/4 rounded-full bg-white/5" />
        <span className="mt-3 h-5 w-20 rounded-full border border-accent/40 transition-colors duration-500 group-hover:bg-accent/20" />
      </div>
    </Frame>
  );
}

function SystemVisual() {
  const swatches = ["bg-accent", "bg-accent-violet", "bg-accent-cyan", "bg-ink", "bg-surface-raised"];

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex gap-2">
        {swatches.map((swatch) => (
          <span key={swatch} className={`size-8 rounded-lg border border-line ${swatch}`} />
        ))}
      </div>
      <div className="flex items-baseline gap-4 font-mono text-xs text-ink-subtle">
        <span className="text-2xl font-semibold tracking-tight text-ink">Aa</span>
        <span>--radius-3xl</span>
        <span>--space-8</span>
      </div>
    </div>
  );
}

const visuals: Record<ServiceVisual, () => ReactNode> = {
  app: AppVisual,
  ai: AIVisual,
  performance: PerformanceVisual,
  growth: GrowthVisual,
  web: WebVisual,
  system: SystemVisual,
};

export function getServiceVisual(id: ServiceVisual): ReactNode {
  const Visual = visuals[id];
  return <Visual />;
}
