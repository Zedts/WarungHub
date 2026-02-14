import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const url = request.nextUrl.clone();
  url.pathname = "/";

  if (pathname === "/login") {
    url.searchParams.set("view", "login");
    return NextResponse.rewrite(url);
  }

  if (pathname === "/marketplace") {
    url.searchParams.set("view", "marketplace");
    return NextResponse.rewrite(url);
  }

  if (pathname === "/dashboard") {
    url.searchParams.set("view", "dashboard");
    return NextResponse.rewrite(url);
  }

  if (pathname === "/marketplace-demo") {
    url.searchParams.set("view", "marketplace-demo");
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/marketplace",
    "/marketplace-demo",
    "/dashboard",
  ],
};
