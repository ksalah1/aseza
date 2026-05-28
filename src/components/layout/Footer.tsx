import { useLocale } from "next-intl";
import { Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { phoneDisplay, phoneLink, whatsappLink } from "@/lib/site";

export function Footer() {
  const locale = useLocale();
  const ar = locale === "ar";
  const cols = ar ? [
    ["تسجيل الشركات", [["تسجيل شركة في ASEZA","/register-business-in-aseza"],["تسجيل فرع أجنبي","/foreign-investors"],["مراجعة النشاط","/services/activity-review"],["الترخيص بعد التسجيل","/licensing-after-registration"]]],
    ["دليل المستثمر", [["لماذا العقبة؟","/why-aqaba"],["المستثمر الأجنبي","/foreign-investors"],["الاستيراد والتصدير","/import-export-company-aseza"],["الضرائب والجمارك","/tax-customs-aqaba"],["الأنشطة المقيدة والمحظورة","/restricted-prohibited-activities-aseza"]]],
    ["القطاعات", [["الصناعة واللوجستيات","/industrial-logistics-investment-aqaba"],["السياحة والضيافة","/tourism-investment-aqaba"],["التطوير العقاري","/real-estate-development-aqaba"],["العمالة والتأشيرات","/labor-visas-aqaba"]]],
    ["الوثائق والدعم", [["الأسئلة الشائعة","/faq"],["المراجع القانونية","/legal-references"]]],
  ] : [
    ["Company setup", [["Register in ASEZA","/register-business-in-aseza"],["Foreign branch / investor","/foreign-investors"],["Activity review","/services/activity-review"],["Licensing after registration","/licensing-after-registration"]]],
    ["Investor guide", [["Why Aqaba","/why-aqaba"],["Import/export","/import-export-company-aseza"],["Tax & customs","/tax-customs-aqaba"],["Restricted activities","/restricted-prohibited-activities-aseza"]]],
    ["Sectors", [["Industrial & logistics","/industrial-logistics-investment-aqaba"],["Tourism & hospitality","/tourism-investment-aqaba"],["Real estate","/real-estate-development-aqaba"],["Labor & visas","/labor-visas-aqaba"]]],
    ["Documents & support", [["FAQ","/faq"],["Legal references","/legal-references"]]],
  ];

  return <footer className="bg-primary text-primary-100"><div className="mx-auto max-w-7xl px-6 py-12"><p className="text-sm">{ar ? "خدمة قانونية خاصة من شركة البركات للمحاماة. ليست موقعاً حكومياً رسمياً." : "A private legal service by Al Barakat Law Firm. Not an official government website."}</p><div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{cols.map(([title,links])=><div key={String(title)}><h2 className="font-semibold text-background">{String(title)}</h2><ul className="mt-3 space-y-2 text-sm">{(links as string[][]).map(([label,href])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>)}</div><div className="mt-8 border-t border-primary-700 pt-6 text-sm"><div className="flex flex-wrap gap-4"><a className="inline-flex items-center gap-2" dir="ltr" href={phoneLink()}><Phone className="size-4"/>{phoneDisplay()}</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div></div></footer>;
}
