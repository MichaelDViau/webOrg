import type { Ui } from "@/lib/content/en/ui";
import { AppWindow, Arrow, Node, StatusPill, Tag, VisualPanel } from "./parts";

const bars = [38, 52, 44, 66, 58, 82, 70];
const counts = ["24", "8", "312"];
const tones = ["new", "active", "done"] as const;

/**
 * The first-screen illustration: a business application, the architecture layers behind it and the
 * cloud region it runs in. It shows the kind of work at a glance, without claiming any client or result.
 */
export function HeroVisual({ labels }: { labels: Ui["visuals"] }) {
  const app = labels.app;
  const layers = [labels.layers.interface, labels.layers.api, labels.layers.services, labels.layers.data];

  return (
    <VisualPanel label={labels.alt.hero} caption={labels.illustration}>
      <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
        <AppWindow title={app.name}>
          <div className="flex gap-4 border-b border-line pb-2 text-xs">
            {app.tabs.map((tab, index) => (
              <span key={tab} className={index === 0 ? "font-medium text-ink" : "text-muted"}>
                {tab}
              </span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {app.kpis.map((label, index) => (
              <div key={label} className="min-w-0 rounded-sm border border-line bg-canvas px-2 py-1.5">
                <p className="truncate text-[0.6875rem] text-muted">{label}</p>
                <p className="text-base font-semibold leading-tight text-ink">{counts[index]}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex h-16 items-end gap-1.5 rounded-sm border border-line bg-canvas px-2 pt-2 pb-2">
            {bars.map((height, index) => (
              <span
                key={index}
                className={`w-full rounded-[1px] ${index === bars.length - 2 ? "bg-accent" : "bg-line-strong"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <p className="mt-3 text-xs font-medium text-ink">{app.activity}</p>
          <ul className="mt-1 divide-y divide-line">
            {app.rows.map((row, index) => (
              <li key={row} className="flex items-center justify-between gap-2 py-1.5 text-xs text-body">
                <span className="min-w-0 truncate">{row}</span>
                <StatusPill tone={tones[index]}>{app.status[index]}</StatusPill>
              </li>
            ))}
          </ul>
        </AppWindow>

        <div className="flex flex-col gap-4">
          <div className="grid flex-1 gap-1.5" style={{ gridTemplateRows: `repeat(${layers.length}, minmax(0, 1fr))` }}>
            {layers.map((layer, index) => (
              <Node key={layer} accent={index === 0} className="flex items-center justify-between gap-3">
                <span>{layer}</span>
                <span className="h-1.5 w-8 rounded-full bg-night-line" />
              </Node>
            ))}
          </div>

          <Node dashed className="space-y-2">
            <Tag>{labels.cloud.region}</Tag>
            <div className="flex flex-wrap gap-1.5">
              {[labels.cloud.app, labels.cloud.database, labels.cloud.storage].map((chip) => (
                <span key={chip} className="rounded-sm border border-night-line px-2 py-1 text-xs text-paper">
                  {chip}
                </span>
              ))}
            </div>
          </Node>
        </div>
      </div>
    </VisualPanel>
  );
}

/** The integration illustration: web, mobile and partner applications reach a database, business systems and AI through one API layer. */
export function IntegrationVisual({ labels }: { labels: Ui["visuals"] }) {
  const { integration } = labels;
  const arrows = (
    <div className="grid grid-cols-3 justify-items-center">
      {[0, 1, 2].map((item) => (
        <Arrow key={item} down />
      ))}
    </div>
  );

  return (
    <VisualPanel label={labels.alt.integration} caption={labels.illustration}>
      <div className="space-y-1">
        <div className="grid grid-cols-3 gap-2">
          {integration.top.map((label) => (
            <Node key={label} className="text-center">
              {label}
            </Node>
          ))}
        </div>
        {arrows}
        <Node accent className="text-center font-medium">
          {integration.hub}
        </Node>
        {arrows}
        <div className="grid grid-cols-3 gap-2">
          {integration.bottom.map((label) => (
            <Node key={label} className="text-center">
              {label}
            </Node>
          ))}
        </div>
      </div>
    </VisualPanel>
  );
}
