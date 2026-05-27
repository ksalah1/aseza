import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export type ServicePageContent = {
  title: string;
  description: string;
  forWho: string[];
  result: string[];
  beforeApply: string[];
  documents: string[];
  fees: { legal: string; gov: string; cert: string; extra: string };
  steps: string[];
  expectedTime: string;
  delivery: string[];
  online: string;
  mistakes: string[];
  after: string[];
};

const checklist = [
  "وصف واضح للنشاط",
  "هل الشركة جديدة أم قائمة؟",
  "أسماء الشركاء أو المالكين",
  "جنسية الشركاء",
  "المفوضون بالتوقيع",
  "هل يوجد مقر أو موقع في العقبة؟",
  "هل النشاط يتضمن بضائع أو مواد خاصة؟",
  "هل النشاط يحتاج موافقة قطاعية؟",
  "هل توجد وثائق أجنبية تحتاج تصديقاً أو ترجمة؟",
];

export function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  return (
    <>
      <Section width="narrow">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">{content.title}</h1>
        <p className="mt-4 text-primary-600">{content.description}</p>
        <p className="mt-3 text-sm text-primary-500">ابدأ بوصف النشاط فقط، ولا ترسل وثائق حساسة في البداية. سنخبرك إذا احتجنا وثائق إضافية.</p>
      </Section>

      <Section width="wide" background="muted" className="py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <Block title="من يمكنه الاستفادة من هذه الخدمة؟" items={content.forWho} />
          <Block title="ما نتيجة الخدمة؟" items={content.result} />
          <Block title="ماذا تجهز قبل التقديم؟" items={content.beforeApply} />
          <Block title="الوثائق المطلوبة" items={content.documents} />
          <Card><h2 className="text-xl font-semibold text-primary">الرسوم والأتعاب</h2><ul className="mt-3 space-y-2 text-primary-600 text-sm"><li><b>أتعاب الخدمة القانونية:</b> {content.fees.legal}</li><li><b>الرسوم الحكومية:</b> {content.fees.gov}</li><li><b>رسوم التصديق أو الترجمة:</b> {content.fees.cert}</li><li><b>رسوم أو موافقات إضافية حسب النشاط:</b> {content.fees.extra}</li></ul><p className="mt-3 text-xs text-primary-500">الرسوم الرسمية قد تتغير ويجب تأكيدها قبل الدفع.</p></Card>
          <Block title="خطوات الخدمة" items={content.steps} ordered />
          <Card><h2 className="text-xl font-semibold text-primary">المدة المتوقعة</h2><p className="mt-3 text-primary-600">{content.expectedTime}</p><p className="mt-2 text-sm text-primary-500">قد تزيد المدة عند وجود نشاط مقيد أو نقص في الوثائق أو موافقات إضافية.</p></Card>
          <Block title="طريقة التقديم والاستلام" items={content.delivery} />
          <Card><h2 className="text-xl font-semibold text-primary">هل يمكن إنجازها إلكترونياً؟</h2><p className="mt-3 text-primary-600">{content.online}</p><p className="mt-2 text-sm text-primary-500">بعض الخطوات قد تتم إلكترونياً، وبعضها قد يحتاج توقيعاً أو وكالة.</p></Card>
          <Block title="أسباب شائعة للتأخير أو الرفض" items={content.mistakes} />
          <Block title="ماذا يحدث بعد ذلك؟" items={content.after} />
        </div>
      </Section>

      <Section width="default">
        <Card>
          <h2 className="text-2xl font-semibold text-primary">قبل أن تبدأ، حضّر هذه المعلومات</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2 text-primary-600">{checklist.map((i)=><li key={i}>• {i}</li>)}</ul>
          <a href={whatsappLink("أرغب في إرسال وصف نشاطي للمراجعة.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-accent font-semibold"><MessageCircle className="size-4" aria-hidden />أرسل وصف نشاطك للمراجعة</a>
        </Card>
      </Section>

      <Section width="default" background="muted">
        <Card accent>
          <h2 className="text-2xl font-semibold text-primary">غير متأكد إن كانت هذه الخدمة مناسبة لحالتك؟</h2>
          <p className="mt-3 text-primary-600">أرسل وصفاً مختصراً للنشاط أو وضع الشركة، وسنساعدك على تحديد الخدمة الأقرب وما يجب تحضيره قبل التقديم.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white"><MessageCircle className="size-4" aria-hidden />تواصل معنا عبر واتساب</a>
          </div>
        </Card>
      </Section>
    </>
  );
}

function Block({ title, items, ordered }: { title: string; items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return <Card><h2 className="text-xl font-semibold text-primary">{title}</h2><Tag className="mt-3 space-y-2 text-primary-600 text-sm">{items.map((item)=><li key={item}>{ordered ? "" : "• "}{item}</li>)}</Tag></Card>;
}
