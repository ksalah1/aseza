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
    description: "مراجعة صياغة نشاط الشركة قبل فتح ملف التسجيل في ASEZA وتحديد الخطوة التالية المناسبة.",
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
        label: "بوابة سريعة قبل فتح ملف التسجيل",
        title: "راجع نشاطك قبل التسجيل",
        description: "نراجع وصف النشاط ونساعدك على صياغته بطريقة أوضح قبل فتح ملف التسجيل، خاصة إذا كان النشاط متعلقاً بالتجارة، الاستيراد، التصدير، التخزين، الغذاء، الصحة، أو اللوجستيات.",
        ctaLabel: "راجع النشاط قبل التسجيل",
        whatsappMessage: "أرغب في مراجعة نشاطي قبل التسجيل في ASEZA. وصف النشاط:",
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نقرأ وصف النشاط ونزيل الغموض.",
          "نقترح صياغة أوضح للتسجيل.",
          "نحدد إن كان المسار مباشراً أو يحتاج مراجعة إضافية.",
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
          "لتحديد الوثائق أو الموافقات التي يجب الانتباه لها مبكراً.",
          "لتفادي فتح ملف بمعلومات ناقصة أو غير دقيقة.",
          "لاختيار خدمة التسجيل أو الترخيص المناسبة بعد المراجعة."
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
          "نراجعه ونحدد نقاط الغموض.",
          "نقترح صياغة أوضح.",
          "نرسل الخطوة التالية المناسبة."
        ],
        afterTitle: "ستحصل على",
        after: [
          "صياغة أوضح للنشاط.",
          "تحديد إن كان النشاط مباشراً أو يحتاج مراجعة إضافية.",
          "قائمة بالخطوة التالية المناسبة: تسجيل شركة، شركة أجنبية، ترخيص، أو وثائق إضافية."
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
