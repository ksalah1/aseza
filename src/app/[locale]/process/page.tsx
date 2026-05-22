import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CalendarClock, Check, Download, FileText } from "lucide-react";
import { Accordion, Button, Section } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "processPage.meta" });
  return buildMetadata({
    locale,
    path: "/process",
    title: t("title"),
    description: t("description"),
  });
}

type Step = {
  title: string;
  description: string;
  documents: string[];
  timeline: string;
};
type FaqItem = { question: string; answer: string };

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProcessContent />;
}

function ProcessContent() {
  const t = useTranslations("processPage");
  const steps = t.raw("steps") as Step[];
  const faqs = t.raw("faq.items") as FaqItem[];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-background">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-100">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Detailed steps */}
      <Section width="wide">
        <ol className="mx-auto max-w-3xl space-y-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-5 ps-2 md:gap-6"
            >
              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <span
                  className="absolute start-7 top-14 h-[calc(100%-2rem)] w-px bg-accent/30 md:start-8"
                  aria-hidden
                />
              )}
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-primary ring-4 ring-background md:size-14">
                {i + 1}
              </span>

              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <h2 className="text-xl font-bold text-primary md:text-2xl">
                    {step.title}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                    <CalendarClock className="size-3.5" aria-hidden />
                    {t("timelineLabel")}: {step.timeline}
                  </span>
                </div>

                <p className="mt-3 leading-relaxed text-primary-500">
                  {step.description}
                </p>

                {step.documents.length > 0 && (
                  <div className="mt-4 rounded-xl border border-primary-100 bg-white p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <FileText className="size-4 text-accent" aria-hidden />
                      {t("documentsLabel")}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {step.documents.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-2 text-sm text-primary-500"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Downloadable checklist CTA */}
      <Section width="default" background="muted" flush>
        <div className="my-12 flex flex-col items-center gap-5 rounded-2xl border border-accent/30 bg-white p-8 text-center md:flex-row md:justify-between md:text-start">
          <div>
            <h2 className="text-xl font-bold text-primary">
              {t("checklist.title")}
            </h2>
            <p className="mt-2 text-primary-500">{t("checklist.description")}</p>
          </div>
          <Button
            size="lg"
            icon={<Download className="size-5" />}
            className="shrink-0"
          >
            {t("checklist.button")}
          </Button>
        </div>
      </Section>

      {/* Process FAQ */}
      <Section width="narrow">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t("faq.title")}
          </h2>
        </div>
        <Accordion items={faqs} className="mt-10" />
      </Section>

      <CTABanner />
    </>
  );
}
