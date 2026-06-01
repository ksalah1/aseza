import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

const whatsappMessage =
  `مرحباً، أريد معرفة أثر الضرائب والجمارك على نشاط في ASEZA.
النشاط:
نوع البضائع أو الخدمات:
هل يوجد استيراد أو تصدير أو بيع داخل الأردن؟`;

const relatedLinks = [
  ["شركة استيراد وتصدير في العقبة", "/import-export-company-aseza"],
  ["مسار النشاط قبل التسجيل", "/services/activity-review"],
  ["تسجيل شركة في ASEZA", "/register-business-in-aseza"],
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/tax-customs-aqaba",
    title: "ضرائب وجمارك العقبة | ما يجب فهمه قبل تسجيل شركة في ASEZA",
    description:
      "دليل عملي لفهم ضريبة الدخل، ضريبة المبيعات، الجمارك، وإعادة التصدير في منطقة العقبة الاقتصادية الخاصة قبل تسجيل شركة في ASEZA.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "لماذا العقبة", href: "/why-aqaba" }, { label: "الضرائب والجمارك" }]} />
      </div>

      <Section width="wide">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-accent">دليل عملي قبل التسجيل</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
            الضرائب والجمارك في العقبة: ما الذي يجب فهمه قبل التسجيل؟
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-primary-600">
            قبل تسجيل شركة في ASEZA، من المهم فهم أثر النشاط على ضريبة الدخل، المبيعات، الجمارك، وإدخال أو إخراج البضائع. نساعدك على ربط النشاط التجاري بالمسار الضريبي والجمركي المناسب قبل فتح الملف.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              اطلب توضيح الأثر الضريبي والجمركي لنشاطك
            </a>
            <Link
              href="/register-business-in-aseza"
              className="rounded-lg border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
            >
              ابدأ تسجيل الشركة
            </Link>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">لماذا تهم الضرائب والجمارك قبل التسجيل؟</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "نوع النشاط يؤثر على المعاملة الضريبية.",
            "مصدر الدخل مهم، خاصة للخدمات والتجارة.",
            "مسار البضائع مهم: إدخال، تخزين، إعادة تصدير، أو بيع داخل الأردن.",
            "بعض الأنشطة تحتاج توضيحاً قبل الاعتماد على أي ميزة ضريبية أو جمركية.",
            "التسجيل وحده لا يكفي لفهم النتيجة الضريبية.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
              <p className="leading-relaxed text-primary-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">ضريبة الدخل داخل ASEZA</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-primary-600">
              <p>هناك إطار خاص لضريبة الدخل داخل المنطقة، لكنه يرتبط بطبيعة الدخل والنشاط الفعلي وليس بمجرد وجود سجل شركة.</p>
              <p>الاستفادة تعتمد على أن يكون الدخل مرتبطاً فعلياً بالنشاط داخل المنطقة، وأن تكون الشركة قادرة على توضيح مقرها وحساباتها وطريقة تشغيلها.</p>
              <p>الشركات الخدمية تحتاج وضوحاً أكبر إذا كان العمل يتم بين العقبة وباقي الأردن أو الخارج، لأن مصدر الدخل وطريقة تنفيذ الخدمة يؤثران على التقييم.</p>
              <p>وجود مقر، حسابات، موظفين، ونشاط فعلي داخل المنطقة يساعد في توضيح الوضع قبل اختيار مسار التسجيل.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <h3 className="font-bold text-primary">مصدر مختصر</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-600">
              نعتمد في الشرح على قانون منطقة العقبة الاقتصادية الخاصة وأنظمة ضريبة الدخل والمبيعات المرتبطة بالمنطقة، مع تبسيطها لقرار المستثمر.
            </p>
            <Link href="/legal-references" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              عرض المراجع المعتمدة ←
            </Link>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">الجمارك وحركة البضائع</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary text-background">
              <tr>
                <th className="px-5 py-4 text-start font-semibold">المسار</th>
                <th className="px-5 py-4 text-start font-semibold">ما الذي نراجعه؟</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["إدخال بضائع إلى العقبة", "نوع البضائع، الغرض، التخزين، الجهة المستفيدة، وهل ستبقى داخل المنطقة أو تخرج منها."],
                ["بيع داخل العقبة", "هل البيع للاستهلاك داخل المنطقة؟ وهل توجد ضريبة مبيعات أو ضريبة خاصة؟"],
                ["نقل البضائع إلى باقي الأردن", "الجمارك، ضريبة المبيعات، طبيعة البضائع، والبيانات المطلوبة."],
                ["إعادة تصدير", "هل توجد تخزين فعلي؟ هل تمر البضائع عبر مستودعات معتمدة؟ ما هو مسار الشحن؟"],
              ].map(([route, review], index) => (
                <tr key={route} className={index % 2 === 0 ? "bg-white" : "bg-primary-50/70"}>
                  <td className="px-5 py-4 font-semibold text-primary">{route}</td>
                  <td className="px-5 py-4 leading-relaxed text-primary-600">{review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">متى تحتاج تحديداً خاصاً؟</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "استيراد مواد غذائية",
                "مستحضرات تجميل أو مكملات",
                "أجهزة أو مستلزمات طبية",
                "مواد كيميائية أو منظفات",
                "بضائع للبيع المحلي داخل الأردن",
                "إعادة تصدير دون تخزين",
                "خدمات مقدمة داخل وخارج العقبة",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-primary-100 bg-white p-4 text-primary-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">ماذا نحتاج منك؟</h2>
            <ul className="mt-6 space-y-3 text-primary-600">
              {[
                "نوع النشاط",
                "نوع البضائع أو الخدمات",
                "هل يوجد استيراد أو تصدير؟",
                "هل يوجد تخزين داخل العقبة؟",
                "هل سيتم البيع داخل الأردن؟",
                "هل الشركة خدمية أم تجارية؟",
                "هل يوجد عملاء خارج الأردن؟",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section width="wide" background="primary">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">كيف نساعدك قبل التسجيل؟</h2>
            <ul className="mt-6 space-y-3 text-primary-100">
              {[
                "نراجع النشاط من زاوية ضريبية وجمركية أولية.",
                "نوضح الأسئلة التي يجب حسمها قبل التسجيل.",
                "نربطك بخدمة التسجيل أو مراجعة النشاط أو الاستيراد والتصدير.",
                "نساعدك على تجهيز وصف النشاط بطريقة أوضح.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 text-center">
            <p className="text-lg font-semibold">أرسل وصف النشاط الآن وسنوضح لك الخطوة التالية.</p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">روابط مرتبطة</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedLinks.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition-colors hover:border-accent hover:text-accent">
              {label} ←
            </Link>
          ))}
        </div>
      </Section>

      <JsonLd data={getBreadcrumbSchema([
        { name: "الرئيسية", url: `https://aseza.co/${locale}` },
        { name: "لماذا العقبة", url: `https://aseza.co/${locale}/why-aqaba` },
        { name: "الضرائب والجمارك", url: `https://aseza.co/${locale}/tax-customs-aqaba` },
      ])} />
    </>
  );
}
