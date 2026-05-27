import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { InvestorPathsHub } from "@/components/sections/InvestorPathPage";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({ locale, path: "/investor-paths", title: ar ? "مسارات المستثمرين في منطقة العقبة الاقتصادية الخاصة" : "Investor Paths in ASEZA", description: ar ? "اختر المسار المناسب لحالتك: مستثمر أردني، مستثمر أجنبي، استيراد وتصدير، شركة مسجلة، صناعة، سياحة، تطوير عقاري، أو مستشار يتابع ملف عميل." : "Choose the path that fits your case: local investor, foreign investor, import/export, existing company, industrial, tourism, real estate, or consultant." });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return <InvestorPathsHub />; }
