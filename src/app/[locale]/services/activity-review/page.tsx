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
    title: locale === "ar" ? "مراجعة نشاط الشركة قبل التسجيل في ASEZA" : "Business Activity Review Before Registering in ASEZA",
    description: locale === "ar" ? "تحديد أولي للمسار المناسب بناءً على وصف النشاط ونموذج العمل قبل اختيار خدمة التسجيل أو الاستشارة المدفوعة." : "An initial assessment of the right path based on your activity description and business model, before choosing a registration service or a paid consultation.",
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
  const ar = locale === "ar";

  return (
    <ServicePageTemplate
      locale={locale}
      content={{
        label: ar ? "تحديد أولي للمسار المناسب" : "An initial assessment of the right path",
        title: ar ? "تحديد مسار نشاطك قبل التسجيل" : "Defining the Path for Your Activity Before Registration",
        description: ar ? "نبدأ من وصف النشاط ونموذج العمل. نحدد المسار المرجح للتسجيل ونوصي بالخدمة المدفوعة المناسبة للمتابعة." : "We start from your activity description and business model. We identify the most likely registration path and recommend the appropriate paid service to proceed.",
        ctaLabel: ar ? "اعرف مسار النشاط" : "Find out your activity path",
        whatsappMessage: ar ? `مرحباً، أريد تحديد المسار المناسب لنشاط في ASEZA.
وصف النشاط:
نوع البضائع أو الخدمات:
هل يوجد استيراد/تصدير أو تخزين؟
هل الشركة جديدة أم قائمة؟` : `Hello, I would like to identify the right path for an activity in ASEZA.
Activity description:
Type of goods or services:
Is there any import/export or storage?
Is the company new or existing?`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نقرأ وصف النشاط ونوضح نموذج العمل." : "We review your activity description and clarify the business model.",
          ar ? "نقترح صياغة أوضح للتسجيل." : "We propose a clearer wording for registration.",
          ar ? "نحدد إن كان المسار مباشراً أو يحتاج خدمة متابعة مدفوعة." : "We determine whether the path is straightforward or requires a paid follow-up service.",
          ar ? "نوجهك للخدمة التالية المناسبة." : "We point you to the appropriate next service."
        ],
        forWho: [
          ar ? "من لديه فكرة نشاط ويريد صياغتها بوضوح." : "Someone with an activity idea who wants to articulate it clearly.",
          ar ? "من يعمل في التجارة أو الاستيراد أو التصدير." : "Someone working in trade, import, or export.",
          ar ? "من يتعامل مع تخزين أو غذاء أو صحة أو لوجستيات." : "Someone dealing with storage, food, health, or logistics.",
          ar ? "من يريد تقليل الملاحظات قبل بدء ملف التسجيل." : "Someone who wants to minimize observations before opening a registration file."
        ],
        coreTitle: ar ? "لماذا تراجع النشاط؟" : "Why review the activity?",
        coreItems: [
          ar ? "لتحويل وصف عام إلى نشاط قابل للفهم داخل ملف التسجيل." : "To turn a general description into a business activity that is clearly understood within the registration file.",
          ar ? "لتحديد الموافقات أو المتطلبات التي يجب الانتباه لها مبكراً." : "To identify the approvals or requirements that should be addressed early on.",
          ar ? "لتفادي فتح ملف بمعلومات ناقصة أو غير دقيقة." : "To avoid opening a file with incomplete or inaccurate information.",
          ar ? "لاختيار خدمة التسجيل أو الترخيص المناسبة بعد التحديد الأولي." : "To choose the right registration or licensing service after the initial assessment."
        ],
        needs: [
          ar ? "وصف النشاط كما تشرحه للعميل." : "A description of the activity as you would explain it to a client.",
          ar ? "نوع البضائع أو الخدمات." : "The type of goods or services.",
          ar ? "هل يوجد استيراد أو تصدير أو تخزين؟" : "Is there any import, export, or storage?",
          ar ? "هل يوجد غذاء أو صحة أو مواد خاصة؟" : "Are food, health, or special materials involved?",
          ar ? "هل توجد شركة قائمة أم مشروع جديد؟" : "Is there an existing company or is it a new project?"
        ],
        steps: [
          ar ? "ترسل وصف النشاط عبر واتساب." : "You send the activity description via WhatsApp.",
          ar ? "نوضح نقاط الغموض ونموذج العمل." : "We clarify any ambiguities and the business model.",
          ar ? "نقترح صياغة أوضح." : "We propose a clearer wording.",
          ar ? "نوصي بالخدمة المدفوعة أو خطوة المتابعة المناسبة." : "We recommend the appropriate paid service or follow-up step."
        ],
        afterTitle: ar ? "ستحصل على" : "What you will receive",
        after: [
          ar ? "صياغة أوضح للنشاط." : "A clearer wording of the business activity.",
          ar ? "تحديد إن كان النشاط مباشراً أو يحتاج خدمة متابعة مدفوعة." : "An assessment of whether the activity is straightforward or requires a paid follow-up service.",
          ar ? "خطوات المتابعة المناسبة: تسجيل شركة، شركة أجنبية، ترخيص، أو تجهيز الملف بعد الاتفاق." : "The appropriate next steps: company registration, a foreign company, licensing, or preparing the file once engaged."
        ],
        related: [
          { label: ar ? "تسجيل شركة لأول مرة" : "Registering a new company", href: "/services/register-new-business" },
          { label: ar ? "شركة أجنبية / فرع أجنبي" : "Foreign company / foreign branch", href: "/services/register-foreign-branch" },
          { label: ar ? "الترخيص بعد التسجيل" : "Licensing after registration", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
