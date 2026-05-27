import { useTranslations } from "next-intl";
import { CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  const t = useTranslations("hero");
  const td = useTranslations("disclaimer");

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

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base font-medium text-primary-100/95 md:text-lg">
          {t("reassurance")}
        </p>

        {/* Value framing — the figure itself lives in the Pricing section */}
        <div className="mt-10 inline-flex flex-col items-center rounded-2xl border border-accent/40 bg-accent/10 px-8 py-5">
          <span className="text-2xl font-bold text-accent md:text-3xl">
            {t("valueTitle")}
          </span>
          <span className="mt-1 text-sm font-medium text-accent-200">
            {t("valueSubtitle")}
          </span>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-200">
          <CheckCircle className="size-4 text-accent" aria-hidden />
          {t("trust")}
        </p>

        <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-2.5 text-xs text-primary-100 md:text-sm">
          {(t.raw("trustSignals") as string[]).map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-primary-200/30 bg-primary-900/20 px-3 py-1"
            >
              {signal}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-3 max-w-xl text-xs italic leading-relaxed text-primary-300">
          {td("short")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#1DA851] sm:w-auto"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("ctaPrimary")}
          </a>

          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-lg border border-primary-100/50 px-8 py-3.5 text-base font-semibold text-primary-100 transition-colors hover:bg-primary-100/10 sm:w-auto"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-primary-300">
          {td("long")}
        </p>

        <p className="mt-4">
          <a
            href="#contact"
            className="text-sm font-medium text-primary-100 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {t("contactLink")}
          </a>
        </p>
      </div>
    </section>
  );
}
