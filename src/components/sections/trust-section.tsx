import { Marquee } from "@/components/animations/marquee";
import { Reveal } from "@/components/animations/reveal";
import { metrics, technologies } from "@/data/site";

export function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-t border-white/12 pt-5">
              <p className="font-display text-5xl font-black md:text-7xl">{metric.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">{metric.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
      <div className="mt-16">
        <Marquee items={technologies} />
      </div>
    </section>
  );
}
