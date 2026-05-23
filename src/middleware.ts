import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";
import { maintenancePage } from "@/lib/maintenance";

const { locales, defaultLocale } = routing;

// Site-wide maintenance switch. Set to `false` to bring the site back online.
// (A constant rather than an env var: Next does not reliably expose runtime
// env vars to the edge middleware in this version.)
const MAINTENANCE_MODE = true;

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // While offline, serve the maintenance page for every request with a 503 so
  // crawlers treat the downtime as temporary rather than de-indexing the site.
  if (MAINTENANCE_MODE) {
    return new NextResponse(maintenancePage(), {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Retry-After": "3600",
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  }

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
