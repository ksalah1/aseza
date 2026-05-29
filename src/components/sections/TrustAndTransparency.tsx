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

const officialReferences = [
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

export function TrustAndTransparency() {
  const isAr = useLocale() === "ar";

  const trustCards = [
    ["ملفك يراجعه محامية — لا موظف أو وسيط", "نور بركات، عضو نقابة المحامين الأردنيين رقم 16872، تراجع كل ملف مباشرة."],
    ["لن تبدأ بملف غلط", "نتحقق من أن نشاطك مسموح وأن وثائقك مكتملة — قبل أن تدفع أي رسوم حكومية."],
    ["رقمان واضحان قبل أن نبدأ", "أتعاب خدمتنا ثابتة. الرسوم الحكومية مفصولة ومفصّلة. لا مفاجآت."],
    ["كل معلومة بمصدرها الرسمي", "ما نخبرك به مستند لنص قانوني محدد. نزودك بالمرجع حتى تقرر بثقة."],
    ["نوضح ما نستطيع وما لا نستطيع", "القرار النهائي بالقبول أو الرفض لسلطة العقبة. نحن نضمن ملفاً مكتملاً وصحيحاً — لا نضمن النتيجة."],
    ["تبدأ من أي مكان في العالم", "كثير من خطوات التسجيل تتم عن بُعد عبر واتساب أو مكالمة. نحدد معك ما يحتاج حضوراً فعلياً."],
  ];

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
            <h3 className="text-2xl font-bold text-primary">{isAr ? "من يراجع ملفك؟" : "Who reviews your file?"}</h3>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-accent ring-4 ring-accent/20" aria-hidden="true">
                ن.ب
              </div>
              <div>
                <p className="text-lg font-bold text-primary">نور بركات</p>
                <p className="text-sm text-primary-500">محامية مرخّصة · شركة البركات للمحاماة</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              <li className="flex items-center gap-2 text-sm text-primary-700">
                <span className="size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                عضو نقابة المحامين الأردنيين
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-700">
                <span className="size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                رقم العضوية: 16872
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-700">
                <span className="size-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                خدمة قانونية خاصة — ليست جهة حكومية
              </li>
            </ul>
            <a
              href="https://www.nba.org.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#876c29] hover:underline"
            >
              تحقق من عضوية المحامية مباشرة ←
            </a>
          </div>
          <Card className="bg-primary text-primary-50">
            <h3 className="text-2xl font-bold text-white">{isAr ? "افصل بين دورنا ودور الجهة المختصة" : "Scope boundaries"}</h3>
            <p className="mt-3 text-primary-100">{isAr ? "نساعد في التقديم والمتابعة القانونية، لكن القرار النهائي يبقى للجهة المختصة." : "We handle legal preparation and follow-up; authority decisions remain official."}</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex" onClick={() => trackWhatsAppClick({ location: 'section_trust', ctaText: isAr ? 'راجع نشاطك قبل البدء' : 'Review your activity', hasPrefill: false })}>
              <Button variant="whatsapp" icon={<MessageCircle className="size-5" />}>{isAr ? "راجع نشاطك قبل البدء" : "Review your activity"}</Button>
            </a>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <Card className="bg-[#fcfdfd]">
          <h2 className="text-2xl font-bold text-primary">المستندات والمراجع الرسمية</h2>
          <p className="mt-2 text-primary-600">مكتبة مرجعية مختصرة مع روابط خارجية رسمية.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {officialReferences.map((ref) => (
              <div key={ref.title} className="rounded-xl border border-primary-100 bg-white p-4">
                <FileText className="size-5 text-primary-700" aria-hidden />
                <h3 className="mt-2 font-semibold text-primary">{ref.title}</h3>
                <p className="mt-2 text-sm text-primary-600">{ref.description}</p>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#876c29]">
                  عرض المرجع الرسمي <ExternalLink className="size-4" />
                </a>
                <p className="mt-1 text-xs text-primary-500">يفتح في صفحة خارجية</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section width="narrow" background="muted">
        <Card className="text-center">
          <ShieldCheck className="mx-auto size-6 text-primary-600" aria-hidden />
          <h3 className="mt-3 text-2xl font-bold text-primary">{isAr ? "للمستثمرين من خارج الأردن" : "For international investors"}</h3>
          <p className="mt-4 text-primary-600">{isAr ? "نوضح الوثائق، التصديقات، والخيارات الممكنة عن بُعد بحسب الحالة دون وعود غير واقعية." : "We clarify documents, legalization, and remote-ready options based on your case."}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/aseza-registration-checklist"><Button variant="outline">{isAr ? "قائمة الوثائق الأولية" : "Checklist"}</Button></Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick({ location: 'section_trust', ctaText: isAr ? 'ابدأ المراجعة' : 'Start review', hasPrefill: false })}><Button variant="primary" icon={<Gavel className="size-4" />}>{isAr ? "ابدأ المراجعة" : "Start review"}</Button></a>
          </div>
        </Card>
      </Section>
    </>
  );
}
