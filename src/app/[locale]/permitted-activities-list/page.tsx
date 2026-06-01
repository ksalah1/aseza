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
    path: "/permitted-activities-list",
    title: "قائمة الأنشطة المسموحة في منطقة العقبة الاقتصادية الخاصة",
    description:
      "تصنيف شامل للأنشطة التجارية المسموحة والمقيدة والمحظورة في ASEZA — تعرف على متطلبات كل فئة قبل تقديم طلب التسجيل.",
  });
}

export default async function PermittedActivitiesListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const categories = [
    {
      title: "التجارة والاستيراد والتصدير",
      desc: "شراء وبيع البضائع محلياً ودولياً، واستيراد المواد الخام والمنتجات وتصديرها عبر ميناء العقبة.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
    {
      title: "الخدمات المهنية والاستشارية",
      desc: "الخدمات القانونية والمحاسبية والهندسية والاستشارات الإدارية وخدمات تقنية المعلومات.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
    {
      title: "السياحة والضيافة",
      desc: "الفنادق والمنتجعات وخدمات السياحة البحرية والبرية ووكالات السفر.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
    {
      title: "الصناعة والتصنيع الخفيف",
      desc: "تصنيع المنتجات الغذائية والنسيج والبلاستيك والمعدات الكهربائية وغيرها ضمن المناطق الصناعية.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
    {
      title: "اللوجستيات والتخزين",
      desc: "إدارة سلاسل التوريد والمستودعات والتوزيع والشحن البري والبحري.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
    {
      title: "تقنية المعلومات والاتصالات",
      desc: "تطوير البرمجيات والتطبيقات وخدمات الاتصالات ومراكز البيانات.",
      color: "border-accent/40 bg-accent/5",
      tag: "مسموح",
      tagColor: "bg-accent/20 text-accent-600",
    },
  ];

  const restrictedActivities = [
    { activity: "الخدمات المالية والمصرفية", condition: "تتطلب ترخيصاً من البنك المركزي الأردني" },
    { activity: "خدمات التأمين", condition: "تتطلب ترخيصاً من هيئة تنظيم قطاع التأمين" },
    { activity: "الرعاية الصحية والمستشفيات", condition: "تتطلب موافقة وزارة الصحة وهيئة اعتماد مؤسسات الرعاية الصحية" },
    { activity: "التعليم والمدارس الخاصة", condition: "تتطلب موافقة وزارة التربية والتعليم أو وزارة التعليم العالي" },
    { activity: "استيراد وتوزيع الأدوية", condition: "تتطلب موافقة مديرية الغذاء والدواء" },
    { activity: "الاتصالات والبث", condition: "تتطلب ترخيصاً من هيئة تنظيم قطاع الاتصالات" },
    { activity: "العقارات وإعادة البيع للأجانب", condition: "تخضع لقيود قانون الأراضي وإجراءات تملّك خاصة" },
    { activity: "النفط والغاز والتعدين", condition: "تتطلب موافقات وزارة الطاقة والشراكة مع سلطة المنطقة" },
  ];

  const prohibitedActivities = [
    "إنتاج الأسلحة والذخائر والمتفجرات",
    "تصنيع المواد المخدرة أو الإتجار بها",
    "الأنشطة المضرة بالبيئة البحرية أو الشعب المرجانية",
    "الكازينوهات وألعاب القمار",
    "المشاريع العسكرية أو الأمنية دون تصريح حكومي",
    "تصنيع الكحول أو بيعه دون ترخيص خاص",
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "دليل المستثمر", href: "/why-aqaba" },
            { label: "قائمة الأنشطة المسموحة" },
          ]}
        />
      </div>

      <Section width="wide">
        <h1 className="text-4xl font-bold text-primary">
          قائمة الأنشطة المسموحة في منطقة العقبة الاقتصادية الخاصة
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-600">
          تصنيف الأنشطة التجارية في ASEZA إلى ثلاث فئات: مسموحة، ومقيدة تتطلب موافقات إضافية،
          ومحظورة. تحقق من تصنيف نشاطك قبل البدء بإجراءات التسجيل.
        </p>

        {/* Category cards */}
        <h2 className="mt-10 text-2xl font-bold text-primary">الأنشطة المسموحة — فئات رئيسية</h2>
        <p className="mt-2 text-primary-600">
          تشمل الأنشطة التالية مجالات مفتوحة عموماً للمستثمرين الأردنيين والأجانب ضمن الشروط
          النظامية المعتادة.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-xl border p-5 ${cat.color}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-primary">{cat.title}</h3>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-primary-600">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Restricted activities table */}
        <h2 className="mt-12 text-2xl font-bold text-primary">الأنشطة المقيدة</h2>
        <p className="mt-2 text-primary-600">
          هذه الأنشطة مسموحة من حيث المبدأ، لكنها تستلزم موافقات جهات تنظيمية خارج ASEZA قبل
          إصدار الترخيص.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-primary-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 text-right">
                <th className="px-4 py-3 font-semibold text-primary">النشاط</th>
                <th className="px-4 py-3 font-semibold text-primary">الشرط أو الجهة المختصة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary-100">
              {restrictedActivities.map((row) => (
                <tr key={row.activity} className="bg-white">
                  <td className="px-4 py-3 font-medium text-primary">{row.activity}</td>
                  <td className="px-4 py-3 text-primary-600">{row.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prohibited list */}
        <h2 className="mt-12 text-2xl font-bold text-primary">الأنشطة المحظورة</h2>
        <p className="mt-2 text-primary-600">
          لا يجوز تسجيل أي من الأنشطة التالية أو ترخيصها في منطقة العقبة الاقتصادية الخاصة
          بصرف النظر عن جنسية المستثمر.
        </p>
        <ul className="mt-4 space-y-2">
          {prohibitedActivities.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 size-2 shrink-0 rounded-full bg-red-500" aria-hidden />
              <span className="text-primary-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Amber callout */}
        <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-800">
            هل نشاطك يقع على الحدود بين فئتين؟
          </h2>
          <p className="mt-2 text-sm text-amber-700">
            كثير من الأنشطة تقع في المنطقة الرمادية بين &quot;مسموح&quot; و&quot;مقيد&quot; بسبب التفاصيل التشغيلية.
            مراجعة النشاط مع محامٍ مختص قبل تقديم الطلب توفّر عليك وقتاً وتكاليف. خدمة مراجعة النشاط
            المقدمة من ASEZA.co تغطي هذه الحالات بالتفصيل.
          </p>
          <Link
            href="/services/activity-review"
            className="mt-3 inline-block text-sm font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900"
          >
            طلب مراجعة النشاط قبل التسجيل ←
          </Link>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 rounded-xl bg-primary p-6 text-center">
          <p className="text-lg font-semibold text-background">
            غير متأكد من تصنيف نشاطك؟ تواصل معنا عبر واتساب
          </p>
          <p className="mt-1 text-sm text-primary-200">
            نراجع معك تصنيف النشاط ومتطلبات التسجيل خلال 24 ساعة
          </p>
          <a
            href={whatsappLink("أريد الاستفسار عن تصنيف نشاطي في منطقة العقبة الاقتصادية الخاصة")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </Section>
    </>
  );
}
