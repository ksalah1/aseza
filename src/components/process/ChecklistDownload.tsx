"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function ChecklistDownload() {
  const tc = useTranslations("processPage.checklist");

  return (
    <a
      href={whatsappLink("أرغب في الحصول على قائمة المستندات المطلوبة للتسجيل في ASEZA.")}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
    >
      <MessageCircle className="size-5" aria-hidden />
      {tc("button")}
    </a>
  );
}
