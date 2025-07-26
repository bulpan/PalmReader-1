import React, { useEffect } from 'react';
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export function BottomAdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // 광고 로딩 비활성화 (임시)
  /*
  useEffect(() => {
    if (!isVisible) return;
    
    // 하단 광고만을 위한 별도 처리 (중복 방지)
    const bottomSlot = "2007004200";
    
    const timer = setTimeout(() => {
      // 하단 광고 슬롯이 이미 처리되었는지 확인
      const existingBottomAds = document.querySelectorAll(`[data-ad-slot="${bottomSlot}"]`);
      const processedAds = Array.from(existingBottomAds).filter(ad => 
        ad.innerHTML.trim().length > 0 || ad.getAttribute('data-ad-status') === 'filled'
      );

      if (processedAds.length > 0) {
        console.log('✅ 하단 광고 이미 로드됨, 스킵');
        return;
      }

      const adContainer = document.querySelector('.bottom-ad-container');
      if (adContainer) {
        const rect = adContainer.getBoundingClientRect();
        const computed = window.getComputedStyle(adContainer as HTMLElement);
        
        console.log('🔍 하단 광고 최종 검증:', {
          크기: `${rect.width}x${rect.height}`,
          가시성: computed.visibility,
          투명도: computed.opacity,
          Z인덱스: computed.zIndex
        });
        
        if (rect.width > 300 && rect.height > 50 && 
            computed.visibility !== 'hidden' && 
            parseFloat(computed.opacity) > 0) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log('🎯 하단 광고 로드 완료');
          } catch (error) {
            console.error("❌ 하단 광고 최종 에러:", error);
          }
        }
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isVisible]);
  */

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-mystic-800 border-t border-mystic-200 dark:border-mystic-700 shadow-lg">
      <div className="relative w-full h-24 flex items-center justify-center bg-gradient-to-r from-mystic-50 to-mystic-100 dark:from-mystic-800 dark:to-mystic-700">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 w-6 h-6 rounded-full bg-mystic-200 dark:bg-mystic-600 hover:bg-mystic-300 dark:hover:bg-mystic-500 z-10"
          data-testid="button-close-bottom-ad"
        >
          <X className="w-3 h-3" />
        </Button>

        {/* 해결책: 명시적 크기 지정 + 클래스 추가 */}
        <div 
          className="bottom-ad-container w-full px-4 py-2"
          style={{ 
            minWidth: '320px', 
            minHeight: '90px',
            width: '100%',
            display: 'block'
          }}
        >
          {/* 광고 임시 비활성화 */}
          <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center w-full h-full flex items-center justify-center">
            <div>
              <div className="text-lg font-bold text-gray-600 dark:text-gray-400">광고 위치</div>
              <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">하단 고정 광고 (비활성화됨)</div>
            </div>
          </div>
          {/*
          <ins 
            className="adsbygoogle"
            style={{ 
              display: 'block',
              width: '100%',
              minWidth: '320px',
              height: '90px'
            }}
            data-ad-client="ca-pub-5791689664896394"
            data-ad-slot="2007004200"
            data-ad-format="rectangle"
          />
          */}
        </div>
      </div>
    </div>
  );
}