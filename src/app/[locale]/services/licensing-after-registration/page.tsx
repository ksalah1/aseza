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
    title: locale === "ar" ? "الترخيص بعد تسجيل الشركة في ASEZA | متطلبات بدء التشغيل" : "Licensing After Registering Your Company with ASEZA | Start-Up Requirements",
    description: locale === "ar" ? "تحديد متطلبات التشغيل بعد تسجيل الشركة في ASEZA مثل الموقع والشهادات وموافقات الصحة والسلامة والبيئة." : "Identifying the operating requirements that follow company registration with ASEZA, such as premises, certificates, and health, safety, and environmental approvals.",
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
  const ar = locale === "ar";

  return (
    <ServicePageTemplate
      locale={locale}
      content={{
        label: ar ? "تشغيل الشركة بعد التسجيل" : "Operating the company after registration",
        title: ar ? "متطلبات التشغيل بعد تسجيل الشركة" : "Operating Requirements After Company Registration",
        description: ar ? "بعد تسجيل الشركة، نساعدك على معرفة ما تحتاجه لبدء النشاط فعلياً: موقع، شهادات، موافقات، صحة وسلامة، بيئة، أو متطلبات تشغيل حسب النشاط." : "Once your company is registered, we help you understand what is needed to actually begin operations: premises, certificates, approvals, health and safety, environmental requirements, and any operating requirements specific to your activity.",
        ctaLabel: ar ? "جهّز متطلبات التشغيل" : "Prepare your operating requirements",
        whatsappMessage: ar ? `مرحباً، لدي شركة مسجلة في ASEZA وأريد معرفة متطلبات التشغيل.
اسم الشركة:
النشاط الفعلي:
نوع الموقع أو التخزين إن وجد:
هل توجد موافقات سابقة؟` : `Hello, I have a company registered with ASEZA and would like to understand the operating requirements.
Company name:
Actual business activity:
Type of premises or storage, if any:
Are there any prior approvals?`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نبدأ من بيانات التسجيل والنشاط الفعلي." : "We start from your registration details and actual business activity.",
          ar ? "نحدد متطلبات الموقع والتشغيل." : "We identify the premises and operating requirements.",
          ar ? "نرتب قائمة الشهادات أو الموافقات المطلوبة." : "We compile the list of required certificates or approvals.",
          ar ? "نساعدك على تقليل التأخير قبل بدء العمل." : "We help you minimize delays before commencing operations."
        ],
        forWho: [
          ar ? "حصلت على شهادة التسجيل وتريد بدء التشغيل." : "You have obtained your registration certificate and want to begin operations.",
          ar ? "لديك مكتب أو مستودع أو محل أو موقع." : "You have an office, warehouse, shop, or site.",
          ar ? "نشاطك يتضمن تخزين، غذاء، مواد، تصنيع، أو خدمات ميدانية." : "Your activity involves storage, food, materials, manufacturing, or on-site services.",
          ar ? "تريد معرفة ما يلزم قبل بدء العمل." : "You want to know what is required before commencing operations."
        ],
        coreTitle: ar ? "ماذا نحدد؟" : "What do we determine?",
        coreItems: [
          ar ? "شهادة التسجيل." : "The registration certificate.",
          ar ? "النشاط الفعلي." : "The actual business activity.",
          ar ? "الموقع." : "The premises.",
          ar ? "طبيعة البضائع أو الخدمات." : "The nature of the goods or services.",
          ar ? "متطلبات الصحة والسلامة والبيئة." : "Health, safety, and environmental requirements.",
          ar ? "أي موافقات تشغيلية." : "Any operating approvals."
        ],
        needs: [
          ar ? "اسم الشركة ورقم التسجيل إن وجد." : "Company name and registration number, if available.",
          ar ? "وصف التشغيل الفعلي." : "A description of the actual operations.",
          ar ? "عنوان الموقع أو المستودع أو المكتب." : "The address of the site, warehouse, or office.",
          ar ? "نوع البضائع أو المواد أو الخدمات." : "The type of goods, materials, or services.",
          ar ? "هل توجد شهادات أو موافقات حصلت عليها سابقاً؟" : "Are there any certificates or approvals you have already obtained?",
          ar ? "الموعد المستهدف لبدء التشغيل." : "The target date for commencing operations."
        ],
        steps: [
          ar ? "نحدد حالة التسجيل والنشاط." : "We confirm the registration status and business activity.",
          ar ? "نحدد متطلبات التشغيل حسب النشاط والموقع." : "We determine the operating requirements based on the activity and premises.",
          ar ? "نرسل قائمة واضحة بما يجب تجهيزه." : "We send a clear list of what needs to be prepared.",
          ar ? "نتابع الخطوات والملاحظات المطلوبة." : "We follow up on the required steps and any comments.",
          ar ? "نوضح ما يلزم بعد بدء التشغيل." : "We clarify what is required after operations have commenced."
        ],
        afterTitle: ar ? "جاهزية تشغيل أفضل" : "Better operational readiness",
        after: [
          ar ? "تصبح لديك صورة واضحة عما يلزم قبل بدء العمل." : "You gain a clear picture of what is required before commencing operations.",
          ar ? "يمكن ربط المتطلبات بتجديد الشركة أو تعديل بياناتها لاحقاً." : "The requirements can be linked to the company's renewal or any later amendment of its details.",
          ar ? "نساعدك على ترتيب الأولويات بدل التعامل مع كل متطلب منفصلاً." : "We help you prioritize rather than addressing each requirement in isolation."
        ],
        related: [
          { label: ar ? "تعديل بيانات الشركة" : "Amend company details", href: "/services/amend-existing-company" },
          { label: ar ? "تجديد التسجيل" : "Renew registration", href: "/services/renew-registration" },
          { label: ar ? "الضرائب والجمارك" : "Tax and customs", href: "/tax-customs-aqaba" }
        ],
      }}
    />
  );
}
