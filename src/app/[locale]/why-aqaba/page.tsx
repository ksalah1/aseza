import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

const whatsappMessage = "مرحباً، أفكر في تسجيل شركة في العقبة وأريد معرفة المسار المناسب. النشاط: ...";

const relatedLinks = [
  ["تسجيل شركة في ASEZA", "/register-business-in-aseza"],
  ["تأسيس شركة للمستثمر الأجنبي", "/foreign-investors"],
  ["شركة استيراد وتصدير في العقبة", "/import-export-company-aseza"],
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/why-aqaba",
    title: "لماذا العقبة؟ | تسجيل شركة في منطقة العقبة الاقتصادية الخاصة",
    description:
      "تعرف على مزايا تأسيس شركة في العقبة، خاصة لشركات الاستيراد والتصدير، اللوجستيات، الخدمات، والمستثمرين الأجانب الراغبين في التسجيل في ASEZA.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "لماذا العقبة" }]} />
      </div>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">تأسيس الأعمال في العقبة</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
              لماذا تختار العقبة لتسجيل شركتك؟
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-600">
              العقبة تجمع بين الميناء، الموقع اللوجستي، بيئة الأعمال الخاصة، وفرص التجارة الإقليمية. إذا كنت تفكر في تأسيس شركة للتجارة، الاستيراد، التصدير، اللوجستيات، أو الخدمات، يمكن أن تكون ASEZA نقطة انطلاق مناسبة.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register-business-in-aseza"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-colors hover:bg-primary-800"
              >
                ابدأ تسجيل شركتك في العقبة
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-primary/20 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                اختر الخدمة المناسبة
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-primary-100 bg-primary-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">قبل أن تبدأ</h2>
            <p className="mt-3 leading-relaxed text-primary-600">
              تبدأ المدة العملية بعد اكتمال الوثائق والبيانات. نساعدك على تحديد النشاط، شكل الشركة، ومتطلبات الملف قبل فتح مسار التسجيل.
            </p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              اسأل عن المسار المناسب
            </a>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">لماذا العقبة؟</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["🚢", "منفذ الأردن البحري", "موقع مناسب للشركات التي تعتمد على حركة البضائع والشحن."],
            ["🧭", "موقع لوجستي للتجارة الإقليمية", "نقطة ربط عملية بين الأردن وأسواق مجاورة وإقليمية."],
            ["📦", "بيئة مناسبة للاستيراد والتصدير", "مسارات أوضح للتجارة، التخزين، وإعادة التصدير عند تجهيز النشاط جيداً."],
            ["🌍", "فرص للشركات الأجنبية", "مدخل منظم للشركات التي تريد العمل من الأردن نحو السوق المحلي أو الإقليمي."],
            ["🏭", "خدمات ومناطق صناعية ولوجستية", "خيارات تشغيل للشركات التجارية والخدمية والصناعات الخفيفة."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
              <span className="text-3xl" aria-hidden>{icon}</span>
              <h3 className="mt-4 font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">من يناسبه الاستثمار في العقبة؟</h2>
            <ul className="mt-6 space-y-3 text-primary-600">
              {[
                "شركة استيراد وتصدير",
                "شركة لوجستية أو تخزين",
                "شركة أجنبية تريد دخول السوق الأردني أو الإقليمي",
                "مستثمر أردني يريد نشاطاً خارج عمّان",
                "شركة خدمات تعمل مع عملاء داخل وخارج الأردن",
                "مشروع صناعي خفيف أو تغليف أو توزيع",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">ما الذي يجب تحديده قبل التسجيل؟</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "النشاط",
                "شكل الشركة",
                "الشركاء",
                "نوع البضائع أو الخدمات",
                "الموقع أو العنوان",
                "هل يوجد نشاط أجنبي أو شركة أم خارج الأردن؟",
              ].map((item) => (
                <div key={item} className="rounded-xl bg-primary-50 p-4 font-medium text-primary">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">ابدأ من هنا</h2>
          <p className="mt-3 text-primary-600">اختر المسار الأقرب لوضعك، أو أرسل وصف النشاط وسنوضح لك الخطوة التالية.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["أريد تسجيل شركة جديدة", "/register-business-in-aseza"],
            ["أنا مستثمر أجنبي", "/foreign-investors"],
            ["أريد شركة استيراد وتصدير", "/import-export-company-aseza"],
            ["أريد معرفة الرسوم", "/aseza-registration-fees"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition-colors hover:border-accent hover:text-accent">
              {label} ←
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide" background="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">جاهز لتحديد مسار التسجيل؟</h2>
          <p className="mt-3 text-primary-100">أرسل النشاط، جنسية الشركاء، ونوع البضائع أو الخدمات، وسنساعدك على اختيار المسار الصحيح.</p>
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
