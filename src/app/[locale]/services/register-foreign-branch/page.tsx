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
    path: "/services/register-foreign-branch",
    title: "تسجيل شركة أجنبية في العقبة | فرع أجنبي أو شركة تابعة في ASEZA",
    description: "دعم الشركات الأجنبية في اختيار مسار الدخول إلى العقبة عبر فرع أجنبي أو شركة تابعة أو مكتب تمثيلي وتجهيز الوثائق المطلوبة.",
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
        label: "مساعدة المستثمرين الأجانب في دخول السوق من خلال العقبة",
        title: "تسجيل شركة أجنبية أو فرع أجنبي في العقبة",
        description: "نساعد الشركات الأجنبية على اختيار المسار المناسب لدخول السوق من خلال العقبة: فرع، شركة تابعة، مكتب تمثيلي، أو مسار آخر مناسب لطبيعة النشاط.",
        ctaLabel: "أرسل بيانات الشركة الأجنبية",
        whatsappMessage: "أرغب في مراجعة مسار تسجيل شركة أجنبية أو فرع أجنبي في العقبة. بلد الشركة والنشاط المطلوب:",
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نحدد المسار الأنسب لطبيعة الشركة والنشاط.",
          "نرتب وثائق الشركة الأم والترجمة والتصديق.",
          "نوضح بيانات المفوضين بالتوقيع داخل الأردن.",
          "نربط التسجيل بخطة التشغيل داخل العقبة."
        ],
        forWho: [
          "شركة خارج الأردن تريد دخول السوق من خلال العقبة.",
          "مجموعة تريد تأسيس شركة أردنية مملوكة من شركة أجنبية.",
          "شركة تجارة أو استيراد أو تصدير أو لوجستيات.",
          "شركة تحتاج حضوراً تمثيلياً أو إقليمياً في الأردن."
        ],
        coreTitle: "نحدد لك المسار الأنسب",
        coreItems: [
          "فرع لشركة أجنبية.",
          "شركة أردنية مملوكة من شركة أجنبية.",
          "مكتب تمثيلي أو إقليمي.",
          "مسار مناسب لشركات التجارة، الاستيراد، التصدير، أو اللوجستيات."
        ],
        needsTitle: "الوثائق والمعلومات المطلوبة",
        needs: [
          "وثائق الشركة الأم.",
          "قرار الشركة الأم.",
          "المفوضون بالتوقيع.",
          "الترجمة والتصديق.",
          "وصف النشاط داخل العقبة.",
          "العنوان أو المشروع إن وجد."
        ],
        steps: [
          "نراجع بلد الشركة والنشاط المطلوب.",
          "نقارن بين المسارات المناسبة.",
          "نرسل قائمة الوثائق بصيغة واضحة.",
          "نرتب الملف ونتابع الملاحظات.",
          "نحدد متطلبات التشغيل بعد التسجيل."
        ],
        afterTitle: "ما النتيجة؟",
        after: [
          "مسار واضح لدخول السوق من خلال العقبة.",
          "قائمة وثائق مختصرة للشركة الأم والمفوضين.",
          "خطة للخطوة التالية بعد التسجيل أو قبل التشغيل."
        ],
        related: [
          { label: "تسجيل شركة لأول مرة", href: "/services/register-new-business" },
          { label: "مراجعة النشاط", href: "/services/activity-review" },
          { label: "قائمة الوثائق", href: "/documents-checklists" }
        ],
      }}
    />
  );
}
