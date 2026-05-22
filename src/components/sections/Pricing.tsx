import { useTranslations } from "next-intl";
import { Check, Info } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";

export function Pricing() {
  const t = useTranslations("pricing");
  const features = t.raw("features") as string[];

  return (
    <Section id="pricing" background="default">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </div>

      <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-accent/30 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
          {t("planName")}
        </p>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-7xl font-bold text-accent">{t("price")}</span>
          <span className="text-xl font-medium text-primary-500">
            {t("currency")}
          </span>
        </div>
        <p className="text-center text-sm text-primary-400">{t("period")}</p>

        <p className="mt-8 text-sm font-semibold text-primary">
          {t("includedTitle")}
        </p>
        <ul className="mt-4 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-primary-600"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-8 block rounded-lg bg-primary px-6 py-3.5 text-center text-lg font-semibold text-background transition-colors hover:bg-accent hover:text-primary"
        >
          {t("cta")}
        </Link>

        {/* What's NOT included */}
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-primary-400">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            <span className="font-semibold text-primary-500">
              {t("notIncludedTitle")}:
            </span>{" "}
            {t("note")}
          </span>
        </p>
      </div>
    </Section>
  );
}
