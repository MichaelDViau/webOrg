import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <Container>
        <p className="text-sm text-muted tabular-nums">404</p>
        <h1 className="mt-4 text-title">This page doesn&apos;t exist.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
