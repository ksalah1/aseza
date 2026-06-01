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
    path: "/import-export-company-aseza",
    title: "تسجيل شركة استيراد وتصدير في العقبة | شركة تجارية في ASEZA",
    description:
      "خدمة استشارية لتجهيز تسجيل شركة استيراد وتصدير في منطقة العقبة الاقتصادية الخاصة، مع مسار النشاط، نوع البضائع، التخزين، والمتطلبات اللاحقة.",
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
      badge="تحديد مسار التسجيل والمتابعة"
      title="تسجيل شركة استيراد وتصدير في العقبة"
      hero="نساعدك على تحديد مسار تسجيل شركة استيراد وتصدير في ASEZA حسب نوع البضائع، التخزين، البيع داخل الأردن، أو إعادة التصدير."
      primaryCta="أرسل نوع البضائع ونموذج العمل"
      secondaryCta="حدد مسار النشاط قبل التسجيل"
      secondaryHref="/services/activity-review"
      whatsappMessage={`مرحباً، أريد تسجيل شركة استيراد وتصدير في العقبة.
نوع البضائع:
هل يوجد تخزين؟
هل يوجد بيع داخل الأردن أو إعادة تصدير؟`}
      valueTitle="لماذا العقبة لشركات الاستيراد والتصدير؟"
      valueBody="العقبة موقع بحري ولوجستي مهم، مناسب للتجارة وإعادة التصدير، وقريب من الميناء والمرافق اللوجستية للشركات التي تتعامل مع بضائع إقليمية ودولية."
      mainTitle="ماذا يجب تحديده قبل التسجيل؟"
      mainItems={[
        {
          title: "طبيعة التجارة",
          items: [
            "نوع البضائع",
            "هل يوجد إعادة تصدير؟",
            "هل سيتم البيع داخل الأردن؟",
          ],
        },
        {
          title: "التشغيل والتخزين",
          items: [
            "هل يوجد تخزين؟",
            "هل البضائع غذائية، تجميلية، طبية، كيميائية، أو عامة؟",
            "هل النشاط تجارة فقط أم لوجستيات أيضاً؟",
          ],
        },
      ]}
      needsTitle="ماذا نحتاج منك؟"
      needs={[
        "نوع البضائع",
        "مصدر البضائع",
        "هل يوجد استيراد أو تصدير أو إعادة تصدير؟",
        "هل يوجد تخزين؟",
        "هل يوجد بيع داخل الأردن؟",
        "هل الشركة محلية أم أجنبية؟",
        "هل يوجد موقع في العقبة؟",
      ]}
      helpTitle="كيف نساعد؟"
      help={[
        "صياغة النشاط",
        "تحديد المتطلبات اللازمة للمرحلة التالية",
        "تحديد متطلبات التخزين أو الموقع",
        "توضيح الخطوة التالية بعد التسجيل",
        "ربطك بصفحة الرسوم وقائمة التجهيز",
      ]}
      stepsTitle="أنواع بضائع تحتاج مراجعة إضافية"
      steps={[
        "أغذية",
        "مكملات ومنتجات صحية",
        "مستحضرات تجميل",
        "أجهزة أو مستلزمات طبية",
        "مواد كيميائية أو منظفات",
        "بضائع تحتاج تخزين خاص",
      ]}
      noteTitle="قبل فتح الملف"
      noteBody="وصف البضائع وطريقة التعامل معها يساعدنا على اختيار النشاط الصحيح وتحديد ما إذا كان الموقع أو التخزين أو الموافقات اللاحقة جزءاً من الخطة."
      finalCta="أرسل نوع البضائع ونموذج العمل"
      related={[
        { href: "/services/activity-review", label: "مسار النشاط" },
        { href: "/register-business-in-aseza", label: "تسجيل شركة في ASEZA" },
        {
          href: "/services/licensing-after-registration",
          label: "الترخيص بعد التسجيل",
        },
      ]}
      currentLabel="شركة استيراد وتصدير"
    />
  );
}
