// Cloudflare Workers용 에러 처리 및 로깅
export interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

export const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

export class Logger {
  private context: string;

  constructor(context: string = 'API') {
    this.context = context;
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}`;
    
    if (data) {
      return `${baseMessage} | Data: ${JSON.stringify(data)}`;
    }
    
    return baseMessage;
  }

  error(message: string, error?: Error | any): void {
    const errorData = error instanceof Error 
      ? { message: error.message, stack: error.stack }
      : error;
    
    console.error(this.formatMessage(LOG_LEVELS.ERROR, message, errorData));
  }

  warn(message: string, data?: any): void {
    console.warn(this.formatMessage(LOG_LEVELS.WARN, message, data));
  }

  info(message: string, data?: any): void {
    console.info(this.formatMessage(LOG_LEVELS.INFO, message, data));
  }

  debug(message: string, data?: any): void {
    console.debug(this.formatMessage(LOG_LEVELS.DEBUG, message, data));
  }
}

// 전역 로거 인스턴스
export const logger = new Logger('PalmMystic');

// 에러 응답 생성기
export function createErrorResponse(message: string, status: number = 500, details?: any) {
  return {
    error: true,
    message,
    status,
    timestamp: new Date().toISOString(),
    ...(details && { details })
  };
}

// API 응답 래퍼
export function createSuccessResponse(data: any, message?: string) {
  return {
    success: true,
    data,
    ...(message && { message }),
    timestamp: new Date().toISOString()
  };
}

// 요청 검증 헬퍼
export function validateRequest(data: any, requiredFields: string[]): string | null {
  for (const field of requiredFields) {
    if (!data || data[field] === undefined || data[field] === null || data[field] === '') {
      return `필수 필드가 누락되었습니다: ${field}`;
    }
  }
  return null;
}

// 파일 검증 헬퍼
export function validateFile(file: File, maxSize: number = 10 * 1024 * 1024, allowedTypes: string[] = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']): string | null {
  if (!file) {
    return '파일이 제공되지 않았습니다.';
  }

  if (file.size > maxSize) {
    return `파일 크기가 너무 큽니다. 최대 ${Math.round(maxSize / 1024 / 1024)}MB까지 허용됩니다.`;
  }

  if (!allowedTypes.includes(file.type)) {
    return `지원되지 않는 파일 형식입니다. 허용된 형식: ${allowedTypes.join(', ')}`;
  }

  return null;
}
