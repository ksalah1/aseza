import type { MDXComponents } from "mdx/types";

// Required by @next/mdx for the App Router. Map MDX elements to custom
// components here as the blog grows (e.g. styled headings, links, images).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
