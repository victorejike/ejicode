import Link from "next/link";
import { MagneticButton } from "@/components/buttons/magnetic-button";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon py-12 md:py-20">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <p className="font-display text-5xl font-black leading-none md:text-7xl">Build what the market remembers.</p>
            <div className="mt-8">
              <MagneticButton href="/contact">Plan a project</MagneticButton>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/40">Sitemap</h2>
            <div className="grid gap-3 text-white/70">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/40">Connect</h2>
            <div className="grid gap-3 text-white/70">
              <a className="transition hover:text-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="transition hover:text-primary" href={`tel:${site.phone.replace(/\D/g, "")}`}>
                {site.phone}
              </a>
              {site.socials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EJICODE. Premium software systems.</p>
          <p>Next.js, TypeScript, WebGL, Motion, SEO-first architecture.</p>
        </div>
      </div>
    </footer>
  );
}
