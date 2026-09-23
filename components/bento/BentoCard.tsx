"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { revealItem } from "@/lib/motion";

interface BentoCardProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
  visual?: ReactNode;
  className?: string;
}

export function BentoCard({ eyebrow, title, description, icon, visual, className }: BentoCardProps) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgb(79 125 255 / 0.12), transparent 70%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
    const rect = currentTarget.getBoundingClientRect();
    x.set(clientX - rect.left);
    y.set(clientY - rect.top);
  }

  return (
    <motion.article
      variants={revealItem}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-white/15 sm:p-8",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      {visual && <div className="relative mb-8 flex flex-1 items-center">{visual}</div>}

      <div className="relative mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-2 text-ink-subtle">
          {icon}
          <span className="font-mono text-xs uppercase tracking-widest">{eyebrow}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">{description}</p>
      </div>
    </motion.article>
  );
}
