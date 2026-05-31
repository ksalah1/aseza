"use client";

import { useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const SESSION_KEY = "citizen-banner-dismissed";

export function CitizenBanner() {
  const pathname = usePathname();
  const locale = useLocale();
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return true;
    return Boolean(sessionStorage.getItem(SESSION_KEY));
  });

  if (pathname !== "/" || dismissed) return null;

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  }

  return (
    <div
      className="relative border-b border-[#E5E7EB] bg-[#F3F4F6] px-6 py-2 text-center text-xs text-primary-600"
      role="alert"
    >
      <span>
        {locale === "ar"
          ? "خدمة استشارية لتجهيز ومتابعة معاملات ASEZA"
          : "Independent consulting support for ASEZA registration matters"}
      </span>
      <button
        type="button"
        onClick={dismiss}
        aria-label={locale === "ar" ? "إغلاق" : "Close"}
        className="absolute start-3 top-1/2 -translate-y-1/2 rounded p-1 text-primary-400 hover:text-primary"
      >
        ✕
      </button>
    </div>
  );
}
