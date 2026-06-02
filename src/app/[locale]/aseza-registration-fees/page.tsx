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
    path: "/aseza-registration-fees",
    title:
      locale === "ar"
        ? "رسوم تسجيل شركة في ASEZA | تكلفة تأسيس شركة في العقبة"
        : "Company Registration Fees in ASEZA | Cost of Setting Up a Company in Aqaba",
    description:
      locale === "ar"
        ? "تعرف على رسوم تسجيل شركة في ASEZA، الرسوم السنوية للأنشطة، أتعاب تجهيز الملف، والرسوم الإضافية المتوقعة مثل الترجمة والتصديق والتراخيص."
        : "Understand the fees for registering a company in ASEZA, the annual business activity fees, the file preparation service fees, and the additional costs you can expect such as translation, authentication, and licensing.",
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
      badge={ar ? "تقدير واضح قبل البدء" : "A clear estimate before you begin"}
      title={ar ? "رسوم تسجيل شركة في ASEZA" : "Company Registration Fees in ASEZA"}
      hero={ar ? "نوضح لك الفرق بين الرسوم الرسمية، رسوم النشاط السنوية، وأتعاب تجهيز ومتابعة ملف التسجيل، حتى تعرف ما الذي ستدفعه قبل البدء." : "We explain the difference between official fees, annual business activity fees, and the service fees for preparing and managing the registration file, so you know what you will pay before you begin."}
      primaryCta={ar ? "احصل على تقدير تكلفة التسجيل" : "Get a registration cost estimate"}
      secondaryCta={ar ? "اطّلع على قائمة التجهيز" : "View the registration checklist"}
      secondaryHref="/aseza-registration-checklist"
      whatsappMessage={
        ar
          ? `مرحباً، أريد تقدير تكلفة تسجيل شركة في ASEZA.
نوع الشركة:
عدد الأنشطة:
هل يوجد شركاء أجانب؟`
          : `Hello, I would like an estimate of the cost to register a company in ASEZA.
Company type:
Number of business activities:
Are there any foreign partners?`
      }
      valueTitle={ar ? "ما الذي نقدمه لك؟" : "What we offer you"}
      valueBody={ar ? "نقسم التكلفة إلى بنود مفهومة: الرسوم الرسمية، رسوم النشاط، الرسوم المرتبطة بالترجمة أو التصديق أو الرخص، وأتعاب تجهيز ومتابعة الملف. يتم تأكيد الرسوم قبل الدفع." : "We break the cost down into clear items: official fees, business activity fees, fees related to translation, authentication, or licensing, and the service fees for preparing and managing the file. All fees are confirmed before payment."}
      mainTitle={ar ? "أنواع الرسوم" : "Types of fees"}
      mainItems={[
        {
          title: ar ? "رسوم رسمية وتشغيلية" : "Official and operational fees",
          items: ar
            ? [
                "رسوم تسجيل أول مرة",
                "رسوم النشاط السنوية",
                "رسوم رخصة أو شهادة مرتبطة",
              ]
            : [
                "First-time registration fees",
                "Annual business activity fees",
                "Fees for a related license or certificate",
              ],
        },
        {
          title: ar ? "رسوم تجهيز الملف" : "File preparation fees",
          items: ar
            ? ["رسوم ترجمة أو تصديق", "أتعاب تجهيز ومتابعة الملف"]
            : [
                "Translation or authentication fees",
                "Service fees for preparing and managing the file",
              ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج لتقدير أوضح؟" : "What we need for a clearer estimate"}
      needs={
        ar
          ? [
              "نوع الشركة",
              "عدد الأنشطة",
              "هل توجد شركة أجنبية؟",
              "هل توجد شركة أجنبية أو ترجمة متوقعة لاحقاً؟",
              "هل النشاط يحتاج ترخيصاً أو موافقة؟",
              "هل الطلب تسجيل جديد أم تعديل أم تجديد؟",
            ]
          : [
              "Company type",
              "Number of business activities",
              "Is a foreign company involved?",
              "Is a foreign company or translation expected later?",
              "Does the activity require a license or approval?",
              "Is the request a new registration, an amendment, or a renewal?",
            ]
      }
      helpTitle={ar ? "ما الذي لا يدخل عادة في تقدير التسجيل؟" : "What is typically not included in the registration estimate?"}
      help={
        ar
          ? [
              "ترجمة",
              "تصديق",
              "رسوم جهات أخرى",
              "رخصة مهن",
              "موافقات قطاعية",
              "تعديل بيانات",
              "رسوم تأخير أو تجديد",
            ]
          : [
              "Translation",
              "Authentication",
              "Fees of other authorities",
              "Professional practice license",
              "Sector-specific approvals",
              "Amendment of data",
              "Late or renewal fees",
            ]
      }
      stepsTitle={ar ? "أمثلة مبسطة" : "Simplified examples"}
      steps={
        ar
          ? [
              "شركة جديدة بنشاط واحد — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
              "شركة جديدة بنشاطين — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
              "شركة أجنبية تحتاج ترجمة وتصديق — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
              "تجديد سنوي — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
              "تعديل + تجديد — مثال توضيحي، ويتم تأكيد الرسوم قبل الدفع.",
            ]
          : [
              "A new company with a single business activity — illustrative example only; fees are confirmed before any payment.",
              "A new company with two business activities — illustrative example only; fees are confirmed before any payment.",
              "A foreign company requiring translation and authentication — illustrative example only; fees are confirmed before any payment.",
              "An annual renewal — illustrative example only; fees are confirmed before any payment.",
              "An amendment plus renewal — illustrative example only; fees are confirmed before any payment.",
            ]
      }
      noteTitle={ar ? "أتعاب الخدمة الاستشارية" : "Advisory service fees"}
      noteBody={ar ? "أتعاب تجهيز ومتابعة الملف منفصلة عن الرسوم الرسمية. نوضح لك البنود قبل البدء حتى تكون الصورة التجارية واضحة. تقدير الأتعاب لا يشمل مراجعة تفصيلية للوثائق قبل الاتفاق على نطاق الخدمة." : "The fees for preparing and managing the file are separate from the official fees. We outline the items for you before we begin so the commercial picture is clear. The fee estimate does not include a detailed review of documents prior to agreeing the scope of work."}
      finalCta={ar ? "أرسل نوع الشركة وعدد الأنشطة لتحصل على تقدير واضح" : "Send your company type and number of business activities to receive a clear estimate"}
      related={[
        { href: "/register-business-in-aseza", label: ar ? "تسجيل شركة في ASEZA" : "Company registration in ASEZA" },
        { href: "/aseza-registration-checklist", label: ar ? "قائمة التجهيز" : "Registration checklist" },
        { href: "/services/register-new-business", label: ar ? "تسجيل شركة جديدة" : "New company registration" },
      ]}
      currentLabel={ar ? "رسوم التسجيل" : "Registration fees"}
    />
  );
}
