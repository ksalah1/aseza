import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/why-aqaba",
    title: ar ? "لماذا الاستثمار في العقبة؟ | مزايا منطقة العقبة الاقتصادية الخاصة" : "Why Invest in Aqaba? | Aqaba Special Economic Zone",
    description: ar ? "تعرف على مزايا الاستثمار في العقبة، الموقع الاستراتيجي، الميناء والمطار، القطاعات المناسبة، والمزايا الضريبية والجمركية وفق الشروط القانونية." : "Explore Aqaba's strategic location, logistics infrastructure, suitable sectors, and legal tax/customs framework for investors.",
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
        <h1 className="text-4xl font-bold text-primary">لماذا الاستثمار في العقبة؟</h1>

        <h2 className="mt-10 text-2xl font-bold text-primary">الموقع الجغرافي: نقطة تقاطع ثلاث قارات</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-primary-600">
          العقبة هي المنفذ البحري الوحيد للأردن، وتقع على البحر الأحمر بين آسيا وأفريقيا وأوروبا عبر قناة السويس. تربطها شبكة طرق برية بالسوق السعودي والعراقي والمصري، مما يجعلها نقطة توزيع مثالية للشركات التي تستهدف أكثر من سوق في آنٍ واحد.
        </p>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary">الميناء والمطار: البنية اللوجستية جاهزة</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-primary-600">
          يتوفر في العقبة ميناء بحري يستقبل البضائع من مختلف الدول، ومطار دولي يربطها بعواصم إقليمية. هذا يجعلها خياراً مناسباً لشركات الاستيراد والتصدير، التخزين، وإعادة التصدير.
        </p>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">القطاعات الأكثر ملاءمة</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🏪", label: "التجارة والتوزيع" },
            { icon: "🚢", label: "الاستيراد والتصدير" },
            { icon: "🏭", label: "الخدمات اللوجستية والمستودعات" },
            { icon: "🏨", label: "السياحة والضيافة" },
            { icon: "🔧", label: "الصناعة الخفيفة والتغليف" },
            { icon: "💼", label: "الخدمات والشركات الإقليمية" },
          ].map((sector) => (
            <div key={sector.label} className="flex items-center gap-3 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
              <span className="text-2xl" aria-hidden>{sector.icon}</span>
              <span className="font-medium text-primary">{sector.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary">الإطار الضريبي والجمركي</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "5%", label: "ضريبة دخل محتملة على الدخل المؤهَّل داخل المنطقة" },
            { value: "100%", label: "ملكية أجنبية مسموحة في أغلب الأنشطة المدرجة" },
            { value: "12+", label: "اتفاقية تجارة حرة تتيح وصولاً لأسواق دولية رئيسية" },
            { value: "4–6 أيام", label: "الوقت المتوقع لإتمام إجراءات التسجيل" },
          ].map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-primary p-5 text-center">
              <span className="text-3xl font-bold text-accent">{stat.value}</span>
              <p className="mt-2 text-sm leading-snug text-background/80">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-primary-400">
          * تعتمد المزايا الضريبية والجمركية على النشاط ومصدر الدخل والشروط القانونية. استشر مختصاً قبل الاعتماد على أي رقم.
        </p>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">من يناسبه الاستثمار في العقبة؟</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            "المستثمر الأردني الذي يريد التوسع خارج عمّان",
            "الشركة الأجنبية التي تريد نقطة دخول للسوق الأردني والإقليمي",
            "مشغل لوجستي أو تجاري يبحث عن بيئة خاصة بقواعد مرنة",
          ].map((profile) => (
            <div key={profile} className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <p className="font-medium leading-relaxed text-primary">{profile}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 p-6 text-primary">
          <p>
            للانطلاق:{" "}
            <Link href="/register-business-in-aseza" className="underline">تسجيل شركة في ASEZA</Link>،{" "}
            <Link href="/tax-customs-aqaba" className="underline">الضرائب والجمارك في العقبة</Link>،{" "}
            <Link href="/import-export-company-aseza" className="underline">شركة استيراد وتصدير في العقبة</Link>،{" "}
            <Link href="/foreign-investors" className="underline">تأسيس شركة للمستثمر الأجنبي</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
