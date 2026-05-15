import { MagneticButton } from "@/components/buttons/magnetic-button";
import { metrics } from "@/data/site";

export function StudioStatement() {
  return (
    <section className="depth-stage relative overflow-hidden py-20 md:py-32">
      <div className="primary-orbit absolute right-[-18rem] top-[-12rem] -z-10 h-[42rem] w-[42rem] rounded-full blur-2xl" />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Great work for great people</p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.88]">
            Software that feels clear, alive, and inevitable.
          </h2>
        </div>
        <div className="depth-card relative rounded-[8px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-xl leading-9 text-white/72">
            We put people first, then engineer the system around what helps them move faster. EJICODE blends
            strategy, interface design, software architecture, and 3D motion into digital products that feel
            premium from the first interaction.
          </p>
          <p className="mt-6 text-lg leading-8 text-white/55">
            Our independent studio model keeps the work senior, direct, and carefully made, with every section of
            the experience carrying depth, motion, and a clear commercial purpose.
          </p>
          <div className="mt-8">
            <MagneticButton href="/about" variant="ghost">
              About EJICODE
            </MagneticButton>
          </div>
        </div>
      </div>
      <div className="section-shell mt-14 grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="depth-card relative rounded-[8px] border border-white/10 bg-carbon/70 p-5">
            <p className="font-display text-5xl font-semibold md:text-6xl">{metric.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
