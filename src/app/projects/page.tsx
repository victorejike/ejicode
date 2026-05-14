import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description: "Selected EJICODE work across SaaS, AI analytics, fintech, and health technology."
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected systems with launch energy."
        text="A look at the kind of premium digital products EJICODE creates for teams with complex problems and serious ambition."
      />
      <ProjectsSection />
      <FinalCta />
    </>
  );
}
