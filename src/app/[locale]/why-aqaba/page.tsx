import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
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
  return (<Section width="wide"><h1 className="text-4xl font-bold text-primary">لماذا الاستثمار في العقبة؟</h1><h2 className="mt-8 text-2xl font-bold text-primary">موقع استراتيجي على البحر الأحمر</h2><p className="mt-2 text-primary-600">العقبة بوابة لأسواق إقليمية عبر الميناء البحري والارتباطات البرية والجوية.</p><h2 className="mt-8 text-2xl font-bold text-primary">ميناء ومطار وبنية لوجستية</h2><p className="mt-2 text-primary-600">وجود بنية لوجستية متكاملة يدعم أنشطة التجارة، التخزين، وإعادة التصدير وفق متطلبات كل نشاط.</p><h2 className="mt-8 text-2xl font-bold text-primary">قطاعات مناسبة للاستثمار</h2><p className="mt-2 text-primary-600">منها الاستيراد والتصدير، الخدمات اللوجستية، السياحة، وبعض الأنشطة الصناعية والخدمية.</p><h2 className="mt-8 text-2xl font-bold text-primary">مزايا ضريبية وجمركية وفق الشروط</h2><p className="mt-2 text-primary-600">قد تتوفر معاملات خاصة لبعض الأنشطة، لكن التطبيق يختلف حسب النشاط ومصدر الدخل وحركة البضائع.</p><h2 className="mt-8 text-2xl font-bold text-primary">العقبة مقارنة بعمّان أو المناطق الحرة</h2><p className="mt-2 text-primary-600">المقارنة القانونية تعتمد على نموذج العمل، السوق المستهدف، والالتزامات التنظيمية بعد التسجيل.</p><div className="mt-10 rounded-xl border border-primary-100 bg-primary-50 p-6 text-primary"><p>للانطلاق: <Link href="/register-business-in-aseza" className="underline">تسجيل شركة في ASEZA</Link>، <Link href="/tax-customs-aqaba" className="underline">الضرائب والجمارك في العقبة</Link>، <Link href="/import-export-company-aseza" className="underline">شركة استيراد وتصدير في العقبة</Link>، <Link href="/foreign-investors" className="underline">تأسيس شركة للمستثمر الأجنبي</Link>.</p></div></Section>);
}
