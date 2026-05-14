import type { Metadata } from "next";
import { CapabilityGrid } from "@/components/sections/capability-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "Learn how EJICODE combines product strategy, design craft, and production engineering."
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EJICODE"
        title="A software studio built for consequential products."
        text="We partner with leaders who need speed without fragility, polish without vanity, and engineering depth without ceremony."
      />
      <CapabilityGrid />
      <ProcessSection />
      <FinalCta />
    </>
  );
}
