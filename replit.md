# Palm Mystic - 최종 프로젝트 요구사항 문서

## 프로젝트 개요

Palm Mystic은 AI 기술을 활용한 손금 분석 서비스로, 사용자가 손바닥 이미지를 업로드하면 전통 손금술을 기반으로 한 상세한 분석 결과를 제공하는 현대적인 웹 애플리케이션입니다. React 프론트엔드, Express 백엔드, PostgreSQL 데이터베이스 통합을 특징으로 하는 풀스택 아키텍처를 구현합니다.

## 사용자 선호사항

선호하는 의사소통 스타일: 간단하고 일상적인 언어 사용.

## 핵심 기능 요구사항

### 1. 다국어 지원 시스템
- **지원 언어**: 한국어(기본), 영어, 중국어, 일본어, 힌디어
- **실시간 언어 전환**: 분석 결과 포함 모든 콘텐츠 즉시 번역
- **문화권별 분석**: 서양, 동양, 인도 전통 손금술 각각의 언어별 지원
- **언어 선택기**: 명확한 시각적 구분과 호버 효과

### 2. 문화권별 손금 분석 시스템
- **서양 수상학**: 점성술, 심리학 기반 해석
- **동양 수상학**: 음양오행, 주역 기반 해석
- **인도 수상학**: 베다 점성학, 카르마 기반 해석
- **자동 감지**: 사용자 지역 기반 문화권 자동 선택
- **수동 전환**: 사용자가 원하는 문화권 선택 가능

### 3. 손금 분석 엔진
- **종합 분석**: 전체적인 운세 해석
- **세부 분석**: 사랑운, 사업운, 건강운, 성격 분석
- **손금선 분석**: 감정선, 두뇌선, 생명선, 운명선 개별 해석
- **신뢰도 표시**: 각 분석 결과의 신뢰도 점수 제공
- **맞춤형 해석**: 문화권과 언어에 따른 개별화된 결과

### 4. 사용자 피드백 및 관리 시스템
- **피드백 수집**: 사용자 의견 및 개선 요청 수집
- **관리자 패널**: 피드백 관리 및 상태 업데이트
- **보안 시스템**: 비밀번호 기반 관리자 인증
- **이메일 알림**: 피드백 상태 변경 시 자동 이메일 발송
- **데이터베이스 연동**: 실제 데이터 저장 및 조회

### 5. SEO 최적화 시스템
- **메타 태그**: 다국어 지원 title, description, keywords
- **소셜 미디어**: Open Graph, Twitter Cards 지원
- **구조화된 데이터**: Schema.org 표준 준수
- **검색엔진 최적화**: sitemap.xml, robots.txt 구성
- **다국어 SEO**: 각 언어별 최적화된 메타 정보

### 6. 모바일 최적화 및 접근성
- **반응형 디자인**: 모바일 우선 설계
- **다크/라이트 모드**: 자동 테마 전환 지원
- **드래그 앤 드롭**: 직관적인 이미지 업로드
- **접근성**: ARIA 라벨 및 키보드 네비게이션

## 기술 스택 및 아키텍처

### 프론트엔드
- **React 18**: TypeScript 기반 모던 프레임워크
- **Vite**: 빠른 개발 및 빌드 도구
- **shadcn/ui**: 접근성 우선 UI 컴포넌트
- **Tailwind CSS**: 유틸리티 우선 스타일링
- **i18next**: 국제화 및 다국어 지원
- **TanStack Query**: 서버 상태 관리
- **Wouter**: 경량 라우팅

### 백엔드
- **Express.js**: Node.js 웹 프레임워크
- **TypeScript**: 타입 안전성 보장
- **Multer**: 파일 업로드 처리
- **SendGrid**: 이메일 발송 서비스
- **세션 관리**: Express 세션 기반

### 데이터베이스
- **PostgreSQL**: Neon 서버리스 연결
- **Drizzle ORM**: 타입 안전 데이터베이스 조작
- **자동 마이그레이션**: 스키마 변경 자동 적용

## 보안 및 인증

### 관리자 시스템
- **비밀번호 인증**: ADMIN_PASSWORD 환경변수 기반
- **세션 관리**: 안전한 관리자 세션 유지
- **접근 제어**: robots.txt를 통한 관리자 페이지 차단

### 데이터 보호
- **환경변수**: 민감한 정보 안전 저장
- **HTTPS**: 프로덕션 환경 SSL 적용
- **데이터 검증**: Zod 스키마를 통한 입력 검증

## 배포 및 운영

### 배포 환경
- **Replit Autoscale**: 자동 확장 배포
- **환경 설정**: NODE_ENV, DATABASE_URL 자동 구성
- **정적 파일**: 최적화된 에셋 서빙

### 모니터링
- **로그 시스템**: 상세한 에러 추적
- **성능 최적화**: 이미지 압축 및 캐싱
- **상태 확인**: 데이터베이스 연결 모니터링

## 최종 완성된 기능 목록

✅ **다국어 완전 지원** (5개 언어)
✅ **문화권별 손금 분석** (서양/동양/인도)
✅ **실시간 언어 전환**
✅ **관리자 피드백 시스템**
✅ **보안 인증 시스템**
✅ **SEO 최적화 완료**
✅ **모바일 반응형 디자인**
✅ **다크/라이트 모드**
✅ **이미지 업로드 시스템**
✅ **데이터베이스 연동**
✅ **이메일 알림 시스템**
🔧 **구글 애드센스 광고 시스템** (실제 Publisher ID: ca-pub-5791689664896394) - 디버깅 중

## 애드센스 디버깅 과정 (2025.01.25)

### 발견된 문제
- "No slot size for availableWidth=0" 에러 지속 발생
- 컨테이너 크기는 정상 (402x106) 하지만 광고 표시 안됨
- 중복 광고 슬롯 로드 시도로 인한 충돌 의심

### 적용된 해결책
1. **중복 로드 방지**: 전역 Set으로 로드된 슬롯 추적
2. **숨겨진 요소 제거**: display:none인 광고 요소 DOM에서 완전 제거  
3. **지연 로딩**: DOM 완전 준비 후 2초 지연으로 광고 초기화
4. **가시성 검증**: getBoundingClientRect + getComputedStyle로 실제 가시성 확인
5. **개별 슬롯 처리**: 각 광고 위치별 최적화된 로딩 타이밍

### 구글 애드센스 통합 세부사항
- **Publisher ID**: ca-pub-5791689664896394 (실제 승인된 계정)
- **광고 슬롯**:
  - 하단 고정 배너: slot="2007004200" (사각형, 반응형)
  - 중간 배너 광고: slot="8793335020" (수평형, 반응형) 
  - 우측 스카이스크래퍼: slot="9858709531" (수직형, 반응형)
- **배치 위치**: 
  - 업로드 섹션, 손금 가이드 섹션, 분석 결과 페이지
  - 데스크톱 우측 사이드바, 하단 고정 영역
- **반응형 지원**: 모든 광고 단위가 모바일/데스크톱 자동 최적화

## 사용자 경험 플로우

1. **접속**: 다국어 랜딩 페이지 표시
2. **언어/문화권 선택**: 자동 감지 또는 수동 선택
3. **이미지 업로드**: 드래그앤드롭으로 손바닥 이미지 업로드
4. **분석 처리**: AI 기반 손금 분석 수행
5. **결과 표시**: 선택된 언어와 문화권에 맞는 상세 분석 결과
6. **피드백**: 사용자 의견 및 개선 요청 수집
7. **관리**: 관리자가 피드백 관리 및 응답

이 문서는 Palm Mystic 프로젝트의 모든 요구사항과 구현된 기능을 종합한 최종 명세서입니다.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite for bundling and development
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui components with Tailwind CSS for styling
- **State Management**: TanStack Query for server state management
- **Internationalization**: i18next for multi-language support (Korean, English, Chinese, Japanese)

### Directory Structure
```
├── client/              # Frontend React application
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
├── migrations/          # Database migration files
└── attached_assets/     # Static assets
```

## Key Components

### Frontend Architecture
- **React Router**: Uses wouter for lightweight client-side routing
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom mystical color palette
- **Theme System**: Dark/light mode support with CSS variables
- **File Upload**: Drag-and-drop interface with react-dropzone
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **File Processing**: Multer for handling image uploads with memory storage
- **Palm Analysis**: Simulated palm reading analysis based on traditional palmistry
- **Session Management**: Session-based tracking for palm readings
- **Storage Layer**: Abstracted storage interface with in-memory implementation

### Database Schema
- **Users Table**: Basic user authentication (username, password)
- **Palm Readings Table**: Stores uploaded images, analysis results, and session data
- **Type Safety**: Drizzle ORM with Zod validation for runtime type checking

## Data Flow

1. **Image Upload**: User uploads palm image via drag-and-drop interface
2. **Analysis Processing**: Server receives image, generates session ID, performs analysis
3. **Result Generation**: Palm analysis creates detailed reading based on traditional palmistry
4. **Data Persistence**: Reading results stored in database with session tracking
5. **Result Display**: Frontend displays comprehensive palm reading with sharing options

### Analysis Categories
- Overall reading and life outlook
- Love life and relationship patterns
- Career and professional prospects
- Health and vitality indicators
- Personality traits and characteristics
- Individual palm line interpretations (heart, head, life, fate lines)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-dropzone**: File upload functionality
- **i18next**: Internationalization framework
- **multer**: File upload middleware
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **drizzle-kit**: Database migration tool
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Hot module replacement for frontend development
- **Express Server**: Runs on development mode with detailed logging
- **Database**: Uses environment variable `DATABASE_URL` for PostgreSQL connection
- **File Storage**: In-memory storage for development (easily replaceable with persistent storage)

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Environment Variables**: Requires `DATABASE_URL` for database connectivity
- **Deployment Type**: **Autoscale** (not Static) - required for fullstack app with image upload and API functionality

### Deployment Configuration
The application uses the following deployment commands:
- **Build Command**: `npm run build` (builds frontend + backend)
- **Start Command**: `npm run start` (runs NODE_ENV=production node dist/index.js)
- **Port Configuration**: Uses environment variable PORT (default 5000)
- **Static Assets**: Served from dist/public in production mode

### Database Configuration
- **Database**: PostgreSQL with Neon serverless connection
- **Storage Strategy**: DatabaseStorage for production, MemStorage for development
- **Migration Command**: `npm run db:push` (using Drizzle Kit)
- **Tables**: users, palm_readings with proper foreign keys and constraints
- **Environment Variables**: DATABASE_URL automatically configured in deployment

### Key Configuration Files
- **vite.config.ts**: Frontend build configuration with path aliases
- **drizzle.config.ts**: Database configuration and migration setup
- **tsconfig.json**: TypeScript configuration for monorepo structure
- **tailwind.config.ts**: Styling configuration with custom theme

### Scaling Considerations
- Storage layer is abstracted and can be easily replaced with cloud storage
- Database schema supports horizontal scaling
- Static assets can be served from CDN
- API endpoints are stateless and can be load balanced

The application is designed for easy deployment on Replit with minimal configuration while maintaining the flexibility to scale to cloud providers when needed.