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
    path: "/aseza-registration-checklist",
    title: "وثائق تسجيل شركة في ASEZA | قائمة متطلبات تأسيس شركة في العقبة",
    description:
      "قائمة عملية بالوثائق المطلوبة لتسجيل شركة في ASEZA، تشمل الشركات الجديدة، الشركات القائمة، الشركات الأجنبية، وأنشطة الاستيراد والتصدير.",
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
      badge="قائمة عملية قبل فتح ملف التسجيل"
      title="قائمة وثائق تسجيل شركة في ASEZA"
      hero="استخدم هذه القائمة لتجهيز الوثائق الأساسية قبل تسجيل شركة أو مؤسسة في منطقة العقبة الاقتصادية الخاصة. أرسل لنا نوع الشركة والنشاط لنحدد لك القائمة المناسبة لحالتك."
      primaryCta="احصل على قائمة الوثائق المناسبة"
      secondaryCta="ابدأ تسجيل الشركة"
      secondaryHref="/register-business-in-aseza"
      whatsappMessage="مرحباً، أريد معرفة وثائق تسجيل شركة في ASEZA. نوع الشركة: ... النشاط: ..."
      valueTitle="كيف تستخدم هذه القائمة؟"
      valueBody="ابدأ بتحديد نوع الشركة والنشاط، ثم جهّز المعلومات العامة فقط. بعد ذلك نحدد لك الوثائق الدقيقة المطلوبة للشركة الجديدة أو القائمة أو الأجنبية أو نشاط الاستيراد والتصدير."
      mainTitle="الوثائق الأساسية حسب الحالة"
      mainItems={[
        {
          title: "وثائق شركة جديدة",
          items: [
            "أسماء الشركاء",
            "هويات أو جوازات",
            "نسب الملكية",
            "اسم الشركة المقترح",
            "النشاط المطلوب",
            "بيانات المفوض بالتوقيع",
          ],
        },
        {
          title: "وثائق شركة أردنية قائمة",
          items: [
            "شهادة تسجيل الشركة",
            "عقد التأسيس أو النظام الأساسي",
            "شهادة المفوضين بالتوقيع",
            "قرار الشركاء إذا لزم",
            "وصف النشاط المطلوب في العقبة",
          ],
        },
        {
          title: "وثائق شركة أجنبية",
          items: [
            "شهادة تسجيل الشركة الأم",
            "عقد التأسيس والنظام الأساسي",
            "قرار الشركة الأم",
            "المفوضون بالتوقيع",
            "وكالة أو تفويض",
            "ترجمة وتصديق الوثائق",
          ],
        },
        {
          title: "وثائق نشاط استيراد وتصدير",
          items: [
            "نوع البضائع",
            "مصدر البضائع",
            "هل يوجد تخزين؟",
            "هل يوجد بيع محلي أو إعادة تصدير؟",
            "هل البضائع تحتاج موافقات خاصة؟",
          ],
        },
      ]}
      needsTitle="ماذا نحتاج منك؟"
      needs={[
        "نوع الشركة",
        "النشاط المطلوب",
        "هل الشركة جديدة أم قائمة؟",
        "هل توجد شركة أجنبية؟",
        "هل النشاط استيراد وتصدير؟",
        "هل يوجد موقع أو عنوان في العقبة؟",
      ]}
      helpTitle="كيف نساعد؟"
      help={[
        "تحديد القائمة المناسبة لحالتك",
        "ترتيب الوثائق حسب الأولوية",
        "توضيح ما يحتاج ترجمة أو تصديق",
        "تجنب إرسال وثائق غير مطلوبة",
        "تجهيز الملف قبل بدء التسجيل",
      ]}
      stepsTitle="خطوات تجهيز القائمة"
      steps={[
        "حدد نوع الشركة",
        "حدد النشاط",
        "أرسل المعلومات العامة",
        "نراجع المسار المناسب",
        "نرسل قائمة الوثائق الأقرب",
        "نبدأ تجهيز ملف التسجيل",
      ]}
      noteTitle="ماذا لا ترسل في البداية؟"
      noteBody="لا ترسل وثائق حساسة في أول رسالة. أرسل نوع الشركة والنشاط فقط، وسنخبرك بما يلزم."
      finalCta="أرسل نوع الشركة والنشاط وسنرسل لك القائمة الأقرب"
      related={[
        { href: "/register-business-in-aseza", label: "تسجيل شركة في ASEZA" },
        { href: "/foreign-investors", label: "المستثمر الأجنبي" },
        { href: "/aseza-registration-fees", label: "رسوم التسجيل" },
      ]}
      currentLabel="قائمة الوثائق"
    />
  );
}
