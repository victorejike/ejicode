import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { InsightsSection } from "@/components/sections/insights-section";
import { PageHero } from "@/components/sections/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description: "EJICODE insights on AI, software engineering, UX, performance, and product strategy."
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Signals for product and engineering leaders."
        text="Practical essays from the edge of premium software design, AI implementation, platform architecture, and growth."
      />
      <InsightsSection />
      <FinalCta />
    </>
  );
}
