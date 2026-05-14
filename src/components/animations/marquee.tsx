export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="mask-gradient flex overflow-hidden border-y border-white/10 py-5">
      <div className="flex min-w-full animate-[marquee_26s_linear_infinite] gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="font-display text-2xl font-bold text-white/80 md:text-4xl">
            {item}
            <span className="mx-8 text-acid">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
