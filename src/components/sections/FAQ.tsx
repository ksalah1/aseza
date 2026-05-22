"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";
import { cn } from "@/lib/utils";

type Item = { question: string; answer: string };

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Item[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section width="narrow" background="muted">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </div>

      <div className="mt-10 space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-primary-100 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              >
                <span className="font-semibold text-primary">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-accent transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 leading-relaxed text-primary-500">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-accent"
        >
          {t("readAll")}
          <ArrowRight className="size-4 flip-rtl" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
