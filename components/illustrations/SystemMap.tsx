import type { Home } from "@/lib/content/en/home";

type MapText = Home["hero"]["map"];

/** A plain line with an arrowhead between two columns, shown only where the columns sit side by side. */
function Arrow() {
  return (
    <svg viewBox="0 0 40 10" aria-hidden="true" className="h-2.5 w-10 text-body">
      <path d="M0 5h37M32 1l5 4-5 4" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="flex h-8 items-end pb-2 text-base font-semibold text-ink">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex h-12 items-center border border-line-strong bg-paper px-4 text-lg text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * A system map: how a business's tools connect. Plain HTML and CSS, so it reads in every language, scales
 * to any screen and works with screen readers.
 */
export function SystemMap({ map }: { map: MapText }) {
  return (
    <figure aria-label={map.title}>
      <div className="grid gap-y-6 border border-line bg-canvas p-5 sm:p-6 md:grid-cols-[1fr_2.75rem_1fr_2.75rem_1fr] md:gap-y-0">
        <Column title={map.sources.title} items={map.sources.items} />

        {/* Between columns: arrows across on wide screens; nothing on narrow ones, where columns stack. */}
        <div aria-hidden="true" className="hidden md:block">
          <div className="h-8" />
          <div className="space-y-3">
            {map.sources.items.map((item) => (
              <div key={item} className="flex h-12 items-center justify-center">
                <Arrow />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Column title={map.core.title} items={map.core.items} />
          <p className="mt-3 text-base text-body">{map.core.foot}</p>
        </div>

        <div aria-hidden="true" className="hidden md:block">
          <div className="h-8" />
          <div className="space-y-3">
            {map.core.items.map((item) => (
              <div key={item} className="flex h-12 items-center justify-center">
                <Arrow />
              </div>
            ))}
          </div>
        </div>

        <Column title={map.results.title} items={map.results.items} />
      </div>
      <figcaption className="mt-3 text-base text-body">{map.caption}</figcaption>
    </figure>
  );
}
