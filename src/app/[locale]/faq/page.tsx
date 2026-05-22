import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Accordion, Section } from "@/components/ui";
import { CTABanner } from "@/components/sections";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faqPage.meta" });
  return buildMetadata({
    locale,
    path: "/faq",
    title: t("title"),
    description: t("description"),
  });
}

type FaqItem = { question: string; answer: string };
type FaqGroup = { category: string; items: FaqItem[] };

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FaqContent />;
}

function FaqContent() {
  const t = useTranslations("faqPage");
  const groups = t.raw("groups") as FaqGroup[];

  // FAQPage structured data — flatten every Q&A across groups.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <>
      <Section width="narrow">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
        </header>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 className="mb-4 text-xl font-bold text-primary">
                {group.category}
              </h2>
              <Accordion items={group.items} defaultOpen={null} />
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
