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
    path: "/services/licensing-after-registration",
    title: "الترخيص بعد تسجيل الشركة في ASEZA | متطلبات بدء التشغيل",
    description: "تحديد متطلبات التشغيل بعد تسجيل الشركة في ASEZA مثل الموقع والشهادات وموافقات الصحة والسلامة والبيئة.",
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
        label: "تشغيل الشركة بعد التسجيل",
        title: "متطلبات التشغيل بعد تسجيل الشركة",
        description: "بعد تسجيل الشركة، نساعدك على معرفة ما تحتاجه لبدء النشاط فعلياً: موقع، شهادات، موافقات، صحة وسلامة، بيئة، أو متطلبات تشغيل حسب النشاط.",
        ctaLabel: "جهّز متطلبات التشغيل",
        whatsappMessage: `مرحباً، لدي شركة مسجلة في ASEZA وأريد معرفة متطلبات التشغيل.
اسم الشركة:
النشاط الفعلي:
نوع الموقع أو التخزين إن وجد:
هل توجد موافقات سابقة؟`,
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نبدأ من بيانات التسجيل والنشاط الفعلي.",
          "نحدد متطلبات الموقع والتشغيل.",
          "نرتب قائمة الشهادات أو الموافقات المطلوبة.",
          "نساعدك على تقليل التأخير قبل بدء العمل."
        ],
        forWho: [
          "حصلت على شهادة التسجيل وتريد بدء التشغيل.",
          "لديك مكتب أو مستودع أو محل أو موقع.",
          "نشاطك يتضمن تخزين، غذاء، مواد، تصنيع، أو خدمات ميدانية.",
          "تريد معرفة ما يلزم قبل بدء العمل."
        ],
        coreTitle: "ماذا نحدد؟",
        coreItems: [
          "شهادة التسجيل.",
          "النشاط الفعلي.",
          "الموقع.",
          "طبيعة البضائع أو الخدمات.",
          "متطلبات الصحة والسلامة والبيئة.",
          "أي موافقات تشغيلية."
        ],
        needs: [
          "اسم الشركة ورقم التسجيل إن وجد.",
          "وصف التشغيل الفعلي.",
          "عنوان الموقع أو المستودع أو المكتب.",
          "نوع البضائع أو المواد أو الخدمات.",
          "هل توجد شهادات أو موافقات حصلت عليها سابقاً؟",
          "الموعد المستهدف لبدء التشغيل."
        ],
        steps: [
          "نحدد حالة التسجيل والنشاط.",
          "نحدد متطلبات التشغيل حسب النشاط والموقع.",
          "نرسل قائمة واضحة بما يجب تجهيزه.",
          "نتابع الخطوات والملاحظات المطلوبة.",
          "نوضح ما يلزم بعد بدء التشغيل."
        ],
        afterTitle: "جاهزية تشغيل أفضل",
        after: [
          "تصبح لديك صورة واضحة عما يلزم قبل بدء العمل.",
          "يمكن ربط المتطلبات بتجديد الشركة أو تعديل بياناتها لاحقاً.",
          "نساعدك على ترتيب الأولويات بدل التعامل مع كل متطلب منفصلاً."
        ],
        related: [
          { label: "تعديل بيانات الشركة", href: "/services/amend-existing-company" },
          { label: "تجديد التسجيل", href: "/services/renew-registration" },
          { label: "الضرائب والجمارك", href: "/tax-customs-aqaba" }
        ],
      }}
    />
  );
}
