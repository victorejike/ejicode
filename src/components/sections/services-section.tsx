"use client";

import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Strategy, design, code, and scale."
          text="Cross-functional teams for founders and enterprises that need the work to feel sharp, fast, and sturdy from day one."
        />
        <div data-fade-grid className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
