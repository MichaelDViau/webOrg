export interface TechGroup {
  name: string;
  /** What this layer does, in plain language. */
  plain: string;
  tools: string[];
}

/** Technology we work with, grouped by layer. Shown on the homepage. */
export const techStack: TechGroup[] = [
  {
    name: "Front end",
    plain: "The pages and screens your customers see, tap and click.",
    tools: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Astro", "Vue", "Tailwind CSS"],
  },
  {
    name: "Back end and APIs",
    plain: "The logic behind the scenes that saves data, sends emails and connects systems.",
    tools: ["Node.js", "Python", "Go", "REST APIs", "GraphQL", "WebSockets", "Serverless functions"],
  },
  {
    name: "Databases",
    plain: "Where your information is stored safely and found again quickly.",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma", "Elasticsearch"],
  },
  {
    name: "AI and machine learning",
    plain: "Assistants and tools that read, write, sort and answer questions from your data.",
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Open-weight models (Llama, Mistral)",
      "Retrieval-augmented generation",
      "Vector search (pgvector)",
      "LangChain",
      "Evaluation and monitoring",
    ],
  },
  {
    name: "Cloud and DevOps",
    plain: "Reliable hosting, automatic backups and safe, repeatable releases.",
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Vercel", "Cloudflare", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    name: "Content, commerce and payments",
    plain: "Tools your team uses to edit the website, sell online and take payments.",
    tools: ["WordPress", "Sanity", "Contentful", "Shopify", "Stripe", "Webflow"],
  },
  {
    name: "Automation and integrations",
    plain: "Connections that move information between the software you already use.",
    tools: ["n8n", "Make", "Zapier", "Salesforce", "HubSpot", "NetSuite", "QuickBooks", "Microsoft 365", "Slack"],
  },
  {
    name: "Quality, security and performance",
    plain: "Testing and monitoring that catch problems before your customers do.",
    tools: ["Playwright", "Vitest", "Lighthouse", "Core Web Vitals", "Sentry", "OWASP practices", "Accessibility (WCAG 2.2)"],
  },
];
