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
    path: "/services/renew-registration",
    title: "تجديد تسجيل شركة في ASEZA | التجديد السنوي في العقبة",
    description: "مساعدة الشركات المسجلة في ASEZA على مراجعة حالة التسجيل والأنشطة والرسوم والبيانات قبل التجديد السنوي.",
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
        label: "متابعة التجديد السنوي للشركات المسجلة",
        title: "تجديد تسجيل شركة / مؤسسة في ASEZA",
        description: "نساعدك على مراجعة حالة التسجيل، تاريخ الانتهاء، الأنشطة، الرسوم، والبيانات التي يجب تحديثها قبل التجديد السنوي.",
        ctaLabel: "أرسل بيانات التجديد",
        whatsappMessage: `مرحباً، أريد تجديد تسجيل شركة في ASEZA.
اسم الشركة:
تاريخ آخر تجديد إن وجد:
هل توجد تغييرات في النشاط أو العنوان أو المفوضين؟`,
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نحدد تاريخ الانتهاء وحالة التسجيل من البيانات الأولية.",
          "نحدد البيانات التي تحتاج تحديثاً قبل التجديد.",
          "نوضح الفرق بين التجديد والتعديل والترخيص.",
          "نرتب الملف والخطوة التالية."
        ],
        forWho: [
          "شركة مسجلة تريد التجديد السنوي.",
          "شركة لديها تسجيل قريب الانتهاء.",
          "شركة متأخرة وتريد معرفة المتطلبات.",
          "شركة تريد التأكد من بياناتها قبل التجديد."
        ],
        coreTitle: "ماذا نحدد قبل التجديد؟",
        coreItems: [
          "حالة التسجيل وتاريخ الانتهاء.",
          "الأنشطة المسجلة.",
          "العنوان وبيانات المفوضين.",
          "الرسوم أو الالتزامات الظاهرة قبل التجديد.",
          "الرخص أو شهادات التشغيل المرتبطة بالنشاط."
        ],
        needs: [
          "اسم الشركة.",
          "رقم التسجيل إن وجد.",
          "تاريخ انتهاء التسجيل أو آخر تجديد.",
          "الأنشطة المسجلة.",
          "أي تغيير في النشاط أو العنوان أو المفوضين.",
          "هل توجد رخصة أو شهادة تشغيل مرتبطة؟"
        ],
        steps: [
          "نحدد حالة التسجيل والبيانات الأساسية.",
          "نحدد ما يحتاج تحديثاً قبل التجديد.",
          "نرتب الوثائق والرسوم المطلوبة بعد تأكيدها.",
          "نتابع ملف التجديد.",
          "نوضح أي خطوة تشغيلية أو تعديل لاحق."
        ],
        afterTitle: "الفرق بين التجديد والتعديل والترخيص",
        after: [
          "التجديد يحافظ على استمرار التسجيل السنوي.",
          "التعديل يستخدم عند تغيير النشاط أو العنوان أو المفوضين أو بيانات الشركة.",
          "الترخيص أو متطلبات التشغيل ترتبط ببدء النشاط فعلياً وموقع العمل."
        ],
        related: [
          { label: "تعديل بيانات الشركة", href: "/services/amend-existing-company" },
          { label: "الترخيص بعد التسجيل", href: "/services/licensing-after-registration" },
          { label: "تواصل معنا", href: "/contact" }
        ],
      }}
    />
  );
}
