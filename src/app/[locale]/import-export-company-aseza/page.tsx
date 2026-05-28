import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/import-export-company-aseza",
    title: ar ? "تسجيل شركة استيراد وتصدير في العقبة" : "Import/Export Business Registration in Aqaba",
    description: ar
      ? "مراجعة عملية لتسجيل شركة استيراد وتصدير في منطقة العقبة الاقتصادية الخاصة، مع التنبيه إلى متطلبات النشاط والجمارك وضريبة المبيعات."
      : "Practical guidance for import/export business setup in ASEZA, with cautions on customs and sales tax treatment by activity.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[
          { label: "الرئيسية", href: "/" },
          { label: "تسجيل شركة", href: "/register-business-in-aseza" },
          { label: "شركة استيراد وتصدير" },
        ]} />
      </div>

      <Section width="narrow">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          تسجيل شركة استيراد وتصدير في العقبة
        </h1>
        <p className="mt-4 text-primary-500">
          المعاملة الجمركية والضريبية تعتمد على نوع البضائع، مكان إدخالها أو بيعها، وحركتها داخل أو خارج المنطقة.
        </p>
      </Section>

      {/* Section 1 */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          هل العقبة مناسبة لنشاط الاستيراد والتصدير؟
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          العقبة هي المنطقة الجمركية الحرة الوحيدة في الأردن، وتقع على البحر الأحمر
          مع وصول مباشر للميناء والمطار والطرق البرية. هي مناسبة لشركات الاستيراد
          والتصدير التي تستهدف السوق الأردني أو تعمل كنقطة توزيع إقليمية — لكن ملاءمتها
          تعتمد على نوع البضاعة، مسارها، ونموذج العمل.
        </p>
      </Section>

      {/* Section 2 */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          ما الذي يجب مراجعته قبل التسجيل؟
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          قبل تقديم أي طلب، نراجع معك:
        </p>
        <ul className="mt-4 max-w-3xl space-y-3 text-primary-600">
          {[
            "تصنيف النشاط: هل يندرج ضمن التجارة العامة، أم يحتاج تصنيفاً أو موافقة خاصة؟",
            "نوع البضائع: هل هي بضائع حرة، أم تخضع لرقابة قطاعية (أغذية، دواء، مواد كيماوية...)؟",
            "نموذج العمل: هل ستخزن البضائع في العقبة، أم تعمل بنظام back-to-back مباشر؟",
            "معاملة الدخل الضريبية: هل سيُصنَّف دخلك ضمن الدخل المتحقق في المنطقة؟",
            "إثبات العنوان داخل المنطقة ووجود مقر فعلي.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 3 */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          نوع البضائع وحركتها
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          المعاملة الجمركية والضريبية تختلف بحسب:
        </p>
        <ol className="mt-4 max-w-3xl space-y-3 text-sm text-primary-700">
          {[
            ["①", "البضائع المستوردة إلى المنطقة:", "لا تُستوفى رسوم جمركية عند الإدخال (وفق م.30 من قانون المنطقة)"],
            ["②", "البضائع المباعة داخل المنطقة:", "قد تخضع لضريبة مبيعات على السلع الواردة في الجدول رقم (1)"],
            ["③", "البضائع المُصدَّرة خارج المملكة:", "تُعامَل كتصدير وقد تستفيد من إعفاءات"],
            ["④", "البضائع المنقولة إلى السوق الأردني (المنطقة الجمركية):", "تخضع لقانون الجمارك العادي"],
            ["⑤", "البضائع المعاد تصديرها (back-to-back):", "معاملة خاصة — راجع تنبيه ضريبة الدخل أدناه"],
          ].map(([num, title, desc]) => (
            <li key={num} className="flex items-start gap-3">
              <span className="shrink-0 font-bold text-accent">{num}</span>
              <span><span className="font-semibold text-primary">{title}</span> {desc}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Section 4 — Warning callout */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          تنبيه: معاملة دخل إعادة التصدير
        </h2>
        <div className="mt-5 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-relaxed text-amber-700">
            وفق المادة (4/ب/2) من نظام ضريبة الدخل رقم 53/2005: قد لا يُصنَّف الدخل
            الناتج عن إعادة تصدير بضائع خرجت من المملكة بموجب بيانات شحن مقدمة إلى
            مستودعات ASEZA المعتمدة دخلاً متحققاً في المنطقة لأغراض النسبة الخاصة.
          </p>
          <p className="mt-3 text-sm font-semibold text-amber-800">
            نُوصي بمراجعة هذا الجانب مع مستشار ضريبي قبل الاعتماد على إعفاء ضريبي.
          </p>
        </div>
      </Section>

      {/* Section 5 — Document checklist */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          الوثائق المتوقعة لشركة استيراد وتصدير
        </h2>
        <Card className="mt-6 max-w-xl">
          <ul className="space-y-2 text-sm text-primary-700">
            {[
              "صور الهوية للشركاء/المالكين",
              "ثلاثة أسماء مقترحة للشركة",
              "وصف تفصيلي للنشاط ونوع البضائع",
              "نسب الملكية",
              "عقد إيجار أو إثبات عنوان في العقبة",
              "لشركات الأغذية والدواء والمواد المنظمة: وثائق قطاعية إضافية",
              "لشركات الاستيراد الأجنبية: وثائق الشركة الأم مصدقة ومترجمة",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 font-bold text-accent">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* Section 6 */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          ماذا يحدث بعد التسجيل؟
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          بعد صدور شهادة التسجيل، قد تحتاج قبل بدء التشغيل الفعلي:
        </p>
        <ul className="mt-4 max-w-3xl space-y-3 text-primary-600">
          {[
            "شهادة سلامة عامة",
            "فتح حساب بنكي للشركة",
            "تسجيل ضريبي (إذا انطبق وفق النشاط وحجم المبيعات)",
            "تصاريح جمركية وترخيص مخلّص (إذا كنت تمارس التخليص الجمركي بنفسك)",
            "للمستودعات: موافقة بيئية وشهادة سلامة",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 7 — CTA */}
      <Section width="wide">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-primary">كيف نساعدك؟</h2>
            <p className="mt-3 leading-relaxed text-primary-600">
              نراجع نشاطك ونوع بضاعتك قبل أي تقديم، ونحدد:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-primary-600">
              {[
                "هل النشاط مسموح أم مقيد أم يحتاج موافقة إضافية",
                "الشكل القانوني الأنسب",
                "الوثائق المطلوبة لحالتك تحديداً",
                "المعاملة الجمركية والضريبية المتوقعة",
                "ما يلزمك بعد التسجيل قبل أن تبدأ التشغيل الفعلي",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-primary-500">
              المعاملة الجمركية والضريبية تعتمد على نوع البضائع ومسارها.
              تواصل معنا للمراجعة قبل التسجيل.
            </p>
            <a
              href={whatsappLink("أرغب بتسجيل شركة استيراد وتصدير في العقبة.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
            >
              <MessageCircle className="size-5" aria-hidden />
              راجع بضائعك ونشاطك قبل التسجيل
            </a>
            <Link
              href="/tax-customs-aqaba"
              className="mt-3 text-sm text-accent hover:underline"
            >
              قراءة الإطار القانوني للضرائب والجمارك ←
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}
