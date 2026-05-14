import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/layout/providers";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Software Company`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} | Premium Software Company`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium Software Company`,
    description: site.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>
        <Providers>
          <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:text-carbon" href="#main">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <div className="noise" aria-hidden="true" />
        </Providers>
      </body>
    </html>
  );
}
