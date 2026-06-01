import { useLocale } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export function JourneyPage({ titleAr, titleEn, sectionsAr, sectionsEn, ctaAr, ctaEn, msgAr, msgEn }: { titleAr: string; titleEn: string; sectionsAr: string[]; sectionsEn: string[]; ctaAr: string; ctaEn: string; msgAr: string; msgEn: string; }) {
  const ar = useLocale() === "ar";
  const sections = ar ? sectionsAr : sectionsEn;
  return <Section width="narrow"><h1 className="text-3xl font-bold text-primary md:text-5xl">{ar ? titleAr : titleEn}</h1><div className="mt-8 space-y-4">{sections.map((s)=><Card key={s}><h2 className="text-lg font-semibold text-primary">{s}</h2><p className="mt-2 text-sm text-primary-500">{ar?"نحدد هذه النقطة من النشاط والمعلومات الأولية، ونوضح الموافقات الإضافية المرتبطة بها قبل طلب الوثائق وبعد وضوح نطاق الخدمة.":"We identify this point from basic activity information. Additional approvals may apply and remain subject to authority decision; documents are requested after service scope is clear."}</p></Card>)}</div><a href={whatsappLink(ar?msgAr:msgEn)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1DA851]">{ar?ctaAr:ctaEn}<MessageCircle className="size-4"/></a></Section>;
}
