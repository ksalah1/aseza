"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function CTABanner() {
  const t = useTranslations("cta");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary text-background"
    >
      {/* Gold accent elements */}
      <div className="hero-glow absolute inset-0" aria-hidden />
      <span
        className="absolute -end-16 -top-16 size-56 rounded-full bg-accent/15 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink(`أريد تحديد المسار المناسب لنشاط لتسجيل شركة في العقبة
وصف النشاط:`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#1DA851] sm:w-auto"
            onClick={() => trackWhatsAppClick({ location: 'section_cta_banner', ctaText: t("whatsapp"), hasPrefill: true })}
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("whatsapp")}
          </a>
        </div>
        <Link
          href="/register-business-in-aseza"
          className="mt-4 inline-block text-sm text-primary-200 hover:text-white"
        >
          {t("secondary")} ←
        </Link>
      </div>
    </section>
  );
}
