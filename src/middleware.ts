import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const { locales, defaultLocale } = routing;

/**
 * Pick a locale from the `Accept-Language` header.
 *
 * Rules (per product requirement):
 *   - If Arabic is the preferred supported language -> "ar"
 *   - Otherwise, if English is preferred            -> "en"
 *   - If a supported language can't be determined   -> "en"
 *   - If the header is missing entirely             -> defaultLocale ("ar")
 */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), quality: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (tag.startsWith("ar")) return "ar";
    if (tag.startsWith("en")) return "en";
  }

  return "en";
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass through requests that already target a supported locale.
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Redirect "/" (and any unprefixed path) to the detected locale.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
