import { useTranslations } from "next-intl";
import { ArrowRight, Info, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";
import { whatsappLink } from "@/lib/site";


export function Pricing() {
  const t = useTranslations("pricing");

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

        <p className="mt-4 text-center text-base text-primary-500">{t("pricingContact")}</p>

        <p className="mt-8 text-sm font-semibold text-primary">
          {t("includedTitle")}
        </p>
        <p className="mt-3 leading-relaxed text-primary-600">
          {t("includedRef")}
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-center text-lg font-semibold text-white transition-colors hover:bg-[#1DA851]"
        >
          <MessageCircle className="size-5" aria-hidden />
          {t("cta")}
        </a>

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
