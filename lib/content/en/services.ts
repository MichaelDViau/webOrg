import type { ServiceSlug, ServiceText } from "@/lib/services";

/**
 * The nine capability categories. Every capability the company offers is listed under one of them; none
 * may be dropped. Tone: professional American English, plain, specific, no slogans and no claims about
 * clients, years, awards or results. Never write "10x", "revolutionize", "cutting-edge" or "game-changing".
 */
export const services: Record<ServiceSlug, ServiceText> = {
  "custom-software": {
    name: "Custom Software Development",
    card: "Software built around how your business actually works: custom business systems, full-stack applications, and process automation.",
    seoTitle: "Custom Software Development Company",
    metaDescription:
      "Custom business software, full-stack development, and process automation. We build scalable applications tailored to how your business operates.",
    headline: "Custom software built around how your business works.",
    lead: "When off-the-shelf tools force you to work around them, we build the software that fits: tailored to your process, engineered to scale, and owned by you.",
    overview:
      "We handle the full stack, from the interface people use to the services and data behind it. The result is software that removes manual work, fits your process, and can grow with the business.",
    capabilities: [
      "Custom business software",
      "Tailored software solutions",
      "Full-stack development",
      "Frontend and backend engineering",
      "Business process automation",
      "Custom system development",
      "Scalable software applications",
    ],
    challenges: [
      "Off-the-shelf software doesn't match the way we work.",
      "Our team keeps working around the tools we have.",
      "Important processes live in spreadsheets and email.",
      "We need something that can grow with the business.",
    ],
    approach: [
      {
        title: "Start from the process",
        detail:
          "We map how the work really happens before deciding what to build, so the software fits the business and not the other way around.",
      },
      {
        title: "Build in working increments",
        detail: "You see working software early and often, and you steer it as we go.",
      },
      {
        title: "Plan for growth",
        detail:
          "Clean structure, documentation, and tests make the system easy to extend, and easy for any capable developer to maintain.",
      },
    ],
    faqs: [
      {
        question: "Can you build on top of the tools we already use?",
        answer:
          "Yes. We connect new software to your existing systems through their APIs, exports, or databases, and replace only what needs replacing.",
      },
      {
        question: "Who owns the code?",
        answer: "You do. The code lives in a repository in your organization from the first day.",
      },
    ],
  },

  "web-applications": {
    name: "Web & Application Development",
    card: "Websites, web applications, customer portals, and internal platforms, from progressive web apps to enterprise applications.",
    seoTitle: "Web Application Development Services",
    metaDescription:
      "Professional websites, custom web applications, customer portals, dashboards, and enterprise platforms, engineered for speed, security, and scale.",
    headline: "Websites and web applications engineered for real use.",
    lead: "From a professional company website to an enterprise platform your teams and customers rely on every day, we design, build, and maintain applications that work on every device.",
    overview:
      "Web technology is how most businesses reach customers and run their operations. We build both sides: the public site that earns inquiries and the applications behind the login.",
    capabilities: [
      "Professional website development",
      "Custom web applications",
      "Enterprise applications",
      "Progressive web applications",
      "Internal business platforms",
      "Customer portals",
      "Administrative dashboards",
      "Interactive digital platforms",
    ],
    challenges: [
      "Customers call to ask for information they should be able to find themselves.",
      "Our website looks fine but doesn't bring in qualified inquiries.",
      "Our team needs one internal platform instead of five separate tools.",
      "We need an application that works well on phones and tablets, too.",
    ],
    approach: [
      {
        title: "Design for the people who use it",
        detail:
          "We start with who uses the application and what they need to get done, then design the flow and the interface around it.",
      },
      {
        title: "Engineer for speed and security",
        detail:
          "Fast on ordinary phones and connections, accessible, and protected with sensible defaults such as HTTPS, access control, and monitored uptime.",
      },
      {
        title: "Launch, then look after it",
        detail: "We deploy, monitor, and keep improving the application after launch.",
      },
    ],
    faqs: [
      {
        question: "Can our team edit the content ourselves?",
        answer: "Yes. We set up content editing so your team can update pages without a developer.",
      },
      {
        question: "Do you build mobile apps?",
        answer:
          "We build progressive web applications that install and work like apps on phones, and we build native mobile applications when a project needs them.",
      },
    ],
  },

  "ai-solutions": {
    name: "AI Solutions & Automation",
    card: "AI integrated into your systems and workflows: assistants, intelligent automation, and data-driven processes with people in control.",
    seoTitle: "AI Solutions and Business Automation",
    metaDescription:
      "AI-powered applications, AI integration into existing systems, AI agents and assistants, and intelligent business automation for real workflows.",
    headline: "AI and automation that fit into the way you work.",
    lead: "We build and integrate AI where it removes real work: drafting, classifying, routing, and answering, inside your existing systems and with people reviewing what matters.",
    overview:
      "AI is one capability among many. We use it when it solves a specific problem better than conventional software, and we design it with clear limits, human review, and measurable results.",
    capabilities: [
      "AI-powered applications",
      "AI integration into existing systems",
      "Intelligent business automation",
      "AI agents and assistants",
      "Data-driven automation",
      "Custom AI business solutions",
      "AI-enhanced workflows",
    ],
    challenges: [
      "My team spends hours sorting, copying, and answering the same things.",
      "We want to use AI but don't know where it would actually help.",
      "We tried an AI tool and it doesn't connect to our systems.",
      "We want AI to help, but a person has to approve the result.",
    ],
    approach: [
      {
        title: "Start with the workflow, not the model",
        detail: "We find the step where AI removes real effort, then choose the simplest tool that does the job.",
      },
      {
        title: "Keep people in control",
        detail:
          "AI drafts and suggests. Your team reviews and approves anything that matters, and the system keeps a record.",
      },
      {
        title: "Measure what changes",
        detail:
          "We agree on how success will be measured, such as time saved or errors avoided, and check it after launch.",
      },
    ],
    faqs: [
      {
        question: "Will our data be used to train AI models?",
        answer:
          "Not by us. We choose providers and settings that keep your data out of model training where that option exists, and we document what data goes where.",
      },
      {
        question: "Can AI work with our existing software?",
        answer:
          "Usually, yes. We integrate AI through your systems' APIs and databases, so people keep working in the tools they know.",
      },
    ],
  },

  "database-solutions": {
    name: "Database Solutions",
    card: "Database design, development, optimization, and migration, so your data is organized, fast, and reliable.",
    seoTitle: "Database Development and Optimization",
    metaDescription:
      "Database architecture, development, management, optimization, and migration. We structure and integrate your data so it is accurate, fast, and usable.",
    headline: "Databases designed so your data is organized, fast, and reliable.",
    lead: "Every system depends on its data. We design, build, manage, and optimize the databases behind your applications, and move data safely from old systems to new ones.",
    overview:
      "Good data structure makes everything else easier: faster applications, accurate reports, and integrations that hold together. We treat the database as part of the product, not an afterthought.",
    capabilities: [
      "Database architecture and design",
      "Database development",
      "Database management",
      "Database optimization",
      "Data migration",
      "Database integration",
      "Data structuring and organization",
    ],
    challenges: [
      "The same information lives in several places and doesn't match.",
      "Reports are slow, or someone rebuilds them by hand every month.",
      "Our application slows down as the data grows.",
      "We need to move data from an old system without losing anything.",
    ],
    approach: [
      {
        title: "Model the business first",
        detail: "We design the data structure around how your business works, so it stays clear as it grows.",
      },
      {
        title: "Migrate with checks",
        detail:
          "We move data in rehearsed steps, compare the results, and keep a way back until everything is verified.",
      },
      {
        title: "Tune for real workloads",
        detail: "We measure the queries that matter and optimize those, rather than guessing.",
      },
    ],
    faqs: [
      {
        question: "Which databases do you work with?",
        answer:
          "We work with mainstream relational and document databases, and choose based on your requirements, your team's skills, and long-term maintenance.",
      },
      {
        question: "Can you clean up our existing data?",
        answer:
          "Yes. Structuring, de-duplicating, and organizing existing data is often the first step before a migration or integration.",
      },
    ],
  },

  "cloud-solutions": {
    name: "Cloud Solutions & Infrastructure",
    card: "Cloud architecture, migration, and infrastructure: scalable deployments on the platforms your business chooses.",
    seoTitle: "Cloud Migration and Infrastructure Services",
    metaDescription:
      "Cloud architecture, migration, infrastructure development, server management, and optimization. Scalable, secure deployments on major cloud platforms.",
    headline: "Cloud infrastructure built to run reliably and scale.",
    lead: "We design cloud architecture, migrate existing systems, and build the infrastructure and deployment pipelines that keep applications available, secure, and cost-aware.",
    overview:
      "Moving to the cloud is a means, not the goal. We plan around availability, security, cost, and how your team will operate the result, on platforms such as Microsoft Azure and Amazon Web Services.",
    capabilities: [
      "Cloud architecture",
      "Cloud migration",
      "Cloud infrastructure development",
      "Server configuration and management",
      "Scalable cloud applications",
      "Cloud optimization",
      "Deployment and infrastructure solutions",
    ],
    challenges: [
      "Our servers are aging, and nobody wants to touch them.",
      "We want to move to the cloud without interrupting the business.",
      "Our cloud bill keeps growing and we don't know why.",
      "Deployments are manual, slow, or risky.",
    ],
    approach: [
      {
        title: "Assess before moving",
        detail: "We inventory what runs where, what depends on what, and what should change before anything moves.",
      },
      {
        title: "Migrate in stages",
        detail: "Each step is rehearsed and reversible, so the business keeps running throughout.",
      },
      {
        title: "Automate deployment",
        detail: "Repeatable pipelines and infrastructure defined in code make releases routine instead of risky.",
      },
    ],
    faqs: [
      {
        question: "Which cloud platforms do you work with?",
        answer:
          "We work with major platforms such as Microsoft Azure and Amazon Web Services, and we recommend based on what you already run and what the project needs.",
      },
      {
        question: "Will we be locked in to one provider?",
        answer:
          "We design to keep your options open where that makes sense, and we document the architecture so it can be operated or moved later.",
      },
    ],
  },

  "software-architecture": {
    name: "Software Architecture",
    card: "Architecture and planning for scalable systems: backend design, APIs, integrations, and technical infrastructure.",
    seoTitle: "Software Architecture and System Design",
    metaDescription:
      "Software and application architecture, scalable system design, backend and API architecture, system integration, and technical infrastructure planning.",
    headline: "Software architecture that lets systems grow without breaking.",
    lead: "Good architecture decides how easily a system can change. We design the structure, interfaces, and integrations that keep your technology reliable as the business evolves.",
    overview:
      "We plan before we build: how components fit together, how data flows, how systems talk to each other, and where the system will need to scale. That planning prevents expensive rework later.",
    capabilities: [
      "Software architecture and planning",
      "Scalable system design",
      "Backend architecture",
      "API architecture",
      "System integration",
      "Technical infrastructure planning",
      "Application architecture",
    ],
    challenges: [
      "Every change breaks something else.",
      "Our systems don't talk to each other.",
      "We're about to build something big and want the foundation right.",
      "We inherited a system nobody fully understands.",
    ],
    approach: [
      {
        title: "Decide with the trade-offs in view",
        detail:
          "We write down the options, what each one costs, and why we recommend one, in language decision-makers can follow.",
      },
      {
        title: "Define the boundaries",
        detail:
          "Clear interfaces between parts let teams work independently and let systems be replaced one piece at a time.",
      },
      {
        title: "Document what we design",
        detail: "Diagrams and decisions are recorded so your team, or any capable developer, can continue the work.",
      },
    ],
    faqs: [
      {
        question: "Do you only design, or also build?",
        answer:
          "Both. Some clients hire us for the architecture and build with their own team. Others have us design and build.",
      },
      {
        question: "Can you review an architecture we already have?",
        answer: "Yes. We review existing systems and report what is sound, what is risky, and what to change first.",
      },
    ],
  },

  "application-modernization": {
    name: "Application Modernization",
    card: "Upgrade, restructure, and migrate legacy applications, so aging systems stop holding the business back.",
    seoTitle: "Legacy Application Modernization Services",
    metaDescription:
      "Legacy system modernization, application upgrades, performance optimization, system restructuring, and technology migration for outdated business systems.",
    headline: "Modernize the systems your business already depends on.",
    lead: "Outdated software is risky, slow, and hard to change. We upgrade, restructure, and migrate existing applications in stages, without stopping the work that depends on them.",
    overview:
      "Most businesses can't switch off a critical system and start over. We modernize around what works: keep what's sound, replace what isn't, and move to current technology one step at a time.",
    capabilities: [
      "Legacy system modernization",
      "Existing application upgrades",
      "Performance optimization",
      "System restructuring",
      "Technology migration",
      "Codebase improvements",
      "Modernization of outdated business systems",
    ],
    challenges: [
      "Our software runs on technology nobody supports anymore.",
      "It's slow, and every change takes months.",
      "Only one person understands how it works.",
      "We want new features, but the old system can't support them.",
    ],
    approach: [
      {
        title: "Understand before changing",
        detail:
          "We read the code, map the dependencies, and find out what the system really does, including what nobody documented.",
      },
      {
        title: "Modernize in stages",
        detail:
          "We replace or upgrade one part at a time, so the business keeps running and each step can be verified.",
      },
      {
        title: "Leave it easier to maintain",
        detail: "Cleaner code, tests, and documentation mean the next change costs less than the last one.",
      },
    ],
    faqs: [
      {
        question: "Do we have to rebuild everything?",
        answer:
          "Rarely. We usually recommend upgrading or replacing the parts that hold you back and keeping what works.",
      },
      {
        question: "Can the system stay in use during modernization?",
        answer:
          "Yes. Staged migration and parallel running let the business keep working while the system changes underneath it.",
      },
    ],
  },

  "digital-transformation": {
    name: "Digital Transformation",
    card: "Digital workflows, process optimization, and integrated systems, so technology supports how the business operates.",
    seoTitle: "Digital Transformation Consulting and Development",
    metaDescription:
      "Business technology transformation: digital workflow development, process optimization, technology integration, and business system modernization.",
    headline: "Digital transformation grounded in how your business operates.",
    lead: "We turn manual, disconnected processes into integrated digital workflows, and modernize the business systems around them, one practical step at a time.",
    overview:
      "Transformation means changing how work gets done, not just buying software. We start with the process, decide what technology should do, and build and connect it so the change sticks.",
    capabilities: [
      "Business technology transformation",
      "Digital workflow development",
      "Process optimization",
      "Technology integration",
      "Business system modernization",
      "Digital infrastructure development",
    ],
    challenges: [
      "Too much of our work still happens on paper, in email, or by hand.",
      "Our tools don't share information, so people retype it.",
      "We know we need to modernize but not where to begin.",
      "We need a plan the whole company can follow.",
    ],
    approach: [
      {
        title: "Map the work as it is",
        detail:
          "We document how processes really run today, including the workarounds, before proposing any change.",
      },
      {
        title: "Prioritize by impact",
        detail: "We rank changes by the value they deliver and the effort they take, so you start where it matters most.",
      },
      {
        title: "Deliver in steps",
        detail:
          "Each step ships something usable, so the business benefits along the way instead of waiting for one big launch.",
      },
    ],
    faqs: [
      {
        question: "Where do we start?",
        answer:
          "Usually with a technical assessment of your current processes and systems. It shows what to change first and what it would take.",
      },
      {
        question: "Do we need to change everything at once?",
        answer: "No. We plan the changes in steps, and each step delivers something useful on its own.",
      },
    ],
  },

  "technology-consulting": {
    name: "Consulting & Technical Problem-Solving",
    card: "Technology consulting, technical assessments, and troubleshooting, from planning through implementation.",
    seoTitle: "Technology Consulting and Technical Assessments",
    metaDescription:
      "Technology consulting, technical assessments, software troubleshooting, system diagnostics, and custom technology strategy, from planning to implementation.",
    headline: "Technical expertise for your hardest problems and biggest decisions.",
    lead: "When something is broken, unclear, or about to change, we help you understand it, decide what to do, and then implement it, or hand a clear plan to your own team.",
    overview:
      "Sometimes the most valuable deliverable is a clear answer: what is wrong, what to do about it, and what it will cost. We diagnose the problem first and recommend only what the evidence supports.",
    capabilities: [
      "Technology consulting",
      "Technical assessments",
      "Software troubleshooting",
      "Complex technical problem-solving",
      "Custom technology strategies",
      "Infrastructure improvements",
      "System diagnostics",
      "Technical planning and implementation",
    ],
    challenges: [
      "Something in our system is failing and we can't find the cause.",
      "We need an independent opinion before a big technology decision.",
      "Our team is stretched and needs senior technical help.",
      "We need a plan, and someone to help carry it out.",
    ],
    approach: [
      {
        title: "Diagnose with evidence",
        detail: "We reproduce the problem, measure it, and trace it to its cause before recommending a fix.",
      },
      {
        title: "Give a clear recommendation",
        detail:
          "You get a written assessment with priorities, options, and costs, whether or not you hire us to implement it.",
      },
      {
        title: "Stay through implementation",
        detail: "When you want it, we carry the plan out or work alongside your team until it's done.",
      },
    ],
    faqs: [
      {
        question: "What is a technical assessment?",
        answer:
          "A fixed-scope review of your systems, processes, or code that ends with findings, priorities, and a costed plan. Our Digital Systems Audit is one form of it.",
      },
      {
        question: "Can you help with a problem that's already in production?",
        answer: "Yes. Troubleshooting live systems is part of the work. We stabilize first, then find and fix the cause.",
      },
    ],
  },
};

export const servicesPage = {
  metaTitle: "Custom Software, Web, AI, Cloud and Technology Services",
  metaDescription:
    "Custom software, web and application development, AI, databases, cloud, architecture, modernization, digital transformation, and technology consulting.",
  eyebrow: "Services",
  title: "Nine capabilities. One engineering team.",
  lead: "Custom software, web applications, AI, databases, cloud, architecture, modernization, transformation, and technical consulting. Use one for a specific problem, or several for a complete solution.",
  capabilitiesTitle: "What we do",
  challengesTitle: "Does this sound familiar?",
  approachTitle: "How we approach it",
  relatedTitle: "Related capabilities",
  faqTitle: "Common questions",
  exploreLabel: "Explore",
  capabilityCount: "{count} capabilities",
  allServices: "All services",
  assessmentTitle: "Start with a technical assessment",
  assessmentBody:
    "If you'd like a written, evidence-based view of your systems before committing to a project, our Digital Systems Audit is a fixed-scope assessment that ends with a prioritized, costed plan.",
  assessmentLink: "About the Digital Systems Audit",
  ctaTitle: "Not sure which capability you need?",
  ctaLead: "Describe the challenge. We'll tell you what we'd do, and which capabilities it involves.",
};

export type ServicesPage = typeof servicesPage;
