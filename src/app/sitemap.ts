import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/mdx";

const SITE_URL = siteConfig.url;

// Static routes (path after the locale) with their change priority.
// Paths marked arOnly are excluded from the English locale (no EN content for that path).
const STATIC_PATHS: { path: string; priority: number; arOnly?: boolean }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 1 },
  { path: "/faq", priority: 1 },
  { path: "/register-business-in-aseza", priority: 1 },
  { path: "/foreign-investors", priority: 1 },
  { path: "/why-aqaba", priority: 0.8, arOnly: true },
  { path: "/tax-customs-aqaba", priority: 0.8, arOnly: true },
  { path: "/import-export-company-aseza", priority: 0.8, arOnly: true },
  { path: "/restricted-prohibited-activities-aseza", priority: 0.8, arOnly: true },
  { path: "/existing-aseza-companies", priority: 0.8, arOnly: true },
  { path: "/licensing-after-registration", priority: 0.8, arOnly: true },
  { path: "/aseza-registration-fees", priority: 0.8, arOnly: true },
  { path: "/aseza-registration-checklist", priority: 0.8, arOnly: true },
  { path: "/legal-references", priority: 0.7, arOnly: true },
  { path: "/about", priority: 0.7, arOnly: true },
  { path: "/process", priority: 0.7, arOnly: true },
  { path: "/industrial-logistics-investment-aqaba", priority: 0.7, arOnly: true },
  { path: "/tourism-investment-aqaba", priority: 0.7, arOnly: true },
  { path: "/real-estate-development-aqaba", priority: 0.7, arOnly: true },
  { path: "/labor-visas-aqaba", priority: 0.7, arOnly: true },
  { path: "/permitted-activities-list", priority: 0.8, arOnly: true },
  { path: "/labor-work-permits-aseza", priority: 0.8, arOnly: true },
  { path: "/annual-renewal-aseza", priority: 0.8, arOnly: true },
];

/** hreflang alternates for a given path across all locales. */
function languageAlternates(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — ar-only paths appear once (Arabic locale only).
  // Shared paths (homepage, /services, /faq, /foreign-investors, /register-…)
  // appear for both locales.
  for (const { path, priority, arOnly } of STATIC_PATHS) {
    const locales = arOnly ? (["ar"] as const) : routing.locales;
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority,
        alternates: {
          languages: {
            ar: `${SITE_URL}/ar${path}`,
            // English alternate always points to /en (only homepage exists).
            en: `${SITE_URL}/en`,
          },
        },
      });
    }
  }

  // Blog posts — lastModified from each post's own date. Slugs differ per
  // locale (they aren't 1:1 translations), so no cross-locale alternates here.
  for (const locale of routing.locales) {
    for (const post of getAllPosts(locale)) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
