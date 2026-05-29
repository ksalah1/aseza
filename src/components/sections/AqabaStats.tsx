"use client";

import { useLocale } from "next-intl";
import { Section } from "@/components/ui";

export function AqabaStats() {
  const isAr = useLocale() === "ar";

  const stats = isAr
    ? [
        ["5%", "ضريبة دخل على الدخل المؤهَّل (بشروط تشغيلية محددة)", ""],
        ["+12", "اتفاقية تجارة حرة يستفيد منها المستثمر عبر الأردن", "(US, EU, Arab League, EFTA, Turkey, Canada, Singapore)"],
        ["4–6 أيام", "الوقت المتوقع لاستكمال إجراءات تسجيل الشركة", ""],
        ["100%", "ملكية أجنبية مسموحة في أغلب الأنشطة المدرجة", ""],
        ["ميناء + مطار", "البنية اللوجستية: الميناء البحري ومطار الملك الحسين الدولي", ""],
      ]
    : [
        ["5%", "Income tax on qualifying income (subject to specific operating conditions)", ""],
        ["12+", "Free trade agreements available to investors through Jordan", "(US, EU, Arab League, EFTA, Turkey, Canada, Singapore)"],
        ["4–6 days", "Expected time to complete company registration procedures", ""],
        ["100%", "Foreign ownership permitted in most listed activities", ""],
        ["Port + Airport", "Logistics infrastructure: seaport and King Hussein International Airport", ""],
      ];

  const footnote = isAr
    ? "* تعتمد على استيفاء 6 شروط تشغيلية — المادة 7 من نظام ضريبة الدخل رقم 53/2005. البنوك والتأمين والنقل البري مستثناة."
    : "* Subject to meeting 6 operating conditions — Article 7, Income Tax Regulation No. 53/2005. Banks, insurance, and land transport are excluded.";

  return (
    <Section id="aqaba-stats" background="primary" width="wide" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          {isAr ? "العقبة في أرقام" : "Aqaba in Numbers"}
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
        {stats.map(([value, label, note], i) => (
          <div
            key={value}
            className={`${i === 4 ? "col-span-2 md:col-span-1 " : ""}flex flex-col items-center rounded-2xl border border-white/10 bg-primary-800/50 p-5 text-center`}
          >
            <div className="mb-3 h-0.5 w-8 rounded-full bg-accent mx-auto" aria-hidden="true" />
            <span className="text-4xl font-bold text-accent md:text-5xl">{value}</span>
            <span className="mt-2 text-sm leading-snug text-background/80">{label}</span>
            {note && <span className="mt-1 text-xs text-background/50">{note}</span>}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-4xl text-center text-xs text-background/50">
        {footnote}
      </p>
    </Section>
  );
}
