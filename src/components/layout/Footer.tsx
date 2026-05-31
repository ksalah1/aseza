import { getLocale } from "next-intl/server";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { phoneDisplay, phoneLink, whatsappLink } from "@/lib/site";

const arLinks = {
  registration: [
    ["الخدمات", "/services"],
    ["تسجيل شركة لأول مرة", "/services/register-new-business"],
    ["شركة أجنبية أو فرع أجنبي", "/services/register-foreign-branch"],
    ["مراجعة النشاط", "/services/activity-review"],
  ],
  after: [
    ["الترخيص بعد التسجيل", "/services/licensing-after-registration"],
    ["تعديل بيانات الشركة", "/services/amend-existing-company"],
    ["تجديد التسجيل", "/services/renew-registration"],
    ["الضرائب والجمارك", "/tax-customs-aqaba"],
  ],
} as const;

const enLinks = {
  registration: [
    ["Services", "/services"],
    ["New company registration", "/services/register-new-business"],
    ["Foreign company setup", "/services/register-foreign-branch"],
    ["Activity review", "/services/activity-review"],
  ],
  after: [
    ["Operating requirements", "/services/licensing-after-registration"],
    ["Company amendments", "/services/amend-existing-company"],
    ["Annual renewal", "/services/renew-registration"],
    ["Tax and customs", "/tax-customs-aqaba"],
  ],
} as const;

export async function Footer() {
  const locale = await getLocale();
  const isAr = locale === "ar";
  const links = isAr ? arLinks : enLinks;
  const contactMessage = isAr
    ? "أرغب في التحدث مع ASEZA.co حول تسجيل أو تشغيل شركة في العقبة."
    : "I would like to speak with ASEZA.co about company setup or operation in Aqaba.";

  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <FooterColumn
            title={isAr ? "خدمات التسجيل" : "Registration services"}
            links={links.registration}
          />
          <FooterColumn
            title={isAr ? "بعد التسجيل" : "After registration"}
            links={links.after}
          />
          <div>
            <h2 className="font-semibold text-background">
              {isAr ? "تواصل معنا" : "Contact"}
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={whatsappLink(contactMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                <span dir="ltr">+962 78 555 9253</span>
              </a>
              <a
                href={phoneLink()}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                <span dir="ltr">{phoneDisplay()}</span>
              </a>
              <Link
                href="/contact"
                className="block text-accent transition-colors hover:underline"
              >
                {isAr ? "صفحة التواصل" : "Contact page"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-700 pt-5 text-xs leading-6 text-primary-300">
          <p>
            {isAr
              ? "ASEZA.co خدمة استشارية مستقلة لمساعدة المستثمرين والشركات في تجهيز معاملات التسجيل والترخيص في منطقة العقبة الاقتصادية الخاصة. الموقع ليس تابعاً لسلطة منطقة العقبة الاقتصادية الخاصة."
              : "ASEZA.co is an independent consulting service helping investors and companies understand and prepare ASEZA registration and licensing matters. It is not affiliated with the Aqaba Special Economic Zone Authority. Published information is guidance only; final decisions and official fees remain with the competent authorities."}
          </p>
          <p className="mt-3">© {new Date().getFullYear()} ASEZA.co</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h2 className="font-semibold text-background">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-accent">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
