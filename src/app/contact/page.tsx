import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact EJICODE to plan a premium software, AI, SaaS, or enterprise platform build."
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building next."
        text="Share the product, platform, or operational system you want to create. We will help clarify the path from ambition to launch."
      />
      <section className="pb-24">
        <div className="section-shell grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-7">
            <h2 className="font-display text-4xl font-bold">Direct line</h2>
            <div className="mt-8 grid gap-4 text-white/70">
              <a className="flex items-center gap-3 transition hover:text-acid" href={`mailto:${site.email}`}>
                <Mail className="h-5 w-5" /> {site.email}
              </a>
              <a className="flex items-center gap-3 transition hover:text-acid" href={`tel:${site.phone.replace(/\D/g, "")}`}>
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>
          <form className="grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 md:p-7">
            {["Name", "Email", "Company", "Project budget"].map((label) => (
              <label key={label} className="grid gap-2 text-sm text-white/55">
                {label}
                <input className="rounded-[8px] border border-white/10 bg-carbon px-4 py-4 text-white outline-none transition focus:border-acid" />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-white/55">
              What should we build?
              <textarea className="min-h-40 rounded-[8px] border border-white/10 bg-carbon px-4 py-4 text-white outline-none transition focus:border-acid" />
            </label>
            <button className="rounded-full bg-acid px-6 py-4 font-semibold text-carbon transition hover:bg-white" type="submit">
              Send project signal
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
