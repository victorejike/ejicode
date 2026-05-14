import type { Metadata } from "next";
import { site } from "@/data/site";

export function createMetadata({
  title,
  description,
  path = "/"
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | Premium Software Company`;
  const pageDescription = description ?? site.description;
  const url = new URL(path, site.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription
    }
  };
}
