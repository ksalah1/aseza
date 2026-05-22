import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Every locale the site supports.
  locales: ["ar", "en"],
  // Arabic is the primary audience for ASEZA registration services.
  defaultLocale: "ar",
  // Always show the locale in the URL (/ar/..., /en/...).
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
