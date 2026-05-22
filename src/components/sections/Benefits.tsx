import { useTranslations } from "next-intl";
import { Gauge, GraduationCap, Headset, ScrollText } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Card, Section } from "@/components/ui";

type Item = { title: string; description: string };

// Speed, expertise, transparency, full support.
const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Gauge,
  GraduationCap,
  ScrollText,
  Headset,
];

export function Benefits() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as Item[];

  return (
    <Section id="services" width="wide" background="default">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = ICONS[i] ?? Gauge;
          return (
            <Card key={item.title} hoverable>
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-500">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
