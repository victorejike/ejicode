"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/buttons/magnetic-button";

const HeroSceneClient = dynamic(() => import("@/components/hero/hero-scene-client"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-radial-grid" />
});

const words = ["Elite", "software", "systems", "for", "ambitious", "companies."];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-16 pt-32 md:pt-40">
      <HeroSceneClient />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_10%,rgba(0,255,102,.22),transparent_32rem)]" />
      <div className="section-shell grid min-h-[calc(100vh-8rem)] content-end">
        <div className="max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
          >
            Premium software company for AI, SaaS, and enterprise platforms
          </motion.p>
          <h1 className="font-display text-[clamp(4rem,13vw,13.5rem)] font-black leading-[0.82] tracking-normal">
            {words.map((word, index) => (
              <span key={word} className="reveal-line mr-[0.08em] inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotate: index % 2 ? 2 : -2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-2xl md:leading-9">
            EJICODE turns complex business ambition into fast, secure, beautifully engineered software
            products with cinematic interfaces and production-grade infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="/projects">View projects</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Start a build
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
