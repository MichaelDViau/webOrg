import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <section className="border-b border-line pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <Container>
        <p className="text-sm font-medium text-muted">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
