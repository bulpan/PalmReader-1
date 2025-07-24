import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { PalmAnalysisResult } from "@shared/schema";

interface FileUploadProps {
  onAnalysisComplete: (result: PalmAnalysisResult) => void;
  onAnalysisStart: () => void;
  isAnalyzing: boolean;
}

export function FileUpload({ onAnalysisComplete, onAnalysisStart, isAnalyzing }: FileUploadProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);

  const analyzePalmMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('palmImage', file);
      formData.append('sessionId', `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
      
      const response = await apiRequest('POST', '/api/analyze-palm', formData);
      return await response.json();
    },
    onSuccess: (data) => {
      onAnalysisComplete(data.analysis);
      toast({
        title: t('analysisComplete'),
        description: t('analysisCompleteDesc'),
      });
    },
    onError: (error: Error) => {
      toast({
        title: t('analysisError'),
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: t('invalidFileType'),
        description: t('invalidFileTypeDesc'),
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: t('fileTooLarge'),
        description: t('fileTooLargeDesc'),
        variant: "destructive",
      });
      return;
    }

    // Clear previous results immediately when starting new analysis
    onAnalysisStart();
    
    // Simulate progress
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    analyzePalmMutation.mutate(file, {
      onSettled: () => {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => setProgress(0), 1000);
      }
    });
  }, [analyzePalmMutation, onAnalysisStart, toast, t]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    multiple: false,
    disabled: isAnalyzing
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mystical-border p-1 rounded-2xl mb-8">
        <Card 
          {...getRootProps()}
          className={`cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-mystic-purple dark:border-mystic-gold bg-mystic-50 dark:bg-mystic-700' 
              : 'border-dashed border-mystic-300 dark:border-mystic-600'
          } ${isAnalyzing ? 'pointer-events-none opacity-50' : 'hover:border-mystic-purple dark:hover:border-mystic-gold'}`}
        >
          <CardContent className="p-12 text-center">
            <input {...getInputProps()} />
            
            {isAnalyzing ? (
              <div className="space-y-4">
                <Loader2 className="w-16 h-16 mx-auto text-mystic-purple dark:text-mystic-gold animate-spin" />
                <h3 className="text-xl font-semibold text-mystic-700 dark:text-mystic-200">
                  {t('analyzing')}
                </h3>
                <p className="text-mystic-600 dark:text-mystic-400">
                  {t('analyzingDesc')}
                </p>
                {progress > 0 && (
                  <div className="max-w-xs mx-auto">
                    <Progress value={progress} className="w-full" />
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="w-16 h-16 mx-auto text-mystic-400 dark:text-mystic-500" />
                <h3 className="text-xl font-semibold text-mystic-700 dark:text-mystic-200">
                  {isDragActive ? t('dropHere') : t('uploadTitle')}
                </h3>
                <p className="text-mystic-500 dark:text-mystic-400 mb-4">
                  {t('uploadFormats')}
                </p>
                <Button 
                  className="px-6 py-3 bg-mystic-purple hover:bg-purple-700 text-white"
                  disabled={isAnalyzing}
                >
                  {t('selectFile')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
