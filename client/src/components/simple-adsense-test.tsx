import { useEffect } from "react";

// 가장 단순한 테스트용 애드센스 컴포넌트
export function SimpleAdsenseTest() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5791689664896394';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      // 스크립트 제거는 하지 않음 (한 번만 로드)
    };
  }, []);

  return (
    <div style={{ 
      width: "320px", 
      height: "100px", 
      border: "1px solid red", 
      margin: "20px auto",
      padding: "10px"
    }}>
      <h3>애드센스 테스트</h3>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: "block",
          width: "320px",
          height: "100px"
        }}
        data-ad-client="ca-pub-5791689664896394"
        data-ad-slot="2007004200"
      />
    </div>
  );
}