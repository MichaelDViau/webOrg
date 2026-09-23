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
  /** Page title for search results, without the site name. */
  seoTitle: string;
  /** Meta description for search results, roughly 150 characters. */
  metaDescription: string;
  /** Lead heading at the top of the service page. */
  headline: string;
  /** Opening paragraph on the service page. */
  intro: string;
  included: { title: string; detail: string }[];
  approach: string[];
  engagement: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    summary: "Fast, accessible websites built around how your customers make decisions.",
    seoTitle: "Professional Website Development Services",
    metaDescription:
      "Custom website design and development for startups, small businesses and larger organizations. Fast, accessible sites with a CMS your team can manage.",
    headline: "A good website makes the decision easier for the person reading it.",
    intro:
      "We design and build company and marketing websites that explain what you do, earn trust and turn visitors into conversations. Each site is built from scratch around your content and goals, then handed over with a content management system your team can use without calling us.",
    included: [
      {
        title: "Content and structure",
        detail: "Sitemap, page hierarchy and messaging, settled before visual design begins.",
      },
      {
        title: "Interface design",
        detail: "A visual system built for your brand and designed for every screen size.",
      },
      {
        title: "Development",
        detail: "Next.js or Astro front ends with clean, documented components and no page-builder lock-in.",
      },
      {
        title: "Content management",
        detail: "Sanity, Contentful or headless WordPress, set up with the fields your editors need.",
      },
      {
        title: "Accessibility",
        detail: "WCAG 2.2 AA as the baseline, tested with keyboards and screen readers as well as automated tools.",
      },
      {
        title: "Launch and handover",
        detail: "Redirects, analytics, monitoring and training, so nothing is lost when you go live.",
      },
    ],
    approach: [
      "Most websites underperform because the content is unclear, not because the design is wrong. We start by working out what your customers need to know and in what order, then design the pages around it.",
      "We build on modern, static-first frameworks, so pages load quickly and stay secure with very little maintenance. You own the code, the hosting account and the CMS.",
    ],
    engagement: [
      { label: "Typical timeline", value: "8 to 14 weeks" },
      { label: "Team", value: "Strategist, designer and two engineers" },
      { label: "After launch", value: "Optional monthly support" },
    ],
    faqs: [
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes. Most of our website projects extend an existing brand. If your guidelines don't cover digital use, we fill in the gaps and document the decisions.",
      },
      {
        question: "Will we be able to update the site ourselves?",
        answer:
          "Yes. Content lives in a CMS configured for your team, and handover includes a training session and a written guide.",
      },
      {
        question: "Do you migrate content from our current site?",
        answer:
          "We do. We review your existing pages, decide what to keep, rewrite or retire, and set up redirects so you keep your search rankings.",
      },
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    summary: "Custom dashboards, portals and internal tools built around how your business runs.",
    seoTitle: "Custom Web Application Development",
    metaDescription:
      "Custom web application and software development: customer portals, dashboards, internal tools and SaaS products, designed and built by one experienced team.",
    headline: "Software that fits your operations, not the other way around.",
    intro:
      "When off-the-shelf software forces your team into workarounds and spreadsheets, a custom application is often the better long-term investment. We build customer portals, internal tools, dashboards and SaaS products for startups and established companies alike, from the data model through to the interface, and we support them after launch.",
    included: [
      {
        title: "Discovery and scoping",
        detail: "Workflow mapping with the people who will use the software, and a clearly scoped first release.",
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
        detail: "Single sign-on, detailed permissions and audit logs where your business requires them.",
      },
      {
        title: "Infrastructure",
        detail: "Deployed to your own cloud account with automated deployments, backups, monitoring and alerts.",
      },
    ],
    approach: [
      "We ship a focused first version early, usually within eight to twelve weeks, and expand it based on how people actually use it. It is the most reliable way we know to avoid building features nobody needs.",
      "You see working software every two weeks, not status reports. The code is yours and is written so your own team, or another vendor, can maintain it.",
    ],
    engagement: [
      { label: "First release", value: "8 to 12 weeks" },
      { label: "Team", value: "Product lead, designer and 2 to 4 engineers" },
      { label: "After launch", value: "Ongoing development or managed support" },
    ],
    faqs: [
      {
        question: "Do you take over existing applications?",
        answer:
          "Often. We start with a review of the code and infrastructure, fix anything urgent, and then agree on a plan for the rest.",
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
    seoTitle: "AI Development and Integration Services",
    metaDescription:
      "AI development and integration for businesses: knowledge assistants, document processing and AI product features, with measured accuracy and privacy controls.",
    headline: "AI is most useful when it is pointed at a specific, measurable problem.",
    intro:
      "We help businesses put large language models to work where they make a measurable difference: answering questions from internal documents, drafting routine responses, extracting data and adding AI features to existing products. We are just as direct about where AI is not the right tool.",
    included: [
      {
        title: "Opportunity assessment",
        detail: "A short review of where AI would save time or reduce errors, ranked by value and risk.",
      },
      {
        title: "Knowledge assistants",
        detail: "Search and question answering over your documents, with sources cited in every answer.",
      },
      {
        title: "Document processing",
        detail: "Structured data extracted from invoices, contracts, forms and email at volume.",
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
      "Every AI project starts with questions we can measure. How long does the task take today? How often is it wrong? What would good enough look like? The answers give us a baseline to test against before anything reaches production.",
      "We work with the major model providers as well as open-weight models, and we choose based on accuracy, cost and where your data is allowed to go, not on what is newest.",
    ],
    engagement: [
      { label: "Assessment", value: "2 to 3 weeks" },
      { label: "Pilot", value: "4 to 8 weeks" },
      { label: "After launch", value: "Monitoring, evaluation and tuning" },
    ],
    faqs: [
      {
        question: "Is our data used to train AI models?",
        answer:
          "No. We use enterprise API agreements that exclude your data from training, or self-hosted models when your requirements call for it.",
      },
      {
        question: "What if the AI gets something wrong?",
        answer:
          "We design for it. Answers cite their sources, low-confidence results go to a person, and accuracy is tracked continuously after launch.",
      },
      {
        question: "Do we need a lot of data to get started?",
        answer: "Usually not. Most useful applications work with the documents and records you already have.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    summary: "Integrations and workflows that remove repetitive work between the systems you already use.",
    seoTitle: "Business Process Automation and Integration",
    metaDescription:
      "Business process automation and system integration that removes manual data entry, speeds up approvals and connects your CRM, accounting and operations tools.",
    headline: "Your team shouldn't have to be the integration between your systems.",
    intro:
      "Copying data between tools, chasing approvals and assembling the same report every Monday adds up to hours every week. We map those processes, automate the predictable parts, and make the exceptions visible to the people who need to handle them.",
    included: [
      {
        title: "Process mapping",
        detail: "How work moves today, where it stalls and what that costs.",
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
        detail: "Scheduled reports and live dashboards built from your systems of record.",
      },
      {
        title: "Error handling",
        detail: "Retries, alerts and clear logs, so problems are caught before they reach customers.",
      },
      {
        title: "Documentation",
        detail: "Plain-language runbooks your operations team can follow on its own.",
      },
    ],
    approach: [
      "We automate the stable, well-understood parts of a process first and leave judgment calls with people. That keeps early projects small, lowers risk and shows results within weeks.",
      "Where a no-code platform is the right fit, we use it. Where volume, reliability or security demand more, we build custom services and monitor them like any other production system.",
    ],
    engagement: [
      { label: "Typical project", value: "3 to 8 weeks" },
      { label: "Team", value: "Solutions lead and 1 to 2 engineers" },
      { label: "After launch", value: "Monitoring and change requests" },
    ],
    faqs: [
      {
        question: "Which tools do you integrate with?",
        answer:
          "Most business software with an API, including Salesforce, HubSpot, NetSuite, QuickBooks, Shopify, Slack, Microsoft 365 and Google Workspace.",
      },
      {
        question: "What happens when an automation fails?",
        answer:
          "Failures are retried automatically where that is safe. Anything that needs a person triggers an alert with enough context to resolve it.",
      },
    ],
  },
  {
    slug: "web-optimization",
    name: "Web Optimization",
    summary: "Measurable improvements to speed, Core Web Vitals and front-end efficiency.",
    seoTitle: "Website Speed and Performance Optimization",
    metaDescription:
      "Website performance optimization based on real visitor data: faster load times, better Core Web Vitals and Lighthouse scores, and monitoring that keeps them there.",
    headline: "Speed is the first thing your customers notice.",
    intro:
      "Slow pages cost you conversions and search visibility. We use data from real visitors to find exactly what is slowing your site down, fix the causes in your codebase, and set up monitoring so performance doesn't quietly slip again.",
    included: [
      {
        title: "Performance audit",
        detail: "Field and lab analysis of Core Web Vitals across your key page templates and devices.",
      },
      {
        title: "Loading performance",
        detail: "Render-blocking resources, server response times and other fixes that improve LCP.",
      },
      {
        title: "Responsiveness",
        detail: "Less JavaScript and fewer long tasks, for a better Interaction to Next Paint.",
      },
      {
        title: "Images and media",
        detail: "Modern formats, responsive sizing and lazy loading, configured correctly.",
      },
      {
        title: "Caching and delivery",
        detail: "CDN configuration, cache headers and edge rendering where they help.",
      },
      {
        title: "Monitoring",
        detail: "Real-user monitoring and performance budgets enforced before every deployment.",
      },
    ],
    approach: [
      "We measure first. Lighthouse scores are useful, but the Core Web Vitals that affect search rankings come from your real visitors, so that is the data we prioritize.",
      "Fixes are delivered as normal code changes to your repository, reviewed with your team and verified in production data once they ship.",
    ],
    engagement: [
      { label: "Audit", value: "1 to 2 weeks" },
      { label: "Implementation", value: "2 to 6 weeks" },
      { label: "After launch", value: "Quarterly performance reviews" },
    ],
    faqs: [
      {
        question: "Can you optimize a site you didn't build?",
        answer:
          "Yes. Most of our optimization work is on existing sites built with Next.js, WordPress, Shopify, Magento or custom stacks.",
      },
      {
        question: "Do you guarantee a Lighthouse score?",
        answer:
          "We don't guarantee scores. We agree on specific targets after the audit and report our progress against them.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    summary: "Technical SEO, site structure and metadata that help search engines understand your site.",
    seoTitle: "Technical SEO Services",
    metaDescription:
      "Technical SEO for business websites: site structure, indexing, metadata, structured data and page speed, implemented by engineers rather than listed in a report.",
    headline: "Good SEO starts with a site that is easy to crawl and easy to understand.",
    intro:
      "We focus on the technical foundation of search: how your site is structured, how quickly it loads, how its pages are indexed and how clearly your content is described to search engines. It is the part of SEO most closely tied to how a site is built, and the part most often neglected.",
    included: [
      {
        title: "Technical audit",
        detail: "Crawlability, indexing, canonical URLs, redirects and duplicate content.",
      },
      {
        title: "Site architecture",
        detail: "URL structure, internal links and navigation that reflect how people search.",
      },
      {
        title: "Metadata and structured data",
        detail: "Titles, descriptions and schema markup generated consistently from your content.",
      },
      {
        title: "Performance",
        detail: "Core Web Vitals improvements that help both rankings and the user experience.",
      },
      {
        title: "Migrations",
        detail: "Redirect planning and monitoring that protect rankings through redesigns and platform changes.",
      },
      {
        title: "Reporting",
        detail: "Search Console and analytics reporting focused on qualified traffic.",
      },
    ],
    approach: [
      "We don't sell link packages or promise first-page rankings. We fix what prevents search engines from finding, understanding and trusting your site, and we help your team publish content that answers real questions.",
      "Because we are engineers, our recommendations come with the implementation, not a spreadsheet of issues for someone else to fix.",
    ],
    engagement: [
      { label: "Audit", value: "2 weeks" },
      { label: "Implementation", value: "3 to 6 weeks" },
      { label: "After launch", value: "Monthly reporting and guidance" },
    ],
    faqs: [
      {
        question: "How long before we see results?",
        answer:
          "Technical fixes often show up within a few weeks of being crawled. Broader ranking improvements typically take three to six months.",
      },
      {
        question: "Do you write content?",
        answer:
          "We provide the content strategy and briefs, and work alongside your writers or content partners on production.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
