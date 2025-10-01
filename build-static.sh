#!/bin/bash

echo "🚀 Cloudflare Pages 배포 시작..."

# 1. 의존성 설치
echo "📦 의존성 설치 중..."
npm install

# 2. 정적 빌드
echo "🏗️ 정적 사이트 빌드 중..."
npm run build

# 3. 빌드 결과 확인
echo "📊 빌드 결과:"
ls -la dist/public/

echo "✅ 정적 사이트 빌드 완료!"
echo "📁 빌드된 파일: dist/public/"
echo "🌐 Cloudflare Pages에 dist/public 폴더를 업로드하세요."
