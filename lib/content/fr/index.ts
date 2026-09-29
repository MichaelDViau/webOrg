import type { ContentSource } from "@/lib/i18n/content";
import { en } from "../en";

// TEMPORARY: replaced file by file with the French (Quebec) translation.
export const fr: ContentSource = { ...en, ui: { ...en.ui, assistant: { ...en.ui.assistant } } };
