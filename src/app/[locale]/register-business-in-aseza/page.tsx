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
    path: "/register-business-in-aseza",
    title: "تسجيل شركة في ASEZA | تأسيس شركة في منطقة العقبة الاقتصادية الخاصة",
    description:
      "دليل عملي لتسجيل شركة أو مؤسسة في ASEZA، يشمل اختيار النشاط، تجهيز الوثائق، الرسوم، وخطوات تأسيس الشركة في منطقة العقبة الاقتصادية الخاصة.",
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
      badge="دعم عملي لتسجيل الشركات في العقبة"
      title="تسجيل شركة في ASEZA"
      hero="نساعدك على اختيار النشاط المناسب، تجهيز الوثائق، ترتيب ملف التسجيل، ومتابعة الخطوات المطلوبة لتأسيس شركتك في منطقة العقبة الاقتصادية الخاصة."
      primaryCta="ابدأ تسجيل شركتك"
      secondaryCta="راجع الوثائق المطلوبة"
      secondaryHref="/aseza-registration-checklist"
      whatsappMessage="مرحباً، أريد تسجيل شركة في ASEZA. النشاط المطلوب هو: ..."
      valueTitle="لماذا هذه الصفحة؟"
      valueBody="هذه هي نقطة البداية الرئيسية لتسجيل شركة جديدة في ASEZA. تساعدك على فهم المسار، الوثائق، الرسوم، ومتطلبات ما بعد التسجيل قبل التواصل معنا وفتح الملف."
      mainTitle="من يمكنه التسجيل؟"
      mainItems={[
        {
          title: "مستثمرون وشركات",
          items: [
            "مستثمر أردني",
            "مستثمر أجنبي",
            "شركة قائمة تريد فتح نشاط في العقبة",
          ],
        },
        {
          title: "أنشطة تجارية وتشغيلية",
          items: [
            "شركة استيراد وتصدير",
            "شركة خدمات أو لوجستيات",
            "شركة صناعية أو تجارية",
          ],
        },
      ]}
      needsTitle="ماذا نحتاج منك؟"
      needs={[
        "نوع النشاط",
        "هل الشركة جديدة أم قائمة؟",
        "جنسية الشركاء",
        "هل يوجد شريك أو شركة أجنبية؟",
        "هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟",
        "هل يوجد موقع أو عنوان في العقبة؟",
      ]}
      helpTitle="كيف نساعد؟"
      help={[
        "مساعدة المستثمرين على اختيار المسار الصحيح",
        "تجهيز ومتابعة ملف التسجيل",
        "تحديد الوثائق المطلوبة قبل فتح المعاملة",
        "توضيح الرسوم الرسمية بعد تأكيدها",
        "نوضح لك الخطوة التالية بعد التسجيل",
      ]}
      stepsTitle="خطوات تسجيل الشركة"
      steps={[
        "تحديد النشاط",
        "اختيار الشكل المناسب للشركة",
        "تجهيز الوثائق",
        "تقديم ملف التسجيل",
        "دفع الرسوم الرسمية بعد تأكيدها",
        "استلام التسجيل والانتقال لمتطلبات التشغيل",
      ]}
      noteTitle="بعد التسجيل"
      noteBody="التسجيل هو الخطوة الأولى. بعض الأنشطة تحتاج بعد التسجيل إلى متطلبات تشغيل مثل موقع، صحة وسلامة، بيئة، أو موافقات إضافية. نوضح لك هذه المتطلبات ضمن الخطة."
      finalCta="جاهز لبدء تسجيل شركتك؟"
      related={[
        { href: "/aseza-registration-checklist", label: "قائمة وثائق التسجيل" },
        { href: "/aseza-registration-fees", label: "رسوم تسجيل شركة في ASEZA" },
        {
          href: "/services/activity-review",
          label: "مراجعة النشاط قبل التسجيل",
        },
      ]}
      currentLabel="تسجيل شركة في ASEZA"
    />
  );
}
