"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  eyebrow,
  description,
  icon: Icon
}: {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="depth-card group relative min-h-[360px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-6"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      </div>
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-display text-5xl font-black text-white/12">{eyebrow}</span>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-carbon">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div>
          <h3 className="mb-4 font-display text-3xl font-bold md:text-4xl">{title}</h3>
          <p className="text-base leading-7 text-white/62">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}
