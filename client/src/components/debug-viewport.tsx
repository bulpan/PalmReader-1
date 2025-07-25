import { useEffect, useState } from "react";

export function DebugViewport() {
  const [viewportInfo, setViewportInfo] = useState<string>("");

  useEffect(() => {
    const updateViewportInfo = () => {
      const info = [
        `뷰포트: ${window.innerWidth}x${window.innerHeight}px`,
        `문서 크기: ${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}px`,
        `사용자 에이전트: ${navigator.userAgent.substring(0, 50)}...`,
        `현재 시간: ${new Date().toLocaleTimeString()}`
      ];
      setViewportInfo(info.join('\n'));
    };

    updateViewportInfo();
    window.addEventListener('resize', updateViewportInfo);
    
    return () => window.removeEventListener('resize', updateViewportInfo);
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-blue-900 text-white p-3 rounded-lg text-xs z-50 max-w-sm">
      <h4 className="font-bold mb-2">🔍 뷰포트 정보</h4>
      <pre className="whitespace-pre-wrap">{viewportInfo}</pre>
    </div>
  );
}