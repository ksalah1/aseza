import { useLocale, useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";


export function InvestorPositioning() {
  const t = useTranslations("investor");
  const isAr = useLocale() === "ar";
  const benefitsRaw = t.raw("benefits.cards");
  const sectorsRaw = t.raw("suitable.sectors");
  const factsRaw = t.raw("snapshot.items");
  const activityCardsRaw = t.has("activityCheck.cards") ? t.raw("activityCheck.cards") : [];
  const legalAlertsRaw = t.has("legalAlerts.items") ? t.raw("legalAlerts.items") : [];

  const benefits = Array.isArray(benefitsRaw) ? (benefitsRaw as { title: string; text: string }[]) : [];
  const sectors = Array.isArray(sectorsRaw) ? (sectorsRaw as string[]) : [];
  const facts = Array.isArray(factsRaw) ? (factsRaw as string[]) : [];
  const activityCards = Array.isArray(activityCardsRaw) ? (activityCardsRaw as { title: string; text: string }[]) : [];
  const legalAlerts = Array.isArray(legalAlertsRaw) ? (legalAlertsRaw as string[]) : [];

  return (
    <>
      {isAr ? (
        <>
          <Section id="why-aqaba" background="primary" width="wide" className="scroll-mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">مزايا العقبة بالأرقام</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
              {[
                ["5%", "ضريبة دخل على الدخل المؤهَّل (بشروط تشغيلية محددة)", ""],
                ["12+", "اتفاقية تجارة حرة يستفيد منها المستثمر عبر الأردن", "(US, EU, Arab League, EFTA, Turkey, Canada, Singapore)"],
                ["4–6 أيام", "الوقت المتوقع لاستكمال إجراءات تسجيل الشركة", ""],
                ["100%", "ملكية أجنبية مسموحة في أغلب الأنشطة المدرجة", ""],
                ["ميناء + مطار", "البنية اللوجستية: الميناء البحري ومطار الملك الحسين الدولي", ""],
              ].map(([value, label, note]) => (
                <div key={value} className="flex flex-col items-center rounded-2xl border border-white/10 bg-primary-800/50 p-5 text-center">
                  <span className="text-3xl font-bold text-accent md:text-4xl">{value}</span>
                  <span className="mt-2 text-sm leading-snug text-background/80">{label}</span>
                  {note && <span className="mt-1 text-xs text-background/50">{note}</span>}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-xs text-background/50">
              * تعتمد على استيفاء 6 شروط تشغيلية — المادة 7 من نظام ضريبة الدخل رقم 53/2005. البنوك والتأمين والنقل البري مستثناة.
            </p>
          </Section>

          <Section width="wide">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">استثمارك في العقبة يفتح أبواب 12+ سوقاً دولياً</h2>
              <p className="mt-4 text-lg text-primary-500">الأردن طرف في اتفاقيات تجارة حرة مع أسواق رئيسية — مما يجعل العقبة نقطة إعادة تصدير استراتيجية</p>
            </div>
            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              {[
                ["الولايات المتحدة", "🇺🇸"],
                ["الاتحاد الأوروبي", "🇪🇺"],
                ["دول الجامعة العربية", "🌍"],
                ["تركيا", "🇹🇷"],
                ["كندا", "🇨🇦"],
                ["سنغافورة", "🇸🇬"],
                ["المملكة المتحدة", "🇬🇧"],
                ["رابطة التجارة الحرة الأوروبية (EFTA)", ""],
              ].map(([name, flag]) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  {flag && <span aria-hidden>{flag}</span>}
                  {name}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-primary-500">
              يُنصح بمراجعة شروط كل اتفاقية ومدى انطباقها على نشاطك مع مستشار قانوني.
            </p>
            <div className="mt-6 text-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-500"
              >
                <MessageCircle className="size-5" aria-hidden />
                اعرف كيف يؤثر ذلك على نشاطك
              </a>
            </div>
          </Section>

          <Section width="wide" background="muted">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">لماذا العقبة وليس منطقة حرة أخرى؟</h2>
            </div>
            <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-primary-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-background">
                    <th className="px-4 py-3 text-start font-semibold">العامل</th>
                    <th className="px-4 py-3 text-center font-semibold">العقبة / ASEZA</th>
                    <th className="px-4 py-3 text-center font-semibold">جبل علي / دبي</th>
                    <th className="px-4 py-3 text-center font-semibold">KAEC / السعودية</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ضريبة الدخل على الأنشطة المؤهَّلة", "~5% (بشروط)", "9% (ضريبة شركات الإمارات)", "20%"],
                    ["الملكية الأجنبية", "100% في أغلب الأنشطة", "100% (المنطقة الحرة)", "مرتبطة بالقطاع"],
                    ["الوصول إلى البحر الأحمر", "✅ مباشر", "❌ (خليج عُمان)", "✅"],
                    ["اتفاقية تجارة حرة مع الولايات المتحدة", "✅", "❌", "❌"],
                    ["اتفاقية تجارة حرة مع الاتحاد الأوروبي", "✅", "❌", "❌"],
                    ["مدة التأسيس المتوقعة", "4–6 أيام", "1–3 أسابيع", "متغيرة"],
                  ].map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}>
                      <td className="px-4 py-3 font-medium text-primary">{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-center text-primary-700">
                          {cell.startsWith("✅") ? (
                            <span className="font-semibold text-accent">{cell.replace("✅", "✓ ")}</span>
                          ) : cell.startsWith("❌") ? (
                            <span className="text-primary-400">{cell.replace("❌", "✗ ")}</span>
                          ) : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-primary-400">
              * المقارنة تقريبية لأغراض توجيهية فقط. التحقق من التفاصيل ضروري لكل حالة.
            </p>
          </Section>
        </>
      ) : (
        <Section id="why-aqaba" width="wide" className="scroll-mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">{t("benefits.title")}</h2>
            <p className="mt-4 text-lg text-primary-500">{t("benefits.subtitle")}</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((card) => (
              <Card key={card.title} hoverable>
                <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-600">{card.text}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section width="wide" background="muted">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("suitable.title")}</h2>
            <ul className="mt-6 space-y-3">
              {sectors.map((sector) => (
                <li key={sector} className="flex items-start gap-3 text-primary-600">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-primary-500">{t("suitable.note")}</p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("snapshot.title")}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact} className="rounded-xl border border-primary-100 bg-primary-50 p-4 text-sm font-medium text-primary-700">
                  {fact}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-500">{t("snapshot.note")}</p>
          </Card>
        </div>
      </Section>



      <Section width="wide" background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t.has("activityCheck.title") ? t("activityCheck.title") : "Activity compliance check"}
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
          {activityCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-600">{card.text}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-sm text-primary-500">
          {t.has("activityCheck.note")
            ? t("activityCheck.note")
            : "We review activity eligibility before filing and do not guarantee approval."}
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-primary">{t.has("taxTitle") ? t("taxTitle") : "Tax notes"}</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              {t.has("taxNote")
                ? t("taxNote")
                : "Tax obligations depend on activity, transaction profile, and applicable instructions."}
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary">{t.has("customsTitle") ? t("customsTitle") : "Customs notes"}</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              {t.has("customsNote")
                ? t("customsNote")
                : "Customs treatment depends on goods type, movement, and applicable legal requirements."}
            </p>
          </Card>
        </div>
      </Section>


      <Section width="wide">
        <Card>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            {t.has("legalAlerts.title") ? t("legalAlerts.title") : "Important legal notices"}
          </h2>
          <ul className="mt-5 space-y-3">
            {legalAlerts.map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary-600">
                <span className="mt-2 size-1.5 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
      <Section width="narrow" background="muted">
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("international.title")}</h2>
          <p className="mt-4 leading-relaxed text-primary-600">{t("international.body")}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("international.cta")}
          </a>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              {t("ctaPrimary")}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
}
