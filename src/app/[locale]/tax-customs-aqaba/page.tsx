import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Accordion, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/tax-customs-aqaba", title: "ضرائب وجمارك منطقة العقبة الاقتصادية الخاصة | دليل مبسط", description: "شرح مبسط للضرائب والجمارك في منطقة العقبة الاقتصادية الخاصة، مع توضيح حدود ضريبة الدخل، ضريبة المبيعات، والمعاملة الجمركية حسب النشاط." });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return (<><Section width="narrow"><h1 className="text-center text-4xl font-bold text-primary">الضرائب والجمارك في منطقة العقبة الاقتصادية الخاصة</h1></Section><Section width="wide"><h2 className="text-2xl font-bold text-primary">ضريبة الدخل: متى قد تنطبق المعاملة الخاصة؟</h2><p className="mt-2 text-primary-600">قد تستفيد بعض الحالات من معاملة خاصة وفق الشروط، ولا تنطبق نسبة واحدة تلقائياً على كل الشركات.</p></Section><Section width="wide" background="muted"><h2 className="text-2xl font-bold text-primary">ضريبة المبيعات: لماذا تختلف حسب النشاط؟</h2><p className="mt-2 text-primary-600">تختلف حسب نوع السلع والخدمات ومكان البيع أو الاستهلاك ووضع النشاط الضريبي.</p></Section><Section width="wide"><h2 className="text-2xl font-bold text-primary">الجمارك: حركة البضائع داخل وخارج المنطقة</h2><p className="mt-2 text-primary-600">تعتمد المعاملة على نوع البضاعة ومسارها، ولا يعني التسجيل إعفاءً جمركياً شاملاً.</p></Section><Section width="narrow"><h2 className="text-2xl font-bold text-primary">أسئلة شائعة</h2><Accordion items={[{question:"هل ضريبة 5% مضمونة لكل شركة؟",answer:"لا، وقد تنطبق أو لا تنطبق حسب الشروط والنشاط."},{question:"هل ضريبة المبيعات لا تنطبق داخل العقبة؟",answer:"قد تنطبق في حالات عديدة وفق طبيعة النشاط والمعاملة."}]} /></Section><Section width="default"><div className="rounded-xl bg-primary p-6 text-center text-white"><h2 className="text-2xl font-bold">ابدأ مراجعة نشاطك عبر واتساب</h2><div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold"><MessageCircle className="size-4"/>افحص نشاطك قبل التسجيل</a><Link href="/register-business-in-aseza" className="rounded-lg border border-primary-100/50 px-6 py-3">تسجيل شركة في ASEZA</Link></div></div></Section></>); }
