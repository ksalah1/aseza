import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Hero,
  AudiencePaths,
  TrustAndTransparency,
  AqabaStats,
  FinalCta,
} from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

async function buildBusinessServiceSchema(locale: string) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const isAr = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: isAr ? "ASEZA.co" : "ASEZA.co",
    alternateName: isAr ? "خدمة استشارية لتسجيل الشركات في العقبة" : "ASEZA company registration support",
    legalName: "ASEZA.co",
    description: isAr
      ? "خدمة استشارية لتسجيل وتجهيز الشركات في منطقة العقبة الاقتصادية الخاصة (ASEZA)، الأردن."
      : t("description"),
    url: `${siteConfig.url}/ar`,
    inLanguage: "ar",
    founder: {
      "@type": "Organization",
      name: "ASEZA.co",
    },
    serviceType: isAr
      ? [
          "تسجيل شركات ASEZA",
          "تسجيل مستثمرين أجانب",
          "تسجيل شركات استيراد وتصدير",
          "تحديد مسار الأنشطة الاقتصادية",
        ]
      : "Company incorporation in the Aqaba Special Economic Zone",
    areaServed: {
      "@type": "Place",
      name: isAr ? "منطقة العقبة الاقتصادية الخاصة، الأردن" : "Aqaba Special Economic Zone, Jordan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneTel,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
      contactOption: "WhatsApp",
    },
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetEn,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "JOD",
      description: isAr
        ? "باقة تأسيس شاملة. تواصل معنا عبر واتساب للاستفسار عن الأسعار."
        : "All-inclusive incorporation package. Contact us via WhatsApp for pricing.",
    },
    sameAs: [siteConfig.firm.parentUrl],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const businessServiceSchema = await buildBusinessServiceSchema(locale);

  return (
    <>
      {/* 1 */}
      <Hero />
      {/* 2 */}
      <AudiencePaths />
      {/* 3 */}
      <AqabaStats />
      {/* 4 */}
      <TrustAndTransparency compact />
      {/* 5 */}
      <FinalCta />
      <JsonLd data={businessServiceSchema} />
    </>
  );
}
