// Kept separate from mdx.ts (which imports node:fs) so client components
// can import the category list without pulling Node APIs into the bundle.
export const BLOG_CATEGORIES = [
  "registration",
  "company-types",
  "documents",
  "compliance",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
