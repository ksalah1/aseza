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
    path: "/import-export-company-aseza",
    title:
      locale === "ar"
        ? "تسجيل شركة استيراد وتصدير في العقبة | شركة تجارية في ASEZA"
        : "Register an Import and Export Company in Aqaba | Trading Company in ASEZA",
    description:
      locale === "ar"
        ? "خدمة استشارية لتجهيز تسجيل شركة استيراد وتصدير في منطقة العقبة الاقتصادية الخاصة، مع مسار النشاط، نوع البضائع، التخزين، والمتطلبات اللاحقة."
        : "An advisory service for preparing the registration of an import and export company in the Aqaba Special Economic Zone, covering the business activity, type of goods, storage, and subsequent requirements.",
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
          ? "تحديد مسار التسجيل والمتابعة"
          : "Defining the registration path and engagement"
      }
      title={
        ar
          ? "تسجيل شركة استيراد وتصدير في العقبة"
          : "Register an Import and Export Company in Aqaba"
      }
      hero={
        ar
          ? "نساعدك على تحديد مسار تسجيل شركة استيراد وتصدير في ASEZA حسب نوع البضائع، التخزين، البيع داخل الأردن، أو إعادة التصدير."
          : "We help you determine the path to register an import and export company in ASEZA based on the type of goods, storage, sale within Jordan, or re-export."
      }
      primaryCta={
        ar ? "أرسل نوع البضائع ونموذج العمل" : "Send the type of goods and your business model"
      }
      secondaryCta={
        ar ? "حدد مسار النشاط قبل التسجيل" : "Define the business activity before registration"
      }
      secondaryHref="/services/activity-review"
      whatsappMessage={
        ar
          ? `مرحباً، أريد تسجيل شركة استيراد وتصدير في العقبة.
نوع البضائع:
هل يوجد تخزين؟
هل يوجد بيع داخل الأردن أو إعادة تصدير؟`
          : `Hello, I would like to register an import and export company in Aqaba.
Type of goods:
Is storage involved?
Will there be sale within Jordan or re-export?`
      }
      valueTitle={
        ar
          ? "لماذا العقبة لشركات الاستيراد والتصدير؟"
          : "Why Aqaba for import and export companies?"
      }
      valueBody={
        ar
          ? "العقبة موقع بحري ولوجستي مهم، مناسب للتجارة وإعادة التصدير، وقريب من الميناء والمرافق اللوجستية للشركات التي تتعامل مع بضائع إقليمية ودولية."
          : "Aqaba is an important maritime and logistics hub, well suited to trade and re-export, and close to the port and logistics facilities for companies handling regional and international goods."
      }
      mainTitle={ar ? "ماذا يجب تحديده قبل التسجيل؟" : "What should be defined before registration?"}
      mainItems={[
        {
          title: ar ? "طبيعة التجارة" : "Nature of the trade",
          items: [
            ar ? "نوع البضائع" : "Type of goods",
            ar ? "هل يوجد إعادة تصدير؟" : "Is there re-export?",
            ar ? "هل سيتم البيع داخل الأردن؟" : "Will there be sale within Jordan?",
          ],
        },
        {
          title: ar ? "التشغيل والتخزين" : "Operations and storage",
          items: [
            ar ? "هل يوجد تخزين؟" : "Is there storage?",
            ar
              ? "هل البضائع غذائية، تجميلية، طبية، كيميائية، أو عامة؟"
              : "Are the goods food, cosmetic, medical, chemical, or general?",
            ar
              ? "هل النشاط تجارة فقط أم لوجستيات أيضاً؟"
              : "Is the activity trade only, or logistics as well?",
          ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج منك؟" : "What do we need from you?"}
      needs={[
        ar ? "نوع البضائع" : "Type of goods",
        ar ? "مصدر البضائع" : "Source of the goods",
        ar
          ? "هل يوجد استيراد أو تصدير أو إعادة تصدير؟"
          : "Is there import, export, or re-export?",
        ar ? "هل يوجد تخزين؟" : "Is there storage?",
        ar ? "هل يوجد بيع داخل الأردن؟" : "Is there sale within Jordan?",
        ar ? "هل الشركة محلية أم أجنبية؟" : "Is the company local or foreign?",
        ar ? "هل يوجد موقع في العقبة؟" : "Is there a location in Aqaba?",
      ]}
      helpTitle={ar ? "كيف نساعد؟" : "How do we help?"}
      help={[
        ar ? "صياغة النشاط" : "Drafting the business activity",
        ar
          ? "تحديد المتطلبات اللازمة للمرحلة التالية"
          : "Identifying the requirements for the next stage",
        ar
          ? "تحديد متطلبات التخزين أو الموقع"
          : "Defining storage or location requirements",
        ar
          ? "توضيح الخطوة التالية بعد التسجيل"
          : "Clarifying the next step after registration",
        ar
          ? "ربطك بصفحة الرسوم وقائمة التجهيز"
          : "Connecting you with the fees page and the registration checklist",
      ]}
      stepsTitle={
        ar ? "أنواع بضائع تحتاج مراجعة إضافية" : "Types of goods that require additional review"
      }
      steps={[
        ar ? "أغذية" : "Food",
        ar ? "مكملات ومنتجات صحية" : "Supplements and health products",
        ar ? "مستحضرات تجميل" : "Cosmetics",
        ar ? "أجهزة أو مستلزمات طبية" : "Medical devices or supplies",
        ar ? "مواد كيميائية أو منظفات" : "Chemicals or cleaning products",
        ar ? "بضائع تحتاج تخزين خاص" : "Goods requiring special storage",
      ]}
      noteTitle={ar ? "قبل فتح الملف" : "Before opening the file"}
      noteBody={
        ar
          ? "وصف البضائع وطريقة التعامل معها يساعدنا على اختيار النشاط الصحيح وتحديد ما إذا كان الموقع أو التخزين أو الموافقات اللاحقة جزءاً من الخطة."
          : "Describing the goods and how they are handled helps us choose the correct business activity and determine whether location, storage, or subsequent approvals are part of the plan."
      }
      finalCta={
        ar ? "أرسل نوع البضائع ونموذج العمل" : "Send the type of goods and your business model"
      }
      related={[
        {
          href: "/services/activity-review",
          label: ar ? "مسار النشاط" : "Business activity review",
        },
        {
          href: "/register-business-in-aseza",
          label: ar ? "تسجيل شركة في ASEZA" : "Company registration in ASEZA",
        },
        {
          href: "/services/licensing-after-registration",
          label: ar ? "الترخيص بعد التسجيل" : "Licensing after registration",
        },
      ]}
      currentLabel={ar ? "شركة استيراد وتصدير" : "Import and export company"}
    />
  );
}
