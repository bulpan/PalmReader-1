import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface GoogleAdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function GoogleAd({ 
  slot, 
  format = "auto", 
  responsive = true, 
  style = { display: "block" },
  className = "" 
}: GoogleAdProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error("Google AdSense error:", error);
      }
    }, 100); // 100ms 지연으로 DOM이 완전히 렌더링된 후 실행

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className} style={{ minWidth: "320px", minHeight: "50px" }}>
      <ins 
        className="adsbygoogle"
        style={{ ...style, width: "100%", height: "auto" }}
        data-ad-client="ca-pub-5791689664896394"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// 최하단 고정영역 광고 (사각형, 반응형)
export function BottomFixedAd() {
  return (
    <div className="w-full min-h-[90px] bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
      <GoogleAd 
        slot="2007004200"
        className="w-full h-full"
        style={{ display: "block", minHeight: "90px", width: "100%" }}
      />
    </div>
  );
}

// 중간 배너 광고 (수평형, 반응형)
export function MiddleBannerAd() {
  return (
    <div className="w-full min-h-[90px] bg-gray-50 dark:bg-gray-800 rounded-lg p-2 my-4">
      <GoogleAd 
        slot="8793335020"
        className="w-full h-full"
        style={{ display: "block", minHeight: "90px", width: "100%" }}
      />
    </div>
  );
}

// 우측 스카이스크래퍼 광고 (수직형, 반응형)
export function SidebarSkyscraperAd() {
  return (
    <div className="w-full min-h-[600px] bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
      <GoogleAd 
        slot="9858709531"
        className="w-full h-full"
        style={{ display: "block", minHeight: "600px", width: "100%" }}
      />
    </div>
  );
}