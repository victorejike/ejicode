"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { LenisProvider } from "@/components/animations/lenis-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LenisProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LenisProvider>
  );
}
