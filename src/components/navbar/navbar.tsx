"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MagneticButton } from "@/components/buttons/magnetic-button";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 140], ["rgba(5,5,5,0.18)", "rgba(5,5,5,0.78)"]);
  const y = useTransform(scrollY, [0, 120], [0, -4]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <motion.header
        style={{ background, y }}
        className="w-full max-w-[1480px] rounded-full border border-white/10 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-2xl"
      >
      <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3 px-2" aria-label="EJICODE home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-black text-carbon shadow-primaryGlow transition-transform group-hover:rotate-12">
            EJ
          </span>
          <span className="font-display text-sm font-bold tracking-[0.22em]">EJICODE</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-xs font-medium transition ${
                pathname === item.href ? "bg-white text-carbon" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton href="/contact">Start a build</MagneticButton>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="grid gap-2 px-2 pb-3 pt-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </div>
  );
}
