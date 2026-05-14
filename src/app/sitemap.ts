import type { MetadataRoute } from "next";
import { navItems, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: new Date("2026-05-14"),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
