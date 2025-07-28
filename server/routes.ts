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
  // Enhanced image analysis for more precise differentiation
  const imageSize = imageBuffer.length;
  const firstBytes = Array.from(imageBuffer.slice(0, 100));
  const lastBytes = Array.from(imageBuffer.slice(-100));
  const middleBytes = Array.from(imageBuffer.slice(Math.floor(imageSize/2), Math.floor(imageSize/2) + 100));
  
  // Create multiple hash values for different characteristics
  const contentHash = firstBytes.reduce((acc, byte, i) => (acc + byte * (i + 1)) % 1000000, 0);
  const structureHash = middleBytes.reduce((acc, byte, i) => (acc + byte * (i + 7)) % 1000000, 0);
  const qualityHash = lastBytes.reduce((acc, byte, i) => (acc + byte * (i + 13)) % 1000000, 0);
  const combinedHash = (contentHash + structureHash * 2 + qualityHash * 3) % 1000000;
  
  // Simulate image analysis characteristics
  const brightness = (firstBytes.reduce((sum, byte) => sum + byte, 0) / firstBytes.length) / 255;
  const contrast = Math.abs(Math.max(...firstBytes) - Math.min(...firstBytes)) / 255;
  const complexity = new Set(middleBytes).size / 100; // Unique byte patterns
  
  // Advanced deterministic randomization with multiple seeds
  const advancedRandom = (min: number, max: number, seed: number = 0) => {
    const baseSeed = combinedHash + seed * 17 + min * 23 + max * 29;
    return Math.floor((baseSeed + brightness * 1000 + contrast * 2000 + complexity * 3000) % (max - min + 1)) + min;
  };
  
  const advancedChoice = <T>(array: T[], offset = 0) => {
    const index = (combinedHash + offset * 31 + Math.floor(brightness * 100) + Math.floor(contrast * 100)) % array.length;
    return array[index];
  };
  


  // Get cultural analysis templates
  const culturalData = getCulturalAnalysis(culturalContext, language);
  const { overallTemplates, loveTemplates, careerTemplates } = culturalData;

  // Image-specific characteristics that affect analysis
  const hasFateLine = advancedRandom(0, 10, 1) > (3 + Math.floor(contrast * 5)); // Contrast affects fate line presence
  const confidence = advancedRandom(82, 97, 2); // More variable confidence based on image quality
  const personalityType = Math.floor((combinedHash + Math.floor(complexity * 1000)) % 4);

  // Enhanced health analysis based on cultural context and language
  const healthTemplates = getHealthAnalysis(culturalContext, language);
  const healthAnalysis = advancedChoice(healthTemplates, 1);

  // More sophisticated line analysis based on image characteristics
  const heartLineVariant = advancedRandom(0, 3, 10);
  const headLineVariant = advancedRandom(0, 3, 20);
  const lifeLineVariant = advancedRandom(0, 3, 30);
  const fateLineVariant = hasFateLine ? advancedRandom(0, 2, 40) : advancedRandom(2, 4, 40);

  // Generate trait indices with more variation
  const generateTraitIndices = (base: number) => [
    advancedRandom(0, 7, base),
    advancedRandom(0, 7, base + 100)
  ];

  return {
    overall: advancedChoice(overallTemplates, 0),
    loveLife: advancedChoice(loveTemplates, 50),
    career: advancedChoice(careerTemplates, 100),
    health: healthAnalysis,
    personality: getPersonalityAnalysis(personalityType, culturalContext, language),
    lines: {
      heartLine: {
        present: true,
        description: getLineDescription('heart', heartLineVariant, language),
        traits: getLineTraits('heart', language, generateTraitIndices(200))
      },
      headLine: {
        present: true,
        description: getLineDescription('head', headLineVariant, language),
        traits: getLineTraits('head', language, generateTraitIndices(300))
      },
      lifeLine: {
        present: true,
        description: getLineDescription('life', lifeLineVariant, language),
        traits: getLineTraits('life', language, generateTraitIndices(400))
      },
      fateLine: {
        present: hasFateLine,
        description: getLineDescription('fate', fateLineVariant, language),
        traits: getLineTraits('fate', language, generateTraitIndices(500))
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

  // Admin login route
  app.post('/api/admin/login', async (req, res) => {
    try {
      const { password } = req.body;
      
      // Simple password check - in production, use environment variable
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      
      if (password === adminPassword) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } catch (error) {
      console.error('Error during admin login:', error);
      res.status(500).json({ error: 'Login failed' });
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
