import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { analyzePalmLines, type PalmAnalysisResult, type CulturalContext } from "@/lib/palm-analysis-client";
import { extractPalmFeatures, type PalmFeatures } from "@/lib/palm-preprocess";

let palmMlModulePromise: Promise<typeof import("@/lib/palm-ml")> | null = null;
async function loadPalmMl() {
  if (!palmMlModulePromise) {
    palmMlModulePromise = import("@/lib/palm-ml");
  }
  return palmMlModulePromise;
}

interface FileUploadProps {
  onAnalysisComplete: (result: PalmAnalysisResult) => void;
  onAnalysisStart: () => void;
  isAnalyzing: boolean;
  culturalContext: CulturalContext;
  autoDetected: boolean;
}

export function FileUpload({ onAnalysisComplete, onAnalysisStart, isAnalyzing, culturalContext, autoDetected }: FileUploadProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // 파일 유효성 검사
    if (!file.type.startsWith('image/')) {
      toast({
        title: t('invalidFileType'),
        description: t('invalidFileTypeDesc'),
        variant: "destructive",
      });
      return;
    }

    // 파일 크기 검사 (10MB 제한)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: t('fileTooLarge'),
        description: t('fileTooLargeDesc'),
        variant: "destructive",
      });
      return;
    }

    onAnalysisStart();
    setProgress(5);
    setCurrentStep("파일 검증 중...");

    try {
      console.log("[분석] ✅ 파일 검증 완료");
      
      console.log("[분석] 이미지 전처리 시작...");
      setCurrentStep("이미지 전처리 중...");
      setProgress(10);
      
      const { features, buffer } = await extractPalmFeatures(file);
      console.log(`[분석] ✅ 이미지 전처리 완료 (라인 수: ${features.lineMetrics.totalLines})`);
      setProgress(50);

      setCurrentStep("TensorFlow.js 모듈 로딩 중...");
      console.log("[분석] TensorFlow.js 동적 로딩 시작");
      setProgress(60);
      const { inferPalmInsights } = await loadPalmMl();
      console.log("[분석] ✅ TensorFlow.js 모듈 로딩 완료");

      setCurrentStep("AI 인사이트 분석 중...");
      console.log("[분석] AI 인사이트 추론 시작");
      setProgress(75);
      const mlInsights = await inferPalmInsights(features);
      console.log("[분석] ✅ AI 인사이트 추론 완료");

      setCurrentStep("손금 분석 결과 생성 중...");
      console.log("[분석] 손금 분석 로직 실행");
      setProgress(90);
      const analysis = analyzePalmLines(buffer, culturalContext, i18n.language, features, mlInsights);
      analysis.autoDetected = autoDetected;
      console.log("[분석] ✅ 손금 분석 완료");

      setProgress(100);
      setCurrentStep("완료!");
      onAnalysisComplete(analysis);
      toast({
        title: t('analysisComplete'),
        description: t('analysisCompleteDesc'),
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      const errorStack = error instanceof Error ? error.stack : '';
      console.error(`[분석] ❌ 오류 발생: ${errorMessage}`);
      if (errorStack) {
        console.error(`[분석] 스택 트레이스: ${errorStack.substring(0, 200)}...`);
      }
      setProgress(0);
      setCurrentStep(`오류: ${errorMessage}`);
      toast({
        title: t('analysisError'),
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [autoDetected, culturalContext, onAnalysisComplete, onAnalysisStart, t, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp']
    },
    multiple: false,
    disabled: isAnalyzing
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300
            ${isDragActive 
              ? 'border-mystic-500 bg-mystic-50 dark:bg-mystic-900' 
              : 'border-mystic-300 hover:border-mystic-400 hover:bg-mystic-50/50 dark:hover:bg-mystic-900/50'
            }
            ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}
          `}
        >
          <input {...getInputProps()} />
          
          {isAnalyzing ? (
            <div className="space-y-4">
              <Loader2 className="h-12 w-12 text-mystic-500 animate-spin mx-auto" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mystic-700 dark:text-mystic-300">
                  {t('analyzing')}
                </h3>
                <p className="text-sm text-mystic-600 dark:text-mystic-400">
                  {currentStep || t('analyzingDesc')}
                </p>
                <Progress value={progress} className="w-full max-w-xs mx-auto" />
                <p className="text-xs text-mystic-500 dark:text-mystic-500">
                  {progress}%
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-12 w-12 text-mystic-500 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-mystic-700 dark:text-mystic-300">
                  {isDragActive ? t('dropFile') : t('uploadPalmImage')}
                </h3>
                <p className="text-sm text-mystic-600 dark:text-mystic-400">
                  {t('uploadDesc')}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  disabled={isAnalyzing}
                >
                  {t('selectFile')}
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* 파일 요구사항 */}
        <div className="mt-4 text-xs text-mystic-500 dark:text-mystic-500 text-center">
          <p>{t('fileRequirements')}</p>
          <p>{t('supportedFormats')}</p>
        </div>

      </CardContent>
    </Card>
  );
}