import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  path: "/services",
  description: "Explore EJICODE services across strategy, design, AI systems, and software engineering."
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From product thesis to scalable software."
        text="Dedicated teams for product strategy, premium user experience, AI integration, platform architecture, and production delivery."
      />
      <ServicesSection />
      <FinalCta />
    </>
  );
}
