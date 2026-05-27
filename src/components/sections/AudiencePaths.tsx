import { useLocale } from "next-intl";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section, Card } from "@/components/ui";
import { siteConfig, whatsappLink } from "@/lib/site";

type AudienceCard = { title: string; text: string; cta: string; href: string; external?: boolean };

export function AudiencePaths() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const cards: AudienceCard[] = isAr
    ? [
        { title: "مستثمر أردني", text: "لمن يريد تأسيس شركة جديدة أو نقل نشاطه إلى العقبة والاستفادة من بيئة المنطقة الخاصة.", cta: "افحص نشاطك قبل التسجيل", href: whatsappLink("أرغب بمراجعة نشاطي قبل تسجيل شركة في العقبة.") },
        { title: "مستثمر أجنبي", text: "لمن يريد تأسيس شركة من خارج الأردن أو تسجيل فرع أو فهم الوثائق والتفويضات المطلوبة.", cta: "ابدأ مراجعة نشاطك من خارج الأردن", href: "/foreign-investors" },
        { title: "شركة مسجلة حالياً في ASEZA", text: "لمن يحتاج تعديل بيانات، تجديد، إضافة نشاط، تغيير مفوضين، أو فهم التزامات ما بعد التسجيل.", cta: "اطلب خدمة تعديل أو تجديد", href: "/existing-aseza-companies" },
        { title: "استيراد وتصدير", text: "لشركات التجارة، التوزيع، التخزين، إعادة التصدير، أو إدخال البضائع إلى المنطقة.", cta: "راجع نشاط الاستيراد والتصدير", href: "/import-export-company-aseza" },
        { title: "صناعة أو لوجستيات", text: "للمشاريع الصناعية أو التخزينية أو الخدمات اللوجستية التي قد تحتاج موقعاً أو موافقات إضافية.", cta: "قيّم متطلبات مشروعك الصناعي", href: "/investor-paths#industrial" },
        { title: "سياحة وضيافة", text: "للمطاعم، الفنادق، الأنشطة السياحية، الترفيه، أو الخدمات المرتبطة بالزوار.", cta: "اسأل عن متطلبات النشاط السياحي", href: "/investor-paths#tourism" },
        { title: "تطوير عقاري", text: "للمطورين الذين يحتاجون فهم الشركة، الموقع، التنظيم، التراخيص، وإذن الإشغال.", cta: "راجع مشروعك العقاري قبل التأسيس", href: "/investor-paths#real-estate" },
        { title: "مواطن يبحث عن خدمة رسمية", text: "إذا كنت تبحث عن خدمات حكومية مباشرة، فقد تحتاج إلى بوابة سلطة منطقة العقبة الاقتصادية الخاصة الرسمية.", cta: "اذهب إلى الموقع الرسمي", href: siteConfig.officialAsezaUrl, external: true },
        { title: "مستشار أو محامٍ", text: "لمن يساعد عميلاً ويحتاج مراجعة ملف، نشاط، وثائق، أو مراجع قانونية قبل التقديم.", cta: "اطلب مراجعة ملف عميلك", href: "/investor-paths#consultants" },
      ]
    : [
        { title: "Local Jordanian Investor", text: "For founders starting a new company or relocating activity to Aqaba's special zone.", cta: "Check your activity before registration", href: whatsappLink("I want to review my activity before registering a company in Aqaba.") },
        { title: "Foreign Investor", text: "For investors registering from abroad, opening a branch, or checking foreign documentation.", cta: "Start your review from outside Jordan", href: "/foreign-investors" },
        { title: "Existing ASEZA Company", text: "For amendments, renewals, adding activities, authorized signatory updates, and post-registration obligations.", cta: "Request amendment or renewal support", href: "/existing-aseza-companies" },
        { title: "Import/Export Business", text: "For trading, distribution, storage, re-export, or goods entry into the zone.", cta: "Review import/export activity", href: "/import-export-company-aseza" },
        { title: "Industrial or Logistics", text: "For industrial and logistics projects that may require site checks and additional approvals.", cta: "Assess industrial project requirements", href: "/investor-paths#industrial" },
        { title: "Tourism & Hospitality", text: "For restaurants, hotels, tourism activities, entertainment, and visitor services.", cta: "Ask about tourism activity requirements", href: "/investor-paths#tourism" },
        { title: "Real Estate Development", text: "For developers who need clarity on company form, planning, permits, and occupancy.", cta: "Review your real estate project first", href: "/investor-paths#real-estate" },
        { title: "Citizen Seeking Official Services", text: "If you need direct government services, use the official ASEZA portal.", cta: "Go to the official website", href: siteConfig.officialAsezaUrl, external: true },
        { title: "Consultant or Lawyer", text: "For professionals assisting clients with file review, activity classification, and legal references.", cta: "Request client file review", href: "/investor-paths#consultants" },
      ];

  return (
    <Section width="wide">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">{isAr ? "ما نوع المستثمر أو النشاط الذي يمثلك؟" : "What type of investor or business are you?"}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-500">{isAr ? "اختر المسار الأقرب لحالتك حتى تعرف ما الذي تحتاجه قبل تسجيل الشركة أو المؤسسة في منطقة العقبة الاقتصادية الخاصة." : "Choose the path closest to your case to understand what you may need before registering a business in ASEZA."}</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-500">{card.text}</p>
            </div>
            {card.external ? (
              <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">{card.cta}<ExternalLink className="size-4" /></a>
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
