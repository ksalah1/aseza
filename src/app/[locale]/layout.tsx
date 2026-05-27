import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Analytics } from "@/components/Analytics";
import { siteConfig, firmName } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "../globals.css";

const SITE_URL = siteConfig.url;

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-latin",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2A4A",
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    manifest: "/manifest.json",
    ...buildMetadata({
      locale,
      path: "",
      title: t("title"),
      description: t("description"),
    }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate the incoming locale segment.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale as Locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  // JSON-LD Organization schema for rich search results.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: firmName(locale),
    legalName: siteConfig.firm.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Company formation and registration services in the Aqaba Special Economic Zone (ASEZA), Jordan.",
    email: siteConfig.email,
    sameAs: [siteConfig.firm.parentUrl],
  };

  // JSON-LD LocalBusiness schema.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: firmName(locale),
    legalName: siteConfig.firm.legalName,
    description:
      "Professional company registration services in the Aqaba Special Economic Zone (ASEZA), Jordan.",
    url: `${SITE_URL}/${locale}`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    serviceType: "Business Registration",
    image: `${SITE_URL}/og-image.png`,
    priceRange: "JOD",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetEn,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: "JO",
    sameAs: [siteConfig.firm.parentUrl],
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(ibmPlexSansArabic.variable, inter.variable)}
    >
      <body className={locale === "ar" ? "font-arabic" : "font-latin"}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-24 md:pb-0">{children}</main>
            <Footer />
            <MobileStickyCTA />
          </div>
        </NextIntlClientProvider>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
