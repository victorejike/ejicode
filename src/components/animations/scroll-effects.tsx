"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: Number(element.dataset.parallax) || -12,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fade-grid]").forEach((container) => {
        gsap.from(container.children, {
          y: 48,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 78%"
          }
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
