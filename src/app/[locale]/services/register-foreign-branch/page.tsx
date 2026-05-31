import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, Section } from "@/components/ui";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const pageTitle = "تسجيل أو تنظيم وجود شركة أجنبية في العقبة / ASEZA";
const reviewMessage =
  "أرغب في مراجعة مسار شركة أجنبية في العقبة. سأرسل وصف النشاط وبلد الشركة الأم دون وثائق حساسة في البداية.";
const pathMessage =
  "أريد معرفة المسار المناسب لشركة أجنبية في العقبة: فرع، شركة تابعة، مكتب إقليمي/غير عامل، أو مسار آخر حسب الحالة.";
const finalMessage =
  "أرغب في إرسال معلومات شركة أجنبية لمراجعة المسار المناسب في العقبة: بلد الشركة الأم، النشاط، وجود عقد/مشروع، والمقر إن وجد.";

const routeLinks = [
  { href: "/foreign-investors", label: "مستثمر أجنبي / فرع شركة" },
  { href: "/register-business-in-aseza", label: "تسجيل شركة لأول مرة" },
  { href: "/import-export-company-aseza", label: "شركة استيراد وتصدير" },
  { href: "/aseza-registration-checklist", label: "قائمة الوثائق" },
  { href: "/services/activity-review", label: "مراجعة النشاط" },
  { href: "/aseza-registration-fees", label: "رسوم التسجيل" },
  { href: "/tax-customs-aqaba", label: "الضرائب والجمارك" },
  { href: "/restricted-prohibited-activities-aseza", label: "هل نشاطك مسموح؟" },
  { href: "/licensing-after-registration", label: "الترخيص والموافقات القطاعية" },
  { href: "/labor-work-permits-aseza", label: "تصاريح العمل والإقامة" },
  { href: "/annual-renewal-aseza", label: "التجديد السنوي" },
  { href: "/legal-references", label: "المراجع القانونية الرسمية" },
] as const;

const pathOptions = [
  {
    case: "شركة أجنبية لديها عقد أو مشروع داخل الأردن",
    route: "قد تحتاج إلى فرع شركة أجنبية عاملة أو مسار تسجيل آخر حسب العقد والنشاط.",
  },
  {
    case: "شركة أجنبية تريد إدارة إقليمية دون ممارسة تجارية مباشرة",
    route: "قد يناسبها مكتب إقليمي أو غير عامل حسب طبيعة النشاط.",
  },
  {
    case: "شركة أجنبية تريد نشاطاً تجارياً مستمراً في العقبة",
    route: "قد يكون الأنسب تأسيس شركة أردنية مملوكة للشركة الأجنبية ثم استكمال متطلبات ASEZA.",
  },
  {
    case: "شركة أجنبية تريد الاستفادة من مزايا ASEZA",
    route: "يجب بحث التسجيل لدى الجهة المختصة ومتطلبات المؤسسة المسجلة لدى ASEZA حسب الحالة.",
  },
  {
    case: "نشاط استيراد/تصدير أو لوجستيات",
    route: "يحتاج مراجعة النشاط، الموقع، طبيعة البضائع، والمتطلبات الجمركية أو القطاعية.",
  },
];

const beneficiaries = [
  "شركة أجنبية تفكر في فتح وجود قانوني داخل العقبة.",
  "شركة أم تريد معرفة هل الأفضل فرع أم شركة تابعة.",
  "مستثمر أجنبي لديه نشاط استيراد/تصدير أو لوجستيات أو تجارة.",
  "شركة لديها عقد أو مشروع داخل الأردن وتحتاج إلى مسار قانوني مناسب.",
  "ممثل أو وكيل لشركة أجنبية يحتاج إلى تجهيز ملف واضح قبل التقديم.",
];

const outcomes = [
  "تحديد المسار القانوني الأقرب للحالة.",
  "قائمة وثائق مخصصة حسب بلد الشركة الأم ونوع النشاط.",
  "مراجعة أولية لمخاطر التأخير أو الرفض.",
  "خطة واضحة للتصديق والترجمة والتفويض.",
  "شرح المتطلبات التالية بعد التسجيل أو القبول الأولي.",
];

const documents = [
  "شهادة تسجيل الشركة الأم.",
  "عقد التأسيس والنظام الأساسي للشركة الأم.",
  "شهادة حسن قيام أو استمرار الشركة إذا كانت مطلوبة.",
  "قرار من الشركة الأم بفتح فرع أو تعيين ممثل أو تفويض شخص محدد.",
  "أسماء المفوضين بالتوقيع.",
  "جوازات سفر أو هويات المفوضين أو الممثلين.",
  "وكالة قانونية للمحامي أو الممثل.",
  "ترجمة قانونية للوثائق غير العربية.",
  "تصديقات من بلد الإصدار والسفارة أو وزارة الخارجية حسب الحالة.",
  "وصف دقيق للنشاط المطلوب في العقبة.",
  "عقد أو مستند يوضح المشروع داخل الأردن إذا كان موجوداً.",
  "عنوان أو موقع داخل العقبة إذا كان مطلوباً للحالة.",
];

const preparation = [
  "بلد تسجيل الشركة الأم.",
  "نوع الشركة الأم.",
  "النشاط الحالي للشركة الأم.",
  "النشاط المطلوب في العقبة.",
  "هل يوجد عقد أو مشروع داخل الأردن؟",
  "هل تريد فرعاً أم شركة تابعة أم غير متأكد؟",
  "هل توجد وثائق جاهزة ومصدقة؟",
  "هل يوجد عنوان أو موقع في العقبة؟",
];

const feeItems = [
  { label: "أتعاب الخدمة القانونية", text: "تحدد بعد مراجعة الحالة ونطاق العمل." },
  { label: "الرسوم الرسمية", text: "يتم تأكيدها قبل الدفع وقد تختلف حسب المسار والنشاط والجهة المختصة." },
  { label: "رسوم التصديق والترجمة", text: "تختلف حسب بلد الإصدار وعدد الوثائق." },
  { label: "رسوم الوكالات أو التفويضات", text: "قد تنطبق حسب الحالة." },
  { label: "موافقات إضافية أو رسوم نشاط", text: "قد تنطبق إذا كان النشاط مقيداً أو يحتاج موافقة قطاعية." },
];

const steps = [
  "فهم وضع الشركة الأم والنشاط المطلوب.",
  "تحديد المسار القانوني الأنسب.",
  "تجهيز قائمة الوثائق والتصديقات والترجمات.",
  "إعداد الملف والوكالات أو التفويضات اللازمة.",
  "المتابعة وشرح المتطلبات التالية بعد التسجيل أو القبول الأولي.",
];

const timing = [
  "تبدأ المدة العملية بعد اكتمال الوثائق المطلوبة وتصديقها وترجمتها عند الحاجة.",
  "أطول جزء في معاملات الشركات الأجنبية غالباً يكون تجهيز وثائق الشركة الأم من بلدها.",
  "قد تزيد المدة عند وجود نشاط مقيد، وثائق أجنبية غير مكتملة، ترجمة غير مطابقة، أو موافقات قطاعية.",
  "لا نضمن مدة محددة لأن القرار النهائي لدى الجهات المختصة.",
];

const mistakes = [
  "عدم وضوح المسار المطلوب: فرع، شركة تابعة، مكتب إقليمي، أو غير ذلك.",
  "وثائق الشركة الأم قديمة أو غير مصدقة.",
  "ترجمة قانونية غير مطابقة للوثائق الأصلية.",
  "اختلاف اسم الشركة بين الوثائق والترجمة.",
  "عدم وجود قرار واضح من الشركة الأم.",
  "عدم وضوح المفوض بالتوقيع داخل الأردن.",
  "النشاط المطلوب غير وارد ضمن غايات الشركة الأم.",
  "النشاط مقيد أو يحتاج موافقة خاصة.",
  "عدم وجود وكالة أو تفويض صحيح.",
  "عدم وضوح عنوان أو موقع النشاط داخل العقبة عند الحاجة.",
  "الخلط بين التسجيل ومتطلبات الترخيص أو مزاولة النشاط.",
];

const afterRegistration = [
  "استكمال شهادات مزاولة النشاط عند الحاجة.",
  "مراجعة متطلبات الصحة العامة والسلامة العامة والبيئة.",
  "مراجعة التصاريح القطاعية إذا كان النشاط يحتاج موافقة خاصة.",
  "مراجعة متطلبات العمالة والتأشيرات والإقامة إن وجدت.",
  "مراجعة الالتزامات الضريبية والجمركية حسب النشاط ومصدر الدخل.",
  "متابعة التجديد السنوي وتحديث بيانات الشركة الأم أو المفوضين عند الحاجة.",
];

const finalChecklist = [
  "بلد الشركة الأم.",
  "اسم النشاط المطلوب في العقبة.",
  "هل يوجد عقد أو مشروع داخل الأردن؟",
  "هل تريد فرعاً أم شركة تابعة أم أنك غير متأكد؟",
  "هل يوجد مقر أو عنوان في العقبة؟",
  "هل الوثائق جاهزة ومصدقة؟",
  "هل النشاط يتضمن استيراد/تصدير أو بضائع خاصة؟",
  "هل تحتاج الشركة إلى موظفين أو تصاريح عمل؟",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata({
    locale,
    path: "/services/register-foreign-branch",
    title: "تسجيل شركة أجنبية في العقبة | فرع أجنبي أو شركة تابعة في ASEZA",
    description:
      "خدمة قانونية خاصة لمساعدة الشركات الأجنبية على تحديد المسار المناسب في العقبة، مراجعة وثائق الشركة الأم، تجهيز التصديقات والترجمات، ومتابعة إجراءات التسجيل أو التنظيم القانوني حسب الحالة.",
  });
}

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "خدماتنا", href: "/services" },
            { label: "تسجيل أو تنظيم وجود شركة أجنبية" },
          ]}
        />
      </div>

      <Section width="wide" className="pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">خدمة قانونية خاصة للشركات الأجنبية</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-primary md:text-5xl">
              {pageTitle}
            </h1>
            <div className="mt-5 max-w-3xl space-y-3 text-base leading-8 text-primary-600 md:text-lg">
              <p>
                تساعد هذه الخدمة الشركات الأجنبية على فهم المسار القانوني الصحيح قبل تجهيز الطلب أو
                تقديم أي ملف لدى الجهات المختصة.
              </p>
              <p>
                قد يكون المسار فرع شركة أجنبية، أو شركة أردنية مملوكة من الشركة الأم، أو مكتباً
                إقليمياً/غير عامل، أو مسار تسجيل آخر لدى جهة مختصة ثم استكمال متطلبات ASEZA حسب الحالة.
              </p>
              <p>
                نراجع وثائق الشركة الأم، النشاط، التصديقات، الترجمات، التمثيل، والخطوات التالية دون
                افتراض نتيجة واحدة لكل الشركات.
              </p>
            </div>
            <p className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm font-semibold text-primary">
              ابدأ بوصف النشاط فقط، ولا ترسل وثائق حساسة في البداية.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                href={whatsappLink(reviewMessage)}
                location="foreign-branch-hero-primary"
                ctaText="أرسل وصف نشاط الشركة للمراجعة"
                hasPrefill
                locale="ar"
                investorType="foreign-company"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل وصف نشاط الشركة للمراجعة
              </WhatsAppLink>
              <WhatsAppLink
                href={whatsappLink(pathMessage)}
                location="foreign-branch-hero-secondary"
                ctaText="اعرف المسار المناسب لشركتك"
                hasPrefill
                locale="ar"
                investorType="foreign-company"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-white px-5 py-3 font-semibold text-primary transition hover:bg-primary-50"
              >
                اعرف المسار المناسب لشركتك
              </WhatsAppLink>
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <h2 className="text-2xl font-bold">مهم قبل تجهيز الوثائق</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-primary-100">
              <li>• لا يوجد مسار واحد يناسب جميع الشركات الأجنبية.</li>
              <li>
                • قبل تجهيز الطلب، يجب تحديد ما إذا كانت الحالة تحتاج إلى فرع شركة أجنبية، شركة أردنية
                مملوكة من الشركة الأم، مكتب إقليمي/غير عامل، أو تسجيل لدى جهة مختصة ثم استكمال إجراءات
                ASEZA حسب الحالة.
              </li>
              <li>• اختيار المسار الخاطئ قد يؤدي إلى تأخير أو رفض أو طلب وثائق إضافية.</li>
              <li>• لا نطلب إرسال وثائق حساسة في البداية؛ يكفي وصف النشاط ووضع الشركة الأم.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-primary-100 bg-white p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">روابط تساعدك على مقارنة المسارات</h2>
            <p className="mt-2 text-sm leading-7 text-primary-600">
              استخدم هذه الصفحات الموجودة لفهم التسجيل، النشاط، الرسوم، الترخيص، والالتزامات اللاحقة.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-3xl md:justify-end">
            {routeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary transition hover:border-accent/50 hover:bg-accent/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section width="wide">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">ما هو المسار الصحيح للشركة الأجنبية؟</h2>
          <p className="mt-3 leading-7 text-primary-600">
            يبدأ العمل بتصنيف الحالة، لأن كلمة “فرع أجنبي” قد لا تكون دائماً الخيار العملي أو النظامي
            الأنسب لكل نشاط داخل العقبة.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pathOptions.map((item) => (
            <Card key={item.case} hoverable>
              <p className="text-sm font-semibold text-accent">الحالة</p>
              <h3 className="mt-2 text-lg font-bold leading-7 text-primary">{item.case}</h3>
              <p className="mt-4 text-sm font-semibold text-primary">المسار المحتمل</p>
              <p className="mt-2 text-sm leading-7 text-primary-600">{item.route}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-5 text-sm leading-7 text-primary-600">
          التقييم النهائي يعتمد على جنسية الشركة، وثائق الشركة الأم، النشاط المطلوب، وجود عقد أو مقر،
          ومتطلبات الجهات المختصة.
        </p>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <ListCard title="من يمكنه الاستفادة من هذه الخدمة؟" items={beneficiaries} />
          <ListCard title="ما نتيجة الخدمة؟" items={outcomes} />
        </div>
        <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-800">
          النتيجة ليست ضماناً للموافقة، وإنما تنظيم قانوني للملف وتقليل الأخطاء قبل التقديم.
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">الوثائق المطلوبة</h2>
            <p className="mt-3 leading-7 text-primary-600">
              تختلف القائمة حسب بلد الشركة الأم، شكلها القانوني، النشاط، والمسار الذي سيتم اختياره.
              هذه أمثلة عملية للوثائق التي قد تُطلب.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {documents.map((doc) => (
              <div key={doc} className="flex gap-3 rounded-2xl border border-primary-100 bg-white p-4">
                <FileText className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                <span className="text-sm leading-7 text-primary-600">{doc}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-5 text-sm leading-7 text-primary-600">
          قد يلزم أن تكون بعض الوثائق حديثة ومصدقة حسب الأصول، وقد لا تكفي النسخ غير المصدقة أو
          الترجمات غير المطابقة.
        </p>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <ListCard title="ماذا تجهز قبل التقديم؟" items={preparation} />
          <Card>
            <h2 className="text-xl font-semibold text-primary">الرسوم والأتعاب</h2>
            <div className="mt-4 space-y-3">
              {feeItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">{item.label}</p>
                  <p className="mt-1 text-sm leading-7 text-primary-600">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold leading-7 text-primary-600">
              لا يتم طلب دفع أي رسوم رسمية قبل توضيح سببها والجهة المستفيدة منها.
            </p>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-primary">خطوات الخدمة</h2>
            <ol className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-7 text-primary-600">{step}</span>
                </li>
              ))}
            </ol>
          </Card>
          <ListCard title="المدة المتوقعة" items={timing} />
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card accent>
            <h2 className="text-xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2>
            <p className="mt-3 text-sm leading-7 text-primary-600">
              قد تتم بعض الخطوات إلكترونياً حيث ينطبق ذلك، لكن معاملات الشركات الأجنبية قد تتطلب وثائق
              أصلية، تصديقات، ترجمات، وكالة، أو توقيعاً من المفوض حسب الحالة.
            </p>
          </Card>
          <Card accent>
            <h2 className="text-xl font-semibold text-primary">تحتاج إجابة قبل تجهيز الملف؟</h2>
            <p className="mt-3 text-sm leading-7 text-primary-600">
              أرسل وصفاً مختصراً للنشاط، بلد الشركة الأم، وهل يوجد عقد أو مقر في الأردن. سنوضح لك
              المعلومات الأولى المطلوبة دون طلب وثائق حساسة في البداية.
            </p>
            <WhatsAppLink
              href={whatsappLink(pathMessage)}
              location="foreign-branch-mid-page"
              ctaText="اعرف المسار المناسب لشركتك"
              hasPrefill
              locale="ar"
              investorType="foreign-company"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 font-semibold text-white transition hover:bg-[#1FA855]"
            >
              <MessageCircle className="size-4" aria-hidden />
              اعرف المسار المناسب لشركتك
            </WhatsAppLink>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ListCard title="أسباب شائعة للتأخير أو الرفض" items={mistakes} />
          <Card>
            <h2 className="text-xl font-semibold text-primary">ماذا يحدث بعد ذلك؟</h2>
            <p className="mt-3 text-sm leading-7 text-primary-600">
              التسجيل أو القبول الأولي مرحلة واحدة فقط، وقد تظهر بعده متطلبات تشغيل أو ترخيص أو امتثال
              حسب النشاط.
            </p>
            <div className="mt-4 grid gap-3">
              {afterRegistration.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-600" aria-hidden />
                  <span className="text-sm leading-7 text-primary-600">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="primary">
        <Card className="bg-white">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-accent">قبل التواصل، أرسل لنا هذه المعلومات</p>
              <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
                مراجعة أولية أكثر دقة تبدأ من وصف واضح، لا من إرسال كل الوثائق.
              </h2>
              <p className="mt-4 leading-7 text-primary-600">
                لا ترسل وثائق حساسة في أول رسالة. يكفي وصف مختصر حتى نحدد الخطوة الأقرب.
              </p>
              <WhatsAppLink
                href={whatsappLink(finalMessage)}
                location="foreign-branch-final-cta"
                ctaText="أرسل معلومات الشركة على واتساب"
                hasPrefill
                locale="ar"
                investorType="foreign-company"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل معلومات الشركة على واتساب
              </WhatsAppLink>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {finalChecklist.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <span className="text-sm leading-7 text-primary-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <Section width="wide" className="py-10">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-1 size-5 shrink-0 text-amber-700" aria-hidden />
            <div className="text-sm leading-7 text-amber-800">
              <p className="font-semibold">تنبيه قانوني مختصر</p>
              <p className="mt-1">
                هذه خدمة قانونية خاصة من شركة البركات للمحاماة وليست الموقع الرسمي لسلطة منطقة العقبة
                الاقتصادية الخاصة. المعلومات لأغراض تعريفية ولا تغني عن مراجعة التشريعات الرسمية أو
                متطلبات الجهات المختصة، ولا نضمن الموافقة على أي طلب أو نشاط.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-primary-600">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
