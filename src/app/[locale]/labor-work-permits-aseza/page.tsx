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
    path: "/labor-work-permits-aseza",
    title: "تصاريح العمل والإقامة في منطقة العقبة الاقتصادية الخاصة",
    description:
      "دليل شامل لتصاريح العمل في ASEZA: متطلبات تشغيل الأردنيين والأجانب، إقامة المستثمر، وتصريح بدء التشغيل.",
  });
}

export default async function LaborWorkPermitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jordanianSteps = [
    { step: "01", title: "عقد العمل", desc: "إعداد عقد عمل مكتوب يحدد المسمى الوظيفي والراتب وشروط التوظيف." },
    { step: "02", title: "تسجيل في الضمان الاجتماعي", desc: "تسجيل الموظف في المؤسسة العامة للضمان الاجتماعي خلال 30 يوماً من بدء العمل." },
    { step: "03", title: "إخطار وزارة العمل", desc: "إبلاغ وزارة العمل بالتوظيف عبر النظام الإلكتروني أو مكاتب العمل في العقبة." },
  ];

  const foreignSteps = [
    { step: "01", title: "الحصول على تأشيرة عمل", desc: "تقديم طلب تأشيرة عمل عبر سفارة الأردن في بلد الموظف أو عبر الجهات المختصة." },
    { step: "02", title: "تصريح عمل من وزارة العمل", desc: "تقديم طلب تصريح العمل لدى مديرية تصاريح العمل مرفقاً بعقد العمل وصورة جواز السفر." },
    { step: "03", title: "إقامة عمل من الأمن العام", desc: "استخراج تصريح الإقامة من دائرة الأمن العام في العقبة بعد الحصول على تصريح العمل." },
    { step: "04", title: "تسجيل في الضمان الاجتماعي", desc: "تسجيل الموظف الأجنبي في المؤسسة العامة للضمان الاجتماعي إن كان مقيماً بصفة دائمة." },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "دليل المستثمر", href: "/why-aqaba" },
            { label: "تصاريح العمل والإقامة" },
          ]}
        />
      </div>

      <Section width="wide">
        <h1 className="text-4xl font-bold text-primary">
          تصاريح العمل والإقامة في ASEZA
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-600">
          دليل عملي لمتطلبات العمل والإقامة في منطقة العقبة الاقتصادية الخاصة — سواء كنت تستقدم
          موظفين أردنيين أو أجانب، أو تسعى للحصول على إقامة المستثمر.
        </p>

        {/* Legal disclaimer */}
        <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50 p-5">
          <p className="text-sm text-primary-700">
            <span className="font-semibold">تنبيه قانوني:</span> تعتمد هذه الصفحة على اللوائح
            السارية وقت كتابتها. متطلبات تصاريح العمل قابلة للتغيير، ويُنصح بالتحقق من أحدث
            الاشتراطات مع محامٍ مختص أو مباشرةً مع الجهات الرسمية قبل اتخاذ أي إجراء.
          </p>
        </div>

        {/* Jordanian employees */}
        <h2 className="mt-10 text-2xl font-bold text-primary">توظيف الموظفين الأردنيين</h2>
        <p className="mt-2 text-primary-600">
          لا يحتاج المواطنون الأردنيون إلى تصريح عمل خاص للعمل في المنطقة. تنطبق عليهم قانون
          العمل الأردني ونظام الضمان الاجتماعي بصورة عادية.
        </p>
        <div className="mt-6 space-y-4">
          {jordanianSteps.map((item) => (
            <div key={item.step} className="flex gap-4 rounded-xl border border-primary-100 bg-white p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-accent">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-primary-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Foreign employees */}
        <h2 className="mt-12 text-2xl font-bold text-primary">استقدام الموظفين الأجانب</h2>
        <p className="mt-2 text-primary-600">
          يتطلب توظيف غير الأردنيين في المنطقة الحصول على تصريح عمل من وزارة العمل قبل البدء
          بالعمل. تسري نسب الأردنة (كحد أدنى 51% موظفين أردنيين) على معظم المنشآت، مع استثناءات
          لبعض التخصصات النادرة.
        </p>
        <div className="mt-6 space-y-4">
          {foreignSteps.map((item) => (
            <div key={item.step} className="flex gap-4 rounded-xl border border-primary-100 bg-white p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-accent">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-primary-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Investor residency */}
        <h2 className="mt-12 text-2xl font-bold text-primary">إقامة المستثمر</h2>
        <p className="mt-2 text-primary-600">
          يحق للمستثمر الأجنبي المسجّل في ASEZA التقدم بطلب إقامة استثمارية تتيح له الإقامة
          والتنقل لأغراض إدارة أعماله. تُمنح الإقامة عادةً لمدة سنة قابلة للتجديد، وتتضمن:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "تقديم وثيقة تسجيل الشركة في ASEZA وشهادة إدارة فعلية",
            "إثبات رأس المال المُودع أو الحصة في الشركة",
            "تقديم الطلب لدائرة الأمن العام — إقامة استثمارية",
            "سداد الرسوم السنوية المقررة",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="text-primary-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Work commencement permit */}
        <h2 className="mt-12 text-2xl font-bold text-primary">تصريح بدء التشغيل</h2>
        <p className="mt-2 text-primary-600">
          بعد إتمام تسجيل الشركة، يجب استخراج تصريح بدء التشغيل من سلطة ASEZA قبل مباشرة
          النشاط التجاري رسمياً. يتضمن الطلب:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "تقديم نموذج طلب بدء التشغيل إلى الإدارة المختصة في ASEZA",
            "إرفاق عقد إيجار مقر العمل أو سند ملكية",
            "إثبات استيفاء اشتراطات الصحة والسلامة والبيئة المنطبقة على النشاط",
            "دفع رسوم الفحص والمعاينة",
            "الحصول على شهادة بدء التشغيل",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary-300" aria-hidden />
              <span className="text-primary-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 rounded-xl bg-primary p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-background">
              هل تحتاج مساعدة في استخراج تصاريح العمل أو إقامة المستثمر؟
            </p>
            <p className="mt-1 text-sm text-primary-200">
              فريق ASEZA.co يساعدك في ترتيب الإجراءات والمتابعة
            </p>
          </div>
          <a
            href={whatsappLink("أحتاج مساعدة في تصاريح العمل أو إقامة المستثمر في منطقة العقبة")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-accent px-5 py-3 text-center font-semibold text-primary transition-opacity hover:opacity-90"
          >
            تواصل عبر واتساب
          </a>
        </div>

        <p className="mt-8 text-primary-600">
          اطلع أيضاً على{" "}
          <Link href="/foreign-investors" className="underline underline-offset-2 hover:text-primary">
            دليل المستثمر الأجنبي
          </Link>{" "}
          و
          <Link href="/register-business-in-aseza" className="underline underline-offset-2 hover:text-primary">
            خطوات التسجيل في ASEZA
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
