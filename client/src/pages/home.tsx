import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileUpload } from "@/components/file-upload";
import { PalmAnalysisResult } from "@/components/palm-analysis-result";
import { AdSidebar } from "@/components/ad-sidebar";
import { BottomAdBanner } from "@/components/bottom-ad-banner";
import { MiddleBannerAd } from "@/components/google-adsense";
import { CulturalContextSelector } from "@/components/cultural-context-selector";
import { LanguageSelector } from "@/components/language-selector";
import { UserFeedback } from "@/components/user-feedback";
import { SeoHead } from "@/components/seo-head";
import { StructuredData } from "@/components/structured-data";
import { detectCulturalContext } from "@/lib/cultural-detection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Heart, Brain, Activity, Star, Eye, Lightbulb, Shield, Sparkles } from "lucide-react";
import type { PalmAnalysisResult as PalmAnalysisType, CulturalContext } from "@shared/schema";

export default function Home() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [analysisResult, setAnalysisResult] = useState<PalmAnalysisType | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Cultural context state
  const [culturalContext, setCulturalContext] = useState<CulturalContext>(() => {
    const detected = detectCulturalContext();
    return detected.context;
  });
  const [autoDetected, setAutoDetected] = useState(() => {
    const detected = detectCulturalContext();
    return detected.autoDetected;
  });

  const handleAnalysisComplete = (result: PalmAnalysisType) => {
    setAnalysisResult(result);
    setIsAnalyzing(false);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAnalysisStart = () => {
    setIsAnalyzing(true);
    // Clear previous results immediately
    setAnalysisResult(null);
  };

  const startNewAnalysis = () => {
    setAnalysisResult(null);
    setIsAnalyzing(false);
    // Scroll back to upload section
    setTimeout(() => {
      document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContextChange = (newContext: CulturalContext) => {
    setCulturalContext(newContext);
    setAutoDetected(false); // Mark as manually changed
  };

  return (
    <div className="bg-gradient-to-b from-mystic-50 to-white dark:from-mystic-900 dark:to-mystic-800 transition-colors duration-300">
      <SeoHead />
      <StructuredData />
      {/* Ad Sidebar */}
      <AdSidebar />
      
      {/* Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-32 h-32 bg-mystic-purple/20 top-1/4 left-1/4"></div>
        <div className="floating-orb w-24 h-24 bg-mystic-blue/20 top-3/4 right-1/4" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-20 h-20 bg-mystic-gold/20 top-1/2 right-1/3" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 dark:bg-mystic-800/80 backdrop-blur-lg border-b border-mystic-200 dark:border-mystic-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-mystic-purple to-mystic-blue rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-mystic-purple dark:text-mystic-gold">
                  {t('siteName')}
                </h1>
                <p className="text-xs text-mystic-500 dark:text-mystic-400">
                  {t('siteTagline')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-lg bg-mystic-100 dark:bg-mystic-700 hover:bg-mystic-200 dark:hover:bg-mystic-600"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center mystical-gradient">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")' }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float mb-4 md:mb-8">
            <div className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-mystic-purple via-mystic-blue to-mystic-gold p-1">
              <div className="w-full h-full rounded-full bg-mystic-900 flex items-center justify-center">
                <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-mystic-gold animate-pulse" />
              </div>
            </div>
          </div>
          
          <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            {t('heroTitle')} <span className="text-mystic-gold">{t('heroSubtitle')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-mystic-100 mb-8 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToUpload}
              className="px-8 py-4 bg-mystic-gold hover:bg-yellow-500 text-mystic-900 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              {t('startReading')}
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const palmGuideSection = document.getElementById('palm-guide-section');
                palmGuideSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-white/90 text-white bg-black/20 hover:bg-white hover:text-mystic-purple font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-12 sm:py-20 bg-gradient-to-b from-mystic-50 to-white dark:from-mystic-800 dark:to-mystic-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-mystic-purple dark:text-mystic-gold mb-4 sm:mb-6">
              {t('uploadTitle')}
            </h2>
            <p className="text-base sm:text-lg text-mystic-600 dark:text-mystic-300 max-w-2xl mx-auto">
              {t('uploadDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Cultural Context Selector */}
            <CulturalContextSelector
              currentContext={culturalContext}
              autoDetected={autoDetected}
              onContextChange={handleContextChange}
            />

            <FileUpload 
              onAnalysisComplete={handleAnalysisComplete}
              onAnalysisStart={handleAnalysisStart}
              isAnalyzing={isAnalyzing}
              culturalContext={culturalContext}
              autoDetected={autoDetected}
            />

            {/* Google Ad Banner - Top */}
            <div className="mt-8 mb-6">
              <MiddleBannerAd />
            </div>

            {/* Upload Tips */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-white dark:bg-mystic-800 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-10 h-10 bg-mystic-purple/10 dark:bg-mystic-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <Sun className="w-5 h-5 text-mystic-purple dark:text-mystic-gold" />
                  </div>
                  <h4 className="font-semibold text-mystic-700 dark:text-mystic-200 mb-2 text-sm">
                    {t('goodLighting')}
                  </h4>
                  <p className="text-mystic-600 dark:text-mystic-400 text-xs">
                    {t('goodLightingDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-mystic-800 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-10 h-10 bg-mystic-blue/10 dark:bg-mystic-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-mystic-blue dark:text-mystic-gold" />
                  </div>
                  <h4 className="font-semibold text-mystic-700 dark:text-mystic-200 mb-2 text-sm">
                    {t('clearFocus')}
                  </h4>
                  <p className="text-mystic-600 dark:text-mystic-400 text-xs">
                    {t('clearFocusDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-mystic-800 shadow-lg">
                <CardContent className="p-4">
                  <div className="w-10 h-10 bg-mystic-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-mystic-gold" />
                  </div>
                  <h4 className="font-semibold text-mystic-700 dark:text-mystic-200 mb-2 text-sm">
                    {t('flatPosition')}
                  </h4>
                  <p className="text-mystic-600 dark:text-mystic-400 text-xs">
                    {t('flatPositionDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Palm Lines Guide Section */}
      <section id="palm-guide-section" className="py-8 sm:py-12 bg-mystic-100 dark:bg-mystic-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-mystic-purple dark:text-mystic-gold mb-3 sm:mb-6">
              {t('palmGuideTitle')}
            </h2>
            <p className="text-sm sm:text-lg text-mystic-600 dark:text-mystic-300 max-w-2xl mx-auto">
              {t('palmGuideDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Google Ad Banner - Before Palm Lines */}
            <div className="mb-8">
              <MiddleBannerAd />
            </div>

            {/* Palm Lines Explanations */}
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <Card className="bg-white dark:bg-mystic-900 shadow-lg border-l-4 border-mystic-purple">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-2">
                      <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-mystic-purple dark:text-mystic-gold mr-2" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-mystic-purple dark:text-mystic-gold">
                        {t('heartLine')}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-mystic-600 dark:text-mystic-300 mb-3">
                      {t('heartLineDesc')}
                    </p>
                    <ul className="text-xs sm:text-sm text-mystic-500 dark:text-mystic-400 space-y-1">
                      <li>• {t('heartLineTrait1')}</li>
                      <li>• {t('heartLineTrait2')}</li>
                      <li>• {t('heartLineTrait3')}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-mystic-900 shadow-lg border-l-4 border-mystic-blue">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-2">
                      <Brain className="w-4 sm:w-5 h-4 sm:h-5 text-mystic-blue dark:text-mystic-gold mr-2" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-mystic-blue dark:text-mystic-gold">
                        {t('headLine')}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-mystic-600 dark:text-mystic-300 mb-3">
                      {t('headLineDesc')}
                    </p>
                    <ul className="text-xs sm:text-sm text-mystic-500 dark:text-mystic-400 space-y-1">
                      <li>• {t('headLineTrait1')}</li>
                      <li>• {t('headLineTrait2')}</li>
                      <li>• {t('headLineTrait3')}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-mystic-900 shadow-lg border-l-4 border-mystic-gold">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-2">
                      <Activity className="w-4 sm:w-5 h-4 sm:h-5 text-mystic-gold mr-2" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-mystic-gold">
                        {t('lifeLine')}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-mystic-600 dark:text-mystic-300 mb-3">
                      {t('lifeLineDesc')}
                    </p>
                    <ul className="text-xs sm:text-sm text-mystic-500 dark:text-mystic-400 space-y-1">
                      <li>• {t('lifeLineTrait1')}</li>
                      <li>• {t('lifeLineTrait2')}</li>
                      <li>• {t('lifeLineTrait3')}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-mystic-900 shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 dark:text-mystic-gold mr-2" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-green-600 dark:text-mystic-gold">
                        {t('fateLine')}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-mystic-600 dark:text-mystic-300 mb-3">
                      {t('fateLineDesc')}
                    </p>
                    <ul className="text-xs sm:text-sm text-mystic-500 dark:text-mystic-400 space-y-1">
                      <li>• {t('fateLineTrait1')}</li>
                      <li>• {t('fateLineTrait2')}</li>
                      <li>• {t('fateLineTrait3')}</li>
                    </ul>
                  </CardContent>
                </Card>
            </div>

            {/* Google Ad Banner - After Palm Lines */}
            <div className="mt-8">
              <MiddleBannerAd />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {analysisResult && (
        <section id="results-section" className="py-10 md:py-20 bg-gradient-to-b from-white to-mystic-50 dark:from-mystic-900 dark:to-mystic-800">
          <PalmAnalysisResult result={analysisResult} onNewAnalysis={startNewAnalysis} />
        </section>
      )}

      {/* User Feedback Section - Only show when no analysis result */}
      {!analysisResult && (
        <section className="py-16 bg-mystic-50 dark:bg-mystic-800">
          <div className="container mx-auto px-4 text-center">
            <UserFeedback />
          </div>
        </section>
      )}



      {/* Footer - Add bottom padding for ad banner */}
      <footer className="bg-mystic-900 dark:bg-black text-white py-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-mystic-purple to-mystic-blue rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-mystic-gold">
                    {t('siteName')}
                  </h3>
                  <p className="text-mystic-300 text-sm">{t('siteTagline')}</p>
                </div>
              </div>
              <p className="text-mystic-300 mb-4 max-w-md">
                {t('footerDescription')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-mystic-gold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-mystic-300">
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('palmAnalysis')}</a></li>
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('fortuneReading')}</a></li>
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('palmGuide')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-mystic-gold mb-4">{t('support')}</h4>
              <ul className="space-y-2 text-mystic-300">
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('faq')}</a></li>
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('privacy')}</a></li>
                <li><a href="#" className="hover:text-mystic-gold transition-colors">{t('terms')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mystic-800 mt-8 pt-8 text-center">
            <p className="text-mystic-400 text-sm">© 2024 Palm Mystic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Bottom Ad Banner */}
      <BottomAdBanner />
    </div>
  );
}
