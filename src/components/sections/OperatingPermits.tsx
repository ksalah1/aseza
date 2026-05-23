import { useTranslations } from "next-intl";
import { Section } from "@/components/ui";

export function OperatingPermits() {
  const t = useTranslations("operating");
  const items = t.raw("items") as string[];

  return (
    <Section width="default">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-primary-500">
          {t("body")}
        </p>
      </div>

      <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
