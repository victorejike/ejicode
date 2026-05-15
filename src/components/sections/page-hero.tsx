import { Reveal } from "@/components/animations/reveal";

export function PageHero({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <div className="primary-orbit absolute inset-0 -z-10 opacity-75" />
      <div className="section-shell">
        <Reveal>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
          <h1 className="max-w-6xl font-display text-[clamp(4rem,11vw,11rem)] font-black leading-[0.86]">{title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
