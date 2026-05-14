import { capabilities } from "@/data/site";

export function CapabilityGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell grid gap-4 md:grid-cols-3">
        {capabilities.map(({ label, icon: Icon }) => (
          <article key={label} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-7">
            <Icon className="mb-10 h-7 w-7 text-acid" />
            <h2 className="font-display text-3xl font-bold">{label}</h2>
            <p className="mt-4 leading-7 text-white/58">
              Senior-level direction, execution, governance, and iteration for software that has to perform in
              public.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
