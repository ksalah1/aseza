import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/legal-references",
    title: ar
      ? "المراجع القانونية الرسمية | منطقة العقبة الاقتصادية الخاصة"
      : "Legal References | Aqaba Special Economic Zone",
    description: ar
      ? "قائمة بالتشريعات الرسمية المعتمدة في موقع البركات للمحاماة، تشمل قانون المنطقة وأنظمة ضريبة الدخل والمبيعات والتسجيل."
      : "Official legislation referenced on this site, including the ASEZA law and income tax, sales tax, and registration regulations.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";

  const refs = [
    {
      title: ar ? "قانون منطقة العقبة الاقتصادية الخاصة وتعديلاته" : "Aqaba Special Economic Zone Law and Amendments",
      number: ar ? "رقم 32 لسنة 2000 (آخر تعديل 2023)" : "No. 32 of 2000 (last amended 2023)",
      provisions: ar
        ? "الإطار العام، الجمارك (م.29–30)، الرسوم والإعفاءات (م.30)، ضريبة الدخل (م.32)، ضريبة المبيعات (م.37)"
        : "General framework, customs (Art. 29–30), fees and exemptions (Art. 30), income tax (Art. 32), sales tax (Art. 37)",
      url: "https://www.aseza.jo",
      urlLabel: ar ? "عرض النص الرسمي ←" : "View official text →",
    },
    {
      title: ar ? "نظام تسجيل المؤسسات في منطقة العقبة الاقتصادية الخاصة" : "Institution Registration Regulation in the ASEZA",
      number: ar ? "رقم 13 لسنة 2001 (آخر تعديل 2023)" : "No. 13 of 2001 (last amended 2023)",
      provisions: ar
        ? "الأهلية (م.4)، الأنشطة المحظورة والمقيدة، الإجراءات (م.7–8)، المدة القانونية للبت (7 أيام عمل)، التجديد السنوي"
        : "Eligibility (Art. 4), prohibited/restricted activities, procedures (Art. 7–8), statutory decision period (7 business days), annual renewal",
      url: null,
      urlLabel: null,
    },
    {
      title: ar ? "نظام ضريبة الدخل في منطقة العقبة الاقتصادية الخاصة" : "Income Tax Regulation in the ASEZA",
      number: ar ? "رقم 53 لسنة 2005 (آخر تعديل 2023)" : "No. 53 of 2005 (last amended 2023)",
      provisions: ar
        ? "تعريف الدخل المتحقق في المنطقة (م.4)، شروط التأهل الستة (م.7)، نسبة 60% للخدمات (م.4/أ/2)، حكم إعادة التصدير (م.4/ب/2)"
        : "Definition of income accrued in the zone (Art. 4), six qualification conditions (Art. 7), 60% threshold for services (Art. 4/a/2), re-export rule (Art. 4/b/2)",
      url: null,
      urlLabel: null,
    },
    {
      title: ar ? "نظام ضريبة مبيعات السلع والخدمات في منطقة العقبة" : "Sales Tax Regulation on Goods and Services in Aqaba",
      number: ar ? "رقم 54 لسنة 2005 وتعديلاته" : "No. 54 of 2005 and amendments",
      provisions: ar
        ? "الجدول رقم (1) — السلع الخاضعة داخل المنطقة (م.3)، الضريبة الخاصة على التبغ والكحول (م.7)"
        : "Schedule (1) — taxable goods within the zone (Art. 3), special tax on tobacco and alcohol (Art. 7)",
      url: null,
      urlLabel: null,
    },
    {
      title: ar ? "نظام تنظيم البيئة الاستثمارية وتطويرها" : "Investment Environment Regulation",
      number: ar ? "وتعديلاته" : "and amendments",
      provisions: ar
        ? "الأنشطة الاقتصادية المسموحة والمقيدة والمحظورة داخل المنطقة"
        : "Permitted, restricted, and prohibited economic activities within the zone",
      url: null,
      urlLabel: null,
    },
  ];

  return (
    <>
      <Section width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "المراجع القانونية الرسمية المعتمدة في هذا الموقع" : "Official Legal References Used on This Site"}
          </h1>
          <p className="mt-4 leading-relaxed text-primary-500">
            {ar
              ? "جميع المعلومات الواردة في هذا الموقع مبنية على التشريعات الرسمية التالية. نُوصي بمراجعة النصوص الأصلية من الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة (aseza.jo)."
              : "All information on this site is based on the official legislation below. We recommend reviewing original texts on the official ASEZA website (aseza.jo)."}
          </p>
        </div>
      </Section>

      <Section width="wide">
        {/* Desktop table */}
        <div className="hidden overflow-x-auto rounded-2xl border border-primary-100 shadow-sm md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-background">
                <th className="px-5 py-3 text-start font-semibold">{ar ? "التشريع" : "Legislation"}</th>
                <th className="px-5 py-3 text-start font-semibold">{ar ? "الرقم والسنة" : "Number & Year"}</th>
                <th className="px-5 py-3 text-start font-semibold">{ar ? "أبرز الأحكام" : "Key Provisions"}</th>
                <th className="px-5 py-3 text-center font-semibold">{ar ? "الرابط" : "Link"}</th>
              </tr>
            </thead>
            <tbody>
              {refs.map((ref, i) => (
                <tr key={ref.title} className={i % 2 === 0 ? "bg-white" : "bg-primary-50/60"}>
                  <td className="px-5 py-4 font-medium text-primary">{ref.title}</td>
                  <td className="px-5 py-4 text-primary-600">{ref.number}</td>
                  <td className="px-5 py-4 leading-relaxed text-primary-600">{ref.provisions}</td>
                  <td className="px-5 py-4 text-center">
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {ref.urlLabel}
                      </a>
                    ) : (
                      <span className="text-primary-300">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card stack */}
        <div className="space-y-4 md:hidden">
          {refs.map((ref) => (
            <div key={ref.title} className="rounded-2xl border border-primary-100 bg-white p-5">
              <p className="font-semibold text-primary">{ref.title}</p>
              <p className="mt-1 text-sm text-accent">{ref.number}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-600">{ref.provisions}</p>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-accent hover:underline"
                >
                  {ref.urlLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-5 text-sm text-primary-500">
          <p>
            {ar
              ? "المعلومات الواردة في هذا الموقع لأغراض توعوية وإرشادية فقط، ولا تُغني عن استشارة قانونية أو ضريبية متخصصة. قد تطرأ تعديلات تشريعية لم تُدرَج بعد — يُوصى بمراجعة النصوص الرسمية الحديثة عند الحاجة."
              : "Information on this site is for guidance purposes only and does not replace specialized legal or tax advice. Legislative amendments may have occurred that are not yet reflected here — always verify against current official texts."}
          </p>
        </div>
      </Section>
    </>
  );
}
