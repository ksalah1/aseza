import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/annual-renewal-aseza",
    title: "التجديد السنوي لتسجيل الشركة في منطقة العقبة الاقتصادية الخاصة",
    description:
      "دليل التجديد السنوي لشركتك في ASEZA: الرسوم المطلوبة، الوثائق، الخطوات، والموعد النهائي لتجنب الغرامات.",
  });
}

export default async function AnnualRenewalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const feesRows = [
    { type: "شركة ذات مسؤولية محدودة (ش.م.م)", fee: "حسب رأس المال المسجّل — يبدأ من 100 دينار أردني" },
    { type: "شركة شخص واحد (فرد)", fee: "100 دينار أردني سنوياً" },
    { type: "فرع شركة أجنبية", fee: "200 دينار أردني سنوياً" },
    { type: "رسوم الترخيص الحرفي / النشاط", fee: "تتفاوت حسب طبيعة النشاط" },
    { type: "غرامة التأخير", fee: "تُحتسب عند تجاوز الموعد النهائي في 31 مارس" },
  ];

  const documents = [
    "نموذج طلب التجديد السنوي (متاح على موقع ASEZA)",
    "الميزانية العمومية الختامية للسنة المنتهية أو إقرار ضريبي",
    "عقد إيجار المقر السنوي ساري المفعول",
    "صورة عن قرار مجلس الإدارة أو المدير بتجديد التسجيل (للشركات)",
    "صورة من بطاقة الهوية أو جواز السفر للمفوّض بالتوقيع",
    "بيان الضمان الاجتماعي للموظفين (إن وُجد)",
  ];

  const steps = [
    {
      num: "01",
      title: "إعداد الوثائق",
      desc: "جمع جميع الوثائق المطلوبة وتحديث عقد الإيجار والميزانية السنوية قبل بدء تقديم الطلب.",
    },
    {
      num: "02",
      title: "تقديم الطلب إلكترونياً أو حضورياً",
      desc: "تقديم طلب التجديد عبر البوابة الإلكترونية لـ ASEZA أو بزيارة مكتب خدمات المستثمرين في العقبة.",
    },
    {
      num: "03",
      title: "سداد الرسوم",
      desc: "دفع رسوم التجديد الإدارية ورسوم الترخيص إن وُجدت، والتأكد من الحصول على إيصال الدفع الرسمي.",
    },
    {
      num: "04",
      title: "استلام شهادة التجديد",
      desc: "تسلّم شهادة التسجيل المُجددة التي تُثبت سريان الشركة للسنة الجديدة. احتفظ بنسخ موثّقة.",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "بعد التسجيل", href: "/licensing-after-registration" },
            { label: "التجديد السنوي" },
          ]}
        />
      </div>

      <Section width="wide">
        <h1 className="text-4xl font-bold text-primary">
          التجديد السنوي لتسجيل شركتك في ASEZA
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-600">
          كل شركة مسجّلة في منطقة العقبة الاقتصادية الخاصة مُلزَمة بتجديد تسجيلها سنوياً.
          تأخير التجديد يعرّضك لغرامات ويرتبط بإجراءات إضافية على النشاط.
        </p>

        {/* Alert box */}
        <div className="mt-8 flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <span className="mt-0.5 text-2xl" aria-hidden>⚠️</span>
          <div>
            <p className="font-semibold text-amber-800">الموعد النهائي للتجديد: 31 مارس من كل عام</p>
            <p className="mt-1 text-sm text-amber-700">
              يجب إتمام تجديد التسجيل قبل نهاية مارس لتفادي الغرامات. بعض أنواع التراخيص لها
              مواعيد مختلفة — تأكد من تاريخ انتهاء ترخيصك المحدد.
            </p>
          </div>
        </div>

        {/* Fees table */}
        <h2 className="mt-10 text-2xl font-bold text-primary">رسوم التجديد السنوي</h2>
        <p className="mt-2 text-primary-600">
          تتفاوت الرسوم حسب نوع الشركة ورأس المال المسجّل. الأرقام التالية تقديرية — تحقق من
          الجدول الرسمي الصادر عن ASEZA للسنة الحالية.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-primary-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 text-right">
                <th className="px-4 py-3 font-semibold text-primary">نوع الكيان</th>
                <th className="px-4 py-3 font-semibold text-primary">الرسوم التقديرية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary-100">
              {feesRows.map((row) => (
                <tr key={row.type} className="bg-white">
                  <td className="px-4 py-3 font-medium text-primary">{row.type}</td>
                  <td className="px-4 py-3 text-primary-600">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Documents list */}
        <h2 className="mt-10 text-2xl font-bold text-primary">الوثائق المطلوبة</h2>
        <ul className="mt-4 space-y-2">
          {documents.map((doc) => (
            <li key={doc} className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="text-primary-700">{doc}</span>
            </li>
          ))}
        </ul>

        {/* 4-step process */}
        <h2 className="mt-12 text-2xl font-bold text-primary">خطوات إتمام التجديد</h2>
        <div className="mt-6 space-y-4">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-4 rounded-xl border border-primary-100 bg-white p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-accent">
                {s.num}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-1 text-sm text-primary-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 flex flex-col gap-4 rounded-xl bg-primary p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-background">
              هل تريد أن نتولى إجراءات التجديد نيابةً عنك؟
            </p>
            <p className="mt-1 text-sm text-primary-200">
              ASEZA.co يساعد الشركات في ترتيب التجديد السنوي والمتابعة في العقبة
            </p>
          </div>
          <a
            href={whatsappLink("أحتاج مساعدة في التجديد السنوي لشركتي في منطقة العقبة الاقتصادية")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-accent px-5 py-3 text-center font-semibold text-primary transition-opacity hover:opacity-90"
          >
            تواصل عبر واتساب
          </a>
        </div>

        <p className="mt-8 text-primary-600">
          اطلع أيضاً على{" "}
          <Link href="/aseza-registration-fees" className="underline underline-offset-2 hover:text-primary">
            رسوم تسجيل الشركة لأول مرة
          </Link>{" "}
          و
          <Link href="/licensing-after-registration" className="underline underline-offset-2 hover:text-primary">
            الترخيص بعد التسجيل
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
