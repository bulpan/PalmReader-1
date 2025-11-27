import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SeoHead({ 
  title, 
  description, 
  keywords, 
  image = "https://palm.carrera74.com/og-image.png", 
  url = "https://palm.carrera74.com" 
}: SeoHeadProps) {
  const { t, i18n } = useTranslation();

  const seoData = {
    title: title || t('seoTitle', '손금 분석 AI - Palm Mystic | 무료 손금보기 운세'),
    description: description || t('seoDescription', 'AI 기술로 정확한 손금 분석을 받아보세요. 무료 손금보기, 사랑운, 재물운, 건강운을 즉시 확인하세요.'),
    keywords: keywords || t('seoKeywords', '손금보기, 손금 분석, AI 손금, 무료 운세, 사주, 타로, 점술, 손금술'),
  };

  useEffect(() => {
    // Update document title
    document.title = seoData.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seoData.description);
    }
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seoData.title);
    }
    
    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', seoData.description);
    }
    
    let twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Update html lang attribute
    document.documentElement.lang = i18n.language || 'ko';
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
    
  }, [seoData.title, seoData.description, seoData.keywords, image, url, i18n.language]);

  return null; // This component doesn't render anything
}