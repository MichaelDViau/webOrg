import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}

/** The top of a page: the page's h1, one short paragraph, and optionally buttons. */
export function PageHeader({ title, lead, children }: PageHeaderProps) {
  return (
    <section className="border-b border-line pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20">
      <Container>
        <h1 className="max-w-4xl text-title text-balance text-ink">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
