import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Building2,
  Check,
  Info,
  User,
  Globe,
  Briefcase,
  X,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Accordion, Card, Section } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage.meta" });
  return buildMetadata({
    locale,
    path: "/services",
    title: t("title"),
    description: t("description"),
  });
}

type ComparisonRow = { factor: string; diy: string; withUs: string };
type BusinessType = { name: string; description: string };
type TimelineItem = { period: string; title: string; description: string };
type FaqItem = { question: string; answer: string };

const TYPE_ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Building2,
  User,
  Globe,
  Briefcase,
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations("servicesPage");
  const included = t.raw("pricing.included") as string[];
  const notIncluded = t.raw("pricing.notIncluded") as string[];
  const rows = t.raw("comparison.rows") as ComparisonRow[];
  const types = t.raw("businessTypes.items") as BusinessType[];
  const timeline = t.raw("timeline.items") as TimelineItem[];
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

      {/* Pricing breakdown */}
      <Section width="wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Included */}
          <Card accent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-accent">
                {t("pricing.includedTitle")}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-primary-600"
                >
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Not included */}
          <Card>
            <span className="text-4xl font-bold text-primary-400">
              {t("pricing.notIncludedTitle")}
            </span>
            <ul className="mt-5 space-y-3">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-primary-500"
                >
                  <X
                    className="mt-0.5 size-5 shrink-0 text-red-400"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 rounded-lg bg-primary-50 p-3 text-xs leading-relaxed text-primary-500">
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{t("pricing.note")}</span>
            </p>
          </Card>
        </div>
      </Section>

      {/* Comparison table */}
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t("comparison.title")}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {t("comparison.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-primary-100 bg-white">
          <table className="w-full text-start">
            <thead>
              <tr className="border-b border-primary-100 text-sm">
                <th className="p-4 text-start font-semibold text-primary">
                  {t("comparison.factorLabel")}
                </th>
                <th className="p-4 text-start font-semibold text-primary-500">
                  {t("comparison.diyLabel")}
                </th>
                <th className="bg-accent/10 p-4 text-start font-semibold text-accent-600">
                  {t("comparison.withUsLabel")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.factor}
                  className="border-b border-primary-100 last:border-0 align-top"
                >
                  <td className="p-4 font-medium text-primary">
                    {row.factor}
                  </td>
                  <td className="p-4 text-sm text-primary-500">
                    <span className="inline-flex items-start gap-2">
                      <X
                        className="mt-0.5 size-4 shrink-0 text-red-400"
                        aria-hidden
                      />
                      {row.diy}
                    </span>
                  </td>
                  <td className="bg-accent/5 p-4 text-sm text-primary-700">
                    <span className="inline-flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      {row.withUs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Business types */}
      <Section width="wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t("businessTypes.title")}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {t("businessTypes.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((type, i) => {
            const Icon = TYPE_ICONS[i] ?? Building2;
            return (
              <Card key={type.name} hoverable>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {type.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-500">
                  {type.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {t("timeline.title")}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {t("timeline.subtitle")}
          </p>
        </div>

        <ol className="relative mx-auto mt-12 grid max-w-5xl gap-y-8 md:grid-cols-4 md:gap-x-6">
          <span
            className="absolute start-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-accent/30 md:inset-x-0 md:top-5 md:h-px md:w-full"
            aria-hidden
          />
          {timeline.map((item) => (
            <li key={item.period} className="relative flex gap-4 md:flex-col">
              <span className="relative z-10 inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-accent px-4 text-sm font-bold text-primary ring-4 ring-primary-50">
                {item.period}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
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
