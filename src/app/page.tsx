import { redirect } from 'next/navigation';

// 根路径 `/` 由 src/middleware.ts 拦截并重定向到默认语言 `/bg`。
// 此页面作为静态导出（output: 'export'）等无 middleware 场景的服务端兜底。
export default function RootPage() {
  redirect('/bg');
}