import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, Section } from "@/components/ui";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Link } from "@/i18n/navigation";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const whatsappTemplate = `مرحباً، أريد مراجعة نشاط قبل التسجيل في ASEZA.
النشاط المقترح:
نوع البضائع أو الخدمات:
هل يوجد استيراد أو تصدير؟
هل يوجد تخزين أو تصنيع أو تغليف؟
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل يوجد مقر أو موقع في العقبة؟`;

const whyReview = [
  "اختيار نشاط غير دقيق في طلب التسجيل.",
  "اكتشاف لاحق أن النشاط يحتاج موافقة قطاعية.",
  "الخلط بين التسجيل والترخيص ومزاولة النشاط.",
  "تجهيز وثائق غير مناسبة للحالة.",
  "التأخير بسبب نشاط مقيد أو غير واضح.",
  "بدء إجراءات على مسار قانوني غير مناسب.",
];

const activityExamples = [
  {
    activity: "استيراد وتصدير مواد غذائية",
    reason: "قد يحتاج موافقات غذاء، صحة، تخزين، أو اشتراطات خاصة حسب نوع البضائع.",
  },
  {
    activity: "تجارة مواد كيميائية أو مواد تنظيف",
    reason: "قد ترتبط بقيود بيئية أو سلامة عامة أو تصنيف المواد.",
  },
  {
    activity: "مستودعات وتخزين",
    reason: "يعتمد على نوع البضائع، الموقع، السلامة العامة، والاشتراطات البيئية.",
  },
  {
    activity: "خدمات لوجستية أو تخليص أو شحن",
    reason: "قد يرتبط بالجمارك، النقل، التخزين، أو موافقات مهنية.",
  },
  {
    activity: "أجهزة طبية، مكملات، مستحضرات تجميل، أو منتجات صحية",
    reason: "قد يحتاج موافقات قطاعية أو توضيح جهة الرقابة المختصة.",
  },
  {
    activity: "تجارة إلكترونية مع شحن أو تخزين",
    reason: "يحتاج توضيح نموذج العمل، مكان النشاط، نوع البضائع، وآلية التسليم.",
  },
];

const beneficiaries = [
  "أي متقدم قبل تسجيل شركة أو مؤسسة في ASEZA.",
  "مستثمر غير متأكد من النشاط الأنسب للتسجيل.",
  "شركة استيراد وتصدير أو تجارة أو لوجستيات.",
  "شركة لديها بضائع أو خدمات قد تحتاج موافقة قطاعية.",
  "شركة أجنبية أو شريك أجنبي يحتاجان إلى تحديد المسار الصحيح.",
  "شخص بدأ تجهيز الوثائق ويريد تقليل مخاطر التأخير أو الرفض.",
];

const outcomes = [
  "تصنيف أولي للنشاط: مسموح / مقيد / محظور / يحتاج توضيح.",
  "تحديد الموافقات المحتملة قبل التسجيل.",
  "اقتراح صياغة أدق للنشاط إذا كان الوصف عاماً أو مربكاً.",
  "تحديد المخاطر التي قد تسبب تأخيراً أو رفضاً.",
  "تحديد الخدمة التالية المناسبة: تسجيل شركة، فرع أجنبي، استيراد وتصدير، ترخيص بعد التسجيل، أو مراجعة وثائق.",
  "قائمة معلومات أو وثائق قد تكون مطلوبة للخطوة التالية.",
];

const preparationChecklist = [
  "النشاط كما تريد تسجيله.",
  "النشاط الفعلي كما سيتم على الأرض.",
  "نوع البضائع أو الخدمات.",
  "هل يوجد استيراد أو تصدير؟",
  "هل يوجد تخزين، تصنيع، تعبئة، تغليف، أو توزيع؟",
  "هل النشاط داخل مكتب، مستودع، مصنع، محل، أو موقع مفتوح؟",
  "هل توجد مواد غذائية، طبية، كيميائية، تجميلية، أو خطرة؟",
  "هل الشركة جديدة أم قائمة؟",
  "هل يوجد شريك أجنبي أو شركة أم أجنبية؟",
  "هل يوجد مقر أو موقع محدد داخل العقبة؟",
];

const serviceSteps = [
  "استلام وصف النشاط ونموذج العمل.",
  "فهم البضائع أو الخدمات وطريقة ممارسة النشاط.",
  "مراجعة التصنيف والمخاطر المحتملة.",
  "توضيح هل النشاط مسموح أو مقيد أو يحتاج موافقة أو تعديل صياغة.",
  "اقتراح الخطوة التالية قبل التسجيل أو الترخيص.",
];

const delayReasons = [
  "وصف النشاط بكلمات عامة مثل “تجارة عامة” دون تفاصيل.",
  "عدم ذكر نوع البضائع أو الخدمات.",
  "الخلط بين التجارة، التصنيع، التخزين، والتوزيع.",
  "وجود مواد تحتاج موافقات صحية أو بيئية أو جمركية.",
  "اختيار نشاط لا يطابق عقد التأسيس أو غايات الشركة.",
  "عدم وضوح مكان ممارسة النشاط.",
  "وجود شريك أجنبي أو شركة أم أجنبية دون تحديد المسار القانوني.",
  "افتراض أن التسجيل وحده يكفي لمزاولة النشاط.",
  "تجاهل الموافقات القطاعية.",
  "البدء بالإجراءات قبل مراجعة النشاط فعلياً.",
];

const notIncluded = [
  "لا تعني هذه الخدمة الحصول على موافقة نهائية من ASEZA أو أي جهة رسمية.",
  "لا تغني عن تسجيل الشركة أو الترخيص أو الموافقات القطاعية إذا كانت مطلوبة.",
  "لا تشمل تقديم طلب رسمي إلا إذا تم الاتفاق لاحقاً على خدمة مستقلة.",
  "لا تشمل رأياً ضريبياً أو جمركياً تفصيلياً إلا إذا طلبت مراجعة مستقلة لذلك.",
  "الهدف هو تقليل الأخطاء قبل التقديم وتحديد المسار الأقرب.",
];

const nextSteps = [
  "إذا كان النشاط واضحاً ومسموحاً: نوجهك إلى خدمة التسجيل المناسبة.",
  "إذا كان النشاط مقيداً: نوضح نوع الموافقة أو الشرط المتوقع.",
  "إذا كان النشاط غير واضح: نقترح صياغة أدق أو معلومات إضافية.",
  "إذا كان النشاط مرتبطاً بترخيص لاحق: نوضح الفرق بين التسجيل ومزاولة النشاط.",
  "إذا كان هناك شريك أو شركة أجنبية: نوضح المسار القانوني الأقرب قبل التسجيل.",
];

const internalLinks = [
  { label: "تسجيل شركة لأول مرة", href: "/services/register-new-business" },
  { label: "مستثمر أجنبي / فرع شركة", href: "/services/register-foreign-branch" },
  { label: "شركة استيراد وتصدير", href: "/import-export-company-aseza" },
  { label: "قائمة الوثائق", href: "/documents-checklists" },
  { label: "رسوم التسجيل", href: "/aseza-registration-fees" },
  { label: "الضرائب والجمارك", href: "/tax-customs-aqaba" },
  { label: "هل نشاطك مسموح؟", href: "/restricted-prohibited-activities-aseza" },
  { label: "قائمة الأنشطة المسموحة", href: "/permitted-activities-list" },
  { label: "الترخيص والموافقات القطاعية", href: "/licensing-after-registration" },
  { label: "المراجع القانونية الرسمية", href: "/legal-references" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata({
    locale,
    path: "/services/activity-review",
    title: "مراجعة نشاط الشركة قبل التسجيل في ASEZA | هل نشاطك مسموح في العقبة؟",
    description:
      "خدمة قانونية خاصة لمراجعة النشاط المقترح قبل تسجيل شركة في منطقة العقبة الاقتصادية الخاصة، وتحديد ما إذا كان النشاط مسموحاً أو مقيداً أو يحتاج موافقات إضافية.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/services" },
    { label: "مراجعة النشاط" },
  ];

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "الرئيسية", url: `https://aseza.co/${locale}` },
          { name: "خدماتنا", url: `https://aseza.co/${locale}/services` },
          { name: "مراجعة النشاط", url: `https://aseza.co/${locale}/services/activity-review` },
        ])}
      />

      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Section width="wide" className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              مراجعة قانونية أولية قبل التقديم
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-primary md:text-5xl">
              راجع نشاطك قبل تسجيل الشركة في ASEZA
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              نراجع النشاط المقترح قبل التسجيل، ونساعدك على تصنيفه بشكل أولي: مسموح، مقيد، محظور، أو يحتاج توضيح. كما نحدد الموافقات القطاعية أو المخاطر المحتملة قبل تقديم الملف، لتقليل التأخير واختيار النشاط الخاطئ والطلبات غير المكتملة.
            </p>
            <p className="mt-4 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-semibold text-primary">
              ابدأ بوصف النشاط فقط، ولا ترسل وثائق حساسة في البداية.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                href={whatsappLink(whatsappTemplate)}
                location="activity_review_hero"
                ctaText="أرسل وصف نشاطك للمراجعة"
                hasPrefill
                locale={locale}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل وصف نشاطك للمراجعة
              </WhatsAppLink>
              <a
                href="#what-review"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                ماذا نراجع في النشاط؟
                <ArrowLeft className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-1 size-6 shrink-0 text-accent" aria-hidden />
              <div>
                <h2 className="text-2xl font-bold">مهم قبل التسجيل</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-100">
                  <li>اختيار النشاط ليس مجرد وصف تجاري عام.</li>
                  <li>بعض الأنشطة تبدو بسيطة لكنها قد تحتاج موافقات بيئية، صحية، جمركية، مهنية، أو قطاعية.</li>
                  <li>نراجع النشاط الفعلي وليس فقط الاسم المقترح للنشاط.</li>
                  <li>لا ترسل وثائق حساسة في البداية؛ يكفي وصف النشاط ونموذج العمل.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="what-review" width="wide" background="muted" className="py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">لماذا تراجع النشاط قبل التسجيل؟</h2>
          <p className="mt-3 text-primary-600">
            المراجعة المبكرة تساعدك على فهم المسار الأقرب قبل تجهيز الطلب أو دفع رسوم أو توقيع وثائق لا تناسب النشاط الفعلي.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyReview.map((item) => (
            <Card key={item} className="h-full">
              <CheckCircle2 className="mb-3 size-5 text-teal-600" aria-hidden />
              <p className="text-sm leading-7 text-primary-600">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide" className="py-12 md:py-16">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">أمثلة على أنشطة تحتاج مراجعة دقيقة</h2>
          <p className="mt-3 text-primary-600">
            لا يكفي أحياناً اختيار اسم عام للنشاط. نوع البضاعة، طريقة التشغيل، والموقع قد يغيّرون المتطلبات.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {activityExamples.map((example) => (
            <Card key={example.activity} className="h-full">
              <p className="text-xs font-semibold text-accent">النشاط المقترح</p>
              <h3 className="mt-1 text-lg font-bold text-primary">{example.activity}</h3>
              <p className="mt-4 text-xs font-semibold text-primary-500">لماذا يحتاج مراجعة؟</p>
              <p className="mt-1 leading-7 text-primary-600">{example.reason}</p>
            </Card>
          ))}
        </div>
        <p className="mt-5 rounded-xl bg-primary-50 px-4 py-3 text-sm leading-7 text-primary-600">
          هذه أمثلة إرشادية وليست قائمة نهائية. التقييم يعتمد على النشاط الفعلي والوثائق والموقع وطبيعة البضائع أو الخدمات.
        </p>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <ListCard title="من يمكنه الاستفادة من هذه الخدمة؟" items={beneficiaries} />
          <ListCard
            title="ما نتيجة الخدمة؟"
            items={outcomes}
            footer="النتيجة ليست موافقة رسمية، وإنما مراجعة قانونية أولية لتقليل الأخطاء قبل التقديم."
          />
        </div>
      </Section>

      <Section width="wide" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ListCard title="ماذا تجهز قبل التقديم؟" items={preparationChecklist} columns />
          <div className="space-y-5">
            <Card>
              <h2 className="text-2xl font-semibold text-primary">الوثائق المطلوبة</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-600">
                <li><b>في البداية:</b> وصف النشاط ونموذج العمل يكفيان غالباً.</li>
                <li><b>قد نطلب لاحقاً:</b> عقد تأسيس، شهادة تسجيل، غايات الشركة، أو وثائق نشاط محددة إذا لزم الأمر.</li>
                <li><b>تنبيه:</b> لا ترسل هويات، جوازات، عقود، أو وثائق حساسة قبل أن نطلبها بشكل محدد.</li>
              </ul>
            </Card>
            <Card accent>
              <h2 className="text-2xl font-semibold text-primary">الرسوم والأتعاب</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-600">
                <li><b>أتعاب المراجعة القانونية:</b> تحدد حسب وضوح النشاط وتعقيده.</li>
                <li><b>الرسوم الحكومية:</b> لا توجد عادة رسوم حكومية لهذه المراجعة الأولية لأنها ليست طلباً رسمياً بحد ذاتها.</li>
                <li><b>رسوم أو موافقات لاحقة:</b> قد تظهر لاحقاً إذا احتاج النشاط موافقة رسمية أو قطاعية.</li>
                <li><b>رسوم ترجمة أو تصديق:</b> غير مطبقة غالباً على المراجعة الأولية، لكنها قد تظهر في خطوات التسجيل أو الترخيص.</li>
              </ul>
              <p className="mt-4 rounded-lg bg-primary-50 px-3 py-2 text-xs leading-6 text-primary-600">
                لا يتم طلب دفع أي رسوم رسمية قبل توضيح سببها والجهة المستفيدة منها.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-primary">خطوات الخدمة</h2>
            <ol className="mt-5 space-y-4">
              {serviceSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-background">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-7 text-primary-600">{step}</span>
                </li>
              ))}
            </ol>
          </Card>

          <div className="space-y-5">
            <Card>
              <h2 className="text-2xl font-semibold text-primary">المدة المتوقعة</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-600">
                <li>في الحالات المباشرة، تكون المراجعة عادة قصيرة بعد اكتمال المعلومات الأساسية.</li>
                <li>قد تزيد المدة إذا كان النشاط غير واضح، أو يتضمن بضائع خاصة، أو يحتاج مقارنة مع أنشطة مقيدة أو محظورة.</li>
                <li>إذا احتاجت الحالة مراجعة وثائق أو موافقات لاحقة، يتم توضيح ذلك قبل الانتقال للمرحلة التالية.</li>
                <li>لا نضمن نتيجة أو مدة رسمية لأن القرار النهائي لدى الجهة المختصة عند تقديم الطلب الرسمي.</li>
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2>
              <p className="mt-4 text-sm leading-7 text-primary-600">
                تتم مراجعة النشاط غالباً عن بُعد بناءً على وصف النشاط والمعلومات الأولية. أما التسجيل أو الموافقات اللاحقة فقد تحتاج توقيعاً، وكالة، وثائق أصلية، أو مراجعة من الجهة المختصة حسب الحالة.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section width="wide" className="py-12 md:py-16">
        <Card accent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-primary">هل وصف النشاط غير واضح؟</h2>
            <p className="mt-2 max-w-3xl text-primary-600">
              أرسل لنا وصفاً مختصراً قبل تجهيز الوثائق، وسنوضح لك ما إذا كانت المراجعة الأولية كافية أو تحتاج خدمة تسجيل أو ترخيص لاحقة.
            </p>
          </div>
          <WhatsAppLink
            href={whatsappLink(whatsappTemplate)}
            location="activity_review_mid_page"
            ctaText="أرسل وصف النشاط للمراجعة"
            hasPrefill
            locale={locale}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
          >
            <MessageCircle className="size-5" aria-hidden />
            أرسل وصف النشاط للمراجعة
          </WhatsAppLink>
        </Card>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <ListCard title="أسباب شائعة للتأخير أو الرفض" items={delayReasons} />
          <ListCard title="ما لا تشمله هذه الخدمة" items={notIncluded} />
        </div>
      </Section>

      <Section width="wide" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <ListCard title="ماذا يحدث بعد ذلك؟" items={nextSteps} />
          <Card>
            <h2 className="text-2xl font-semibold text-primary">روابط مفيدة قبل اختيار المسار</h2>
            <p className="mt-3 text-sm leading-7 text-primary-600">
              هذه روابط داخلية موجودة تساعدك على الانتقال للخطوة المناسبة دون إنشاء مسارات غير مؤكدة.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:bg-accent/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <Card className="border-primary/20 bg-primary text-background">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <ClipboardCheck className="mb-4 size-8 text-accent" aria-hidden />
              <h2 className="text-3xl font-bold">انسخ هذه الرسالة وأرسلها لنا</h2>
              <p className="mt-4 leading-7 text-primary-100">
                لا ترسل وثائق حساسة في أول رسالة. يكفي وصف مختصر حتى نحدد الخطوة الأقرب.
              </p>
              <WhatsAppLink
                href={whatsappLink(whatsappTemplate)}
                location="activity_review_final_cta"
                ctaText="أرسل وصف النشاط على واتساب"
                hasPrefill
                locale={locale}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل وصف النشاط على واتساب
              </WhatsAppLink>
            </div>
            <pre className="whitespace-pre-wrap rounded-2xl border border-primary-700 bg-primary-900/40 p-5 text-sm leading-8 text-primary-100">
              {whatsappTemplate}
            </pre>
          </div>
        </Card>
      </Section>

      <Section width="wide" className="py-12 md:py-16">
        <Card>
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 size-6 shrink-0 text-accent" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold text-primary">تنبيه قانوني</h2>
              <p className="mt-3 text-sm leading-7 text-primary-600">
                هذه خدمة قانونية خاصة من شركة البركات للمحاماة وليست الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة. المعلومات المنشورة لأغراض تعريفية ولا تغني عن مراجعة التشريعات الرسمية. لا نضمن الموافقة على أي طلب أو نشاط، ومراجعة النشاط هي مراجعة أولية ولا تعني موافقة رسمية. شهادة تسجيل المؤسسة المسجلة لا تعني بالضرورة اكتمال جميع تراخيص مزاولة النشاط، كما أن القواعد الضريبية والجمركية والرسوم الحكومية تخضع لطبيعة النشاط والأنظمة النافذة ويتم تأكيدها قبل الدفع.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}

function ListCard({
  title,
  items,
  footer,
  columns = false,
}: {
  title: string;
  items: string[];
  footer?: string;
  columns?: boolean;
}) {
  return (
    <Card className="h-full">
      <div className="mb-4 flex items-start gap-3">
        <FileSearch className="mt-1 size-5 shrink-0 text-teal-600" aria-hidden />
        <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      </div>
      <ul className={columns ? "grid gap-3 text-sm leading-7 text-primary-600 md:grid-cols-2" : "space-y-3 text-sm leading-7 text-primary-600"}>
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {footer ? (
        <p className="mt-5 rounded-xl bg-accent/10 px-4 py-3 text-sm font-semibold leading-7 text-primary">
          {footer}
        </p>
      ) : null}
    </Card>
  );
}
