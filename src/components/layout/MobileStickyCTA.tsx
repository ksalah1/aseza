"use client";

import { useLocale } from "next-intl";
import { whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function MobileStickyCTA() {
  const isAr = useLocale() === "ar";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary-100 bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(15,42,74,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isAr ? "تواصل مع ASEZA.co عبر واتساب" : "Contact ASEZA.co via WhatsApp"}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
          onClick={() =>
            trackWhatsAppClick({
              location: "mobile_sticky",
              ctaText: isAr
                ? "تواصل معنا عبر واتساب"
                : "Contact us via WhatsApp",
              hasPrefill: false,
              locale: isAr ? "ar" : "en",
            })
          }
        >
          {isAr ? "تواصل معنا عبر واتساب" : "Contact us via WhatsApp"}
        </a>
      </div>
    </div>
  );
}
