import { MagneticButton } from "@/components/buttons/magnetic-button";

export function FinalCta() {
  return (
    <section className="depth-stage relative overflow-hidden py-24 md:py-36">
      <div className="primary-orbit absolute inset-0 -z-10 opacity-90" />
      <div className="section-shell text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Start the signal</p>
        <h2 className="mx-auto max-w-6xl font-display text-[clamp(3.5rem,10vw,11rem)] font-black leading-[0.86]">
          Let’s engineer your unfair advantage.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
          Bring the ambition. EJICODE will shape the product strategy, interface, and scalable software
          system to make it real.
        </p>
        <div className="mt-10">
          <MagneticButton href="/contact">Talk to EJICODE</MagneticButton>
        </div>
      </div>
    </section>
  );
}
