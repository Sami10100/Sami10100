import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SXO Master – WordPress SXO, SEO & AI Search Optimization Plugin | SitesBrand",
  description:
    "SXO Master by SitesBrand helps WordPress websites improve SEO, AI visibility, user experience, content clarity, and conversion readiness with actionable website audit insights.",
  keywords: [
    "SXO Master",
    "SXO plugin",
    "WordPress SEO plugin",
    "Search Experience Optimization",
    "AI Search Optimization plugin",
    "GEO plugin",
    "AIO plugin",
    "website audit plugin",
    "WordPress audit tool",
    "SEO UX plugin",
    "conversion optimization plugin",
  ],
  authors: [{ name: "SitesBrand", url: "https://sitesbrand.com" }],
  creator: "SitesBrand",
  publisher: "SitesBrand",
  openGraph: {
    title: "SXO Master – WordPress SXO, SEO & AI Search Optimization Plugin",
    description:
      "Optimize for Search, AI, and Real User Experience. SXO Master by SitesBrand helps WordPress websites improve SEO, AI visibility, UX, content clarity, and conversion readiness.",
    url: "https://sitesbrand.com",
    siteName: "SitesBrand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SXO Master – WordPress SXO, SEO & AI Search Optimization Plugin",
    description:
      "Optimize for Search, AI, and Real User Experience. SXO Master by SitesBrand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
