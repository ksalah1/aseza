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
    "@type": "LegalService",
    name: firmName(locale),
    legalName: siteConfig.firm.legalName,
    description: t("description"),
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale,
    serviceType: isAr
      ? "تأسيس الشركات في منطقة العقبة الاقتصادية الخاصة"
      : "Company incorporation in the Aqaba Special Economic Zone",
    areaServed: [
      { "@type": "Country", name: "Jordan" },
      { "@type": "Place", name: "Aqaba Special Economic Zone" },
    ],
    provider: {
      "@type": "Attorney",
      name: isAr ? "نور بركات" : "Nour Barakat",
      jobTitle: isAr ? "محامية" : "Attorney at Law",
      memberOf: {
        "@type": "Organization",
        name: "Jordanian Bar Association",
        identifier: "16872",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "JOD",
      description: isAr
        ? "باقة تأسيس شاملة. تواصل معنا عبر واتساب للاستفسار عن الأسعار."
        : "All-inclusive incorporation package. Contact us via WhatsApp for pricing.",
    },
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetEn,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
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
