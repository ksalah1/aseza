import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AsezaBusinessGuide } from "@/components/sections/AsezaBusinessGuide";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/foreign-investors",
    title: "تأسيس شركة في العقبة للمستثمر الأجنبي | تسجيل شركة في ASEZA",
    description:
      "خدمة استشارية لمساعدة المستثمرين الأجانب على اختيار مسار تأسيس شركة أو فرع أجنبي في العقبة، وتحديد الوثائق المطلوبة بعد اختيار المسار المناسب.",
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
    <AsezaBusinessGuide
      locale={locale}
      badge="خدمة استشارية لتجهيز ومتابعة معاملات ASEZA"
      title="تأسيس شركة في العقبة للمستثمر الأجنبي"
      hero="نساعد المستثمر الأجنبي على اختيار المسار المناسب لدخول السوق من خلال العقبة: شركة جديدة، شركة مملوكة لشركة أجنبية، فرع أجنبي، أو نشاط استيراد وتصدير من خلال ASEZA."
      primaryCta="أرسل بلد الشركة والنشاط المطلوب"
      secondaryCta="اختر مسار الشركة الأجنبية"
      secondaryHref="/services/register-foreign-branch"
      whatsappMessage={`مرحباً، أنا مستثمر أجنبي وأريد معرفة المسار المناسب للتسجيل في ASEZA.
بلد المستثمر أو الشركة الأم:
النشاط المطلوب:
هل تريد فرعاً أم شركة جديدة أم أنك غير متأكد؟`}
      valueTitle="ماذا نحدد لك؟"
      valueBody="نرتب الصورة العملية قبل البدء: المسار الأنسب، التصديقات والترجمات المتوقعة، صياغة النشاط، ومتطلبات ما بعد التسجيل. نحدد المسار المناسب أولاً. بعد الاتفاق على المتابعة، نطلب وثائق الشركة الأم اللازمة."
      mainTitle="ما المسارات المتاحة للمستثمر الأجنبي؟"
      mainItems={[
        {
          title: "مسارات تأسيس",
          items: [
            "تأسيس شركة جديدة في العقبة",
            "شركة أردنية مملوكة لشركة أجنبية",
            "فرع شركة أجنبية",
          ],
        },
        {
          title: "مسارات تشغيل",
          items: ["مكتب تمثيلي أو إقليمي", "نشاط استيراد وتصدير أو لوجستيات"],
        },
      ]}
      needsTitle="ماذا نحتاج منك؟"
      needs={[
        "الجنسية أو بلد الشركة الأم",
        "النشاط المطلوب",
        "هل يوجد شركاء أردنيون؟",
        "هل الشركة الأم قائمة خارج الأردن؟",
        "هل يوجد عقد أو مشروع داخل الأردن؟",
        "هل النشاط تجارة، استيراد، تصدير، لوجستيات، أو خدمات؟",
      ]}
      helpTitle="كيف نساعد؟"
      help={[
        "تحديد المسار الأنسب لدخول السوق",
        "تحديد متطلبات الشركة أو الفرع بعد اختيار المسار",
        "توضيح ما يحتاج ترجمة أو تصديق",
        "صياغة النشاط بشكل مناسب للتسجيل",
        "ترتيب متطلبات ما بعد التسجيل",
      ]}
      stepsTitle="هل يمكن البدء من الخارج؟"
      steps={[
        "إرسال وصف النشاط وبيانات الشركة",
        "تحديد المسار الأولي عن بُعد",
        "تحديد المتطلبات اللازمة للشركة الأم",
        "بعد الاتفاق على المتابعة، نطلب الوثائق اللازمة مثل شهادة التسجيل، قرار الشركة الأم، التفويض، الترجمة أو التصديق.",
        "تجهيز ملف التسجيل",
        "متابعة الخطوة التالية داخل العقبة",
      ]}
      noteTitle="بعد التسجيل"
      noteBody="بعد التسجيل نراجع معك الموقع أو العنوان، شهادات التشغيل، النشاط الفعلي، الحسابات والبنوك، التجديد السنوي، وتصاريح العمل عند الحاجة."
      finalCta="أرسل بلد الشركة والنشاط المطلوب"
      related={[
        {
          href: "/services/register-foreign-branch",
          label: "تسجيل فرع شركة أجنبية",
        },
        { href: "/aseza-registration-checklist", label: "قائمة تجهيز التسجيل" },
        { href: "/aseza-registration-fees", label: "رسوم التسجيل" },
      ]}
      currentLabel="المستثمر الأجنبي"
    />
  );
}
