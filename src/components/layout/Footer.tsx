import { getLocale, getTranslations } from "next-intl/server";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { phoneDisplay, phoneLink, whatsappLink, siteConfig } from "@/lib/site";

export async function Footer() {
  const locale = await getLocale();
  const tf = await getTranslations("footer");

  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Company Registration */}
          <div>
            <h2 className="font-semibold text-background">{tf("sections.registration")}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/register-business-in-aseza">{tf("col1.jordanian")}</Link></li>
              <li><Link href="/foreign-investors">{tf("col1.foreign")}</Link></li>
              <li><Link href="/import-export-company-aseza">{tf("col1.importExport")}</Link></li>
              <li><Link href="/aseza-registration-checklist">{tf("col1.checklist")}</Link></li>
              <li><Link href="/services/activity-review">{tf("col1.activityReview")}</Link></li>
              <li><Link href="/aseza-registration-fees">{tf("col1.fees")}</Link></li>
            </ul>
          </div>

          {/* Column 2 — Investor Guide */}
          <div>
            <h2 className="font-semibold text-background">{tf("sections.investorGuide")}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/why-aqaba">{tf("col2.whyAqaba")}</Link></li>
              <li><Link href="/tax-customs-aqaba">{tf("col2.taxCustoms")}</Link></li>
              <li><Link href="/restricted-prohibited-activities-aseza">{tf("col2.permitted")}</Link></li>
              <li><Link href="/permitted-activities-list">{tf("col2.permittedList")}</Link></li>
              <li><Link href="/labor-work-permits-aseza">{tf("col2.workPermits")}</Link></li>
              <li><Link href="/legal-references">{tf("col2.legalRefs")}</Link></li>
            </ul>
          </div>

          {/* Column 3 — After Registration */}
          <div>
            <h2 className="font-semibold text-background">{tf("sections.afterRegistration")}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/licensing-after-registration">{tf("col3.licensing")}</Link></li>
              <li><Link href="/annual-renewal-aseza">{tf("col3.renewal")}</Link></li>
              <li><Link href="/services/amend-existing-company">{tf("col3.amend")}</Link></li>
              <li><Link href="/services/renew-registration">{tf("col3.renewReg")}</Link></li>
              <li><Link href="/faq">{tf("col3.faq")}</Link></li>
            </ul>
          </div>

          {/* Column 4 — About the Firm */}
          <div>
            <h2 className="font-semibold text-background">{tf("sections.about")}</h2>
            <div className="mt-3 space-y-1 text-sm">
              <p className="font-semibold text-background">{tf("attorney.name")}</p>
              <p>{tf("attorney.title")}</p>
              <p>{tf("attorney.member")}</p>
              <p>{tf("attorney.memberNo")}</p>
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
                {tf("verifyLink")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-primary-700 pt-6">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-primary-300 sm:flex-row sm:justify-between sm:text-start">
            <p>{tf("bottomDisclaimer")}</p>
            <a
              href={siteConfig.officialAsezaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-accent transition-colors hover:underline"
            >
              {tf("bottomOfficialSite")}
            </a>
            <p className="whitespace-nowrap">{tf("bottomCopyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
