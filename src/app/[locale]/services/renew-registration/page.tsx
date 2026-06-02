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
    title: locale === "ar" ? "تجديد تسجيل شركة في ASEZA | التجديد السنوي في العقبة" : "Renew a Company Registration with ASEZA | Annual Renewal in Aqaba",
    description: locale === "ar" ? "مساعدة الشركات المسجلة في ASEZA على مراجعة حالة التسجيل والأنشطة والرسوم والبيانات قبل التجديد السنوي." : "We help companies registered with ASEZA review their registration status, business activities, fees, and details ahead of the annual renewal.",
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
        label: ar ? "متابعة التجديد السنوي للشركات المسجلة" : "Managing the annual renewal for registered companies",
        title: ar ? "تجديد تسجيل شركة / مؤسسة في ASEZA" : "Renew a Company or Establishment Registration with ASEZA",
        description: ar ? "نساعدك على مراجعة حالة التسجيل، تاريخ الانتهاء، الأنشطة، الرسوم، والبيانات التي يجب تحديثها قبل التجديد السنوي." : "We help you review your registration status, expiry date, business activities, fees, and the details that need updating ahead of the annual renewal.",
        ctaLabel: ar ? "أرسل بيانات التجديد" : "Send us your renewal details",
        whatsappMessage: ar ? `مرحباً، أريد تجديد تسجيل شركة في ASEZA.
اسم الشركة:
تاريخ آخر تجديد إن وجد:
هل توجد تغييرات في النشاط أو العنوان أو المفوضين؟` : `Hello, I would like to renew a company registration with ASEZA.
Company name:
Date of last renewal, if any:
Are there any changes to the business activity, address, or authorized signatories?`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نحدد تاريخ الانتهاء وحالة التسجيل من البيانات الأولية." : "We determine the expiry date and registration status from the initial details.",
          ar ? "نحدد البيانات التي تحتاج تحديثاً قبل التجديد." : "We identify the details that need updating before renewal.",
          ar ? "نوضح الفرق بين التجديد والتعديل والترخيص." : "We clarify the difference between renewal, amendment, and licensing.",
          ar ? "نرتب الملف والخطوة التالية." : "We organize the file and the next step."
        ],
        forWho: [
          ar ? "شركة مسجلة تريد التجديد السنوي." : "A registered company that wants to complete its annual renewal.",
          ar ? "شركة لديها تسجيل قريب الانتهاء." : "A company whose registration is approaching expiry.",
          ar ? "شركة متأخرة وتريد معرفة المتطلبات." : "A company that is overdue and wants to understand the requirements.",
          ar ? "شركة تريد التأكد من بياناتها قبل التجديد." : "A company that wants to verify its details before renewing."
        ],
        coreTitle: ar ? "ماذا نحدد قبل التجديد؟" : "What do we determine before renewal?",
        coreItems: [
          ar ? "حالة التسجيل وتاريخ الانتهاء." : "The registration status and expiry date.",
          ar ? "الأنشطة المسجلة." : "The registered business activities.",
          ar ? "العنوان وبيانات المفوضين." : "The address and authorized signatories' details.",
          ar ? "الرسوم أو الالتزامات الظاهرة قبل التجديد." : "Any fees or outstanding obligations apparent before renewal.",
          ar ? "الرخص أو شهادات التشغيل المرتبطة بالنشاط." : "The licenses or operating certificates associated with the activity."
        ],
        needs: [
          ar ? "اسم الشركة." : "Company name.",
          ar ? "رقم التسجيل إن وجد." : "Registration number, if available.",
          ar ? "تاريخ انتهاء التسجيل أو آخر تجديد." : "The registration expiry date or date of last renewal.",
          ar ? "الأنشطة المسجلة." : "The registered business activities.",
          ar ? "أي تغيير في النشاط أو العنوان أو المفوضين." : "Any change to the business activity, address, or authorized signatories.",
          ar ? "هل توجد رخصة أو شهادة تشغيل مرتبطة؟" : "Is there an associated license or operating certificate?"
        ],
        steps: [
          ar ? "نحدد حالة التسجيل والبيانات الأساسية." : "We confirm the registration status and core details.",
          ar ? "نحدد ما يحتاج تحديثاً قبل التجديد." : "We identify what needs updating before renewal.",
          ar ? "نرتب الوثائق والرسوم المطلوبة بعد تأكيدها." : "We organize the required documents and fees once confirmed.",
          ar ? "نتابع ملف التجديد." : "We follow up on the renewal file.",
          ar ? "نوضح أي خطوة تشغيلية أو تعديل لاحق." : "We clarify any subsequent operational step or amendment."
        ],
        afterTitle: ar ? "الفرق بين التجديد والتعديل والترخيص" : "The difference between renewal, amendment, and licensing",
        after: [
          ar ? "التجديد يحافظ على استمرار التسجيل السنوي." : "Renewal maintains the continuity of the annual registration.",
          ar ? "التعديل يستخدم عند تغيير النشاط أو العنوان أو المفوضين أو بيانات الشركة." : "Amendment applies when changing the business activity, address, authorized signatories, or company details.",
          ar ? "الترخيص أو متطلبات التشغيل ترتبط ببدء النشاط فعلياً وموقع العمل." : "Licensing or operating requirements relate to actually commencing operations and the business premises."
        ],
        related: [
          { label: ar ? "تعديل بيانات الشركة" : "Amend company details", href: "/services/amend-existing-company" },
          { label: ar ? "الترخيص بعد التسجيل" : "Licensing after registration", href: "/services/licensing-after-registration" },
          { label: ar ? "مراجعة النشاط قبل التسجيل" : "Business activity review before registration", href: "/services/activity-review" }
        ],
      }}
    />
  );
}
