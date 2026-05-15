import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Case Studies",
  path: "/case-studies",
  description: "EJICODE case studies showing business outcomes, product strategy, and engineering results."
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Evidence, not theater."
        text="Every engagement is measured by clarity, launch quality, adoption, and the durability of the system after release."
      />
      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">{project.category}</p>
              <h2 className="mt-5 font-display text-4xl font-black">{project.title}</h2>
              <p className="mt-5 leading-8 text-white/62">{project.summary}</p>
              <dl className="mt-8 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <dt className="text-white/35">Impact</dt>
                  <dd className="mt-2 text-white">Launch-ready</dd>
                </div>
                <div>
                  <dt className="text-white/35">System</dt>
                  <dd className="mt-2 text-white">Cloud-native</dd>
                </div>
                <div>
                  <dt className="text-white/35">Year</dt>
                  <dd className="mt-2 text-white">{project.year}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
