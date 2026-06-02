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
    path: "/services/register-new-business",
    title: locale === "ar" ? "تسجيل شركة في ASEZA | تأسيس شركة في منطقة العقبة الاقتصادية الخاصة" : "Company Registration in ASEZA | Setting Up a Company in the Aqaba Special Economic Zone",
    description: locale === "ar" ? "مساعدة عملية لتسجيل شركة أو مؤسسة في ASEZA: اختيار النشاط، تحديد المسار، ترتيب ملف التسجيل بعد الاتفاق، والمتابعة." : "Practical support for registering a company or establishment in ASEZA: defining your business activity, choosing the right structure, preparing the registration file once engaged, and ongoing follow-up.",
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
        label: ar ? "دعم عملي لتسجيل الشركات في العقبة" : "Practical support for company registration in Aqaba",
        title: ar ? "تسجيل شركة / مؤسسة لأول مرة في ASEZA" : "Registering a New Company or Establishment in ASEZA",
        description: ar ? "نساعدك على بدء ملف تسجيل شركة جديدة في العقبة، من تحديد النشاط والشكل المناسب إلى تجهيز المتطلبات والمتابعة بعد الاتفاق على نطاق الخدمة." : "We help you open a new company registration file in Aqaba, from defining your business activity and the right structure to preparing the requirements and following up once the scope of work is agreed.",
        ctaLabel: ar ? "احصل على عرض خدمة تسجيل" : "Request a registration service quote",
        whatsappMessage: ar ? `مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟` : `Hello, I would like to register a company in ASEZA.
Intended business activity:
Is the company new or existing?
Are there any foreign partners?
Is the activity import/export, services, or manufacturing?`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نحدد لك الخطوة التالية بناءً على المعلومات الأولية." : "We define your next step based on the initial information you provide.",
          ar ? "بعد تحديد نطاق الخدمة، نوضح لك الوثائق المطلوبة للمتابعة." : "Once the scope of work is agreed, we clarify the documents required to proceed.",
          ar ? "نرتب بيانات الشركاء والمفوضين والعنوان." : "We organize the details of partners, authorized signatories, and the address.",
          ar ? "نوضح ما يلزم بعد التسجيل لبدء التشغيل." : "We explain what is needed after registration to begin operations."
        ],
        forWho: [
          ar ? "مستثمر يريد تأسيس شركة جديدة في العقبة." : "An investor looking to establish a new company in Aqaba.",
          ar ? "صاحب مشروع يريد نقل النشاط إلى ASEZA." : "A business owner looking to relocate their activity to ASEZA.",
          ar ? "شركة ناشئة تحتاج مسار تسجيل واضح." : "A startup that needs a clear registration path.",
          ar ? "مستثمر لم يحدد بعد الشكل أو النشاط المناسب." : "An investor who has not yet decided on the right structure or business activity."
        ],
        coreTitle: ar ? "مسار التسجيل" : "The registration path",
        coreIntro: ar ? "التسجيل هو الخطوة الأولى. بعض الأنشطة تحتاج بعد التسجيل إلى متطلبات تشغيل مثل موقع، صحة وسلامة، بيئة، أو موافقات إضافية. سنوضح لك ذلك ضمن الخطة." : "Registration is the first step. After registration, some activities require operating prerequisites such as premises, health and safety, environmental compliance, or additional approvals. We will clarify these as part of the plan.",
        coreItems: [
          ar ? "صياغة النشاط بطريقة واضحة ومناسبة للملف." : "Drafting the business activity clearly and appropriately for the file.",
          ar ? "ترتيب بيانات الشركاء والحصص والمفوضين." : "Organizing details of partners, shareholdings, and authorized signatories.",
          ar ? "تجهيز قائمة الوثائق المطلوبة للمرحلة التالية بعد الاتفاق." : "Preparing the list of documents required for the next stage once engaged.",
          ar ? "تحديد الخطوة التالية بعد صدور التسجيل." : "Defining the next step once the registration is issued."
        ],
        needs: [
          ar ? "وصف النشاط التجاري أو الخدمي." : "A description of the commercial or service activity.",
          ar ? "أسماء الشركاء أو المالكين وجنسياتهم." : "Names and nationalities of the partners or owners.",
          ar ? "الشكل المفضل إن كان معروفاً." : "The preferred legal structure, if known.",
          ar ? "العنوان داخل العقبة إن وجد." : "The address within Aqaba, if available.",
          ar ? "هل يوجد مالك أو شركة أجنبية؟" : "Is there a foreign owner or company involved?",
          ar ? "موعد البدء المتوقع." : "The expected start date."
        ],
        steps: [
          ar ? "نحدد النشاط والمسار المناسب." : "We define the business activity and the appropriate path.",
          ar ? "بعد تحديد نطاق الخدمة، نرسل لك قائمة الوثائق المطلوبة." : "Once the scope of work is agreed, we send you the list of required documents.",
          ar ? "نرتب ملف التسجيل والبيانات الأساسية." : "We organize the registration file and the core information.",
          ar ? "نتابع الخطوات ونوضح الملاحظات أولاً بأول." : "We follow up on each step and flag any observations as they arise.",
          ar ? "بعد التسجيل نحدد متطلبات التشغيل التالية." : "After registration, we identify the next operating requirements."
        ],
        afterTitle: ar ? "بعد التسجيل" : "After registration",
        after: [
          ar ? "نحدد ما إذا كان النشاط يحتاج ترخيصاً أو موافقات تشغيل." : "We determine whether the activity requires licensing or operating approvals.",
          ar ? "نساعدك على تجهيز متطلبات الموقع أو الصحة والسلامة أو البيئة عند الحاجة." : "We help you prepare premises, health and safety, or environmental requirements where needed.",
          ar ? "نوضح لك الالتزامات التالية مثل التجديد أو التعديلات المستقبلية." : "We clarify your ongoing obligations, such as renewal or future amendments."
        ],
        related: [
          { label: ar ? "مراجعة النشاط" : "Business activity review", href: "/services/activity-review" },
          { label: ar ? "شركة أجنبية / فرع أجنبي" : "Foreign company / foreign branch", href: "/services/register-foreign-branch" },
          { label: ar ? "الترخيص بعد التسجيل" : "Licensing after registration", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
