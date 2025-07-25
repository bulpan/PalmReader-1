import { useEffect, useState } from "react";

export function DebugAdsInfo() {
  const [debugInfo, setDebugInfo] = useState<string>("");

  useEffect(() => {
    const checkAdSense = () => {
      const info = [];
      
      // 1. 스크립트 로드 확인
      const adSenseScript = document.querySelector('script[src*="adsbygoogle.js"]');
      info.push(`애드센스 스크립트 로드: ${adSenseScript ? '✅' : '❌'}`);
      
      // 2. window.adsbygoogle 확인  
      info.push(`adsbygoogle 객체: ${typeof window.adsbygoogle !== 'undefined' ? '✅' : '❌'}`);
      
      // 3. 광고 컨테이너 확인
      const adContainers = document.querySelectorAll('.adsbygoogle');
      info.push(`광고 컨테이너 개수: ${adContainers.length}개`);
      
      // 4. 각 컨테이너 크기 확인
      adContainers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        info.push(`컨테이너 ${index + 1}: ${rect.width}x${rect.height}px`);
      });
      
      // 5. 현재 도메인
      info.push(`현재 도메인: ${window.location.hostname}`);
      
      setDebugInfo(info.join('\n'));
    };

    // 페이지 로드 후 3초 뒤에 체크
    const timer = setTimeout(checkAdSense, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null; // 프로덕션에서는 표시하지 않음
  }

  return (
    <div className="fixed top-4 left-4 bg-black text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <h4 className="font-bold mb-2">🔍 애드센스 디버그</h4>
      <pre className="whitespace-pre-wrap">{debugInfo}</pre>
    </div>
  );
}