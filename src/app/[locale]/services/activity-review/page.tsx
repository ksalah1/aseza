import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/services/activity-review",
    title: "مراجعة نشاط الشركة قبل التسجيل في ASEZA",
    description: "تحديد أولي للمسار المناسب بناءً على وصف النشاط ونموذج العمل قبل اختيار خدمة التسجيل أو الاستشارة المدفوعة.",
    includeFirmInTitle: false,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      content={{
        label: "تحديد أولي للمسار المناسب",
        title: "تحديد مسار نشاطك قبل التسجيل",
        description: "نبدأ من وصف النشاط ونموذج العمل. نحدد المسار المرجح للتسجيل ونوصي بالخدمة المدفوعة المناسبة للمتابعة.",
        ctaLabel: "اعرف مسار النشاط",
        whatsappMessage: `مرحباً، أريد تحديد المسار المناسب لنشاط في ASEZA.
وصف النشاط:
نوع البضائع أو الخدمات:
هل يوجد استيراد/تصدير أو تخزين؟
هل الشركة جديدة أم قائمة؟`,
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نقرأ وصف النشاط ونوضح نموذج العمل.",
          "نقترح صياغة أوضح للتسجيل.",
          "نحدد إن كان المسار مباشراً أو يحتاج خدمة متابعة مدفوعة.",
          "نوجهك للخدمة التالية المناسبة."
        ],
        forWho: [
          "من لديه فكرة نشاط ويريد صياغتها بوضوح.",
          "من يعمل في التجارة أو الاستيراد أو التصدير.",
          "من يتعامل مع تخزين أو غذاء أو صحة أو لوجستيات.",
          "من يريد تقليل الملاحظات قبل بدء ملف التسجيل."
        ],
        coreTitle: "لماذا تراجع النشاط؟",
        coreItems: [
          "لتحويل وصف عام إلى نشاط قابل للفهم داخل ملف التسجيل.",
          "لتحديد الموافقات أو المتطلبات التي يجب الانتباه لها مبكراً.",
          "لتفادي فتح ملف بمعلومات ناقصة أو غير دقيقة.",
          "لاختيار خدمة التسجيل أو الترخيص المناسبة بعد التحديد الأولي."
        ],
        needs: [
          "وصف النشاط كما تشرحه للعميل.",
          "نوع البضائع أو الخدمات.",
          "هل يوجد استيراد أو تصدير أو تخزين؟",
          "هل يوجد غذاء أو صحة أو مواد خاصة؟",
          "هل توجد شركة قائمة أم مشروع جديد؟"
        ],
        steps: [
          "ترسل وصف النشاط عبر واتساب.",
          "نوضح نقاط الغموض ونموذج العمل.",
          "نقترح صياغة أوضح.",
          "نوصي بالخدمة المدفوعة أو خطوة المتابعة المناسبة."
        ],
        afterTitle: "ستحصل على",
        after: [
          "صياغة أوضح للنشاط.",
          "تحديد إن كان النشاط مباشراً أو يحتاج خدمة متابعة مدفوعة.",
          "خطوات المتابعة المناسبة: تسجيل شركة، شركة أجنبية، ترخيص، أو تجهيز الملف بعد الاتفاق."
        ],
        related: [
          { label: "تسجيل شركة لأول مرة", href: "/services/register-new-business" },
          { label: "شركة أجنبية / فرع أجنبي", href: "/services/register-foreign-branch" },
          { label: "الترخيص بعد التسجيل", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
