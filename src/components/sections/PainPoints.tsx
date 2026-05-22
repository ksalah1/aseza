import { useTranslations } from "next-intl";
import { Hourglass, Receipt, ShieldAlert, Workflow } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Section } from "@/components/ui";
import { cn } from "@/lib/utils";

type Item = { title: string; description: string };

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Workflow,
  Hourglass,
  Receipt,
  ShieldAlert,
];

export function PainPoints() {
  const t = useTranslations("pain");
  const items = t.raw("items") as Item[];

  return (
    <Section width="wide">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = ICONS[i] ?? ShieldAlert;
          return (
            <div
              key={item.title}
              className={cn(
                "rounded-2xl border border-red-100 bg-red-50/60 p-6",
                "transition-colors hover:border-red-200",
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
