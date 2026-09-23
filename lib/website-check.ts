/** Scores are 0 to 100, as shown in Lighthouse. */
export interface CheckScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface CheckMetric {
  label: string;
  value: string;
  rating: "good" | "average" | "poor";
}

export interface CheckFinding {
  title: string;
  savings?: string;
}

export interface WebsiteCheckResult {
  url: string;
  scores: CheckScores;
  metrics: CheckMetric[];
  findings: CheckFinding[];
}

interface LighthouseAudit {
  title?: string;
  score?: number | null;
  scoreDisplayMode?: string;
  displayValue?: string;
  details?: { type?: string; overallSavingsMs?: number };
}

export interface LighthouseReport {
  finalUrl?: string;
  finalDisplayedUrl?: string;
  categories: Record<string, { score: number | null; auditRefs?: { id: string; weight: number }[] }>;
  audits: Record<string, LighthouseAudit>;
}

const METRICS = [
  { id: "largest-contentful-paint", label: "Largest Contentful Paint" },
  { id: "first-contentful-paint", label: "First Contentful Paint" },
  { id: "total-blocking-time", label: "Total Blocking Time" },
  { id: "cumulative-layout-shift", label: "Cumulative Layout Shift" },
  { id: "speed-index", label: "Speed Index" },
] as const;

function toScore(value: number | null | undefined): number {
  return Math.round((value ?? 0) * 100);
}

function toRating(score: number | null | undefined): CheckMetric["rating"] {
  if (score == null) return "average";
  if (score >= 0.9) return "good";
  return score >= 0.5 ? "average" : "poor";
}

/** Turns a Lighthouse report (as returned by PageSpeed Insights) into a short, readable summary. */
export function summarizeReport(report: LighthouseReport, requestedUrl: string): WebsiteCheckResult {
  const { categories, audits } = report;

  const metrics = METRICS.flatMap(({ id, label }) => {
    const audit = audits[id];
    return audit?.displayValue ? [{ label, value: audit.displayValue, rating: toRating(audit.score) }] : [];
  });

  // Speed opportunities first, ordered by estimated time saved.
  const opportunities = Object.values(audits)
    .filter((audit) => audit.details?.type === "opportunity" && (audit.details.overallSavingsMs ?? 0) >= 100)
    .sort((a, b) => (b.details?.overallSavingsMs ?? 0) - (a.details?.overallSavingsMs ?? 0))
    .map((audit) => ({
      title: audit.title ?? "",
      savings: `Could save about ${((audit.details?.overallSavingsMs ?? 0) / 1000).toFixed(1)} s`,
    }));

  // Then failed SEO and accessibility checks, which are usually quick wins.
  const failedChecks = ["seo", "accessibility"].flatMap((category) =>
    (categories[category]?.auditRefs ?? [])
      .filter((ref) => ref.weight > 0)
      .map((ref) => audits[ref.id])
      .filter((audit): audit is LighthouseAudit => audit?.scoreDisplayMode === "binary" && audit.score === 0)
      .map((audit) => ({ title: audit.title ?? "" })),
  );

  return {
    url: report.finalDisplayedUrl ?? report.finalUrl ?? requestedUrl,
    scores: {
      performance: toScore(categories.performance?.score),
      accessibility: toScore(categories.accessibility?.score),
      bestPractices: toScore(categories["best-practices"]?.score),
      seo: toScore(categories.seo?.score),
    },
    metrics,
    findings: [...opportunities, ...failedChecks].filter((finding) => finding.title).slice(0, 6),
  };
}

/** Normalizes user input into an https URL, or returns null if it isn't a public web address. */
export function normalizeWebsiteUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed || trimmed.length > 2048) return null;

  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase();
  const isPrivate =
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    /^(\d{1,3}\.){3}\d{1,3}$/.test(host) ||
    host.includes(":") ||
    !host.includes(".");

  if (!["http:", "https:"].includes(url.protocol) || isPrivate) return null;
  url.hash = "";
  return url.toString();
}
