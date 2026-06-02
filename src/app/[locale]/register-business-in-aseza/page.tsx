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
    title:
      locale === "ar"
        ? "تسجيل شركة في ASEZA | تأسيس شركة في منطقة العقبة الاقتصادية الخاصة"
        : "Company Registration in ASEZA | Setting Up a Company in the Aqaba Special Economic Zone",
    description:
      locale === "ar"
        ? "دليل عملي لتسجيل شركة أو مؤسسة في ASEZA، يشمل اختيار النشاط، تحديد الوثائق لاحقاً، الرسوم، وخطوات تأسيس الشركة في منطقة العقبة الاقتصادية الخاصة."
        : "A practical guide to registering a company or establishment in ASEZA, covering activity selection, identifying documents later, fees, and the steps to set up a company in the Aqaba Special Economic Zone.",
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
    <AsezaBusinessGuide
      locale={locale}
      badge={
        ar
          ? "دعم عملي لتسجيل الشركات في العقبة"
          : "Practical support for company registration in Aqaba"
      }
      title={ar ? "تسجيل شركة في ASEZA" : "Company Registration in ASEZA"}
      hero={
        ar
          ? "نساعدك على تحديد مسار تسجيل الشركة، اختيار النشاط، معرفة المتطلبات، وتجهيز ملف التسجيل بعد الاتفاق على نطاق الخدمة."
          : "We help you determine the company registration path, select the business activity, understand the requirements, and prepare the registration file once the scope of work is agreed."
      }
      primaryCta={ar ? "ابدأ طلب تسجيل شركة" : "Start a company registration request"}
      secondaryCta={ar ? "اطّلع على قائمة التجهيز" : "View the registration checklist"}
      secondaryHref="/aseza-registration-checklist"
      whatsappMessage={
        ar
          ? `مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟`
          : `Hello, I would like to register a company in ASEZA.
Intended business activity:
Is the company new or existing?
Are there foreign partners?
Is the activity import/export, services, or manufacturing?`
      }
      valueTitle={ar ? "لماذا هذه الصفحة؟" : "Why this page?"}
      valueBody={
        ar
          ? "هذه هي نقطة البداية الرئيسية لتسجيل شركة جديدة في ASEZA. تساعدك على فهم المسار والرسوم ومتطلبات ما بعد التسجيل قبل طلب الوثائق وفتح الملف."
          : "This is the main starting point for registering a new company in ASEZA. It helps you understand the path, the fees, and post-registration requirements before requesting documents and opening the file."
      }
      mainTitle={ar ? "من يمكنه التسجيل؟" : "Who can register?"}
      mainItems={[
        {
          title: ar ? "مستثمرون وشركات" : "Investors and companies",
          items: [
            ar ? "مستثمر أردني" : "A Jordanian investor",
            ar ? "مستثمر أجنبي" : "A foreign investor",
            ar
              ? "شركة قائمة تريد فتح نشاط في العقبة"
              : "An existing company looking to open an activity in Aqaba",
          ],
        },
        {
          title: ar ? "أنشطة تجارية وتشغيلية" : "Commercial and operational activities",
          items: [
            ar ? "شركة استيراد وتصدير" : "An import and export company",
            ar ? "شركة خدمات أو لوجستيات" : "A services or logistics company",
            ar ? "شركة صناعية أو تجارية" : "An industrial or trading company",
          ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج منك؟" : "What do we need from you?"}
      needs={[
        ar ? "نوع النشاط" : "Type of business activity",
        ar ? "هل الشركة جديدة أم قائمة؟" : "Is the company new or existing?",
        ar ? "جنسية الشركاء" : "Nationality of the partners",
        ar
          ? "هل يوجد شريك أو شركة أجنبية؟"
          : "Is there a foreign partner or company?",
        ar
          ? "هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟"
          : "Is the activity import/export, services, or manufacturing?",
        ar
          ? "هل يوجد موقع أو عنوان في العقبة؟"
          : "Is there a location or address in Aqaba?",
      ]}
      helpTitle={ar ? "كيف نساعد؟" : "How do we help?"}
      help={[
        ar
          ? "مساعدة المستثمرين على اختيار المسار الصحيح"
          : "Helping investors choose the right path",
        ar ? "تجهيز ومتابعة ملف التسجيل" : "Preparing and managing the registration file",
        ar
          ? "تحديد الوثائق المطلوبة بعد وضوح نطاق الخدمة"
          : "Identifying the required documents once the scope of work is clear",
        ar
          ? "توضيح الرسوم الرسمية بعد تأكيدها"
          : "Clarifying the official fees once confirmed",
        ar
          ? "نوضح لك الخطوة التالية بعد التسجيل"
          : "Explaining the next step after registration",
      ]}
      stepsTitle={ar ? "خطوات تسجيل الشركة" : "Company registration steps"}
      steps={[
        ar ? "تحديد النشاط" : "Define the business activity",
        ar ? "اختيار الشكل المناسب للشركة" : "Choose the suitable company structure",
        ar ? "تجهيز الملف بعد الاتفاق" : "Prepare the file once agreed",
        ar ? "تقديم ملف التسجيل" : "Submit the registration file",
        ar ? "دفع الرسوم الرسمية بعد تأكيدها" : "Pay the official fees once confirmed",
        ar
          ? "استلام التسجيل والانتقال لمتطلبات التشغيل"
          : "Receive the registration and move on to operating requirements",
      ]}
      noteTitle={ar ? "بعد التسجيل" : "After registration"}
      noteBody={
        ar
          ? "التسجيل هو الخطوة الأولى. بعض الأنشطة تحتاج بعد التسجيل إلى متطلبات تشغيل مثل موقع، صحة وسلامة، بيئة، أو موافقات إضافية. نوضح لك هذه المتطلبات ضمن الخطة."
          : "Registration is the first step. After registration, some activities require operating requirements such as a location, health and safety, environment, or additional approvals. We outline these requirements as part of the plan."
      }
      finalCta={ar ? "جاهز لبدء تسجيل شركتك؟" : "Ready to start registering your company?"}
      related={[
        {
          href: "/aseza-registration-checklist",
          label: ar ? "قائمة تجهيز التسجيل" : "Registration checklist",
        },
        {
          href: "/aseza-registration-fees",
          label: ar ? "رسوم تسجيل شركة في ASEZA" : "Company registration fees in ASEZA",
        },
        {
          href: "/services/activity-review",
          label: ar ? "مسار النشاط قبل التسجيل" : "Business activity review before registration",
        },
      ]}
      currentLabel={ar ? "تسجيل شركة في ASEZA" : "Company registration in ASEZA"}
    />
  );
}
