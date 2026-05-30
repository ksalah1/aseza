"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircle,
  FileCheck2,
  MapPinned,
  MessageCircle,
  Ship,
  Sparkles,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export function Hero() {
  const t = useTranslations("hero");
  const isAr = useLocale() === "ar";
  const [trustOpen, setTrustOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-teal-900 text-background">
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="hero-glow absolute inset-0" aria-hidden />
      {/* TODO: Place aerial photo of Port of Aqaba at /public/images/aqaba-port.jpg to enable this layer */}
      {/* <div
        className="absolute inset-0 opacity-10 mix-blend-luminosity"
        style={{ backgroundImage: 'url(/images/aqaba-port.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        aria-hidden="true"
      /> */}

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center md:py-24">
        <div className="text-start">
          {isAr ? (
            <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1.5 text-xs font-semibold text-accent">
              للمستثمرين الأردنيين والأجانب · تجارة، لوجستيات، استيراد وتصدير
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold text-accent-50 md:text-sm">
              <Sparkles className="size-4" aria-hidden />
              {t("badge")}
            </span>
          )}

          <h1 className="mt-5 max-w-xl text-balance text-3xl font-bold leading-tight md:text-5xl">
            {isAr
              ? "سجّل شركتك في منطقة العقبة الاقتصادية الخاصة"
              : t("title")}
          </h1>

          {isAr && (
            <p className="mt-2 text-xs text-primary-300">
              ⬦ خدمة البركات للمحاماة
            </p>
          )}

          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-primary-100 md:text-xl">
            {isAr
              ? "نتحقق من نشاطك، نجهّز وثائقك، ونتابع ملفك مع سلطة العقبة حتى تستلم شهادة التسجيل — بأتعاب ثابتة وشفافة."
              : t("subtitle")}
          </p>

          {isAr && (
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-900 text-xs font-bold text-accent"
                aria-hidden
              >
                ن.ب
              </div>
              <div>
                <p className="text-sm font-bold text-white">نور بركات</p>
                <p className="text-xs text-primary-300">
                  محامية مرخّصة · نقابة المحامين الأردنيين · عضوية رقم 16872
                </p>
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {isAr ? (
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-500 md:h-12 md:text-base"
                onClick={() => trackWhatsAppClick({ location: 'hero_primary', ctaText: 'ابدأ مراجعة نشاطك — مجاناً', hasPrefill: false, locale: 'ar' })}
              >
                <MessageCircle className="size-5" aria-hidden />
                ابدأ مراجعة نشاطك — مجاناً
              </a>
            ) : (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick({ location: 'hero_primary', ctaText: t("ctaPrimary"), hasPrefill: false, locale: 'en' })}>
                <Button variant="whatsapp" icon={<MessageCircle className="size-5" />}>
                  {t("ctaPrimary")}
                </Button>
              </a>
            )}
            <Link href="/register-business-in-aseza">
              <Button variant="outline">
                {isAr ? "اعرف خطوات التسجيل من البداية" : t("ctaSecondary")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/8 p-6 shadow-2xl backdrop-blur-sm">
          <button
            type="button"
            className="flex w-full items-center justify-between md:cursor-default"
            onClick={() => setTrustOpen(!trustOpen)}
            aria-expanded={trustOpen}
          >
            <p className="text-sm font-semibold text-accent-100">{isAr ? "ما نقدمه لك" : "Investor path"}</p>
            <svg
              className={`size-4 text-accent transition-transform md:hidden${trustOpen ? " rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div className={`${trustOpen ? "block" : "hidden"} md:block`}>
          <div className="mt-4 space-y-3 text-sm text-primary-100">
            {[
              [MapPinned, isAr ? "محامية مرخّصة · عضو نقابة المحامين رقم 16872" : "Aqaba → Red Sea → regional trade"],
              [FileCheck2, isAr ? "أتعاب ثابتة قبل البدء — لا مفاجآت" : "Activity and documents review before filing"],
              [Ship, isAr ? "نراجع نشاطك مجاناً — قبل أي رسوم حكومية" : "Logistics, trade, and tourism-focused guidance"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-xl border border-white/15 bg-primary-900/30 p-3">
                <Icon className="size-4 text-accent" aria-hidden />
                <span>{label as string}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs text-primary-200">
            <CheckCircle className="mt-0.5 size-4 text-accent" aria-hidden />
            {t("reassurance")}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
