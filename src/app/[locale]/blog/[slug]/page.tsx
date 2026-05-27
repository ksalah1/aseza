import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui";
import { BlogCard } from "@/components/blog/BlogCard";
import { Link } from "@/i18n/navigation";
import { siteConfig, firmName, whatsappLink } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import {
  getPostBySlug,
  getPostSlugs,
  getPostsByCategory,
  toMeta,
} from "@/lib/mdx";

const SITE_URL = siteConfig.url;

// Pre-render every post for the current locale.
export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return getPostSlugs(params.locale).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};

  const ogImage = `${SITE_URL}/og-image.png`;
  const firm = firmName(locale);
  const fullTitle = `${post.title} | ${firm}`;

  return {
    title: fullTitle,
    description: post.excerpt,
    // Slugs aren't 1:1 across locales, so canonical points to self only.
    alternates: { canonical: `${SITE_URL}/${locale}/blog/${slug}` },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      siteName: firm,
      locale: locale === "ar" ? "ar_JO" : "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

// Styled elements for the rendered MDX body (RTL-safe via logical props).
const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 text-2xl font-bold text-primary" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 text-xl font-semibold text-primary" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-4 leading-8 text-primary-600" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mt-4 list-disc space-y-2 ps-6 text-primary-600 marker:text-accent"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-4 list-decimal space-y-2 ps-6 text-primary-600 marker:text-accent"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-8" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="font-medium text-accent-600 underline" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-primary" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-6 border-s-4 border-accent bg-primary-50 px-5 py-3 text-primary-600"
      {...props}
    />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });

  const related = getPostsByCategory(post.category, locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map(toMeta);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: locale,
    mainEntityOfPage: `${SITE_URL}/${locale}/blog/${slug}`,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4 flip-rtl" aria-hidden />
        {t("backToBlog")}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        {/* Article */}
        <article className="min-w-0">
          <Badge variant="gold">{t(`categories.${post.category}`)}</Badge>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-primary-400">
            {post.author && (
              <>
                <span>
                  {t("byline")} {post.author}
                </span>
                <span aria-hidden>•</span>
              </>
            )}
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span aria-hidden>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-4" aria-hidden />
              {post.readingMinutes} {t("readingTime")}
            </span>
            {post.updated && (
              <>
                <span aria-hidden>•</span>
                <span>
                  {t("updatedOn")}{" "}
                  <time dateTime={post.updated}>
                    {formatDate(post.updated, locale)}
                  </time>
                </span>
              </>
            )}
          </div>

          <div className="mt-8">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>

        {/* Consultation CTA sidebar */}
        <aside className="lg:pt-2">
          <div className="sticky top-24 rounded-2xl border border-accent/30 bg-primary p-6 text-background">
            <h2 className="text-lg font-bold">{t("sidebar.title")}</h2>
            <p className="mt-2 text-sm text-primary-100">
              {t("sidebar.description")}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-4" aria-hidden />
              {t("sidebar.button")}
            </a>
          </div>
        </aside>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-primary-100 pt-12">
          <h2 className="text-2xl font-bold text-primary">
            {t("relatedTitle")}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
