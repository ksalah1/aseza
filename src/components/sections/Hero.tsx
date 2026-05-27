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
  const td = useTranslations("disclaimer");
  const isAr = useLocale() === "ar";

  const trustBadges = isAr
    ? ["محامية مرخّصة", "أتعاب واضحة", "مراجعة النشاط قبل البدء", "ليست جهة حكومية"]
    : (t.raw("trustSignals") as string[]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-teal-900 text-background">
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="hero-glow absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-24">
        <div className="text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold text-accent-50 md:text-sm">
            <Sparkles className="size-4" aria-hidden />
            {isAr ? "بوابة قانونية خاصة للمستثمرين في العقبة" : t("badge")}
          </span>

          <h1 className="mt-5 max-w-xl text-balance text-3xl font-bold leading-tight md:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-primary-100 md:text-xl">
            {isAr
              ? "مراجعة قانونية قبل التسجيل، توضيح للوثائق والمتطلبات، ومتابعة منظمة مع فصل واضح بين دورنا وقرار الجهة المختصة."
              : t("subtitle")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {trustBadges.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs text-primary-100 md:text-sm"
              >
                {signal}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-xs italic leading-relaxed text-primary-200">
            {td("short")}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" icon={<MessageCircle className="size-5" />}>
                {t("ctaPrimary")}
              </Button>
            </a>
            <Link href="/register-business-in-aseza">
              <Button variant="outline">{t("ctaSecondary")}</Button>
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
