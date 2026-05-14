import type { Metadata } from "next";
import { ScrollEffects } from "@/components/animations/scroll-effects";
import { Hero } from "@/components/hero/hero";
import { FinalCta } from "@/components/sections/final-cta";
import { InsightsSection } from "@/components/sections/insights-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustSection } from "@/components/sections/trust-section";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata();

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    sameAs: ["https://www.linkedin.com/", "https://github.com/"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollEffects />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <InsightsSection />
      <FinalCta />
    </>
  );
}
