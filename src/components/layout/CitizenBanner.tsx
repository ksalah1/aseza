"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

const SESSION_KEY = "citizen-banner-dismissed";

export function CitizenBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) setVisible(true);
  }, [pathname]);

  if (!visible || pathname !== "/") return null;

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  return (
    <div
      className="relative border-b border-[#E5E7EB] bg-[#F3F4F6] px-6 py-2 text-center text-xs text-primary-600"
      role="alert"
    >
      <span>
        هل تبحث عن خدمات حكومية أو معاملات رسمية؟{" "}
        ←{" "}
        <a
          href={siteConfig.officialAsezaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline hover:text-accent"
        >
          زر الموقع الرسمي لسلطة العقبة: aseza.jo
        </a>
      </span>
      <button
        type="button"
        onClick={dismiss}
        aria-label="إغلاق"
        className="absolute start-3 top-1/2 -translate-y-1/2 rounded p-1 text-primary-400 hover:text-primary"
      >
        ✕
      </button>
    </div>
  );
}
