// Main function to get cultural analysis based on context and language
export function getCulturalAnalysis(context: CulturalContext, language: string = 'ko'): CulturalData {
  // Get base cultural content
  const culturalContent = CULTURAL_ANALYSIS[context];
  
  // If requesting the original language of the cultural content, return as-is
  if ((context === 'western' && language === 'en') || 
      ((context === 'eastern' || context === 'indian') && language === 'ko')) {
    return culturalContent;
  }
  
  // Otherwise translate to target language while preserving cultural methodology
  return translateCulturalContent(culturalContent, context, language);
}

function translateCulturalContent(content: CulturalData, context: CulturalContext, language: string): CulturalData {
  // For now, return original content - translation logic can be added later
  return content;
}

export function getHealthAnalysis(context: CulturalContext, language: string = 'ko'): string[] {
  if (language === 'ko') {
    return [
      "생명선이 길고 뚜렷하여 전반적으로 건강한 삶을 누릴 것입니다. 동양 수상학에서 이러한 생명선을 '장수지상(長壽之相)'이라 하여 매우 길한 것으로 봅니다.",
      "생명선이 안정적으로 나타나 건강한 체질을 가지고 있습니다. 동양 의학에서 말하는 기혈(氣血) 순환이 원활하여 몸의 균형이 잘 잡혀 있는 상태입니다."
    ];
  }
  
  if (language === 'en') {
    return [
      "Your well-defined life line curves gracefully around the Venus mount, indicating robust physical health and natural vitality. Western palmistry interprets this formation as a sign of strong constitution and excellent resistance to illness.",
      "Your life line shows excellent stability and strength, indicating a naturally healthy constitution with good recovery abilities. The line's clear formation suggests balanced energy levels and effective stress management capabilities."
    ];
  }
  
  return [
    "생명선이 길고 뚜렷하여 전반적으로 건강한 삶을 누릴 것입니다.",
    "생명선이 안정적으로 나타나 건강한 체질을 가지고 있습니다."
  ];
}

export function getPersonalityAnalysis(type: number, context: CulturalContext, language: string = 'ko'): string {
  const personalities: Record<string, string[]> = {
    ko: [
      "두뇌선이 우아한 곡선을 그려 창의적이고 직관적인 성향을 보여줍니다. 뛰어난 예술적 감각과 독창적인 아이디어를 많이 가지고 있습니다.",
      "두뇌선이 직선적으로 나타나 논리적이고 분석적인 사고를 선호함을 보여줍니다. 체계적인 문제 해결 방식에 뛰어납니다.",
      "두뇌선이 적당한 곡선을 이루어 균형 잡힌 사고 패턴을 보여줍니다. 감정과 이성을 조화롭게 활용하는 현명한 분입니다.",
      "두뇌선이 깊고 뚜렷하여 강한 집중력과 의지력을 나타냅니다. 한 번 결정한 일은 끝까지 해내는 끈기가 있습니다."
    ],
    en: [
      "Your head line curves gracefully, showing creative and intuitive tendencies. You possess excellent artistic sense and many original ideas.",
      "Your head line appears straight, indicating logical and analytical thinking preferences. You excel at systematic problem-solving approaches.",
      "Your head line forms a moderate curve, showing balanced thinking patterns. You wisely harmonize emotion and reason.",
      "Your head line is deep and clear, indicating strong concentration and willpower. You have the persistence to see things through to completion."
    ]
  };
  
  const languagePersonalities = personalities[language] || personalities['ko'];
  return languagePersonalities[type] || languagePersonalities[0];
}

export function getLineDescription(lineType: string, variation: number, language: string = 'ko'): string {
  const descriptions: Record<string, Record<string, string[]>> = {
    ko: {
      heart: [
        "감정선이 뚜렷하고 길게 나타납니다",
        "감정선이 깊고 안정적입니다",
        "감정선이 우아하고 부드럽게 굽어있습니다"
      ],
      head: [
        "두뇌선이 적당한 곡선을 이루며 뚜렷합니다",
        "두뇌선이 직선적이고 명확합니다",
        "두뇌선이 깊고 연속적입니다"
      ],
      life: [
        "생명선이 뚜렷하고 깊게 나타납니다",
        "생명선이 길고 우아하게 굽어있습니다",
        "생명선이 안정적이고 선명합니다"
      ],
      fate: [
        "운명선이 뚜렷하게 나타납니다",
        "운명선이 길고 명확합니다",
        "운명선이 흐리거나 부분적입니다",
        "운명선이 짧게 나타납니다"
      ]
    },
    en: {
      heart: [
        "Heart line appears clear and long",
        "Heart line is deep and stable", 
        "Heart line curves gracefully and softly"
      ],
      head: [
        "Head line forms a moderate curve and is distinct",
        "Head line is straight and clear",
        "Head line is deep and continuous"
      ],
      life: [
        "Life line appears distinct and deep",
        "Life line is long and curves gracefully",
        "Life line is stable and clear"
      ],
      fate: [
        "Fate line appears distinctly",
        "Fate line is long and clear",
        "Fate line is faint or partial",
        "Fate line appears short"
      ]
    }
  };
  
  const languageDescriptions = descriptions[language] || descriptions['ko'];
  return languageDescriptions[lineType]?.[variation] || languageDescriptions[lineType]?.[0] || "";
}

export function getLineTraits(lineType: string, language: string = 'ko', indices: number[]): string[] {
  const traits: Record<string, Record<string, string[]>> = {
    ko: {
      heart: [
        "만족스러운 애정생활 성향",
        "사랑에 진실하고 헌신적",
        "자유로운 감정 표현",
        "로맨틱한 관계를 중시",
        "깊은 애정을 추구",
        "관계에서 안정성을 중시",
        "감정적 유대를 소중히 여김",
        "이상적인 사랑을 꿈꿈"
      ],
      head: [
        "창의적이고 직관적인 사고",
        "실용적인 문제 해결 능력",
        "뛰어난 집중력",
        "분석적 사고를 선호",
        "논리적이고 체계적인 사고",
        "독창적인 아이디어가 풍부",
        "뛰어난 학습 능력",
        "세밀한 계획을 즐김"
      ],
      life: [
        "활력과 에너지가 넘침",
        "건강한 삶을 살 가능성이 높음",
        "강한 생명력과 체력",
        "변화에 잘 적응",
        "강한 자연 치유력",
        "뛰어난 스트레스 관리 능력",
        "장수할 가능성이 높음",
        "활동적인 생활을 선호"
      ],
      fate: [
        "목표 지향적이고 의지가 강함",
        "외부 환경의 영향을 잘 받음",
        "중요한 인생 변화를 경험",
        "자수성가형 성향",
        "뛰어난 리더십 능력",
        "도전을 두려워하지 않음",
        "운명적인 만남이 많음",
        "사회적 성공 가능성이 높음"
      ]
    },
    en: {
      heart: [
        "Satisfied love life tendency",
        "True and devoted to love",
        "Free emotional expression",
        "Values romantic relationships",
        "Seeks deep affection",
        "Values stability in relationships",
        "Cherishes emotional bonds",
        "Dreams of ideal love"
      ],
      head: [
        "Creative and intuitive thinking",
        "Practical problem-solving ability",
        "Excellent concentration",
        "Prefers analytical thinking",
        "Logical and systematic thinking",
        "Rich in original ideas",
        "Excellent learning ability",
        "Enjoys detailed planning"
      ],
      life: [
        "Full of vitality and energy",
        "High possibility of healthy living",
        "Strong life force and stamina",
        "Adapts well to changes",
        "Strong natural healing power",
        "Excellent stress management ability",
        "High possibility of longevity",
        "Prefers active lifestyle"
      ],
      fate: [
        "Goal-oriented with strong will",
        "Well influenced by external environment",
        "Experiences important life changes",
        "Self-made type tendency",
        "Excellent leadership ability",
        "Not afraid of challenges",
        "Many fateful encounters",
        "High possibility of social success"
      ]
    }
  };
  
  const languageTraits = traits[language] || traits['ko'];
  const lineTraits = languageTraits[lineType] || [];
  return indices.map(i => lineTraits[i % lineTraits.length] || "");
}
