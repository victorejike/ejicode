"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export function MagneticButton({ href, children, variant = "primary" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.16}px, ${y * 0.22}px, 0)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const classes =
    variant === "primary"
      ? "bg-primary text-carbon hover:bg-white"
      : "border border-white/15 bg-white/5 text-white hover:border-primary/60 hover:bg-primary/10";

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`magnetic-target group inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${classes}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
