import { useLocale } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";

export function InvestorPathsHub() {
  const ar = useLocale() === "ar";
  return <Section width="wide"><h1 className="text-3xl font-bold text-primary md:text-5xl">{ar?"مسارات المستثمرين في منطقة العقبة الاقتصادية الخاصة":"Investor Paths in ASEZA"}</h1><p className="mt-4 text-primary-500">{ar?"اختر المسار المناسب لتعرف ما الذي تحتاجه، وما الذي قد يتطلب موافقات إضافية، وما هي الخطوة الأكثر أماناً قبل التقديم.":"Choose your audience path to understand likely requirements, potential approvals, and the safest next step before filing."}</p><div className="mt-8 grid gap-5 md:grid-cols-2">{[
    [ar?"المستثمر الصناعي واللوجستي":"Industrial & Logistics Investors",[ar?"الموقع أو المستودع":"Site or warehouse",ar?"البيئة والسلامة والصحة العامة":"Environment, safety, and public health",ar?"الكشف على الموقع":"Site inspection",ar?"طبيعة المواد أو المنتجات":"Nature of goods/materials",ar?"الترخيص بعد التسجيل":"Post-registration operating licensing"],ar?"قيّم متطلبات مشروعك الصناعي":"Assess industrial project requirements",whatsappLink(`مرحباً، أريد تحديد متطلبات مشروع صناعي أو لوجستي في العقبة.
نوع النشاط:
الموقع أو المستودع إن وجد:
طبيعة المواد أو المنتجات:`)],
    [ar?"المستثمر السياحي":"Tourism Investors",[ar?"نوع النشاط السياحي":"Type of tourism activity",ar?"الموقع":"Location",ar?"موافقات الصحة والسلامة":"Health and safety approvals",ar?"موافقات قطاعية حسب النشاط":"Sector approvals by activity",ar?"الترخيص قبل التشغيل":"Licensing before operation"],ar?"اسأل عن متطلبات النشاط السياحي":"Ask about tourism activity requirements",whatsappLink(`مرحباً، أريد تحديد متطلبات نشاط سياحي في العقبة.
نوع النشاط:
الموقع إن وجد:
هل توجد موافقات سابقة؟`)],
    [ar?"المطور العقاري":"Real Estate Developers",[ar?"الشكل القانوني":"Legal form",ar?"الأرض أو المشروع":"Land or project",ar?"التنظيم والبناء":"Planning and construction",ar?"رخصة البناء":"Building permit",ar?"إذن الإشغال":"Occupancy permit",ar?"الموافقات البيئية أو التنظيمية":"Environmental or planning approvals"],ar?"حدد مسار مشروعك العقاري قبل التأسيس":"Identify your real estate project path first",whatsappLink(`مرحباً، أريد تحديد مسار مشروع تطوير عقاري في العقبة.
نوع المشروع:
موقع الأرض أو المشروع:
مرحلة المشروع الحالية:`)]
  ].map(([title,items,cta,href])=><Card key={title as string}><h2 id={(title as string).includes("الصناعي")|| (title as string).includes("Industrial")?"industrial":(title as string).includes("السياحي")|| (title as string).includes("Tourism")?"tourism":"real-estate"} className="text-xl font-semibold text-primary">{title as string}</h2><ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-primary-500">{(items as string[]).map(i=><li key={i}>{i}</li>)}</ul><a href={href as string} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">{cta as string}<MessageCircle className="size-4"/></a></Card>)}</div>
  <Card className="mt-8" id="consultants"><h2 className="text-xl font-semibold text-primary">{ar?"للمستشارين والمحامين الذين يتابعون ملفات عملاء":"For Consultants & Lawyers Supporting Clients"}</h2><p className="mt-2 text-primary-500">{ar?"إذا كنت تتابع مستثمراً أو شركة، يمكننا مساعدتك في تحديد تصنيف النشاط ومتطلبات التسجيل أو الترخيص، ثم طلب الوثائق بعد وضوح نطاق الخدمة.":"We can help identify activity classification and filing requirements, then request documents after service scope is clear."}</p><div className="mt-4 flex flex-wrap gap-3 text-sm"><Link href="/services" className="text-primary hover:text-accent">{ar?"تسجيل شركة":"Register a Business"}</Link><Link href="/faq" className="text-primary hover:text-accent">FAQ</Link><Link href="/blog" className="text-primary hover:text-accent">{ar?"القوانين والمراجع":"Laws & References"}</Link><a href={whatsappLink(ar?`مرحباً، أنا مستشار/محامٍ وأريد تحديد المسار المناسب لعميل.
نوع الحالة:
النشاط:
الخدمة المطلوبة:`:"Hello, I am a consultant/lawyer and want to identify the right path for a client. Case type: Activity: Needed service:")} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">WhatsApp</a></div></Card>
  <Card className="mt-6 border-primary-200 bg-primary-50"><h2 className="text-lg font-semibold text-primary">{ar?"هل تبحث عن خدمات رسمية للمواطنين؟":"Looking for official citizen services?"}</h2><p className="mt-2 text-sm text-primary-600">{ar?"ASEZA.co خدمة قانونية خاصة لمساعدة المستثمرين والشركات. إذا كنت تبحث عن معاملة حكومية مباشرة أو خدمة مواطن، يمكنك الرجوع إلى الموقع الرسمي أو بوابة الخدمات الإلكترونية لسلطة منطقة العقبة الاقتصادية الخاصة.":"ASEZA.co is a private legal service for investors and companies. For direct government citizen services, use the official ASEZA website or e-services portal."}</p><a href={siteConfig.officialAsezaUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-accent">{ar?"زيارة البوابة الرسمية":"Visit official portal"}</a></Card></Section>;
}
