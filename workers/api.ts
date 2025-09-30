// Cloudflare Workers API 핸들러
import { Hono } from 'hono';
import { cors } from 'hono/cors';
// import { storage } from './database'; // DB 연결 비활성화
import { analyzePalmLines, type CulturalContext } from './palm-analysis';
// import { sendEmail } from './sendgrid'; // 이메일 기능 비활성화
// import { insertUserFeedbackSchema } from './schema'; // 피드백 스키마 비활성화
import { logger, createErrorResponse, createSuccessResponse, validateFile } from './error-handler';
import { sessionManager } from './session-manager';

const app = new Hono();

// CORS 설정
app.use('*', cors({
  origin: ['https://palm.carrera74.com', 'https://*.pages.dev'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// 손금 분석 API
app.post('/api/analyze-palm', async (c) => {
  try {
    logger.info('손금 분석 요청 시작');
    
    const formData = await c.req.formData();
    const palmImage = formData.get('palmImage') as File;
    
    // 파일 검증
    const fileValidationError = validateFile(palmImage);
    if (fileValidationError) {
      logger.warn('파일 검증 실패', { error: fileValidationError });
      return c.json(createErrorResponse(fileValidationError, 400), 400);
    }

    const sessionId = formData.get('sessionId') as string || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const culturalContext = (formData.get('culturalContext') as CulturalContext) || 'eastern';
    const language = formData.get('language') as string || 'ko';
    
    // 문화권 타입 검증
    if (!['western', 'eastern', 'indian'].includes(culturalContext)) {
      return c.json({ message: "유효하지 않은 문화권입니다." }, 400);
    }

    // 언어 검증
    const allowedLanguages = ['ko', 'en', 'zh', 'ja', 'hi'];
    if (!allowedLanguages.includes(language)) {
      return c.json({ message: "지원되지 않는 언어입니다." }, 400);
    }
    
    // 이미지를 Buffer로 변환
    const imageBuffer = Buffer.from(await palmImage.arrayBuffer());
    
    // 세션 생성 또는 업데이트
    let session = sessionManager.getSession(sessionId);
    if (!session) {
      sessionId = sessionManager.createSession();
      logger.info('새 세션 생성', { sessionId });
    }

    // 손금 분석
    logger.info('손금 분석 시작', { sessionId, culturalContext, language });
    const analysisResult = analyzePalmLines(imageBuffer, culturalContext, language);
    
    // DB 저장 제거 - 결과만 반환
    // const palmReading = await storage.savePalmReading({
    //   sessionId,
    //   imageData: imageBuffer.toString('base64'),
    //   analysisResult,
    // });

    // 세션에 분석 결과 저장 (메모리만)
    sessionManager.updateSession(sessionId, {
      lastAnalysis: analysisResult,
      timestamp: new Date().toISOString()
    });

    logger.info('손금 분석 완료', { sessionId, confidence: analysisResult.confidence });

    return c.json(createSuccessResponse({
      sessionId,
      analysis: analysisResult
    }, '손금 분석이 완료되었습니다.'));
  } catch (error) {
    logger.error('손금 분석 중 오류 발생', error);
    return c.json(createErrorResponse("손금 분석 중 오류가 발생했습니다.", 500), 500);
  }
});

// 분석 결과 조회 API (메모리 기반)
app.get('/api/palm-reading/:sessionId', async (c) => {
  try {
    const sessionId = c.req.param('sessionId');
    logger.info('분석 결과 조회 요청', { sessionId });

    const session = sessionManager.getSession(sessionId);

    if (!session || !session.lastAnalysis) {
      logger.warn('분석 결과를 찾을 수 없음', { sessionId });
      return c.json(createErrorResponse("해당 세션의 분석 결과를 찾을 수 없습니다.", 404), 404);
    }

    logger.info('분석 결과 조회 성공', { sessionId });
    return c.json(createSuccessResponse({
      sessionId: sessionId,
      analysis: session.lastAnalysis,
      timestamp: session.timestamp
    }));
  } catch (error) {
    logger.error('분석 결과 조회 중 오류 발생', error);
    return c.json(createErrorResponse("분석 결과 조회 중 오류가 발생했습니다.", 500), 500);
  }
});

// 피드백 및 관리자 기능 비활성화
// app.post('/api/feedback', async (c) => {
//   // 피드백 기능 비활성화
// });

// app.post('/api/admin/login', async (c) => {
//   // 관리자 로그인 기능 비활성화
// });

// app.get('/api/admin/feedback', async (c) => {
//   // 관리자 피드백 조회 기능 비활성화
// });

// app.patch('/api/admin/feedback/:id', async (c) => {
//   // 관리자 피드백 업데이트 기능 비활성화
// });

export default app;
