import { useLocale } from "next-intl";
import { Mail, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig, phoneDisplay, phoneLink, whatsappLink } from "@/lib/site";

export function Footer() {
  const locale = useLocale();
  const ar = locale === "ar";
  const investorLinks = ar
    ? [
        ["المستثمر الأجنبي", "/foreign-investors"],
        ["دليل المستثمر الأجنبي", "/foreign-investor-guide-aqaba"],
        ["الاستيراد والتصدير", "/import-export-company-aseza"],
        ["الضرائب والجمارك", "/tax-customs-aqaba"],
        ["مراجعة النشاط", "/services/activity-review"],
        ["تواصل معنا", "/contact"],
      ]
    : [
        ["Foreign Investors", "/foreign-investors"],
        ["Import/Export in Aqaba", "/import-export-company-aseza"],
        ["Tax & Customs", "/tax-customs-aqaba"],
        ["Activity Review", "/services/activity-review"],
        ["Registration Checklist", "/aseza-registration-checklist"],
        ["Contact", "/contact"],
      ];

  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-semibold text-background">ASEZA.co</h2>
          <p className="mt-3 text-sm">{ar ? "خدمة قانونية خاصة من شركة البركات للمحاماة. ليست موقعاً حكومياً رسمياً." : "A private legal service by Al Barakat Law Firm. Not an official government website."}</p>
        </div>
        <div>
          <h2 className="font-semibold text-background">{ar ? "روابط المستثمر" : "Investor links"}</h2>
          <ul className="mt-3 space-y-2 text-sm">{investorLinks.map(([label, href]) => <li key={String(href)}><Link href={String(href)}>{String(label)}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="font-semibold text-background">{ar ? "التواصل" : "Contact"}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="size-4" /><a href={phoneLink()}>{phoneDisplay()}</a></li>
            <li className="flex items-center gap-2"><Mail className="size-4" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
