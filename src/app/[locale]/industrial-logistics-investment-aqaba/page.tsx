import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({
    locale,
    path: "/industrial-logistics-investment-aqaba",
    title: ar ? "الاستثمار الصناعي واللوجستي في العقبة" : "Industrial and Logistics Investment in Aqaba",
    description: ar ? "دليل عملي للصناعة الخفيفة والمستودعات واللوجستيات في العقبة مع متطلبات الموقع والموافقات البيئية والسلامة." : "Practical guide for light industry, warehousing, and logistics in Aqaba with site, environmental, and safety requirements.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "لماذا العقبة", href: "/why-aqaba" }, { label: "الصناعة واللوجستيات" }]} />
      </div>
      <Section width="wide">
        <h1 className="text-3xl font-bold text-primary">
          {ar ? "الاستثمار الصناعي واللوجستي في العقبة" : "Industrial and Logistics Investment in Aqaba"}
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-primary">
          {ar ? "ما الذي يجعل العقبة مناسبة للصناعة واللوجستيات؟" : "What Makes Aqaba Suitable for Industry and Logistics?"}
        </h2>
        <ul className="mt-4 space-y-3">
          {(ar ? [
            "توفر أراضٍ صناعية وخدمية",
            "قرب من الميناء يقلل تكاليف النقل الداخلي",
            "إمكانية إدخال مواد خام وتصدير منتجات نهائية",
            "قواعد جمركية قد تكون مناسبة لبعض أنشطة التصنيع والتجميع",
          ] : [
            "Availability of industrial and service land",
            "Proximity to port reduces inland transport costs",
            "Ability to import raw materials and export finished goods",
            "Customs rules that may be favorable for some manufacturing and assembly activities",
          ]).map((item) => (
            <li key={item} className="flex items-start gap-3 text-primary-600">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary">
          {ar ? "الأنشطة النموذجية في هذا القطاع" : "Typical Activities in This Sector"}
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {(ar ? [
            "التخزين والمستودعات",
            "التغليف وإعادة التعبئة",
            "الصناعة الخفيفة",
            "تجميع المنتجات",
            "توزيع البضائع بالجملة",
            "مشغلو الشحن والتخليص الجمركي",
          ] : [
            "Storage and warehousing",
            "Packaging and repacking",
            "Light manufacturing",
            "Product assembly",
            "Wholesale goods distribution",
            "Freight and customs clearance operators",
          ]).map((activity) => (
            <span key={activity} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
              {activity}
            </span>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">
          {ar ? "المتطلبات الرئيسية قبل التسجيل" : "Key Requirements Before Registration"}
        </h2>
        <ul className="mt-4 space-y-3">
          {(ar ? [
            "موافقة بيئية (حسب طبيعة النشاط)",
            "شهادة سلامة عامة",
            "عنوان أو عقد موقع صناعي",
            "مراجعة النشاط مع الجهة المختصة",
          ] : [
            "Environmental approval (depending on activity type)",
            "General safety certificate",
            "Address or industrial site contract",
            "Activity review with the relevant authority",
          ]).map((req) => (
            <li key={req} className="flex items-start gap-3 text-primary-600">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{req}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-500"
          >
            <MessageCircle className="size-5" aria-hidden />
            {ar ? "راجع نشاطك الصناعي أو اللوجستي قبل التسجيل" : "Review your industrial or logistics activity before registration"}
          </a>
        </div>
      </Section>
    </>
  );
}
