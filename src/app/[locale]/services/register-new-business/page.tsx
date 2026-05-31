import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "تسجيل شركة في ASEZA | خدمة قانونية لتسجيل مؤسسة في العقبة",
  description:
    "خدمة قانونية خاصة لمراجعة النشاط، تجهيز ملف تسجيل شركة أو مؤسسة لدى سلطة منطقة العقبة الاقتصادية الخاصة، وتوضيح متطلبات ما بعد التسجيل.",
};

const whatsappReviewMessage =
  "أرغب بمراجعة وصف نشاطي لتسجيل شركة أو مؤسسة لأول مرة في ASEZA. سأرسل وصف النشاط فقط في البداية.";

const audienceItems = [
  "مستثمرون يريدون تأسيس شركة جديدة في العقبة.",
  "شركات تجارة أو استيراد وتصدير أو خدمات لوجستية.",
  "شركاء محليون أو أجانب يحتاجون ترتيب الملف قبل التقديم.",
  "من يريد فهم القيود والموافقات قبل دفع الرسوم أو تجهيز وثائق كثيرة.",
];

const resultItems = [
  "مراجعة أولية للنشاط والشكل القانوني المناسب.",
  "قائمة وثائق أوضح حسب حالة الشركاء والشركة.",
  "تجهيز ملف التسجيل والنماذج المطلوبة حسب الإجراء المناسب.",
  "متابعة قانونية مع الجهة المختصة دون ضمان الموافقة أو مدة محددة.",
];

const activityStatusItems = [
  "مسموحاً ويمكن السير به عند اكتمال المتطلبات.",
  "مقيداً ويحتاج تحققاً إضافياً قبل التقديم.",
  "مرتبطاً بموافقة أو شرط إضافي مثل متطلبات السلامة أو البيئة أو جهة قطاعية.",
  "قد يسبب رفضاً أو تأخيراً إذا صيغ بشكل غير دقيق أو خالف التعليمات النافذة.",
];

const documentCases = [
  {
    title: "شركة جديدة",
    items: [
      "هويات أو جوازات الشركاء.",
      "بيانات الشركاء ونسب الملكية المقترحة.",
      "وصف دقيق للنشاط المطلوب داخل العقبة.",
      "الشكل القانوني المقترح وأسماء تجارية مقترحة عند الحاجة.",
    ],
  },
  {
    title: "شركة قائمة في الأردن",
    items: [
      "شهادة تسجيل الشركة إن كانت قائمة.",
      "عقد التأسيس والنظام الأساسي إن وجد.",
      "شهادة المفوضين بالتوقيع إن وجدت.",
      "قرار أو موافقة داخلية عند الحاجة لإضافة فرع أو نشاط.",
    ],
  },
  {
    title: "شركاء أو مستثمرون أجانب",
    items: [
      "جوازات السفر وبيانات الإقامة أو العنوان خارج الأردن.",
      "وثائق مترجمة أو مصدقة عند وجود وثائق أجنبية.",
      "بيانات المالكين أو المفوضين في الشركات الأجنبية عند الحاجة.",
      "مراجعة متطلبات التوقيع أو الحضور أو الوكالة قبل البدء.",
    ],
  },
  {
    title: "طلب مقدم بواسطة وكيل أو مفوض",
    items: [
      "وكالة أو تفويض واضح يحدد الصلاحيات المطلوبة.",
      "هوية الوكيل أو المفوض وبيانات الاتصال.",
      "تحديد المفوضين بالتوقيع بعد التسجيل.",
      "التأكد من أن التفويض يغطي التقديم والمتابعة والتوقيع حيث يلزم.",
    ],
  },
  {
    title: "نشاط قد يحتاج موافقات إضافية",
    items: [
      "شرح عملي لطبيعة النشاط والبضائع أو الخدمات.",
      "موقع النشاط أو المقر داخل العقبة عند الحاجة.",
      "أي معلومات تتعلق بالصحة العامة أو السلامة أو البيئة أو التخزين.",
      "مستندات قطاعية إضافية إذا طلبتها الجهة المختصة.",
    ],
  },
];

const feeItems = [
  { title: "أتعاب الخدمة القانونية", text: "تحدد بعد مراجعة الحالة وحجم العمل المطلوب." },
  { title: "الرسوم الرسمية", text: "يتم تأكيدها قبل الدفع وقد تختلف حسب النشاط وعدد الأنشطة." },
  { title: "رسوم سنوية أو رسوم نشاط", text: "قد تنطبق حسب الشكل القانوني والنشاط والإجراء المطلوب." },
  { title: "رسوم ترجمة أو تصديق", text: "تظهر عادة عند وجود وثائق أجنبية أو وثائق صادرة من خارج الأردن." },
  { title: "موافقات إضافية", text: "قد تحتاج بعض الأنشطة موافقات أو شهادات من جهات مختصة حسب طبيعتها." },
];

const processSteps = [
  {
    title: "فهم النشاط والشكل القانوني",
    text: "نبدأ بسؤال عملي: ماذا ستفعل الشركة فعلياً في العقبة؟ ثم نراجع الشكل القانوني والملكية والمفوضين.",
  },
  {
    title: "مراجعة الأهلية والقيود المحتملة",
    text: "نراجع ما إذا كان النشاط مباشراً أو يحتاج شرطاً أو موافقة إضافية، ونوضح نقاط الخطر قبل التقديم.",
  },
  {
    title: "تجهيز الوثائق والنماذج",
    text: "نرتب الوثائق حسب الحالة حتى لا يتم تقديم ملف ناقص أو بوصف نشاط غير واضح.",
  },
  {
    title: "التقديم أو المتابعة حسب الإجراء المناسب",
    text: "نتابع المسار المناسب ورقياً أو إلكترونياً حيث ينطبق ذلك، مع معالجة الملاحظات الممكنة دون الوعد بنتيجة محددة.",
  },
  {
    title: "شرح ما بعد التسجيل والمتطلبات التالية",
    text: "بعد صدور التسجيل، نوضح ما قد يلزم قبل مزاولة النشاط مثل شهادات المزاولة أو الموافقات القطاعية.",
  },
];

const timingItems = [
  "في الحالات المباشرة، تبدأ المدة بعد اكتمال الوثائق والبيانات المطلوبة.",
  "قد تكون الإجراءات أسرع عندما يكون النشاط واضحاً والوثائق مكتملة.",
  "قد تزيد المدة عند وجود نشاط مقيد، نقص في الوثائق، وثائق أجنبية، أو موافقات إضافية.",
  "لا نضمن مدة محددة لأن القرار النهائي لدى الجهة المختصة.",
];

const delayReasons = [
  "اختيار نشاط غير دقيق أو غير مطابق للواقع.",
  "نقص في الوكالة أو التفويض.",
  "عدم وضوح المفوضين بالتوقيع.",
  "وجود وثائق أجنبية غير مصدقة أو غير مترجمة.",
  "خلط بين تسجيل المؤسسة ومتطلبات الترخيص أو مزاولة النشاط.",
  "نشاط مقيد أو يحتاج موافقة قطاعية.",
  "عدم وضوح مقر الشركة أو موقع النشاط داخل العقبة عند الحاجة.",
];

const afterRegistrationItems = [
  "متابعة شهادات مزاولة النشاط عند الحاجة.",
  "مراجعة متطلبات الصحة العامة أو السلامة العامة أو البيئة.",
  "مراجعة الالتزامات الضريبية والجمركية حسب النشاط.",
  "التجديد السنوي وتحديث بيانات الشركة.",
  "العضويات أو الموافقات القطاعية إذا انطبقت.",
];

const whatsappChecklist = [
  "وصف النشاط المطلوب.",
  "هل الشركة جديدة أم قائمة؟",
  "جنسية الشركاء.",
  "هل يوجد مقر أو موقع في العقبة؟",
  "هل النشاط استيراد/تصدير، تجارة، تصنيع، خدمات، أو لوجستيات؟",
  "هل توجد وثائق أجنبية؟",
];

const relatedLinks = [
  { label: "مستثمر أردني", href: "/register-business-in-aseza" },
  { label: "مستثمر أجنبي / فرع شركة", href: "/foreign-investors" },
  { label: "شركة استيراد وتصدير", href: "/import-export-company-aseza" },
  { label: "قائمة الوثائق", href: "/aseza-registration-checklist" },
  { label: "مراجعة النشاط", href: "/services/activity-review" },
  { label: "رسوم التسجيل", href: "/aseza-registration-fees" },
  { label: "الضرائب والجمارك", href: "/tax-customs-aqaba" },
  { label: "هل نشاطك مسموح؟", href: "/restricted-prohibited-activities-aseza" },
  { label: "الترخيص والموافقات القطاعية", href: "/licensing-after-registration" },
  { label: "التجديد السنوي", href: "/annual-renewal-aseza" },
];

const legalNotes = [
  "الموقع خدمة قانونية خاصة من شركة البركات للمحاماة وليس الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة.",
  "المعلومات المنشورة لأغراض تعريفية ولا تغني عن مراجعة التشريعات الرسمية أو التعليمات النافذة.",
  "لا نضمن الموافقة على أي طلب أو نشاط، ولا نضمن مدة محددة لإنجاز الإجراء.",
  "شهادة تسجيل المؤسسة المسجلة لا تعني بالضرورة اكتمال جميع تراخيص مزاولة النشاط.",
  "قواعد ضريبية وجمركية تخضع لطبيعة النشاط ومصدر الدخل والأنظمة النافذة.",
  "الرسوم الحكومية قد تتغير ويتم تأكيدها قبل الدفع.",
];

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "خدماتنا", href: "/services" },
            { label: "تسجيل مشروع جديد" },
          ]}
        />
      </div>

      <Section width="wide" className="pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">خدمة قانونية خاصة · شركة البركات للمحاماة</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-primary md:text-5xl">
              تسجيل شركة / مؤسسة لأول مرة في ASEZA
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              نساعدك على مراجعة النشاط المقترح، وتجهيز ملف تسجيل الشركة أو المؤسسة، ومتابعة الطلب مع الجهة المختصة في منطقة العقبة الاقتصادية الخاصة حسب الإجراء المناسب، مع توضيح المتطلبات التي قد تأتي بعد التسجيل.
            </p>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
              ابدأ بوصف النشاط فقط، ولا ترسل وثائق حساسة في البداية.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink(whatsappReviewMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل وصف نشاطك للمراجعة
              </a>
              <a
                href="#documents"
                className="inline-flex items-center justify-center rounded-xl border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                تعرّف على الوثائق المطلوبة
              </a>
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <h2 className="text-2xl font-semibold">ماذا تشمل الخدمة؟</h2>
            <div className="mt-5 grid gap-4">
              {resultItems.map((item) => (
                <div key={item} className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-10">
        <Card className="border-amber-200 bg-amber-50">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <AlertTriangle className="size-7 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold text-primary">مهم قبل التسجيل</h2>
              <ul className="mt-4 grid gap-3 text-primary-700 md:grid-cols-3">
                <li>تسجيل المؤسسة لدى ASEZA لا يعني بالضرورة اكتمال جميع تراخيص مزاولة النشاط.</li>
                <li>بعد التسجيل قد تحتاج الشركة إلى شهادات مزاولة، موافقة بيئية، صحة عامة، سلامة عامة، أو موافقات قطاعية حسب النشاط.</li>
                <li>بعض الأنشطة تكون محظورة أو مقيدة أو تحتاج موافقة خاصة، لذلك من الأفضل مراجعة النشاط قبل تجهيز الملف.</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="من يمكنه الاستفادة من هذه الخدمة؟" items={audienceItems} />
          <InfoCard title="ما نتيجة الخدمة؟" items={resultItems} />
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary">هل نشاطك مسموح في ASEZA؟</h2>
            <p className="mt-4 leading-8 text-primary-600">
              قبل تقديم ملف التسجيل، نراجع النشاط المقترح عملياً وقانونياً لمعرفة ما إذا كان مناسباً للتقديم كما هو، أو يحتاج صياغة أدق أو موافقة إضافية. أمثلة الأنشطة التي قد تحتاج عناية أكبر تشمل بعض أنشطة التخزين، المواد أو البضائع الحساسة، الخدمات الصحية أو الغذائية، الأنشطة البيئية، النقل واللوجستيات، أو أنشطة تتطلب رقابة قطاعية.
            </p>
            <Link
              href="/restricted-prohibited-activities-aseza"
              className="mt-5 inline-flex font-semibold text-accent hover:underline"
            >
              اقرأ دليل: هل نشاطك مسموح؟
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {activityStatusItems.map((item, index) => (
              <Card key={item} className="h-full">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent/15 font-bold text-accent">
                  {index + 1}
                </span>
                <p className="mt-4 text-primary-600">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="documents" width="wide">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">الوثائق المطلوبة</h2>
          <p className="mt-4 leading-8 text-primary-600">
            تختلف الوثائق بحسب ما إذا كانت الشركة جديدة، قائمة، تضم شركاء أجانب، أو سيقدم الطلب بواسطة وكيل. هذه أمثلة عملية وليست قائمة نهائية.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documentCases.map((documentCase) => (
            <Card key={documentCase.title} className="h-full">
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-accent" aria-hidden />
                <h3 className="text-xl font-semibold text-primary">{documentCase.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-primary-600">
                {documentCase.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-5 rounded-2xl bg-primary-50 px-5 py-4 text-sm font-medium text-primary-700">
          الوثائق النهائية تختلف حسب الشكل القانوني، جنسية الشركاء، والنشاط المطلوب.
        </p>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary">الرسوم والأتعاب</h2>
            <p className="mt-4 leading-8 text-primary-600">
              لا نعرض الأرقام كرسوم نهائية قبل مراجعة الحالة، لأن الرسوم الرسمية والمتطلبات الإضافية قد تختلف حسب النشاط والشكل القانوني وعدد الأنشطة والوثائق الأجنبية.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {feeItems.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-primary-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-5 rounded-2xl border border-primary-100 bg-white px-5 py-4 text-sm font-medium text-primary-700">
          لا يتم طلب دفع أي رسوم رسمية قبل توضيح سببها والجهة المستفيدة منها.
        </p>
      </Section>

      <Section width="wide">
        <h2 className="text-3xl font-bold text-primary">خطوات الخدمة</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="h-full">
              <span className="text-3xl font-bold text-accent">{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-600">{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard title="المدة المتوقعة" items={timingItems} />
          <Card>
            <h2 className="text-2xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2>
            <p className="mt-4 leading-8 text-primary-600">
              قد تتم بعض الخطوات إلكترونياً من خلال البوابة الرسمية حيث ينطبق ذلك، بينما قد تتطلب بعض الحالات توقيعاً، وكالة، وثائق أصلية، أو مراجعة حسب النشاط والشكل القانوني.
            </p>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="أسباب شائعة للتأخير أو الرفض" items={delayReasons} />
          <InfoCard title="ماذا يحدث بعد التسجيل؟" items={afterRegistrationItems} />
        </div>
      </Section>

      <Section width="wide" background="muted">
        <Card>
          <h2 className="text-2xl font-semibold text-primary">روابط قد تساعدك قبل أو بعد التسجيل</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Card>
      </Section>

      <Section width="wide">
        <Card accent className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">ابدأ برسالة قصيرة فقط</p>
            <h2 className="mt-2 text-3xl font-bold text-primary">أرسل وصف نشاطك على واتساب</h2>
            <p className="mt-4 leading-8 text-primary-600">
              حتى نراجع المسار الأقرب، أرسل لنا المعلومات الأساسية دون وثائق حساسة في البداية.
            </p>
            <ul className="mt-5 grid gap-2 text-primary-600 sm:grid-cols-2">
              {whatsappChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary-50 p-6">
            <a
              href={whatsappLink(whatsappReviewMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-center font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
            >
              <MessageCircle className="size-5" aria-hidden />
              أرسل وصف نشاطك على واتساب
            </a>
            <p className="mt-4 text-sm leading-7 text-primary-500">
              سنراجع الوصف مبدئياً ونوضح ما إذا كانت هناك وثائق أو معلومات إضافية لازمة قبل فتح ملف رسمي.
            </p>
          </div>
        </Card>
      </Section>

      <Section width="wide" background="muted" className="py-12">
        <Card className="border-primary-200">
          <h2 className="text-xl font-semibold text-primary">تنبيهات قانونية مهمة</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-primary-600 md:grid-cols-2">
            {legalNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </Card>
      </Section>
    </>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full">
      <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      <ul className="mt-4 space-y-3 leading-8 text-primary-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}
