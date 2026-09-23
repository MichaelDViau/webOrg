import type { Service } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { BentoCard } from "./BentoCard";
import { getServiceVisual } from "./visuals";

interface BentoGridProps {
  items: Service[];
}

export function BentoGrid({ items }: BentoGridProps) {
  return (
    <Reveal
      stagger={0.1}
      amount={0.1}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3"
    >
      {items.map(({ id, icon: Icon, ...service }) => (
        <BentoCard
          key={id}
          {...service}
          icon={<Icon className="size-4 text-accent" strokeWidth={1.75} aria-hidden />}
          visual={getServiceVisual(id)}
        />
      ))}
    </Reveal>
  );
}
