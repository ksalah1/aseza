"use client";

import { useLocale } from "next-intl";
import {
  BadgeCheck,
  ExternalLink,
  FileText,
  Gavel,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Card, Section, Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

const AR_OFFICIAL_REFERENCES = [
  {
    title: "قانون منطقة العقبة الاقتصادية الخاصة رقم 32 لسنة 2000 وتعديلاته",
    description: "الإطار القانوني العام للمنطقة، صلاحيات السلطة، التسجيل، الجمارك، الضرائب، والأنشطة الاقتصادية.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "نظام تسجيل المؤسسات في منطقة العقبة الاقتصادية الخاصة رقم 13 لسنة 2001 وتعديلاته",
    description: "الأهلية للتسجيل، الأنشطة المحظورة والمقيدة، إجراءات التسجيل، الالتزامات، والتجديدات.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "بوابة الخدمات الإلكترونية الرسمية",
    description: "المرجع العملي للخدمات والإجراءات الإلكترونية والتحديثات الرسمية.",
    url: siteConfig.officialAsezaUrl,
  },
];

const EN_OFFICIAL_REFERENCES = [
  {
    title: "ASEZ Law No. 32 of 2000 (as amended)",
    description: "General legal framework for the zone, authority powers, registration, customs, taxes, and economic activities.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "ASEZ Establishments Registration Regulation No. 13 of 2001 (as amended)",
    description: "Registration eligibility, prohibited/restricted activities, registration procedures, obligations, and renewals.",
    url: "https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA",
  },
  {
    title: "Official e-Services Portal",
    description: "Practical source for e-services, procedures, and official updates.",
    url: siteConfig.officialAsezaUrl,
  },
];

export function TrustAndTransparency({ compact = false }: { compact?: boolean }) {
  const isAr = useLocale() === "ar";

  const officialReferences = isAr ? AR_OFFICIAL_REFERENCES : EN_OFFICIAL_REFERENCES;

  const trustCards = isAr
    ? [
        ["مسار خدمة واضح", "نبدأ ببيانات الحالة الأساسية، ثم نحدد مسار التسجيل أو الترخيص المناسب قبل طلب الوثائق."],
        ["اختيار نشاط أدق", "نحدد إن كان النشاط مباشراً أو يحتاج مساراً خاصاً قبل بدء ملف التسجيل."],
        ["عرض خدمة قبل المتابعة", "نوضح أتعاب تجهيز ومتابعة الملف والرسوم الرسمية المتوقعة كبنود منفصلة."],
        ["تجهيز ومتابعة الملف", "بعد الاتفاق على نطاق الخدمة، نرتب المتطلبات ونجهز الملف ونتابع الملاحظات."],
        ["خطوة تالية واضحة", "نوضح ما يلزم بعد التسجيل من تشغيل أو تعديل أو تجديد حتى لا يتوقف المشروع."],
        ["البدء عن بُعد", "يمكنك إرسال نوع الشركة والنشاط وبلد المستثمر عبر واتساب لنحدد الخدمة المناسبة."],
      ]
    : [
        ["Your service path is supervised by an attorney — not a clerk or agent", "Nour Barakat, Member of the Jordan Bar Association No. 16872, directly supervises path selection and service scope."],
        ["You won't start with the wrong file", "We identify whether your activity is suitable and what documents may be needed later — before you pay government fees."],
        ["Two clear numbers before we begin", "Our service fee is fixed. Government fees are separate and itemised. No surprises."],
        ["Every piece of information cites its official source", "What we tell you is based on specific legal text. We provide the reference so you can decide with confidence."],
        ["We state what we can and cannot do", "The final acceptance or rejection decision rests with the Aqaba Authority. We guarantee a complete, correct file — not the outcome."],
        ["You can start from anywhere in the world", "Many registration steps can be done remotely via WhatsApp or a call. We clarify what requires physical presence."],
      ];

  if (compact) {
    return (
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-2xl rounded-2xl p-6 shadow-sm border border-s-4 border-s-accent border-primary-100 bg-white">
          <h3 className="text-2xl font-bold text-primary">{isAr ? "كيف نبدأ معك؟" : "Who supervises your matter?"}</h3>
          <p className="mt-4 leading-8 text-primary-600">
            {isAr
              ? "أرسل نوع الشركة والنشاط وبلد المستثمر إن وجد. نحدد المسار والخدمة المناسبة، ثم نطلب الوثائق بعد الاتفاق على نطاق المتابعة."
              : "We start with your company type, activity, and investor country, then request documents after scope is agreed."}
          </p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section width="wide" className="bg-gradient-to-b from-[#f5f9fb] to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">{isAr ? "ما الذي نقدمه فعلاً؟" : "Why investors trust us"}</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustCards.map(([title, text]) => (
            <Card key={title} hoverable className="bg-white/95">
              <BadgeCheck className="size-5 text-primary-600" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 leading-7 text-primary-600">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl p-6 shadow-sm border border-s-4 border-s-accent border-primary-100 bg-white">
            <h3 className="text-2xl font-bold text-primary">{isAr ? "كيف نبدأ معك؟" : "Who supervises your matter?"}</h3>
            <p className="mt-4 leading-8 text-primary-600">
              {isAr
                ? "أرسل نوع الشركة والنشاط وبلد المستثمر إن وجد. نحدد المسار والخدمة المناسبة، ثم نطلب الوثائق بعد الاتفاق على نطاق المتابعة."
                : "We start with your company type, activity, and investor country, then request documents after scope is agreed."}
            </p>
          </div>
          <Card className="bg-primary text-primary-50">
            <h3 className="text-2xl font-bold text-white">{isAr ? "افصل بين دورنا ودور الجهة المختصة" : "Scope boundaries"}</h3>
            <p className="mt-3 text-primary-100">{isAr ? "نرتب المتطلبات ونبدأ بعد الاتفاق على نطاق الخدمة، ثم نتابع الملف ونوضح الخطوة التالية." : "We handle legal preparation and follow-up; authority decisions remain official."}</p>
            <a href={whatsappLink(`مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex" onClick={() => trackWhatsAppClick({ location: 'section_trust', ctaText: isAr ? 'حدد مسار نشاطك قبل البدء' : 'Identify your activity path', hasPrefill: false })}>
              <Button variant="whatsapp" icon={<MessageCircle className="size-5" />}>{isAr ? "حدد مسار نشاطك قبل البدء" : "Identify your activity path"}</Button>
            </a>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <Card className="bg-[#fcfdfd]">
          <h2 className="text-2xl font-bold text-primary">{isAr ? "مراجع مختصرة" : "Official Documents & References"}</h2>
          <p className="mt-2 text-primary-600">{isAr ? "مكتبة مرجعية مختصرة مع روابط خارجية رسمية." : "A concise reference library with official external links."}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {officialReferences.map((ref) => (
              <div key={ref.title} className="rounded-xl border border-primary-100 bg-white p-4">
                <FileText className="size-5 text-primary-700" aria-hidden />
                <h3 className="mt-2 font-semibold text-primary">{ref.title}</h3>
                <p className="mt-2 text-sm text-primary-600">{ref.description}</p>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#876c29]">
                  {isAr ? "عرض المرجع الرسمي" : "View official reference"} <ExternalLink className="size-4" />
                </a>
                <p className="mt-1 text-xs text-primary-500">{isAr ? "يفتح في صفحة خارجية" : "Opens in new tab"}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section width="narrow" background="muted">
        <Card className="text-center">
          <ShieldCheck className="mx-auto size-6 text-primary-600" aria-hidden />
          <h3 className="mt-3 text-2xl font-bold text-primary">{isAr ? "للمستثمرين من خارج الأردن" : "For international investors"}</h3>
          <p className="mt-4 text-primary-600">{isAr ? "نحدد المسار المناسب أولاً. بعد الاتفاق على المتابعة، نطلب وثائق الشركة الأم اللازمة." : "We clarify documents, legalization, and remote-ready options based on your case."}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/aseza-registration-checklist"><Button variant="outline">{isAr ? "قائمة التجهيز" : "Checklist"}</Button></Link>
            <a href={whatsappLink(`مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟`)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick({ location: 'section_trust', ctaText: isAr ? 'ابدأ بتحديد المسار' : 'Start path check', hasPrefill: false })}><Button variant="primary" icon={<Gavel className="size-4" />}>{isAr ? "ابدأ بتحديد المسار" : "Start path check"}</Button></a>
          </div>
        </Card>
      </Section>
    </>
  );
}
