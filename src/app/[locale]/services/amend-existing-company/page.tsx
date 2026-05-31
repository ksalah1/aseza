import type { ReactNode } from "react";
import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Card, Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const whatsappIntro = `مرحباً، أريد تعديل بيانات شركة مسجلة في ASEZA.
اسم الشركة:
نوع التعديل المطلوب:
البيانات الحالية:
البيانات الجديدة:
هل يوجد قرار شركاء أو تفويض؟
هل التعديل يؤثر على النشاط أو العنوان أو المفوضين؟`;

const amendmentTypes = [
  {
    type: "تعديل النشاط الاقتصادي",
    note: "هل النشاط الجديد مسموح، مقيد، أو يحتاج موافقة خاصة؟ وهل يؤثر على الترخيص أو شهادة مزاولة النشاط؟",
  },
  {
    type: "تعديل العنوان أو موقع النشاط",
    note: "هل الموقع الجديد داخل المنطقة؟ وهل يناسب طبيعة النشاط؟ وهل يحتاج تحديث رخصة أو موافقة؟",
  },
  {
    type: "تعديل المفوضين بالتوقيع",
    note: "هل يوجد قرار شركاء أو تفويض صحيح؟ وهل تتطابق البيانات مع السجل والوثائق الرسمية؟",
  },
  {
    type: "تعديل الشركاء أو الملكية",
    note: "هل يحتاج الإجراء تعديلاً لدى مراقب الشركات أو جهة أخرى قبل ASEZA؟",
  },
  {
    type: "تعديل الاسم أو الغايات",
    note: "هل يطابق الاسم أو الغايات الجديدة النشاط الفعلي والرخصة والموافقات المطلوبة؟",
  },
  {
    type: "تعديل بيانات فرع أو شركة أجنبية",
    note: "قد تحتاج وثائق مصدقة ومترجمة من الشركة الأم أو قراراً واضحاً من الجهة الأجنبية.",
  },
  {
    type: "تصحيح بيانات قديمة أو غير دقيقة",
    note: "يجب تحديد مصدر الخطأ والوثائق التي تثبت التصحيح المطلوب.",
  },
];

const forWho = [
  "شركة مسجلة حالياً لدى ASEZA وتحتاج تعديل بياناتها.",
  "شركة غيرت نشاطها أو تريد إضافة نشاط جديد.",
  "شركة غيرت عنوانها أو موقع ممارسة النشاط.",
  "شركة تريد تعديل المفوضين بالتوقيع.",
  "شركة تغيرت ملكيتها أو الشركاء فيها.",
  "شركة أجنبية أو فرع أجنبي يحتاج تحديث بيانات أو وثائق.",
  "شركة لديها اختلاف بين السجل، الرخصة، والممارسة الفعلية.",
];

const results = [
  "تحديد الإجراء الصحيح للتعديل.",
  "مراجعة أثر التعديل على الترخيص والموافقات.",
  "تجهيز قائمة الوثائق المطلوبة حسب نوع التعديل.",
  "صياغة أو مراجعة قرار الشركاء أو التفويض.",
  "توضيح ما إذا كان التعديل يحتاج إجراءً لدى جهة أخرى قبل ASEZA.",
  "متابعة التقديم حسب المسار المناسب.",
  "شرح ما يلزم بعد الموافقة.",
];

const beforeApply = [
  "اسم الشركة كما هو في السجل.",
  "رقم التسجيل إن وجد.",
  "نوع التعديل المطلوب.",
  "البيانات الحالية والبيانات الجديدة.",
  "سبب التعديل.",
  "هل التعديل يتعلق بالنشاط أو العنوان أو المفوضين أو الشركاء؟",
  "هل يوجد قرار شركاء أو تفويض؟",
  "هل توجد رخص أو شهادات مزاولة نشاط مرتبطة بالتعديل؟",
  "هل توجد وثائق أجنبية أو شركة أم أجنبية؟",
  "هل يوجد تجديد سنوي أو التزام معلق؟",
];

const documentGroups = [
  {
    title: "تعديل النشاط",
    items: [
      "شهادة التسجيل الحالية.",
      "وصف النشاط الجديد.",
      "قرار شركاء أو طلب تعديل حسب الحالة.",
      "أي موافقات قطاعية محتملة.",
    ],
  },
  {
    title: "تعديل العنوان",
    items: [
      "بيانات الموقع الجديد.",
      "عقد إيجار أو إثبات موقع إذا طلب.",
      "ما يثبت أن الموقع مناسب لطبيعة النشاط إذا لزم.",
    ],
  },
  {
    title: "تعديل المفوضين",
    items: [
      "قرار شركاء أو قرار هيئة مديرين.",
      "شهادة مفوضين محدثة إذا وجدت.",
      "هويات أو جوازات المفوضين عند الحاجة.",
      "تفويض أو وكالة إذا قدم الطلب بواسطة ممثل.",
    ],
  },
  {
    title: "تعديل الشركاء أو الملكية",
    items: [
      "وثائق نقل حصص أو قرارات الشركاء حسب الحالة.",
      "أي تعديل سابق لدى مراقب الشركات أو جهة مختصة إذا كان مطلوباً.",
    ],
  },
  {
    title: "شركة أجنبية أو فرع أجنبي",
    items: [
      "وثائق مصدقة ومترجمة من الشركة الأم عند الحاجة.",
      "قرار من الشركة الأم إذا كان التعديل يتطلب ذلك.",
      "وكالة قانونية أو تفويض للممثل.",
    ],
  },
];

const notSimple = [
  "إذا كان التعديل يضيف نشاطاً مقيداً أو يحتاج موافقة خاصة.",
  "إذا كان العنوان الجديد لا يناسب طبيعة النشاط.",
  "إذا كان التعديل يمس المفوضين بالتوقيع أو الملكية.",
  "إذا كانت الشركة أجنبية أو يوجد شركاء أجانب.",
  "إذا كانت الرخصة أو شهادة مزاولة النشاط تحتاج تحديثاً بعد تعديل السجل.",
  "إذا كان النشاط الجديد يحتاج موافقة بيئية أو صحية أو قطاعية.",
  "إذا كان هناك اختلاف بين السجل والرخصة والوضع الفعلي للشركة.",
  "إذا كان هناك تجديد سنوي أو التزام سابق غير مكتمل.",
];

const fees = [
  ["أتعاب الخدمة القانونية", "تحدد حسب نوع وعدد التعديلات ونطاق المتابعة."],
  ["الرسوم الرسمية", "يتم تأكيدها قبل الدفع وقد تختلف حسب نوع التعديل والجهة المختصة."],
  ["رسوم التصديق أو الترجمة", "قد تنطبق عند وجود وثائق أجنبية."],
  ["رسوم أو موافقات إضافية", "قد تظهر إذا كان التعديل يمس نشاطاً مقيداً أو يحتاج موافقة قطاعية."],
  ["رسوم مرتبطة بالتجديد أو الترخيص", "قد تنطبق إذا كان التعديل مرتبطاً بتحديث رخصة أو شهادة مزاولة."],
];

const steps = [
  "فهم نوع التعديل والبيانات الحالية.",
  "مراجعة أثر التعديل على السجل والرخصة والموافقات.",
  "تحديد الوثائق والقرارات أو التفويضات المطلوبة.",
  "تجهيز ملف التعديل والمتابعة حسب المسار المناسب.",
  "شرح ما يلزم بعد الموافقة أو تحديث السجل.",
];

const delayReasons = [
  "عدم تحديد نوع التعديل بدقة.",
  "وجود اختلاف بين السجل والرخصة والعنوان الفعلي.",
  "قرار شركاء غير واضح أو غير موقع حسب الأصول.",
  "عدم وضوح المفوض بالتوقيع.",
  "إضافة نشاط جديد دون مراجعة القيود أو الموافقات.",
  "نقص وثائق الشركة الأم للشركات الأجنبية.",
  "الحاجة إلى تعديل سابق لدى مراقب الشركات أو جهة أخرى.",
  "وجود التزامات أو تجديدات معلقة.",
  "عدم وضوح أثر التعديل على الترخيص أو شهادة مزاولة النشاط.",
  "وثائق أجنبية غير مصدقة أو غير مترجمة عند الحاجة.",
];

const after = [
  "تحديث شهادة التسجيل أو بيانات الشركة.",
  "تحديث شهادات مزاولة النشاط إذا لزم.",
  "مراجعة الرخص والموافقات المرتبطة بالنشاط.",
  "تحديث بيانات المفوضين لدى الجهات ذات العلاقة.",
  "مراجعة أثر التعديل على الضرائب والجمارك إن وجد.",
  "متابعة التجديد السنوي بناءً على البيانات الجديدة.",
  "حفظ نسخة من القرار أو شهادة التعديل لاستخدامها في المعاملات اللاحقة.",
];

const finalChecklist = [
  "اسم الشركة.",
  "نوع الشركة إن كان معروفاً.",
  "نوع التعديل المطلوب.",
  "ما هي البيانات الحالية؟",
  "ما هي البيانات الجديدة المطلوبة؟",
  "هل يوجد قرار شركاء أو تفويض؟",
  "هل التعديل يتعلق بالنشاط، العنوان، المفوضين، الشركاء، أو الاسم؟",
  "هل توجد رخصة أو شهادة مزاولة نشاط مرتبطة بالتعديل؟",
  "هل توجد وثائق أجنبية؟",
  "هل يوجد تجديد سنوي أو معاملة معلقة؟",
];

const relatedLinks = [
  ["تسجيل شركة لأول مرة", "/register-business-in-aseza"],
  ["مراجعة النشاط", "/services/activity-review"],
  ["شركة استيراد وتصدير", "/import-export-company-aseza"],
  ["قائمة الوثائق", "/documents-checklists"],
  ["رسوم التسجيل", "/aseza-registration-fees"],
  ["الضرائب والجمارك", "/tax-customs-aqaba"],
  ["هل نشاطك مسموح؟", "/restricted-prohibited-activities-aseza"],
  ["الترخيص والموافقات القطاعية", "/licensing-after-registration"],
  ["التجديد السنوي", "/annual-renewal-aseza"],
  ["تصاريح العمل والإقامة", "/labor-work-permits-aseza"],
  ["المراجع القانونية الرسمية", "/legal-references"],
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/services/amend-existing-company",
    title: "تعديل بيانات شركة مسجلة في ASEZA | تعديل نشاط أو مفوضين أو عنوان",
    description:
      "خدمة قانونية خاصة لمراجعة وتعديل بيانات شركة مسجلة في منطقة العقبة الاقتصادية الخاصة، بما يشمل النشاط، العنوان، المفوضين، الشركاء، والوثائق المطلوبة حسب الحالة.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "خدماتنا", href: "/services" },
            { label: "تعديل الشركة" },
          ]}
        />
      </div>

      <Section width="wide" className="pt-12 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">خدمة قانونية خاصة للشركات القائمة</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">
              تعديل بيانات شركة مسجلة في ASEZA
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              نساعدك في مراجعة نوع التعديل المطلوب، تجهيز قرارات الشركاء أو التفويضات، وتحديد أثر التعديل على السجل، النشاط، الترخيص، والموافقات اللاحقة.
            </p>
            <p className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-primary-700">
              لا ترسل وثائق حساسة في البداية. ابدأ بوصف التعديل المطلوب واسم نوع الشركة فقط.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("أرغب في إرسال نوع تعديل بيانات شركة مسجلة في ASEZA للمراجعة.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1FA855]"
              >
                <MessageCircle className="size-5" aria-hidden />
                أرسل نوع التعديل للمراجعة
              </a>
              <a
                href="#amendment-types"
                className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                ما نوع التعديل الذي تحتاجه؟
              </a>
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <h2 className="text-xl font-semibold">مهم عند تغيير بيانات الشركة</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-100">
              <li>• إذا تغيّر نشاط الشركة أو المفوضون بالتوقيع أو العنوان أو أي بيانات مسجلة، فقد يلزم تحديث السجل خلال المدة القانونية.</li>
              <li>• عدم تحديث البيانات قد يسبب مشاكل عند التجديد أو الترخيص أو التعامل مع الجهات الرسمية.</li>
              <li>• بعض التعديلات لا تقتصر على السجل فقط، وقد تؤثر على شهادة مزاولة النشاط أو الموافقات القطاعية أو المتطلبات الضريبية والجمركية.</li>
              <li>• لا ترسل وثائق حساسة في البداية؛ يكفي وصف نوع التعديل المطلوب.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="amendment-types" width="wide" background="muted" className="py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">ما نوع التعديل الذي تحتاجه؟</h2>
          <p className="mt-3 text-primary-600">
            تحديد نوع التعديل بدقة يساعد على معرفة الوثائق المطلوبة، وما إذا كان الإجراء يؤثر على النشاط، الرخصة، المفوضين، أو موافقات أخرى.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {amendmentTypes.map((item) => (
            <Card key={item.type} hoverable>
              <p className="text-xs font-semibold text-accent">نوع التعديل</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">{item.type}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-600">
                <span className="font-semibold text-primary">ما يجب الانتباه له: </span>
                {item.note}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard title="من يمكنه الاستفادة من هذه الخدمة؟" items={forWho} />
          <InfoCard title="ما نتيجة الخدمة؟" items={results}>
            <p className="mt-4 rounded-xl bg-primary-50 p-3 text-sm text-primary-600">
              النتيجة لا تعني ضمان الموافقة، وإنما تنظيم الملف وتقليل الأخطاء قبل التقديم.
            </p>
          </InfoCard>
          <InfoCard title="ماذا تجهز قبل التقديم؟" items={beforeApply} className="lg:col-span-2" columns />
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">الوثائق المطلوبة</h2>
            <p className="mt-3 max-w-3xl text-primary-600">
              تختلف الوثائق حسب نوع الشركة ونوع التعديل. الأمثلة التالية تساعدك على تجهيز وصف أولي قبل إرسال أي وثائق.
            </p>
          </div>
          <a
            href={whatsappLink("أحتاج مراجعة وثائق تعديل بيانات شركة مسجلة في ASEZA.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
          >
            <MessageCircle className="size-4" aria-hidden />
            اسأل عن الوثائق المطلوبة
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documentGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-primary-600">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-primary-100 bg-white p-4 text-sm text-primary-600">
          الوثائق النهائية تختلف حسب نوع الشركة، نوع التعديل، وهل يحتاج التعديل إجراءً لدى جهة أخرى قبل ASEZA.
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard title="متى لا يكون التعديل بسيطاً؟" items={notSimple} />
          <Card>
            <h2 className="text-xl font-semibold text-primary">الرسوم والأتعاب</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-primary-600">
              {fees.map(([label, text]) => (
                <p key={label}>
                  <span className="font-semibold text-primary">{label}: </span>
                  {text}
                </p>
              ))}
            </div>
            <p className="mt-4 rounded-xl bg-primary-50 p-3 text-sm text-primary-600">
              لا يتم طلب دفع أي رسوم رسمية قبل توضيح سببها والجهة المستفيدة منها.
            </p>
          </Card>
          <Card className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-primary">خطوات الخدمة</h2>
            <ol className="mt-5 grid gap-4 md:grid-cols-5">
              {steps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-primary-100 bg-primary-50 p-4 text-sm leading-7 text-primary-600">
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-background">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-primary">المدة المتوقعة</h2>
            <p className="mt-3 leading-8 text-primary-600">
              تبدأ المدة العملية بعد اكتمال الوثائق والقرارات المطلوبة. تكون بعض التعديلات مباشرة، مثل تحديث بيانات بسيطة، بينما قد تستغرق تعديلات النشاط أو المفوضين أو العنوان وقتاً أطول إذا احتاجت موافقات إضافية أو أثّرت على الترخيص. لا نضمن مدة محددة لأن القرار النهائي لدى الجهة المختصة.
            </p>
          </Card>
          <InfoCard
            title="طريقة التقديم والاستلام"
            items={[
              "قد يتم تجهيز الملف ومراجعته عن بُعد.",
              "قد يتطلب التعديل توقيعاً، قرار شركاء، وكالة، تفويضاً، أو وثائق أصلية.",
              "طريقة التقديم تعتمد على نوع التعديل والإجراء المتاح لدى الجهة المختصة.",
            ]}
          />
          <Card>
            <h2 className="text-xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2>
            <p className="mt-3 leading-8 text-primary-600">
              قد تتم بعض الخطوات إلكترونياً حيث ينطبق ذلك، لكن بعض تعديلات الشركات قد تتطلب قرار شركاء، تفويضاً، وكالة، توقيعاً، أو وثائق أصلية حسب نوع التعديل.
            </p>
          </Card>
          <InfoCard title="أسباب شائعة للتأخير أو الرفض" items={delayReasons} />
          <InfoCard title="ماذا يحدث بعد ذلك؟" items={after} columns className="lg:col-span-2" />
        </div>
      </Section>

      <Section width="wide" background="muted" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Card accent>
            <h2 className="text-2xl font-semibold text-primary">قبل التواصل، أرسل لنا هذه المعلومات</h2>
            <ul className="mt-5 grid gap-2 text-sm leading-7 text-primary-600 md:grid-cols-2">
              {finalChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-primary-50 p-3 text-sm text-primary-600">
              لا ترسل وثائق حساسة في أول رسالة. يكفي وصف مختصر حتى نحدد الخطوة الأقرب.
            </p>
          </Card>

          <Card className="flex flex-col">
            <h2 className="text-2xl font-semibold text-primary">نموذج رسالة واتساب</h2>
            <pre className="mt-4 flex-1 whitespace-pre-wrap rounded-2xl border border-primary-100 bg-primary-50 p-4 text-sm leading-7 text-primary-700">
              {whatsappIntro}
            </pre>
            <a
              href={whatsappLink(whatsappIntro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
            >
              <MessageCircle className="size-5" aria-hidden />
              أرسل نوع التعديل على واتساب
            </a>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card accent>
            <h2 className="text-2xl font-semibold text-primary">غير متأكد إن كانت هذه الخدمة مناسبة لحالتك؟</h2>
            <p className="mt-3 leading-8 text-primary-600">
              إذا لم تكن متأكداً هل تحتاج تعديل سجل، تجديد، ترخيص جديد، أو مراجعة نشاط، أرسل وصفاً مختصراً للتغيير الذي حدث في الشركة وسنساعدك على تحديد الخدمة الأقرب.
            </p>
            <a
              href={whatsappLink("لست متأكداً من الخدمة المناسبة. حدث تغيير في بيانات الشركة وأحتاج توجيهاً أولياً.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1FA855]"
            >
              <MessageCircle className="size-5" aria-hidden />
              تواصل معنا عبر واتساب
            </a>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-primary">روابط قد تساعدك</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-medium text-primary-700 transition-colors hover:border-accent/50 hover:bg-accent/10"
                >
                  {label}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

function InfoCard({
  title,
  items,
  children,
  columns = false,
  className,
}: {
  title: string;
  items: string[];
  children?: ReactNode;
  columns?: boolean;
  className?: string;
}) {
  return (
    <Card className={className}>
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <ul className={`mt-3 space-y-2 text-sm leading-7 text-primary-600 ${columns ? "md:columns-2 md:gap-8" : ""}`}>
        {items.map((item) => (
          <li key={item} className="break-inside-avoid">
            • {item}
          </li>
        ))}
      </ul>
      {children}
    </Card>
  );
}
