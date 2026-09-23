import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Gauge,
  Layers,
  LayoutTemplate,
  LineChart,
  MonitorSmartphone,
} from "lucide-react";

export const site = {
  name: "Nocturne",
  tagline: "Digital products, engineered to perform.",
  email: "hello@nocturne.studio",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export type ServiceVisual = "app" | "ai" | "performance" | "web" | "system" | "growth";

export interface Service {
  id: ServiceVisual;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const services: Service[] = [
  {
    id: "app",
    eyebrow: "Web Applications",
    title: "Product-grade apps, shipped with intent.",
    description:
      "Dashboards, SaaS platforms and internal tools built on a type-safe stack that scales from first user to millionth.",
    icon: MonitorSmartphone,
    className: "lg:col-span-2",
  },
  {
    id: "ai",
    eyebrow: "AI Integration",
    title: "Intelligence, woven into the workflow.",
    description:
      "Custom assistants, retrieval pipelines and automations that turn your data into a competitive edge.",
    icon: Bot,
    className: "lg:row-span-2",
  },
  {
    id: "web",
    eyebrow: "Websites",
    title: "Brand sites that convert.",
    description: "Editorial design, fluid motion and a CMS your team will actually enjoy.",
    icon: LayoutTemplate,
  },
  {
    id: "performance",
    eyebrow: "Web Optimization",
    title: "Sub-second, everywhere.",
    description: "Core Web Vitals audits and rebuilds that make every millisecond count.",
    icon: Gauge,
  },
  {
    id: "system",
    eyebrow: "Design Systems",
    title: "One language, every surface.",
    description: "Tokens, components and documentation that keep product teams in sync.",
    icon: Layers,
  },
  {
    id: "growth",
    eyebrow: "Growth & SEO",
    title: "Compounding visibility.",
    description:
      "Technical SEO, analytics and experimentation frameworks that turn traffic into measurable revenue.",
    icon: LineChart,
    className: "lg:col-span-2",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "120+", label: "Products launched" },
  { value: "0.8s", label: "Median LCP delivered" },
  { value: "3.4×", label: "Average conversion lift" },
  { value: "98%", label: "Client retention" },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We map your goals, users and constraints into a sharp, measurable brief.",
  },
  {
    step: "02",
    title: "Design",
    description: "High-fidelity prototypes validated with real users before a line of code.",
  },
  {
    step: "03",
    title: "Engineer",
    description: "Modern, accessible, performant builds with weekly releases you can see.",
  },
  {
    step: "04",
    title: "Evolve",
    description: "Post-launch optimization driven by data, not guesswork.",
  },
];

export const clients: string[] = ["Arcadia", "Helix", "Monolith", "Polaris", "Vertex", "Quanta"];
