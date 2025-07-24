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
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Analyze palm lines based on image characteristics
function analyzePalmLines(imageBuffer: Buffer): PalmAnalysisResult {
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

  const overallTemplates = [
    "당신은 강한 직감력과 창의성을 가진 분입니다. 감정선의 특성으로 보아 사랑에 대해 진실하며, 인생에서 의미 있는 관계들을 만들어갈 것입니다.",
    "균형잡힌 성격으로 주변 사람들에게 신뢰받는 분입니다. 생명선이 강하여 건강하고 활력 넘치는 삶을 살아갈 것으로 보입니다.",
    "예술적 감성과 논리적 사고를 모두 갖춘 조화로운 성격입니다. 두뇌선의 특성상 창의적인 분야에서 큰 성취를 이룰 가능성이 높습니다.",
    "타고난 리더십과 강한 의지력을 가진 분입니다. 운명선이 뚜렷하여 목표하는 바를 이루어낼 가능성이 매우 높습니다.",
    "따뜻한 마음과 깊은 사고력을 겸비한 분입니다. 감정선과 두뇌선의 조화로 인간관계에서도 성공할 것으로 보입니다.",
    "독립적이고 진취적인 성향을 가진 분입니다. 자신만의 길을 개척해 나가는 능력이 뛰어납니다.",
    "세심하고 배려심 깊은 성격으로 주변 사람들에게 큰 도움이 되는 분입니다. 치유와 봉사의 능력을 가지고 있습니다."
  ];

  const loveTemplates = [
    "감정선이 검지 아래에서 시작되어 연애에서 주도적인 역할을 하는 성향입니다. 진실한 마음으로 상대방을 대하면 깊은 사랑을 만날 수 있습니다.",
    "감정선의 길이와 깊이로 보아 사랑에 진지하고 헌신적인 모습을 보일 것입니다. 이상적인 파트너와의 만남이 기다리고 있습니다.",
    "로맨틱한 성향이 강하며 감정 표현이 풍부한 타입입니다. 상대방에 대한 배려심이 깊어 행복한 연애를 할 가능성이 높습니다.",
    "안정적이고 지속적인 관계를 선호하는 성향입니다. 한번 마음을 정하면 변하지 않는 진실한 사랑을 보여줄 것입니다.",
    "감정의 기복이 적고 균형잡힌 사랑을 추구합니다. 서로를 이해하고 존중하는 성숙한 관계를 만들어갈 것입니다.",
    "열정적이고 솔직한 사랑을 추구하는 타입입니다. 감정 표현이 자유롭고 상대방에게 진심을 전달하는 능력이 뛰어납니다."
  ];

  const careerTemplates = [
    "운명선이 뚜렷하여 목표 지향적이며 성공 가능성이 높습니다. 창의적 분야나 예술 관련 사업에서 큰 성과를 거둘 수 있습니다.",
    "리더십이 강하고 추진력이 뛰어나 조직에서 중요한 역할을 맡게 될 것입니다. 관리직이나 경영 분야에서 두각을 나타낼 수 있습니다.",
    "세밀하고 분석적인 사고력을 바탕으로 전문직에서 성공할 가능성이 높습니다. 지속적인 학습으로 더욱 발전할 수 있습니다.",
    "사람들과의 소통 능력이 뛰어나 서비스업이나 교육 분야에서 성공할 것입니다. 타인을 도우는 일에서 보람을 느낄 것입니다.",
    "창의적 아이디어가 풍부하여 새로운 분야 개척에 적합합니다. 혁신적인 사업이나 기술 분야에서 두각을 나타낼 수 있습니다.",
    "꼼꼼하고 책임감이 강하여 전문 기술직에서 성공할 가능성이 높습니다. 정확성을 요구하는 분야에서 뛰어난 능력을 발휘할 것입니다."
  ];

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
    confidence
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
