"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Proof" title="Quiet confidence, loud outcomes." />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <p className="min-h-48 font-display text-3xl font-bold leading-tight">“{item.quote}”</p>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/45">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
