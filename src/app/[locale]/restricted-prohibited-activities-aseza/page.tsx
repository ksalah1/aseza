import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const whatsappMessage = `مرحباً، أريد معرفة مسار نشاط في ASEZA.
وصف النشاط ونموذج العمل:
نوع البضائع أو الخدمات:
هل الشركة جديدة أم قائمة؟`;

const relatedLinks = [
  ["مسار النشاط قبل التسجيل", "/services/activity-review"],
  ["تسجيل شركة في ASEZA", "/register-business-in-aseza"],
  ["شركة استيراد وتصدير في العقبة", "/import-export-company-aseza"],
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/restricted-prohibited-activities-aseza",
    title: "هل نشاطك مناسب للتسجيل في ASEZA؟ | تحديد مسار النشاط",
    description:
      "دليل عملي لتحديد مسار النشاط قبل تسجيل شركة في ASEZA، ومعرفة ما إذا كان النشاط مباشراً، يحتاج موافقة إضافية، أو يتطلب مساراً مختلفاً.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "مسار النشاط", href: "/services/activity-review" }, { label: "هل نشاطك مسموح؟" }]} />
      </div>

      <Section width="wide">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-accent">تحديد مسار النشاط قبل فتح الملف</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">هل نشاطك مسموح في ASEZA؟</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-primary-600">
            قبل تسجيل الشركة، يجب صياغة النشاط بطريقة واضحة ومعرفة هل هو نشاط مباشر، يحتاج موافقة إضافية، أو لا يناسب التسجيل في المنطقة. نساعدك على تحديد مسار النشاط قبل فتح الملف.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              راجع نشاطك قبل التسجيل
            </a>
            <Link href="/register-business-in-aseza" className="rounded-lg border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50">
              ابدأ تسجيل الشركة
            </Link>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">ثلاث حالات للنشاط</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["نشاط مباشر", "نشاط تجاري أو خدمي واضح يمكن عادة البدء بمراجعته ضمن مسار التسجيل."],
            ["نشاط يحتاج مساراً خاصاً أو موافقة", "نشاط مرتبط بالصحة، البيئة، الجمارك، الغذاء، النقل، الخدمات المهنية، أو أي قطاع منظم."],
            ["نشاط غير مناسب أو محظور", "نشاط لا يتم قبوله للتسجيل أو يحتاج مساراً مختلفاً بالكامل."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <p className="mt-3 leading-relaxed text-primary-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary">أمثلة على أنشطة تحتاج مساراً خاصاً</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "الأغذية والمكملات",
                "المستحضرات التجميلية",
                "الأجهزة أو المستلزمات الطبية",
                "المواد الكيميائية أو مواد التنظيف",
                "التخزين والمستودعات",
                "التخليص، الشحن، والنقل",
                "الخدمات المهنية",
                "الأنشطة المالية أو التأمينية",
                "السياحة والسفر",
                "الإنشاءات والهندسة",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-primary-100 bg-white p-4 text-primary-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <h2 className="text-2xl font-bold text-primary">لماذا لا تكفي عبارة “تجارة عامة”؟</h2>
            <p className="mt-4 leading-relaxed text-primary-600">
              وصف النشاط بشكل عام يسبب تأخيراً في تحديد المسار. الأفضل تحديد ما ستبيعه أو تخزنه أو تستورده أو تصدره، وهل النشاط تجارة فقط أم يشمل تخزيناً أو توزيعاً أو تصنيعاً أو خدمات لوجستية.
            </p>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">ماذا نحتاج منك لتحديد مسار النشاط؟</h2>
            <ul className="mt-6 space-y-3 text-primary-600">
              {[
                "وصف النشاط الفعلي",
                "نوع البضائع أو الخدمات",
                "هل يوجد استيراد أو تصدير؟",
                "هل يوجد تخزين؟",
                "هل يوجد تصنيع أو تغليف؟",
                "هل يوجد موقع في العقبة؟",
                "هل توجد شركة أجنبية أو شركاء أجانب؟",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">النتيجة</h2>
            <ul className="mt-6 space-y-3 text-primary-600">
              {[
                "صياغة أوضح للنشاط",
                "تحديد إن كان يحتاج مساراً إضافياً",
                "معرفة المسار الأقرب: تسجيل، ترخيص، شركة أجنبية، أو استيراد وتصدير",
                "تقليل احتمالات اختيار نشاط غير مناسب",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section width="wide" background="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">اعرف مسار النشاط</h2>
          <p className="mt-3 text-primary-100">نوضح لك إن كان النشاط مباشراً، يحتاج مساراً خاصاً، أو يحتاج مساراً مختلفاً.</p>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
          >
            <MessageCircle className="size-5" aria-hidden />
            تواصل عبر واتساب
          </a>
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">روابط مرتبطة</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedLinks.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition-colors hover:border-accent hover:text-accent">
              {label} ←
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
