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
    title:
      locale === "ar"
        ? "وثائق تسجيل شركة في ASEZA | قائمة متطلبات تأسيس شركة في العقبة"
        : "Company Registration Documents in ASEZA | Registration Requirements Checklist in Aqaba",
    description:
      locale === "ar"
        ? "قائمة عملية بالوثائق المطلوبة لتسجيل شركة في ASEZA، تشمل الشركات الجديدة، الشركات القائمة، الشركات الأجنبية، وأنشطة الاستيراد والتصدير."
        : "A practical checklist of the documents required to register a company in ASEZA, covering new companies, existing companies, foreign companies, and import/export activities.",
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
      badge={ar ? "قائمة تجهيز للمتطلبات اللاحقة" : "Checklist to prepare for the next steps"}
      title={ar ? "قائمة وثائق تسجيل شركة في ASEZA" : "Company Registration Documents Checklist in ASEZA"}
      hero={ar ? "هذه القائمة تساعدك على التجهيز للمتطلبات اللاحقة. لا ترسل الوثائق قبل تحديد نطاق الخدمة والاتفاق على المتابعة." : "This checklist helps you prepare for the requirements that follow. Please do not send any documents until the scope of work is defined and the engagement is agreed."}
      primaryCta={ar ? "أرسل نوع الشركة والنشاط لنحدد القائمة المناسبة" : "Send your company type and business activity so we can identify the right checklist"}
      secondaryCta={ar ? "ابدأ تسجيل الشركة" : "Start company registration"}
      secondaryHref="/register-business-in-aseza"
      whatsappMessage={
        ar
          ? `مرحباً، أريد معرفة المتطلبات المناسبة لتسجيل شركة في ASEZA.
نوع الشركة:
النشاط:`
          : `Hello, I would like to know the requirements for registering a company in ASEZA.
Company type:
Business activity:`
      }
      valueTitle={ar ? "كيف تستخدم هذه القائمة؟" : "How to use this checklist"}
      valueBody={ar ? "ابدأ بتحديد نوع الشركة والنشاط، ثم جهّز المعلومات العامة فقط. هذه القائمة للتخطيط وليست دعوة لإرسال الوثائق الآن؛ نطلب الوثائق بعد تحديد نطاق الخدمة والاتفاق على المتابعة." : "Start by identifying your company type and business activity, then prepare general information only. This checklist is for planning purposes and is not an invitation to send documents now; we request documents only after the scope of work is defined and the engagement is agreed."}
      mainTitle={ar ? "متطلبات التجهيز بحسب نوع الشركة" : "Preparation requirements by company type"}
      mainItems={[
        {
          title: ar ? "وثائق شركة جديدة" : "New company documents",
          items: ar
            ? [
                "أسماء الشركاء",
                "هويات أو جوازات",
                "نسب الملكية",
                "اسم الشركة المقترح",
                "النشاط المطلوب",
                "بيانات المفوض بالتوقيع",
              ]
            : [
                "Names of the partners",
                "ID cards or passports",
                "Ownership percentages",
                "Proposed company name",
                "Intended business activity",
                "Details of the authorized signatory",
              ],
        },
        {
          title: ar ? "وثائق شركة أردنية قائمة" : "Existing Jordanian company documents",
          items: ar
            ? [
                "شهادة تسجيل الشركة",
                "عقد التأسيس أو النظام الأساسي",
                "شهادة المفوضين بالتوقيع",
                "قرار الشركاء إذا لزم",
                "وصف النشاط المطلوب في العقبة",
              ]
            : [
                "Company registration certificate",
                "Memorandum or articles of association",
                "Authorized signatories certificate",
                "Partners' resolution, if required",
                "Description of the intended business activity in Aqaba",
              ],
        },
        {
          title: ar ? "وثائق شركة أجنبية" : "Foreign company documents",
          items: ar
            ? [
                "شهادة تسجيل الشركة الأم",
                "عقد التأسيس والنظام الأساسي",
                "قرار الشركة الأم",
                "المفوضون بالتوقيع",
                "وكالة أو تفويض",
                "ترجمة وتصديق الوثائق",
              ]
            : [
                "Parent company registration certificate",
                "Memorandum and articles of association",
                "Parent company resolution",
                "Authorized signatories",
                "Power of attorney or authorization",
                "Translation and authentication of documents",
              ],
        },
        {
          title: ar ? "وثائق نشاط استيراد وتصدير" : "Import and export activity documents",
          items: ar
            ? [
                "نوع البضائع",
                "مصدر البضائع",
                "هل يوجد تخزين؟",
                "هل يوجد بيع محلي أو إعادة تصدير؟",
                "هل البضائع تحتاج موافقات خاصة؟",
              ]
            : [
                "Type of goods",
                "Source of goods",
                "Is storage involved?",
                "Is there local sale or re-export?",
                "Do the goods require special approvals?",
              ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج منك؟" : "What we need from you"}
      needs={
        ar
          ? [
              "نوع الشركة",
              "النشاط المطلوب",
              "هل الشركة جديدة أم قائمة؟",
              "هل توجد شركة أجنبية؟",
              "هل النشاط استيراد وتصدير؟",
              "هل يوجد موقع أو عنوان في العقبة؟",
            ]
          : [
              "Company type",
              "Intended business activity",
              "Is the company new or existing?",
              "Is a foreign company involved?",
              "Is the activity import and export?",
              "Is there a location or address in Aqaba?",
            ]
      }
      helpTitle={ar ? "كيف نساعد؟" : "How we help"}
      help={
        ar
          ? [
              "تحديد القائمة المناسبة لحالتك",
              "ترتيب الوثائق حسب الأولوية",
              "توضيح ما يحتاج ترجمة أو تصديق",
              "تجنب تجهيز وثائق غير مطلوبة قبل وضوح المسار",
              "تجهيز الملف بعد الاتفاق على المتابعة",
            ]
          : [
              "Identifying the right checklist for your case",
              "Prioritizing the documents in order",
              "Clarifying what needs translation or authentication",
              "Avoiding the preparation of documents that are not required before the path is clear",
              "Preparing the file once the engagement is agreed",
            ]
      }
      stepsTitle={ar ? "خطوات تجهيز القائمة" : "Steps to prepare the checklist"}
      steps={
        ar
          ? [
              "حدد نوع الشركة",
              "حدد النشاط",
              "أرسل المعلومات العامة",
              "نحدد المسار المناسب",
              "نرسل قائمة الوثائق الأقرب",
              "نبدأ تجهيز ملف التسجيل بعد الاتفاق",
            ]
          : [
              "Identify the company type",
              "Identify the business activity",
              "Send the general information",
              "We determine the appropriate path",
              "We send the most relevant document checklist",
              "We begin preparing the registration file once agreed",
            ]
      }
      noteTitle={ar ? "ملاحظة تجارية مهمة" : "Important commercial note"}
      noteBody={ar ? "هذه القائمة تساعدك على التجهيز للمتطلبات اللاحقة. لا ترسل الوثائق قبل تحديد نطاق الخدمة والاتفاق على المتابعة." : "This checklist helps you prepare for the requirements that follow. Please do not send any documents until the scope of work is defined and the engagement is agreed."}
      finalCta={ar ? "أرسل نوع الشركة والنشاط لنحدد القائمة المناسبة" : "Send your company type and business activity so we can identify the right checklist"}
      related={[
        { href: "/register-business-in-aseza", label: ar ? "تسجيل شركة في ASEZA" : "Company registration in ASEZA" },
        { href: "/foreign-investors", label: ar ? "المستثمر الأجنبي" : "Foreign investor" },
        { href: "/aseza-registration-fees", label: ar ? "رسوم التسجيل" : "Registration fees" },
      ]}
      currentLabel={ar ? "قائمة الوثائق" : "Document checklist"}
    />
  );
}
