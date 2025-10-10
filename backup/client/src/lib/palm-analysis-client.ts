// 클라이언트 사이드 손금 분석 로직
export type CulturalContext = 'western' | 'eastern' | 'indian';

export interface PalmAnalysisResult {
  overall: string;
  loveLife: string;
  career: string;
  health: string;
  personality: string;
  lines: {
    heartLine: { present: boolean; description: string; traits: string[] };
    headLine: { present: boolean; description: string; traits: string[] };
    lifeLine: { present: boolean; description: string; traits: string[] };
    fateLine: { present: boolean; description: string; traits: string[] };
  };
  confidence: number;
  culturalContext: CulturalContext;
  autoDetected: boolean;
}

// 문화권별 분석 템플릿 (서버에서 복사)
const CULTURAL_ANALYSIS = {
  western: {
    overallTemplates: [
      "Your palmistry reveals fascinating personality traits rooted in Western palmistry traditions. The prominent heart line indicates you approach love with deep sincerity and emotional intelligence, suggesting an innate ability to form meaningful, deep relationships throughout your life journey.",
      "Your palm shows the classic signs of a person destined for meaningful relationships and professional success. The clarity and depth of your lines indicate strong vital energy and natural resilience that will serve you well throughout life.",
      "The unique pattern of your palm lines reveals a highly intuitive individual with exceptional potential for personal growth. Your hand shape and line formations suggest someone who combines practical wisdom with deep emotional intelligence.",
      "Your palmistry analysis indicates a dynamic personality with strong artistic tendencies and natural charisma. The distinctive characteristics of your palm suggest you possess the rare ability to inspire others while maintaining your own authentic vision.",
      "Western palmistry tradition identifies your hand formation as belonging to someone with exceptional adaptability and resilience. Your palm lines reveal a person who thrives in challenging situations and has the natural ability to find innovative solutions.",
      "Your palm reveals the characteristics of a natural healer and communicator. The formation of your lines suggests you have an innate understanding of human nature and the ability to bring out the best in others."
    ],
    loveTemplates: [
      "Your heart line indicates you are naturally sincere and devoted in matters of love. You have the ability to form deep, lasting emotional bonds with your romantic partners, approaching relationships with both passion and wisdom.",
      "The formation of your heart line suggests you approach relationships with both passion and wisdom, creating meaningful connections that stand the test of time. Western palmistry sees this as a sign of emotional maturity.",
      "Your romantic nature is characterized by deep loyalty and emotional authenticity. You seek meaningful connections and have the patience to nurture relationships into something truly special and lasting.",
      "In love, you demonstrate remarkable emotional intelligence and empathy. Your heart line reveals someone who understands the importance of communication and emotional support in building strong partnerships.",
      "Your approach to love is both idealistic and practical. You believe in true love while maintaining realistic expectations, which gives you the best chance of finding and maintaining meaningful relationships.",
      "Your heart line suggests you are a romantic who values emotional depth over superficial attractions. You have the ability to create profound emotional connections that transcend ordinary relationships."
    ],
    careerTemplates: [
      "Your fate line indicates strong goal-oriented nature with excellent potential for professional success. You have natural leadership abilities that will serve you well in your career advancement, particularly in fields requiring both analytical thinking and creative problem-solving.",
      "The characteristics of your hand suggest you will excel in fields that require both creativity and analytical thinking. Western palmistry identifies your palm formation as suited for professional careers involving communication, leadership, or creative expression.",
      "Your palm lines reveal strong potential for success in entrepreneurial ventures or leadership roles. The formation of your fate line suggests you have the determination and strategic thinking necessary for professional advancement.",
      "Western palmistry tradition sees your hand formation as indicative of someone who will find success in fields that require both technical expertise and interpersonal skills, such as consulting, teaching, or creative industries.",
      "Your palm reveals the characteristics of a natural leader with strong communication abilities. The formation of your lines suggests you will excel in roles that require both strategic thinking and the ability to inspire and guide others.",
      "The unique pattern of your palm lines indicates strong potential for success in fields that combine analytical skills with creative expression, such as marketing, design, or technology innovation."
    ]
  },
  eastern: {
    overallTemplates: [
      "동양 손금술에 따르면, 당신의 손금은 매우 흥미로운 성격 특성을 보여줍니다. 명확한 심장선은 깊은 감정적 지능과 진정한 사랑에 대한 접근 방식을 나타내며, 평생에 걸쳐 의미 있는 깊은 관계를 형성할 수 있는 능력을 암시합니다.",
      "당신의 손금은 의미 있는 관계와 전문적 성공을 위한 운명의 징조를 보여줍니다. 선의 명확성과 깊이는 강한 생명력과 자연스러운 회복력을 나타내며, 이는 평생 동안 당신에게 도움이 될 것입니다.",
      "당신의 손금 패턴은 개인적 성장에 대한 뛰어난 잠재력을 가진 매우 직관적인 개인을 보여줍니다. 손 모양과 선의 형성은 실용적 지혜와 깊은 감정적 지능을 결합한 사람을 암시합니다.",
      "당신의 손금 분석은 강한 예술적 성향과 자연스러운 카리스마를 가진 역동적인 성격을 나타냅니다. 손금의 독특한 특성은 다른 사람들에게 영감을 주면서도 자신의 진정한 비전과 창의적 독립성을 유지할 수 있는 희귀한 능력을 가지고 있음을 암시합니다.",
      "동양 손금술 전통은 당신의 손 형성을 뛰어난 적응력과 회복력을 가진 사람의 것으로 식별합니다. 당신의 손금은 도전적인 상황에서 번영하고 복잡한 문제에 대한 혁신적인 해결책을 찾는 자연스러운 능력을 가진 사람을 보여줍니다.",
      "당신의 손금은 자연스러운 치유자이자 소통자의 특성을 보여줍니다. 선의 형성은 인간 본성에 대한 타고난 이해와 관계에 대한 연민적이고 통찰력 있는 접근을 통해 다른 사람들의 최고를 이끌어낼 수 있는 능력을 가지고 있음을 암시합니다."
    ],
    loveTemplates: [
      "당신의 심장선은 사랑에 있어서 자연스럽게 진실하고 헌신적임을 나타냅니다. 당신은 낭만적인 파트너와 깊고 지속적인 감정적 유대를 형성할 수 있는 능력을 가지고 있으며, 열정과 지혜를 모두 가지고 관계에 접근합니다.",
      "당신의 심장선 형성은 시간의 시험을 견디는 의미 있는 연결을 만드는 열정과 지혜를 모두 가지고 관계에 접근함을 암시합니다. 동양 손금술은 이를 감정적 성숙과 진정한 파트너십의 능력의 신호로 봅니다.",
      "당신의 낭만적 성격은 깊은 충성심과 감정적 진정성으로 특징지어집니다. 당신은 의미 있는 연결을 추구하며 관계를 정말로 특별하고 지속적인 것으로 키워낼 수 있는 인내심을 가지고 있습니다.",
      "사랑에서 당신은 놀라운 감정적 지능과 공감 능력을 보여줍니다. 당신의 심장선은 강한 파트너십을 구축하는 데 있어 소통과 감정적 지원의 중요성을 이해하는 사람을 보여줍니다.",
      "당신의 사랑에 대한 접근은 이상주의적이면서도 실용적입니다. 당신은 현실적인 기대를 유지하면서 진정한 사랑을 믿으며, 이는 의미 있는 관계를 찾고 유지할 수 있는 최고의 기회를 제공합니다.",
      "당신의 심장선은 평범한 관계를 초월하는 깊은 감정적 연결을 만들 수 있는 능력을 가진 감정적 깊이를 피상적 매력보다 중시하는 낭만주의자임을 암시합니다."
    ],
    careerTemplates: [
      "당신의 운명선은 전문적 성공을 위한 뛰어난 잠재력을 가진 강한 목표 지향적 성격을 나타냅니다. 당신은 분석적 사고와 창의적 문제 해결을 모두 요구하는 분야에서 특히 경력 발전에 도움이 될 자연스러운 리더십 능력을 가지고 있습니다.",
      "당신의 손의 특성은 창의성과 분석적 사고를 모두 요구하는 분야에서 뛰어날 것임을 암시합니다. 동양 손금술은 당신의 손금 형성을 소통, 리더십 또는 창의적 표현을 포함하는 전문적 경력에 적합한 것으로 식별합니다.",
      "당신의 손금은 기업가적 벤처나 리더십 역할에서 성공할 강한 잠재력을 보여줍니다. 당신의 운명선 형성은 전문적 발전에 필요한 결단력과 전략적 사고를 가지고 있음을 암시합니다.",
      "동양 손금술 전통은 당신의 손 형성을 컨설팅, 교육 또는 창의적 산업과 같이 기술적 전문성과 대인 관계 기술을 모두 요구하는 분야에서 성공을 찾을 사람의 것으로 봅니다.",
      "당신의 손금은 강한 소통 능력을 가진 자연스러운 리더의 특성을 보여줍니다. 당신의 선 형성은 전략적 사고와 다른 사람들에게 영감을 주고 인도할 수 있는 능력을 모두 요구하는 역할에서 뛰어날 것임을 암시합니다.",
      "당신의 손금의 독특한 패턴은 마케팅, 디자인 또는 기술 혁신과 같이 분석적 기술과 창의적 표현을 결합하는 분야에서 성공할 강한 잠재력을 나타냅니다."
    ]
  },
  indian: {
    overallTemplates: [
      "Indian palmistry reveals fascinating personality traits rooted in ancient Vedic traditions. Your prominent heart line indicates you approach love with deep sincerity and spiritual wisdom, suggesting an innate ability to form meaningful, soulful relationships throughout your life journey.",
      "Your palm shows the classic signs of a person destined for meaningful relationships and spiritual growth. The clarity and depth of your lines indicate strong vital energy and natural resilience that will serve you well throughout life.",
      "The unique pattern of your palm lines reveals a highly intuitive individual with exceptional potential for spiritual and personal growth. Your hand shape and line formations suggest someone who combines practical wisdom with deep spiritual understanding.",
      "Your palmistry analysis indicates a dynamic personality with strong spiritual tendencies and natural charisma. The distinctive characteristics of your palm suggest you possess the rare ability to inspire others while maintaining your own authentic spiritual vision.",
      "Indian palmistry tradition identifies your hand formation as belonging to someone with exceptional adaptability and spiritual resilience. Your palm lines reveal a person who thrives in challenging situations and has the natural ability to find innovative solutions.",
      "Your palm reveals the characteristics of a natural healer and spiritual communicator. The formation of your lines suggests you have an innate understanding of human nature and the ability to bring out the best in others through your compassionate and insightful approach."
    ],
    loveTemplates: [
      "Your heart line indicates you are naturally sincere and devoted in matters of love, approaching relationships with both passion and spiritual wisdom. You have the ability to form deep, lasting emotional bonds that transcend ordinary connections.",
      "The formation of your heart line suggests you approach relationships with both passion and spiritual wisdom, creating meaningful connections that stand the test of time. Indian palmistry sees this as a sign of emotional maturity and capacity for true spiritual partnership.",
      "Your romantic nature is characterized by deep loyalty and emotional authenticity. You seek meaningful connections and have the patience to nurture relationships into something truly special and spiritually fulfilling.",
      "In love, you demonstrate remarkable emotional intelligence and spiritual empathy. Your heart line reveals someone who understands the importance of communication and emotional support in building strong, spiritually connected partnerships.",
      "Your approach to love is both idealistic and practical, grounded in spiritual values. You believe in true love while maintaining realistic expectations, which gives you the best chance of finding and maintaining meaningful, soulful relationships.",
      "Your heart line suggests you are a romantic who values emotional depth and spiritual connection over superficial attractions. You have the ability to create profound emotional connections that transcend ordinary relationships."
    ],
    careerTemplates: [
      "Your fate line indicates strong goal-oriented nature with excellent potential for professional success, particularly in fields that align with your spiritual values. You have natural leadership abilities that will serve you well in your career advancement.",
      "The characteristics of your hand suggest you will excel in fields that require both creativity and analytical thinking, particularly those that allow you to express your spiritual values and help others. Indian palmistry identifies your palm formation as suited for careers involving healing, teaching, or spiritual guidance.",
      "Your palm lines reveal strong potential for success in entrepreneurial ventures or leadership roles that align with your spiritual values. The formation of your fate line suggests you have the determination and strategic thinking necessary for professional advancement.",
      "Indian palmistry tradition sees your hand formation as indicative of someone who will find success in fields that require both technical expertise and spiritual wisdom, such as holistic healing, spiritual counseling, or wellness industries.",
      "Your palm reveals the characteristics of a natural leader with strong communication abilities and spiritual insight. The formation of your lines suggests you will excel in roles that require both strategic thinking and the ability to inspire and guide others spiritually.",
      "The unique pattern of your palm lines indicates strong potential for success in fields that combine analytical skills with spiritual expression, such as holistic health, spiritual coaching, or wellness innovation."
    ]
  }
};

// 건강 분석 템플릿
const HEALTH_TEMPLATES = {
  western: [
    "Your palm lines indicate strong vital energy and natural resilience. Your hand formation suggests good overall health with particular strength in cardiovascular and respiratory systems.",
    "The characteristics of your palm reveal a robust constitution with excellent potential for maintaining good health throughout your life. Your lines suggest strong immune system and natural healing abilities.",
    "Your palmistry analysis indicates good health prospects with particular strength in mental and emotional well-being. Your hand formation suggests natural stress management abilities and emotional resilience.",
    "The formation of your palm lines reveals strong physical vitality and natural resistance to illness. Your hand characteristics suggest excellent potential for maintaining health through proper lifestyle choices.",
    "Your palm shows signs of good health with particular strength in digestive and metabolic systems. The formation of your lines suggests natural ability to maintain healthy body weight and energy levels.",
    "Your palmistry reveals strong health potential with particular focus on mental clarity and emotional balance. Your hand formation suggests natural ability to maintain good health through stress management and emotional well-being."
  ],
  eastern: [
    "당신의 손금은 강한 생명력과 자연스러운 회복력을 나타냅니다. 손의 형성은 심혈관 및 호흡기 시스템에서 특히 강한 전반적인 건강을 암시합니다.",
    "당신의 손금의 특성은 평생 동안 좋은 건강을 유지할 뛰어난 잠재력을 가진 강건한 체질을 보여줍니다. 당신의 선은 강한 면역 체계와 자연스러운 치유 능력을 암시합니다.",
    "당신의 손금 분석은 정신적, 감정적 웰빙에서 특히 강한 좋은 건강 전망을 나타냅니다. 당신의 손 형성은 자연스러운 스트레스 관리 능력과 감정적 회복력을 암시합니다.",
    "당신의 손금 선 형성은 강한 신체적 활력과 질병에 대한 자연스러운 저항력을 보여줍니다. 당신의 손 특성은 적절한 생활 방식 선택을 통해 건강을 유지할 뛰어난 잠재력을 암시합니다.",
    "당신의 손금은 소화 및 대사 시스템에서 특히 강한 좋은 건강의 징조를 보여줍니다. 당신의 선 형성은 건강한 체중과 에너지 수준을 유지하는 자연스러운 능력을 암시합니다.",
    "당신의 손금은 스트레스 관리와 감정적 웰빙을 통해 좋은 건강을 유지하는 자연스러운 능력을 암시하는 정신적 명확성과 감정적 균형에 특히 초점을 맞춘 강한 건강 잠재력을 보여줍니다."
  ],
  indian: [
    "Your palm lines indicate strong vital energy and natural resilience, with particular strength in spiritual and emotional well-being. Your hand formation suggests good overall health with focus on holistic wellness.",
    "The characteristics of your palm reveal a robust constitution with excellent potential for maintaining good health through spiritual practices and natural healing. Your lines suggest strong immune system and natural healing abilities.",
    "Your palmistry analysis indicates good health prospects with particular strength in mental clarity and spiritual well-being. Your hand formation suggests natural stress management abilities and emotional resilience through spiritual practices.",
    "The formation of your palm lines reveals strong physical vitality and natural resistance to illness through spiritual and natural healing practices. Your hand characteristics suggest excellent potential for maintaining health through holistic lifestyle choices.",
    "Your palm shows signs of good health with particular strength in digestive and metabolic systems, enhanced by spiritual practices. The formation of your lines suggests natural ability to maintain healthy body weight and energy levels through holistic approaches.",
    "Your palmistry reveals strong health potential with particular focus on mental clarity, emotional balance, and spiritual well-being. Your hand formation suggests natural ability to maintain good health through spiritual practices, stress management, and emotional well-being."
  ]
};

// 성격 분석 템플릿
const PERSONALITY_TEMPLATES = {
  western: [
    "You are a natural leader with strong communication skills and the ability to inspire others. Your personality combines analytical thinking with creative expression, making you well-suited for roles that require both strategic planning and innovative problem-solving.",
    "Your personality is characterized by deep emotional intelligence and natural empathy. You have the ability to understand others' perspectives and create meaningful connections, making you an excellent collaborator and team player.",
    "You possess a dynamic personality with strong artistic tendencies and natural charisma. Your creative energy and ability to think outside the box make you well-suited for innovative projects and creative endeavors.",
    "Your personality reveals a practical and methodical approach to problem-solving, combined with strong intuition. You have the ability to balance logical analysis with creative insights, making you effective in both analytical and creative roles.",
    "You are characterized by strong determination and resilience, with the ability to overcome challenges through persistence and strategic thinking. Your personality suggests natural leadership qualities and the ability to inspire others through your example.",
    "Your personality combines intellectual curiosity with emotional depth, making you a natural teacher and communicator. You have the ability to explain complex concepts in accessible ways and create meaningful connections with others."
  ],
  eastern: [
    "당신은 강한 소통 능력과 다른 사람들에게 영감을 줄 수 있는 능력을 가진 자연스러운 리더입니다. 당신의 성격은 분석적 사고와 창의적 표현을 결합하여 전략적 계획과 혁신적인 문제 해결을 모두 요구하는 역할에 적합합니다.",
    "당신의 성격은 깊은 감정적 지능과 자연스러운 공감 능력으로 특징지어집니다. 당신은 다른 사람들의 관점을 이해하고 의미 있는 연결을 만들 수 있는 능력을 가지고 있어 훌륭한 협력자이자 팀 플레이어입니다.",
    "당신은 강한 예술적 성향과 자연스러운 카리스마를 가진 역동적인 성격을 가지고 있습니다. 당신의 창의적 에너지와 틀에 박힌 사고를 벗어날 수 있는 능력은 혁신적인 프로젝트와 창의적 노력에 적합합니다.",
    "당신의 성격은 강한 직관과 결합된 실용적이고 체계적인 문제 해결 접근 방식을 보여줍니다. 당신은 논리적 분석과 창의적 통찰을 균형 있게 조화시킬 수 있는 능력을 가지고 있어 분석적이고 창의적인 역할 모두에서 효과적입니다.",
    "당신은 강한 결단력과 회복력으로 특징지어지며, 지속성과 전략적 사고를 통해 도전을 극복할 수 있는 능력을 가지고 있습니다. 당신의 성격은 자연스러운 리더십 자질과 당신의 예시를 통해 다른 사람들에게 영감을 줄 수 있는 능력을 암시합니다.",
    "당신의 성격은 감정적 깊이와 결합된 지적 호기심을 보여주며, 당신을 자연스러운 교사이자 소통자로 만듭니다. 당신은 복잡한 개념을 접근 가능한 방식으로 설명하고 다른 사람들과 의미 있는 연결을 만들 수 있는 능력을 가지고 있습니다."
  ],
  indian: [
    "You are a natural spiritual leader with strong communication skills and the ability to inspire others through your spiritual wisdom. Your personality combines analytical thinking with spiritual insight, making you well-suited for roles that require both strategic planning and spiritual guidance.",
    "Your personality is characterized by deep spiritual intelligence and natural empathy. You have the ability to understand others' perspectives and create meaningful spiritual connections, making you an excellent spiritual counselor and guide.",
    "You possess a dynamic personality with strong spiritual tendencies and natural charisma. Your spiritual energy and ability to think beyond conventional boundaries make you well-suited for innovative spiritual projects and holistic healing endeavors.",
    "Your personality reveals a practical and methodical approach to problem-solving, combined with strong spiritual intuition. You have the ability to balance logical analysis with spiritual insights, making you effective in both analytical and spiritual roles.",
    "You are characterized by strong determination and spiritual resilience, with the ability to overcome challenges through persistence and spiritual wisdom. Your personality suggests natural spiritual leadership qualities and the ability to inspire others through your spiritual example.",
    "Your personality combines intellectual curiosity with spiritual depth, making you a natural spiritual teacher and communicator. You have the ability to explain complex spiritual concepts in accessible ways and create meaningful spiritual connections with others."
  ]
};

// 손금선 설명 템플릿
const LINE_DESCRIPTIONS = {
  heart: {
    western: [
      "Your heart line is long and clear, indicating deep emotional capacity and the ability to form lasting relationships. This line suggests you approach love with both passion and wisdom.",
      "The heart line shows strong emotional intelligence and natural empathy. This formation indicates you have the ability to understand and connect with others on a deep emotional level.",
      "Your heart line reveals a romantic nature with strong loyalty and devotion. This line suggests you value emotional depth and meaningful connections in your relationships.",
      "The formation of your heart line indicates natural charisma and the ability to attract others through your emotional authenticity. This line suggests you have the gift of emotional connection."
    ],
    eastern: [
      "당신의 심장선은 길고 명확하여 깊은 감정적 능력과 지속적인 관계를 형성할 수 있는 능력을 나타냅니다. 이 선은 당신이 열정과 지혜를 모두 가지고 사랑에 접근함을 암시합니다.",
      "심장선은 강한 감정적 지능과 자연스러운 공감 능력을 보여줍니다. 이 형성은 당신이 깊은 감정적 수준에서 다른 사람들을 이해하고 연결할 수 있는 능력을 가지고 있음을 나타냅니다.",
      "당신의 심장선은 강한 충성심과 헌신을 가진 낭만적 성격을 보여줍니다. 이 선은 당신이 관계에서 감정적 깊이와 의미 있는 연결을 중시함을 암시합니다.",
      "당신의 심장선 형성은 자연스러운 카리스마와 감정적 진정성을 통해 다른 사람들을 끌어당길 수 있는 능력을 나타냅니다. 이 선은 당신이 감정적 연결의 재능을 가지고 있음을 암시합니다."
    ],
    indian: [
      "Your heart line is long and clear, indicating deep spiritual and emotional capacity and the ability to form lasting soulful relationships. This line suggests you approach love with both passion and spiritual wisdom.",
      "The heart line shows strong spiritual intelligence and natural empathy. This formation indicates you have the ability to understand and connect with others on a deep spiritual and emotional level.",
      "Your heart line reveals a romantic nature with strong spiritual loyalty and devotion. This line suggests you value emotional depth and meaningful spiritual connections in your relationships.",
      "The formation of your heart line indicates natural spiritual charisma and the ability to attract others through your spiritual authenticity. This line suggests you have the gift of spiritual and emotional connection."
    ]
  },
  head: {
    western: [
      "Your head line is well-defined and clear, indicating strong intellectual capacity and analytical thinking. This line suggests you have the ability to solve complex problems through logical reasoning.",
      "The head line shows creative thinking and innovative problem-solving abilities. This formation indicates you have the gift of combining analytical skills with creative insights.",
      "Your head line reveals strong communication skills and the ability to express complex ideas clearly. This line suggests you have natural teaching and leadership abilities.",
      "The formation of your head line indicates practical wisdom and the ability to make sound decisions. This line suggests you have the gift of balanced thinking and strategic planning."
    ],
    eastern: [
      "당신의 두뇌선은 잘 정의되고 명확하여 강한 지적 능력과 분석적 사고를 나타냅니다. 이 선은 당신이 논리적 추론을 통해 복잡한 문제를 해결할 수 있는 능력을 가지고 있음을 암시합니다.",
      "두뇌선은 창의적 사고와 혁신적인 문제 해결 능력을 보여줍니다. 이 형성은 당신이 분석적 기술과 창의적 통찰을 결합하는 재능을 가지고 있음을 나타냅니다.",
      "당신의 두뇌선은 강한 소통 능력과 복잡한 아이디어를 명확하게 표현할 수 있는 능력을 보여줍니다. 이 선은 당신이 자연스러운 교수 및 리더십 능력을 가지고 있음을 암시합니다.",
      "당신의 두뇌선 형성은 실용적 지혜와 건전한 결정을 내릴 수 있는 능력을 나타냅니다. 이 선은 당신이 균형 잡힌 사고와 전략적 계획의 재능을 가지고 있음을 암시합니다."
    ],
    indian: [
      "Your head line is well-defined and clear, indicating strong intellectual capacity and spiritual analytical thinking. This line suggests you have the ability to solve complex problems through logical reasoning and spiritual wisdom.",
      "The head line shows creative thinking and innovative problem-solving abilities enhanced by spiritual insight. This formation indicates you have the gift of combining analytical skills with spiritual insights.",
      "Your head line reveals strong communication skills and the ability to express complex spiritual ideas clearly. This line suggests you have natural spiritual teaching and leadership abilities.",
      "The formation of your head line indicates practical wisdom and the ability to make sound decisions through spiritual guidance. This line suggests you have the gift of balanced thinking and spiritual strategic planning."
    ]
  },
  life: {
    western: [
      "Your life line is long and well-defined, indicating strong vitality and natural resilience. This line suggests you have the ability to overcome challenges and maintain good health throughout your life.",
      "The life line shows strong physical energy and natural resistance to illness. This formation indicates you have the gift of maintaining good health through proper lifestyle choices.",
      "Your life line reveals strong determination and the ability to persevere through difficult times. This line suggests you have natural resilience and the ability to bounce back from setbacks.",
      "The formation of your life line indicates strong connection to nature and the ability to maintain balance in your life. This line suggests you have the gift of holistic well-being."
    ],
    eastern: [
      "당신의 생명선은 길고 잘 정의되어 강한 활력과 자연스러운 회복력을 나타냅니다. 이 선은 당신이 평생 동안 도전을 극복하고 좋은 건강을 유지할 수 있는 능력을 가지고 있음을 암시합니다.",
      "생명선은 강한 신체적 에너지와 질병에 대한 자연스러운 저항력을 보여줍니다. 이 형성은 당신이 적절한 생활 방식 선택을 통해 좋은 건강을 유지하는 재능을 가지고 있음을 나타냅니다.",
      "당신의 생명선은 강한 결단력과 어려운 시기를 견뎌낼 수 있는 능력을 보여줍니다. 이 선은 당신이 자연스러운 회복력과 좌절에서 되돌아올 수 있는 능력을 가지고 있음을 암시합니다.",
      "당신의 생명선 형성은 자연과의 강한 연결과 삶에서 균형을 유지할 수 있는 능력을 나타냅니다. 이 선은 당신이 전체적 웰빙의 재능을 가지고 있음을 암시합니다."
    ],
    indian: [
      "Your life line is long and well-defined, indicating strong vitality and natural spiritual resilience. This line suggests you have the ability to overcome challenges and maintain good health through spiritual practices throughout your life.",
      "The life line shows strong physical energy and natural resistance to illness enhanced by spiritual practices. This formation indicates you have the gift of maintaining good health through proper lifestyle choices and spiritual practices.",
      "Your life line reveals strong determination and the ability to persevere through difficult times with spiritual wisdom. This line suggests you have natural spiritual resilience and the ability to bounce back from setbacks through spiritual strength.",
      "The formation of your life line indicates strong connection to nature and the ability to maintain balance in your life through spiritual practices. This line suggests you have the gift of holistic spiritual well-being."
    ]
  },
  fate: {
    western: [
      "Your fate line is clear and well-defined, indicating strong goal-oriented nature and excellent potential for professional success. This line suggests you have the ability to achieve your ambitions through determination and strategic planning.",
      "The fate line shows strong leadership abilities and the potential for success in entrepreneurial ventures. This formation indicates you have the gift of inspiring others and leading teams to success.",
      "Your fate line reveals strong potential for success in fields that require both analytical skills and creative thinking. This line suggests you have the ability to excel in innovative and challenging roles.",
      "The formation of your fate line indicates strong connection to your life purpose and the ability to make meaningful contributions to society. This line suggests you have the gift of purposeful leadership."
    ],
    eastern: [
      "당신의 운명선은 명확하고 잘 정의되어 강한 목표 지향적 성격과 전문적 성공을 위한 뛰어난 잠재력을 나타냅니다. 이 선은 당신이 결단력과 전략적 계획을 통해 야망을 달성할 수 있는 능력을 가지고 있음을 암시합니다.",
      "운명선은 강한 리더십 능력과 기업가적 벤처에서의 성공 잠재력을 보여줍니다. 이 형성은 당신이 다른 사람들에게 영감을 주고 팀을 성공으로 이끌 수 있는 재능을 가지고 있음을 나타냅니다.",
      "당신의 운명선은 분석적 기술과 창의적 사고를 모두 요구하는 분야에서의 성공 잠재력을 보여줍니다. 이 선은 당신이 혁신적이고 도전적인 역할에서 뛰어날 수 있는 능력을 가지고 있음을 암시합니다.",
      "당신의 운명선 형성은 당신의 인생 목적과 사회에 의미 있는 기여를 할 수 있는 능력에 대한 강한 연결을 나타냅니다. 이 선은 당신이 목적 있는 리더십의 재능을 가지고 있음을 암시합니다."
    ],
    indian: [
      "Your fate line is clear and well-defined, indicating strong goal-oriented nature and excellent potential for professional success aligned with your spiritual values. This line suggests you have the ability to achieve your ambitions through determination and spiritual wisdom.",
      "The fate line shows strong spiritual leadership abilities and the potential for success in entrepreneurial ventures that align with your spiritual values. This formation indicates you have the gift of inspiring others and leading teams to success through spiritual guidance.",
      "Your fate line reveals strong potential for success in fields that require both analytical skills and spiritual insight. This line suggests you have the ability to excel in innovative and challenging roles that serve your spiritual purpose.",
      "The formation of your fate line indicates strong connection to your spiritual life purpose and the ability to make meaningful contributions to society through your spiritual gifts. This line suggests you have the gift of purposeful spiritual leadership."
    ]
  }
};

// 손금선 특성 템플릿
const LINE_TRAITS = {
  heart: {
    western: ["Passionate", "Loyal", "Emotional Intelligence", "Romantic", "Empathetic", "Devoted", "Sincere", "Caring"],
    eastern: ["열정적", "충성스러운", "감정적 지능", "낭만적", "공감적", "헌신적", "진실한", "배려심 있는"],
    indian: ["Spiritually Passionate", "Spiritually Loyal", "Spiritual Intelligence", "Spiritually Romantic", "Spiritually Empathetic", "Spiritually Devoted", "Spiritually Sincere", "Spiritually Caring"]
  },
  head: {
    western: ["Analytical", "Creative", "Intelligent", "Strategic", "Innovative", "Logical", "Wise", "Communicative"],
    eastern: ["분석적", "창의적", "지능적", "전략적", "혁신적", "논리적", "지혜로운", "소통적"],
    indian: ["Spiritually Analytical", "Spiritually Creative", "Spiritually Intelligent", "Spiritually Strategic", "Spiritually Innovative", "Spiritually Logical", "Spiritually Wise", "Spiritually Communicative"]
  },
  life: {
    western: ["Resilient", "Energetic", "Healthy", "Determined", "Vital", "Strong", "Persistent", "Balanced"],
    eastern: ["회복력 있는", "에너지 넘치는", "건강한", "결단력 있는", "활력 있는", "강한", "지속적인", "균형 잡힌"],
    indian: ["Spiritually Resilient", "Spiritually Energetic", "Spiritually Healthy", "Spiritually Determined", "Spiritually Vital", "Spiritually Strong", "Spiritually Persistent", "Spiritually Balanced"]
  },
  fate: {
    western: ["Ambitious", "Successful", "Leadership", "Goal-oriented", "Determined", "Strategic", "Influential", "Purposeful"],
    eastern: ["야심 있는", "성공적인", "리더십", "목표 지향적", "결단력 있는", "전략적", "영향력 있는", "목적 있는"],
    indian: ["Spiritually Ambitious", "Spiritually Successful", "Spiritual Leadership", "Spiritually Goal-oriented", "Spiritually Determined", "Spiritually Strategic", "Spiritually Influential", "Spiritually Purposeful"]
  }
};

// 클라이언트 사이드 손금 분석 함수
export function analyzePalmLines(imageBuffer: ArrayBuffer, culturalContext: CulturalContext = 'eastern', language: string = 'ko'): PalmAnalysisResult {
  // 이미지 데이터를 Uint8Array로 변환
  const imageData = new Uint8Array(imageBuffer);
  const imageSize = imageData.length;
  
  // 이미지 분석을 위한 바이트 샘플링
  const firstBytes = Array.from(imageData.slice(0, 100));
  const lastBytes = Array.from(imageData.slice(-100));
  const middleBytes = Array.from(imageData.slice(Math.floor(imageSize/2), Math.floor(imageSize/2) + 100));
  
  // 해시 값 생성
  const contentHash = firstBytes.reduce((acc, byte, i) => (acc + byte * (i + 1)) % 1000000, 0);
  const structureHash = middleBytes.reduce((acc, byte, i) => (acc + byte * (i + 7)) % 1000000, 0);
  const qualityHash = lastBytes.reduce((acc, byte, i) => (acc + byte * (i + 13)) % 1000000, 0);
  const combinedHash = (contentHash + structureHash * 2 + qualityHash * 3) % 1000000;
  
  // 이미지 특성 분석
  const brightness = (firstBytes.reduce((sum, byte) => sum + byte, 0) / firstBytes.length) / 255;
  const contrast = Math.abs(Math.max(...firstBytes) - Math.min(...firstBytes)) / 255;
  const complexity = new Set(middleBytes).size / 100;
  
  // 고급 결정적 랜덤화
  const advancedRandom = (min: number, max: number, seed: number = 0) => {
    const baseSeed = combinedHash + seed * 17 + min * 23 + max * 29;
    return Math.floor((baseSeed + brightness * 1000 + contrast * 2000 + complexity * 3000) % (max - min + 1)) + min;
  };
  
  const advancedChoice = <T>(array: T[], offset = 0) => {
    const index = (combinedHash + offset * 31 + Math.floor(brightness * 100) + Math.floor(contrast * 100)) % array.length;
    return array[index];
  };
  
  // 문화권별 분석 데이터 가져오기
  const culturalData = CULTURAL_ANALYSIS[culturalContext];
  const { overallTemplates, loveTemplates, careerTemplates } = culturalData;
  
  // 이미지 특성에 따른 분석 변수
  const hasFateLine = advancedRandom(0, 10, 1) > (3 + Math.floor(contrast * 5));
  const confidence = advancedRandom(82, 97, 2);
  const personalityType = Math.floor((combinedHash + Math.floor(complexity * 1000)) % 4);
  
  // 건강 분석
  const healthTemplates = HEALTH_TEMPLATES[culturalContext];
  const healthAnalysis = advancedChoice(healthTemplates, 1);
  
  // 성격 분석
  const personalityTemplates = PERSONALITY_TEMPLATES[culturalContext];
  const personalityAnalysis = advancedChoice(personalityTemplates, personalityType);
  
  // 손금선 분석
  const heartLineVariant = advancedRandom(0, 3, 10);
  const headLineVariant = advancedRandom(0, 3, 20);
  const lifeLineVariant = advancedRandom(0, 3, 30);
  const fateLineVariant = hasFateLine ? advancedRandom(0, 2, 40) : advancedRandom(2, 4, 40);
  
  // 특성 인덱스 생성
  const generateTraitIndices = (base: number) => [
    advancedRandom(0, 7, base),
    advancedRandom(0, 7, base + 100)
  ];
  
  // 언어별 템플릿 선택
  const getLineDescription = (lineType: string, variant: number, lang: string) => {
    const descriptions = LINE_DESCRIPTIONS[lineType as keyof typeof LINE_DESCRIPTIONS];
    const langKey = lang === 'ko' ? 'eastern' : lang === 'hi' ? 'indian' : 'western';
    return descriptions[langKey][variant] || descriptions[langKey][0];
  };
  
  const getLineTraits = (lineType: string, lang: string, indices: number[]) => {
    const traits = LINE_TRAITS[lineType as keyof typeof LINE_TRAITS];
    const langKey = lang === 'ko' ? 'eastern' : lang === 'hi' ? 'indian' : 'western';
    return indices.map(i => traits[langKey][i] || traits[langKey][0]);
  };
  
  return {
    overall: advancedChoice(overallTemplates, 0),
    loveLife: advancedChoice(loveTemplates, 50),
    career: advancedChoice(careerTemplates, 100),
    health: healthAnalysis,
    personality: personalityAnalysis,
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
