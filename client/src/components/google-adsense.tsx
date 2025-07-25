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
    // DOM이 완전히 로드된 후 애드센스 실행
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error("Google AdSense error:", error);
      }
    }, 500); // 0.5초 지연

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className}>
      <ins 
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-5791689664896394"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

// 최하단 고정영역 광고 (사각형, 반응형) - 항상 보이므로 바로 로드
export function BottomFixedAd() {
  return (
    <GoogleAd 
      slot="2007004200"
      className="w-full"
      style={{ display: "block", minHeight: "90px" }}
    />
  );
}

// 중간 배너 광고 (수평형, 반응형) - 단순 버전
export function MiddleBannerAd() {
  return (
    <div className="w-full my-4">
      <GoogleAd 
        slot="8793335020"
        className="w-full"
        style={{ display: "block", minHeight: "90px" }}
      />
    </div>
  );
}

// 우측 스카이스크래퍼 광고 (수직형, 반응형) - 단순 버전
export function SidebarSkyscraperAd() {
  return (
    <div className="w-full">
      <GoogleAd 
        slot="9858709531"
        className="w-full"
        style={{ display: "block", minHeight: "600px" }}
      />
    </div>
  );
}