import type { Home } from "@/lib/content/en/home";

type MapText = Home["hero"]["map"];

/** A thin arrow between two columns, shown only where the columns sit side by side. */
function Arrow() {
  return (
    <svg viewBox="0 0 48 12" aria-hidden="true" className="h-3 w-12 text-accent">
      <path d="M0 6h44M39 1.5 45 6l-6 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Column({ title, items, tone }: { title: string; items: string[]; tone: "plain" | "core" }) {
  return (
    <div>
      <p className="flex h-8 items-end pb-2 text-sm font-medium text-muted">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={
              tone === "core"
                ? "flex h-14 items-center rounded-md border border-accent bg-canvas px-4 font-medium text-ink"
                : "flex h-14 items-center rounded-md border border-line bg-paper px-4 text-ink"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The signature illustration: a system map showing how a business's tools connect. It is plain HTML and
 * CSS so it reads in every language, scales to any screen and works with screen readers.
 */
export function SystemMap({ map }: { map: MapText }) {
  return (
    <figure aria-label={map.title}>
      <div className="grid gap-y-6 rounded-lg border border-line bg-canvas p-5 sm:p-8 md:grid-cols-[1fr_3rem_1fr_3rem_1fr] md:gap-y-0">
        <Column title={map.sources.title} items={map.sources.items} tone="plain" />

        {/* Between columns: arrows across on wide screens, a small chevron down on narrow ones. */}
        <div aria-hidden="true" className="hidden md:block">
          <div className="h-8" />
          <div className="space-y-3">
            {map.sources.items.map((item) => (
              <div key={item} className="flex h-14 items-center justify-center">
                <Arrow />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Column title={map.core.title} items={map.core.items} tone="core" />
          <p className="mt-3 rounded-md bg-ink px-4 py-2.5 text-sm text-paper">{map.core.foot}</p>
        </div>

        <div aria-hidden="true" className="hidden md:block">
          <div className="h-8" />
          <div className="space-y-3">
            {map.core.items.map((item) => (
              <div key={item} className="flex h-14 items-center justify-center">
                <Arrow />
              </div>
            ))}
          </div>
        </div>

        <Column title={map.results.title} items={map.results.items} tone="plain" />
      </div>
      <figcaption className="mt-3 text-sm text-muted">{map.caption}</figcaption>
    </figure>
  );
}
