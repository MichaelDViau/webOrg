import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowButton } from "@/components/ui/GlowButton";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function CallToAction() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-20 text-center sm:px-16 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-48 mx-auto h-80 max-w-2xl rounded-full bg-accent-violet/20 blur-3xl"
          />
          <RevealItem>
            <h2 className="relative mx-auto max-w-3xl text-4xl font-semibold tracking-tighter text-balance sm:text-5xl lg:text-6xl">
              Have something ambitious in mind?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="relative mx-auto mt-6 max-w-xl text-lg text-pretty text-ink-muted">
              Tell us where you want to go. We&apos;ll reply within one business day with a clear plan to get
              there.
            </p>
          </RevealItem>
          <RevealItem className="relative mt-10 flex flex-col items-center gap-4">
            <GlowButton href={`mailto:${site.email}`} size="lg">
              Start a project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </GlowButton>
            <span className="font-mono text-xs text-ink-subtle">{site.email}</span>
          </RevealItem>
        </Reveal>
      </Container>
    </section>
  );
}
