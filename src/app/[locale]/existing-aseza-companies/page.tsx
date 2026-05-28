import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/existing-aseza-companies",
    title: ar ? "خدمات الشركات المسجلة في ASEZA" : "Existing ASEZA Companies",
    description: ar
      ? "خدمات قانونية للشركات المسجلة في منطقة العقبة الاقتصادية الخاصة، مثل تعديل النشاط، التجديد، تغيير المفوضين، ومتطلبات ما بعد التسجيل."
      : "Legal support for existing ASEZA-registered companies, including amendments, renewals, authorized signatory changes, and post-registration obligations.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[
          { label: "الرئيسية", href: "/" },
          { label: "تسجيل شركة", href: "/register-business-in-aseza" },
          { label: "تعديل أو تجديد" },
        ]} />
      </div>

      <Section width="narrow">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          خدمات الشركات المسجلة في ASEZA
        </h1>
        <p className="mt-4 text-primary-500">
          تعتمد إمكانية التعديل أو الإضافة على وضع الشركة، النشاط، الوثائق، وموافقة الجهة المختصة.
        </p>
      </Section>

      {/* Section 1 */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          هل لديك شركة مسجلة بالفعل؟
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">
          إذا كانت شركتك مسجلة مسبقاً في منطقة العقبة الاقتصادية الخاصة،
          فأنت تحتاج خدمات مختلفة عن التأسيس الجديد. نساعدك في التعديلات،
          التجديد السنوي، ومتطلبات الامتثال المستمر.
        </p>
      </Section>

      {/* Sections 2-5: amendments grid */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">التعديلات المتاحة</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-primary">تعديل النشاط</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              إضافة نشاط أو تغيير النشاط القائم يستلزم تقديم طلب للمديرية المختصة
              مع مراجعة ما إذا كان النشاط الجديد مسموحاً أو مقيداً. نراجع الطلب معك
              ونحدد الوثائق والمسار المناسب.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary">إضافة نشاط</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              لإضافة نشاط اقتصادي جديد: نحدد أولاً هل النشاط مسموح أم يحتاج
              موافقة إضافية، ثم نجهّز الطلب والوثائق الداعمة ونتابعه مع الجهة المختصة.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary">تغيير المفوضين بالتوقيع</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              تغيير المفوض أو المفوضين بالتوقيع يستلزم تعديل عقد التأسيس أو
              بيانات الشركة المسجلة. نحدد الوثائق المطلوبة ونتولى الإجراءات بالوكالة.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary">تغيير العنوان أو البيانات</h3>
            <p className="mt-3 leading-relaxed text-primary-600">
              أي تغيير في عنوان المقر أو بيانات الشركة يجب الإبلاغ عنه للمديرية.
              نجهّز إشعار التعديل ونتابع تحديث السجلات الرسمية.
            </p>
          </Card>
        </div>
      </Section>

      {/* Section 6 — Annual renewal callout */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          التجديد السنوي — موعد مهم
        </h2>
        <div className="mt-5 max-w-3xl rounded-2xl border border-primary-100 border-s-4 border-s-primary bg-primary-50 p-6">
          <p className="font-semibold text-primary">⚠️ التجديد السنوي مطلوب للحفاظ على صفة «المؤسسة المسجلة» في ASEZA.</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-700">
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold text-accent">الموعد:</span>
              <span>يُجدَّد عادةً خلال الأشهر الأولى من السنة وفق متطلبات الجهة المختصة.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold text-accent">يشمل:</span>
              <span>الرسم السنوي + تأكيد استمرار النشاط + تحديث الوثائق إذا لزم.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold text-accent">تحذير:</span>
              <span>تأخير التجديد قد يعرّض شهادة التسجيل للتعليق أو الإلغاء.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm font-semibold text-primary">
            تواصل معنا قبل الموعد بشهر على الأقل.
          </p>
        </div>
      </Section>

      {/* Section 7 */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          متطلبات ما بعد التسجيل المستمرة
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-primary-600">المؤسسة المسجلة تلتزم باستمرار بـ:</p>
        <ul className="mt-4 max-w-3xl space-y-3 text-primary-600">
          {[
            "مسك حسابات أصولية وصحيحة",
            "وجود مقر دائم وعنوان مسجل في المنطقة",
            "الإقرارات الضريبية وفق الجدول الزمني المقرر",
            "تقديم كشوف التقدير الذاتي للدائرة",
            "إبلاغ الجهة المختصة عن أي تغييرات جوهرية",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Section 8 */}
      <Section width="wide">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-primary">الامتثال الضريبي والجمركي</h2>
            <p className="mt-3 leading-relaxed text-primary-600">
              الالتزامات الضريبية بعد التسجيل تشمل:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-primary-600">
              {[
                "تقديم الإقرارات الضريبية السنوية",
                "تسجيل ضريبة المبيعات إذا انطبق وفق النشاط وحجم المبيعات",
                "الامتثال لمتطلبات التوثيق الجمركي لكل شحنة",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-primary-500">
              نساعدك في تحديد ما ينطبق على حالتك والتأكد من الامتثال في الوقت المناسب.
            </p>
          </Card>

          <Card className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-primary-500">
              هل تحتاج تعديل أو تجديد؟ نساعدك في تحديد المتطلبات وتقديم الطلب.
            </p>
            <a
              href={whatsappLink("لدي شركة مسجلة في ASEZA وأحتاج تعديل أو تجديد.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
            >
              <MessageCircle className="size-5" aria-hidden />
              اطلب خدمة تعديل أو تجديد
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}
