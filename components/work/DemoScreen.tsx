import type { ReactNode } from "react";
import { DemoBadge } from "./DemoBadge";
import { cn } from "@/lib/cn";
import type { DemoScreen as DemoScreenData, Tone } from "@/lib/demos";
import { getContent } from "@/lib/i18n/server";

/** Status is plain colored text, not a pill. */
const toneText: Record<Tone, string> = {
  neutral: "text-muted",
  good: "text-success",
  warn: "text-warn",
  info: "text-accent-strong",
};

/** A plain bordered box with a title line, standing in for an app window. */
function Frame({ app, sampleData, children }: { app: string; sampleData: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded border border-line-strong bg-paper" data-demo-frame>
      <p className="border-b border-line bg-canvas px-4 py-2.5 text-sm font-semibold text-ink">{app}</p>
      <div className="p-4 sm:p-5">{children}</div>
      <p className="border-t border-line bg-canvas px-4 py-2 text-sm text-muted">{sampleData}</p>
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
    <figure className="min-w-0" data-reveal>
      <h3 className="text-lg font-semibold text-ink">{screen.title}</h3>
      <DemoBadge className="mt-2 mb-3" />

      <Frame app={screen.app} sampleData={ui.demo.sampleData}>
        {screen.kind === "list" && (
          <div>
            <p className="flex flex-wrap gap-x-5 gap-y-1 border-b border-line pb-3">
              {screen.tabs.map((tab, index) => (
                <span key={tab} className={index === 0 ? "font-semibold text-ink" : "text-body"}>
                  {tab}
                </span>
              ))}
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {screen.kpis.map((kpi) => (
                <div key={kpi.label} className="min-w-0 rounded-sm border border-line px-3 py-2.5">
                  <dt className="text-sm text-body [overflow-wrap:anywhere]">{kpi.label}</dt>
                  <dd className="mt-0.5 text-xl font-semibold text-ink">{kpi.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 font-semibold text-ink">{screen.listTitle}</p>
            <ul className="mt-2 divide-y divide-line border-y border-line">
              {screen.rows.map((row) => (
                <li key={row.primary} className="flex items-center justify-between gap-4 py-2.5">
                  <span className="min-w-0">
                    <span className="block truncate text-ink">{row.primary}</span>
                    <span className="block truncate text-sm text-body">{row.secondary}</span>
                  </span>
                  <span className={cn("shrink-0 text-sm font-semibold", toneText[row.tone])}>{row.badge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {screen.kind === "flow" && (
          <ol className="divide-y divide-line">
            {screen.steps.map((step) => (
              <li key={step.title} className="grid gap-x-4 gap-y-0.5 py-3 first:pt-0 last:pb-0 sm:grid-cols-[7.5rem_1fr]">
                <span className="text-sm text-body">{step.when}</span>
                <span>
                  <span className={cn("block text-ink", step.state === "todo" ? "font-normal" : "font-semibold")}>{step.title}</span>
                  <span className="block text-sm text-body">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        )}

        {screen.kind === "form" && (
          <div>
            <p className="text-lg font-semibold text-ink">{screen.heading}</p>
            <div className="mt-4 space-y-3">
              {screen.fields.map((field) => (
                <div key={field.label}>
                  <p className="text-sm font-medium text-ink">{field.label}</p>
                  <p className={cn("mt-1 rounded-sm border border-line-strong bg-paper px-3 py-2 text-sm text-body", field.tall && "min-h-16")}>
                    {field.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 inline-block rounded bg-ink px-5 py-2.5 text-sm font-medium text-paper">{screen.submit}</p>
            <p className="mt-3 text-sm text-body">{screen.note}</p>
          </div>
        )}
      </Frame>
      <figcaption className="mt-3 text-sm text-body">{screen.caption}</figcaption>
    </figure>
  );
}
