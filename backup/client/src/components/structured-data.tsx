import { useTranslation } from "react-i18next";

export function StructuredData() {
  const { t, i18n } = useTranslation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Palm Mystic",
    "url": "https://palm.carrera74.com",
    "description": t('seoDescription'),
    "applicationCategory": "Entertainment",
    "operatingSystem": "Web Browser",
    "inLanguage": [
      { "@type": "Language", "name": "Korean", "alternateName": "ko" },
      { "@type": "Language", "name": "English", "alternateName": "en" },
      { "@type": "Language", "name": "Chinese", "alternateName": "zh" },
      { "@type": "Language", "name": "Japanese", "alternateName": "ja" },
      { "@type": "Language", "name": "Hindi", "alternateName": "hi" }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "KRW",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "Palm Mystic",
      "url": "https://palm.carrera74.com"
    },
    "featureList": [
      "AI-powered palm reading analysis",
      "Multi-cultural palmistry traditions",
      "Real-time image analysis",
      "Multi-language support",
      "Free palmistry consultation"
    ],
    "screenshot": "https://palm.carrera74.com/og-image.png",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}