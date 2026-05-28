import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/restricted-prohibited-activities-aseza", title: "الأنشطة المقيدة والمحظورة في منطقة العقبة الاقتصادية الخاصة", description: "تعرف على الفرق بين الأنشطة المسموحة والمقيدة والمحظورة في ASEZA، ولماذا يجب مراجعة النشاط قبل تقديم طلب التسجيل." });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return (<><div className="mx-auto max-w-7xl px-6 pt-4"><Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "لماذا العقبة", href: "/why-aqaba" }, { label: "الأنشطة: مسموحة / مقيدة / محظورة" }]} /></div><Section width="wide"><h1 className="text-4xl font-bold text-primary">الأنشطة المقيدة والمحظورة في ASEZA</h1><h2 className="mt-8 text-2xl font-bold text-primary">أنشطة مسموحة غالباً</h2><p className="mt-2 text-primary-600">تشمل كثيراً من الأنشطة التجارية والخدمية المعتادة ضمن الشروط النظامية.</p><h2 className="mt-8 text-2xl font-bold text-primary">أنشطة مقيدة</h2><p className="mt-2 text-primary-600">قد تحتاج إلى موافقات خاصة أو اشتراطات إضافية قبل التشغيل.</p><h2 className="mt-8 text-2xl font-bold text-primary">أنشطة محظورة</h2><p className="mt-2 text-primary-600">لا يجوز تسجيل بعض الأنشطة وفق الأنظمة النافذة في المنطقة.</p><h2 className="mt-8 text-2xl font-bold text-primary">متى تحتاج موافقات خاصة؟</h2><p className="mt-2 text-primary-600">عند ارتباط النشاط بعناصر صحية أو بيئية أو أمنية أو قطاعية.</p><p className="mt-8 text-primary">ابدأ بـ <Link href="/services/activity-review" className="underline">مراجعة النشاط قبل التسجيل</Link> ثم <Link href="/register-business-in-aseza" className="underline">تسجيل شركة في ASEZA</Link>.</p></Section></>); }
