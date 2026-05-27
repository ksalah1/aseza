import { useLocale } from "next-intl";
import { ExternalLink, MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";

const officialReferences = [
  {
    title: "قانون منطقة العقبة الاقتصادية الخاصة رقم 32 لسنة 2000 وتعديلاته",
    description:
      "الإطار القانوني العام للمنطقة، صلاحيات السلطة، التسجيل، الجمارك، الضرائب، والأنشطة الاقتصادية.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "نظام تسجيل المؤسسات في منطقة العقبة الاقتصادية الخاصة رقم 13 لسنة 2001 وتعديلاته",
    description:
      "الأهلية للتسجيل، الأنشطة المحظورة والمقيدة، إجراءات التسجيل، الالتزامات، والتجديدات.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "نظام ضريبة الدخل في منطقة العقبة الاقتصادية الخاصة رقم 53 لسنة 2005 وتعديلاته",
    description: "قواعد احتساب دخل المؤسسة المسجلة، مصادر الدخل، والاستثناءات.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "نظام ضريبة مبيعات السلع والخدمات في منطقة العقبة الاقتصادية الخاصة رقم 54 لسنة 2005 وتعديلاته",
    description: "قواعد ضريبة مبيعات السلع والخدمات والضريبة الخاصة داخل المنطقة.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "بوابة الخدمات الإلكترونية الرسمية",
    description: "المرجع العملي للخدمات والإجراءات الإلكترونية والتحديثات الرسمية.",
    url: siteConfig.officialAsezaUrl,
  },
];

export function TrustAndTransparency() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const trustCards = isAr
    ? [
        ["محامية أردنية مرخّصة", "تتم مراجعة الملف من خلال محامية مرخّصة وعضو في نقابة المحامين الأردنيين، مع خبرة في ملفات الشركات والاستشارات التجارية."],
        ["مراجعة النشاط قبل التقديم", "لا نبدأ الطلب قبل فهم النشاط، الوثائق، والقيود المحتملة، حتى لا يدخل المستثمر في مسار خاطئ."],
        ["أتعاب واضحة من البداية", "نوضح أتعاب الخدمة وما هو مشمول وغير مشمول قبل البدء، مع فصل الرسوم الحكومية عن أتعابنا."],
        ["مراجع رسمية واضحة", "نوفر روابط للقوانين والأنظمة والبوابات الرسمية حتى يستطيع المستثمر مراجعة المصدر الرسمي بنفسه."],
        ["لا نعد بما لا نملك", "الموافقة النهائية تبقى للجهات المختصة، ونوضح حدود دورنا بوضوح قبل تقديم الطلب."],
        ["مناسب للمستثمر المحلي والأجنبي", "نساعد في فهم الوثائق، التفويضات، الترجمة، التصديقات، ومتطلبات ما بعد التسجيل حسب الحالة."],
      ]
    : [
        ["Why investors trust us", "We help investors approach registration with clarity, realistic expectations, and legally careful guidance."],
      ];

  return <>
    <Section width="wide" background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{isAr ? "لماذا يثق المستثمرون بنا؟" : "Why investors trust us"}</h2>
        <p className="mt-4 text-lg text-primary-500">{isAr ? "نساعدك على دخول إجراءات التسجيل بوضوح، دون وعود غير مضمونة أو معلومات مبالغ فيها." : "We help investors approach registration with clarity, realistic expectations, and legally careful guidance."}</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trustCards.map(([title, text]) => <Card key={title}><h3 className="text-lg font-semibold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-primary-600">{text}</p></Card>)}
      </div>
      <div className="mt-8 text-center"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-background">{isAr ? "افحص نشاطك قبل التسجيل" : "Review your activity before registration"}</a></div>
    </Section>

    <Section width="wide">
      <Card>
        <h3 className="text-2xl font-bold text-primary">{isAr ? "من يراجع ملفك؟" : "Who reviews your file?"}</h3>
        <ul className="mt-4 space-y-2 text-primary-700">
          <li>المحامية نور بركات</li><li>عضو نقابة المحامين الأردنيين</li><li>رقم العضوية: 16872</li><li>شركة البركات للمحاماة</li><li>خدمة قانونية خاصة وليست جهة حكومية</li>
        </ul>
        <p className="mt-4 text-primary-600">يتم التعامل مع ملفك كملف قانوني وتجاري، وليس كمجرد تعبئة نموذج. نراجع النشاط والوثائق ونوضح المخاطر أو النواقص قبل التقديم قدر الإمكان.</p>
      </Card>
    </Section>

    <Section width="wide" background="muted"><div className="grid gap-6 lg:grid-cols-2"><Card><h3 className="text-xl font-bold text-primary">ما نساعدك به</h3><ul className="mt-4 space-y-2 text-primary-600">{["مراجعة النشاط قبل التقديم","تجهيز ومراجعة الوثائق","توضيح الرسوم والمتطلبات المتوقعة","تقديم الطلب أو المتابعة حسب التفويض","متابعة الملاحظات والنواقص","شرح متطلبات ما بعد التسجيل"].map(i=><li key={i}>• {i}</li>)}</ul></Card><Card><h3 className="text-xl font-bold text-primary">ما يبقى بقرار الجهة المختصة</h3><ul className="mt-4 space-y-2 text-primary-600">{["قبول أو رفض النشاط","طلب وثائق إضافية","تحديد الموافقات أو الشهادات المطلوبة","تحديد الرسوم الحكومية النهائية","الموافقة على التسجيل أو الترخيص","مدة إنجاز المعاملة في الحالات غير المباشرة"].map(i=><li key={i}>• {i}</li>)}</ul></Card></div><p className="mt-5 text-center text-sm text-primary-500">هذا الفصل بين دورنا ودور الجهة المختصة يحمي المستثمر من التوقعات غير الواقعية.</p></Section>

    <Section width="wide"><Card><h2 className="text-2xl font-bold text-primary">المستندات والمراجع الرسمية</h2><p className="mt-3 text-primary-500">لأن قرارات التسجيل والضرائب والجمارك تعتمد على التشريعات والتعليمات الرسمية، وفرنا لك أهم المراجع التي يجب الرجوع إليها قبل اتخاذ القرار.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{officialReferences.map(ref=><div key={ref.title} className="rounded-xl border border-primary-100 p-4"><h3 className="font-semibold text-primary">{ref.title}</h3><p className="mt-2 text-sm text-primary-600">{ref.description}</p><a href={ref.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-700">عرض المرجع الرسمي <ExternalLink className="size-4"/></a></div>)}</div></Card></Section>

    <Section width="wide" background="muted"><div className="grid gap-4 md:grid-cols-2">{[["شركة استيراد وتصدير","مراجعة النشاط، نوع البضائع، الوثائق، والمعاملة الجمركية أو الضريبية المحتملة حسب الحالة."],["فرع شركة أجنبية","مراجعة وثائق الشركة الأم، التصديقات، الترجمة، الوكالة، والشكل القانوني المناسب."],["نشاط صناعي أو لوجستي","مراجعة الحاجة إلى موقع، موافقات بيئية، سلامة عامة، صحة عامة، أو كشف قبل التشغيل."],["شركة مسجلة تحتاج تعديلاً","مراجعة إضافة نشاط، تغيير مفوضين، تعديل عنوان، أو تجديد التسجيل حسب وضع الشركة."]].map(([title,text])=><Card key={title}><p className="text-xs text-primary-500">أمثلة شائعة</p><h3 className="mt-1 text-lg font-semibold text-primary">{title}</h3><p className="mt-2 text-primary-600">{text}</p></Card>)}</div><div className="mt-6 text-center"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white"><MessageCircle className="size-5"/>اسأل عن حالتك عبر واتساب</a></div></Section>

    <Section width="wide"><Card><h3 className="text-2xl font-bold text-primary">كيف نقلل عليك تعقيد الإجراءات؟</h3><ul className="mt-4 grid gap-2 md:grid-cols-2 text-primary-600">{["نراجع النشاط قبل تقديم الطلب","نحدد الوثائق المطلوبة حسب نوع الشركة","نوضح الفرق بين التسجيل والترخيص","نخبرك بما قد يسبب تأخيراً قبل البدء","نتابع الملاحظات والنواقص ضمن نطاق التفويض","نشرح ما يجب فعله بعد صدور شهادة التسجيل"].map(i=><li key={i}>• {i}</li>)}</ul><p className="mt-4 text-primary-500">هدفنا ليس فقط تقديم الطلب، بل مساعدتك على فهم الطريق وتجنب الأخطاء الشائعة.</p></Card></Section>

    <Section width="narrow" background="muted"><Card className="text-center"><h3 className="text-2xl font-bold text-primary">{isAr?"للمستثمرين من خارج الأردن":"For international investors"}</h3><p className="mt-4 text-primary-600">{isAr?"إذا كنت خارج الأردن، نساعدك على فهم الوثائق المطلوبة، الترجمة، التصديقات، الوكالات، وإمكانية بدء بعض الخطوات عن بُعد حسب الحالة. لا نعدك بإجراء واحد يناسب الجميع، بل نراجع وضعك قبل تحديد المسار.":"If you are outside Jordan, we help you understand required documents, legalization, powers of attorney, translation, and whether parts of the process can begin remotely depending on your case."}</p><div className="mt-6"><Link href="/aseza-registration-checklist" className="underline text-primary">{isAr?"قائمة الوثائق الأولية":"Registration checklist"}</Link></div><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-background">{isAr?"ابدأ مراجعة نشاطك من خارج الأردن":"Start Your Activity Review"}</a></Card></Section>
  </>;
}
