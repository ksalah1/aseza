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
    title: "تسجيل شركة في ASEZA | تأسيس شركة في منطقة العقبة الاقتصادية الخاصة",
    description: "مساعدة عملية لتسجيل شركة أو مؤسسة في ASEZA: اختيار النشاط، تجهيز الوثائق، ترتيب ملف التسجيل، والمتابعة.",
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

  return (
    <ServicePageTemplate
      content={{
        label: "دعم عملي لتسجيل الشركات في العقبة",
        title: "تسجيل شركة / مؤسسة في ASEZA",
        description: "نساعدك على اختيار النشاط المناسب، تجهيز الوثائق، ترتيب ملف التسجيل، ومتابعة الخطوات المطلوبة لتأسيس شركتك في منطقة العقبة الاقتصادية الخاصة.",
        ctaLabel: "أبدأ تسجيل الشركة",
        whatsappMessage: "أرغب في بدء تسجيل شركة / مؤسسة في ASEZA. هذا وصف النشاط:",
        secondaryCta: { label: "ما الذي نحتاجه؟", href: "#requirements" },
        whatWeDo: [
          "نراجع فكرة النشاط ونقترح صياغة أوضح للتسجيل.",
          "نحدد الوثائق الأساسية قبل فتح الملف.",
          "نرتب بيانات الشركاء والمفوضين والعنوان.",
          "نوضح ما يلزم بعد التسجيل لبدء التشغيل."
        ],
        forWho: [
          "مستثمر يريد تأسيس شركة جديدة في العقبة.",
          "صاحب مشروع يريد نقل النشاط إلى ASEZA.",
          "شركة ناشئة تحتاج مسار تسجيل واضح.",
          "مستثمر لم يحدد بعد الشكل أو النشاط المناسب."
        ],
        coreTitle: "مسار التسجيل",
        coreIntro: "التسجيل هو الخطوة الأولى. بعض الأنشطة تحتاج بعد التسجيل إلى متطلبات تشغيل مثل موقع، صحة وسلامة، بيئة، أو موافقات إضافية. سنوضح لك ذلك ضمن الخطة.",
        coreItems: [
          "صياغة النشاط بطريقة واضحة ومناسبة للملف.",
          "ترتيب بيانات الشركاء والحصص والمفوضين.",
          "تجهيز قائمة الوثائق المطلوبة قبل التقديم.",
          "تحديد الخطوة التالية بعد صدور التسجيل."
        ],
        needs: [
          "وصف النشاط التجاري أو الخدمي.",
          "أسماء الشركاء أو المالكين وجنسياتهم.",
          "الشكل المفضل إن كان معروفاً.",
          "العنوان داخل العقبة إن وجد.",
          "أي وثائق شركة أجنبية إن كان المالك شركة.",
          "موعد البدء المتوقع."
        ],
        steps: [
          "نراجع النشاط ونحدد المسار.",
          "نرسل لك قائمة الوثائق المطلوبة.",
          "نرتب ملف التسجيل والبيانات الأساسية.",
          "نتابع الخطوات ونوضح الملاحظات أولاً بأول.",
          "بعد التسجيل نحدد متطلبات التشغيل التالية."
        ],
        afterTitle: "بعد التسجيل",
        after: [
          "نراجع ما إذا كان النشاط يحتاج ترخيصاً أو موافقات تشغيل.",
          "نساعدك على تجهيز متطلبات الموقع أو الصحة والسلامة أو البيئة عند الحاجة.",
          "نوضح لك الالتزامات التالية مثل التجديد أو التعديلات المستقبلية."
        ],
        related: [
          { label: "مراجعة النشاط", href: "/services/activity-review" },
          { label: "شركة أجنبية / فرع أجنبي", href: "/services/register-foreign-branch" },
          { label: "الترخيص بعد التسجيل", href: "/services/licensing-after-registration" }
        ],
      }}
    />
  );
}
