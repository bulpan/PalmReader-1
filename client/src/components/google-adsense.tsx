import { useEffect, useRef, useState } from "react";

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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className} style={{ width: "100%", minWidth: "320px", minHeight: "90px" }}>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: "block", 
          width: "100%", 
          height: "90px",
          ...style 
        }}
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
    <div style={{ width: "100%", minWidth: "320px", minHeight: "90px", padding: "8px" }}>
      <GoogleAd 
        slot="2007004200"
        className=""
        style={{ display: "block", width: "100%", height: "90px" }}
      />
    </div>
  );
}

// 중간 배너 광고 (수평형, 반응형)
export function MiddleBannerAd() {
  return (
    <div style={{ width: "100%", minWidth: "320px", minHeight: "90px", margin: "16px 0", padding: "8px" }}>
      <GoogleAd 
        slot="8793335020"
        className=""
        style={{ display: "block", width: "100%", height: "90px" }}
      />
    </div>
  );
}

// 우측 스카이스크래퍼 광고 (수직형, 반응형)
export function SidebarSkyscraperAd() {
  return (
    <div style={{ width: "100%", minWidth: "160px", minHeight: "600px", padding: "8px" }}>
      <GoogleAd 
        slot="9858709531"
        className=""
        style={{ display: "block", width: "100%", height: "600px" }}
      />
    </div>
  );
}