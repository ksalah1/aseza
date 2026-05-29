import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Hero,
  Process,
  OperatingPermits,
  InvestorPositioning,
  FAQ,
  AudiencePaths,
  TrustAndTransparency,
} from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig, firmName } from "@/lib/site";

async function buildLegalServiceSchema(locale: string) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const isAr = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: isAr ? "شركة البركات للمحاماة" : firmName(locale),
    alternateName: isAr ? "Al-Barakat Law Firm" : "شركة البركات للمحاماة",
    legalName: siteConfig.firm.legalName,
    description: isAr
      ? "خدمة قانونية خاصة متخصصة في تسجيل الشركات في منطقة العقبة الاقتصادية الخاصة (ASEZA)، الأردن."
      : t("description"),
    url: `${siteConfig.url}/ar`,
    inLanguage: "ar",
    founder: {
      "@type": "Person",
      name: isAr ? "نور بركات" : "Nour Barakat",
      jobTitle: isAr ? "محامية مرخصة" : "Attorney at Law",
      memberOf: {
        "@type": "Organization",
        name: "نقابة المحامين الأردنيين",
        identifier: "16872",
      },
    },
    serviceType: isAr
      ? [
          "تسجيل شركات ASEZA",
          "تسجيل مستثمرين أجانب",
          "تسجيل شركات استيراد وتصدير",
          "مراجعة الأنشطة الاقتصادية",
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

  const legalServiceSchema = await buildLegalServiceSchema(locale);

  return (
    <>
      <Hero />
      <AudiencePaths />
      <InvestorPositioning />
      <Process />
      <OperatingPermits />
      <TrustAndTransparency />
      <FAQ />
      <JsonLd data={legalServiceSchema} />
    </>
  );
}
