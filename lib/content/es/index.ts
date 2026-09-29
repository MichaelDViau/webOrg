import type { ContentSource } from "@/lib/i18n/content";
import { en } from "../en";

// TEMPORARY: replaced file by file with the Spanish translation.
export const es: ContentSource = { ...en, ui: { ...en.ui, assistant: { ...en.ui.assistant } } };
