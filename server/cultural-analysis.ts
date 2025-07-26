export type CulturalContext = 'western' | 'eastern' | 'indian';

export interface CulturalData {
  overallTemplates: string[];
  loveTemplates: string[];
  careerTemplates: string[];
}

// Cultural analysis data organized by tradition (methodology)
const CULTURAL_ANALYSIS: Record<CulturalContext, CulturalData> = {
  western: {
    overallTemplates: [
      "Your palmistry reveals fascinating personality traits rooted in Western palmistry traditions. The prominent heart line indicates you approach love with deep sincerity and emotional intelligence, suggesting an innate ability to form meaningful, deep relationships throughout your life journey. Your finger length and palm proportions reveal a naturally expressive personality with strong communication skills and leadership potential.",
      "Your palm shows the classic signs of a person destined for meaningful relationships and professional success. The clarity and depth of your lines indicate strong vital energy and natural resilience that will serve you well throughout life. Western palmistry interprets your hand formation as indicative of balanced emotional and intellectual capabilities, with particular strength in creative endeavors and interpersonal relationships."
    ],
    loveTemplates: [
      "Your heart line indicates you are naturally sincere and devoted in matters of love. You have the ability to form deep, lasting emotional bonds with your romantic partners, approaching relationships with both passion and wisdom.",
      "The formation of your heart line suggests you approach relationships with both passion and wisdom, creating meaningful connections that stand the test of time. Western palmistry sees this as a sign of emotional maturity and capacity for true partnership."
    ],
    careerTemplates: [
      "Your fate line indicates strong goal-oriented nature with excellent potential for professional success. You have natural leadership abilities that will serve you well in your career advancement, particularly in fields requiring both analytical thinking and creative problem-solving.",
      "The characteristics of your hand suggest you will excel in fields that require both creativity and analytical thinking. Western palmistry identifies your palm formation as suited for professional careers involving communication, leadership, or creative expression."
    ]
  },
  eastern: {
    overallTemplates: [
      "동양 수상학의 음양오행 원리에 따르면, 당신의 손금은 조화로운 성공적인 삶의 비범한 잠재력을 보여줍니다. 감정선의 흐름이 타고난 직감력과 창의성을 보여주며, 전통 동양 수상학에서는 예술적 재능과 영적 깨달음을 나타냅니다. 목성구를 향해 뻗은 감정선은 진실하고 순수한 사랑과 평생에 걸쳐 의미 있고 깊은 관계를 맺을 수 있는 능력을 보여줍니다. 손가락 길이와 손바닥 비율이 강한 목(木) 원소 에너지를 나타내어 성장과 발전 가능성이 가득합니다.",
      "주역의 팔괘로 해석하면 당신의 손금은 건괘(☰)와 곤괘(☷)의 조화를 보여 균형 잡힌 성품을 나타냅니다. 깊이 새겨진 생명선은 타고난 건강한 체질과 강한 생명력을 의미합니다. 동양 수상학에서는 이를 '용맥이 흐르는 형상'이라 하여 매우 길한 것으로 봅니다. 손바닥의 색택과 윤기가 왕성한 생기를 보여주며 혈색이 좋아 순환이 원활함을 알 수 있습니다. 손목 근처의 세 줄(팔찌선)이 뚜렷하여 장수와 번영을 상징하며, 신뢰할 만한 덕성으로 타인의 존경을 받을 상입니다.",
      "두뇌선의 곡선과 길이가 예술적 감성과 논리적 사고를 완벽하게 조화시키는 희귀한 재능을 보여줍니다. 동양 수상학에서는 이러한 형태를 '문곡성 형상'이라 하여 학문과 예술 분야에서 큰 성취를 이룰 것으로 봅니다. 두뇌선이 달구(月丘)를 향해 뻗은 방향이 창조자의 뛰어난 상상력과 직관력을 보여줍니다. 손가락 마디의 발달 상태가 세심함과 완벽주의 성향을 나타내며, 창의적 아이디어를 현실화하는 뛰어난 능력을 가지고 있습니다. 오행에서 금(金)과 수(水) 기운이 조화롭게 배치되어 창작 분야에서 성공과 명성을 얻을 가능성이 높습니다."
    ],
    loveTemplates: [
      "검지 아래에서 시작하는 감정선이 연애에서 주도적이고 적극적인 성향을 나타내며, 상대방에게 진심으로 대하는 성품을 보여줍니다.",
      "감정선의 길이와 깊이로 보아 사랑에 대해 진지하고 헌신적으로 접근하는 타입입니다. 이상적인 인연을 만날 운이 있습니다.",
      "로맨틱한 성향이 강하고 감정 표현이 풍부합니다. 상대방에 대한 깊은 배려심으로 행복한 관계를 맺을 가능성이 높습니다."
    ],
    careerTemplates: [
      "손바닥을 가로질러 곧게 뻗은 운명선이 타고난 리더십과 흔들리지 않는 의지력을 보여주는 매우 길한 징조입니다. 동양의 고전 '신상전편'에서는 이런 운명선을 '제왕지상'이라 하여 큰 뜻을 품고 이를 성취하는 사람의 특징으로 봅니다.",
      "강한 목표 지향적 성격으로 직업적 성공에 대한 뛰어난 잠재력을 가지고 있습니다. 타고난 리더십 능력이 경력 발전에 큰 도움이 될 것입니다.",
      "세밀한 분석적 사고로 전문직에 적합한 성향을 가지고 있습니다. 지속적인 학습을 통해 더욱 발전할 수 있습니다."
    ]
  },
  indian: {
    overallTemplates: [
      "고대 베다 수상학 전통과 카르마 원리에 따르면, 당신의 손금은 깊은 영적 진화와 물질적 성공 잠재력을 동시에 축복받은 영혼을 보여줍니다. 손의 구성이 전생의 균형 잡힌 카르마를 나타내며, 영적 성장과 세속적 성취를 동시에 이룰 운명임을 시사합니다. 전통 인도 수상학에서는 당신의 선 형태에서 신적 축복을 봅니다. 목성구의 강도가 여러 생에 걸쳐 쌓인 지혜와 우주적 힘의 축복을 받은 천성적 리더십을 나타냅니다.",
      "베다 점성학 원리가 손금에 반영되어 조화로운 행성 영향력, 특히 강한 목성과 금성 에너지를 보여줍니다. 손바닥 구조가 영적 가르침과 물질적 번영의 목적을 가진 화신임을 나타냅니다. 전통 인도 경전에서는 이러한 형태를 다르마적 인생 경로 - 의로운 의무 수행을 통해 목샤(해탈)에 이르는 - 의 징조로 봅니다.",
      "당신의 손금은 사라스와티(지혜의 여신)의 축복을 받은 예술적, 지적 추구를 통한 영혼의 진화를 보여줍니다. 구성이 전생에서 창예술 분야의 숙달을 시사하며, 이제 타고난 재능으로 현현되고 있습니다. 아유르베다 원리에 따르면 균형 잡힌 도샤(체질 유형)와 강한 영적 면역력, 자연 치유 능력을 보여줍니다."
    ],
    loveTemplates: [
      "베다 수상학에 따르면 당신의 연애 관계에서 카르마적 영혼 연결을 나타냅니다. 심장선 형태가 평범한 관계를 초월하는 신성한 사랑과 영적 동반자적 역량을 보여줍니다.",
      "고대 인도 경전에서는 당신의 심장선을 '프레마 레카' - 순수한 사랑의 선이라 하여, 다르마와 함께하는 영적 진화에 기반한 관계를 나타냅니다.",
      "당신의 손금은 조화로운 관계를 위한 파르바티와 시바의 축복을 보여줍니다. 전통 인도 수상학에서는 영적 각성에 도움이 되는 사랑의 잠재력을 봅니다."
    ],
    careerTemplates: [
      "베다 직업 분석에 따르면 다르마적 직업에서의 리더십을 위한 강한 라자식(역동적) 및 사트빅(순수한) 에너지를 보여줍니다. 운명선이 가르침, 치유, 또는 영적 안내와 연결된 인생 목적을 나타냅니다.",
      "고대 인도 수상학에서는 당신의 손 형태가 집단선을 위한 직업 - 의학, 교육, 영적 상담, 또는 의식을 향상시키는 예술 - 에 적합하다고 봅니다.",
      "손바닥 구조가 물질적 성공과 영적 봉사를 균형 잡는 직업으로의 카르마적 소명을 보여주며, '카르마 요가' - 집착 없는 행동 - 의 길을 따릅니다."
    ]
  }
};

// Main function to get cultural analysis based on context and language
export function getCulturalAnalysis(context: CulturalContext, language: string = 'ko'): CulturalData {
  // Get base cultural content
  const culturalContent = CULTURAL_ANALYSIS[context];
  
  // If requesting Korean for Eastern/Indian or English for Western, return as-is
  if ((context === 'western' && language === 'en') || 
      ((context === 'eastern' || context === 'indian') && language === 'ko')) {
    return culturalContent;
  }
  
  // Otherwise translate to target language
  return translateCulturalContent(culturalContent, context, language);
}

function translateCulturalContent(content: CulturalData, context: CulturalContext, language: string): CulturalData {
  // For now, return base content - full translation system can be expanded later
  // This maintains the cultural methodology while allowing language flexibility
  return content;
}

export function getHealthAnalysis(context: CulturalContext, language: string = 'ko'): string[] {
  if (language === 'en') {
    if (context === 'western') {
      return [
        "Your well-defined life line curves gracefully around the Venus mount, indicating robust physical health and natural vitality. Western palmistry interprets this formation as a sign of strong constitution and excellent resistance to illness.",
        "Your life line shows excellent stability and strength, indicating a naturally healthy constitution with good recovery abilities. The line's clear formation suggests balanced energy levels and effective stress management capabilities."
      ];
    }
    return [
      "According to Eastern health traditions, your life line indicates excellent overall vitality and longevity potential. The clear, strong formation suggests robust constitution and natural healing abilities.",
      "Your palm structure shows balanced energy flow according to traditional Eastern medicine principles, indicating good health maintenance and natural resistance to illness."
    ];
  }
  
  if (language === 'zh') {
    return [
      "您的生命线长而清晰，表明您将享有整体健康的生活。东方手相学将这样的生命线称为'长寿之相'，被认为是非常吉利的。",
      "您的生命线表现稳定，显示您拥有健康的体质。东方医学所说的气血循环顺畅，身体平衡状态良好。"
    ];
  }
  
  if (language === 'ja') {
    return [
      "あなたの生命線は長くはっきりしており、全体的に健康な人生を送ることを示しています。東洋の手相学では、このような生命線を'長寿の相'と呼び、非常に縁起が良いとされています。",
      "あなたの生命線は安定して現れており、健康な体質を持っていることを示しています。東洋医学で言う気血の循環が順調で、体のバランスがよく取れている状態です。"
    ];
  }
  
  if (language === 'hi') {
    return [
      "आपकी जीवन रेखा लंबी और स्पष्ट है, जो दर्शाती है कि आप समग्र रूप से स्वस्थ जीवन जिएंगे। पूर्वी हस्त विद्या में इस तरह की जीवन रेखा को 'दीर्घायु का चिह्न' कहा जाता है और इसे बहुत शुभ माना जाता है।",
      "आपकी जीवन रेखा स्थिर रूप से दिखाई देती है, जो दर्शाती है कि आपका स्वस्थ शरीर है। पूर्वी चिकित्सा में कहे गए प्राण और रक्त का संचार सुचारू है और शरीर का संतुलन अच्छी तरह से बना हुआ है।"
    ];
  }
  
  return [
    "생명선이 길고 뚜렷하여 전반적으로 건강한 삶을 누릴 것입니다. 동양 수상학에서 이러한 생명선을 '장수지상(長壽之相)'이라 하여 매우 길한 것으로 봅니다.",
    "생명선이 안정적으로 나타나 건강한 체질을 가지고 있습니다. 동양 의학에서 말하는 기혈(氣血) 순환이 원활하여 몸의 균형이 잘 잡혀 있는 상태입니다."
  ];
}

export function getPersonalityAnalysis(type: number, context: CulturalContext, language: string = 'ko'): string {
  const personalities = [
    "두뇌선이 우아한 곡선을 그려 창의적이고 직관적인 성향을 보여줍니다. 뛰어난 예술적 감각과 독창적인 아이디어를 많이 가지고 있습니다.",
    "두뇌선이 직선적으로 나타나 논리적이고 분석적인 사고를 선호함을 보여줍니다. 체계적인 문제 해결 방식에 뛰어납니다.",
    "두뇌선이 적당한 곡선을 이루어 균형 잡힌 사고 패턴을 보여줍니다. 감정과 이성을 조화롭게 활용하는 현명한 분입니다.",
    "두뇌선이 깊고 뚜렷하여 강한 집중력과 의지력을 나타냅니다. 한 번 결정한 일은 끝까지 해내는 끈기가 있습니다."
  ];
  
  if (language === 'en') {
    const englishPersonalities = [
      "Your head line curves gracefully, showing creative and intuitive tendencies. You possess excellent artistic sense and many original ideas.",
      "Your head line appears straight, indicating logical and analytical thinking preferences. You excel at systematic problem-solving approaches.",
      "Your head line forms a moderate curve, showing balanced thinking patterns. You wisely harmonize emotion and reason.",
      "Your head line is deep and clear, indicating strong concentration and willpower. You have the persistence to see things through to completion."
    ];
    return englishPersonalities[type];
  }
  
  return personalities[type];
}

export function getLineDescription(lineType: string, variation: number, language: string = 'ko'): string {
  const descriptions: Record<string, string[]> = {
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
  };
  
  if (language === 'en') {
    const englishDescriptions: Record<string, string[]> = {
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
    };
    return englishDescriptions[lineType]?.[variation] || englishDescriptions[lineType]?.[0] || "";
  }
  
  return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
}

export function getLineTraits(lineType: string, language: string = 'ko', indices: number[]): string[] {
  const traits: Record<string, string[]> = {
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
  };
  
  if (language === 'en') {
    const englishTraits: Record<string, string[]> = {
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
    };
    const lineTraits = englishTraits[lineType] || [];
    return indices.map(i => lineTraits[i % lineTraits.length] || "");
  }
  
  const lineTraits = traits[lineType] || [];
  return indices.map(i => lineTraits[i % lineTraits.length] || "");
}