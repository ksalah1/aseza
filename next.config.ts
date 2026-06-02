import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    // NOTE: 'unsafe-inline' and 'unsafe-eval' are required by Next.js App Router.
    // Harden to nonce-based CSP per https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://wa.me https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
    ].join("; "),
  },
  {
    // Allow popups needed for WhatsApp web opening in a new tab.
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
];

const nextConfig: NextConfig = {
  // Allow MDX files to be treated as pages/content for the blog.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      // FIX 1: permanent 301 redirect so crawlers don't re-check the root path.
      {
        source: "/",
        destination: "/ar",
        permanent: true,
      },
      {
        source: "/ar/blog",
        destination: "/ar/legal-references",
        permanent: true,
      },
      // Consolidate duplicate privacy route into /privacy-policy.
      {
        source: "/:locale(ar|en)/privacy",
        destination: "/:locale/privacy-policy",
        permanent: true,
      },
      // Removed /contact route — WhatsApp is the contact channel; send old links home.
      {
        source: "/:locale(ar|en)/contact",
        destination: "/:locale",
        permanent: true,
      },
      // Removed /documents-checklists — superseded by the registration checklist page.
      {
        source: "/:locale(ar|en)/documents-checklists",
        destination: "/:locale/aseza-registration-checklist",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // FIX 6: long-cache headers for static well-known files.
      {
        source: "/robots.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
      {
        source: "/manifest.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default withNextIntl(withMDX(nextConfig));
