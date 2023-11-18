import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { DEFAULT_STORE, STORES } from "./constants";

const I18nMiddleware = createI18nMiddleware({
  locales: Object.keys(STORES),
  defaultLocale: DEFAULT_STORE,
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
