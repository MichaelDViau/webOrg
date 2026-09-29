import type { ReactNode } from "react";
import { DemoBadge } from "./DemoBadge";
import { cn } from "@/lib/cn";
import type { DemoScreen as DemoScreenData, Tone } from "@/lib/demos";
import { getContent } from "@/lib/i18n/server";

const badgeTones: Record<Tone, string> = {
  neutral: "border-line bg-canvas text-muted",
  good: "border-success/30 bg-success/10 text-success",
  warn: "border-warn/30 bg-warn/10 text-warn",
  info: "border-accent/40 bg-accent/10 text-accent-strong",
};

function StatusBadge({ tone, children }: { tone: Tone; children: string }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", badgeTones[tone])}>
      {children}
    </span>
  );
}

/** The window around every demo screen: a title bar with the app name, and a sample-data footer. */
function Frame({ app, sampleData, children }: { app: string; sampleData: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line-strong bg-paper shadow-sm" data-demo-frame>
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="text-sm font-medium text-ink">{app}</span>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
      <p className="border-t border-line bg-canvas px-4 py-2 text-xs text-muted">{sampleData}</p>
    </div>
  );
}

/**
 * One screen of a concept demo, drawn from sample data. It is a picture of an interface, so nothing in
 * it is interactive. The "Concept demo" label sits with every screen.
 */
export async function DemoScreen({ screen }: { screen: DemoScreenData }) {
  const { ui } = await getContent();

  return (
    <figure data-reveal>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h3 className="text-lg font-medium text-ink">{screen.title}</h3>
        <DemoBadge />
      </div>

      <Frame app={screen.app} sampleData={ui.demo.sampleData}>
        {screen.kind === "list" && (
          <div>
            <p className="flex flex-wrap gap-x-5 gap-y-1 border-b border-line pb-3 text-sm">
              {screen.tabs.map((tab, index) => (
                <span key={tab} className={index === 0 ? "font-medium text-ink" : "text-muted"}>
                  {tab}
                </span>
              ))}
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {screen.kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-md border border-line bg-canvas px-4 py-3">
                  <dt className="text-xs text-muted">{kpi.label}</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-ink">{kpi.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm font-medium text-ink">{screen.listTitle}</p>
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {screen.rows.map((row) => (
                <li key={row.primary} className="flex items-center justify-between gap-4 py-3">
                  <span className="min-w-0">
                    <span className="block truncate text-ink">{row.primary}</span>
                    <span className="block truncate text-sm text-muted">{row.secondary}</span>
                  </span>
                  <StatusBadge tone={row.tone}>{row.badge}</StatusBadge>
                </li>
              ))}
            </ul>
          </div>
        )}

        {screen.kind === "flow" && (
          <ol className="relative space-y-6 border-l border-line-strong pl-6">
            {screen.steps.map((step) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2",
                    step.state === "done" && "border-success bg-success",
                    step.state === "active" && "border-accent bg-paper ring-4 ring-accent/20",
                    step.state === "todo" && "border-line-strong bg-paper",
                  )}
                />
                <p className="text-xs font-medium text-muted">{step.when}</p>
                <p className="mt-0.5 font-medium text-ink">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        )}

        {screen.kind === "form" && (
          <div>
            <p className="text-lg font-semibold tracking-tight text-ink">{screen.heading}</p>
            <div className="mt-4 space-y-3">
              {screen.fields.map((field) => (
                <div key={field.label}>
                  <p className="text-xs font-medium text-ink">{field.label}</p>
                  <p
                    className={cn(
                      "mt-1 rounded-md border border-line-strong bg-paper px-3 py-2 text-sm text-body",
                      field.tall && "min-h-16",
                    )}
                  >
                    {field.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 inline-flex h-10 items-center rounded-md bg-ink px-5 text-sm font-medium text-paper">{screen.submit}</p>
            <p className="mt-3 text-xs text-muted">{screen.note}</p>
          </div>
        )}
      </Frame>
      <figcaption className="mt-3 text-sm text-muted">{screen.caption}</figcaption>
    </figure>
  );
}
