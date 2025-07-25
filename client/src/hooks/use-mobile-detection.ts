import { useState, useEffect } from 'react';

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent);
      const isIOSDevice = /iphone|ipad|ipod/i.test(userAgent);
      const isAndroidDevice = /android/i.test(userAgent);

      setIsMobile(isMobileDevice);
      setIsIOS(isIOSDevice);
      setIsAndroid(isAndroidDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isIOS, isAndroid };
}

export function shareContent(title: string, text: string, url: string) {
  if (navigator.share) {
    navigator.share({
      title,
      text,
      url
    }).catch(console.error);
  } else {
    // Fallback for desktop
    navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
  }
}