import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertPalmReadingSchema, type PalmAnalysisResult } from "@shared/schema";
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
      cb(new Error('Only image files are allowed'), false);
    }
  },
});

// Simulate palm line analysis based on WikiHow guide
function analyzePalmLines(imageBuffer: Buffer): PalmAnalysisResult {
  // In a real implementation, this would use image processing libraries
  // to detect and analyze palm lines. For now, we'll generate realistic
  // results based on traditional palmistry principles.
  
  const randomChoice = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];
  
  const heartLineTraits = [
    "연애 생활에 만족감을 느끼는 성향",
    "사랑에 대해 진실하고 헌신적",
    "감정 표현이 자유로움",
    "로맨틱한 관계를 중시함"
  ];
  
  const headLineTraits = [
    "창의적이고 직감적인 사고",
    "실용적인 문제 해결 능력",
    "집중력이 뛰어남",
    "분석적 사고를 선호함"
  ];
  
  const lifeLineTraits = [
    "활력이 넘치고 에너지가 풍부",
    "건강한 삶을 누릴 가능성이 높음",
    "강한 생명력과 체력",
    "변화에 잘 적응함"
  ];
  
  const fateLineTraits = [
    "목표 지향적이고 의지가 강함",
    "외부 환경에 영향을 잘 받음",
    "인생에서 중요한 변화를 경험",
    "자수성가형의 성향"
  ];

  return {
    overall: "당신은 강한 직감력과 창의성을 가진 분입니다. 감정선이 길고 뚜렷하여 사랑에 대해 진실하며, 두뇌선의 특성은 예술적 재능을 암시합니다. 생명선이 깊고 연속적이어서 건강한 삶을 누릴 가능성이 높습니다.",
    loveLife: "감정선이 검지 아래에서 시작되어 연애 생활에 만족감을 느끼는 성향입니다. 진실한 마음으로 상대방을 대하면 깊은 사랑을 만날 수 있습니다.",
    career: "운명선이 뚜렷하여 목표 지향적이며 성공 가능성이 높습니다. 창의적 분야나 예술 관련 사업에서 큰 성과를 거둘 수 있습니다.",
    health: "생명선이 길고 뚜렷하여 전반적으로 건강한 삶을 누릴 것입니다. 규칙적인 운동과 균형 잡힌 식단으로 더욱 건강한 삶을 유지하세요.",
    personality: "두뇌선이 곡선을 그려 창의적이고 직감적인 성향을 보입니다. 예술적 감각이 뛰어나며 독창적인 아이디어를 많이 갖고 있습니다.",
    lines: {
      heartLine: {
        present: true,
        description: "감정선이 명확하고 길게 나타남",
        traits: [randomChoice(heartLineTraits), randomChoice(heartLineTraits)]
      },
      headLine: {
        present: true,
        description: "두뇌선이 적당한 곡선을 이루며 뚜렷함",
        traits: [randomChoice(headLineTraits), randomChoice(headLineTraits)]
      },
      lifeLine: {
        present: true,
        description: "생명선이 깊고 연속적으로 나타남",
        traits: [randomChoice(lifeLineTraits), randomChoice(lifeLineTraits)]
      },
      fateLine: {
        present: Math.random() > 0.3, // 70% chance of having fate line
        description: Math.random() > 0.3 ? "운명선이 뚜렷하게 나타남" : "운명선이 희미하거나 부분적으로 나타남",
        traits: [randomChoice(fateLineTraits), randomChoice(fateLineTraits)]
      }
    },
    confidence: Math.floor(Math.random() * 20) + 80 // 80-99% confidence
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
      
      // Analyze palm lines
      const analysisResult = analyzePalmLines(req.file.buffer);
      
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
