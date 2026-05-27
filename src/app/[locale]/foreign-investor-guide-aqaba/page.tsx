import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/foreign-investor-guide-aqaba",
    title: ar ? "دليل المستثمر الأجنبي لتأسيس شركة في العقبة" : "Foreign Investor Guide to Company Registration in Aqaba",
    description: ar ? "دليل منظم للمستثمر الأجنبي لفهم تأسيس الشركة في العقبة والوثائق والتصديقات والضرائب والجمارك والمتطلبات التشغيلية." : "Understand how foreign investors can start a company in Aqaba, including legal structure, documents, legalization, tax, customs, banking, labor, and logistics considerations.",
  });
}

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";
  const sections = ar ? ["العقبة لمحة سريعة","لماذا يفكر المستثمرون في ASEZA","اختيار الشكل القانوني المناسب","قائمة الوثائق","التصديقات والترجمة والوكالة","خطوات التسجيل","الضرائب والجمارك","الحساب البنكي والمدفوعات","المكتب والمستودع والأرض والتراخيص","العمالة وتصاريح العمل والإقامة","أخطاء شائعة يجب تجنبها","كيف تساعد شركة البركات للمحاماة؟","ابدأ مراجعة نشاطك"] : ["Aqaba at a glance","Why investors consider ASEZA","Choosing the right legal structure","Documents checklist","Legalization, translation, and POA","Step-by-step registration process","Tax and customs overview","Banking and payments","Office, warehouse, land, and licensing","Labor, work permits, and residency","Common mistakes to avoid","How Al Barakat Law Firm can help","Start your activity review"];

  return <main className="mx-auto max-w-5xl px-6 py-16"><h1 className="text-3xl font-bold text-primary">{ar?"دليل المستثمر الأجنبي لتأسيس شركة في العقبة":"Foreign Investor Guide to Company Registration in Aqaba"}</h1><ol className="mt-8 space-y-3">{sections.map((s,i)=><li key={s} className="rounded-lg border border-primary-100 p-4"><span className="font-semibold text-accent">{i+1}. </span>{s}</li>)}</ol><p className="mt-8 text-sm text-primary-600">TODO: Optional future task: generate this as downloadable PDF after content is approved.</p><div className="mt-8 flex gap-3"><Link href="/foreign-investors" className="rounded-lg bg-primary px-4 py-2 font-semibold text-white">{ar?"ابدأ مراجعة نشاطك":"Start Your Activity Review"}</Link><a href={whatsappLink(ar?"أرغب في الحصول على قائمة وثائق المستثمر الأجنبي.":"I would like to request the foreign investor checklist.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white"><MessageCircle className="size-4" aria-hidden />{ar?"تواصل معنا عبر واتساب":"Contact us via WhatsApp"}</a></div></main>;
}
