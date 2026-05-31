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
    path: "/existing-aseza-companies",
    title: "خدمات الشركات المسجلة في ASEZA | تعديل وتجديد وترخيص الشركات",
    description:
      "خدمات استشارية للشركات المسجلة في ASEZA، تشمل تعديل النشاط، تحديث المفوضين، تغيير العنوان، التجديد السنوي، ومتطلبات التشغيل بعد التسجيل.",
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
      badge="دعم عملي للشركات القائمة في العقبة"
      title="لديك شركة مسجلة في ASEZA؟"
      hero="نساعد الشركات القائمة في العقبة على تعديل البيانات، إضافة نشاط، تحديث المفوضين، تغيير العنوان، التجديد السنوي، ومراجعة متطلبات التشغيل المستمرة."
      primaryCta="أرسل وضع الشركة الحالي"
      secondaryCta="اختر الخدمة المناسبة"
      secondaryHref="/services/amend-existing-company"
      whatsappMessage="مرحباً، لدي شركة مسجلة في ASEZA وأحتاج مساعدة في: تعديل / تجديد / ترخيص. اسم الشركة: ..."
      valueTitle="متى تتواصل معنا؟"
      valueBody="تواصل معنا عند تغير النشاط الفعلي، تغير العنوان أو الموقع، تغير المفوضين بالتوقيع، اقتراب موعد التجديد، إضافة نشاط جديد، أو وجود رخصة أو شهادة تحتاج تحديثاً."
      mainTitle="ماذا تحتاج اليوم؟"
      mainItems={[
        {
          title: "تعديلات الشركة",
          items: ["تعديل نشاط", "إضافة نشاط", "تغيير عنوان", "تعديل المفوضين"],
        },
        {
          title: "تشغيل وتجديد",
          items: [
            "تعديل الشركاء أو الملكية",
            "تجديد سنوي",
            "متطلبات تشغيل بعد التسجيل",
          ],
        },
      ]}
      needsTitle="ماذا نحتاج منك؟"
      needs={[
        "اسم الشركة",
        "رقم التسجيل إن وجد",
        "الخدمة المطلوبة",
        "البيانات الحالية",
        "التغيير المطلوب",
        "هل توجد رخصة أو شهادة مرتبطة؟",
        "هل توجد معاملة أو تجديد معلق؟",
      ]}
      helpTitle="كيف نساعد؟"
      help={[
        "تحديد الإجراء الصحيح",
        "تجهيز الوثائق",
        "مراجعة التعديل أو التجديد",
        "متابعة الخطوة التالية",
        "ترتيب الأولويات إذا كان هناك أكثر من إجراء",
      ]}
      stepsTitle="مسار العمل للشركات القائمة"
      steps={[
        "فهم وضع الشركة الحالي",
        "تحديد الإجراء المطلوب",
        "مراجعة الوثائق والبيانات",
        "تجهيز ملف التعديل أو التجديد",
        "متابعة الملاحظات",
        "تأكيد الخطوة التالية للتشغيل",
      ]}
      noteTitle="تجهيز المعلومات"
      noteBody="يكفي في البداية إرسال اسم الشركة ونوع الخدمة المطلوبة. إذا كانت هناك رخصة أو شهادة مرتبطة، نحدد لك لاحقاً ما يلزم من وثائق."
      finalCta="أرسل وضع الشركة الحالي"
      related={[
        { href: "/services/amend-existing-company", label: "تعديل شركة قائمة" },
        { href: "/services/renew-registration", label: "تجديد التسجيل" },
        {
          href: "/services/licensing-after-registration",
          label: "متطلبات التشغيل",
        },
      ]}
      currentLabel="الشركات المسجلة"
    />
  );
}
