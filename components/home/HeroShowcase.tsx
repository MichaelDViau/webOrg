"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";
import type { ShowcaseItem } from "@/lib/showcase";

interface HeroShowcaseProps {
  items: ShowcaseItem[];
  initialIndex?: number;
}

/**
 * Discipline labels that swap the hero image on hover, focus or tap.
 * Only the initial image loads with the page; the others are fetched once the
 * browser is idle, or earlier if the visitor starts interacting with the labels.
 */
export function HeroShowcase({ items, initialIndex = 0 }: HeroShowcaseProps) {
  const [active, setActive] = useState(initialIndex);
  const [loadAll, setLoadAll] = useState(false);
  const current = items[active];

  useEffect(() => {
    if (loadAll) return;
    const load = () => setLoadAll(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(load, 2500);
    return () => clearTimeout(timer);
  }, [loadAll]);

  return (
    <div>
      <ul
        aria-label="What we build"
        onPointerEnter={() => setLoadAll(true)}
        className="mt-12 grid grid-cols-3 gap-x-4 sm:mt-16 sm:flex sm:flex-wrap sm:gap-x-10 sm:border-t sm:border-line"
      >
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.label}>
              <button
                type="button"
                aria-pressed={selected}
                onMouseEnter={() => setActive(index)}
                onFocus={() => {
                  setLoadAll(true);
                  setActive(index);
                }}
                onClick={() => setActive(index)}
                className={cn(
                  "min-h-11 w-full border-t-2 pt-3 pb-1 text-left text-sm transition-colors duration-200 sm:-mt-px sm:w-auto sm:pt-4",
                  selected ? "border-accent font-medium text-ink" : "border-line text-muted hover:text-ink sm:border-transparent",
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      <figure className="mt-6 sm:mt-12">
        <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-line bg-canvas">
          {items.map((item, index) => {
            const isInitial = index === initialIndex;
            if (!isInitial && !loadAll && index !== active) return null;

            return (
              <Image
                key={item.label}
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
                preload={isInitial}
                fetchPriority={isInitial ? undefined : "low"}
                aria-hidden={index !== active}
                className={cn(
                  "absolute inset-0 size-full object-cover transition-opacity duration-300 ease-out motion-reduce:transition-none",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              />
            );
          })}
        </div>
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-sm text-muted">
          <span aria-live="polite">{current.caption}</span>
          <Link
            href={current.href}
            className="group inline-flex min-h-11 items-center gap-1.5 font-medium text-ink hover:underline hover:underline-offset-4"
          >
            {current.linkLabel}<span className="sr-only">: {current.caption}</span>
            <ArrowIcon className="group-hover:translate-x-0.5" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
