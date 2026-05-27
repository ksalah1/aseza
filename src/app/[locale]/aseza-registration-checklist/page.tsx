import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, path: "/aseza-registration-checklist", title: locale === "ar" ? "قائمة وثائق تسجيل شركة في ASEZA" : "ASEZA company registration checklist", description: locale === "ar" ? "قائمة إرشادية للوثائق المطلوبة لتسجيل شركة أو مؤسسة في منطقة العقبة الاقتصادية الخاصة حسب نوع الشركة والنشاط." : "Guidance checklist for company registration documents in ASEZA." });
}

export default async function ChecklistPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return <ChecklistContent />; }

function ChecklistContent(){ const isAr=useLocale()==='ar'; const items=["نوع الشركة","بيانات الشركاء/المساهمين","المفوّض بالتوقيع","وصف النشاط","الهوية/جوازات السفر","وثائق الشركات القائمة","وثائق الشركة الأجنبية (إن وجدت)","الوكالة أو التفويض","بيانات العنوان/الموقع عند الحاجة","موافقات إضافية محتملة"]; return <Section width="narrow"><Card><h1 className="text-3xl font-bold text-primary">{isAr?"قائمة أولية للوثائق المطلوبة لتسجيل شركة في ASEZA":"Initial checklist for ASEZA company registration"}</h1><ul className="mt-5 space-y-2 text-primary-600">{items.map(i=><li key={i}>• {i}</li>)}</ul><p className="mt-5 text-sm text-primary-500">{isAr?"هذه القائمة إرشادية وليست نهائية، وقد تختلف المتطلبات حسب النشاط والشكل القانوني والجهة المختصة.":"This checklist is indicative and not final; requirements vary by activity, legal form, and competent authority."}</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white"><MessageCircle className="size-5"/>{isAr?"اسأل عن الوثائق المطلوبة لحالتك":"Ask about required documents"}</a></Card></Section> }
