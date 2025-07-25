import type { CulturalContext } from '@shared/schema';

// 지역별 문화권 매핑
const REGION_TO_CULTURE: Record<string, CulturalContext> = {
  // 서양 문화권
  'US': 'western', 'CA': 'western', 'GB': 'western', 'AU': 'western', 
  'NZ': 'western', 'DE': 'western', 'FR': 'western', 'IT': 'western',
  'ES': 'western', 'PT': 'western', 'NL': 'western', 'BE': 'western',
  'CH': 'western', 'AT': 'western', 'SE': 'western', 'NO': 'western',
  'DK': 'western', 'FI': 'western', 'IE': 'western', 'IS': 'western',
  
  // 동양 문화권
  'KR': 'eastern', 'CN': 'eastern', 'TW': 'eastern', 'HK': 'eastern',
  'MO': 'eastern', 'JP': 'eastern', 'MN': 'eastern', 'VN': 'eastern',
  
  // 인도 문화권
  'IN': 'indian', 'PK': 'indian', 'BD': 'indian', 'LK': 'indian',
  'NP': 'indian', 'BT': 'indian', 'MV': 'indian', 'AF': 'indian',
};

export function detectCulturalContext(): { context: CulturalContext; autoDetected: boolean } {
  try {
    // 1. 브라우저 언어 설정 확인
    const language = navigator.language.toLowerCase();
    
    if (language.startsWith('ko') || language.startsWith('zh') || language.startsWith('ja')) {
      return { context: 'eastern', autoDetected: true };
    }
    
    if (language.startsWith('hi') || language.startsWith('bn') || language.startsWith('ur')) {
      return { context: 'indian', autoDetected: true };
    }
    
    // 2. 시간대 기반 추정
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('Asia/Seoul') || timezone.includes('Asia/Shanghai') || 
        timezone.includes('Asia/Tokyo') || timezone.includes('Asia/Hong_Kong')) {
      return { context: 'eastern', autoDetected: true };
    }
    
    if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Dhaka') || 
        timezone.includes('Asia/Karachi') || timezone.includes('Asia/Colombo')) {
      return { context: 'indian', autoDetected: true };
    }
    
    // 3. 기본값은 서양 문화권
    return { context: 'western', autoDetected: true };
    
  } catch (error) {
    // 감지 실패시 기본값
    return { context: 'eastern', autoDetected: false };
  }
}

export function getCulturalDisplayName(context: CulturalContext): string {
  switch (context) {
    case 'western': return 'Western Palmistry';
    case 'eastern': return 'Eastern Palmistry';
    case 'indian': return 'Indian Palmistry';
    default: return 'Eastern Palmistry';
  }
}