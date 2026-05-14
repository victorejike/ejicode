import { SectionHeading } from "@/components/sections/section-heading";
import { process } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="A calm path from fog to launch."
          text="The work is structured enough for enterprise confidence and fluid enough for ambitious product discovery."
        />
        <div className="grid gap-3">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="group grid gap-5 border-t border-white/10 py-8 md:grid-cols-[.35fr_.65fr] md:items-center"
            >
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-black text-acid/80">0{index + 1}</span>
                <h3 className="font-display text-4xl font-bold">{step.title}</h3>
              </div>
              <p className="max-w-3xl text-xl leading-8 text-white/62 transition-colors group-hover:text-white/82">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
