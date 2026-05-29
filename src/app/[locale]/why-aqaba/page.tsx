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
  const isAr = locale === "ar";

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "لماذا العقبة" : "Why Aqaba" },
        ]} />
      </div>
      <Section width="wide">
        <h1 className="text-4xl font-bold text-primary">
          {isAr ? "لماذا الاستثمار في العقبة؟" : "Why Invest in Aqaba?"}
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-primary">
          {isAr ? "الموقع الجغرافي: نقطة تقاطع ثلاث قارات" : "Geography: A crossroads of three continents"}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-primary-600">
          {isAr
            ? "العقبة هي المنفذ البحري الوحيد للأردن، وتقع على البحر الأحمر بين آسيا وأفريقيا وأوروبا عبر قناة السويس. تربطها شبكة طرق برية بالسوق السعودي والعراقي والمصري، مما يجعلها نقطة توزيع مثالية للشركات التي تستهدف أكثر من سوق في آنٍ واحد."
            : "Aqaba is Jordan's only sea outlet, located on the Red Sea between Asia, Africa, and Europe via the Suez Canal. Road networks connect it to the Saudi, Iraqi, and Egyptian markets, making it an ideal distribution hub for companies targeting more than one market at once."}
        </p>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary">
          {isAr ? "الميناء والمطار: البنية اللوجستية جاهزة" : "Port & Airport: Ready logistics infrastructure"}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-primary-600">
          {isAr
            ? "يتوفر في العقبة ميناء بحري يستقبل البضائع من مختلف الدول، ومطار دولي يربطها بعواصم إقليمية. هذا يجعلها خياراً مناسباً لشركات الاستيراد والتصدير، التخزين، وإعادة التصدير."
            : "Aqaba has a seaport receiving goods from across the world and an international airport connecting it to regional capitals. This makes it a strong option for import/export, storage, and re-export businesses."}
        </p>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">
          {isAr ? "القطاعات الأكثر ملاءمة" : "Most suitable sectors"}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(isAr
            ? [
                { icon: "🏪", label: "التجارة والتوزيع" },
                { icon: "🚢", label: "الاستيراد والتصدير" },
                { icon: "🏭", label: "الخدمات اللوجستية والمستودعات" },
                { icon: "🏨", label: "السياحة والضيافة" },
                { icon: "🔧", label: "الصناعة الخفيفة والتغليف" },
                { icon: "💼", label: "الخدمات والشركات الإقليمية" },
              ]
            : [
                { icon: "🏪", label: "Trade & Distribution" },
                { icon: "🚢", label: "Import & Export" },
                { icon: "🏭", label: "Logistics & Warehousing" },
                { icon: "🏨", label: "Tourism & Hospitality" },
                { icon: "🔧", label: "Light Industry & Packaging" },
                { icon: "💼", label: "Services & Regional Companies" },
              ]
          ).map((sector) => (
            <div key={sector.label} className="flex items-center gap-3 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
              <span className="text-2xl" aria-hidden>{sector.icon}</span>
              <span className="font-medium text-primary">{sector.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary">
          {isAr ? "الإطار الضريبي والجمركي" : "Tax & Customs Framework"}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(isAr
            ? [
                { value: "5%", label: "ضريبة دخل محتملة على الدخل المؤهَّل داخل المنطقة" },
                { value: "100%", label: "ملكية أجنبية مسموحة في أغلب الأنشطة المدرجة" },
                { value: "12+", label: "اتفاقية تجارة حرة تتيح وصولاً لأسواق دولية رئيسية" },
                { value: "4–6 أيام", label: "الوقت المتوقع لإتمام إجراءات التسجيل" },
              ]
            : [
                { value: "5%", label: "Potential income tax on qualifying income inside the zone" },
                { value: "100%", label: "Foreign ownership permitted in most listed activities" },
                { value: "12+", label: "Free trade agreements providing access to major international markets" },
                { value: "4–6 days", label: "Expected time to complete registration procedures" },
              ]
          ).map((stat) => (
            <div key={stat.value} className="rounded-2xl bg-primary p-5 text-center">
              <span className="text-3xl font-bold text-accent">{stat.value}</span>
              <p className="mt-2 text-sm leading-snug text-background/80">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-primary-400">
          {isAr
            ? "* تعتمد المزايا الضريبية والجمركية على النشاط ومصدر الدخل والشروط القانونية. استشر مختصاً قبل الاعتماد على أي رقم."
            : "* Tax and customs advantages depend on activity, income source, and legal conditions. Consult a specialist before relying on any figure."}
        </p>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">
          {isAr ? "من يناسبه الاستثمار في العقبة؟" : "Who is Aqaba suitable for?"}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {(isAr
            ? [
                "المستثمر الأردني الذي يريد التوسع خارج عمّان",
                "الشركة الأجنبية التي تريد نقطة دخول للسوق الأردني والإقليمي",
                "مشغل لوجستي أو تجاري يبحث عن بيئة خاصة بقواعد مرنة",
              ]
            : [
                "The Jordanian investor looking to expand beyond Amman",
                "The foreign company seeking an entry point to the Jordanian and regional market",
                "A logistics or trading operator seeking a special-zone environment with flexible rules",
              ]
          ).map((profile) => (
            <div key={profile} className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <p className="font-medium leading-relaxed text-primary">{profile}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 p-6 text-primary">
          {isAr ? (
            <p>
              للانطلاق:{" "}
              <Link href="/register-business-in-aseza" className="underline">تسجيل شركة في ASEZA</Link>،{" "}
              <Link href="/tax-customs-aqaba" className="underline">الضرائب والجمارك في العقبة</Link>،{" "}
              <Link href="/import-export-company-aseza" className="underline">شركة استيراد وتصدير في العقبة</Link>،{" "}
              <Link href="/foreign-investors" className="underline">تأسيس شركة للمستثمر الأجنبي</Link>.
            </p>
          ) : (
            <p>
              To get started:{" "}
              <Link href="/register-business-in-aseza" className="underline">Register a Business in ASEZA</Link>,{" "}
              <Link href="/tax-customs-aqaba" className="underline">Tax & Customs in Aqaba</Link>,{" "}
              <Link href="/import-export-company-aseza" className="underline">Import/Export Company in Aqaba</Link>,{" "}
              <Link href="/foreign-investors" className="underline">Company Formation for Foreign Investors</Link>.
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
