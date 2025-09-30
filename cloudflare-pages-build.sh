#!/bin/bash

# Cloudflare Pages 빌드 스크립트
echo "🚀 Cloudflare Pages 빌드 시작..."

# 클라이언트 빌드
echo "📦 클라이언트 빌드 중..."
cd client
npm install
npm run build

# 빌드 결과를 Pages 배포용으로 복사
echo "📁 빌드 결과 복사 중..."
cp -r dist/* ../dist/

echo "✅ 빌드 완료!"
