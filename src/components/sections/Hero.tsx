import { useLocale, useTranslations } from "next-intl";
import {
  CheckCircle,
  FileCheck2,
  MapPinned,
  MessageCircle,
  Scale,
  Ship,
  Sparkles,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export function Hero() {
  const t = useTranslations("hero");
  const isAr = useLocale() === "ar";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-teal-900 text-background">
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="hero-glow absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-24">
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
              ? "سجّل شركتك في منطقة العقبة الاقتصادية الخاصة — بمراجعة قانونية تسبق التقديم"
              : t("title")}
          </h1>

          {isAr && (
            <p className="mt-2 text-xs text-primary-300">
              خدمة من البركات للمحاماة · ليست الموقع الرسمي لسلطة العقبة
            </p>
          )}

          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-primary-100 md:text-xl">
            {isAr
              ? "نراجع نشاطك قبل التسجيل، نحضّر وثائقك، ونتابع معك حتى تستلم شهادة التأسيس — بأتعاب ثابتة وشفافية كاملة."
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
              >
                <MessageCircle className="size-5" aria-hidden />
                ابدأ مراجعة نشاطك مجاناً
              </a>
            ) : (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" icon={<MessageCircle className="size-5" />}>
                  {t("ctaPrimary")}
                </Button>
              </a>
            )}
            <Link href="/register-business-in-aseza">
              <Button variant="outline">
                {isAr ? "اعرف خطوات التسجيل" : t("ctaSecondary")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/8 p-6 shadow-2xl backdrop-blur-sm">
          <p className="text-sm font-semibold text-accent-100">{isAr ? "خارطة الطريق" : "Investor path"}</p>
          <div className="mt-4 space-y-3 text-sm text-primary-100">
            {[
              [MapPinned, isAr ? "العقبة ← البحر الأحمر ← الأسواق الإقليمية" : "Aqaba → Red Sea → regional trade"],
              [FileCheck2, isAr ? "مراجعة النشاط والوثائق قبل أي تقديم" : "Activity and documents review before filing"],
              [Ship, isAr ? "تركيز على قطاعات اللوجستيات والتجارة والسياحة" : "Logistics, trade, and tourism-focused guidance"],
              [Scale, isAr ? "خدمة قانونية خاصة دون تمثيل حكومي" : "Private legal service, not a government authority"],
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
    </section>
  );
}
