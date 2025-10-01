// Cloudflare Pages Functions - SPA 라우팅 처리
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // 정적 파일 요청은 그대로 처리
  if (url.pathname.startsWith('/assets/') || 
      url.pathname.startsWith('/robots.txt') || 
      url.pathname.startsWith('/sitemap.xml') ||
      url.pathname === '/favicon.ico') {
    return next();
  }
  
  // 모든 다른 경로는 index.html로 리다이렉트
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: await context.env.ASSETS.fetch('/index.html').then(r => r.text())
  });
}
