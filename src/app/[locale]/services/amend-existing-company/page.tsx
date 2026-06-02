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
    path: "/services/amend-existing-company",
    title: locale === "ar" ? "تعديل بيانات شركة مسجلة في ASEZA" : "Amend the Details of a Company Registered with ASEZA",
    description: locale === "ar" ? "مساعدة الشركات المسجلة في ASEZA على تعديل النشاط أو العنوان أو المفوضين أو الشركاء أو الاسم، مع تحديد الوثائق بعد الاتفاق على نطاق الخدمة." : "We help companies registered with ASEZA amend their business activity, address, authorized signatories, partners, or name, and identify the required documents once the scope of work is agreed.",
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
        label: ar ? "دعم عملي للشركات القائمة" : "Practical support for established companies",
        title: ar ? "تعديل بيانات شركة مسجلة في ASEZA" : "Amend the Details of a Company Registered with ASEZA",
        description: ar ? "نساعدك على تحديد نوع التعديل والمسار الصحيح، ثم نوضح الوثائق المطلوبة للمتابعة بعد الاتفاق على نطاق الخدمة." : "We help you identify the type of amendment and the correct pathway, then outline the documents required to proceed once the scope of work is agreed.",
        ctaLabel: ar ? "أرسل نوع التعديل" : "Send us the type of amendment",
        whatsappMessage: ar ? `مرحباً، لدي شركة مسجلة في ASEZA وأريد تعديل بياناتها.
اسم الشركة:
نوع التعديل:
البيانات الحالية:
البيانات المطلوبة:` : `Hello, I have a company registered with ASEZA and would like to amend its details.
Company name:
Type of amendment:
Current details:
Required details:`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نحدد نوع التعديل والمسار المناسب." : "We identify the type of amendment and the appropriate pathway.",
          ar ? "نراجع أثر التعديل على التسجيل أو التشغيل." : "We review the impact of the amendment on the registration or operations.",
          ar ? "بعد تحديد نطاق الخدمة، نرتب الوثائق والقرارات المطلوبة." : "Once the scope of work is agreed, we organize the required documents and resolutions.",
          ar ? "نوضح الخطوة التالية قبل التقديم." : "We clarify the next step before submission."
        ],
        forWho: [
          ar ? "شركة مسجلة تريد تعديل نشاطها." : "A registered company that wants to amend its business activity.",
          ar ? "شركة غيّرت العنوان أو الموقع." : "A company that has changed its address or location.",
          ar ? "شركة تريد تحديث المفوضين أو الشركاء." : "A company that wants to update its authorized signatories or partners.",
          ar ? "شركة تحتاج تصحيح بيانات أو تعديل الاسم أو الغايات." : "A company that needs to correct details or amend its name or objectives."
        ],
        coreTitle: ar ? "ما نوع التعديل؟" : "What type of amendment?",
        coreItems: [
          ar ? "تعديل النشاط." : "Amending the business activity.",
          ar ? "تعديل العنوان." : "Amending the address.",
          ar ? "تعديل المفوضين." : "Amending the authorized signatories.",
          ar ? "تعديل الشركاء." : "Amending the partners.",
          ar ? "تعديل الاسم أو الغايات." : "Amending the name or objectives.",
          ar ? "تصحيح بيانات." : "Correcting details."
        ],
        needs: [
          ar ? "اسم الشركة ورقم التسجيل إن وجد." : "Company name and registration number, if available.",
          ar ? "نوع التعديل المطلوب." : "The type of amendment required.",
          ar ? "سبب التعديل أو القرار الداخلي." : "The reason for the amendment or the relevant internal resolution.",
          ar ? "بيانات المفوضين الحاليين والجدد إن وجدت." : "Details of current and new authorized signatories, if applicable.",
          ar ? "العنوان أو النشاط الجديد إن كان هو التعديل." : "The new address or business activity, where this is the amendment.",
          ar ? "هل توجد قرارات أو بيانات داعمة للتعديل؟" : "Are there any resolutions or supporting documents for the amendment?"
        ],
        steps: [
          ar ? "نحدد نوع التعديل بدقة." : "We define the type of amendment precisely.",
          ar ? "بعد تحديد نطاق الخدمة، نوضح الوثائق المطلوبة لهذا النوع." : "Once the scope of work is agreed, we set out the documents required for this type of amendment.",
          ar ? "نرتب الملف والقرارات الداعمة." : "We organize the file and the supporting resolutions.",
          ar ? "نتابع الملاحظات حتى اكتمال الإجراء." : "We follow up on any comments until the procedure is complete.",
          ar ? "نوضح أثر التعديل على الترخيص أو التجديد." : "We explain the impact of the amendment on licensing or renewal."
        ],
        afterTitle: ar ? "الوثائق حسب نوع التعديل" : "Documents by type of amendment",
        after: [
          ar ? "تعديل النشاط يحتاج وصفاً واضحاً للنشاط الجديد." : "Amending the business activity requires a clear description of the new activity.",
          ar ? "تعديل العنوان يحتاج بيانات الموقع الجديدة." : "Amending the address requires details of the new location.",
          ar ? "تعديل المفوضين أو الشركاء يحتاج قرارات وبيانات الأطراف." : "Amending the authorized signatories or partners requires resolutions and details of the parties involved.",
          ar ? "تصحيح البيانات يحتاج تحديد الخطأ والوثيقة الداعمة." : "Correcting details requires identifying the error and the supporting document."
        ],
        related: [
          { label: ar ? "تجديد التسجيل" : "Renew registration", href: "/services/renew-registration" },
          { label: ar ? "مراجعة النشاط" : "Business activity review", href: "/services/activity-review" },
          { label: ar ? "الترخيص بعد التسجيل" : "Licensing after registration", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
