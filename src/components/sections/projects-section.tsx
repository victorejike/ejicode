"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/buttons/magnetic-button";
import { SectionHeading } from "@/components/sections/section-heading";
import { projects } from "@/data/site";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section ref={ref} className="relative h-[360vh] py-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="section-shell w-full">
          <SectionHeading
            eyebrow="Featured projects"
            title="Cinematic systems with commercial weight."
            text="Selected work across SaaS, fintech, AI, and health technology."
          />
          <motion.div style={{ x }} className="flex w-max gap-5 will-change-transform">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="relative h-[56vh] w-[82vw] max-w-[980px] overflow-hidden rounded-[8px] border border-white/10 bg-panel p-6 md:w-[64vw] md:p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.16)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-white/58">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div>
                    <p className="mb-3 font-display text-8xl font-black text-white/10">0{index + 1}</p>
                    <h3 className="font-display text-5xl font-black md:text-8xl">{project.title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">{project.summary}</p>
                  </div>
                </div>
              </article>
            ))}
            <div className="grid h-[56vh] w-[72vw] max-w-[720px] place-items-center rounded-[8px] border border-dashed border-acid/40 bg-acid/5 p-8">
              <div className="text-center">
                <p className="mb-6 font-display text-5xl font-black">Your next flagship product.</p>
                <MagneticButton href="/contact">Build with EJICODE</MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
