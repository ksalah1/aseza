"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open by default; pass null for all closed. */
  defaultOpen?: number | null;
  className?: string;
}

export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={cn("overflow-hidden rounded-xl border bg-white transition-all", isOpen ? "border-accent/40 border-s-4 border-s-accent" : "border-primary-100")}
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
  );
}
