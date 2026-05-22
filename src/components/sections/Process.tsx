import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";

type Step = { title: string; description: string };

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <Section id="process" width="wide" background="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </div>

      <ol className="relative mx-auto mt-14 grid max-w-6xl gap-y-10 md:grid-cols-6 md:gap-x-4">
        {/* Connecting line (desktop only) */}
        <span
          className="absolute start-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-accent/30 md:inset-x-0 md:top-5 md:h-px md:w-full"
          aria-hidden
        />
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 md:flex-col md:gap-3">
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-base font-bold text-primary ring-4 ring-background">
              {i + 1}
            </span>
            <div className="md:pe-2">
              <h3 className="text-base font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-primary-500">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <Link
          href="/process"
          className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-accent"
        >
          {t("readMore")}
          <ArrowRight className="size-4 flip-rtl" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
