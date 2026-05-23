import { useTranslations } from "next-intl";
import { Clock, Mail, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig, phoneDisplay, phoneLink } from "@/lib/site";
import type { ComponentType, SVGProps } from "react";

const QUICK_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/#services" },
  { key: "process", href: "/#process" },
  { key: "blog", href: "/blog" },
  { key: "faq", href: "/#faq" },
  { key: "contact", href: "/#contact" },
] as const;

// Brand glyphs aren't shipped by the installed lucide version, so inline them.
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.36.47 2.43.05 1.07.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77c-.55.55-1.11.9-1.77 1.15-.64.25-1.36.42-2.43.47-1.07.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.25-.66.6-1.22 1.15-1.77.55-.55 1.11-.9 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.31.88-.35 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.5.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.31 1.86.35 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.31-.88.35-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.5-.35-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.14-.88-.31-1.86-.35-1.05-.05-1.37-.06-4.04-.06Zm0 3.07a5.13 5.13 0 1 1 0 10.26 5.13 5.13 0 0 1 0-10.26Zm0 8.46a3.33 3.33 0 1 0 0-6.66 3.33 3.33 0 0 0 0 6.66Zm6.54-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const SOCIAL: {
  key: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { key: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { key: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { key: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-primary text-primary-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="text-2xl font-bold text-background">
            ASEZA<span className="text-accent">.</span>co
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-200">
            {t("tagline")}
          </p>
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-background">
              {t("followUs")}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="rounded-full border border-primary-500 p-2 text-primary-100 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label={t("quickLinksTitle")}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-background">
            {t("quickLinksTitle")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {QUICK_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-primary-200 transition-colors hover:text-accent"
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-background">
            {t("contactTitle")}
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary-200 transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden
              />
              <a
                href={phoneLink()}
                dir="ltr"
                className="whitespace-nowrap text-primary-200 transition-colors hover:text-accent"
              >
                {phoneDisplay()}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden
              />
              <span className="text-primary-200">{t("hours")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — copyright in both languages */}
      <div className="border-t border-primary-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-primary-300 sm:flex-row">
          <span dir="rtl">© 2026 ASEZA.co — جميع الحقوق محفوظة.</span>
          <span dir="ltr">© 2026 ASEZA.co — All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
