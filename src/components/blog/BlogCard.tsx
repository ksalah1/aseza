import { useTranslations } from "next-intl";
import { Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMeta }) {
  const t = useTranslations("blog");
  // Switch typeface to match the post's language.
  const fontClass = post.locale === "ar" ? "font-arabic" : "font-latin";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg",
        fontClass,
      )}
    >
      <Badge variant="gold" className="self-start">
        {t(`categories.${post.category}`)}
      </Badge>

      <h3 className="mt-4 text-lg font-bold text-primary">
        {/* Gold underline that grows on hover (confined to the text). */}
        <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
          {post.title}
        </span>
      </h3>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-primary-500">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center gap-3 text-xs text-primary-400">
        <time dateTime={post.date}>{formatDate(post.date, post.locale)}</time>
        <span aria-hidden>•</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden />
          {post.readingMinutes} {t("readingTime")}
        </span>
      </div>
    </Link>
  );
}
