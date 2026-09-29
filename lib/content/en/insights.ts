import type { ArticleSlug, ArticleText } from "@/lib/insights";

/**
 * Practical articles per industry. No statistics, clients or results unless they're real and approved:
 * these are how-to pieces, not case studies.
 */
export const articles: Record<ArticleSlug, ArticleText> = {
  "client-portal-for-property-managers": {
    title: "What belongs in the first version of a client portal for property managers",
    description:
      "A client portal for property managers should answer the questions that fill your inbox first. Here is what to include in version one, and what to leave out.",
    topic: "Property",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Property offices field the same questions all day. Where is my maintenance request? Is my statement ready? Where is my lease? A portal can answer most of them. The mistake is trying to answer all of them at once.",
      },
      { type: "h2", text: "Start from the questions, not the features" },
      {
        type: "p",
        text: "Before anyone designs a screen, write down the last thirty emails and calls your office received. Group them. The groups that repeat are your first version. Everything else can wait.",
      },
      { type: "h2", text: "What to include in version one" },
      {
        type: "ul",
        items: [
          "Maintenance requests: one place to report a problem with photos, and one place to see who is on it.",
          "Owner statements: the latest statement and a short history, without an emailed PDF.",
          "Documents: leases, notices and receipts each person is entitled to see.",
          "Status: a plain label on every request, such as new, assigned, scheduled or done.",
          "Sign-in that shows each person only their own records.",
        ],
      },
      { type: "h2", text: "What to leave out for now" },
      {
        type: "ul",
        items: [
          "Online payments, until the basics work and your accounting software is connected.",
          "Chat and messaging, if a request with a clear history does the job.",
          "Custom reports nobody has asked for yet.",
        ],
      },
      { type: "h2", text: "Connect it to what you already use" },
      {
        type: "p",
        text: "A portal that needs a second copy of your data will always be out of date. Check first what your property management software allows: an API, exports, or nothing. That answer shapes the whole project, which is why we look at it during the audit.",
      },
      { type: "h2", text: "Decide how you will know it worked" },
      {
        type: "p",
        text: "Pick a few numbers before you build. For example: status calls and emails per week, the time from a new request to an assigned vendor, and the hours spent on month-end statements. Measure them before the portal, and again after.",
      },
    ],
  },

  "document-intake-for-accounting-firms": {
    title: "Document intake for accounting firms: stop chasing PDFs by email",
    description:
      "How accounting and professional firms can collect client documents without chasing: a checklist per client, one place to upload and reminders that send themselves.",
    topic: "Accounting",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Every busy season looks the same. Staff send reminders, clients send photos, and documents arrive in email, text messages and shared drives. Then someone has to rename and refile all of it before real work can start.",
      },
      { type: "h2", text: "The problem is not your clients" },
      {
        type: "p",
        text: "Clients aren't careless. Nobody told them exactly what is needed, where to send it and what is still missing. Intake is a design problem, and a solvable one.",
      },
      { type: "h2", text: "Four parts of a good intake process" },
      {
        type: "ul",
        items: [
          "A checklist for each client that shows what is needed and what has been received.",
          "One place to upload, so documents land in the right file and not in an inbox.",
          "Automatic reminders for what is still missing, in the client's language.",
          "A dashboard for the firm that shows who is ready, who is waiting and who is late.",
        ],
      },
      { type: "h2", text: "Where AI can help, and where it shouldn't decide" },
      {
        type: "p",
        text: "AI can suggest what a scanned file is, such as a bank statement or a receipt. That saves typing. It should not file the document on its own. A person confirms each suggestion, and the firm can measure how often the suggestion was wrong. AI drafts. Your team approves.",
      },
      { type: "h2", text: "Protect client documents" },
      {
        type: "p",
        text: "Client documents are sensitive. Store them encrypted, let each client see only their own file, and keep a record of who accessed what. Decide up front how long you keep them.",
      },
      { type: "h2", text: "Measure before and after" },
      {
        type: "p",
        text: "Track the days from the first request to a complete file, the reminders your staff send by hand, and the share of clients who are complete before the deadline. Those three numbers tell you whether the new process works.",
      },
    ],
  },

  "measure-your-inquiry-response-time": {
    title: "How to measure how fast your team answers new inquiries",
    description:
      "If a visitor waits a day for an answer, your website has failed. Here is a simple way to measure your response time before you try to improve it.",
    topic: "Lead flow",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Your lead flow is the proof of what you sell. If a visitor waits a day for an answer, the site has failed, however good it looks. Before you change anything, measure where you are.",
      },
      { type: "h2", text: "Find every place inquiries arrive" },
      {
        type: "p",
        text: "List them all: the contact form, the general email address, the phone, direct messages, referrals and any chat widget. Most businesses discover they have more channels than they thought, and that some nobody checks daily.",
      },
      { type: "h2", text: "Record two times for each inquiry" },
      {
        type: "ul",
        items: [
          "When it arrived.",
          "When a person first replied personally. An automatic confirmation doesn't count.",
        ],
      },
      {
        type: "p",
        text: "A shared spreadsheet is enough for two weeks. The gap between the two times is your time to first reply.",
      },
      { type: "h2", text: "Look at the slowest ones, not only the average" },
      {
        type: "p",
        text: "An average hides the inquiries that waited days. Sort by the longest gaps, and ask what happened to each one. It's usually one of three things: nobody owned it, it arrived in a channel nobody checks, or it needed information nobody had.",
      },
      { type: "h2", text: "Set a promise you can keep" },
      {
        type: "p",
        text: "Choose a reply time you can actually meet, such as one business hour, say it on your website, and measure against it. An instant automatic confirmation tells the visitor that the request arrived. A personal reply within the promised time shows that someone cares.",
      },
      { type: "h2", text: "Then improve, and measure again" },
      {
        type: "p",
        text: "Route every channel to one place, name who owns new inquiries, and remove steps between the arrival and the reply. Measure again after a few weeks. We do exactly this in the audit: we measure your response time before and after.",
      },
    ],
  },
};

export const insightsPage = {
  metaTitle: "Insights: Practical Notes on Systems for Operations Businesses",
  metaDescription:
    "Practical articles for property, accounting and distribution businesses on client portals, document intake, lead flow and the systems your business runs on.",
  eyebrow: "Insights",
  title: "Practical notes on the systems your business runs on.",
  lead: "Short articles for owners and operators, by industry. No hype, and no numbers we can't back up.",
  readArticle: "Read the article",
  minutes: "{minutes} min read",
  publishedOn: "Published {date}",
  topics: "Topic",
};

export const articlePage = {
  back: "All insights",
  related: "Related",
  relatedService: "Related service",
  relatedIndustry: "Related industry",
  ctaTitle: "Want this looked at in your business?",
  ctaLead: "The audit shows where your systems cost you time, inquiries and money.",
};

export type InsightsPage = typeof insightsPage;
export type ArticlePage = typeof articlePage;
