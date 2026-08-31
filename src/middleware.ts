import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 默认语言路由：无 locale 前缀的路径重定向到 /bg 对应路径
const locales = ['bg', 'en', 'zh'];
const defaultLocale = 'bg';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // 排除 Next 内部资源与所有带扩展名的静态文件（图片/svg/manifest/sw 等）
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
};
