export type ServiceSlug =
  | "website-development"
  | "web-applications"
  | "ai-solutions"
  | "automation"
  | "web-optimization"
  | "seo";

export interface Service {
  slug: ServiceSlug;
  name: string;
  /** One line used in lists and navigation. */
  summary: string;
  /** Opening paragraph on the service page. */
  intro: string;
  /** Short statement used as the page's lead heading. */
  headline: string;
  included: { title: string; detail: string }[];
  approach: string[];
  engagement: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    summary: "Fast, accessible websites designed around how your customers actually decide.",
    headline: "A website should make the decision easier for the person reading it.",
    intro:
      "We design and build marketing and company websites for businesses that need their site to do real work: explain what they do, earn trust, and turn visitors into conversations. Every site is built from scratch around your content and goals, and handed over with a CMS your team can use without calling us.",
    included: [
      {
        title: "Content and structure",
        detail: "Sitemap, page hierarchy and messaging worked out before any visual design begins.",
      },
      {
        title: "Interface design",
        detail: "A visual system built for your brand, designed at every breakpoint rather than scaled down.",
      },
      {
        title: "Development",
        detail: "Next.js or Astro front ends with clean, documented components and no page-builder lock-in.",
      },
      {
        title: "Content management",
        detail: "Sanity, Contentful or WordPress (headless) set up with the fields your editors actually need.",
      },
      {
        title: "Accessibility",
        detail: "WCAG 2.2 AA as a baseline, tested with keyboard and screen readers, not just automated tools.",
      },
      {
        title: "Launch and handover",
        detail: "Redirect mapping, analytics, monitoring and training so nothing is lost when you go live.",
      },
    ],
    approach: [
      "Most websites underperform because of unclear content, not because of the design. We start by working out what your buyers need to know and in what order, then design the pages around that.",
      "We build with modern, static-first frameworks so pages load quickly and stay secure with very little maintenance. You own the code, the hosting account and the CMS.",
    ],
    engagement: [
      { label: "Typical timeline", value: "8–14 weeks" },
      { label: "Team", value: "Strategist, designer, two engineers" },
      { label: "After launch", value: "Optional monthly support retainer" },
    ],
    faqs: [
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes. Most of our website projects extend an existing brand. If your guidelines don't cover digital use, we'll fill in the gaps and document the decisions.",
      },
      {
        question: "Will we be able to update the site ourselves?",
        answer:
          "Yes. Content lives in a CMS configured for your team, and we include a training session and written guide at handover.",
      },
      {
        question: "Do you migrate content from our current site?",
        answer:
          "We do. We audit existing pages, decide what to keep, rewrite or retire, and set up redirects so you keep your search rankings.",
      },
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    summary: "Custom dashboards, portals and internal tools built to fit how your business runs.",
    headline: "Software shaped around your operations, not the other way around.",
    intro:
      "When off-the-shelf software forces your team into workarounds and spreadsheets, a custom application is often the better long-term investment. We build customer portals, internal tools, dashboards and SaaS products — from the data model through to the interface — and support them after launch.",
    included: [
      {
        title: "Discovery and scoping",
        detail: "Workflow mapping with the people who will use the software, and a scoped first release.",
      },
      {
        title: "Product design",
        detail: "Clickable prototypes tested with real users before development starts.",
      },
      {
        title: "Full-stack engineering",
        detail: "TypeScript, React, Node.js and PostgreSQL, with automated tests from the first sprint.",
      },
      {
        title: "Integrations",
        detail: "Connections to your CRM, ERP, payment provider or internal APIs.",
      },
      {
        title: "Authentication and roles",
        detail: "Single sign-on, granular permissions and audit logs where your business requires them.",
      },
      {
        title: "Infrastructure",
        detail: "Deployed to your cloud account with CI/CD, backups, monitoring and error alerting.",
      },
    ],
    approach: [
      "We ship a focused first version early, usually within eight to twelve weeks, and expand it based on how people actually use it. It's the most reliable way we know to avoid building features nobody needs.",
      "You'll see working software every two weeks, not status reports. The code is yours, written to be maintained by your own team or another vendor if you ever choose to.",
    ],
    engagement: [
      { label: "First release", value: "8–12 weeks" },
      { label: "Team", value: "Product lead, designer, 2–4 engineers" },
      { label: "After launch", value: "Ongoing development or managed support" },
    ],
    faqs: [
      {
        question: "Do you take over existing applications?",
        answer:
          "Often. We start with a code and infrastructure review, fix what's urgent, and then agree on a plan for the rest.",
      },
      {
        question: "Who owns the code?",
        answer: "You do, from the first commit. Repositories and cloud accounts are set up under your organization.",
      },
      {
        question: "How do you handle changes in scope?",
        answer:
          "We plan in two-week cycles, so priorities can change as you learn. Larger changes are estimated and agreed before any work begins.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    summary: "Practical AI features and assistants, built on your data and measured against real work.",
    headline: "AI is useful when it's pointed at a specific, measurable problem.",
    intro:
      "We help businesses put large language models to work where they make a measurable difference: answering questions from internal documents, drafting routine responses, classifying and extracting data, and adding intelligent features to existing products. We're equally direct about where AI isn't the right tool.",
    included: [
      {
        title: "Opportunity assessment",
        detail: "A short review of where AI would save time or reduce errors, ranked by value and risk.",
      },
      {
        title: "Knowledge assistants",
        detail: "Search and question-answering over your documents, with sources cited in every answer.",
      },
      {
        title: "Document processing",
        detail: "Extracting structured data from invoices, contracts, forms and email at volume.",
      },
      {
        title: "Product features",
        detail: "Summaries, recommendations and drafting tools built into your existing application.",
      },
      {
        title: "Evaluation",
        detail: "Test sets built from your real cases, so accuracy is measured rather than assumed.",
      },
      {
        title: "Privacy and controls",
        detail: "Data handling, access controls and model choices that match your compliance requirements.",
      },
    ],
    approach: [
      "Every AI project starts with a question we can measure: how long does this task take today, how often is it wrong, and what would good enough look like? That gives us a baseline to test against before anything goes into production.",
      "We work with the major model providers and open-weight models, and we choose based on accuracy, cost and where your data is allowed to go — not on what's newest.",
    ],
    engagement: [
      { label: "Assessment", value: "2–3 weeks" },
      { label: "Pilot", value: "4–8 weeks" },
      { label: "After launch", value: "Monitoring, evaluation and tuning" },
    ],
    faqs: [
      {
        question: "Is our data used to train AI models?",
        answer:
          "No. We use enterprise API agreements that exclude your data from training, or self-hosted models when requirements call for it.",
      },
      {
        question: "What if the AI gets something wrong?",
        answer:
          "We design for it. Answers cite their sources, low-confidence results are routed to a person, and accuracy is tracked continuously after launch.",
      },
      {
        question: "Do we need a lot of data to get started?",
        answer:
          "Usually not. Most useful applications work with the documents and records you already have.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    summary: "Integrations and workflows that remove repetitive work between the systems you already use.",
    headline: "Your team shouldn't be the integration between your systems.",
    intro:
      "Copying data between tools, chasing approvals and assembling the same report every Monday add up to hours every week. We map those processes, automate the parts that are predictable, and make the exceptions visible to the people who need to handle them.",
    included: [
      {
        title: "Process mapping",
        detail: "Documenting how work moves today, where it stalls, and what it costs.",
      },
      {
        title: "System integrations",
        detail: "Reliable connections between your CRM, accounting, operations and communication tools.",
      },
      {
        title: "Workflow automation",
        detail: "Approvals, notifications, handoffs and scheduled jobs that run without supervision.",
      },
      {
        title: "Reporting",
        detail: "Scheduled reports and live dashboards assembled from the systems of record.",
      },
      {
        title: "Error handling",
        detail: "Retries, alerts and clear logs, so failures are caught before they reach customers.",
      },
      {
        title: "Documentation",
        detail: "Plain-language runbooks your operations team can follow without us.",
      },
    ],
    approach: [
      "We automate the stable, well-understood parts of a process first and leave judgment calls with people. It keeps early projects small, lowers risk, and shows value within weeks.",
      "Where a no-code platform is the right fit, we'll use it. Where volume, reliability or security demand it, we build custom services that are monitored like any other production system.",
    ],
    engagement: [
      { label: "Typical project", value: "3–8 weeks" },
      { label: "Team", value: "Solutions lead and 1–2 engineers" },
      { label: "After launch", value: "Monitoring and change requests" },
    ],
    faqs: [
      {
        question: "Which tools do you integrate with?",
        answer:
          "Most business software with an API: Salesforce, HubSpot, NetSuite, QuickBooks, Shopify, Slack, Microsoft 365, Google Workspace and many others.",
      },
      {
        question: "What happens when an automation fails?",
        answer:
          "Failures are retried automatically where it's safe, and anything that needs a person triggers an alert with enough context to resolve it.",
      },
    ],
  },
  {
    slug: "web-optimization",
    name: "Web Optimization",
    summary: "Measurable improvements to speed, Core Web Vitals and front-end efficiency.",
    headline: "Speed is a feature your customers notice before anything else.",
    intro:
      "Slow pages cost conversions and search visibility. We find out exactly what's making your site slow using field data from real visitors, fix the causes in your codebase, and put monitoring in place so performance doesn't quietly degrade again.",
    included: [
      {
        title: "Performance audit",
        detail: "Field and lab analysis of Core Web Vitals across your key templates and devices.",
      },
      {
        title: "Loading performance",
        detail: "Render-blocking resources, server response times and critical-path fixes for LCP.",
      },
      {
        title: "Responsiveness",
        detail: "Reducing JavaScript execution and long tasks to improve Interaction to Next Paint.",
      },
      {
        title: "Images and media",
        detail: "Modern formats, responsive sizing and lazy loading configured correctly.",
      },
      {
        title: "Caching and delivery",
        detail: "CDN configuration, cache headers and edge rendering where they help.",
      },
      {
        title: "Monitoring",
        detail: "Real-user monitoring and performance budgets enforced in your deployment pipeline.",
      },
    ],
    approach: [
      "We measure first. Lighthouse scores are useful, but the Core Web Vitals that affect rankings come from your real visitors, so that's the data we prioritize.",
      "Fixes are delivered as normal code changes to your repository, reviewed with your team, and verified in production data once they ship.",
    ],
    engagement: [
      { label: "Audit", value: "1–2 weeks" },
      { label: "Implementation", value: "2–6 weeks" },
      { label: "After launch", value: "Quarterly performance reviews" },
    ],
    faqs: [
      {
        question: "Can you optimize a site you didn't build?",
        answer:
          "Yes, that's most of our optimization work. We've worked in Next.js, WordPress, Shopify, Magento and custom stacks.",
      },
      {
        question: "Do you guarantee a Lighthouse score?",
        answer:
          "We don't guarantee scores, but we agree on specific targets from the audit and report against them.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    summary: "Technical SEO, site structure and metadata that help search engines understand your site.",
    headline: "Good SEO starts with a site that's easy to crawl and easy to understand.",
    intro:
      "We focus on the technical foundation of search: how your site is structured, how quickly it loads, how pages are indexed, and how clearly your content is described to search engines. It's the part of SEO most closely tied to how a site is built, and the part most often neglected.",
    included: [
      {
        title: "Technical audit",
        detail: "Crawlability, indexing, canonicalization, redirects and duplicate content.",
      },
      {
        title: "Site architecture",
        detail: "URL structure, internal linking and navigation that reflect how people search.",
      },
      {
        title: "Metadata and structured data",
        detail: "Titles, descriptions and schema markup generated consistently from your content.",
      },
      {
        title: "Performance",
        detail: "Core Web Vitals improvements that support rankings and user experience alike.",
      },
      {
        title: "Migrations",
        detail: "Redirect planning and monitoring to protect rankings through redesigns and replatforming.",
      },
      {
        title: "Reporting",
        detail: "Search Console and analytics reporting focused on qualified traffic, not vanity metrics.",
      },
    ],
    approach: [
      "We don't sell link packages or promise first-page rankings. We fix what prevents search engines from finding, understanding and trusting your site, and we help your team publish content that answers real questions.",
      "Because we're engineers, technical recommendations come with the implementation, not a spreadsheet of issues for someone else to fix.",
    ],
    engagement: [
      { label: "Audit", value: "2 weeks" },
      { label: "Implementation", value: "3–6 weeks" },
      { label: "After launch", value: "Monthly reporting and guidance" },
    ],
    faqs: [
      {
        question: "How long before we see results?",
        answer:
          "Technical fixes are often reflected within a few weeks of being crawled. Broader ranking improvements typically take three to six months.",
      },
      {
        question: "Do you write content?",
        answer:
          "We provide content strategy and briefs, and work alongside your writers or content partners on production.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
