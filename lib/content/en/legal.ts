import type { LegalContent } from "@/lib/legal";

/**
 * Legal pages: privacy policy, terms of use, cookie notice and the Mexican privacy notice (aviso de
 * privacidad). These are drafts written to match how this website works. Have your lawyer write or
 * review them before launch (Part 18 of the manual). `{name}`, `{email}`, `{hours}` and `{address}`
 * are filled in from lib/site.ts and the language's hours.
 */
export const legal: LegalContent = {
  eyebrow: "Legal",
  updatedLabel: "Last updated {date}.",
  reviewNote: "Draft pending legal review.",
  contactTitle: "Contact",
  contactBody: "For any question about this page, or to use your rights, write to",
  otherDocuments: "Other legal documents",

  privacy: {
    metaTitle: "Privacy Policy",
    metaDescription: "How {name} collects, uses and protects the information you share through this website.",
    title: "Privacy Policy",
    updated: "September 2026",
    intro:
      "This policy explains what information {name} collects through this website, why, who receives it and what choices you have. It applies to visitors in every country we serve, including Quebec and Mexico.",
    sections: [
      {
        title: "Who is responsible",
        body: [
          "{name} is responsible for the information collected through this website. You can reach the person responsible for the protection of personal information at {email}.",
        ],
      },
      {
        title: "What we collect",
        body: ["We collect only what you choose to send us, plus a small amount of technical data."],
        list: [
          "Audit, Snapshot and contact forms: your name, role, company, website, email, phone number, preferred language and what you want to fix.",
          "Newsletter: your email address and preferred language.",
          "Instant speed check: the website address you enter, and your email if you choose to add it.",
          "AI assistant: the messages you type. Please don't share sensitive information.",
          "Technical data: your IP address and basic request details, used for security, spam protection and rate limiting.",
        ],
      },
      {
        title: "Why we collect it",
        body: [
          "To reply to you, to prepare an audit or Snapshot you asked for, to send the newsletter you subscribed to, and to keep the website secure. We don't sell personal information and we don't use advertising trackers.",
        ],
      },
      {
        title: "Consent",
        body: [
          "Where the law requires it, we ask for your consent with a checkbox before you send a form. You can withdraw it at any time by writing to us, and you can unsubscribe from the newsletter with one click.",
        ],
      },
      {
        title: "Who receives it",
        body: [
          "Service providers that process information on our behalf and may not use it for their own purposes. Depending on how you use the site, they include:",
        ],
        list: [
          "Our hosting provider.",
          "Our email delivery provider, which sends the confirmation and our replies.",
          "Our customer relationship management (CRM) provider, where your request is recorded and routed.",
          "Our scheduling provider, if you book a call.",
          "Our privacy-friendly analytics provider, if enabled. It doesn't use cookies or build profiles of visitors.",
          "Google PageSpeed Insights, which receives the address you enter in the speed check.",
          "Anthropic, which processes the messages you send to the AI assistant.",
        ],
      },
      {
        title: "Where information is processed",
        body: [
          "Our providers may process information in the United States and other countries. For visitors in Quebec, this means information may be communicated outside Quebec. We choose providers that protect it appropriately, and we limit what we send them.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "Inquiries are kept for up to two years unless you ask us to delete them sooner, or unless we start working together, in which case the project agreement applies. Newsletter details are kept until you unsubscribe.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can ask us to access, correct, export or delete the information we hold about you, to withdraw your consent, and to stop using it for a purpose. We reply within the time the law requires. Visitors in Mexico can exercise their ARCO rights as described in our Mexican privacy notice.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "We don't set advertising or tracking cookies. Our cookie notice explains the few browser storage items the site uses.",
        ],
      },
      {
        title: "Security",
        body: [
          "We protect information with encryption in transit, access limited to people who need it, and the practices in our security standard. No system is perfectly secure, and we'll tell you promptly if something affects you.",
        ],
      },
      {
        title: "Children",
        body: ["This website is for businesses. It isn't directed at children, and we don't knowingly collect their information."],
      },
      {
        title: "Changes",
        body: ["We'll update this page when our practices change and show the date of the latest update at the top."],
      },
    ],
  },

  terms: {
    metaTitle: "Terms of Use",
    metaDescription: "The terms for using the {name} website.",
    title: "Terms of Use",
    updated: "September 2026",
    intro: "By using this website, you agree to these terms. If you don't agree, please don't use the site.",
    sections: [
      {
        title: "What this website is",
        body: [
          "This website describes what {name} does and lets you get in touch. It isn't an offer to sell, and it doesn't create a contract. Audits and projects are governed by a separate written agreement that we sign with you.",
        ],
      },
      {
        title: "Concept demos",
        body: [
          "The demos on this site are labeled \"Concept demo: not a client project.\" They use sample data and illustrate what we could build. They aren't client work and don't show measured results.",
        ],
      },
      {
        title: "Information on this site",
        body: [
          "We try to keep the information accurate, but we don't promise that it is complete or current. Prices shown are starting points. The price of your work is what we agree in writing.",
        ],
      },
      {
        title: "AI assistant and tools",
        body: [
          "The AI assistant and the instant speed check are provided as conveniences. Their answers and scores can be imperfect and are not professional advice.",
        ],
      },
      {
        title: "Acceptable use",
        body: ["Please don't misuse the site. That includes trying to disrupt it, bypass its protections, or send automated or abusive requests."],
      },
      {
        title: "Intellectual property",
        body: ["The content, design and code of this website belong to {name} or its licensors. You may share links to it. Please ask before copying it."],
      },
      {
        title: "Links to other sites",
        body: ["We link to third-party sites for your convenience. We aren't responsible for their content or their privacy practices."],
      },
      {
        title: "Limits on our responsibility",
        body: [
          "To the extent the law allows, {name} isn't responsible for losses that come from using this website. Nothing here limits rights that the law doesn't allow us to limit.",
        ],
      },
      {
        title: "Applicable law",
        body: ["The law that governs your work with us is set out in the written agreement for each engagement."],
      },
      {
        title: "Changes",
        body: ["We may update these terms. The date of the latest update is at the top of this page."],
      },
    ],
  },

  cookies: {
    metaTitle: "Cookie Notice",
    metaDescription: "The cookies and browser storage the {name} website uses. We set no advertising or tracking cookies.",
    title: "Cookie Notice",
    updated: "September 2026",
    intro:
      "We keep this simple. This website sets no advertising or tracking cookies, so it shows no cookie banner. This page explains what the site does store, and what happens if that changes.",
    sections: [
      {
        title: "What the site stores",
        body: ["The site keeps one item in your browser's storage, and only if you use the feature:"],
        list: [
          "Theme: if you switch to the dark theme, your choice is saved in your browser so it's remembered next time. It never leaves your device.",
        ],
      },
      {
        title: "Analytics",
        body: [
          "If analytics is enabled, we use a privacy-friendly tool that doesn't use cookies and doesn't track you across sites. It counts visits and form requests by page and language.",
        ],
      },
      {
        title: "Booking calendar",
        body: [
          "If you open the booking page, the scheduling provider's calendar loads inside it. That provider may set its own cookies. It only loads on that page, and the provider's policy applies.",
        ],
      },
      {
        title: "Consent by country",
        body: [
          "Because we don't set non-essential cookies, we don't need to ask for consent to them. If that changes, we'll ask first, following the rules where you are, including Quebec and Mexico.",
        ],
      },
      {
        title: "Your control",
        body: ["You can clear or block browser storage and cookies in your browser's settings. The site keeps working."],
      },
    ],
  },

  mexico: {
    metaTitle: "Aviso de privacidad (Mexico)",
    metaDescription: "Privacy notice for visitors in Mexico, under the Federal Law on Protection of Personal Data Held by Private Parties.",
    title: "Privacy notice for Mexico (Aviso de privacidad)",
    updated: "September 2026",
    intro:
      "This notice is for visitors in Mexico. It follows the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP). It complements our privacy policy.",
    sections: [
      {
        title: "Who is responsible",
        body: ["{name} is the data controller (responsable). Address: {address}. Email: {email}."],
      },
      {
        title: "Personal data we collect",
        body: ["The data you enter in our forms: name, role, company, website, email, phone number, preferred language and a description of what you want to fix. We don't collect sensitive personal data."],
      },
      {
        title: "Purposes we need",
        body: ["We use your data to reply to your request, to prepare the audit or Snapshot you asked for, and to keep the website secure."],
      },
      {
        title: "Purposes you can decline",
        body: ["If you subscribe to the newsletter, we use your email to send articles. You can decline or unsubscribe at any time."],
      },
      {
        title: "Transfers",
        body: [
          "We share data with service providers that process it for us: hosting, email delivery, CRM and scheduling. These transfers are needed to provide the service you asked for. We don't transfer your data for other purposes without your consent.",
        ],
      },
      {
        title: "Your ARCO rights",
        body: [
          "You can Access, Rectify or Cancel your data, or Oppose its use. To exercise these rights, write to {email} with your name, a way to contact you, what you want to do and any document that helps us find your data. We reply within the time the law sets.",
        ],
      },
      {
        title: "Withdrawing consent and limiting use",
        body: ["You can withdraw your consent, or ask us to limit the use of your data, by writing to {email}. Newsletters include an unsubscribe link."],
      },
      {
        title: "Cookies",
        body: ["We don't use cookies or similar technologies to collect personal data for advertising or tracking. See our cookie notice."],
      },
      {
        title: "Changes to this notice",
        body: ["If this notice changes, we'll publish the new version on this page."],
      },
    ],
  },
};
