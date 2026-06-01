"use client";

import { useLocale } from "next-intl";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, Card } from "@/components/ui";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

type AudienceCard = { title: string; text: string; cta: string; href: string; external?: boolean; isWhatsApp?: boolean };

export function AudiencePaths() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const cards: AudienceCard[] = isAr
    ? [
        { title: "مستثمر أردني", text: "لمن يريد تأسيس شركة جديدة أو نقل نشاطه إلى العقبة والاستفادة من بيئة المنطقة الخاصة.", cta: "حدد مسار نشاطك قبل التسجيل", href: whatsappLink(`أريد تحديد المسار المناسب لنشاط قبل تسجيل شركة في العقبة.
وصف النشاط:`), isWhatsApp: true },
        { title: "مستثمر أجنبي", text: "لمن يريد تأسيس شركة من خارج الأردن أو تسجيل فرع أو فهم الوثائق والتفويضات المطلوبة.", cta: "ابدأ عن بُعد — نتولى الباقي", href: "/foreign-investors" },
        { title: "استيراد وتصدير", text: "لشركات التجارة، التوزيع، التخزين، إعادة التصدير، أو إدخال البضائع إلى المنطقة.", cta: "نشاط الاستيراد؟ نحدد مساره معك", href: "/import-export-company-aseza" },
        { title: "شركة مسجلة حالياً في ASEZA", text: "لمن يحتاج تعديل بيانات، تجديد، إضافة نشاط، تغيير مفوضين، أو فهم التزامات ما بعد التسجيل.", cta: "اطلب خدمة تعديل أو تجديد", href: "/existing-aseza-companies" },
      ]
    : [
        { title: "Jordanian Investor", text: "For founders starting a new company or relocating activity to Aqaba's special zone.", cta: "Identify your activity path before registration", href: whatsappLink("I want to identify the right path for my activity before registering a company in Aqaba. Activity:"), isWhatsApp: true },
        { title: "Foreign Investor", text: "For investors registering from abroad, opening a branch, or understanding parent-company requirements.", cta: "Start path selection from outside Jordan", href: "/foreign-investors" },
        { title: "Import/Export Business", text: "For trading, distribution, storage, re-export, or goods entry into the zone.", cta: "Identify import/export path", href: "/import-export-company-aseza" },
        { title: "Existing ASEZA Company", text: "For amendments, renewals, adding activities, authorized signatory updates, and post-registration obligations.", cta: "Request amendment or renewal support", href: "/existing-aseza-companies" },
      ];

  return (
    <Section width="wide">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{isAr ? "ما نوع المستثمر أو النشاط الذي يمثلك؟" : "What type of investor or business are you?"}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-500">{isAr ? "اختر المسار الأقرب لحالتك حتى تعرف ما الذي تحتاجه قبل تسجيل الشركة أو المؤسسة في منطقة العقبة الاقتصادية الخاصة." : "Choose the path closest to your case to understand what you may need before registering a business in ASEZA."}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title} className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-500">{card.text}</p>
            </div>
            {card.external ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">{card.cta}<ExternalLink className="size-4" /></a>
            ) : card.isWhatsApp ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent" onClick={() => trackWhatsAppClick({ location: 'audience_card', ctaText: card.cta, hasPrefill: true, locale })}>{card.cta}<MessageCircle className="size-4" /></a>
            ) : card.href.startsWith("http") ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">{card.cta}<MessageCircle className="size-4" /></a>
            ) : (
              <Link href={card.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">{card.cta}</Link>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
