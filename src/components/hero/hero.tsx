"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/buttons/magnetic-button";

const HeroSceneClient = dynamic(() => import("@/components/hero/hero-scene-client"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-radial-grid" />
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0.08, 0.28, 0.78], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.08, 0.34], [90, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.85], [1.08, 0.94]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.82, 0.3]);

  return (
    <section ref={ref} className="relative h-[185vh] overflow-clip">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale: sceneScale, opacity: sceneOpacity }} className="absolute inset-0">
          <HeroSceneClient />
        </motion.div>
        <div className="primary-orbit absolute inset-0 -z-20" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon via-carbon/45 to-transparent" />

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="section-shell relative z-10 grid h-full content-end pb-10 md:pb-16"
        >
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              Premium software company for AI, SaaS, and enterprise platforms
            </p>
            <h1 className="font-display text-[clamp(3.4rem,8.6vw,9.5rem)] font-semibold leading-[0.95] tracking-normal">
              Elite software systems for ambitious companies.
            </h1>
          </div>

          <div className="mt-8 grid gap-7 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-7 text-white/68 md:text-xl md:leading-8">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.24em] text-white/45 md:block"
        >
          Scroll to reveal
        </motion.div>
      </div>
    </section>
  );
}
