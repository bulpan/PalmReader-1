import React from 'react';
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export function BottomAdBanner() {
  // 하단 광고 배너 전체 비활성화 (임시)
  return null;

  /*
  // 추후 재활성화 시 사용할 코드
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-mystic-800 border-t border-mystic-200 dark:border-mystic-700 shadow-lg">
      <div className="relative w-full h-24 flex items-center justify-center bg-gradient-to-r from-mystic-50 to-mystic-100 dark:from-mystic-800 dark:to-mystic-700">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 w-6 h-6 rounded-full bg-mystic-200 dark:bg-mystic-600 hover:bg-mystic-300 dark:hover:bg-mystic-500 z-10"
          data-testid="button-close-bottom-ad"
        >
          <X className="w-3 h-3" />
        </Button>
        
        <div 
          className="bottom-ad-container w-full px-4 py-2"
          style={{ 
            minWidth: '320px', 
            minHeight: '90px',
            width: '100%',
            display: 'block'
          }}
        >
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
        </div>
      </div>
    </div>
  );
  */
}