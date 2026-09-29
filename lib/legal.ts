export interface LegalSection {
  title: string;
  body: string[];
  list?: string[];
  /** Shown only while the Work section is on (`workEnabled` in lib/site.ts). */
  requiresWork?: boolean;
}

export interface LegalDocument {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export type LegalKey = "privacy" | "terms" | "cookies" | "mexico";

/** Legal pages in one language: the labels shared by all of them, and the four documents. */
export interface LegalContent extends Record<LegalKey, LegalDocument> {
  eyebrow: string;
  updatedLabel: string;
  reviewNote: string;
  contactTitle: string;
  contactBody: string;
  otherDocuments: string;
}
