"use client";

import { useLocale } from "next-intl";
import { Section } from "@/components/ui";

export function AqabaComparison() {
  const isAr = useLocale() === "ar";

  const title = isAr ? "لماذا العقبة وليس منطقة حرة أخرى؟" : "Why Aqaba and not another free zone?";

  const headers = isAr
    ? ["العامل", "العقبة / ASEZA", "جبل علي / دبي", "KAEC / السعودية"]
    : ["Factor", "Aqaba / ASEZA", "Jebel Ali / Dubai", "KAEC / Saudi Arabia"];

  const rows = isAr
    ? [
        ["ضريبة الدخل على الأنشطة المؤهَّلة", "~5% (بشروط)", "9% (ضريبة شركات الإمارات)", "20%"],
        ["الملكية الأجنبية", "100% في أغلب الأنشطة", "100% (المنطقة الحرة)", "مرتبطة بالقطاع"],
        ["الوصول إلى البحر الأحمر", "✅ مباشر", "❌ (خليج عُمان)", "✅"],
        ["اتفاقية تجارة حرة مع الولايات المتحدة", "✅", "❌", "❌"],
        ["اتفاقية تجارة حرة مع الاتحاد الأوروبي", "✅", "❌", "❌"],
        ["مدة التأسيس المتوقعة", "4–6 أيام", "1–3 أسابيع", "متغيرة"],
      ]
    : [
        ["Income tax on qualifying activities", "~5% (subject to conditions)", "9% (UAE corporate tax)", "20%"],
        ["Foreign ownership", "100% in most activities", "100% (free zone)", "Sector-dependent"],
        ["Red Sea access", "✅ Direct", "❌ (Gulf of Oman)", "✅"],
        ["Free trade agreement with the US", "✅", "❌", "❌"],
        ["Free trade agreement with the EU", "✅", "❌", "❌"],
        ["Expected formation time", "4–6 days", "1–3 weeks", "Variable"],
      ];

  const swipeHint = isAr ? "← اسحب يساراً لرؤية المقارنة كاملة →" : "← Swipe left to see full comparison →";
  const footnote = isAr
    ? "* المقارنة تقريبية لأغراض توجيهية فقط. التحقق من التفاصيل ضروري لكل حالة."
    : "* Comparison is approximate for guidance only. Verification is required for each individual case.";

  return (
    <Section width="wide" background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      </div>
      <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl border border-primary-100 shadow-sm">
        <div className="absolute start-0 top-0 z-10 h-full w-8 pointer-events-none bg-gradient-to-e from-white/80 to-transparent md:hidden" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-background">
                <th className="px-4 py-3 text-start font-semibold">{headers[0]}</th>
                <th className="px-4 py-3 text-center font-semibold bg-accent/20 text-accent border-b-2 border-accent">{headers[1]}</th>
                <th className="px-4 py-3 text-center font-semibold">{headers[2]}</th>
                <th className="px-4 py-3 text-center font-semibold">{headers[3]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary-100">
              {rows.map((row, i) => (
                <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}>
                  <td className="px-4 py-3 font-medium text-primary">{row[0]}</td>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className={`px-4 py-3 text-center text-primary-700${j === 0 ? " font-semibold" : ""}`}>
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
      </div>
      <p className="mt-2 text-center text-xs text-primary-400 md:hidden">{swipeHint}</p>
      <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-primary-400">{footnote}</p>
    </Section>
  );
}
