import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  // Promote temporary (307) locale redirects to permanent (301) for SEO.
  if (response.status === 307) {
    const location = response.headers.get("location");
    if (location) {
      return NextResponse.redirect(location, { status: 301 });
    }
  }

  return response;
}

export const config = {
  // Match all paths except Next.js internals and static files.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
