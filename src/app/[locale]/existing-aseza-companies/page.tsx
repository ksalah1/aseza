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
    path: "/existing-aseza-companies",
    title:
      locale === "ar"
        ? "خدمات الشركات المسجلة في ASEZA | تعديل وتجديد وترخيص الشركات"
        : "Services for Companies Registered in ASEZA | Amending, Renewing, and Licensing Companies",
    description:
      locale === "ar"
        ? "خدمات استشارية للشركات المسجلة في ASEZA، تشمل تعديل النشاط، تحديث المفوضين، تغيير العنوان، التجديد السنوي، ومتطلبات التشغيل بعد التسجيل."
        : "Advisory services for companies registered in ASEZA, including amending the business activity, updating authorized signatories, changing the address, annual renewal, and post-registration operating requirements.",
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
          ? "دعم عملي للشركات القائمة في العقبة"
          : "Practical support for existing companies in Aqaba"
      }
      title={ar ? "لديك شركة مسجلة في ASEZA؟" : "Do you have a company registered in ASEZA?"}
      hero={
        ar
          ? "نساعد الشركات القائمة في العقبة على تحديد خدمة التعديل أو التجديد أو التشغيل المناسبة، ثم نوضح الوثائق المطلوبة بعد الاتفاق على نطاق المتابعة."
          : "We help existing companies in Aqaba identify the right amendment, renewal, or operating service, then clarify the required documents once the scope of the engagement is agreed."
      }
      primaryCta={ar ? "أرسل وضع الشركة الحالي" : "Send your company's current status"}
      secondaryCta={ar ? "اختر الخدمة المناسبة" : "Choose the right service"}
      secondaryHref="/services/amend-existing-company"
      whatsappMessage={
        ar
          ? `مرحباً، لدي شركة مسجلة في ASEZA وأحتاج مساعدة في:
تعديل / تجديد / ترخيص.
اسم الشركة:
التغيير المطلوب:`
          : `Hello, I have a company registered in ASEZA and need help with:
amendment / renewal / licensing.
Company name:
Required change:`
      }
      valueTitle={ar ? "متى تتواصل معنا؟" : "When should you contact us?"}
      valueBody={
        ar
          ? "تواصل معنا عند تغير النشاط الفعلي، تغير العنوان أو الموقع، تغير المفوضين بالتوقيع، اقتراب موعد التجديد، إضافة نشاط جديد، أو وجود رخصة أو شهادة تحتاج تحديثاً."
          : "Contact us when the actual business activity changes, the address or location changes, the authorized signatories change, the renewal date is approaching, a new activity is being added, or a license or certificate needs updating."
      }
      mainTitle={ar ? "ماذا تحتاج اليوم؟" : "What do you need today?"}
      mainItems={[
        {
          title: ar ? "تعديلات الشركة" : "Company amendments",
          items: [
            ar ? "تعديل نشاط" : "Amending a business activity",
            ar ? "إضافة نشاط" : "Adding a business activity",
            ar ? "تغيير عنوان" : "Changing the address",
            ar ? "تعديل المفوضين" : "Updating authorized signatories",
          ],
        },
        {
          title: ar ? "تشغيل وتجديد" : "Operations and renewal",
          items: [
            ar ? "تعديل الشركاء أو الملكية" : "Amending partners or ownership",
            ar ? "تجديد سنوي" : "Annual renewal",
            ar ? "متطلبات تشغيل بعد التسجيل" : "Post-registration operating requirements",
          ],
        },
      ]}
      needsTitle={ar ? "ماذا نحتاج منك؟" : "What do we need from you?"}
      needs={[
        ar ? "اسم الشركة" : "Company name",
        ar ? "رقم التسجيل إن وجد" : "Registration number, if any",
        ar ? "الخدمة المطلوبة" : "The required service",
        ar ? "البيانات الحالية" : "The current details",
        ar ? "التغيير المطلوب" : "The required change",
        ar
          ? "هل توجد رخصة أو شهادة مرتبطة؟"
          : "Is there an associated license or certificate?",
        ar
          ? "هل توجد معاملة أو تجديد معلق؟"
          : "Is there a pending transaction or renewal?",
      ]}
      helpTitle={ar ? "كيف نساعد؟" : "How do we help?"}
      help={[
        ar ? "تحديد الإجراء الصحيح" : "Identifying the correct procedure",
        ar ? "تحديد الوثائق بعد الاتفاق" : "Identifying the documents once agreed",
        ar
          ? "تحديد مسار التعديل أو التجديد"
          : "Defining the amendment or renewal path",
        ar ? "متابعة الخطوة التالية" : "Following up on the next step",
        ar
          ? "ترتيب الأولويات إذا كان هناك أكثر من إجراء"
          : "Prioritizing when there is more than one procedure",
      ]}
      stepsTitle={ar ? "مسار العمل للشركات القائمة" : "Workflow for existing companies"}
      steps={[
        ar ? "فهم وضع الشركة الحالي" : "Understand the company's current status",
        ar ? "تحديد الإجراء المطلوب" : "Identify the required procedure",
        ar
          ? "تحديد البيانات والوثائق المطلوبة للمرحلة التالية"
          : "Define the data and documents required for the next stage",
        ar
          ? "تجهيز ملف التعديل أو التجديد"
          : "Prepare the amendment or renewal file",
        ar ? "متابعة الملاحظات" : "Follow up on any observations",
        ar ? "تأكيد الخطوة التالية للتشغيل" : "Confirm the next operating step",
      ]}
      noteTitle={ar ? "تجهيز المعلومات" : "Preparing the information"}
      noteBody={
        ar
          ? "يكفي في البداية إرسال اسم الشركة ونوع الخدمة المطلوبة. إذا كانت هناك رخصة أو شهادة مرتبطة، نحدد لك لاحقاً ما يلزم من وثائق."
          : "To start, it is enough to send the company name and the type of service required. If there is an associated license or certificate, we will define the necessary documents later."
      }
      finalCta={ar ? "أرسل وضع الشركة الحالي" : "Send your company's current status"}
      related={[
        {
          href: "/services/amend-existing-company",
          label: ar ? "تعديل شركة قائمة" : "Amend an existing company",
        },
        {
          href: "/services/renew-registration",
          label: ar ? "تجديد التسجيل" : "Renew registration",
        },
        {
          href: "/services/licensing-after-registration",
          label: ar ? "متطلبات التشغيل" : "Operating requirements",
        },
      ]}
      currentLabel={ar ? "الشركات المسجلة" : "Registered companies"}
    />
  );
}
