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
    path: "/services/amend-existing-company",
    title: "تعديل بيانات شركة مسجلة في ASEZA",
    description: "مساعدة الشركات المسجلة في ASEZA على تعديل النشاط أو العنوان أو المفوضين أو الشركاء أو الاسم، مع تحديد الوثائق بعد الاتفاق على نطاق الخدمة.",
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
        label: "دعم عملي للشركات القائمة",
        title: "تعديل بيانات شركة مسجلة في ASEZA",
        description: "نساعدك على تحديد نوع التعديل والمسار الصحيح، ثم نوضح الوثائق المطلوبة للمتابعة بعد الاتفاق على نطاق الخدمة.",
        ctaLabel: "أرسل نوع التعديل",
        whatsappMessage: `مرحباً، لدي شركة مسجلة في ASEZA وأريد تعديل بياناتها.
اسم الشركة:
نوع التعديل:
البيانات الحالية:
البيانات المطلوبة:`,
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نحدد نوع التعديل والمسار المناسب.",
          "نراجع أثر التعديل على التسجيل أو التشغيل.",
          "بعد تحديد نطاق الخدمة، نرتب الوثائق والقرارات المطلوبة.",
          "نوضح الخطوة التالية قبل التقديم."
        ],
        forWho: [
          "شركة مسجلة تريد تعديل نشاطها.",
          "شركة غيّرت العنوان أو الموقع.",
          "شركة تريد تحديث المفوضين أو الشركاء.",
          "شركة تحتاج تصحيح بيانات أو تعديل الاسم أو الغايات."
        ],
        coreTitle: "ما نوع التعديل؟",
        coreItems: [
          "تعديل النشاط.",
          "تعديل العنوان.",
          "تعديل المفوضين.",
          "تعديل الشركاء.",
          "تعديل الاسم أو الغايات.",
          "تصحيح بيانات."
        ],
        needs: [
          "اسم الشركة ورقم التسجيل إن وجد.",
          "نوع التعديل المطلوب.",
          "سبب التعديل أو القرار الداخلي.",
          "بيانات المفوضين الحاليين والجدد إن وجدت.",
          "العنوان أو النشاط الجديد إن كان هو التعديل.",
          "هل توجد قرارات أو بيانات داعمة للتعديل؟"
        ],
        steps: [
          "نحدد نوع التعديل بدقة.",
          "بعد تحديد نطاق الخدمة، نوضح الوثائق المطلوبة لهذا النوع.",
          "نرتب الملف والقرارات الداعمة.",
          "نتابع الملاحظات حتى اكتمال الإجراء.",
          "نوضح أثر التعديل على الترخيص أو التجديد."
        ],
        afterTitle: "الوثائق حسب نوع التعديل",
        after: [
          "تعديل النشاط يحتاج وصفاً واضحاً للنشاط الجديد.",
          "تعديل العنوان يحتاج بيانات الموقع الجديدة.",
          "تعديل المفوضين أو الشركاء يحتاج قرارات وبيانات الأطراف.",
          "تصحيح البيانات يحتاج تحديد الخطأ والوثيقة الداعمة."
        ],
        related: [
          { label: "تجديد التسجيل", href: "/services/renew-registration" },
          { label: "مراجعة النشاط", href: "/services/activity-review" },
          { label: "الترخيص بعد التسجيل", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
