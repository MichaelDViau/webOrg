import { NextResponse, type NextRequest } from "next/server";

/**
 * English pages live at unprefixed URLs (/services) but are rendered from app/[lang],
 * so those requests are rewritten to /en/…. Spanish and French URLs already carry
 * their prefix. /en/… is redirected to the unprefixed URL so each page has one address.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === "es" || first === "fr") return NextResponse.next();

  const url = request.nextUrl.clone();
  if (first === "en") {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next.js internals and anything that looks like a file (icons, images, robots.txt).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
