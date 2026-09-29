import Link from "@/components/i18n/Link";
import type { Demo } from "@/lib/demos";
import { getContent } from "@/lib/i18n/server";
import { DemoBadge } from "./DemoBadge";

/** A link to a concept demo, always carrying the "Concept demo" label. */
export async function DemoCard({ demo, headingLevel: Heading = "h3" }: { demo: Demo; headingLevel?: "h2" | "h3" }) {
  const { workPage } = await getContent();

  return (
    <article className="flex h-full flex-col rounded border border-line bg-paper p-6" data-reveal>
      <DemoBadge className="self-start" />
      <Heading className="mt-4 text-xl font-semibold tracking-tight">
        <Link href={`/work/${demo.slug}`} className="underline-offset-4 hover:underline">
          {demo.name}
        </Link>
      </Heading>
      <p className="mt-2 leading-relaxed">{demo.card}</p>
      <Link href={`/work/${demo.slug}`} className="mt-5 inline-block self-start text-ink underline underline-offset-4 hover:no-underline">
        {workPage.seeDemo}
        <span className="sr-only">: {demo.name}</span>
      </Link>
    </article>
  );
}
