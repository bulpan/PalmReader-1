import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Briefcase, Activity, User, Share, Download, Twitter } from "lucide-react";
import type { PalmAnalysisResult } from "@shared/schema";

interface PalmAnalysisResultProps {
  result: PalmAnalysisResult;
}

export function PalmAnalysisResult({ result }: PalmAnalysisResultProps) {
  const { t } = useTranslation();

  const shareOnTwitter = () => {
    const text = encodeURIComponent(t('shareText'));
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const downloadResult = () => {
    const content = `
${t('siteName')} - ${t('palmReadingResult')}

${t('overallReading')}:
${result.overall}

${t('loveLife')}:
${result.loveLife}

${t('career')}:
${result.career}

${t('health')}:
${result.health}

${t('personality')}:
${result.personality}

${t('confidence')}: ${result.confidence}%
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'palm-reading-result.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-mystic-purple dark:text-mystic-gold mb-6">
          {t('yourFortune')}
        </h2>
        <p className="text-lg text-mystic-600 dark:text-mystic-300">
          {t('fortuneDescription')}
        </p>
        <Badge variant="secondary" className="mt-4">
          {t('confidence')}: {result.confidence}%
        </Badge>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Overall Reading */}
        <Card className="bg-gradient-to-r from-mystic-purple to-mystic-blue p-8 text-white mb-8 shadow-2xl">
          <CardContent className="p-0">
            <h3 className="font-display text-2xl font-bold mb-4">{t('overallReading')}</h3>
            <p className="text-lg leading-relaxed">{result.overall}</p>
          </CardContent>
        </Card>

        {/* Detailed Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white dark:bg-mystic-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-mystic-700 dark:text-mystic-200">
                  {t('loveLife')}
                </h4>
              </div>
              <p className="text-mystic-600 dark:text-mystic-300 mb-3">{result.loveLife}</p>
              {result.lines.heartLine.present && (
                <div className="bg-mystic-50 dark:bg-mystic-700 p-3 rounded-lg">
                  <p className="text-sm text-mystic-500 dark:text-mystic-400">
                    <strong>{t('heartLineFeatures')}:</strong> {result.lines.heartLine.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-mystic-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-mystic-700 dark:text-mystic-200">
                  {t('career')}
                </h4>
              </div>
              <p className="text-mystic-600 dark:text-mystic-300 mb-3">{result.career}</p>
              {result.lines.fateLine.present && (
                <div className="bg-mystic-50 dark:bg-mystic-700 p-3 rounded-lg">
                  <p className="text-sm text-mystic-500 dark:text-mystic-400">
                    <strong>{t('fateLineFeatures')}:</strong> {result.lines.fateLine.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-mystic-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-mystic-700 dark:text-mystic-200">
                  {t('health')}
                </h4>
              </div>
              <p className="text-mystic-600 dark:text-mystic-300 mb-3">{result.health}</p>
              {result.lines.lifeLine.present && (
                <div className="bg-mystic-50 dark:bg-mystic-700 p-3 rounded-lg">
                  <p className="text-sm text-mystic-500 dark:text-mystic-400">
                    <strong>{t('lifeLineFeatures')}:</strong> {result.lines.lifeLine.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-mystic-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-mystic-700 dark:text-mystic-200">
                  {t('personality')}
                </h4>
              </div>
              <p className="text-mystic-600 dark:text-mystic-300 mb-3">{result.personality}</p>
              {result.lines.headLine.present && (
                <div className="bg-mystic-50 dark:bg-mystic-700 p-3 rounded-lg">
                  <p className="text-sm text-mystic-500 dark:text-mystic-400">
                    <strong>{t('headLineFeatures')}:</strong> {result.lines.headLine.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Share Results */}
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-mystic-700 dark:text-mystic-200 mb-6">
            {t('shareResults')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={shareOnTwitter}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
            <Button 
              onClick={downloadResult}
              className="px-6 py-3 bg-mystic-purple hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('saveResult')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
