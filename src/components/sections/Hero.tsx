import { useTranslations } from "next-intl";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");
  const trustItems = t.raw("trustItems") as string[];

  return (
    <section className="relative overflow-hidden bg-primary text-background">
      {/* Geometric pattern + glow (decorative) */}
      <div className="hero-pattern absolute inset-0" aria-hidden />
      <div className="hero-glow absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          <Sparkles className="size-4" aria-hidden />
          {t("badge")}
        </span>

        <h1 className="mt-8 text-balance text-4xl font-bold leading-[1.15] md:text-6xl">
          {t("title")}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-100 md:text-xl">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-lg font-semibold text-primary transition-colors hover:bg-accent-300 sm:w-auto"
          >
            {t("ctaPrimary")}
            <ArrowRight className="size-5 flip-rtl" aria-hidden />
          </Link>
          <Link
            href="/process"
            className="inline-flex w-full items-center justify-center rounded-lg border border-background/30 px-8 py-3.5 text-lg font-semibold text-background transition-colors hover:bg-background/10 sm:w-auto"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        {/* Trust bar */}
        <ul className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-100 sm:flex-row sm:flex-wrap">
          {trustItems.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Check className="size-4 shrink-0 text-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
