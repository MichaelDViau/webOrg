import { lang } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./config";
import { getContentFor, type Content } from "./content";

/** The language of the page being rendered, from the [lang] root segment. Server Components only. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return value && isLocale(value) ? value : defaultLocale;
}

/** Site content in the language of the page being rendered. Server Components only. */
export async function getContent(): Promise<Content> {
  return getContentFor(await getLocale());
}
