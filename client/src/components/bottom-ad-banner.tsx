import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomAdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-mystic-800 border-t border-mystic-200 dark:border-mystic-700 shadow-lg">
      <div className="relative w-full h-20 flex items-center justify-center bg-gradient-to-r from-mystic-50 to-mystic-100 dark:from-mystic-800 dark:to-mystic-700">
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

        {/* Ad content */}
        <div className="flex items-center justify-center w-full h-full px-4">
          <div className="flex items-center space-x-2 sm:space-x-4 max-w-4xl w-full">
            {/* Ad Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-mystic-purple to-mystic-blue rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">AD</span>
            </div>
            
            {/* Ad Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-mystic-700 dark:text-mystic-200 truncate">
                🌟 무료 손금 분석을 더 많은 사람들과 공유하세요!
              </p>
              <p className="text-xs text-mystic-500 dark:text-mystic-400 hidden sm:block">
                친구들에게 추천하고 함께 운세를 확인해보세요
              </p>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="sm" 
              className="bg-mystic-gold hover:bg-yellow-500 text-mystic-900 font-semibold px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full flex-shrink-0"
              data-testid="button-share-app"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Palm Mystic',
                    text: '무료 AI 손금 분석 서비스',
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  // TODO: Show toast notification
                }
              }}
            >
              공유하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}