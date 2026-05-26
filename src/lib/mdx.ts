import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export { BLOG_CATEGORIES, type BlogCategory } from "./blog-categories";

/** Metadata for listing/cards (serializable — safe to pass to client). */
export interface PostMeta {
  slug: string;
  title: string;
  /** ISO date string (original publish date). */
  date: string;
  /** ISO date string of the last substantive revision, if the post has been refreshed. */
  updated?: string;
  /** Named author byline, if the post attributes one. */
  author?: string;
  category: string;
  excerpt: string;
  /** Estimated reading time in whole minutes. */
  readingMinutes: number;
  locale: string;
}

/** A full post, including the raw MDX body (frontmatter stripped). */
export interface Post extends PostMeta {
  content: string;
}

function localeDir(locale: string): string {
  return path.join(BLOG_DIR, locale);
}

/** All post slugs available for a locale. */
export function getPostSlugs(locale: string): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Read and parse a single post. Returns null if it doesn't exist. */
export function getPostBySlug(slug: string, locale: string): Post | null {
  const file = path.join(localeDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: data.date
      ? new Date(data.date).toISOString()
      : new Date().toISOString(),
    updated: data.updated ? new Date(data.updated).toISOString() : undefined,
    author: typeof data.author === "string" ? data.author : undefined,
    category: typeof data.category === "string" ? data.category : "registration",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    locale,
    content,
  };
}

/** All posts for a locale, newest first. */
export function getAllPosts(locale: string): Post[] {
  return getPostSlugs(locale)
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** All posts in a category for a locale, newest first. */
export function getPostsByCategory(category: string, locale: string): Post[] {
  return getAllPosts(locale).filter((post) => post.category === category);
}

/** Strip the body — useful when only metadata is needed (e.g. listing). */
export function toMeta(post: Post): PostMeta {
  const { content: _content, ...meta } = post;
  void _content;
  return meta;
}
