import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertPalmReadingSchema, insertUserFeedbackSchema, type PalmAnalysisResult, type CulturalContext, type InsertUserFeedback } from "@shared/schema";
import { getCulturalAnalysis, getHealthAnalysis, getPersonalityAnalysis, getLineDescription, getLineTraits } from "./cultural-analysis.js";
import { sendEmail } from "./sendgrid";
import { z } from "zod";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Analyze palm lines based on image characteristics and cultural context
function analyzePalmLines(imageBuffer: Buffer, culturalContext: CulturalContext = 'eastern', language: string = 'ko'): PalmAnalysisResult {
  // Generate unique characteristics based on image buffer
  // This creates consistent but varied results for different images
  const imageHash = imageBuffer.reduce((acc, byte, index) => (acc + byte * (index + 1)) % 1000000, 0);
  
  // Create deterministic variations based on image
  const imageRandom = (min: number, max: number) => (imageHash + min * 17 + max * 23) % (max - min + 1) + min;
  const imageChoice = <T>(array: T[], offset = 0) => array[(imageHash + offset * 31) % array.length];
  
  const heartLineTraits = [
    "연애 생활에 만족감을 느끼는 성향",
    "사랑에 대해 진실하고 헌신적",
    "감정 표현이 자유로움",
    "로맨틱한 관계를 중시함",
    "깊은 애정을 추구하는 성향",
    "관계에서 안정성을 중요시함",
    "정서적 유대감을 소중히 여김",
    "이상적인 사랑을 꿈꾸는 타입"
  ];
  
  const headLineTraits = [
    "창의적이고 직감적인 사고",
    "실용적인 문제 해결 능력",
    "집중력이 뛰어남",
    "분석적 사고를 선호함",
    "논리적이고 체계적인 사고",
    "독창적인 아이디어가 풍부함",
    "학습 능력이 뛰어남",
    "세밀한 계획을 세우는 것을 좋아함"
  ];
  
  const lifeLineTraits = [
    "활력이 넘치고 에너지가 풍부",
    "건강한 삶을 누릴 가능성이 높음",
    "강한 생명력과 체력",
    "변화에 잘 적응함",
    "자연 치유력이 강함",
    "스트레스 관리 능력이 뛰어남",
    "장수할 가능성이 높음",
    "활동적인 생활을 선호함"
  ];
  
  const fateLineTraits = [
    "목표 지향적이고 의지가 강함",
    "외부 환경에 영향을 잘 받음",
    "인생에서 중요한 변화를 경험",
    "자수성가형의 성향",
    "리더십 능력이 뛰어남",
    "도전을 두려워하지 않음",
    "운명적인 만남이 많음",
    "사회적 성공 가능성이 높음"
  ];

  // Get cultural analysis templates
  const culturalData = getCulturalAnalysis(culturalContext, language);
  const { overallTemplates, loveTemplates, careerTemplates } = culturalData;

  const hasFateLine = imageRandom(0, 10) > 3;
  const confidence = imageRandom(82, 97);
  const personalityType = imageHash % 4;

  // Enhanced health analysis based on cultural context and language
  const healthTemplates = getHealthAnalysis(culturalContext, language);
  const healthAnalysis = imageChoice(healthTemplates);

  return {
    overall: imageChoice(overallTemplates),
    loveLife: imageChoice(loveTemplates, 1),
    career: imageChoice(careerTemplates, 2),
    health: healthAnalysis,
    personality: getPersonalityAnalysis(personalityType, culturalContext, language),
    lines: {
      heartLine: {
        present: true,
        description: getLineDescription('heart', imageRandom(0, 3), language),
        traits: getLineTraits('heart', language, [3, 7].map(offset => (imageHash + offset * 31) % 8))
      },
      headLine: {
        present: true,
        description: getLineDescription('head', imageRandom(0, 3), language),
        traits: getLineTraits('head', language, [11, 13].map(offset => (imageHash + offset * 31) % 8))
      },
      lifeLine: {
        present: true,
        description: getLineDescription('life', imageRandom(0, 3), language),
        traits: getLineTraits('life', language, [17, 19].map(offset => (imageHash + offset * 31) % 8))
      },
      fateLine: {
        present: hasFateLine,
        description: getLineDescription('fate', hasFateLine ? imageRandom(0, 2) : imageRandom(2, 4), language),
        traits: getLineTraits('fate', language, [23, 29].map(offset => (imageHash + offset * 31) % 8))
      }
    },
    confidence,
    culturalContext,
    autoDetected: true
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Upload and analyze palm image
  app.post("/api/analyze-palm", upload.single('palmImage'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "이미지 파일이 필요합니다." });
      }

      const sessionId = req.body.sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Convert buffer to base64 for storage
      const imageData = req.file.buffer.toString('base64');
      
      // Get cultural context from request
      const culturalContext = (req.body.culturalContext as CulturalContext) || 'eastern';
      const autoDetected = req.body.autoDetected === 'true';
      
      // Get language from request
      const language = req.body.language || 'ko';
      
      // Analyze palm lines with cultural context and language
      const analysisResult = analyzePalmLines(req.file.buffer, culturalContext, language);
      analysisResult.autoDetected = autoDetected;
      
      // Save to storage
      const palmReading = await storage.savePalmReading({
        sessionId,
        imageData,
        analysisResult,
      });

      res.json({
        sessionId,
        analysis: analysisResult,
        readingId: palmReading.id
      });
    } catch (error) {
      console.error('Palm analysis error:', error);
      res.status(500).json({ message: "손금 분석 중 오류가 발생했습니다." });
    }
  });

  // Get previous analysis result
  app.get("/api/palm-reading/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const reading = await storage.getPalmReadingBySessionId(sessionId);
      
      if (!reading) {
        return res.status(404).json({ message: "해당 세션의 분석 결과를 찾을 수 없습니다." });
      }

      res.json({
        sessionId: reading.sessionId,
        analysis: reading.analysisResult,
        createdAt: reading.createdAt
      });
    } catch (error) {
      console.error('Get palm reading error:', error);
      res.status(500).json({ message: "분석 결과 조회 중 오류가 발생했습니다." });
    }
  });

  // User feedback routes
  app.post('/api/feedback', async (req, res) => {
    try {
      const validatedData = insertUserFeedbackSchema.parse(req.body);
      const result = await storage.createUserFeedback(validatedData);
      
      // Send email notification
      await sendEmail({
        to: "andipark2015@gmail.com",
        from: "noreply@palmmystic.com",
        subject: "새로운 피드백이 도착했습니다",
        html: `
          <h2>새로운 피드백</h2>
          <p><strong>이메일:</strong> ${result.email}</p>
          <p><strong>요청사항:</strong> ${result.request}</p>
          <p><strong>제출시간:</strong> ${new Date().toLocaleString('ko-KR')}</p>
        `
      });
      
      res.json(result);
    } catch (error) {
      console.error('Error creating feedback:', error);
      res.status(400).json({ error: 'Invalid feedback data' });
    }
  });

  // Admin feedback routes
  app.get('/api/admin/feedback', async (req, res) => {
    try {
      const feedbacks = await storage.getAllUserFeedback();
      res.json(feedbacks);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      res.status(500).json({ error: 'Failed to fetch feedback' });
    }
  });

  app.patch('/api/admin/feedback/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!['검토', '적용', '거절'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }

      const feedback = await storage.updateUserFeedbackStatus(id, status);
      
      // Send email if status is "적용"
      if (status === '적용' && feedback) {
        const emailSent = await sendEmail({
          to: feedback.email,
          from: 'andipark2015@gmail.com',
          subject: '당신의 요청사항이 반영되었습니다',
          text: feedback.request,
          html: `<p>${feedback.request.replace(/\n/g, '<br>')}</p>`
        });
        
        if (!emailSent) {
          console.error('Failed to send email notification');
        }
      }
      
      res.json(feedback);
    } catch (error) {
      console.error('Error updating feedback status:', error);
      res.status(500).json({ error: 'Failed to update feedback status' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
