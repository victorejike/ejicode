import { Reveal } from "@/components/animations/reveal";

export function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-10 grid gap-5 md:mb-16 md:grid-cols-[.55fr_1fr] md:items-end">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-acid">{eyebrow}</p>
      <div>
        <h2 className="font-display text-[clamp(2.8rem,7vw,7.8rem)] font-black leading-[0.9] tracking-normal">{title}</h2>
        {text ? <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{text}</p> : null}
      </div>
    </Reveal>
  );
}
