// Cloudflare Workers용 스토리지 어댑터
import { storage } from '../server/storage';

// Workers 환경에서는 기존 스토리지를 그대로 사용
export { storage };
