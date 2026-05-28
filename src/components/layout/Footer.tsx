import { Phone, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { phoneDisplay, phoneLink, whatsappLink, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — تسجيل الشركات */}
          <div>
            <h2 className="font-semibold text-background">تسجيل الشركات</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/register-business-in-aseza">مستثمر أردني</Link></li>
              <li><Link href="/foreign-investors">مستثمر أجنبي / فرع شركة</Link></li>
              <li><Link href="/import-export-company-aseza">شركة استيراد وتصدير</Link></li>
              <li><Link href="/aseza-registration-checklist">قائمة الوثائق</Link></li>
              <li><Link href="/services/activity-review">مراجعة النشاط</Link></li>
              <li><Link href="/aseza-registration-fees">رسوم التسجيل</Link></li>
            </ul>
          </div>

          {/* Column 2 — دليل المستثمر */}
          <div>
            <h2 className="font-semibold text-background">دليل المستثمر</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/why-aqaba">لماذا الاستثمار في العقبة؟</Link></li>
              <li><Link href="/tax-customs-aqaba">الضرائب والجمارك: الإطار القانوني</Link></li>
              <li><Link href="/restricted-prohibited-activities-aseza">هل نشاطك مسموح؟</Link></li>
              <li><Link href="/legal-references">المراجع القانونية الرسمية</Link></li>
            </ul>
          </div>

          {/* Column 3 — بعد التسجيل */}
          <div>
            <h2 className="font-semibold text-background">بعد التسجيل</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/licensing-after-registration">الترخيص والموافقات القطاعية</Link></li>
              <li><Link href="/services/amend-existing-company">تعديل بيانات الشركة المسجلة</Link></li>
              <li><Link href="/services/renew-registration">التجديد السنوي</Link></li>
              <li><Link href="/faq">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* Column 4 — عن المكتب */}
          <div>
            <h2 className="font-semibold text-background">عن المكتب</h2>
            <div className="mt-3 space-y-1 text-sm">
              <p className="font-semibold text-background">نور بركات</p>
              <p>محامية مرخصة</p>
              <p>عضو نقابة المحامين الأردنيين</p>
              <p>رقم العضوية 16872</p>
              <p>شركة البركات للمحاماة</p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                <span dir="ltr">+962 78 555 9253</span>
              </a>
              <a href={phoneLink()} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone className="size-4 shrink-0" aria-hidden />
                <span dir="ltr">{phoneDisplay()}</span>
              </a>
              <Link href="/about" className="block text-accent transition-colors hover:underline">
                التعرف على المكتب ←
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-primary-700 pt-6">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-primary-300 sm:flex-row sm:justify-between sm:text-start">
            <p>
              خدمة قانونية خاصة من شركة البركات للمحاماة — ليست الموقع الرسمي لسلطة العقبة الاقتصادية الخاصة
            </p>
            <a
              href={siteConfig.officialAsezaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-accent transition-colors hover:underline"
            >
              زيارة الموقع الرسمي لسلطة العقبة: aseza.jo ↗
            </a>
            <p className="whitespace-nowrap">© 2025 البركات للمحاماة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
