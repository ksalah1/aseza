"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, MessageCircle, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "process", href: "/#process" },
  { key: "blog", href: "/blog" },
  { key: "faq", href: "/#faq" },
  { key: "contact", href: "/#contact" },
] as const;

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
    // Keep the current path, swap the locale prefix.
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

function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DA851]"
    >
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </a>
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const td = useTranslations("disclaimer");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a subtle shadow once the user scrolls away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight only non-anchor links (Home, Blog) based on the path.
  function isActive(href: string) {
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow",
        scrolled ? "shadow-md" : "shadow-none",
      )}
    >
      {/* Persistent non-official disclaimer — visible on every page/viewport. */}
      <div className="bg-primary">
        <p className="mx-auto max-w-7xl px-6 py-1.5 text-center text-[11px] leading-tight text-accent-100 sm:text-xs">
          {td("short")}
        </p>
      </div>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive(href) ? "text-accent" : "text-primary-600",
                )}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <WhatsAppButton label="WhatsApp" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-primary lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile slide-down drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-primary-100 bg-background transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="space-y-1 px-6 py-4">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-primary-50",
                  isActive(href) ? "text-accent" : "text-primary-600",
                )}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-primary-100 px-6 py-4">
          <LanguageSwitcher onNavigate={() => setOpen(false)} />
          <WhatsAppButton label="WhatsApp" />
        </div>
      </div>
    </header>
  );
}
