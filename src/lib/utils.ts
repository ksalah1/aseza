import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names, resolving conflicts (later classes win).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date for blog posts in the active locale.
 *
 * Jordan uses the Gregorian calendar, so Arabic dates render Gregorian
 * months with Arabic numerals/labels (e.g. "٢٢ أيار ٢٠٢٦").
 */
export function formatDate(date: string | Date, locale: string = "ar"): string {
  const value = typeof date === "string" ? new Date(date) : date;

  if (Number.isNaN(value.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale === "ar" ? "ar-JO" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(value);
}
