"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useLocale } from "next-intl";

export function FinalCta() {
  const t = useTranslations("finalCta");
  const locale = useLocale();
  const isAr = locale === "ar";
  const message = isAr
    ? `مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟`
    : "Hello, I want to register a company in ASEZA. Activity: New or existing company? Foreign partners? Import/export, services, or manufacturing?";

  return (
    <section className="bg-primary text-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-primary-100">{t("subtitle")}</p>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-accent-500"
          onClick={() => trackWhatsAppClick({ location: "final_cta", ctaText: t("button"), hasPrefill: true, locale })}
        >
          <MessageCircle className="size-5" />
          {t("button")}
        </a>
        <p className="mt-8 text-xs text-primary-300">{t("disclaimer")}</p>
      </div>
    </section>
  );
}
