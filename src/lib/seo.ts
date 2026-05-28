import type { Metadata } from "next";
import { siteConfig, firmName } from "@/lib/site";

const SITE_URL = siteConfig.url;
// Placeholder social-share image (1200×630). Replace with a real asset.
const OG_IMAGE = `${SITE_URL}/og-image.webp`;

export interface PageMetaOptions {
  locale: string;
  /** Path after the locale, with a leading slash. Use "" for the homepage. */
  path: string;
  title: string;
  description: string;
  /** "website" (default) or "article" for blog posts. */
  type?: "website" | "article";
  /** ISO publish date — only used for articles. */
  publishedTime?: string;
}

export interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

/**
 * Build consistent per-page metadata: canonical URL, hreflang alternates,
 * Open Graph (for Meta Ads sharing), and Twitter Card tags.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  publishedTime,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  // Surface the legal entity in every title and link preview so the snippet
  // itself never reads as the official ASEZA authority.
  const firm = firmName(locale);
  const fullTitle = `${title} | ${firm}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        // Arabic alternate = same path in Arabic locale.
        ar: `${SITE_URL}/ar${path}`,
        // English only has a homepage — always point there.
        en: `${SITE_URL}/en`,
        // x-default = Arabic homepage (primary language of the site).
        "x-default": `${SITE_URL}/ar`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: firm,
      locale: locale === "ar" ? "ar_JO" : "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

/** Build a schema.org BreadcrumbList object for JSON-LD. */
export function getBreadcrumbSchema(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
