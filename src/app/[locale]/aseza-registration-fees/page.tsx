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
    path: "/aseza-registration-fees",
    title: "رسوم تسجيل شركة في ASEZA | تكلفة تأسيس شركة في العقبة",
    description:
      "تعرف على رسوم تسجيل شركة في ASEZA، الرسوم السنوية للأنشطة، أتعاب تجهيز الملف، والرسوم الإضافية المحتملة مثل الترجمة والتصديق والتراخيص.",
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
      badge="تقدير واضح قبل البدء"
      title="رسوم تسجيل شركة في ASEZA"
      hero="نوضح لك الفرق بين الرسوم الرسمية، رسوم النشاط السنوية، وأتعاب تجهيز ومتابعة ملف التسجيل، حتى تعرف ما الذي ستدفعه قبل البدء."
      primaryCta="احصل على تقدير الرسوم"
      secondaryCta="راجع الوثائق المطلوبة"
      secondaryHref="/aseza-registration-checklist"
      whatsappMessage="مرحباً، أريد تقدير رسوم تسجيل شركة في ASEZA. نوع الشركة: ... عدد الأنشطة: ..."
      valueTitle="ما الذي نقدمه لك؟"
      valueBody="نقسم التكلفة إلى بنود مفهومة: الرسوم الرسمية، رسوم النشاط، الرسوم المرتبطة بالترجمة أو التصديق أو الرخص، وأتعاب تجهيز ومتابعة الملف. يتم تأكيد الرسوم قبل الدفع."
      mainTitle="أنواع الرسوم"
      mainItems={[
        {
          title: "رسوم رسمية وتشغيلية",
          items: [
            "رسوم تسجيل أول مرة",
            "رسوم النشاط السنوية",
            "رسوم رخصة أو شهادة مرتبطة",
          ],
        },
        {
          title: "رسوم تجهيز الملف",
          items: ["رسوم ترجمة أو تصديق", "أتعاب تجهيز ومتابعة الملف"],
        },
      ]}
      needsTitle="ماذا نحتاج لتقدير أوضح؟"
      needs={[
        "نوع الشركة",
        "عدد الأنشطة",
        "هل توجد شركة أجنبية؟",
        "هل توجد وثائق تحتاج ترجمة؟",
        "هل النشاط يحتاج ترخيصاً أو موافقة؟",
        "هل الطلب تسجيل جديد أم تعديل أم تجديد؟",
      ]}
      helpTitle="ما الذي لا يدخل عادة في تقدير التسجيل؟"
      help={[
        "ترجمة",
        "تصديق",
        "رسوم جهات أخرى",
        "رخصة مهن",
        "موافقات قطاعية",
        "تعديل بيانات",
        "رسوم تأخير أو تجديد",
      ]}
      stepsTitle="أمثلة مبسطة"
      steps={[
        "شركة جديدة بنشاط واحد — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
        "شركة جديدة بنشاطين — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
        "شركة أجنبية تحتاج ترجمة وتصديق — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
        "تجديد سنوي — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
        "تعديل + تجديد — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
      ]}
      noteTitle="أتعاب الخدمة الاستشارية"
      noteBody="أتعاب تجهيز ومتابعة الملف منفصلة عن الرسوم الرسمية. نوضح لك البنود قبل البدء حتى تكون الصورة التجارية واضحة."
      finalCta="أرسل نوع الشركة وعدد الأنشطة لتحصل على تقدير واضح"
      related={[
        { href: "/register-business-in-aseza", label: "تسجيل شركة في ASEZA" },
        { href: "/aseza-registration-checklist", label: "قائمة الوثائق" },
        { href: "/services/register-new-business", label: "تسجيل شركة جديدة" },
      ]}
      currentLabel="رسوم التسجيل"
    />
  );
}
