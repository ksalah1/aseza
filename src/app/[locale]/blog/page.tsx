import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts, toMeta } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return buildMetadata({
    locale,
    path: "/blog",
    title: `${t("title")} | ASEZA.co`,
    description: t("subtitle"),
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale).map(toMeta);

  return (
    <Section width="wide">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </header>

      <div className="mt-12">
        <BlogList posts={posts} />
      </div>
    </Section>
  );
}
