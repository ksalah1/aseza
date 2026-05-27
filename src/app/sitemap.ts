import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/mdx";

const SITE_URL = siteConfig.url;

// Static routes (path after the locale) with their change priority.
const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/process", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/register-business-in-aseza", priority: 0.9 },
  { path: "/why-aqaba", priority: 0.8 },
  { path: "/import-export-company-aseza", priority: 0.8 },
  { path: "/foreign-investors", priority: 0.8 },
  { path: "/tax-customs-aqaba", priority: 0.8 },
  { path: "/restricted-prohibited-activities-aseza", priority: 0.8 },
  { path: "/existing-aseza-companies", priority: 0.8 },
  { path: "/licensing-after-registration", priority: 0.8 },
  { path: "/industrial-logistics-investment-aqaba", priority: 0.7 },
  { path: "/tourism-investment-aqaba", priority: 0.7 },
  { path: "/real-estate-development-aqaba", priority: 0.7 },
  { path: "/labor-visas-aqaba", priority: 0.7 },
  { path: "/documents-checklists", priority: 0.8 },
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

  // Static pages — one entry per locale, with hreflang alternates.
  for (const { path, priority } of STATIC_PATHS) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority,
        alternates: { languages: languageAlternates(path) },
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
