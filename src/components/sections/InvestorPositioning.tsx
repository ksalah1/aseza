"use client";

import { useLocale, useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";


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
              <h2 className="text-3xl font-bold md:text-4xl">العقبة في أرقام</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
              {[
                ["5%", "ضريبة دخل على الدخل المؤهَّل (بشروط تشغيلية محددة)", ""],
                ["+12", "اتفاقية تجارة حرة يستفيد منها المستثمر عبر الأردن", "(US, EU, Arab League, EFTA, Turkey, Canada, Singapore)"],
                ["4–6 أيام", "الوقت المتوقع لاستكمال إجراءات تسجيل الشركة", ""],
                ["100%", "ملكية أجنبية مسموحة في أغلب الأنشطة المدرجة", ""],
                ["ميناء + مطار", "البنية اللوجستية: الميناء البحري ومطار الملك الحسين الدولي", ""],
              ].map(([value, label, note], i) => (
                <div key={value} className={`${i === 4 ? "col-span-2 md:col-span-1 " : ""}flex flex-col items-center rounded-2xl border border-white/10 bg-primary-800/50 p-5 text-center`}>
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-accent mx-auto" aria-hidden="true" />
                  <span className="text-4xl font-bold text-accent md:text-5xl">{value}</span>
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
                ["EFTA", ""],
              ].map(([name, flag]) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  {flag && <span aria-hidden>{flag}</span>}
                  {name === "EFTA" ? (
                    <>
                      <span className="hidden sm:inline">رابطة التجارة الحرة الأوروبية </span>
                      <span className="sm:hidden">التجارة الحرة </span>
                      EFTA
                    </>
                  ) : name}
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
                onClick={() => trackWhatsAppClick({ location: 'section_investor_positioning', ctaText: 'استشارة مجانية — اعرف ما يعنيه هذا لنشاطك', hasPrefill: false })}
              >
                <MessageCircle className="size-5" aria-hidden />
                استشارة مجانية — اعرف ما يعنيه هذا لنشاطك
              </a>
            </div>
          </Section>

          <Section width="wide" background="muted">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">لماذا العقبة وليس منطقة حرة أخرى؟</h2>
            </div>
            <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl border border-primary-100 shadow-sm">
              <div className="absolute start-0 top-0 z-10 h-full w-8 pointer-events-none bg-gradient-to-e from-white/80 to-transparent md:hidden" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-background">
                    <th className="px-4 py-3 text-start font-semibold">العامل</th>
                    <th className="px-4 py-3 text-center font-semibold bg-accent/20 text-accent border-b-2 border-accent">العقبة / ASEZA</th>
                    <th className="px-4 py-3 text-center font-semibold">جبل علي / دبي</th>
                    <th className="px-4 py-3 text-center font-semibold">KAEC / السعودية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100">
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
            <p className="mt-2 text-center text-xs text-primary-400 md:hidden">
              ← اسحب يساراً لرؤية المقارنة كاملة →
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-primary-400">
              * المقارنة تقريبية لأغراض توجيهية فقط. التحقق من التفاصيل ضروري لكل حالة.
            </p>
          </Section>
        </>
      ) : (
        <>
          <Section id="why-aqaba" background="primary" width="wide" className="scroll-mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Aqaba in Numbers</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-5">
              {[
                ["5%", "Income tax on qualifying income (subject to specific operating conditions)", ""],
                ["12+", "Free trade agreements available to investors through Jordan", "(US, EU, Arab League, EFTA, Turkey, Canada, Singapore)"],
                ["4–6 days", "Expected time to complete company registration procedures", ""],
                ["100%", "Foreign ownership permitted in most listed activities", ""],
                ["Port + Airport", "Logistics infrastructure: seaport and King Hussein International Airport", ""],
              ].map(([value, label, note], i) => (
                <div key={value} className={`${i === 4 ? "col-span-2 md:col-span-1 " : ""}flex flex-col items-center rounded-2xl border border-white/10 bg-primary-800/50 p-5 text-center`}>
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-accent mx-auto" aria-hidden="true" />
                  <span className="text-4xl font-bold text-accent md:text-5xl">{value}</span>
                  <span className="mt-2 text-sm leading-snug text-background/80">{label}</span>
                  {note && <span className="mt-1 text-xs text-background/50">{note}</span>}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-xs text-background/50">
              * Subject to meeting 6 operating conditions — Article 7, Income Tax Regulation No. 53/2005. Banks, insurance, and land transport are excluded.
            </p>
          </Section>

          <Section width="wide">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">Your Aqaba investment opens access to 12+ international markets</h2>
              <p className="mt-4 text-lg text-primary-500">Jordan is party to free trade agreements with major markets — making Aqaba a strategic re-export hub</p>
            </div>
            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              {[
                ["United States", "🇺🇸"],
                ["European Union", "🇪🇺"],
                ["Arab League", "🌍"],
                ["Turkey", "🇹🇷"],
                ["Canada", "🇨🇦"],
                ["Singapore", "🇸🇬"],
                ["United Kingdom", "🇬🇧"],
                ["EFTA", ""],
              ].map(([name, flag]) => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  {flag && <span aria-hidden>{flag}</span>}
                  {name}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-primary-500">
              We recommend reviewing each agreement&apos;s terms and applicability to your activity with a legal advisor.
            </p>
            <div className="mt-6 text-center">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-500"
                onClick={() => trackWhatsAppClick({ location: 'section_investor_positioning', ctaText: 'Free consultation — find out what this means for your business', hasPrefill: false })}
              >
                <MessageCircle className="size-5" aria-hidden />
                Free consultation — find out what this means for your business
              </a>
            </div>
          </Section>

          <Section width="wide" background="muted">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">Why Aqaba and not another free zone?</h2>
            </div>
            <div className="relative mx-auto mt-10 max-w-5xl rounded-2xl border border-primary-100 shadow-sm">
              <div className="absolute start-0 top-0 z-10 h-full w-8 pointer-events-none bg-gradient-to-e from-white/80 to-transparent md:hidden" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-background">
                      <th className="px-4 py-3 text-start font-semibold">Factor</th>
                      <th className="px-4 py-3 text-center font-semibold bg-accent/20 text-accent border-b-2 border-accent">Aqaba / ASEZA</th>
                      <th className="px-4 py-3 text-center font-semibold">Jebel Ali / Dubai</th>
                      <th className="px-4 py-3 text-center font-semibold">KAEC / Saudi Arabia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-100">
                    {[
                      ["Income tax on qualifying activities", "~5% (subject to conditions)", "9% (UAE corporate tax)", "20%"],
                      ["Foreign ownership", "100% in most activities", "100% (free zone)", "Sector-dependent"],
                      ["Red Sea access", "✅ Direct", "❌ (Gulf of Oman)", "✅"],
                      ["Free trade agreement with the US", "✅", "❌", "❌"],
                      ["Free trade agreement with the EU", "✅", "❌", "❌"],
                      ["Expected formation time", "4–6 days", "1–3 weeks", "Variable"],
                    ].map((row, i) => (
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
            <p className="mt-2 text-center text-xs text-primary-400 md:hidden">
              ← Swipe left to see full comparison →
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-primary-400">
              * Comparison is approximate for guidance only. Verification is required for each individual case.
            </p>
          </Section>

          <Section id="why-aqaba-en" width="wide" className="scroll-mt-24">
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
        </>
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
              {facts.map((fact, i) => (
                <div key={fact} className={i === 0 ? "rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs font-normal text-amber-800" : "rounded-xl border border-primary-100 bg-primary-50 p-4 text-sm font-medium text-primary-700"}>
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
            {isAr ? (
              <div className="mt-3">
                <p className="font-medium text-primary-700 mb-2">
                  ضريبة المبيعات — ليست تلقائية
                </p>
                <p className="text-primary-600 mb-3">
                  لا تخضع كل الشركات المسجلة في العقبة لضريبة المبيعات تلقائياً.
                  الالتزام يعتمد على:
                </p>
                <ul className="space-y-1 text-primary-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>نوع النشاط والسلع أو الخدمات المقدمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>مكان البيع أو الاستهلاك — داخل المنطقة أم خارجها</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>حجم المبيعات السنوي والتعليمات الضريبية النافذة</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-primary-500">
                  التسجيل في المنطقة ليس إعفاءً عاماً من ضريبة المبيعات.
                </p>
              </div>
            ) : (
              <p className="mt-3 leading-relaxed text-primary-600">
                {t.has("taxNote")
                  ? t("taxNote")
                  : "Tax obligations depend on activity, transaction profile, and applicable instructions."}
              </p>
            )}
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary">{t.has("customsTitle") ? t("customsTitle") : "Customs notes"}</h3>
            {isAr ? (
              <div className="mt-3">
                <p className="font-medium text-primary-700 mb-2">
                  الجمارك — قواعد خاصة بالمنطقة
                </p>
                <ul className="space-y-1 text-primary-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>البضائع الداخلة إلى منطقة العقبة لا تخضع لرسوم جمركية عند الإدخال — بحكم القانون</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>نقل البضائع إلى السوق الأردني خارج المنطقة قد يرتب رسوماً جمركية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                    <span>السلع الخاصة أو المنظمة قد تخضع لمتطلبات إضافية بحسب الحالة</span>
                  </li>
                </ul>
              </div>
            ) : (
              <p className="mt-3 leading-relaxed text-primary-600">
                {t.has("customsNote")
                  ? t("customsNote")
                  : "Customs treatment depends on goods type, movement, and applicable legal requirements."}
              </p>
            )}
          </Card>
        </div>
      </Section>


      <Section width="wide">
        <Card className="bg-amber-50 border-amber-200">
          <h2 className="text-2xl font-bold text-amber-800 md:text-3xl">
            {t.has("legalAlerts.title") ? t("legalAlerts.title") : "Important legal notices"}
          </h2>
          <ul className="mt-5 space-y-3">
            {legalAlerts.map((item) => (
              <li key={item} className="flex items-start gap-3 text-amber-800">
                <span className="mt-2 size-1.5 rounded-full bg-amber-600 shrink-0" aria-hidden />
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
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
              onClick={() => trackWhatsAppClick({ location: 'section_investor_positioning', ctaText: t("ctaPrimary"), hasPrefill: false })}
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
