"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

export function MobileStickyCTA() {
  const isAr = useLocale() === "ar";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary-100 bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(15,42,74,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
        >
          {isAr ? "افحص نشاطك عبر واتساب" : "Check Activity on WhatsApp"}
        </a>
        <Link
          href="/services/activity-review"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary-200 px-3 py-2.5 text-sm font-semibold text-primary"
        >
          {isAr ? "نموذج المراجعة" : "Review Form"}
        </Link>
      </div>
    </div>
  );
}
