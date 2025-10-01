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

  // 클라이언트 사이드 분석 함수
  const analyzePalmImage = async (file: File) => {
    try {
      // 파일을 ArrayBuffer로 읽기
      const arrayBuffer = await file.arrayBuffer();
      
      // 클라이언트 사이드에서 손금 분석 실행
      const analysisResult = analyzePalmLines(arrayBuffer, culturalContext, i18n.language);
      
      return {
        sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        analysis: analysisResult
      };
    } catch (error) {
      throw new Error('이미지 분석 중 오류가 발생했습니다.');
    }
  };

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
    setProgress(0);

    try {
      // 진행률 시뮬레이션
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // 클라이언트 사이드 분석 실행
      const result = await analyzePalmImage(file);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      // 결과 전달
      onAnalysisComplete(result.analysis);
      
      toast({
        title: t('analysisComplete'),
        description: t('analysisCompleteDesc'),
      });
    } catch (error) {
      setProgress(0);
      toast({
        title: t('analysisError'),
        description: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
        variant: "destructive",
      });
    }
  }, [culturalContext, onAnalysisComplete, onAnalysisStart, t, toast]);

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
                  {t('analyzingDesc')}
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