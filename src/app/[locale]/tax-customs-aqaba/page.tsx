import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/tax-customs-aqaba",
    title: "ضرائب وجمارك منطقة العقبة الاقتصادية الخاصة | النص القانوني والشروط الفعلية",
    description: "ضريبة الدخل في ASEZA: 5% على الدخل المؤهَّل وفق 6 شروط تشغيلية. الجمارك: لا رسوم على الواردات للمنطقة. الإطار القانوني الكامل مع المراجع الرسمية.",
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
      <Section width="narrow">
        <h1 className="text-center text-4xl font-bold text-primary">
          الضرائب والجمارك في منطقة العقبة الاقتصادية الخاصة
        </h1>
        <p className="mt-4 text-center text-primary-500">
          شرح مبني على النصوص القانونية الرسمية — نظام رقم 53 لسنة 2005 ونظام رقم 54 لسنة 2005
        </p>
      </Section>

      {/* Section A — Income Tax */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          ضريبة الدخل: النص القانوني والشروط الفعلية
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          تنص المادة (32) من قانون منطقة العقبة الاقتصادية الخاصة رقم 32 لسنة 2000 وتعديلاته على أن دخل المؤسسة المسجلة المتأتي من نشاطها في المنطقة يخضع لضريبة دخل بنسبة 5% من صافي الدخل المؤهَّل — لا من الإيراد الإجمالي.
        </p>

        <div className="mt-6 max-w-3xl rounded-2xl border border-primary/20 bg-primary-50 p-6">
          <h3 className="font-bold text-primary">⚠️ شروط التأهل للنسبة الخاصة</h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-600">
            وفق نظام ضريبة الدخل في منطقة العقبة رقم 53 لسنة 2005، يُشترط لاعتبار الدخل مؤهَّلاً أن تستوفي المؤسسة المسجلة جميع الشروط التالية:
          </p>
          <ol className="mt-4 space-y-2 text-sm text-primary-700">
            {[
              "تنفيذ الأنشطة الأساسية المدرة للدخل من داخل المنطقة نفسها",
              "توفر كوادر فنية مؤهلة بدوام كامل في المنطقة",
              "مسك حسابات أصولية وصحيحة",
              "مقر دائم وعنوان مسجل داخل المنطقة",
              "حساب مصرفي رئيسي لدى بنك مرخص في المملكة",
              "نفقات تشغيلية تتناسب مع طبيعة النشاط الاقتصادي",
            ].map((cond, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="shrink-0 font-bold text-accent">
                  {["①", "②", "③", "④", "⑤", "⑥"][i]}
                </span>
                <span>{cond}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm font-semibold text-primary">
            التسجيل وحده لا يُعدّ كافياً لاستحقاق النسبة الخاصة.
          </p>
        </div>

        <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-amber-800">الجهات المستثناة من النسبة الخاصة (المادة 32/ب)</h3>
          <p className="mt-2 text-sm leading-relaxed text-amber-700">
            تخضع البنوك والمؤسسات المالية وشركات التأمين وإعادة التأمين وشركات النقل البري العاملة في المنطقة لأحكام قانون ضريبة الدخل المعمول به — بصرف النظر عن وضعها كمؤسسات مسجلة.
          </p>
        </div>

        <p className="mt-6 max-w-3xl leading-relaxed text-primary-600">
          للشركات الخدمية التي تمارس نشاطها في المنطقة والمنطقة الجمركية معاً: لا يُعتبر الدخل متحققاً في المنطقة إلا إذا كانت نسبة المصاريف التشغيلية المتأتية من نشاط المنطقة لا تقل عن 60% من إجمالي المصاريف التشغيلية السنوية — وفق المادة (4/أ/2) من نظام ضريبة الدخل رقم 53 لسنة 2005.
        </p>
      </Section>

      {/* Section B — Re-export */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          تنبيه خاص: إعادة التصدير والتجارة بنظام <span dir="ltr" lang="en">back-to-back</span>{" "}
          (إعادة بيع مباشر دون تخزين)
        </h2>
        <div className="mt-5 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-relaxed text-amber-700">
            وفق المادة (4/ب/2) من نظام ضريبة الدخل رقم 53 لسنة 2005، يُستثنى من تعريف الدخل المتحقق في المنطقة: الدخل الناتج عن إعادة تصدير بضائع خرجت من المملكة بموجب بيانات شحن مقدمة إلى مواقع التخزين العامة والخاصة المعتمدة لدى السلطة.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-amber-700">
            بعبارة أخرى: إذا كانت البضائع تغادر المملكة مباشرةً (back-to-back) دون أن تُخزَّن فعلياً في مستودعات ASEZA المعتمدة، فقد لا يُصنَّف الربح الناتج دخلاً متحققاً في المنطقة لأغراض ضريبة الدخل.
          </p>
          <p className="mt-3 text-sm font-semibold text-amber-800">
            نُوصي بمراجعة هذا الجانب بعناية مع مستشار ضريبي مرخص قبل الاعتماد على الإعفاء.
          </p>
        </div>
      </Section>

      {/* Section C — Customs */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          الجمارك: تمييز مهم بين اتجاهين
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-bold text-emerald-800">البضائع المستوردة إلى المنطقة ✅</h3>
            <p className="mt-3 text-sm leading-relaxed text-emerald-700">
              وفق المادة (30/أ/1) من قانون المنطقة: لا تُستوفى رسوم الجمارك ورسوم الاستيراد على البضائع المُدخَلة إلى المنطقة. وتعتبر المنطقة خارج نطاق المنطقة الجمركية الأردنية وفق المادة (29/أ).
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-amber-800">البضائع المنقولة من المنطقة إلى المنطقة الجمركية ⚠️</h3>
            <p className="mt-3 text-sm leading-relaxed text-amber-700">
              البضائع التي تُنقل من منطقة العقبة الاقتصادية الخاصة إلى السوق الأردني (المنطقة الجمركية) تخضع لقانون الجمارك وقانون الضريبة العامة على المبيعات المعمول بهما وفق مسارها وطبيعتها.
            </p>
          </div>
        </div>
      </Section>

      {/* Section D — Sales Tax */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          ضريبة المبيعات: متى تُطبَّق داخل المنطقة؟
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          تنص المادة (3) من نظام ضريبة مبيعات السلع والخدمات في منطقة العقبة رقم 54 لسنة 2005 على أن السلع والخدمات المدرجة في الجدول رقم (1) من هذا النظام تخضع لضريبة المبيعات عند بيعها للاستهلاك داخل المنطقة.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          كما تُفرض «الضريبة الخاصة» على التبغ ومنتجاته والكحول ومصنوعاته عند أول بيع بعد الاستيراد أو الإنتاج داخل المنطقة.
        </p>
        <p className="mt-4 max-w-3xl font-medium text-primary">
          التسجيل في المنطقة لا يُعفي تلقائياً من ضريبة المبيعات على السلع الواردة في الجدول المذكور عند استهلاكها فيها.
        </p>
      </Section>

      {/* Citations + CTA */}
      <Section width="wide">
        <div className="max-w-3xl rounded-2xl border border-primary-100 bg-primary-50 p-5 text-sm text-primary-500">
          <p className="font-medium text-primary-700">المصادر القانونية:</p>
          <p className="mt-1 leading-relaxed">
            قانون منطقة العقبة الاقتصادية الخاصة رقم 32 لسنة 2000 وتعديلاته | نظام ضريبة الدخل رقم 53 لسنة 2005 | نظام ضريبة المبيعات رقم 54 لسنة 2005.
            المعلومات الواردة لأغراض توعوية فقط ولا تُغني عن استشارة ضريبية أو قانونية متخصصة.
          </p>
          <div className="mt-3">
            <Link href="/legal-references" className="font-medium text-accent hover:underline">
              عرض جميع المراجع القانونية المعتمدة ←
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-primary p-6 text-center text-background">
          <h2 className="text-xl font-bold">ابدأ مراجعة نشاطك الضريبي</h2>
          <p className="mt-2 text-sm text-primary-100">
            نراجع تصنيف نشاطك وأثره الضريبي المحتمل قبل التسجيل.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              افحص نشاطك قبل التسجيل
            </a>
            <Link
              href="/register-business-in-aseza"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-background transition-colors hover:bg-white/10"
            >
              تسجيل شركة في ASEZA
            </Link>
          </div>
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
