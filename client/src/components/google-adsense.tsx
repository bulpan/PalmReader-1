import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
    adsenseManager: {
      loadedSlots: Set<string>;
      isInitialized: boolean;
      loadAd: (slotId: string) => boolean;
      reset: () => void;
    };
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
    // 전역 애드센스 매니저 사용
    if (!window.adsenseManager) {
      console.warn('애드센스 매니저 없음, 기다리는 중...');
      return;
    }

    const timer = setTimeout(() => {
      // 이미 로드된 슬롯인지 확인
      if (window.adsenseManager.loadedSlots.has(slot)) {
        console.log(`📋 슬롯 ${slot} 이미 로드됨`);
        return;
      }

      // 현재 슬롯의 요소들 찾기
      const allSlotElements = document.querySelectorAll(`[data-ad-slot="${slot}"]`);
      const visibleElements: Element[] = [];
      const hiddenElements: Element[] = [];

      allSlotElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element as HTMLElement);
        
        // 가시성 검증
        const isVisible = rect.width > 0 && 
                         rect.height > 0 && 
                         computed.display !== 'none' && 
                         computed.visibility !== 'hidden';

        if (isVisible) {
          visibleElements.push(element);
          console.log(`👁️ 슬롯 ${slot}[${index}] 가시적: ${rect.width}x${rect.height}`);
        } else {
          hiddenElements.push(element);
          console.log(`🚫 슬롯 ${slot}[${index}] 숨겨짐: ${rect.width}x${rect.height}`);
        }
      });

      // 숨겨진 요소들 제거
      hiddenElements.forEach((element) => {
        element.remove();
      });

      // 중복 요소들 제거 (첫 번째만 유지)
      if (visibleElements.length > 1) {
        console.warn(`⚠️ 슬롯 ${slot} 중복 ${visibleElements.length}개, 정리 필요`);
        visibleElements.slice(1).forEach((element) => {
          element.remove();
        });
      }

      // 정확히 1개의 가시적 요소가 있을 때만 로드
      if (visibleElements.length >= 1) {
        const success = window.adsenseManager.loadAd(slot);
        if (success) {
          console.log(`🎯 슬롯 ${slot} 성공적으로 로드됨`);
        }
      } else {
        console.log(`❌ 슬롯 ${slot} 가시적 요소 없음`);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [slot]);

  return (
    <div 
      className={className}
      style={{ 
        minWidth: '300px', 
        minHeight: '250px',
        width: '100%',
        display: 'block'
      }}
    >
      <ins 
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '250px',
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
    <GoogleAd 
      slot="2007004200"
      className="w-full"
      style={{ display: "block", minHeight: "90px" }}
    />
  );
}



// 우측 스카이스크래퍼 광고 (수직형, 반응형)
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