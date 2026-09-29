import "server-only";
import type { LeadIntent } from "./lead";
import { splitName } from "./lead";
import { site } from "./site";

/** The HubSpot forms the site submits to. Each one routes to the right person with a workflow in HubSpot. */
export type CrmForm = LeadIntent | "newsletter";

const formEnv: Record<CrmForm, string> = {
  audit: "HUBSPOT_FORM_AUDIT",
  contact: "HUBSPOT_FORM_CONTACT",
  snapshot: "HUBSPOT_FORM_SNAPSHOT",
  newsletter: "HUBSPOT_FORM_NEWSLETTER",
};

interface CrmLead {
  email: string;
  name?: string;
  role?: string;
  company?: string;
  website?: string;
  phone?: string;
  message?: string;
  language: string;
  /** Path of the page the form was on, for reporting by page and language. */
  page: string;
  /** The consent text the visitor agreed to, kept with the record. */
  consentText: string;
}

/**
 * Sends a lead to HubSpot through the Forms API, so routing and follow-up live in HubSpot.
 * Returns true when HubSpot accepted it, false when the request failed, and null when HubSpot isn't
 * configured for this form (so the caller can rely on email alone).
 */
export async function submitToCrm(form: CrmForm, lead: CrmLead): Promise<boolean | null> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env[formEnv[form]];
  if (!portalId || !formGuid) return null;

  const { first, last } = splitName(lead.name ?? "");
  const fields = [
    { name: "email", value: lead.email },
    { name: "firstname", value: first },
    { name: "lastname", value: last },
    { name: "jobtitle", value: lead.role ?? "" },
    { name: "company", value: lead.company ?? "" },
    { name: "website", value: lead.website ?? "" },
    { name: "phone", value: lead.phone ?? "" },
    { name: "message", value: lead.message ?? "" },
    { name: "hs_language", value: lead.language },
  ].filter((field) => field.value);

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(portalId)}/${encodeURIComponent(formGuid)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: { pageUri: `${site.url}${lead.page}`, pageName: lead.page },
        legalConsentOptions: { consent: { consentToProcess: true, text: lead.consentText } },
      }),
      signal: AbortSignal.timeout(10_000),
    },
  ).catch(() => null);

  if (!response?.ok) {
    console.error("CRM submission failed", form, response?.status);
    return false;
  }
  return true;
}
