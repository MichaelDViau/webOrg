import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { format } from "@/lib/i18n/format";
import { getContent } from "@/lib/i18n/server";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { legal } = await getContent();
  return pageMetadata({
    title: legal.cookies.metaTitle,
    description: format(legal.cookies.metaDescription, { name: site.name }),
    path: "/cookies",
  });
}

export default function Page() {
  return <LegalDocument document="cookies" />;
}
