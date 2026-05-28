import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/aseza-registration-fees",
    title: "رسوم تسجيل المؤسسة في ASEZA — ما تدفعه للدولة وما تدفعه لنا",
    description: "رسوم تسجيل شركة في منطقة العقبة الاقتصادية الخاصة: الرسوم الحكومية الرسمية وفق النظام، رسوم الخدمة القانونية، والفرق بين الاثنين. شفافية كاملة قبل البدء.",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "الرئيسية", url: `https://aseza.co/${locale}` },
    { name: "تسجيل شركة", url: `https://aseza.co/${locale}/register-business-in-aseza` },
    { name: "رسوم التسجيل في ASEZA", url: `https://aseza.co/${locale}/aseza-registration-fees` },
  ]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "تسجيل شركة", href: "/register-business-in-aseza" },
            { label: "رسوم التسجيل" },
          ]}
        />
      </div>

      <Section width="narrow">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          رسوم تسجيل الشركة في منطقة العقبة الاقتصادية الخاصة
        </h1>
        <p className="mt-4 text-primary-500">
          رقمان واضحان قبل البدء: ما تدفعه للدولة، وما تدفعه لنا — مفصولان ومفصّلان مسبقاً.
        </p>
      </Section>

      {/* Section 1 — Government fees */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">الرسوم الحكومية الرسمية</h2>
        <p className="mt-2 text-sm text-primary-500">
          المصدر: نظام تسجيل المؤسسات رقم 13 لسنة 2001
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-primary">رسم تسجيل المؤسسة</h3>
            <p className="mt-2 text-3xl font-bold text-accent">1,000 د.أ</p>
            <p className="mt-2 text-sm text-primary-600">رسم لمرة واحدة عند التسجيل الأول</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-primary">الرسم السنوي</h3>
            <p className="mt-2 text-3xl font-bold text-accent">500 د.أ</p>
            <p className="mt-2 text-sm text-primary-600">عن كل نشاط اقتصادي مسجّل — يُدفع سنوياً</p>
          </Card>
        </div>
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          ⚠ نوصي بالتحقق من الأرقام الحالية مع سلطة منطقة العقبة الاقتصادية الخاصة (ASEZA) مباشرة أو معنا قبل البدء — قد تُعدَّل الرسوم.
        </p>
      </Section>

      {/* Section 2 — Legal service fees */}
      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">رسوم الخدمة القانونية</h2>
        <div className="mt-6 max-w-3xl">
          <p className="leading-relaxed text-primary-600">
            أتعابنا منفصلة تماماً عن الرسوم الحكومية. نزودك بتقديرين مستقلين قبل البدء:
          </p>
          <ul className="mt-5 space-y-4 text-primary-600">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">①</span>
              <div>
                <p className="font-semibold text-primary">أتعاب الخدمة القانونية</p>
                <p className="mt-1 text-sm">ثابتة ومتفق عليها مسبقاً قبل بدء العمل.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">②</span>
              <div>
                <p className="font-semibold text-primary">الرسوم الحكومية</p>
                <p className="mt-1 text-sm">كما تحددها سلطة منطقة العقبة الاقتصادية الخاصة (ASEZA) — تُدفع مباشرة للجهة، لا لنا.</p>
              </div>
            </li>
          </ul>
          <p className="mt-5 text-lg font-semibold text-primary">لا مفاجآت في الفاتورة النهائية.</p>
        </div>
        <a
          href={whatsappLink("أريد معرفة رسوم تسجيل شركة في ASEZA")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
        >
          <MessageCircle className="size-5" aria-hidden />
          احصل على تقدير أتعابنا — واتساب
        </a>
      </Section>

      {/* Section 3 — Mini FAQ */}
      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">أسئلة شائعة عن الرسوم</h2>
        <div className="mt-6 max-w-3xl space-y-4">
          {[
            [
              "هل رسوم التسجيل مستردة إذا رُفض الطلب؟",
              "وفق النظام، الرسوم تُستوفى عند الموافقة. راجع معنا قبل الدفع لتفادي أي التباس.",
            ],
            [
              "هل هناك رسوم للتجديد السنوي؟",
              "نعم — 500 دينار أردني عن كل نشاط مسجّل سنوياً وفق نظام تسجيل المؤسسات رقم 13 لسنة 2001.",
            ],
            [
              "هل رسوم تسجيل الشركة لدى مراقب عام الشركات منفصلة؟",
              "نعم — رسوم تسجيل الكيان القانوني لدى مراقب عام الشركات مستقلة تماماً عن رسوم ASEZA، ونتولى كليهما ضمن باقة الخدمة.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl border border-primary-100 bg-white p-5">
              <h3 className="font-semibold text-primary">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-600">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
