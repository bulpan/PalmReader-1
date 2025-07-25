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
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setHasInitialized(true);
        }
      } catch (error) {
        console.error("Google AdSense error:", error);
      }
    }
  }, [hasInitialized]);

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

// 중간 배너 광고 (수평형, 반응형) - Intersection Observer 사용
export function MiddleBannerAd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        });
      },
      {
        threshold: 0.1, // 10%가 보이면 로드
        rootMargin: '50px' // 50px 여유를 두고 미리 로드
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasLoaded]);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[90px] bg-gray-50 dark:bg-gray-800 rounded-lg p-2 my-4"
      style={{ minWidth: "320px" }}
    >
      {isVisible && (
        <GoogleAd 
          slot="8793335020"
          className="w-full h-full"
          style={{ display: "block", minHeight: "90px", width: "100%" }}
        />
      )}
      {!isVisible && (
        <div className="w-full h-[90px] flex items-center justify-center text-gray-400 text-sm">
          광고 로딩 중...
        </div>
      )}
    </div>
  );
}

// 우측 스카이스크래퍼 광고 (수직형, 반응형) - Intersection Observer 사용
export function SidebarSkyscraperAd() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasLoaded]);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[600px] bg-gray-50 dark:bg-gray-800 rounded-lg p-2"
      style={{ minWidth: "160px" }}
    >
      {isVisible && (
        <GoogleAd 
          slot="9858709531"
          className="w-full h-full"
          style={{ display: "block", minHeight: "600px", width: "100%" }}
        />
      )}
      {!isVisible && (
        <div className="w-full h-[600px] flex items-center justify-center text-gray-400 text-sm">
          <div className="text-center">
            <div>스카이스크래퍼</div>
            <div>광고 로딩 중...</div>
          </div>
        </div>
      )}
    </div>
  );
}