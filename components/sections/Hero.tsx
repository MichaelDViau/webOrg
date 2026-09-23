import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GhostLink } from "@/components/ui/GhostLink";
import { GlowButton } from "@/components/ui/GlowButton";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { clients } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-accent/20 blur-3xl"
      />
      <Container>
        <Reveal stagger={0.12} className="relative flex flex-col items-center text-center">
          <RevealItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink-muted">
              <span className="size-1.5 animate-pulse-soft rounded-full bg-accent-cyan" />
              Now booking Q1 engagements
            </span>
          </RevealItem>

          <RevealItem>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
              We build digital products{" "}
              <span className="bg-linear-to-r from-accent via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                that outperform.
              </span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
              Websites, web applications, performance engineering and applied AI — crafted by a senior
              team obsessed with detail.
            </p>
          </RevealItem>

          <RevealItem className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <GlowButton href="#contact" size="lg">
              Start a project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </GlowButton>
            <GhostLink href="#services">
              Explore services
              <ArrowUpRight className="size-4" />
            </GhostLink>
          </RevealItem>

          <RevealItem className="mt-20 w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              Trusted by ambitious teams
            </p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clients.map((client) => (
                <li key={client} className="text-lg font-semibold tracking-tight text-ink-subtle/70">
                  {client}
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
