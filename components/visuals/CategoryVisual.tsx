import type { ReactNode } from "react";
import type { Ui } from "@/lib/content/en/ui";
import { format } from "@/lib/i18n/format";
import type { ServiceSlug } from "@/lib/services";
import { AppWindow, Arrow, Node, StatusPill, Tag, VisualPanel } from "./parts";

type Labels = Ui["visuals"];
const tones = ["new", "active", "done"] as const;
const severityTones = ["high", "medium", "new"] as const;

/** A line of gray placeholder text inside a light interface. */
function Line({ className }: { className?: string }) {
  return <span className={`block h-1.5 rounded-full bg-line-strong ${className ?? "w-full"}`} />;
}

/** Custom software: a request form and the work queue it feeds. */
function Software({ labels }: { labels: Labels }) {
  const { custom, app } = labels;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <AppWindow title={custom.title}>
        <div className="space-y-2.5">
          {custom.fields.map((field) => (
            <div key={field}>
              <p className="text-[0.6875rem] text-muted">{field}</p>
              <span className="mt-1 block h-6 rounded-sm border border-line-strong bg-paper" />
            </div>
          ))}
          <span className="inline-flex h-7 items-center rounded-sm bg-ink px-3 text-xs font-medium text-paper">
            {custom.submit}
          </span>
        </div>
      </AppWindow>
      <AppWindow title={custom.queue}>
        <ul className="divide-y divide-line">
          {app.rows.map((row, index) => (
            <li key={row} className="flex items-center justify-between gap-2 py-2 text-xs text-body">
              <span className="min-w-0 truncate">{row}</span>
              <StatusPill tone={tones[index]}>{app.status[index]}</StatusPill>
            </li>
          ))}
        </ul>
      </AppWindow>
    </div>
  );
}

/** Web and applications: a page in a desktop browser, and the same page on a phone. */
function Web({ labels }: { labels: Labels }) {
  return (
    <div className="flex items-end gap-4">
      <AppWindow title={labels.web.site} className="min-w-0 flex-1">
        <span className="block h-12 rounded-sm bg-ink" />
        <div className="mt-2 space-y-1.5">
          <Line className="w-2/3" />
          <Line className="w-1/2" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <span key={item} className="block h-10 rounded-sm border border-line bg-canvas" />
          ))}
        </div>
      </AppWindow>
      <div className="w-20 shrink-0 sm:w-24">
        <div className="surface-light rounded-xl border-2 border-line-strong bg-paper p-2">
          <span className="mx-auto block h-1 w-6 rounded-full bg-line-strong" />
          <span className="mt-2 block h-9 rounded-sm bg-ink" />
          <div className="mt-2 space-y-1.5">
            <Line />
            <Line className="w-3/4" />
          </div>
          <span className="mt-2 block h-8 rounded-sm border border-line bg-canvas" />
          <span className="mt-2 block h-8 rounded-sm border border-line bg-canvas" />
        </div>
        <p className="mt-1.5 text-center text-xs text-night-muted">{labels.web.mobile}</p>
      </div>
    </div>
  );
}

/** AI and automation: a request, an AI model that drafts, a person who reviews, and the business systems. */
function Ai({ labels }: { labels: Labels }) {
  const { ai } = labels;
  const steps = [
    { title: ai.input, note: null, accent: false },
    { title: ai.model, note: ai.draft, accent: true },
    { title: ai.review, note: ai.approved, accent: true },
    { title: ai.systems, note: null, accent: false },
  ];
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <div key={step.title} className="contents">
            {index > 0 && (
              <>
                <Arrow down className="mx-auto md:hidden" />
                <Arrow className="hidden md:block" />
              </>
            )}
            <Node accent={step.accent} className="md:flex-1">
              <p className="text-paper">{step.title}</p>
              {step.note && <p className="mt-1 text-xs text-accent-light">{step.note}</p>}
            </Node>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 border-t border-night-line pt-3">
        <Tag>{ai.model}</Tag>
        {ai.tasks.map((task) => (
          <span key={task} className="rounded-sm border border-night-line px-2 py-1 text-xs text-paper">
            {task}
          </span>
        ))}
      </div>
    </div>
  );
}

/** A table in a database diagram. The names are code identifiers, so they stay the same in every language. */
function Table({ name, fields }: { name: string; fields: { name: string; key?: "PK" | "FK" }[] }) {
  return (
    <Node accent className="p-0">
      <p className="border-b border-night-line px-3 py-2 font-mono text-sm font-medium text-paper">{name}</p>
      <ul className="px-3 py-1">
        {fields.map((field) => (
          <li key={field.name} className="flex items-center justify-between gap-2 py-1 font-mono text-xs">
            <span className="text-night-muted">{field.name}</span>
            {field.key && <span className="text-accent-light">{field.key}</span>}
          </li>
        ))}
      </ul>
    </Node>
  );
}

/** Databases: three related tables. */
function Database() {
  return (
    <div className="grid items-start gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <Table
        name="customers"
        fields={[{ name: "id", key: "PK" }, { name: "name" }, { name: "email" }]}
      />
      <Arrow className="mx-auto hidden self-center sm:block" />
      <Table
        name="orders"
        fields={[{ name: "id", key: "PK" }, { name: "customer_id", key: "FK" }, { name: "total" }]}
      />
      <Arrow className="mx-auto hidden self-center sm:block" />
      <Table
        name="invoices"
        fields={[{ name: "id", key: "PK" }, { name: "order_id", key: "FK" }, { name: "status" }]}
      />
    </div>
  );
}

/** Cloud: users reach a load balancer, application servers, a database and storage inside a region. */
function Cloud({ labels }: { labels: Labels }) {
  const c = labels.cloud;
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      <Node className="md:w-28 md:text-center">{c.users}</Node>
      <Arrow down className="mx-auto md:hidden" />
      <Arrow className="hidden md:block" />
      <Node dashed className="flex-1 space-y-2">
        <Tag>{c.region}</Tag>
        <Node accent>{c.balancer}</Node>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <Node key={item} className="truncate text-center text-xs">
              {c.app}
            </Node>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Node>{c.database}</Node>
          <Node>{c.storage}</Node>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-night-line" />
          <Tag>{c.monitoring}</Tag>
          <span className="h-px flex-1 bg-night-line" />
        </div>
      </Node>
    </div>
  );
}

/** Software architecture: clients, an API layer, services and data, each layer talking only to the next. */
function Architecture({ labels }: { labels: Labels }) {
  const rows = [
    { name: labels.layers.interface, boxes: 3 },
    { name: labels.layers.api, boxes: 1 },
    { name: labels.layers.services, boxes: 3 },
    { name: labels.layers.data, boxes: 2 },
  ];
  return (
    <div className="flex flex-col items-stretch gap-1">
      {rows.map((row, index) => (
        <div key={row.name} className="contents">
          {index > 0 && <Arrow down className="mx-auto h-5" />}
          <div className="rounded-md border border-night-line p-2.5">
            <Tag>{row.name}</Tag>
            <div className="mt-2 flex gap-2">
              {Array.from({ length: row.boxes }, (_, box) => (
                <span
                  key={box}
                  className={`h-8 flex-1 rounded-sm border bg-night-line/40 ${
                    index === 1 ? "border-accent-light/70" : "border-night-line"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Modernization: a legacy system replaced one module at a time. */
function Modernization({ labels }: { labels: Labels }) {
  const m = labels.modern;
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Tag>{m.legacy}</Tag>
        <span className="w-7" />
        <Tag>{m.modern}</Tag>
      </div>
      {m.modules.map((module, index) => (
        <div key={module} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <Node dashed>{module}</Node>
          <Arrow />
          <Node accent className="flex items-center justify-between gap-2">
            <span>{module}</span>
            <span className="text-xs text-accent-light">{format(m.stage, { number: index + 1 })}</span>
          </Node>
        </div>
      ))}
    </div>
  );
}

/** Digital transformation: scattered manual steps become one connected workflow. */
function Transformation({ labels }: { labels: Labels }) {
  const t = labels.transform;
  return (
    <div className="space-y-3">
      <div>
        <Tag>{t.today}</Tag>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {t.manual.map((item) => (
            <Node key={item} dashed>
              {item}
            </Node>
          ))}
        </div>
      </div>
      <Arrow down className="mx-auto" />
      <div>
        <Tag>{t.after}</Tag>
        <div className="mt-2 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          {t.steps.map((step, index) => (
            <div key={step} className="contents">
              {index > 0 && (
                <>
                  <Arrow down className="mx-auto sm:hidden" />
                  <Arrow className="hidden sm:block" />
                </>
              )}
              <Node accent className="sm:flex-1 sm:text-center">
                {step}
              </Node>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Consulting: an assessment report with prioritized findings and a plan. */
function Consulting({ labels }: { labels: Labels }) {
  const a = labels.assess;
  return (
    <AppWindow title={a.title}>
      <ul className="divide-y divide-line">
        {a.findings.map((finding, index) => (
          <li key={finding} className="flex items-center justify-between gap-2 py-2 text-xs text-body">
            <span className="min-w-0 truncate">{finding}</span>
            <StatusPill tone={severityTones[index]}>{a.severity[index]}</StatusPill>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
        <span className="text-xs font-medium text-ink">{a.plan}</span>
        <span className="flex flex-1 items-center gap-1.5">
          {[0, 1, 2].map((step) => (
            <span key={step} className="flex flex-1 items-center gap-1.5">
              <span className="size-2 rounded-full bg-accent" />
              <span className="h-px flex-1 bg-line-strong" />
            </span>
          ))}
        </span>
      </div>
    </AppWindow>
  );
}

/** The illustration for one capability category, in a dark panel. */
export function CategoryVisual({ slug, labels }: { slug: ServiceSlug; labels: Labels }) {
  const diagram: Record<ServiceSlug, ReactNode> = {
    "custom-software": <Software labels={labels} />,
    "web-applications": <Web labels={labels} />,
    "ai-solutions": <Ai labels={labels} />,
    "database-solutions": <Database />,
    "cloud-solutions": <Cloud labels={labels} />,
    "software-architecture": <Architecture labels={labels} />,
    "application-modernization": <Modernization labels={labels} />,
    "digital-transformation": <Transformation labels={labels} />,
    "technology-consulting": <Consulting labels={labels} />,
  };

  return (
    <VisualPanel label={labels.alt[slug]} caption={labels.illustration}>
      {diagram[slug]}
    </VisualPanel>
  );
}
