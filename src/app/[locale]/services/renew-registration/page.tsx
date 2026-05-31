import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "تجديد تسجيل شركة في ASEZA | التجديد السنوي للمؤسسات في العقبة",
  description:
    "خدمة قانونية خاصة لمتابعة تجديد تسجيل شركة أو مؤسسة لدى سلطة منطقة العقبة الاقتصادية الخاصة، ومراجعة الرسوم السنوية، الوثائق، التزامات النشاط، وأي تحديثات مطلوبة قبل التجديد.",
};

const whatsappRenewalMessage = `مرحباً، أريد تجديد تسجيل شركة / مؤسسة في ASEZA.
اسم الشركة:
رقم التسجيل إن وجد:
تاريخ انتهاء التسجيل أو آخر تجديد:
عدد الأنشطة المسجلة:
هل التجديد متأخر؟
هل تغير النشاط أو العنوان أو المفوضون؟
هل توجد رخص أو شهادات مرتبطة؟`;

const heroChecks = [
  "مراجعة حالة التسجيل وتاريخ الانتهاء.",
  "فحص الأنشطة والرسوم والوثائق المطلوبة.",
  "تحديد ما إذا كانت البيانات تحتاج تحديثاً قبل التجديد.",
];

const warningItems = [
  "التجديد السنوي لا يعني فقط دفع الرسوم.",
  "قبل التجديد يجب التأكد من أن بيانات الشركة، النشاط، العنوان، المفوضين، والرخص المرتبطة ما زالت صحيحة.",
  "أي تغيير غير محدث قد يسبب تأخيراً أو طلب تعديل قبل التجديد.",
  "بعض الحالات قد تحتاج تسوية رسوم، تحديث بيانات، أو مراجعة شهادات مزاولة النشاط قبل إتمام التجديد.",
  "لا ترسل وثائق حساسة في البداية؛ يكفي وصف وضع الشركة وموعد انتهاء التسجيل.",
];

const renewalReviewItems = [
  {
    title: "حالة التسجيل وتاريخ الانتهاء",
    text: "لمعرفة هل التجديد ضمن الوقت أم متأخر، وهل قد توجد رسوم أو متطلبات إضافية.",
  },
  {
    title: "عدد الأنشطة المسجلة",
    text: "لأن الرسوم أو المتطلبات قد تختلف حسب عدد وطبيعة الأنشطة.",
  },
  {
    title: "الرسوم السنوية المستحقة",
    text: "لتأكيد الرسوم قبل الدفع وتجنب الاعتماد على معلومات قديمة.",
  },
  {
    title: "رخصة المهن أو شهادات مزاولة النشاط",
    text: "لأن التجديد قد لا يكون كافياً إذا كانت الرخص أو الشهادات المرتبطة منتهية أو تحتاج تحديثاً.",
  },
  {
    title: "العنوان وموقع النشاط",
    text: "إذا تغير الموقع دون تحديث، قد يؤثر ذلك على التجديد أو الترخيص.",
  },
  {
    title: "المفوضون بالتوقيع",
    text: "إذا تغير المفوضون أو لم تكن بياناتهم محدثة، قد يلزم تعديل قبل التجديد.",
  },
  {
    title: "أي تعديلات معلقة",
    text: "بعض الشركات تحتاج تعديل نشاط أو عنوان أو مفوضين قبل إتمام التجديد.",
  },
  {
    title: "نشاط مقيد أو يحتاج موافقة",
    text: "بعض الأنشطة قد تحتاج موافقة أو تحديث قبل التجديد أو مزاولة النشاط.",
  },
];

const audienceItems = [
  "شركة أو مؤسسة مسجلة لدى ASEZA اقترب موعد تجديدها.",
  "شركة انتهى تسجيلها وتريد معرفة الخطوة التالية.",
  "شركة لديها أكثر من نشاط مسجل وتريد مراجعة الرسوم والمتطلبات.",
  "شركة تغير نشاطها أو عنوانها أو مفوضوها قبل التجديد.",
  "شركة لديها رخصة مهن أو شهادة مزاولة نشاط مرتبطة بالتجديد.",
  "شركة أجنبية أو فرع أجنبي يحتاج مراجعة وضع الوثائق أو التفويضات قبل التجديد.",
  "شركة تريد التأكد من عدم وجود تعديل مطلوب قبل الدفع أو التقديم.",
];

const resultItems = [
  "تحديد حالة التجديد والبيانات المطلوبة.",
  "مراجعة تاريخ الانتهاء وأي تأخير محتمل.",
  "تحديد الوثائق أو التفويضات اللازمة.",
  "توضيح الرسوم الرسمية بعد تأكيدها من الجهة المختصة.",
  "تحديد ما إذا كانت الشركة تحتاج تعديل بيانات قبل التجديد.",
  "متابعة التجديد حسب المسار المناسب.",
  "شرح ما يلزم بعد التجديد، مثل تحديث الرخص أو الشهادات المرتبطة.",
];

const beforeApplyItems = [
  "اسم الشركة كما هو في السجل.",
  "رقم التسجيل إن وجد.",
  "تاريخ انتهاء التسجيل أو آخر تجديد.",
  "عدد الأنشطة المسجلة.",
  "هل التجديد ضمن الوقت أم متأخر؟",
  "هل تغير النشاط أو العنوان أو المفوضون بالتوقيع؟",
  "هل توجد رخصة مهن أو شهادة مزاولة نشاط مرتبطة؟",
  "هل توجد رسوم أو معاملات معلقة؟",
  "هل توجد وثائق أجنبية أو شركة أم أجنبية؟",
  "هل يوجد تفويض أو وكالة لمقدم الطلب؟",
];

const documentCases = [
  {
    title: "تجديد مباشر",
    items: ["شهادة التسجيل الحالية.", "رقم التسجيل.", "هوية أو بيانات المفوض.", "بيانات الاتصال."],
  },
  {
    title: "وجود تغيير في بيانات الشركة",
    items: ["وثائق التعديل.", "قرار شركاء أو تفويض.", "شهادة مفوضين إذا وجدت."],
  },
  {
    title: "وجود نشاط أو رخصة مرتبطة",
    items: ["شهادة مزاولة النشاط.", "رخصة المهن إن وجدت.", "أي موافقات قطاعية مرتبطة بالنشاط."],
  },
  {
    title: "شركة أجنبية أو مفوض جديد",
    items: ["وكالة أو تفويض.", "وثائق مصدقة أو مترجمة عند الحاجة.", "ما يثبت صفة المفوض."],
  },
  {
    title: "تجديد متأخر",
    items: ["تاريخ آخر تجديد.", "سبب التأخير إن وجد.", "أي مطالبات أو رسوم أو معاملات سابقة."],
  },
];

const differenceRows = [
  {
    action: "تجديد التسجيل",
    meaning: "تمديد صلاحية تسجيل المؤسسة أو الشركة لدى ASEZA حسب الحالة.",
  },
  {
    action: "تعديل البيانات",
    meaning: "تحديث النشاط أو العنوان أو المفوضين أو الشركاء أو أي بيانات مسجلة.",
  },
  {
    action: "رخصة المهن أو شهادة مزاولة النشاط",
    meaning:
      "متطلبات مرتبطة بممارسة النشاط فعلياً، وقد لا يتم تحديثها تلقائياً بمجرد تجديد التسجيل.",
  },
];

const feeItems = [
  {
    title: "أتعاب الخدمة القانونية",
    text: "تحدد حسب حالة الشركة ونطاق المتابعة.",
  },
  {
    title: "الرسوم الرسمية",
    text: "يتم تأكيدها قبل الدفع وقد تختلف حسب عدد الأنشطة والحالة.",
  },
  {
    title: "رسوم النشاط السنوية",
    text: "قد تنطبق حسب عدد وطبيعة الأنشطة.",
  },
  {
    title: "رخصة المهن أو شهادات النشاط",
    text: "قد تكون لها رسوم أو متطلبات منفصلة.",
  },
  {
    title: "رسوم التأخير أو التسوية",
    text: "قد تظهر إذا كان التجديد متأخراً أو توجد التزامات سابقة.",
  },
  {
    title: "رسوم التصديق أو الترجمة",
    text: "قد تنطبق عند وجود وثائق أجنبية أو تفويضات.",
  },
];

const processSteps = [
  {
    title: "مراجعة حالة التسجيل وتاريخ الانتهاء",
    text: "نبدأ بتحديد وضع التسجيل الحالي وهل التجديد ضمن الوقت أم متأخر.",
  },
  {
    title: "فحص الأنشطة والبيانات المرتبطة بالشركة",
    text: "نراجع النشاط، العنوان، المفوضين، والرخص المرتبطة لمعرفة ما إذا كانت ما زالت مطابقة.",
  },
  {
    title: "تحديد الوثائق والرسوم والمتطلبات",
    text: "نوضح المعلومات والوثائق المطلوبة والرسوم الرسمية بعد تأكيدها من الجهة المختصة.",
  },
  {
    title: "تجهيز ملف التجديد والمتابعة حسب المسار المناسب",
    text: "نرتب الملف ونوضح ما إذا كان المسار إلكترونياً أو يحتاج تفويضاً أو متابعة قانونية.",
  },
  {
    title: "توضيح ما يلزم بعد التجديد من تحديثات أو رخص مرتبطة",
    text: "بعد النتيجة، نراجع ما إذا كانت هناك رخص أو شهادات أو التزامات أخرى تحتاج متابعة.",
  },
];

const deliveryItems = [
  "يمكن تجهيز الملف ومراجعته عن بُعد في البداية.",
  "قد يتم التقديم إلكترونياً أو من خلال متابعة قانونية حسب الحالة.",
  "قد تحتاج بعض الحالات توقيعاً، تفويضاً، وكالة، تسوية رسوم، أو وثائق أصلية.",
  "طريقة الاستلام أو إثبات التجديد تعتمد على الإجراء المتاح لدى الجهة المختصة.",
];

const delayReasons = [
  "التأخر بعد انتهاء صلاحية التسجيل.",
  "وجود رسوم أو التزامات سنوية غير مسددة.",
  "نقص الوثائق أو بيانات المفوض.",
  "تغيير النشاط أو العنوان دون تعديل السجل.",
  "تغيير المفوضين بالتوقيع دون تحديث البيانات.",
  "اختلاف بين السجل، الرخصة، والممارسة الفعلية.",
  "وجود رخصة مهن أو شهادة مزاولة نشاط منتهية.",
  "نشاط مقيد أو يحتاج موافقة قبل التجديد أو مزاولة النشاط.",
  "وجود معاملات أو تعديلات معلقة.",
  "الاعتماد على معلومات رسوم قديمة.",
  "وثائق أجنبية غير مصدقة أو غير مترجمة عند الحاجة.",
];

const afterItems = [
  "استمرار الوضع النظامي للشركة حسب الموافقة.",
  "حفظ إثبات التجديد لاستخدامه في المعاملات اللاحقة.",
  "تحديث رخصة المهن أو شهادات مزاولة النشاط إذا لزم.",
  "مراجعة أي تعديلات مطلوبة على النشاط أو العنوان أو المفوضين.",
  "متابعة الالتزامات السنوية التالية مبكراً لتجنب التأخير.",
  "مراجعة أثر التجديد على أي معاملات ضريبية أو جمركية إذا كان النشاط يتطلب ذلك.",
];

const whatsappChecklist = [
  "اسم الشركة.",
  "رقم التسجيل إن وجد.",
  "تاريخ انتهاء التسجيل أو آخر تجديد.",
  "عدد الأنشطة المسجلة.",
  "هل التجديد متأخر؟",
  "هل يوجد تغيير في النشاط أو العنوان أو المفوضين؟",
  "هل توجد رخصة مهن أو شهادة مزاولة نشاط مرتبطة؟",
  "هل توجد رسوم أو معاملات معلقة؟",
  "هل توجد وثائق أجنبية أو تفويضات؟",
];

const relatedLinks = [
  { label: "تعديل بيانات الشركة المسجلة", href: "/services/amend-existing-company" },
  { label: "مراجعة النشاط", href: "/services/activity-review" },
  { label: "تسجيل شركة لأول مرة", href: "/services/register-new-business" },
  { label: "شركة استيراد وتصدير", href: "/import-export-company-aseza" },
  { label: "قائمة الوثائق", href: "/documents-checklists" },
  { label: "رسوم التسجيل", href: "/aseza-registration-fees" },
  { label: "الضرائب والجمارك", href: "/tax-customs-aqaba" },
  { label: "هل نشاطك مسموح؟", href: "/restricted-prohibited-activities-aseza" },
  { label: "الترخيص والموافقات القطاعية", href: "/licensing-after-registration" },
  { label: "تصاريح العمل والإقامة", href: "/labor-work-permits-aseza" },
  { label: "المراجع القانونية الرسمية", href: "/legal-references" },
];

const legalNotes = [
  "الموقع خدمة قانونية خاصة وليس الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة.",
  "المعلومات المنشورة لأغراض تعريفية ولا تغني عن مراجعة التشريعات الرسمية.",
  "لا نضمن إتمام التجديد أو قبول أي طلب.",
  "تجديد التسجيل لا يعني بالضرورة تحديث جميع التراخيص أو شهادات مزاولة النشاط.",
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
            { label: "التجديد السنوي" },
          ]}
        />
      </div>

      <Section width="wide" className="pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">خدمة قانونية خاصة · شركة البركات للمحاماة</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-primary md:text-5xl">
              تجديد تسجيل شركة / مؤسسة في ASEZA
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              نساعدك في مراجعة حالة التسجيل، تاريخ الانتهاء، الأنشطة المسجلة، الرسوم والوثائق المطلوبة، وأي تعديلات لازمة قبل التجديد السنوي.
            </p>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
              لا ترسل وثائق حساسة في البداية. ابدأ باسم الشركة، تاريخ انتهاء التسجيل إن وجد، وهل يوجد أي تغيير في البيانات.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink(whatsappRenewalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل بيانات التجديد للمراجعة
              </a>
              <a
                href="#renewal-review"
                className="inline-flex items-center justify-center rounded-xl border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                ماذا نراجع قبل التجديد؟
              </a>
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <h2 className="text-2xl font-semibold">هدف المراجعة قبل التجديد</h2>
            <div className="mt-5 grid gap-4">
              {heroChecks.map((item) => (
                <div key={item} className="flex gap-3 text-primary-100">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-primary-200">
              الهدف هو تقليل التأخير الناتج عن سجل منتهي، وثائق ناقصة، رسوم غير مسددة، أو بيانات شركة قديمة.
            </p>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-10">
        <Card className="border-amber-200 bg-amber-50">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <AlertTriangle className="size-7 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold text-primary">مهم قبل التجديد</h2>
              <ul className="mt-4 grid gap-3 text-primary-700 md:grid-cols-2">
                {warningItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      <Section id="renewal-review" width="wide">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">ماذا نراجع قبل التجديد؟</h2>
          <p className="mt-4 leading-8 text-primary-600">
            المراجعة لا تقتصر على تاريخ الانتهاء. نتحقق من النقاط التي قد تؤثر على قبول ملف التجديد أو الحاجة إلى تعديل بيانات قبل التقديم.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {renewalReviewItems.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-12">
        <Card accent className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-primary">هل اقترب موعد التجديد أو انتهت الصلاحية؟</h2>
            <p className="mt-3 leading-8 text-primary-600">
              أرسل المعلومات الأساسية فقط، وسنوضح ما إذا كان المسار الأقرب هو تجديد مباشر، تعديل بيانات، أو مراجعة رخص وشهادات مرتبطة.
            </p>
          </div>
          <a
            href={whatsappLink(whatsappRenewalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
          >
            <MessageCircle className="size-5" aria-hidden />
            أرسل بيانات التجديد للمراجعة
          </a>
        </Card>
      </Section>

      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="من يمكنه الاستفادة من هذه الخدمة؟" items={audienceItems} />
          <InfoCard
            title="ما نتيجة الخدمة؟"
            items={resultItems}
            note="النتيجة لا تعني ضمان إتمام التجديد، وإنما تنظيم الملف وتقليل الأخطاء قبل التقديم."
          />
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary">ماذا تجهز قبل التقديم؟</h2>
            <p className="mt-4 leading-8 text-primary-600">
              هذه معلومات أولية تساعدنا على تحديد مسار التجديد دون إرسال وثائق حساسة في الرسالة الأولى.
            </p>
          </div>
          <InfoCard title="قائمة المراجعة الأولية" items={beforeApplyItems} />
        </div>
      </Section>

      <Section id="documents" width="wide">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">الوثائق المطلوبة</h2>
          <p className="mt-4 leading-8 text-primary-600">
            لا توجد قائمة واحدة ثابتة لكل الشركات. الوثائق تختلف حسب حالة التسجيل، وجود تغييرات، وعدد الأنشطة والرخص المرتبطة.
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
          الوثائق النهائية تختلف حسب حالة الشركة، عدد الأنشطة، وجود تعديلات، ونوع الرخص أو الشهادات المرتبطة.
        </p>
      </Section>

      <Section width="wide" background="muted">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">ما الفرق بين التجديد والتعديل والترخيص؟</h2>
          <p className="mt-4 leading-8 text-primary-600">
            أحياناً تحتاج الشركة أكثر من إجراء واحد. لذلك نحدد أولاً هل المطلوب تجديداً فقط أم يوجد تعديل أو رخصة مرتبطة.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
          <div className="grid bg-primary px-5 py-3 text-sm font-semibold text-background md:grid-cols-[0.35fr_0.65fr]">
            <span>الإجراء</span>
            <span>المعنى</span>
          </div>
          {differenceRows.map((row) => (
            <div key={row.action} className="grid gap-2 border-t border-primary-100 px-5 py-4 md:grid-cols-[0.35fr_0.65fr]">
              <h3 className="font-semibold text-primary">{row.action}</h3>
              <p className="leading-7 text-primary-600">{row.meaning}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-2xl border border-primary-100 bg-white px-5 py-4 text-sm font-medium text-primary-700">
          قد تحتاج الشركة إلى أكثر من إجراء في نفس الوقت إذا كانت البيانات قد تغيرت أو كانت الرخص المرتبطة منتهية.
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary">الرسوم والأتعاب</h2>
            <p className="mt-4 leading-8 text-primary-600">
              الرسوم الرسمية لا تُعامل كرقم ثابت قبل مراجعة عدد الأنشطة، حالة التجديد، وجود رخص مرتبطة، وأي تأخير أو التزامات سابقة.
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
        <p className="mt-5 rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4 text-sm font-medium text-primary-700">
          لا يتم طلب دفع أي رسوم رسمية قبل توضيح سببها والجهة المستفيدة منها.
        </p>
      </Section>

      <Section width="wide" background="muted">
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

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-primary">المدة المتوقعة</h2>
            <p className="mt-4 leading-8 text-primary-600">
              تبدأ المدة العملية بعد اكتمال البيانات والوثائق المطلوبة. يكون التجديد أسرع عندما تكون بيانات الشركة محدثة ولا توجد رسوم أو تعديلات معلقة. قد تزيد المدة إذا كان التجديد متأخراً، أو توجد تغييرات في النشاط أو العنوان أو المفوضين، أو كانت هناك رخص أو شهادات مرتبطة تحتاج تحديثاً. لا نضمن مدة محددة لأن القرار النهائي لدى الجهة المختصة.
            </p>
          </Card>
          <InfoCard title="طريقة التقديم والاستلام" items={deliveryItems} />
          <Card>
            <h2 className="text-2xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2>
            <p className="mt-4 leading-8 text-primary-600">
              قد تتم بعض خطوات التجديد إلكترونياً حيث ينطبق ذلك، لكن بعض الحالات قد تتطلب تفويضاً، توقيعاً، وكالة، تسوية رسوم، تحديث بيانات، أو مراجعة وثائق حسب وضع الشركة ونوع النشاط.
            </p>
          </Card>
          <Card accent>
            <h2 className="text-2xl font-semibold text-primary">غير متأكد إن كانت هذه الخدمة مناسبة لحالتك؟</h2>
            <p className="mt-4 leading-8 text-primary-600">
              إذا لم تكن متأكداً هل تحتاج تجديد تسجيل، تعديل بيانات، أو تحديث رخصة/شهادة مزاولة نشاط، أرسل وصفاً مختصراً لحالة الشركة وسنساعدك على تحديد الخدمة الأقرب.
            </p>
            <a
              href={whatsappLink("أريد معرفة ما إذا كانت حالتي تحتاج تجديد تسجيل، تعديل بيانات، أو تحديث رخصة/شهادة مزاولة نشاط في ASEZA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
            >
              <MessageCircle className="size-4" aria-hidden />
              اسأل عن المسار المناسب
            </a>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="أسباب شائعة للتأخير أو الرفض" items={delayReasons} />
          <InfoCard title="ماذا يحدث بعد ذلك؟" items={afterItems} />
        </div>
      </Section>

      <Section width="wide">
        <Card>
          <h2 className="text-2xl font-semibold text-primary">روابط قد تساعدك قبل أو بعد التجديد</h2>
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

      <Section width="wide" background="muted">
        <Card accent className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-accent">ابدأ برسالة قصيرة فقط</p>
            <h2 className="mt-2 text-3xl font-bold text-primary">قبل التواصل، أرسل لنا هذه المعلومات</h2>
            <p className="mt-4 leading-8 text-primary-600">
              هذه البيانات تساعدنا على فهم حالة التجديد دون طلب وثائق حساسة في البداية.
            </p>
            <ul className="mt-5 grid gap-2 text-primary-600 sm:grid-cols-2">
              {whatsappChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary-50 p-6">
            <h3 className="font-semibold text-primary">نموذج رسالة واتساب</h3>
            <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-primary-100 bg-white p-4 text-sm leading-7 text-primary-700">
              {whatsappRenewalMessage}
            </pre>
            <a
              href={whatsappLink(whatsappRenewalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-center font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
            >
              <MessageCircle className="size-5" aria-hidden />
              أرسل بيانات التجديد على واتساب
            </a>
            <p className="mt-4 text-sm leading-7 text-primary-500">
              لا ترسل وثائق حساسة في أول رسالة. يكفي وصف مختصر حتى نحدد الخطوة الأقرب.
            </p>
          </div>
        </Card>
      </Section>

      <Section width="wide" className="py-12">
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

function InfoCard({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <Card className="h-full">
      <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      <ul className="mt-4 space-y-3 leading-8 text-primary-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {note ? (
        <p className="mt-5 rounded-2xl bg-primary-50 px-4 py-3 text-sm font-medium text-primary-700">
          {note}
        </p>
      ) : null}
    </Card>
  );
}
