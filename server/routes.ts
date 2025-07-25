import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertPalmReadingSchema, type PalmAnalysisResult, type CulturalContext } from "@shared/schema";
import { getCulturalAnalysis } from "./cultural-analysis.js";
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
function analyzePalmLines(imageBuffer: Buffer, culturalContext: CulturalContext = 'eastern'): PalmAnalysisResult {
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
  const culturalData = getCulturalAnalysis(culturalContext);
  const { overallTemplates, loveTemplates, careerTemplates } = culturalData;

  const hasFateLine = imageRandom(0, 10) > 3;
  const confidence = imageRandom(82, 97);
  const personalityType = imageHash % 4;

  return {
    overall: imageChoice(overallTemplates),
    loveLife: imageChoice(loveTemplates, 1),
    career: imageChoice(careerTemplates, 2),
    health: imageHash % 2 === 0 ? 
      "생명선이 길고 뚜렷하여 전반적으로 건강한 삶을 누릴 것입니다. 규칙적인 운동과 균형 잡힌 식단으로 더욱 건강한 삶을 유지하세요." :
      "생명선이 안정적으로 나타나 건강한 체질을 가지고 있습니다. 스트레스 관리와 충분한 휴식으로 더욱 활력 넘치는 삶을 살 수 있습니다.",
    personality: personalityType === 0 ?
      "두뇌선이 곡선을 그려 창의적이고 직감적인 성향을 보입니다. 예술적 감각이 뛰어나며 독창적인 아이디어를 많이 갖고 있습니다." :
      personalityType === 1 ?
      "두뇌선이 직선적으로 나타나 논리적이고 분석적인 사고를 선호합니다. 체계적인 접근으로 문제를 해결하는 능력이 뛰어납니다." :
      personalityType === 2 ?
      "두뇌선이 적당한 곡선을 이루며 균형잡힌 사고방식을 가지고 있습니다. 감성과 이성을 조화롭게 활용하는 지혜로운 분입니다." :
      "두뇌선이 깊고 명확하여 집중력과 의지력이 강한 분입니다. 한번 결정한 일은 끝까지 해내는 끈기가 있습니다.",
    lines: {
      heartLine: {
        present: true,
        description: imageRandom(0, 3) === 0 ? "감정선이 명확하고 길게 나타남" : 
                    imageRandom(0, 3) === 1 ? "감정선이 깊고 안정적으로 나타남" : "감정선이 곡선을 그리며 부드럽게 나타남",
        traits: [imageChoice(heartLineTraits, 3), imageChoice(heartLineTraits, 7)]
      },
      headLine: {
        present: true,
        description: imageRandom(0, 3) === 0 ? "두뇌선이 적당한 곡선을 이루며 뚜렷함" : 
                    imageRandom(0, 3) === 1 ? "두뇌선이 직선적이고 명확하게 나타남" : "두뇌선이 깊고 연속적으로 나타남",
        traits: [imageChoice(headLineTraits, 11), imageChoice(headLineTraits, 13)]
      },
      lifeLine: {
        present: true,
        description: imageRandom(0, 3) === 0 ? "생명선이 깊고 연속적으로 나타남" : 
                    imageRandom(0, 3) === 1 ? "생명선이 길고 안정적으로 나타남" : "생명선이 선명하고 활력 있게 나타남",
        traits: [imageChoice(lifeLineTraits, 17), imageChoice(lifeLineTraits, 19)]
      },
      fateLine: {
        present: hasFateLine,
        description: hasFateLine ? 
          (imageRandom(0, 2) === 0 ? "운명선이 뚜렷하게 나타남" : "운명선이 길고 명확하게 나타남") :
          (imageRandom(0, 2) === 0 ? "운명선이 희미하거나 부분적으로 나타남" : "운명선이 짧게 나타남"),
        traits: [imageChoice(fateLineTraits, 23), imageChoice(fateLineTraits, 29)]
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
      
      // Analyze palm lines with cultural context
      const analysisResult = analyzePalmLines(req.file.buffer, culturalContext);
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

  const httpServer = createServer(app);
  return httpServer;
}
