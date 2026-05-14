"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 38 });
  const springY = useSpring(y, { stiffness: 450, damping: 38 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 16);
      y.set(event.clientY - 16);
    };
    const onOver = (event: Event) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest("a,button,.cursor-grow")));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-8 w-8 rounded-full border border-acid/70 mix-blend-difference lg:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 2.2 : 1, opacity: active ? 0.45 : 1 }}
      transition={{ duration: 0.25 }}
      aria-hidden="true"
    />
  );
}
