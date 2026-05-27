import { useLocale } from "next-intl";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig, addressDisplay, phoneDisplay, phoneLink, whatsappLink } from "@/lib/site";

export function Footer() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-6">
        <div><h2 className="font-semibold text-background">عن ASEZA.co</h2><ul className="mt-4 space-y-2 text-sm"><li>خدمة قانونية خاصة</li><li>ليست الموقع الرسمي للسلطة</li><li>شركة البركات للمحاماة</li><li><a href="#about-attorney-heading" className="hover:text-accent">من يراجع ملفك؟</a></li></ul></div>
        <div><h2 className="font-semibold text-background">تسجيل الشركات</h2><ul className="mt-4 space-y-2 text-sm"><li><Link href="/register-business-in-aseza">تسجيل شركة في ASEZA</Link></li><li><Link href="/process">خطوات التسجيل</Link></li><li><Link href="/services">الوثائق المطلوبة</Link></li><li><Link href="/aseza-registration-checklist">قائمة الوثائق الأولية</Link></li><li><Link href="/faq">ما بعد التسجيل</Link></li></ul></div>
        <div><h2 className="font-semibold text-background">دليل المستثمر</h2><ul className="mt-4 space-y-2 text-sm"><li><Link href="/investor-paths">لماذا العقبة؟</Link></li><li><Link href="/foreign-investors">مستثمر أجنبي</Link></li><li><Link href="/import-export-company-aseza">استيراد وتصدير</Link></li><li><Link href="/existing-aseza-companies">شركة مسجلة حالياً</Link></li><li><Link href="/investor-paths#industrial">صناعة ولوجستيات</Link></li></ul></div>
        <div><h2 className="font-semibold text-background">المراجع الرسمية</h2><ul className="mt-4 space-y-2 text-sm"><li><a href="https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA" target="_blank" rel="noopener noreferrer">قانون منطقة العقبة الاقتصادية الخاصة</a></li><li><a href="https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA" target="_blank" rel="noopener noreferrer">نظام تسجيل المؤسسات</a></li><li><a href="https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA" target="_blank" rel="noopener noreferrer">نظام ضريبة الدخل</a></li><li><a href="https://www.aseza.jo/AR/List/%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9%D8%A7%D8%AA" target="_blank" rel="noopener noreferrer">نظام ضريبة المبيعات</a></li><li><a href={siteConfig.officialAsezaUrl} target="_blank" rel="noopener noreferrer">البوابة الرسمية</a></li></ul></div>
        <div><h2 className="font-semibold text-background">دليل الخدمات</h2><ul className="mt-4 space-y-2 text-sm"><li><Link href="/services/register-new-business">تسجيل شركة لأول مرة</Link></li><li><Link href="/services/register-foreign-branch">تسجيل فرع شركة أجنبية</Link></li><li><Link href="/services/activity-review">مراجعة النشاط</Link></li><li><Link href="/services/licensing-after-registration">الترخيص بعد التسجيل</Link></li><li><Link href="/services/amend-existing-company">تعديل شركة قائمة</Link></li><li><Link href="/services/renew-registration">تجديد التسجيل</Link></li><li><a href={siteConfig.officialAsezaUrl} target="_blank" rel="noopener noreferrer">البوابة الرسمية</a></li></ul></div>
        <div><h2 className="font-semibold text-background">تواصل معنا</h2><ul className="mt-4 space-y-3 text-sm"><li className="flex items-center gap-2"><Phone className="size-4"/><a href={phoneLink()}>{phoneDisplay()}</a></li><li className="flex items-center gap-2"><Mail className="size-4"/><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li><li className="flex items-center gap-2"><MapPin className="size-4"/><span>{addressDisplay(locale)}</span></li><li className="flex items-center gap-2"><Clock className="size-4"/><span>{isAr?"الأحد - الخميس | 9:00 - 18:00":"Sun-Thu | 09:00-18:00"}</span></li><li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><Link href="/contact">نموذج التواصل</Link></li><li><Link href="/privacy">سياسة الخصوصية</Link></li></ul></div>
      </div>
      <div className="border-t border-primary-600"><div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-300">ASEZA.co خدمة قانونية خاصة من شركة البركات للمحاماة، وليست الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة. المعلومات المنشورة للتعريف ولا تغني عن مراجعة التشريعات الرسمية أو استشارة قانونية خاصة.</div></div>
    </footer>
  );
}
