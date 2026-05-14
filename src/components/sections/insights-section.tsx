import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { articles } from "@/data/site";

export function InsightsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Insights"
          title="Thinking for teams building next."
          text="Field notes on design quality, AI reliability, product velocity, and enterprise engineering."
        />
        <div data-fade-grid className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="/blog"
              className="group min-h-80 rounded-[8px] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-2 hover:border-acid/40 hover:bg-white/[0.06]"
            >
              <div className="mb-12 flex items-center justify-between text-sm text-white/45">
                <span>{article.tag}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="font-display text-3xl font-bold leading-tight">{article.title}</h3>
              <p className="mt-5 leading-7 text-white/58">{article.excerpt}</p>
              <p className="mt-8 text-sm text-acid">{article.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
