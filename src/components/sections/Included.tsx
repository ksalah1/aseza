import { useTranslations } from "next-intl";
import { ArrowRight, Check, Info } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";

export function Included() {
  const t = useTranslations("included");
  const items = t.raw("items") as string[];

  return (
    <Section id="services" width="wide" className="scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 text-primary-600"
          >
            <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-8 flex max-w-4xl items-start justify-center gap-2 text-center text-sm leading-relaxed text-primary-400">
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
        <span>{t("note")}</span>
      </p>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
        >
          {t("detailsCta")}
          <ArrowRight className="size-4 flip-rtl" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
