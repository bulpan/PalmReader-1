# Cloudflare Workers 배포 가이드

## 1. Workers 배포

### 필수 패키지 설치
```bash
cd workers
npm install
```

### 환경변수 설정 (Cloudflare Dashboard 또는 wrangler secret)
```bash
# 환경변수 설정
wrangler secret put DATABASE_URL
wrangler secret put ADMIN_PASSWORD  
wrangler secret put SENDGRID_API_KEY
```

### 배포 명령어
```bash
# 로컬 개발
wrangler dev

# 프로덕션 배포
wrangler deploy
```

## 2. Cloudflare Pages 배포

### 빌드 설정
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `client`

### 환경변수 설정
- VITE_API_URL: Workers API URL

### 커스텀 도메인 설정
- palm.carrera74.com → Cloudflare Pages 연결
- SSL/TLS: Full (strict)

## 3. 데이터베이스 마이그레이션

### 기존 데이터베이스 스키마 확인
```bash
# 스키마 푸시
npm run db:push
```

### 연결 테스트
```bash
# 데이터베이스 연결 확인
wrangler dev --local
```
