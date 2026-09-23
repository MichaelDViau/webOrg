"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/cn";
import type { ShowcaseItem } from "@/lib/showcase";

interface HeroShowcaseProps {
  items: ShowcaseItem[];
  initialIndex?: number;
}

export function HeroShowcase({ items, initialIndex = 0 }: HeroShowcaseProps) {
  const [active, setActive] = useState(initialIndex);
  const current = items[active];

  return (
    <div>
      <ul aria-label="What we build" className="mt-16 flex flex-wrap gap-x-6 border-t border-line sm:gap-x-10">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.label}>
              <button
                type="button"
                aria-pressed={selected}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "-mt-px border-t-2 pt-5 pb-1 text-sm transition-colors duration-200",
                  selected ? "border-ink font-medium text-ink" : "border-transparent text-muted hover:text-ink",
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      <figure className="mt-8 sm:mt-12">
        <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-line bg-canvas">
          {items.map((item, index) => (
            <Image
              key={item.image.src + item.label}
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              sizes="(min-width: 1280px) 1216px, calc(100vw - 40px)"
              preload={index === initialIndex}
              loading={index === initialIndex ? undefined : "lazy"}
              aria-hidden={index !== active}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-300 ease-out motion-reduce:transition-none",
                index === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-muted">
          <span aria-live="polite">{current.caption}</span>
          <Link href={current.href} className="group inline-flex items-center gap-1.5 font-medium text-ink hover:underline hover:underline-offset-4">
            View case study
            <ArrowIcon className="group-hover:translate-x-0.5" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
