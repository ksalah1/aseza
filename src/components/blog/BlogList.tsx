"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BlogCard } from "./BlogCard";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import type { PostMeta } from "@/lib/mdx";
import { cn } from "@/lib/utils";

const TABS = ["all", ...BLOG_CATEGORIES] as const;

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const t = useTranslations("blog");
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? posts
      : posts.filter((post) => post.category === active);

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-primary text-background"
                : "bg-primary-50 text-primary-600 hover:bg-primary-100",
            )}
          >
            {cat === "all" ? t("allCategory") : t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-primary-400">{t("empty")}</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
