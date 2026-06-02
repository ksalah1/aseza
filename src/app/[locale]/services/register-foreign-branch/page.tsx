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
    path: "/services/register-foreign-branch",
    title: locale === "ar" ? "تسجيل شركة أجنبية في العقبة | فرع أجنبي أو شركة تابعة في ASEZA" : "Registering a Foreign Company in Aqaba | Foreign Branch or Subsidiary in ASEZA",
    description: locale === "ar" ? "دعم الشركات الأجنبية في اختيار مسار الدخول إلى العقبة عبر فرع أجنبي أو شركة تابعة أو مكتب تمثيلي، مع تحديد الوثائق المطلوبة بعد اختيار المسار المناسب." : "Support for foreign companies in choosing their market-entry path into Aqaba through a foreign branch, subsidiary, or representative office, with the required documents identified once the right path is chosen.",
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
        label: ar ? "مساعدة المستثمرين الأجانب في دخول السوق من خلال العقبة" : "Helping foreign investors enter the market through Aqaba",
        title: ar ? "تسجيل شركة أجنبية أو فرع أجنبي في العقبة" : "Registering a Foreign Company or Foreign Branch in Aqaba",
        description: ar ? "نساعد الشركات الأجنبية على اختيار المسار المناسب لدخول السوق من خلال العقبة: فرع، شركة تابعة، مكتب تمثيلي، أو مسار آخر مناسب لطبيعة النشاط." : "We help foreign companies choose the right path to enter the market through Aqaba: a foreign branch, a subsidiary, a representative office, or another path suited to the nature of the activity.",
        ctaLabel: ar ? "أرسل بلد الشركة والنشاط المطلوب" : "Send your company's country and intended activity",
        whatsappMessage: ar ? `مرحباً، أنا مستثمر أجنبي وأريد معرفة المسار المناسب للتسجيل في ASEZA.
بلد المستثمر أو الشركة الأم:
النشاط المطلوب:
هل تريد فرعاً أم شركة جديدة أم أنك غير متأكد؟` : `Hello, I am a foreign investor and would like to know the right path to register in ASEZA.
Country of the investor or parent company:
Intended business activity:
Are you looking for a branch, a new company, or are you unsure?`,
        secondaryCta: { label: ar ? "ما الذي نحتاجه؟" : "What do we need?", href: "#requirements" },
        whatWeDo: [
          ar ? "نحدد المسار الأنسب لطبيعة الشركة والنشاط." : "We identify the most suitable path for the nature of the company and the activity.",
          ar ? "نحدد المسار المناسب أولاً. بعد الاتفاق على المتابعة، نطلب وثائق الشركة الأم اللازمة." : "We determine the right path first. Once the engagement is agreed, we request the required parent company documents.",
          ar ? "نوضح بيانات المفوضين بالتوقيع داخل الأردن." : "We clarify the details of the authorized signatories within Jordan.",
          ar ? "نربط التسجيل بخطة التشغيل داخل العقبة." : "We connect the registration to an operating plan within Aqaba."
        ],
        forWho: [
          ar ? "شركة خارج الأردن تريد دخول السوق من خلال العقبة." : "A company based outside Jordan looking to enter the market through Aqaba.",
          ar ? "مجموعة تريد تأسيس شركة أردنية مملوكة من شركة أجنبية." : "A group looking to establish a Jordanian company owned by a foreign company.",
          ar ? "شركة تجارة أو استيراد أو تصدير أو لوجستيات." : "A trading, import, export, or logistics company.",
          ar ? "شركة تحتاج حضوراً تمثيلياً أو إقليمياً في الأردن." : "A company that needs a representative or regional presence in Jordan."
        ],
        coreTitle: ar ? "نحدد لك المسار الأنسب" : "We identify the most suitable path for you",
        coreItems: [
          ar ? "فرع لشركة أجنبية." : "A branch of a foreign company.",
          ar ? "شركة أردنية مملوكة من شركة أجنبية." : "A Jordanian company owned by a foreign company.",
          ar ? "مكتب تمثيلي أو إقليمي." : "A representative or regional office.",
          ar ? "مسار مناسب لشركات التجارة، الاستيراد، التصدير، أو اللوجستيات." : "A path suited to trading, import, export, or logistics companies."
        ],
        needsTitle: ar ? "المعلومات الأولية المطلوبة" : "Initial information required",
        needs: [
          ar ? "بلد الشركة الأم وهل هي قائمة خارج الأردن." : "The parent company's country and whether it is established outside Jordan.",
          ar ? "نوع المسار المطلوب: فرع، شركة جديدة، أو غير متأكد." : "The type of path you want: a branch, a new company, or unsure.",
          ar ? "المفوضون بالتوقيع." : "The authorized signatories.",
          ar ? "هل تتوقع الحاجة إلى ترجمة أو تصديق لاحقاً؟" : "Do you anticipate needing translation or attestation later?",
          ar ? "وصف النشاط داخل العقبة." : "A description of the activity within Aqaba.",
          ar ? "العنوان أو المشروع إن وجد." : "The address or project, if any."
        ],
        steps: [
          ar ? "نحدد بلد الشركة والنشاط المطلوب." : "We identify the company's country and the intended activity.",
          ar ? "نقارن بين المسارات المناسبة." : "We compare the suitable paths.",
          ar ? "بعد الاتفاق على المتابعة، نرسل قائمة تجهيز التسجيل اللازمة بصيغة واضحة." : "Once the engagement is agreed, we send the required registration preparation checklist in a clear format.",
          ar ? "نرتب الملف ونتابع الملاحظات." : "We organize the file and follow up on any observations.",
          ar ? "نحدد متطلبات التشغيل بعد التسجيل." : "We identify the operating requirements after registration."
        ],
        afterTitle: ar ? "ما النتيجة؟" : "What is the outcome?",
        after: [
          ar ? "مسار واضح لدخول السوق من خلال العقبة." : "A clear path to enter the market through Aqaba.",
          ar ? "قائمة المتطلبات اللازمة للمرحلة التالية للشركة الأم والمفوضين." : "A list of the requirements needed for the next stage from the parent company and the authorized signatories.",
          ar ? "خطة للخطوة التالية بعد التسجيل أو قبل التشغيل." : "A plan for the next step after registration or before commencing operations."
        ],
        related: [
          { label: ar ? "تسجيل شركة لأول مرة" : "Registering a new company", href: "/services/register-new-business" },
          { label: ar ? "مراجعة النشاط" : "Business activity review", href: "/services/activity-review" },
          { label: ar ? "قائمة تجهيز التسجيل" : "Registration preparation checklist", href: "/aseza-registration-checklist" }
        ],
      }}
    />
  );
}
