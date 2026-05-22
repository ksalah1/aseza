import { useTranslations } from "next-intl";
import { BadgeCheck } from "lucide-react";
import { Divider, Section } from "@/components/ui";

type Item = { title: string; description: string };

export function Solution() {
  const t = useTranslations("solution");
  const items = t.raw("items") as Item[];

  return (
    <Section width="wide" className="bg-accent/5">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
        <Divider className="mt-6" />
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="text-center md:text-start">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <BadgeCheck className="size-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-primary">
              {item.title}
            </h3>
            <p className="mt-2 leading-relaxed text-primary-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
