import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /**
   * Makes the eyebrow the page's h1 and renders the display title as a paragraph.
   * Useful when the eyebrow names the page topic and the title is a statement.
   */
  eyebrowIsHeading?: boolean;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, lead, eyebrowIsHeading = false, children }: PageHeaderProps) {
  const Eyebrow = eyebrowIsHeading ? "h1" : "p";
  const Title = eyebrowIsHeading ? "p" : "h1";

  return (
    <section className="border-b border-line pt-14 pb-14 sm:pt-24 sm:pb-20 lg:pt-28">
      <Container>
        <Eyebrow className="text-sm font-medium text-muted">{eyebrow}</Eyebrow>
        <Title className="mt-4 max-w-4xl text-title text-balance text-ink">
          {title}
        </Title>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
