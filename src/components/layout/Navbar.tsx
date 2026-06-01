"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick, trackLanguageSwitch } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="text-xl font-bold text-primary">
      ASEZA<span className="text-accent">.</span>co
    </Link>
  );
}

function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();

  function switchTo(locale: string) {
    onNavigate?.();
    trackLanguageSwitch(activeLocale, locale);
    router.replace(pathname, { locale });
  }

  return (
    <div className="inline-flex items-center rounded-full border border-primary-200 p-0.5 text-sm font-semibold">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-pressed={activeLocale === locale}
          className={cn(
            "rounded-full px-3 py-1 uppercase transition-colors",
            activeLocale === locale
              ? "bg-primary text-background"
              : "text-primary-500 hover:text-primary",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}

interface DropdownPanelProps {
  items: readonly { label: string; href: string }[];
  onClose: () => void;
}

function DropdownPanel({ items, onClose }: DropdownPanelProps) {
  const pathname = usePathname();
  return (
    <ul className="min-w-[260px] overflow-hidden rounded-xl border border-primary-700 bg-primary py-1 shadow-xl">
      {items.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onClose}
            className={cn(
              "block px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/20 hover:text-accent",
              pathname.startsWith(href) ? "text-accent" : "",
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const tnav = useTranslations("nav");
  const locale = useLocale();
  const isAr = locale === "ar";
  const pathname = usePathname();

  const defaultWhatsAppMessage = isAr
    ? `مرحباً، أريد تسجيل شركة في ASEZA.
النشاط المطلوب:
هل الشركة جديدة أم قائمة؟
هل يوجد شركاء أجانب؟
هل النشاط استيراد/تصدير أو خدمات أو تصنيع؟`
    : "Hello, I want to register a company in ASEZA. Activity: New or existing company? Foreign partners? Import/export, services, or manufacturing?";

  const WHY_AQABA_ITEMS = isAr
    ? [
        {
          label: "مزايا الاستثمار (الضرائب والجمارك والموقع)",
          href: "/tax-customs-aqaba",
        },
        { label: "القطاعات المناسبة", href: "/why-aqaba" },
        {
          label: "الأنشطة: مسموحة / مقيدة / محظورة",
          href: "/restricted-prohibited-activities-aseza",
        },
        { label: "المراجع القانونية الرسمية", href: "/legal-references" },
      ]
    : [
        { label: "Tax & Customs Benefits", href: "/tax-customs-aqaba" },
        { label: "Suitable Sectors", href: "/why-aqaba" },
        {
          label: "Activities: Permitted / Restricted / Prohibited",
          href: "/restricted-prohibited-activities-aseza",
        },
        { label: "Official Legal References", href: "/legal-references" },
      ];

  const REGISTER_ITEMS = isAr
    ? [
        { label: "مستثمر أردني", href: "/register-business-in-aseza" },
        { label: "مستثمر أجنبي / فرع شركة", href: "/foreign-investors" },
        { label: "شركة استيراد وتصدير", href: "/import-export-company-aseza" },
        {
          label: "تعديل أو تجديد شركة مسجلة",
          href: "/existing-aseza-companies",
        },
        {
          label: "قائمة تجهيز التسجيل",
          href: "/aseza-registration-checklist",
        },
        { label: "رسوم التسجيل في ASEZA", href: "/aseza-registration-fees" },
      ]
    : [
        { label: "Jordanian Investor", href: "/register-business-in-aseza" },
        { label: "Foreign Investor / Branch", href: "/foreign-investors" },
        {
          label: "Import & Export Company",
          href: "/import-export-company-aseza",
        },
        {
          label: "Amend or Renew Registered Company",
          href: "/existing-aseza-companies",
        },
        {
          label: "Required Documents Checklist",
          href: "/aseza-registration-checklist",
        },
        { label: "ASEZA Registration Fees", href: "/aseza-registration-fees" },
      ];
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<
    "why" | "register" | null
  >(null);
  const [desktopDropdown, setDesktopDropdown] = useState<
    "why" | "register" | null
  >(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!desktopDropdown) return;
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [desktopDropdown]);

  useEffect(() => {
    return () => {
      if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    };
  }, []);

  function openDropdown(name: "why" | "register") {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDesktopDropdown(name);
  }

  function scheduleCloseDropdown() {
    dropdownTimer.current = setTimeout(() => setDesktopDropdown(null), 150);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const whyActive =
    isActive("/why-aqaba") ||
    isActive("/tax-customs-aqaba") ||
    isActive("/restricted-prohibited-activities-aseza") ||
    isActive("/legal-references");

  const registerActive =
    isActive("/register-business-in-aseza") ||
    isActive("/foreign-investors") ||
    isActive("/import-export-company-aseza") ||
    isActive("/existing-aseza-companies") ||
    isActive("/aseza-registration-checklist");

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow",
        scrolled ? "shadow-md" : "shadow-none",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 lg:flex">
          {/* Home */}
          <li>
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive("/") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("home")}
            </Link>
          </li>

          {/* Why Aqaba dropdown */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown("why")}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              onClick={() =>
                setDesktopDropdown((d) => (d === "why" ? null : "why"))
              }
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                whyActive ? "text-accent" : "text-primary-600",
              )}
              aria-expanded={desktopDropdown === "why"}
              aria-haspopup="true"
            >
              {tnav("benefits")}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  desktopDropdown === "why" && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {desktopDropdown === "why" && (
              <div
                className="absolute start-0 top-full z-50 mt-1"
                onMouseEnter={() => openDropdown("why")}
                onMouseLeave={scheduleCloseDropdown}
              >
                <DropdownPanel
                  items={WHY_AQABA_ITEMS}
                  onClose={() => setDesktopDropdown(null)}
                />
              </div>
            )}
          </li>

          {/* Register dropdown */}
          <li
            className="relative"
            onMouseEnter={() => openDropdown("register")}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              onClick={() =>
                setDesktopDropdown((d) =>
                  d === "register" ? null : "register",
                )
              }
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                registerActive ? "text-accent" : "text-primary-600",
              )}
              aria-expanded={desktopDropdown === "register"}
              aria-haspopup="true"
            >
              {tnav("process")}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  desktopDropdown === "register" && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {desktopDropdown === "register" && (
              <div
                className="absolute start-0 top-full z-50 mt-1"
                onMouseEnter={() => openDropdown("register")}
                onMouseLeave={scheduleCloseDropdown}
              >
                <DropdownPanel
                  items={REGISTER_ITEMS}
                  onClose={() => setDesktopDropdown(null)}
                />
              </div>
            )}
          </li>

          {/* Services */}
          <li>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive("/services") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("services")}
            </Link>
          </li>

          {/* FAQ */}
          <li>
            <Link
              href="/faq"
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive("/faq") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("faq")}
            </Link>
          </li>
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/about"
            className={cn(
              "text-xs font-medium transition-colors hover:text-accent",
              isActive("/about") ? "text-accent" : "text-primary-500",
            )}
          >
            {tnav("about")}
          </Link>
          <LanguageSwitcher />
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-accent-500"
            onClick={() =>
              trackWhatsAppClick({
                location: "nav_desktop",
                ctaText: tnav("whatsapp"),
                hasPrefill: true,
              })
            }
          >
            <MessageCircle className="size-4" aria-hidden />
            {tnav("whatsapp")}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-primary"
            aria-label={tnav("whatsapp")}
            onClick={() =>
              trackWhatsAppClick({
                location: "nav_mobile",
                ctaText: tnav("whatsapp"),
                hasPrefill: true,
              })
            }
          >
            <MessageCircle className="size-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="فتح القائمة"
            aria-expanded={mobileOpen}
            className="rounded-lg p-2 text-primary"
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-primary-100 bg-background transition-[max-height] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-[44rem]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          <li>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                isActive("/") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("home")}
            </Link>
          </li>

          {/* Why Aqaba */}
          <li>
            <button
              type="button"
              onClick={() =>
                setMobileDropdown((d) => (d === "why" ? null : "why"))
              }
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                whyActive ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("benefits")}
              <ChevronDown
                className={cn(
                  "size-5 transition-transform",
                  mobileDropdown === "why" && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {mobileDropdown === "why" && (
              <ul className="mt-1 space-y-1 rounded-xl bg-primary px-2 py-2">
                {WHY_AQABA_ITEMS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/20 hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Register */}
          <li>
            <button
              type="button"
              onClick={() =>
                setMobileDropdown((d) => (d === "register" ? null : "register"))
              }
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                registerActive ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("process")}
              <ChevronDown
                className={cn(
                  "size-5 transition-transform",
                  mobileDropdown === "register" && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            {mobileDropdown === "register" && (
              <ul className="mt-1 space-y-1 rounded-xl bg-primary px-2 py-2">
                {REGISTER_ITEMS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/20 hover:text-accent"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                isActive("/services") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("services")}
            </Link>
          </li>

          <li>
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                isActive("/faq") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("faq")}
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-50",
                isActive("/about") ? "text-accent" : "text-primary-600",
              )}
            >
              {tnav("about")}
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-3 border-t border-primary-100 px-4 py-4">
          <LanguageSwitcher onNavigate={() => setMobileOpen(false)} />
          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-primary"
            onClick={() =>
              trackWhatsAppClick({
                location: "nav_mobile",
                ctaText: tnav("whatsapp"),
                hasPrefill: true,
              })
            }
          >
            <MessageCircle className="size-4" aria-hidden />
            {tnav("whatsapp")}
          </a>
        </div>
      </div>
    </header>
  );
}
