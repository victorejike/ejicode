import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const site = {
  name: "EJICODE",
  url: "https://ejicode.com",
  description:
    "EJICODE designs and engineers premium software platforms, AI systems, and enterprise digital infrastructure for ambitious teams.",
  email: "hello@ejicode.com",
  phone: "+1 (302) 555-0148",
  socials: ["LinkedIn", "X", "GitHub", "Dribbble"]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const metrics = [
  { value: "42+", label: "platforms launched" },
  { value: "99.9%", label: "uptime targets" },
  { value: "14", label: "industries shipped" },
  { value: "6wk", label: "prototype sprint" }
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node",
  "Python",
  "AI",
  "Cloud",
  "WebGL",
  "Design Systems",
  "Data Platforms"
];

export const services = [
  {
    title: "Product Strategy",
    eyebrow: "01",
    description:
      "Market-aware roadmaps, technical discovery, UX architecture, and release planning for high-stakes digital products.",
    icon: BrainCircuit
  },
  {
    title: "Software Engineering",
    eyebrow: "02",
    description:
      "Production-grade web apps, SaaS platforms, APIs, dashboards, automation, and cloud-native infrastructure.",
    icon: Code2
  },
  {
    title: "AI Systems",
    eyebrow: "03",
    description:
      "Practical AI copilots, retrieval systems, workflow agents, model integrations, and secure automation layers.",
    icon: Sparkles
  },
  {
    title: "Experience Design",
    eyebrow: "04",
    description:
      "Premium interfaces, design systems, prototyping, motion direction, and conversion-focused product surfaces.",
    icon: Layers3
  }
];

export const projects = [
  {
    title: "Northstar Ops",
    category: "Enterprise SaaS",
    year: "2026",
    summary: "A command center for distributed operations, live forecasting, and executive decision velocity.",
    color: "from-primary/50 via-white/10 to-transparent"
  },
  {
    title: "Atlas Pay",
    category: "Fintech Infrastructure",
    year: "2025",
    summary: "A resilient payments portal with identity, reconciliation, risk visibility, and global reporting.",
    color: "from-cyan-300/45 via-primary/20 to-transparent"
  },
  {
    title: "Signal Grid",
    category: "AI Analytics",
    year: "2025",
    summary: "An AI intelligence layer for noisy enterprise data, built around trust, lineage, and speed.",
    color: "from-fuchsia-300/35 via-primary/15 to-transparent"
  },
  {
    title: "Pulse Cloud",
    category: "Health Technology",
    year: "2024",
    summary: "A secure patient engagement platform for scheduling, messaging, care plans, and analytics.",
    color: "from-emerald-300/45 via-white/10 to-transparent"
  }
];

export const process = [
  { title: "Discovery", text: "We map goals, constraints, users, revenue mechanics, and technical risk." },
  { title: "Strategy", text: "We convert ambiguity into a product plan, architecture, and launch sequence." },
  { title: "Design", text: "We prototype fast, test the interface, and build a scalable design language." },
  { title: "Development", text: "We ship in focused cycles with clean code, observability, and quality gates." },
  { title: "Launch", text: "We harden, measure, iterate, and keep improving after release." }
];

export const testimonials = [
  {
    quote:
      "EJICODE brought senior product thinking and engineering firepower at the same time. The platform felt premium from the first demo.",
    name: "Maya Collins",
    role: "COO, Northstar Ops"
  },
  {
    quote:
      "They translated a complex operational model into software our teams actually want to use every day.",
    name: "Daniel Reed",
    role: "Founder, Atlas Pay"
  },
  {
    quote:
      "The build quality, motion, and performance gave our brand a completely different level of credibility.",
    name: "Ari Okafor",
    role: "VP Product, Signal Grid"
  }
];

export const articles = [
  {
    title: "Designing AI products that people can trust",
    tag: "AI",
    date: "May 8, 2026",
    excerpt: "How interface clarity, provenance, and human controls shape production AI adoption."
  },
  {
    title: "The enterprise case for cinematic product UX",
    tag: "Design",
    date: "April 22, 2026",
    excerpt: "Premium motion is not decoration. Used well, it clarifies hierarchy and creates confidence."
  },
  {
    title: "What fast teams need from modern web platforms",
    tag: "Engineering",
    date: "March 18, 2026",
    excerpt: "A practical look at rendering, observability, performance budgets, and iteration speed."
  }
];

export const capabilities = [
  { label: "Architecture", icon: Workflow },
  { label: "Cloud", icon: DatabaseZap },
  { label: "Security", icon: ShieldCheck },
  { label: "Scale", icon: Rocket },
  { label: "Growth", icon: ArrowUpRight },
  { label: "Careers", icon: BriefcaseBusiness }
];

export const openings = [
  "Senior Full-Stack Engineer",
  "Product Designer",
  "Motion Engineer",
  "AI Solutions Architect"
];
