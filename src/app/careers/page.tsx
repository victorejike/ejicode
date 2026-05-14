import type { Metadata } from "next";
import { MagneticButton } from "@/components/buttons/magnetic-button";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { openings } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  path: "/careers",
  description: "Join EJICODE and help craft premium software systems for ambitious companies."
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the sharpest work of your career."
        text="We are building a small, senior team of designers, engineers, strategists, and motion thinkers who care about craft and outcomes."
      />
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="grid gap-3">
            {openings.map((role) => (
              <article key={role} className="flex flex-col gap-5 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-4xl font-bold">{role}</h2>
                  <p className="mt-3 text-white/55">Remote-first / Senior level / Product-minded delivery</p>
                </div>
                <MagneticButton href="/contact" variant="ghost">
                  Apply
                </MagneticButton>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
