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
    path: "/foreign-investors",
    title:
      locale === "ar"
        ? "تأسيس شركة في العقبة للمستثمر الأجنبي | تسجيل شركة في ASEZA"
        : "Company Setup in Aqaba for Foreign Investors | Company Registration in ASEZA",
    description:
      locale === "ar"
        ? "خدمة استشارية لمساعدة المستثمرين الأجانب على اختيار مسار تأسيس شركة أو فرع أجنبي في العقبة، وتحديد الوثائق المطلوبة بعد اختيار المسار المناسب."
        : "An advisory service helping foreign investors choose the right path to set up a company or foreign branch in Aqaba, and identifying the required documents once the appropriate path is selected.",
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
          ? "خدمة استشارية لتجهيز ومتابعة معاملات ASEZA"
          : "Advisory service for preparing and managing ASEZA transactions"
      }
      title={
        ar
          ? "تأسيس شركة في العقبة للمستثمر الأجنبي"
          : "Company Setup in Aqaba for Foreign Investors"
      }
      hero={
        ar
          ? "نساعد المستثمر الأجنبي على اختيار المسار المناسب لدخول السوق من خلال العقبة: شركة جديدة، شركة مملوكة لشركة أجنبية، فرع أجنبي، أو نشاط استيراد وتصدير من خلال ASEZA."
          : "We help foreign investors choose the right path to enter the market through Aqaba: a new company, a company owned by a foreign entity, a foreign branch, or an import and export activity through ASEZA."
      }
      primaryCta={
        ar
          ? "أرسل بلد الشركة والنشاط المطلوب"
          : "Send your company's country and intended activity"
      }
      secondaryCta={ar ? "اختر مسار الشركة الأجنبية" : "Choose the foreign company path"}
      secondaryHref="/services/register-foreign-branch"
      whatsappMessage={
        ar
          ? `مرحباً، أنا مستثمر أجنبي وأريد معرفة المسار المناسب للتسجيل في ASEZA.
بلد المستثمر أو الشركة الأم:
النشاط المطلوب:
هل تريد فرعاً أم شركة جديدة أم أنك غير متأكد؟`
          : `Hello, I am a foreign investor and would like to know the right path for registering in ASEZA.
Country of investor or parent company:
Intended business activity:
Do you want a branch, a new company, or are you unsure?`
      }
      valueTitle={ar ? "ماذا نحدد لك؟" : "What do we define for you?"}
      valueBody={
        ar
          ? "نرتب الصورة العملية قبل البدء: المسار الأنسب، التصديقات والترجمات المتوقعة، صياغة النشاط، ومتطلبات ما بعد التسجيل. نحدد المسار المناسب أولاً. بعد الاتفاق على المتابعة، نطلب وثائق الشركة الأم اللازمة."
          : "We set out the practical picture before you start: the most suitable path, the expected attestations and translations, the wording of the business activity, and post-registration requirements. We define the right path first. Once the engagement is agreed, we request the required parent company documents."
      }
      mainTitle={
        ar
          ? "ما المسارات المتاحة للمستثمر الأجنبي؟"
          : "What paths are available to foreign investors?"
      }
      mainItems={[
        {
          title: ar ? "مسارات تأسيس" : "Setup paths",
          items: [
            ar ? "تأسيس شركة جديدة في العقبة" : "Setting up a new company in Aqaba",
            ar
              ? "شركة أردنية مملوكة لشركة أجنبية"
              : "A Jordanian company owned by a foreign entity",
            ar ? "فرع شركة أجنبية" : "A foreign company branch",
          ],
        },
        {
          title: ar ? "مسارات تشغيل" : "Operating paths",
          items: [
            ar ? "مكتب تمثيلي أو إقليمي" : "A representative or regional office",
            ar
              ? "نشاط استيراد وتصدير أو لوجستيات"
              : "An import and export or logistics activity",
          ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج منك؟" : "What do we need from you?"}
      needs={[
        ar ? "الجنسية أو بلد الشركة الأم" : "Nationality or country of the parent company",
        ar ? "النشاط المطلوب" : "The intended business activity",
        ar ? "هل يوجد شركاء أردنيون؟" : "Are there Jordanian partners?",
        ar
          ? "هل الشركة الأم قائمة خارج الأردن؟"
          : "Is the parent company established outside Jordan?",
        ar
          ? "هل يوجد عقد أو مشروع داخل الأردن؟"
          : "Is there a contract or project inside Jordan?",
        ar
          ? "هل النشاط تجارة، استيراد، تصدير، لوجستيات، أو خدمات؟"
          : "Is the activity trade, import, export, logistics, or services?",
      ]}
      helpTitle={ar ? "كيف نساعد؟" : "How do we help?"}
      help={[
        ar
          ? "تحديد المسار الأنسب لدخول السوق"
          : "Identifying the most suitable path to enter the market",
        ar
          ? "تحديد متطلبات الشركة أو الفرع بعد اختيار المسار"
          : "Defining the company or branch requirements once the path is chosen",
        ar
          ? "توضيح ما يحتاج ترجمة أو تصديق"
          : "Clarifying what requires translation or attestation",
        ar
          ? "صياغة النشاط بشكل مناسب للتسجيل"
          : "Drafting the business activity appropriately for registration",
        ar ? "ترتيب متطلبات ما بعد التسجيل" : "Arranging post-registration requirements",
      ]}
      stepsTitle={ar ? "هل يمكن البدء من الخارج؟" : "Can you start from abroad?"}
      steps={[
        ar
          ? "إرسال وصف النشاط وبيانات الشركة"
          : "Send a description of the activity and company details",
        ar ? "تحديد المسار الأولي عن بُعد" : "Determine the initial path remotely",
        ar
          ? "تحديد المتطلبات اللازمة للشركة الأم"
          : "Define the required parent company documents",
        ar
          ? "بعد الاتفاق على المتابعة، نطلب الوثائق اللازمة مثل شهادة التسجيل، قرار الشركة الأم، التفويض، الترجمة أو التصديق."
          : "Once the engagement is agreed, we request the required documents such as the certificate of registration, parent company resolution, power of attorney, and translation or attestation.",
        ar ? "تجهيز ملف التسجيل" : "Prepare the registration file",
        ar
          ? "متابعة الخطوة التالية داخل العقبة"
          : "Follow up on the next step inside Aqaba",
      ]}
      noteTitle={ar ? "بعد التسجيل" : "After registration"}
      noteBody={
        ar
          ? "بعد التسجيل نراجع معك الموقع أو العنوان، شهادات التشغيل، النشاط الفعلي، الحسابات والبنوك، التجديد السنوي، وتصاريح العمل عند الحاجة."
          : "After registration we review with you the location or address, operating certificates, the actual activity, accounts and banking, annual renewal, and work permits when needed."
      }
      finalCta={
        ar
          ? "أرسل بلد الشركة والنشاط المطلوب"
          : "Send your company's country and intended activity"
      }
      related={[
        {
          href: "/services/register-foreign-branch",
          label: ar ? "تسجيل فرع شركة أجنبية" : "Register a foreign company branch",
        },
        {
          href: "/aseza-registration-checklist",
          label: ar ? "قائمة تجهيز التسجيل" : "Registration checklist",
        },
        {
          href: "/aseza-registration-fees",
          label: ar ? "رسوم التسجيل" : "Registration fees",
        },
      ]}
      currentLabel={ar ? "المستثمر الأجنبي" : "Foreign investor"}
    />
  );
}
