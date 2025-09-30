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
      "Your palm shows the classic signs of a person destined for meaningful relationships and professional success. The clarity and depth of your lines indicate strong vital energy and natural resilience that will serve you well throughout life. Western palmistry interprets your hand formation as indicative of balanced emotional and intellectual capabilities, with particular strength in creative endeavors and interpersonal relationships.",
      "The unique pattern of your palm lines reveals a highly intuitive individual with exceptional potential for personal growth. Your hand shape and line formations suggest someone who combines practical wisdom with deep emotional intelligence, making you naturally suited for roles that require both analytical skills and human understanding.",
      "Your palmistry analysis indicates a dynamic personality with strong artistic tendencies and natural charisma. The distinctive characteristics of your palm suggest you possess the rare ability to inspire others while maintaining your own authentic vision and creative independence.",
      "Western palmistry tradition identifies your hand formation as belonging to someone with exceptional adaptability and resilience. Your palm lines reveal a person who thrives in challenging situations and has the natural ability to find innovative solutions to complex problems.",
      "Your palm reveals the characteristics of a natural healer and communicator. The formation of your lines suggests you have an innate understanding of human nature and the ability to bring out the best in others through your compassionate and insightful approach to relationships."
    ],
    loveTemplates: [
      "Your heart line indicates you are naturally sincere and devoted in matters of love. You have the ability to form deep, lasting emotional bonds with your romantic partners, approaching relationships with both passion and wisdom.",
      "The formation of your heart line suggests you approach relationships with both passion and wisdom, creating meaningful connections that stand the test of time. Western palmistry sees this as a sign of emotional maturity and capacity for true partnership.",
      "Your romantic nature is characterized by deep loyalty and emotional authenticity. You seek meaningful connections and have the patience to nurture relationships into something truly special and lasting.",
      "In love, you demonstrate remarkable emotional intelligence and empathy. Your heart line reveals someone who understands the importance of communication and emotional support in building strong partnerships.",
      "Your approach to love is both idealistic and practical. You believe in true love while maintaining realistic expectations, which gives you the best chance of finding and maintaining meaningful relationships.",
      "Your heart line suggests you are a romantic who values emotional depth over superficial attractions. You have the ability to create profound emotional connections that transcend ordinary relationships."
    ],
    careerTemplates: [
      "Your fate line indicates strong goal-oriented nature with excellent potential for professional success. You have natural leadership abilities that will serve you well in your career advancement, particularly in fields requiring both analytical thinking and creative problem-solving.",
      "The characteristics of your hand suggest you will excel in fields that require both creativity and analytical thinking. Western palmistry identifies your palm formation as suited for professional careers involving communication, leadership, or creative expression.",
      "Your career path shows strong potential for entrepreneurial success. Your palm lines reveal someone with the vision to identify opportunities and the determination to pursue them until you achieve your goals.",
      "You possess natural teaching abilities and would excel in roles where you can share knowledge and inspire others. Your hand formation suggests success in education, training, counseling, or mentoring roles.",
      "Your professional strengths lie in your ability to innovate and think outside conventional boundaries. You are well-suited for careers in technology, research, design, or any field that values creative problem-solving.",
      "Your palm indicates strong potential for success in collaborative environments. You have the rare ability to balance individual excellence with team cooperation, making you valuable in leadership and project management roles."
    ]
  },
  eastern: {
    overallTemplates: [
      "당신의 손금은 조화로운 성공적인 삶의 비범한 잠재력을 보여줍니다. 감정선의 흐름이 타고난 직감력과 창의성을 나타내며, 예술적 재능과 영적 깨달음의 가능성을 시사합니다. 목성구를 향해 뻗은 감정선은 진실하고 순수한 사랑과 평생에 걸쳐 의미 있고 깊은 관계를 맺을 수 있는 능력을 보여줍니다. 손가락 길이와 손바닥 비율이 강한 성장 에너지를 나타내어 발전 가능성이 가득합니다. 다만 때로는 지나친 완벽주의 성향으로 인해 스스로에게 과도한 압박을 가할 수 있으며, 감정적 기복이 클 때가 있어 인내심과 균형 감각을 기르는 것이 중요합니다. 또한 창의적 에너지가 강한 만큼 현실적 계획성을 보완한다면 더욱 안정적인 성공을 이룰 수 있을 것입니다.",
      "당신의 손금은 건괘와 곤괘의 조화를 보여 균형 잡힌 성품을 나타냅니다. 깊이 새겨진 생명선은 타고난 건강한 체질과 강한 생명력을 의미하며, 용맥이 흐르는 형상으로 매우 길한 것으로 해석됩니다. 손바닥의 색택과 윤기가 왕성한 생기를 보여주며 혈색이 좋아 순환이 원활함을 알 수 있습니다. 손목 근처의 팔찌선이 뚜렷하여 장수와 번영을 상징하며, 신뢰할 만한 덕성으로 타인의 존경을 받을 상입니다. 하지만 때로는 자신의 의견을 고집하는 경향이 있어 타인과의 갈등을 야기할 수 있으며, 과도한 책임감으로 인한 스트레스를 주의해야 합니다. 건강한 체질이지만 과로나 불규칙한 생활패턴에는 취약할 수 있으므로 적절한 휴식과 규칙적인 생활리듬을 유지하는 것이 중요합니다.",
      "두뇌선의 곡선과 길이가 예술적 감성과 논리적 사고를 조화시키는 희귀한 재능을 보여줍니다. 이러한 형태는 학문과 예술 분야에서 큰 성취를 이룰 가능성을 시사합니다. 두뇌선이 달구를 향해 뻗은 방향이 창조자의 뛰어난 상상력과 직관력을 보여주며, 손가락 마디의 발달 상태가 세심함과 완벽주의 성향을 나타냅니다. 창의적 아이디어를 현실화하는 뛰어난 능력을 가지고 있어 창작 분야에서 성공과 명성을 얻을 가능성이 높습니다. 다만 지나친 이상주의로 인해 현실과의 괴리감을 느낄 때가 있으며, 완벽을 추구하다 보니 결정을 내리는데 시간이 오래 걸리는 경향이 있습니다. 또한 예민한 감성으로 인해 타인의 비판이나 부정적 피드백에 상처받기 쉬우므로, 정신적 회복력을 기르는 것이 필요합니다."
    ],
    loveTemplates: [
      "검지 아래에서 시작하는 감정선이 연애에서 주도적이고 적극적인 성향을 나타내며, 상대방에게 진심으로 대하는 성품을 보여줍니다. 당신은 사랑에 있어 솔직하고 직접적인 표현을 선호하며, 상대방의 감정을 이해하려고 노력하는 따뜻한 마음을 가지고 있습니다. 그러나 때로는 지나치게 적극적인 모습이 상대방에게 부담을 줄 수 있으며, 상대방의 개인적 공간을 존중하는 균형감각을 기르는 것이 중요합니다. 또한 감정적 충동으로 성급한 결정을 내리기 쉬우므로, 중요한 관계의 결정은 신중하게 고려하는 것이 좋습니다.",
      "감정선의 길이와 깊이로 보아 사랑에 대해 진지하고 헌신적으로 접근하는 타입입니다. 이상적인 인연을 만날 운이 있으며, 깊고 의미 있는 관계를 추구하는 성향이 강합니다. 당신은 상대방과의 정서적 유대감을 매우 중요하게 여기며, 서로의 내면을 이해하고 성장시키는 관계를 만들어가는 능력이 뛰어납니다. 다만 이상이 너무 높아 현실의 연인에게 실망하기 쉬우며, 완벽한 사랑을 찾으려다 좋은 인연을 놓칠 수 있습니다. 상대방의 단점도 받아들이는 포용력을 기른다면 더욱 행복한 관계를 맺을 수 있을 것입니다.",
      "로맨틱한 성향이 강하고 감정 표현이 풍부합니다. 상대방에 대한 깊은 배려심으로 행복한 관계를 맺을 가능성이 높으며, 사랑하는 사람을 위해서라면 어떤 희생도 마다하지 않는 헌신적인 마음을 가지고 있습니다. 당신의 따뜻한 감성과 세심한 배려는 상대방에게 큰 감동을 줄 것입니다. 하지만 지나친 감정 표현이나 과도한 희생정신으로 인해 상대방이 부담스러워할 수 있으며, 자신의 감정에만 몰입하여 상대방의 진정한 마음을 놓칠 위험이 있습니다. 균형 잡힌 사랑의 표현법을 익히는 것이 중요합니다.",
      "감정선이 새끼손가락 쪽으로부터 시작되어 사랑에 있어 감성적이고 직관적인 접근을 하는 성향입니다. 상대방의 마음을 잘 헤아리는 능력이 뛰어나며, 말하지 않아도 상대방의 기분이나 필요를 알아차리는 섬세함을 가지고 있습니다. 이러한 공감 능력은 깊고 의미 있는 관계를 만드는 데 큰 도움이 됩니다. 그러나 지나치게 감정에 의존하다 보니 논리적 판단력이 흐려질 수 있으며, 상대방의 작은 변화에도 과민하게 반응하여 불안감을 느낄 수 있습니다. 감정과 이성의 균형을 맞추는 연습이 필요합니다.",
      "감정선의 분기가 여러 갈래로 나뉘어 있어 다양한 형태의 사랑을 경험할 운명입니다. 각각의 인연에서 깊은 배움과 성장을 얻을 것이며, 풍부한 연애 경험을 통해 진정한 사랑의 의미를 깨달아 갈 것입니다. 당신은 열린 마음으로 다양한 유형의 사람들과 관계를 맺는 능력이 있으며, 이를 통해 인간관계의 폭을 넓혀갈 수 있습니다. 다만 너무 많은 선택지로 인해 혼란스러워할 수 있으며, 진정한 사랑을 찾기까지 시행착오를 겪을 가능성이 높습니다. 또한 변화를 추구하는 성향으로 인해 안정적인 관계 유지에 어려움을 느낄 수 있습니다.",
      "금성구가 발달하여 애정이 풍부하고 가정적인 성향이 강합니다. 전통적 가치를 중시하며 안정적인 관계를 추구하는 타입으로, 가족과 연인에 대한 책임감이 강하고 헌신적인 사랑을 실천합니다. 당신은 상대방과 함께 따뜻한 가정을 꾸리고 싶어하며, 오래도록 지속될 수 있는 안정적인 관계를 원합니다. 그러나 지나치게 보수적인 성향으로 인해 변화를 받아들이기 어려워할 수 있으며, 상대방의 자유로운 성향을 제약하려 할 위험이 있습니다. 개방적인 마음가짐을 기르는 것이 관계 발전에 도움이 될 것입니다.",
      "감정선이 곧고 깊어 일편단심의 상으로, 한번 마음을 정하면 변하지 않는 진실한 사랑을 하는 성품입니다. 당신의 변하지 않는 마음과 깊은 애정은 상대방에게 큰 안정감과 신뢰감을 줄 것이며, 평생에 걸친 진정한 동반자 관계를 만들어갈 수 있습니다. 사랑에 있어 일관성 있고 신뢰할 수 있는 모습은 당신의 가장 큰 장점입니다. 하지만 지나치게 고집스러운 면이 있어 상대방의 변화나 성장을 받아들이기 어려워할 수 있으며, 융통성 부족으로 인해 관계에 경직성이 생길 위험이 있습니다. 사랑하는 사람의 변화를 포용하는 넓은 마음을 기르는 것이 중요합니다."
    ],
    careerTemplates: [
      "손바닥을 가로질러 곧게 뻗은 운명선이 타고난 리더십과 흔들리지 않는 의지력을 보여주는 길한 징조입니다. 큰 뜻을 품고 이를 성취하는 사람의 특징을 나타내며, 조직을 이끌어가는 카리스마와 비전을 가지고 있습니다. 당신은 어떤 어려움에도 굴복하지 않는 강인한 정신력을 소유하고 있어 큰 성취를 이룰 가능성이 높습니다. 다만 지나친 자신감으로 인해 타인의 조언을 무시하거나 독단적인 결정을 내릴 위험이 있으며, 완벽주의 성향으로 인한 스트레스와 번아웃을 주의해야 합니다. 또한 목표 달성에만 집중하다 보면 인간관계나 건강을 소홀히 할 수 있으므로 균형 잡힌 삶을 추구하는 것이 중요합니다.",
      "강한 목표 지향적 성격으로 직업적 성공에 대한 뛰어난 잠재력을 가지고 있습니다. 타고난 리더십 능력이 경력 발전에 큰 도움이 될 것이며, 체계적이고 계획적인 접근방식으로 착실히 성공의 계단을 오를 수 있습니다. 당신은 명확한 목표 설정과 실행력을 바탕으로 다른 사람들의 모범이 되는 성과를 거둘 것입니다. 그러나 지나치게 결과 중심적인 사고로 인해 과정에서의 즐거움을 놓칠 수 있으며, 실패를 두려워하여 새로운 도전을 주저할 수 있습니다. 완벽한 계획에만 의존하다 보면 변화하는 상황에 대한 적응력이 떨어질 위험이 있으므로 유연성을 기르는 것이 필요합니다.",
      "세밀한 분석적 사고로 전문직에 적합한 성향을 가지고 있습니다. 지속적인 학습을 통해 더욱 발전할 수 있으며, 복잡한 문제를 논리적으로 해결하는 능력이 뛰어납니다. 당신은 정확성과 전문성을 중시하는 분야에서 두각을 나타낼 것이며, 깊이 있는 지식과 경험을 바탕으로 신뢰받는 전문가가 될 수 있습니다. 다만 지나치게 완벽을 추구하다 보니 일의 진행 속도가 느려질 수 있으며, 세부사항에만 집중하여 큰 그림을 놓칠 위험이 있습니다. 또한 변화에 대한 적응이 느리고 새로운 아이디어에 대해 보수적인 반응을 보일 수 있으므로, 개방적인 사고를 기르는 것이 중요합니다.",
      "태양선이 뚜렷하여 예술적 재능과 창의력이 뛰어납니다. 문화예술 분야나 미디어 관련 직업에서 큰 성취를 이룰 가능성이 높으며, 독창적인 아이디어와 뛰어난 표현력으로 많은 사람들에게 감동을 줄 수 있습니다. 당신의 창작물은 시대를 초월한 가치를 지닐 것이며, 예술을 통해 사회에 긍정적인 영향을 미칠 수 있습니다. 그러나 예술가 특유의 예민한 감성으로 인해 비판에 취약할 수 있으며, 불안정한 수입으로 인한 경제적 어려움을 겪을 가능성이 있습니다. 또한 완벽한 작품을 추구하다 보니 작업 완성을 미루는 경향이 있어 실용적인 접근법을 익히는 것이 필요합니다.",
      "수성구가 발달하여 상업적 감각과 소통 능력이 뛰어납니다. 사업이나 영업, 교육 분야에서 두각을 나타낼 것이며, 사람들과의 관계를 통해 큰 성공을 거둘 수 있습니다. 당신은 타인의 마음을 읽고 적절한 소통을 하는 능력이 뛰어나며, 이를 바탕으로 윈윈하는 관계를 만들어가는 재능이 있습니다. 다만 지나치게 타인의 평가를 의식하여 자신의 진정한 의견을 숨기는 경향이 있으며, 단기적 이익에만 집중하여 장기적 비전을 놓칠 위험이 있습니다. 또한 관계 의존적인 성향으로 인해 혼자서는 결정하기 어려워할 수 있으므로 독립적인 판단력을 기르는 것이 중요합니다.",
      "목성구의 발달이 좋아 지도력과 판단력이 우수합니다. 관리직이나 공직, 교육계에서 성공할 운명을 가지고 있으며, 공정하고 현명한 리더로서 많은 사람들의 존경을 받을 것입니다. 당신은 큰 그림을 보는 안목과 다양한 이해관계자들 사이에서 균형을 맞추는 능력이 뛰어납니다. 그러나 때로는 너무 신중한 나머지 결정을 내리는데 시간이 오래 걸릴 수 있으며, 모든 사람을 만족시키려다 보니 명확한 방향성을 제시하지 못할 위험이 있습니다. 또한 높은 도덕적 기준으로 인해 현실적 타협을 어려워할 수 있으므로 실용적 접근법을 익히는 것이 필요합니다.",
      "화성평원이 넓고 탄탄하여 실행력과 추진력이 강합니다. 새로운 분야를 개척하거나 혁신적인 사업을 성공시킬 능력이 있으며, 어떤 도전에도 굴복하지 않는 강인한 정신력을 가지고 있습니다. 당신은 빠른 결정력과 과감한 실행력으로 기회를 놓치지 않고 성과를 창출해낼 것입니다. 다만 성급한 성격으로 인해 충분한 검토 없이 무모한 도전을 할 위험이 있으며, 단기적 성과에만 집중하여 지속가능성을 간과할 수 있습니다. 또한 경쟁적인 성향으로 인해 동료들과의 갈등을 야기할 수 있으므로 협력적인 태도를 기르는 것이 중요합니다."
    ]
  },
  indian: {
    overallTemplates: [
      "당신의 손금은 깊은 영적 진화와 물질적 성공 잠재력을 동시에 축복받은 영혼을 보여줍니다. 손의 구성이 전생의 균형 잡힌 카르마를 나타내며, 영적 성장과 세속적 성취를 동시에 이룰 운명임을 시사합니다. 당신의 선 형태에서 신적 축복을 볼 수 있으며, 목성구의 강도가 여러 생에 걸쳐 쌓인 지혜와 우주적 힘의 축복을 받은 천성적 리더십을 나타냅니다. 영적 수행을 통해 내면의 평화를 찾을 것이며, 동시에 물질적 풍요도 얻을 수 있을 것입니다. 다만 영적 추구와 현실적 필요 사이에서 갈등을 느낄 때가 있으며, 지나친 이상주의로 인해 실용적 판단을 소홀히 할 위험이 있습니다. 또한 카르마적 부채로 인한 예상치 못한 시련을 겪을 수 있으므로 인내심과 겸손함을 유지하는 것이 중요합니다.",
      "조화로운 행성 영향력, 특히 강한 목성과 금성 에너지를 보여줍니다. 손바닥 구조가 영적 가르침과 물질적 번영의 목적을 가진 화신임을 나타내며, 다르마적 인생 경로 - 의로운 의무 수행을 통해 목샤(해탈)에 이르는 - 의 징조를 보입니다. 당신은 도덕적 원칙을 중시하며 정의로운 길을 걸어갈 것이고, 이를 통해 내적 만족과 외적 성취를 동시에 얻을 수 있습니다. 그러나 때로는 지나치게 높은 도덕적 기준으로 인해 타인을 판단하거나 자신에게 과도한 죄책감을 느낄 수 있으며, 완벽한 다르마를 추구하다 보니 현실적 타협이 어려울 때가 있습니다. 균형 잡힌 관점을 유지하며 실용적 지혜를 기르는 것이 필요합니다.",
      "당신의 손금은 사라스와티의 축복을 받은 예술적, 지적 추구를 통한 영혼의 진화를 보여줍니다. 구성이 전생에서 창예술 분야의 숙달을 시사하며, 이제 타고난 재능으로 현현되고 있습니다. 균형 잡힌 도샤 체질과 강한 영적 면역력, 자연 치유 능력을 보여주어 몸과 마음의 건강을 유지할 수 있을 것입니다. 창조적 영감을 통해 많은 사람들에게 기쁨과 깨달음을 줄 수 있으며, 예술과 영성을 결합한 독특한 길을 개척할 것입니다. 다만 예술가 특유의 예민함으로 인해 세속적 비판에 상처받기 쉬우며, 영적 완벽주의로 인한 자기 비난과 우울감을 주의해야 합니다. 또한 물질적 안정을 소홀히 하여 경제적 어려움을 겪을 가능성이 있으므로 현실적 계획을 세우는 것이 중요합니다."
    ],
    loveTemplates: [
      "당신의 연애 관계에서 카르마적 영혼 연결을 나타냅니다. 심장선 형태가 평범한 관계를 초월하는 신성한 사랑과 영적 동반자적 역량을 보여주며, 전생에서부터 이어진 깊은 인연을 현재에 만날 가능성이 높습니다. 당신은 사랑을 통해 영적 성장을 이루며, 상대방과 함께 더 높은 의식 단계로 나아갈 수 있습니다. 그러나 지나치게 이상적인 사랑을 추구하다 보니 현실의 연인에게 실망하기 쉬우며, 영적 완벽주의로 인해 상대방에게 과도한 기대를 할 위험이 있습니다. 또한 카르마적 시험으로 인한 관계의 어려움을 겪을 수 있으므로 인내심과 용서의 마음을 기르는 것이 중요합니다.",
      "당신의 심장선은 순수한 사랑의 선으로, 다르마와 함께하는 영적 진화에 기반한 관계를 나타냅니다. 사랑에 있어 도덕적 원칙과 영적 가치를 중시하며, 단순한 욕망을 넘어선 신성한 사랑을 추구합니다. 당신의 사랑은 상대방의 영혼을 정화시키고 성장시키는 힘이 있으며, 서로를 더 나은 사람으로 만들어가는 관계를 구축할 것입니다. 다만 지나치게 높은 도덕적 기준으로 인해 상대방을 판단하거나 제약하려 할 수 있으며, 세속적 즐거움을 경시하여 관계에 경직성이 생길 위험이 있습니다. 사랑의 다양한 측면을 받아들이는 유연성을 기르는 것이 필요합니다.",
      "당신의 손금은 조화로운 관계를 위한 파르바티와 시바의 축복을 보여줍니다. 영적 각성에 도움이 되는 사랑의 잠재력을 가지고 있으며, 상반된 에너지를 조화시키는 능력이 뛰어납니다. 당신은 남성성과 여성성, 물질과 영성의 균형을 이루는 관계를 만들어갈 것이며, 상대방과 함께 완전한 합일을 이룰 수 있습니다. 그러나 완벽한 조화를 추구하다 보니 갈등을 회피하려는 경향이 있으며, 진정한 소통 없이 표면적 평화만을 유지하려 할 위험이 있습니다. 건설적인 갈등을 통해 더 깊은 이해에 도달하는 법을 배우는 것이 중요합니다.",
      "라다와 크리슈나의 신성한 사랑을 상징하는 손금 형태로, 물질적 사랑을 넘어선 영적 결합의 가능성을 보여줍니다. 전생의 인연이 이생에서 재현될 운명이며, 운명적인 만남을 통해 삶이 완전히 변화할 것입니다. 당신의 사랑은 헌신적이고 무조건적이며, 상대방을 위해서라면 어떤 희생도 마다하지 않는 순수한 마음을 가지고 있습니다. 다만 지나친 헌신으로 인해 자신을 잃을 위험이 있으며, 상대방에 대한 집착이 강해져 건강하지 못한 의존관계를 형성할 수 있습니다. 사랑 안에서도 개인의 독립성을 유지하는 균형감각을 기르는 것이 필요합니다.",
      "금성 손가락 아래의 선들이 강한 바크티 헌신 에너지를 나타내어, 사랑을 통해 영적 성장을 이루는 특별한 능력을 가지고 있습니다. 당신은 사랑하는 사람을 신성한 존재로 여기며, 그들을 섬기는 것을 통해 자신의 영혼을 정화시켜 나갑니다. 이러한 헌신적 사랑은 깊은 만족감과 영적 기쁨을 가져다줄 것입니다. 그러나 맹목적인 헌신으로 인해 상대방의 결점을 간과하거나 자신의 가치를 과소평가할 위험이 있으며, 일방적인 사랑으로 인해 균형 잡힌 관계를 형성하지 못할 수 있습니다. 상호 존중과 평등한 사랑의 중요성을 인식하는 것이 중요합니다.",
      "카파 도샤가 강하여 안정적이고 지속적인 관계를 추구하는 성향이 있으며, 가정과 가족에 대한 깊은 애정을 보여줍니다. 당신은 평온하고 조화로운 관계를 원하며, 상대방에게 안정감과 보호받는 느낌을 줄 수 있는 따뜻한 성품을 가지고 있습니다. 전통적 가치를 중시하며 오래도록 지속될 수 있는 견고한 관계를 구축하는 능력이 뛰어납니다. 다만 변화를 회피하는 성향으로 인해 관계의 성장과 발전을 저해할 수 있으며, 지나친 안정성 추구로 인해 관계에 활력이 부족할 위험이 있습니다. 적절한 변화와 새로운 경험을 받아들이는 개방성을 기르는 것이 필요합니다."
    ],
    careerTemplates: [
      "다르마적 직업에서의 리더십을 위한 강한 라자식 역동적 및 사트빅 순수한 에너지를 보여줍니다. 운명선이 가르침, 치유, 또는 영적 안내와 연결된 인생 목적을 나타내며, 타인의 영적 성장을 돕는 직업에서 큰 성취를 이룰 것입니다. 당신은 물질적 성공과 영적 만족을 동시에 추구할 수 있는 균형 잡힌 직업관을 가지고 있습니다. 그러나 지나치게 이상적인 목표 설정으로 인해 현실적 제약을 간과할 수 있으며, 완벽한 다르마를 추구하다 보니 실용적 타협이 어려울 때가 있습니다. 또한 영적 우월감으로 인해 동료들과 갈등을 빚을 위험이 있으므로 겸손함을 유지하는 것이 중요합니다.",
      "당신의 손 형태가 집단선을 위한 직업 - 의학, 교육, 영적 상담, 또는 의식을 향상시키는 예술 - 에 적합함을 보여줍니다. 타인을 돕고 치유하는 일에서 깊은 만족감을 느낄 것이며, 사회적 기여를 통해 자아실현을 이룰 수 있습니다. 당신의 자비로운 마음과 지혜로운 조언은 많은 사람들에게 도움이 될 것입니다. 다만 타인을 위한 희생이 과도하여 자신의 필요를 소홀히 할 위험이 있으며, 감정적 부담으로 인한 번아웃을 주의해야 합니다. 또한 경제적 보상이 적은 봉사직에만 관심을 가져 물질적 안정을 확보하기 어려울 수 있으므로 현실적 계획을 세우는 것이 필요합니다.",
      "손바닥 구조가 물질적 성공과 영적 봉사를 균형 잡는 직업으로의 카르마적 소명을 보여주며, 집착 없는 행동의 길을 따릅니다. 당신은 결과에 대한 욕망 없이 최선을 다하는 능력이 있으며, 이러한 태도는 예상치 못한 큰 성공을 가져다줄 것입니다. 일 자체에서 기쁨을 찾는 능력이 있어 어떤 직업을 택하든 만족할 수 있습니다. 그러나 지나치게 결과를 초월하려다 보니 목표 의식이 부족하여 성취가 제한될 수 있으며, 현실적 계획 수립을 소홀히 할 위험이 있습니다. 영적 자세와 실용적 접근의 균형을 맞추는 것이 중요합니다.",
      "브라만 바르나의 특성을 보여주는 손 형태로, 지식과 지혜를 전달하는 직업에서 큰 성취를 이룰 운명입니다. 학자, 연구자, 영적 지도자의 길이 열려있으며, 깊이 있는 학문적 탐구를 통해 인류의 지혜에 기여할 것입니다. 당신의 통찰력과 지적 능력은 많은 사람들에게 영감을 줄 것입니다. 다만 이론적 지식에만 치중하여 실용적 적용을 소홀히 할 수 있으며, 지적 우월감으로 인해 타인과의 소통에 어려움을 겪을 위험이 있습니다. 또한 학문적 완벽주의로 인해 연구나 저술 활동의 완성을 미루는 경향이 있으므로 실행력을 기르는 것이 필요합니다.",
      "크샤트리야 바르나의 용기와 보호 본능을 나타내는 손금으로, 사회 정의와 약자 보호에 관련된 직업에서 성공할 가능성이 높습니다. 당신은 불의에 맞서는 용기와 정의감을 가지고 있으며, 약한 자를 보호하고 올바른 질서를 세우는 일에서 큰 보람을 느낄 것입니다. 리더십과 결단력이 뛰어나 어려운 상황에서도 올바른 판단을 내릴 수 있습니다. 그러나 지나친 정의감으로 인해 융통성이 부족할 수 있으며, 완벽한 정의를 추구하다 보니 현실적 타협을 거부하여 갈등을 증폭시킬 위험이 있습니다. 균형 잡힌 접근법을 익히는 것이 중요합니다.",
      "바이샤 바르나의 상업적 감각과 풍요를 창조하는 능력을 보여주어, 사업이나 무역, 금융 분야에서 큰 성과를 거둘 수 있습니다. 당신은 경제적 기회를 포착하는 뛰어난 직감과 실용적 지혜를 가지고 있으며, 부를 창조하고 유통시키는 재능이 있습니다. 물질적 성공을 통해 자신과 타인의 삶을 향상시킬 수 있을 것입니다. 다만 이익 추구에만 집중하여 도덕적 가치를 소홀히 할 위험이 있으며, 단기적 수익에만 관심을 가져 장기적 지속가능성을 간과할 수 있습니다. 또한 물질적 성공에 집착하여 인간관계나 건강을 희생할 가능성이 있으므로 균형 잡힌 가치관을 유지하는 것이 중요합니다.",
      "목샤 해탈을 향한 영적 여정과 동시에 세속적 성공을 이루는 균형잡힌 삶의 경로가 운명선에 새겨져 있습니다. 당신은 물질적 성취와 영적 깨달음을 분리하지 않고 통합적으로 추구하는 독특한 능력을 가지고 있습니다. 일상적인 업무를 통해서도 영적 성장을 이룰 수 있으며, 성공과 실패를 초월한 평온한 마음을 유지할 것입니다. 그러나 지나치게 초월적 관점으로 인해 현실적 노력을 소홀히 할 수 있으며, 세속적 책임을 회피하려는 경향이 있을 위험이 있습니다. 영적 추구와 현실적 의무의 조화를 이루는 것이 중요합니다."
    ]
  }
};
