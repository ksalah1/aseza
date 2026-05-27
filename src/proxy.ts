import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const { locales, defaultLocale } = routing;

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pass through requests that already target a supported locale.
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Arabic is the primary audience, so "/" (and any unprefixed path)
  // resolves to the default locale rather than negotiating via headers.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
