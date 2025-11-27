import type { CulturalContext } from "@shared/schema";

// Multi-language content structures
interface CulturalData {
  overallTemplates: string[];
  loveTemplates: string[];
  careerTemplates: string[];
}

// 문화권별 분석 데이터
export const CULTURAL_ANALYSIS = {
  western: {
    overallTemplates: [
      "Your palm reveals a fascinating tapestry of personality traits rooted in Western palmistry traditions. The prominent heart line indicates you approach love with deep sincerity and emotional intelligence, suggesting a natural ability to form profound, meaningful relationships throughout your life journey. Your hand structure shows a blend of Fire and Water elements, indicating passionate yet intuitive nature. The spacing between your fingers reveals an open-minded approach to life, while the flexibility of your thumb suggests adaptability in challenging situations. The overall harmony between your major lines indicates a well-balanced individual who can successfully navigate both emotional and practical aspects of life.",
      "According to Western chirognomy principles, you possess a remarkably harmonious character that naturally earns trust and respect from those around you. Your strong, well-defined life line curves gracefully around the Venus mount, indicating not only robust physical health but also a vibrant, energetic approach to life's challenges. The depth and clarity of your lines suggest strong vital energy and resilience. Your palm's texture and color indicate good circulation and a naturally optimistic disposition. The presence of minor lines supporting your major ones shows additional talents and interests that will enrich your life experience. This combination suggests you will lead a long, healthy, and remarkably fulfilling life.",
      "Your hand reveals the perfect synthesis of artistic sensitivity and logical reasoning, embodying the Renaissance ideal of a complete individual. The graceful curve of your head line indicates creative intelligence, while its connection to your life line shows practical wisdom in applying your ideas. Western palmistry identifies this as the mark of someone destined for achievement in creative or intellectual fields. Your fingers' proportions suggest strong aesthetic sense, while the development of your Apollo mount indicates potential for recognition and success. The fine lines branching from your major lines are traditional signs of multiple talents and diverse interests that will contribute to your success.",
      "Your palm displays the unmistakable signs of natural leadership and extraordinary willpower, characteristics highly valued in Western palmistry tradition. The straight, deep fate line rising prominently through your palm indicates strong external influences working in your favor and suggests very high potential for achieving your ambitious goals. Your thumb's strength and the well-developed Jupiter mount beneath your index finger are classical signs of leadership ability and self-confidence. The way your lines intersect shows decisive moments in your future where your strong will shall guide you to success. These markings traditionally indicate someone destined for positions of authority and influence.",
      "Your hand beautifully demonstrates the harmony between emotional depth and intellectual prowess that Western palmistry considers the foundation of personal success. The balanced relationship between your heart and head lines suggests exceptional ability in human relationships, whether personal or professional. Your palm's overall symmetry indicates inner balance and emotional stability. The clear, unbroken nature of your major lines shows consistency in your approach to life's challenges. Small supporting lines indicate various talents and interests that will contribute to your social success. This combination traditionally signifies someone who will be both loved and respected throughout their life.",
      "Your palm reveals an independent and progressive nature with exceptional ability to pioneer new paths, traits that Western palmistry associates with innovators and trailblazers. The unique spacing and formation of your lines suggest someone who thinks outside conventional boundaries. Your hand's overall energy, as indicated by line depth and finger flexibility, shows strong personal magnetism and the courage to pursue unconventional paths. The development of your mounts indicates natural entrepreneurial abilities and the confidence to take calculated risks. These characteristics have historically been associated with individuals who make significant contributions to their chosen fields.",
      "Your hand displays the gentle strength and natural healing abilities that Western palmistry recognizes in those destined to serve and guide others. The fine network of lines throughout your palm indicates sensitivity and empathy, while the steady strength of your major lines shows the emotional resilience necessary for helping others. Your palm's texture and the positioning of your lines suggest someone with natural therapeutic abilities, whether in traditional healing arts or in providing emotional support and guidance. The classical palmistry texts describe such hands as belonging to those who find their greatest fulfillment in service to others and who possess the rare gift of bringing comfort and wisdom to those in need."
    ],
    loveTemplates: [
      "Your heart line's distinctive starting point below the index finger reveals a fascinating aspect of your romantic nature according to Western palmistry traditions. This placement indicates you naturally take a leading, confident role in romantic relationships, showing initiative in matters of the heart while maintaining genuine sincerity. The line's curve and depth suggest you possess strong emotional intelligence and the ability to understand your partner's needs intuitively. Western chiromancy interprets this formation as indicating someone who will experience several meaningful relationships before finding their true soulmate. Your approach to love combines passion with wisdom, and your natural leadership in romance will attract partners who appreciate your direct, honest approach to emotional expression.",
      "The remarkable length and impressive depth of your heart line tell a compelling story about your approach to love and relationships. In Western palmistry, such a well-defined heart line indicates not only serious dedication to romantic partners but also the emotional maturity to sustain deep, meaningful connections. The way your heart line curves upward suggests optimism in love and the ability to see the best in others. Small branches extending from the main line are traditional signs of multiple romantic opportunities and the potential for a truly extraordinary partnership. The classical interpretation suggests that someone with your heart line formation will meet their ideal partner through intellectual or creative pursuits, and this union will be both passionate and enduring.",
      "Your palm reveals exceptionally strong romantic tendencies combined with rich, sophisticated emotional expression that Western palmistry associates with deeply loving individuals. The graceful curve of your heart line indicates natural romantic instincts, while its intersection with other lines suggests your ability to balance love with other life priorities. The fine lines radiating from your heart line are traditional indicators of multiple admirers and the capacity for inspiring deep devotion in others. Your natural empathy, as shown by the line's formation, means you instinctively understand and respond to your partner's emotional needs. This combination of traits suggests not only high potential for personal happiness in love but also the ability to create relationships that serve as inspiration to others.",
      "Your heart line's steady, unbroken formation reveals a preference for stable, enduring relationships built on trust and mutual commitment. In Western palmistry tradition, this type of line formation indicates someone who approaches love with careful consideration and, once committed, demonstrates unwavering loyalty and sincere devotion. The line's depth suggests emotional strength and the ability to weather relationship challenges with grace and determination. Supporting lines indicate that your partnerships will be blessed with longevity and deep mutual understanding. Classical palmistry texts describe individuals with your heart line formation as those who create the foundation for lasting love stories, often serving as examples of committed partnership for their family and friends.",
      "Your beautifully balanced heart line formation indicates you pursue love with remarkable emotional equilibrium and minimal dramatic fluctuations, traits that Western palmistry identifies with mature, successful relationships. The line's steady progression across your palm suggests consistent emotional growth and the wisdom to build relationships on solid foundations of mutual understanding and respect. The subtle branches and connections to other lines indicate your ability to integrate romantic love with other important aspects of life, creating harmonious balance. This formation traditionally signifies someone who will experience deep, lasting love that grows stronger over time, built on genuine friendship and shared values rather than mere passion alone.",
      "Your heart line's vibrant energy and clear definition reveal someone who seeks passionate, authentic love with complete honesty and emotional transparency. Western palmistry interprets this formation as indicating exceptional ability to express your feelings openly and create genuine emotional intimacy with partners. The line's dynamic quality suggests you bring enthusiasm and joy to relationships while maintaining the emotional intelligence to navigate complex romantic situations. The way your heart line connects with other aspects of your palm indicates natural charisma and the ability to inspire deep affection in others. Classical interpretations suggest that your direct, sincere approach to emotional expression will attract partners who value authenticity and passionate commitment in love."
    ],
    careerTemplates: [
      "A clear fate line indicates goal-oriented nature with high potential for success. You can achieve great results in creative fields or arts-related businesses.",
      "Strong leadership and excellent drive suggest you will take important roles in organizations. You can excel in management or business positions.",
      "Your detailed and analytical thinking makes you suitable for professional careers. Continuous learning will lead to further development.",
      "Excellent communication skills make you successful in service or education fields. You will find fulfillment in helping others.",
      "Rich creative ideas make you suitable for pioneering new fields. You can excel in innovative businesses or technology sectors.",
      "Being meticulous and responsible makes you successful in specialized technical positions. You will demonstrate outstanding abilities in fields requiring precision."
    ]
  },
  
  eastern: {
    overallTemplates: [
      "음양오행의 원리로 살펴본 당신의 손금은 매우 특별한 기운을 담고 있습니다. 을기선(감정선)의 형태와 흐름으로 보아 당신은 타고난 직감력과 뛰어난 창의성을 지닌 분입니다. 마의상법에 따르면 이러한 선상은 예술적 재능과 영성이 높은 사람에게서 나타나는 특징입니다. 특히 감정선이 목성구 쪽으로 뻗어나가는 형태는 사랑에 대해 진실하고 순수한 마음을 가진 증거이며, 인생에서 의미 있고 깊은 관계들을 만들어갈 것임을 보여줍니다. 손가락의 길이와 손바닥의 비율을 통해 보면 당신은 목(木) 기운이 강한 체질로, 성장과 발전의 에너지가 넘치는 분입니다.",
      "주역의 팔괘로 해석해보면 당신의 손금은 건괘(☰)와 곤괘(☷)의 조화를 보여주는 균형잡힌 성격을 나타냅니다. 생명선이 깊고 명확하게 새겨진 것은 선천적으로 타고난 건강한 체질과 강인한 생명력을 의미합니다. 동양 수상학에서 이러한 생명선을 '용맥지상(龍脈之相)'이라 하여 매우 길한 것으로 봅니다. 또한 손바닥의 색깔과 윤기로 보아 혈기가 왕성하고 기운이 순환이 잘 되는 체질입니다. 손목 부근의 세 개 선(팔찌선)이 뚜렷한 것은 장수와 부귀를 상징하며, 주변 사람들에게 신뢰받는 덕성을 갖춘 분임을 보여줍니다. 이는 건강하고 활력 넘치는 삶을 살아가며 많은 이들에게 좋은 영향을 미칠 것임을 예시합니다.",
      "정기선(두뇌선)의 굴곡과 길이를 통해 보면 당신은 예술적 감성과 논리적 사고를 완벽하게 조화시킨 매우 드문 인재입니다. 동양 수상학에서 이러한 형태의 정기선을 '문곡지상(文曲之相)'이라 하여 학문과 예술 분야에서 큰 성취를 이룰 상으로 봅니다. 특히 정기선이 태음구 쪽으로 향하는 모습은 상상력과 직감이 뛰어난 창작자의 특징을 보여줍니다. 손가락 마디의 발달 상태로 보아 세심함과 완벽주의적 성향도 함께 갖추고 있어, 창의적인 아이디어를 현실로 구현하는 능력이 탁월합니다. 오행으로는 금(金)과 수(水)의 기운이 조화롭게 배치되어 있어, 창의적 분야에서의 성공과 명성을 얻을 가능성이 매우 높습니다.",
      "경의선(운명선)이 손바닥 중앙을 관통하며 곧게 뻗어있는 모습은 타고난 리더십과 불굴의 의지력을 보여주는 대길한 상입니다. 동양 고전 『마의상법』에서는 이러한 운명선을 '제왕지상(帝王之相)'의 하나로 분류하며, 큰 뜻을 품고 이를 반드시 성취하는 인물의 특징이라 하였습니다. 특히 운명선이 감정선과 교차하는 지점의 형태로 보아, 중년 이후 더욱 큰 성공을 거둘 것임을 알 수 있습니다. 손바닥의 두께와 탄력성은 강한 추진력과 실행력을 나타내며, 목표를 향한 집중력이 남다릅니다. 태양구의 발달로 보아 사회적 지위와 명예를 얻을 운명이며, 많은 사람들에게 영향을 미치는 지도자가 될 것입니다.",
      "을기선(감정선)과 정기선(두뇌선)이 이루는 조화로운 각도는 따뜻한 마음과 깊은 사고력을 완벽하게 겸비한 현명한 분임을 보여줍니다. 이러한 선상의 배치는 동양 수상학에서 '문무겸비(文武兼備)'의 상으로 불리며, 학식과 덕성을 모두 갖춘 완인(完人)의 특징입니다. 특히 두 선이 만나는 지점에서 뻗어나가는 세부 선들은 다양한 분야에서의 재능과 폭넓은 인맥을 의미합니다. 손가락 사이의 간격으로 보아 포용력이 크고 너그러운 성품을 지녔으며, 사람들과의 관계에서 자연스럽게 중심 역할을 하게 될 것입니다. 이는 인간관계뿐만 아니라 사업이나 직업 분야에서도 큰 성공을 거둘 것임을 시사합니다.",
      "손금의 전체적인 기운과 각 선의 독립성으로 보아 당신은 매우 독립적이고 진취적인 성향을 지닌 개척자형 인물입니다. 특히 생명선이 엄지 쪽으로 넓게 둘러싸인 형태는 자립심이 강하고 남에게 의존하지 않는 성격을 나타냅니다. 동양 수상학에서는 이를 '자수성가상(自手成家相)'이라 하여 스스로 운명을 개척해나가는 능력이 뛰어남을 의미합니다. 또한 소지 아래 수성구의 발달로 보아 상술과 사업 감각이 뛰어나며, 새로운 분야를 개척하는 선구자적 역할을 할 것입니다. 오행으로는 화(火)와 토(土)의 기운이 강해 추진력과 안정성을 모두 갖춘 이상적인 창업가의 기질을 보여줍니다.",
      "손바닥의 섬세한 격자무늬와 부드러운 살결은 세심하고 배려심 깊은 성격을 나타내며, 이는 주변 사람들에게 큰 도움과 위안을 주는 치유자의 기질을 보여줍니다. 동양 전통 의학에서 말하는 '의덕지상(醫德之相)'으로, 타인의 아픔을 공감하고 치유하는 능력이 타고난 분입니다. 특히 손바닥 중앙 부분의 미세한 선들이 이루는 패턴은 직관력과 영성이 뛰어남을 의미하며, 상담이나 치료 분야에서 특별한 재능을 발휘할 것입니다. 건강선의 형태로 보아 자신뿐만 아니라 타인의 건강도 돌볼 수 있는 능력을 지녔으며, 봉사와 헌신을 통해 진정한 행복과 만족을 찾게 될 것입니다. 이러한 덕성은 많은 사람들에게 존경받고 사랑받는 인물이 될 것임을 예시합니다."
    ],
    loveTemplates: [
      "을기선(감정선)이 검지 아래에서 시작되어 연애에서 주도적인 역할을 하는 성향입니다. 진실한 마음으로 상대방을 대하면 깊은 사랑을 만날 수 있습니다.",
      "감정선의 길이와 깊이로 보아 사랑에 진지하고 헌신적인 모습을 보일 것입니다. 이상적인 파트너와의 만남이 기다리고 있습니다.",
      "로맨틱한 성향이 강하며 감정 표현이 풍부한 타입입니다. 상대방에 대한 배려심이 깊어 행복한 연애를 할 가능성이 높습니다.",
      "안정적이고 지속적인 관계를 선호하는 성향입니다. 한번 마음을 정하면 변하지 않는 진실한 사랑을 보여줄 것입니다.",
      "감정의 기복이 적고 균형잡힌 사랑을 추구합니다. 서로를 이해하고 존중하는 성숙한 관계를 만들어갈 것입니다.",
      "열정적이고 솔직한 사랑을 추구하는 타입입니다. 감정 표현이 자유롭고 상대방에게 진심을 전달하는 능력이 뛰어납니다."
    ],
    careerTemplates: [
      "정기선(운명선)이 뚜렷하여 목표 지향적이며 성공 가능성이 높습니다. 창의적 분야나 예술 관련 사업에서 큰 성과를 거둘 수 있습니다.",
      "리더십이 강하고 추진력이 뛰어나 조직에서 중요한 역할을 맡게 될 것입니다. 관리직이나 경영 분야에서 두각을 나타낼 수 있습니다.",
      "세밀하고 분석적인 사고력을 바탕으로 전문직에서 성공할 가능성이 높습니다. 지속적인 학습으로 더욱 발전할 수 있습니다.",
      "사람들과의 소통 능력이 뛰어나 서비스업이나 교육 분야에서 성공할 것입니다. 타인을 도우는 일에서 보람을 느낄 것입니다.",
      "창의적 아이디어가 풍부하여 새로운 분야 개척에 적합합니다. 혁신적인 사업이나 기술 분야에서 두각을 나타낼 수 있습니다.",
      "꼼꼼하고 책임감이 강하여 전문 기술직에서 성공할 가능성이 높습니다. 정확성을 요구하는 분야에서 뛰어난 능력을 발휘할 것입니다."
    ]
  },
  
  indian: {
    overallTemplates: [
      "वैदिक ज्योतिष और सामुद्रिक शास्त्र के अनुसार आपकी हस्तरेखा में अत्यंत शुभ योग दिखाई दे रहे हैं। आपकी हृदय रेखा की स्थिति और गहराई से पता चलता है कि आपमें प्रबल अंतर्ज्ञान और असाधारण रचनात्मकता है। प्राचीन भारतीय ग्रंथों के अनुसार इस प्रकार की हृदय रेखा वाले व्यक्ति कर्म और भाग्य के बीच संतुलन बनाने में सिद्धहस्त होते हैं। आपके हाथ की बनावट से लगता है कि आप पूर्व जन्म के शुभ कर्मों का फल भोग रहे हैं। हस्त संचालन और अंगुलियों की लचक से स्पष्ट है कि आप प्रेम के मामले में अत्यंत सच्चे और निष्ठावान हैं। जीवन में आप गहरे और अर्थपूर्ण रिश्ते बनाएंगे जो आपके आध्यात्मिक विकास में सहायक होंगे।",
      "आपकी हथेली में दिखाई दे रही रेखाओं का समायोजन बताता है कि आप एक अत्यंत संतुलित व्यक्तित्व के स्वामी हैं। भारतीय हस्तरेखा विज्ञान के अनुसार आपकी जीवन रेखा की मजबूती और स्पष्टता दर्शाती है कि आप न केवल दीर्घायु होंगे बल्कि एक स्वस्थ और ऊर्जावान जीवन भी जिएंगे। सामुद्रिक शास्त्र में वर्णित लक्षणों के अनुसार आपके हाथ का रंग और मुलायमता आपके शुद्ध हृदय और सरल स्वभाव को दर्शाते हैं। आसपास के लोग आप पर सहज ही भरोसा करते हैं क्योंकि आपमें प्राकृतिक नेतृत्व की क्षमता है। वैदिक ज्योतिष के अनुसार आपके जीवन में गुरु ग्रह का प्रभाव अत्यधिक शुभ है, जिससे आप जीवन भर अच्छे स्वास्थ्य और खुशहाली का आनंद उठाएंगे।",
      "आपकी मस्तिष्क रेखा की विशेषताएं भारतीय पारंपरिक ज्ञान के अनुसार एक असाधारण व्यक्तित्व का संकेत देती हैं। आपमें कलात्मक संवेदना और तार्किक सोच का अद्भुत मेल है, जो आपको एक संपूर्ण व्यक्तित्व बनाता है। प्राचीन भारतीय ग्रंथों में इस प्रकार के हाथ को 'विद्या योग' का चिह्न माना गया है। आपकी अंगुलियों की लंबाई और उनके बीच का अनुपात दर्शाता है कि आप में प्राकृतिक कलाकार की प्रतिभा है। सरस्वती रेखा (शिक्षा रेखा) की उपस्थिति बताती है कि रचनात्मक क्षेत्रों में आपकी बड़ी उपलब्धियां होने की प्रबल संभावना है। वैदिक ज्योतिष के अनुसार आपके जीवन में बुध ग्रह का अत्यंत शुभ प्रभाव है, जो आपको विद्या, कला और व्यापार में सफलता दिलाएगा।",
      "आपकी भाग्य रेखा की स्पष्टता और गहराई भारतीय हस्तरेखा विज्ञान के अनुसार नेतृत्व और दृढ़ इच्छाशक्ति के स्पष्ट संकेत हैं। सामुद्रिक शास्त्र में इस प्रकार की भाग्य रेखा को 'राजयोग' का चिह्न माना गया है। आपके हाथ में सूर्य रेखा (अपोलो रेखा) की उपस्थिति बताती है कि आप जीवन में उच्च स्थान प्राप्त करेंगे और समाज में सम्मान पाएंगे। आपके अंगूठे की मजबूती और बृहस्पति पर्वत का विकास दर्शाता है कि आप में जन्मजात नेतृत्व क्षमता है। वैदिक ज्योतिष के अनुसार आपके जीवन में सूर्य ग्रह का प्रभाव अत्यंत बलशाली है, जिससे आपके लक्ष्य पूरे होने की संभावना अत्यधिक है। भविष्य में आप न केवल व्यक्तिगत सफलता प्राप्त करेंगे बल्कि अनेक लोगों के लिए प्रेरणा का स्रोत भी बनेंगे।",
      "आपकी हृदय रेखा और मस्तिष्क रेखा के बीच का सामंजस्यपूर्ण संतुलन दर्शाता है कि आप में प्रेमपूर्ण हृदय और गहरी सोच दोनों का अद्भुत मेल है। भारतीय परंपरा के अनुसार इस प्रकार का संयोजन 'चंद्र-बुध योग' कहलाता है, जो बुद्धि और भावना के संतुलन का प्रतीक है। आपकी हथेली में चंद्र पर्वत का विकास आपकी कल्पनाशीलता और सहानुभूति को दर्शाता है। सामुद्रिक शास्त्र के अनुसार आपके हाथ की बनावट ऐसी है कि आप मानवीय रिश्तों में अत्यंत सफल होंगे। आपकी वाणी में मधुरता और व्यवहार में शिष्टाचार है, जिससे लोग आपकी ओर स्वाभाविक रूप से आकर्षित होते हैं। व्यावसायिक क्षेत्र में भी आपकी यह विशेषता आपको बड़ी सफलता दिलाएगी।",
      "आपके हाथ की समग्र ऊर्जा और रेखाओं की स्वतंत्रता स्पष्ट रूप से दर्शाती है कि आप अत्यंत स्वतंत्र और प्रगतिशील विचारधारा के व्यक्ति हैं। भारतीय ज्योतिष शास्त्र में इसे 'केतु ग्रह का प्रभाव' माना जाता है, जो नवाचार और मौलिकता का प्रतीक है। आपकी जीवन रेखा का विस्तार दर्शाता है कि आप में अत्यधिक आत्मनिर्भरता और दूसरों पर निर्भर न रहने की प्रवृत्ति है। सामुद्रिक शास्त्र के अनुसार आपके हाथ में 'स्वावलंबन योग' के स्पष्ट चिह्न हैं। आपकी कनिष्ठा अंगुली के नीचे बुध पर्वत का विकास आपकी व्यापारिक बुद्धि और संवाद कुशलता को दर्शाता है। आप नए क्षेत्रों में काम करने और नवाचार लाने में अग्रणी भूमिका निभाएंगे।",
      "आपकी हथेली की बारीक रेखाओं का जटिल जाल और मुलायम त्वचा दर्शाती है कि आप अत्यंत संवेदनशील और दयालु प्रकृति के व्यक्ति हैं। भारतीय आयुर्वेद और हस्त विज्ञान के अनुसार इस प्रकार के हाथ वाले व्यक्ति में प्राकृतिक चिकित्सक की क्षमता होती है। आपके हाथ में स्वास्थ्य रेखा की उपस्थिति और उसकी स्पष्टता बताती है कि आप न केवल अपने बल्कि दूसरों के स्वास्थ्य की भी देखभाल करने में सक्षम हैं। सामुद्रिक शास्त्र में वर्णित 'दया योग' के सभी लक्षण आपके हाथ में स्पष्ट रूप से मौजूद हैं। आपकी सेवा भावना और परोपकार की प्रवृत्ति आपको समाज में विशेष स्थान दिलाएगी। वैदिक ज्योतिष के अनुसार आपके जीवन में चंद्र ग्रह का कृपापूर्ण प्रभाव है, जो आपको मानसिक शांति और आध्यात्मिक उन्नति प्रदान करेगा।"
    ],
    loveTemplates: [
      "आपकी हृदय रेखा का तर्जनी अंगुली के नीचे से प्रारंभ होने का तात्पर्य भारतीय सामुद्रिक शास्त्र के अनुसार यह है कि प्रेम के मामले में आप स्वभावतः नेतृत्वकारी और पहल करने वाली भूमिका निभाते हैं। वैदिक ज्योतिष में इसे 'मंगल ग्रह का शुभ प्रभाव' माना जाता है, जो साहस और निष्ठा का प्रतीक है। आपकी रेखा की गहराई और स्पष्टता दर्शाती है कि आप प्रेम में अत्यंत ईमानदार और भावुक हैं। प्राचीन भारतीय ग्रंथों के अनुसार आपकी हृदय रेखा का यह स्वरूप बताता है कि आप कई अर्थपूर्ण प्रेम संबंध बनाएंगे और अंततः आपको आपका सच्चा साथी मिलेगा। शुक्र ग्रह की कृपा से आपका प्रेम जीवन खुशियों से भरपूर होगा और आपका साथी आपकी निष्ठा और सच्चाई की सराहना करेगा।",
      "आपकी हृदय रेखा की असाधारण लंबाई और प्रभावशाली गहराई आपके प्रेम और रिश्तों के प्रति दृष्टिकोण की एक मनोहर कहानी कहती है। भारतीय हस्तरेखा विज्ञान के अनुसार इतनी स्पष्ट और परिभाषित हृदय रेखा न केवल रोमांटिक साझीदारों के प्रति गंभीर समर्पण को दर्शाती है बल्कि गहरे, अर्थपूर्ण संबंधों को निरंतर बनाए रखने की भावनात्मक परिपक्वता भी दिखाती है। सामुद्रिक शास्त्र में वर्णित लक्षणों के अनुसार आपकी हृदय रेखा का ऊपर की ओर मुड़ना प्रेम में आशावाद और दूसरों में सर्वोत्तम देखने की क्षमता को दर्शाता है। मुख्य रेखा से निकलने वाली छोटी शाखाएं कई रोमांटिक अवसरों और एक वास्तव में असाधारण साझेदारी की संभावना के पारंपरिक संकेत हैं।",
      "आपकी हथेली में दिखाई दे रही विशेष रूप से प्रबल रोमांटिक प्रवृत्तियां और समृद्ध, परिष्कृत भावनात्मक अभिव्यक्ति का संयोजन भारतीय हस्तरेखा परंपरा में गहन प्रेमी व्यक्तित्व के साथ जुड़ा है। आपकी हृदय रेखा का सुंदर वक्र प्राकृतिक रोमांटिक प्रवृत्तियों को दर्शाता है, जबकि अन्य रेखाओं के साथ इसका प्रतिच्छेदन आपकी प्रेम को जीवन की अन्य प्राथमिकताओं के साथ संतुलित करने की क्षमता को दर्शाता है। आपकी हृदय रेखा से निकलने वाली सूक्ष्म रेखाएं कई प्रशंसकों और दूसरों में गहरी भक्ति प्रेरित करने की क्षमता के पारंपरिक संकेतक हैं। रेखा के निर्माण द्वारा प्रदर्शित आपकी प्राकृतिक सहानुभूति का अर्थ है कि आप सहज रूप से अपने साथी की भावनात्मक आवश्यकताओं को समझते और उनका उत्तर देते हैं।",
      "आपकी हृदय रेखा का स्थिर और निरंतर प्रवाह दर्शाता है कि आप वफादार और दीर्घकालिक रिश्तों को प्राथमिकता देते हैं। भारतीय शास्त्रों में इसे 'एकनिष्ठ प्रेम योग' कहा गया है। एक बार मन तय कर लेने पर आप अडिग और सच्चा प्रेम दिखाएंगे जो जन्म-जन्मांतर तक चलने वाला होगा।",
      "आपकी हृदय रेखा में भावनाओं का संतुलित प्रवाह दिखाई देता है जो कम उतार-चढ़ाव और परिपक्व प्रेम की तलाश को दर्शाता है। सामुद्रिक शास्त्र के अनुसार आप आपसी समझ और सम्मान पर आधारित गहरे रिश्ते बनाएंगे जो आध्यात्मिक एकता तक पहुंचेंगे।",
      "आपकी हृदय रेखा की गतिशील ऊर्जा बताती है कि आप भावुक और सच्चे प्रेम के खोजी हैं। आपकी भावना अभिव्यक्ति स्वतंत्र और निष्कपट है, साथी तक अपना सच्चा मन पहुंचाने की आपकी क्षमता अद्वितीय है। वैदिक ज्योतिष में यह 'हृदय शुद्धता योग' का लक्षण माना जाता है।"
    ],
    careerTemplates: [
      "आपकी भाग्य रेखा की असाधारण स्पष्टता और गहराई भारतीय कर्म सिद्धांत के अनुसार दर्शाती है कि आप अत्यंत लक्ष्य-उन्मुख व्यक्ति हैं। सामुद्रिक शास्त्र में इसे 'धन योग' और 'कीर्ति योग' का संकेत माना गया है। आपकी सूर्य रेखा का विकास बताता है कि रचनात्मक क्षेत्रों, कला, या आध्यात्मिक व्यवसायों में आपकी बड़ी उपलब्धियां होंगी। वैदिक ज्योतिष के अनुसार आपके जीवन में गुरु और सूर्य ग्रहों का संयुक्त प्रभाव है जो सफलता और समृद्धि का गारंटी देता है।",
      "आपकी हथेली में बृहस्पति पर्वत का उत्कृष्ट विकास और अंगूठे की मजबूती स्पष्ट रूप से दर्शाती है कि आप में प्रबल नेतृत्व क्षमता और असाधारण प्रगति की संभावना है। भारतीय राज योग शास्त्र के अनुसार आप संगठनों में अत्यंत महत्वपूर्ण और प्रभावशाली भूमिका निभाएंगे। प्रबंधन, राजनीति, या बड़े व्यावसायिक उद्यमों में आप विशेष पहचान बनाएंगे। आपका प्राकृतिक अधिकार और निर्णय क्षमता लोगों को प्रभावित करने और बड़े बदलाव लाने में सहायक होगी।",
      "आपकी मस्तिष्क रेखा की विस्तृत और गहन संरचना तथा बुध पर्वत का विकास दर्शाता है कि आप में विश्लेषणात्मक और वैज्ञानिक सोच की असाधारण क्षमता है। भारतीय शिक्षा परंपरा में इसे 'विद्या बुद्धि योग' कहा जाता है। चिकित्सा, इंजीनियरिंग, कानून, या अनुसंधान जैसे पेशेवर क्षेत्रों में आपकी सफलता की संभावना अत्यधिक है। सरस्वती रेखा की उपस्थिति बताती है कि निरंतर अध्ययन और ज्ञान अर्जन से आप और भी ऊंचाइयों तक पहुंचेंगे।",
      "आपकी हथेली में चंद्र पर्वत का विकास और हृदय रेखा का मधुर प्रवाह दर्शाता है कि लोगों के साथ आपकी संवाद कुशलता और सहानुभूति की क्षमता उत्कृष्ट है। भारतीय गुरु परंपरा के अनुसार आप शिक्षा, परामर्श, या सामाजिक सेवा के क्षेत्र में अत्यधिक सफलता प्राप्त करेंगे। आपकी वाणी में मधुरता और व्यक्तित्व में आकर्षण है जो दूसरों की समस्याओं का समाधान करने और उन्हें सही दिशा दिखाने में सहायक होगा। इससे आपको गहरी आत्मिक संतुष्टि भी मिलेगी।",
      "आपकी हथेली में दिखाई दे रहे नवाचार के चिह्न और केतु ग्रह का प्रभाव स्पष्ट करता है कि आप में रचनात्मक विचारों की अद्भुत समृद्धता है। भारतीय व्यापार शास्त्र के अनुसार आप नए क्षेत्रों के विकास और अग्रणी उद्यमिता के लिए आदर्श व्यक्तित्व हैं। तकनीकी नवाचार, स्टार्टअप व्यवसाय, या क्रांतिकारी आविष्कारों में आप विशेष पहचान बनाएंगे। आपकी मौलिक सोच और जोखिम उठाने की क्षमता आपको एक सफल उद्यमी बनाने में सहायक होगी।",
      "आपकी हथेली की बारीकियों और शनि पर्वत का संतुलित विकास दर्शाता है कि आप अत्यंत सावधान, जिम्मेदार और पूर्णतावादी व्यक्तित्व के स्वामी हैं। भारतीय कर्म योग के अनुसार आप विशेष तकनीकी पदों, सटीक विज्ञान, या शिल्प कलाओं में असाधारण सफलता प्राप्त करेंगे। आपकी धैर्य और निरंतरता की क्षमता उन क्षेत्रों में उत्कृष्टता दिलाएगी जहां सटीकता और विशेषज्ञता की आवश्यकता है। आपका कार्य न केवल सफल होगा बल्कि दूसरों के लिए आदर्श भी बनेगा।"
    ]
  }
};

// Multi-language templates for Western palmistry
const WESTERN_ANALYSIS_EN = {
  overallTemplates: [
    "Your palm reveals a fascinating tapestry of personality traits rooted in Western palmistry traditions. The prominent heart line indicates you approach love with deep sincerity and emotional intelligence, suggesting a natural ability to form profound, meaningful relationships throughout your life journey. Your hand structure shows a blend of Fire and Water elements, indicating passionate yet intuitive nature. The spacing between your fingers reveals an open-minded approach to life, while the flexibility of your thumb suggests adaptability in challenging situations. The overall harmony between your major lines indicates a well-balanced individual who can successfully navigate both emotional and practical aspects of life.",
    "According to Western chirognomy principles, you possess a remarkably harmonious character that naturally earns trust and respect from those around you. Your strong, well-defined life line curves gracefully around the Venus mount, indicating not only robust physical health but also a vibrant, energetic approach to life's challenges. The depth and clarity of your lines suggest strong vital energy and resilience. Your palm's texture and color indicate good circulation and a naturally optimistic disposition. The presence of minor lines supporting your major ones shows additional talents and interests that will enrich your life experience. This combination suggests you will lead a long, healthy, and remarkably fulfilling life."
  ],
  loveTemplates: [
    "Your heart line's distinctive starting point below the index finger reveals a fascinating aspect of your romantic nature according to Western palmistry traditions. This placement indicates you naturally take a leading, confident role in romantic relationships, showing initiative in matters of the heart while maintaining genuine sincerity. The line's curve and depth suggest you possess strong emotional intelligence and the ability to understand your partner's needs intuitively.",
    "The remarkable length and impressive depth of your heart line tell a compelling story about your approach to love and relationships. In Western palmistry, such a well-defined heart line indicates not only serious dedication to romantic partners but also the emotional maturity to sustain deep, meaningful connections."
  ],
  careerTemplates: [
    "A clear fate line indicates goal-oriented nature with high potential for success. You can achieve great results in creative fields or arts-related businesses.",
    "Strong leadership and excellent drive suggest you will take important roles in organizations. You can excel in management or business positions."
  ]
};

// Helper functions for multi-language support
export function getCulturalAnalysis(context: CulturalContext, language: string = 'ko'): CulturalData {
  // First determine cultural content, then translate to language
  const culturalContent = CULTURAL_ANALYSIS[context];
  
  // If target language is the same as content language, return as-is
  if ((context === 'western' && language === 'en') || 
      ((context === 'eastern' || context === 'indian') && language === 'ko')) {
    return culturalContent;
  }
  
  // Translate cultural content to target language
  return translateCulturalContent(culturalContent, context, language);
}

function translateCulturalContent(content: CulturalData, context: CulturalContext, language: string): CulturalData {
  if (language === 'en') {
    return translateToEnglish(content, context);
  }
  if (language === 'zh') {
    return translateToChinese(content, context);
  }
  if (language === 'ja') {
    return translateToJapanese(content, context);
  }
  if (language === 'hi') {
    return translateToHindi(content, context);
  }
  
  // Default to Korean
  return translateToKorean(content, context);
}

function translateToEnglish(content: CulturalData, context: CulturalContext): CulturalData {
  if (context === 'western') {
    return content; // Already in English
  }
  
  if (context === 'eastern') {
    return {
      overallTemplates: [
        "According to Eastern palmistry traditions rooted in Yin-Yang and I-Ching principles, your palm reveals extraordinary potential for harmony and success. The flow of your emotional line demonstrates innate intuition and creativity. Traditional Eastern palm reading indicates artistic talents and spiritual awareness. Your emotional line extending toward the Jupiter mount shows genuine, pure love and the ability to form meaningful, deep relationships throughout life. Your finger length and palm proportions indicate strong Wood element energy, filled with growth and development potential.",
        "Interpreting through the Eight Trigrams of I-Ching, your palm shows harmony between Qian (☰) and Kun (☷), representing balanced character. Your deeply carved life line indicates innate healthy constitution and strong life force. Eastern palmistry calls this 'Dragon Vein Formation,' considered highly auspicious. Your palm's color and luster show vigorous vital energy with excellent circulation. The three clear lines near your wrist (bracelet lines) symbolize longevity and prosperity, showing trustworthy virtue that earns others' respect.",
        "Your head line's curves and length reveal rare talent that perfectly harmonizes artistic sensitivity with logical thinking. Eastern palmistry terms this formation 'Literary Star Formation,' indicating great achievements in academic and artistic fields. Your head line's direction toward the Moon mount shows outstanding imagination and intuition of creators. Your finger joints' development shows meticulousness and perfectionist tendencies, with exceptional ability to realize creative ideas. The Five Elements show harmonious arrangement of Metal and Water energies, indicating high potential for success and fame in creative fields."
      ],
      loveTemplates: [
        "Your emotional line starting below the index finger indicates a leading, proactive approach to romance with genuine sincerity toward partners.",
        "Your emotional line's length and depth show serious, devoted approach to love. An ideal partnership awaits you.",
        "Strong romantic tendencies with rich emotional expression. Your deep consideration for partners leads to high potential for happy relationships."
      ],
      careerTemplates: [
        "Your fate line crossing straight through palm center shows innate leadership and unwavering willpower - highly auspicious signs. Eastern classic 'Physiognomy Methods' classifies this fate line as 'Emperor Formation,' characteristic of those who harbor great ambitions and achieve them.",
        "Strong goal-oriented nature with excellent professional success potential. Your natural leadership abilities will serve you well in career advancement.",
        "Your detailed analytical thinking makes you suitable for professional careers. Continuous learning leads to further development."
      ]
    };
  }
  
  // Indian tradition in English
  return {
    overallTemplates: [
      "According to ancient Vedic palmistry traditions and karmic principles, your palm reveals a soul blessed with profound spiritual evolution and material success potential. Your hand's configuration shows balanced karma from past lives, indicating spiritual growth and worldly achievement. Traditional Indian palm reading sees divine blessings in your line formations. The strength of your Jupiter mount indicates wisdom gained through multiple lifetimes and natural leadership blessed by cosmic forces.",
      "Vedic astrology principles reflected in your palm show harmonious planetary influences, particularly strong Jupiter and Venus energies. Your palm structure indicates incarnation with purposes of spiritual teaching and material prosperity. Traditional Indian texts describe such formations as signs of dharmic life path - righteous duty fulfillment leading to moksha (liberation).",
      "Your palm reveals soul evolution through artistic and intellectual pursuits, blessed by Saraswati (goddess of wisdom). The configuration suggests past life mastery in creative arts, now manifesting as innate talents. Ayurvedic principles show balanced doshas (constitutional types) with strong spiritual immunity and natural healing abilities."
    ],
    loveTemplates: [
      "Vedic palmistry indicates karmic soul connections in your romantic relationships. Your heart line formation shows capacity for divine love and spiritual partnership that transcends ordinary relationships.",
      "Ancient Indian texts describe your heart line as 'Prema Rekha' - line of pure love, indicating relationships based on dharma and spiritual evolution together.",
      "Your palm shows blessing of Parvati and Shiva for harmonious relationships. Traditional Indian palmistry sees potential for love that serves spiritual awakening."
    ],
    careerTemplates: [
      "Vedic career analysis shows strong Rajasic (dynamic) and Sattvic (pure) energies for leadership in dharmic professions. Your fate line indicates life purpose connected to teaching, healing, or spiritual guidance.",
      "Ancient Indian palmistry identifies your hand formation as suitable for professions serving collective good - medicine, teaching, spiritual counseling, or arts that elevate consciousness.",
      "Your palm structure shows karmic calling toward professions that balance material success with spiritual service, following the path of 'Karma Yoga' - action without attachment."
    ]
  };
}

function translateToChinese(content: CulturalData, context: CulturalContext): CulturalData {
  if (context === 'western') {
    return {
      overallTemplates: [
        "根据西方手相学传统，您的手掌揭示了植根于西方手相学传统的迷人个性特质。突出的感情线表明您以深深的真诚和情感智慧对待爱情，暗示您天生有能力在一生中形成深刻有意义的关系。",
        "您的手掌显示了注定拥有有意义关系和职业成功的经典征象。您纹路的清晰度和深度表明强大的生命力和天然韧性，这将在您的一生中很好地为您服务。"
      ],
      loveTemplates: [
        "您的感情线表明您在爱情方面天生真诚专一。您有能力与恋人建立深厚持久的情感纽带。",
        "您感情线的形成表明您以激情和智慧的方式对待关系，创造出经得起时间考验的有意义联系。"
      ],
      careerTemplates: [
        "您的事业线表明强烈的目标导向性格，具有出色的职业成功潜力。您拥有天生的领导能力，这将在您的职业生涯中很好地为您服务。",
        "您手掌的特征表明您将在需要创造力和分析思维的领域中表现出色。"
      ]
    };
  }
  
  if (context === 'eastern') {
  return content;
}

function translateToJapanese(content: CulturalData, context: CulturalContext): CulturalData {
  if (context === 'western') {
    return {
      overallTemplates: [
        "西洋手相学の伝統に根ざした魅力的な性格特性を、あなたの手のひらは明らかにしています。目立つ感情線は、深い誠実さと感情的知性で愛に取り組むことを示し、人生の旅路で深く意味のある関係を築く生来の能力を示唆しています。",
        "あなたの手のひらは、有意義な関係と職業的成功に定められた人の古典的な兆候を示しています。あなたの線の明確さと深さは、強い生命力と自然な回復力を示し、人生を通じてあなたによく役立つでしょう。"
      ],
      loveTemplates: [
        "あなたの感情線は、愛情において生来誠実で献身的であることを示しています。恋愛パートナーと深く永続的な感情的絆を築く能力があります。",
        "あなたの感情線の形成は、情熱と知恵の両方で関係にアプローチし、時の試練に耐える有意義なつながりを作ることを示唆しています。"
      ],
      careerTemplates: [
        "あなたの運命線は、強い目標指向の性格と職業的成功への優れた潜在能力を示しています。あなたにはキャリアでよく役立つ生来のリーダーシップ能力があります。",
        "あなたの手の特徴は、創造性と分析的思考の両方を必要とする分野で優秀になることを示唆しています。"
      ]
    };
  }
  
  return content; // For eastern/indian contexts, translate from Korean
}

function translateToHindi(content: CulturalData, context: CulturalContext): CulturalData {
  if (context === 'western') {
    return {
      overallTemplates: [
        "पश्चिमी हस्त विद्या की परंपरा के अनुसार, आपकी हथेली व्यक्तित्व विशेषताओं की एक आकर्षक छवि प्रकट करती है। प्रमुख हृदय रेखा दर्शाती है कि आप गहरी ईमानदारी और भावनात्मक बुद्धिमत्ता के साथ प्रेम का सामना करते हैं।",
        "आपकी हथेली उन लोगों के क्लासिक संकेत दिखाती है जो सार्थक रिश्तों और व्यावसायिक सफलता के लिए नियत हैं।"
      ],
      loveTemplates: [
        "आपकी हृदय रेखा दिखाती है कि आप प्रेम के मामले में स्वाभाविक रूप से निष्कपट और समर्पित हैं।",
        "आपकी हृदय रेखा का गठन सुझाता है कि आप जुनून और बुद्धि दोनों के साथ रिश्तों से निपटते हैं।"
      ],
      careerTemplates: [
        "आपकी भाग्य रेखा मजबूत लक्ष्य-उन्मुख प्रकृति और व्यावसायिक सफलता की उत्कृष्ट संभावना को दर्शाती है।",
        "आपके हाथ की विशेषताएं सुझाती हैं कि आप रचनात्मकता और विश्लेषणात्मक सोच दोनों वाले क्षेत्रों में उत्कृष्ट होंगे।"
      ]
    };
  }
  
  return content; // For eastern/indian contexts, translate from Korean
}

function translateToKorean(content: CulturalData, context: CulturalContext): CulturalData {
  if (context === 'western') {
    return {
      overallTemplates: [
        "서양 수상학 전통에 뿌리를 둔 당신의 손금은 매혹적인 성격 특성의 태피스트리를 드러냅니다. 두드러진 감정선은 당신이 깊은 진정성과 감정적 지능으로 사랑에 접근함을 나타내며, 인생 여정에서 깊고 의미 있는 관계를 형성하는 타고난 능력을 시사합니다.",
        "당신의 손금은 의미 있는 관계와 직업적 성공을 위해 운명지어진 사람의 고전적인 징후를 보여줍니다. 당신의 선들의 명확성과 깊이는 강한 생명력과 자연적 회복력을 나타내며, 이는 평생에 걸쳐 당신에게 좋은 도움이 될 것입니다."
      ],
      loveTemplates: [
        "당신의 감정선은 사랑 문제에서 타고나게 진실하고 헌신적임을 나타냅니다. 연인과 깊고 지속적인 감정적 유대를 형성할 능력이 있습니다.",
        "당신의 감정선 형성은 열정과 지혜 모두로 관계에 접근하여 시간의 시험을 견디는 의미 있는 연결을 만든다는 것을 시사합니다."
      ],
      careerTemplates: [
        "당신의 운명선은 강한 목표 지향적 성격과 직업적 성공에 대한 우수한 잠재력을 나타냅니다. 경력에서 잘 도움이 될 타고난 리더십 능력을 가지고 있습니다.",
        "당신의 손의 특성은 창의성과 분석적 사고 모두를 필요로 하는 분야에서 뛰어날 것임을 시사합니다."
      ]
    };
  }
  
  return content; // For eastern/indian contexts (already in Korean)
}

export function getHealthAnalysis(context: CulturalContext, language: string = 'ko'): string[] {
  if (language === 'en') {
    return [
      "Your well-defined life line curves gracefully around the Venus mount, indicating robust physical health and natural vitality. Western palmistry interprets this formation as a sign of strong constitution and excellent resistance to illness.",
      "Your life line shows excellent stability and strength, indicating a naturally healthy constitution with good recovery abilities. The line's clear formation suggests balanced energy levels and effective stress management capabilities."
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
  if (language === 'en') {
    const personalities = [
      "Your head line curves gracefully, showing creative and intuitive tendencies. You possess excellent artistic sense and many original ideas.",
      "Your head line appears straight, indicating logical and analytical thinking preferences. You excel at systematic problem-solving approaches.",
      "Your head line forms a moderate curve, showing balanced thinking patterns. You wisely harmonize emotion and reason.",
      "Your head line is deep and clear, indicating strong concentration and willpower. You have the persistence to see things through to completion."
    ];
    return personalities[type];
  }
  
  if (language === 'zh') {
    const personalities = [
      "您的头脑线呈优雅曲线，显示创造性和直觉倾向。您拥有出色的艺术感觉和许多原创想法。",
      "您的头脑线呈直线状，表明偏好逻辑和分析思维。您擅长系统性的问题解决方法。",
      "您的头脑线形成适度曲线，显示平衡的思维模式。您明智地协调情感和理性。",
      "您的头脑线深而清晰，表明强烈的专注力和意志力。您有坚持到底完成事情的毅力。"
    ];
    return personalities[type];
  }
  
  if (language === 'ja') {
    const personalities = [
      "あなたの頭脳線は優雅な曲線を描き、創造的で直感的な傾向を示しています。優れた芸術的センスと多くの独創的なアイデアを持っています。",
      "あなたの頭脳線は直線的に現れ、論理的で分析的な思考を好むことを示しています。体系的なアプローチで問題を解決する能力に優れています。",
      "あなたの頭脳線は適度な曲線を形成し、バランスの取れた思考パターンを示しています。感情と理性を調和的に活用する賢明な方です。",
      "あなたの頭脳線は深く明確で、強い集中力と意志力を示しています。一度決めたことは最後までやり遂げる粘り強さがあります。"
    ];
    return personalities[type];
  }
  
  if (language === 'hi') {
    const personalities = [
      "आपकी मस्तिष्क रेखा सुंदर वक्र बनाती है, जो रचनात्मक और सहज प्रवृत्ति दिखाती है। आपके पास उत्कृष्ट कलात्मक भावना और कई मौलिक विचार हैं।",
      "आपकी मस्तिष्क रेखा सीधी दिखाई देती है, जो तार्किक और विश्लेषणात्मक सोच की प्राथमिकता दर्शाती है। आप व्यवस्थित समस्या समाधान के तरीकों में उत्कृष्ट हैं।",
      "आपकी मस्तिष्क रेखा मध्यम वक्र बनाती है, जो संतुलित विचार पैटर्न दिखाती है। आप बुद्धिमानी से भावना और तर्क का सामंजस्य बिठाते हैं।",
      "आपकी मस्तिष्क रेखा गहरी और स्पष्ट है, जो मजबूत एकाग्रता और इच्छाशक्ति दर्शाती है। आपमें चीजों को पूरा करने तक देखने की दृढ़ता है।"
    ];
    return personalities[type];
  }
  
  const personalities = [
    "두뇌선이 곡선을 그려 창의적이고 직감적인 성향을 보입니다. 예술적 감각이 뛰어나며 독창적인 아이디어를 많이 갖고 있습니다.",
    "두뇌선이 직선적으로 나타나 논리적이고 분석적인 사고를 선호합니다. 체계적인 접근으로 문제를 해결하는 능력이 뛰어납니다.",
    "두뇌선이 적당한 곡선을 이루며 균형잡힌 사고방식을 가지고 있습니다. 감성과 이성을 조화롭게 활용하는 지혜로운 분입니다.",
    "두뇌선이 깊고 명확하여 집중력과 의지력이 강한 분입니다. 한번 결정한 일은 끝까지 해내는 끈기가 있습니다."
  ];
  return personalities[type];
}

export function getLineDescription(lineType: string, variation: number, language: string = 'ko'): string {
  if (language === 'en') {
    const descriptions: Record<string, string[]> = {
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
    return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
  }
  
  if (language === 'zh') {
    const descriptions: Record<string, string[]> = {
      heart: [
        "感情线清晰而长",
        "感情线深而稳定",
        "感情线优雅柔和地弯曲"
      ],
      head: [
        "头脑线形成适度曲线且清晰",
        "头脑线直而清晰",
        "头脑线深而连续"
      ],
      life: [
        "生命线清晰而深",
        "生命线长且优雅弯曲",
        "生命线稳定而清晰"
      ],
      fate: [
        "命运线清晰可见",
        "命运线长而清晰",
        "命运线模糊或部分可见",
        "命运线较短"
      ]
    };
    return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
  }
  
  if (language === 'ja') {
    const descriptions: Record<string, string[]> = {
      heart: [
        "感情線が明確で長く現れています",
        "感情線が深く安定して現れています",
        "感情線が優雅で柔らかく曲がっています"
      ],
      head: [
        "頭脳線が適度な曲線を形成し明確です",
        "頭脳線が直線的で明確です",
        "頭脳線が深く連続しています"
      ],
      life: [
        "生命線が明確で深く現れています",
        "生命線が長く優雅に曲がっています",
        "生命線が安定して明確です"
      ],
      fate: [
        "運命線がはっきりと現れています",
        "運命線が長く明確です",
        "運命線が薄いまたは部分的です",
        "運命線が短く現れています"
      ]
    };
    return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
  }
  
  if (language === 'hi') {
    const descriptions: Record<string, string[]> = {
      heart: [
        "हृदय रेखा स्पष्ट और लंबी दिखाई देती है",
        "हृदय रेखा गहरी और स्थिर है",
        "हृदय रेखा सुंदर और कोमलता से मुड़ती है"
      ],
      head: [
        "मस्तिष्क रेखा मध्यम वक्र बनाती है और स्पष्ट है",
        "मस्तिष्क रेखा सीधी और स्पष्ट है",
        "मस्तिष्क रेखा गहरी और निरंतर है"
      ],
      life: [
        "जीवन रेखा स्पष्ट और गहरी दिखाई देती है",
        "जीवन रेखा लंबी और सुंदर रूप से मुड़ती है",
        "जीवन रेखा स्थिर और स्पष्ट है"
      ],
      fate: [
        "भाग्य रेखा स्पष्ट रूप से दिखाई देती है",
        "भाग्य रेखा लंबी और स्पष्ट है",
        "भाग्य रेखा धुंधली या आंशिक है",
        "भाग्य रेखा छोटी दिखाई देती है"
      ]
    };
    return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
  }
  
  const descriptions: Record<string, string[]> = {
    heart: [
      "감정선이 명확하고 길게 나타남",
      "감정선이 깊고 안정적으로 나타남", 
      "감정선이 곡선을 그리며 부드럽게 나타남"
    ],
    head: [
      "두뇌선이 적당한 곡선을 이루며 뚜렷함",
      "두뇌선이 직선적이고 명확하게 나타남",
      "두뇌선이 깊고 연속적으로 나타남"
    ],
    life: [
      "생명선이 뚜렷하고 깊게 나타남",
      "생명선이 길고 곡선을 그리며 나타남",
      "생명선이 안정적이고 명확하게 나타남"
    ],
    fate: [
      "운명선이 뚜렷하게 나타남",
      "운명선이 길고 명확하게 나타남",
      "운명선이 희미하거나 부분적으로 나타남",
      "운명선이 짧게 나타남"
    ]
  };
  return descriptions[lineType]?.[variation] || descriptions[lineType]?.[0] || "";
}

export function getLineTraits(lineType: string, language: string = 'ko', indices: number[]): string[] {
  if (language === 'en') {
    const traits: Record<string, string[]> = {
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
    const lineTraits = traits[lineType] || [];
    return indices.map(i => lineTraits[i % lineTraits.length] || "");
  }
  
  if (language === 'zh') {
    const traits: Record<string, string[]> = {
      heart: [
        "爱情生活满足的倾向",
        "对爱情真诚专一",
        "情感表达自由",
        "重视浪漫关系",
        "追求深厚感情",
        "重视关系中的稳定性",
        "珍惜情感纽带",
        "梦想理想的爱情"
      ],
      head: [
        "创造性和直觉思维",
        "实用的问题解决能力",
        "出色的专注力",
        "偏好分析思维",
        "逻辑性和系统性思维",
        "富有原创想法",
        "出色的学习能力",
        "喜欢详细规划"
      ],
      life: [
        "充满活力和能量",
        "健康生活的高可能性",
        "强大的生命力和体力",
        "很好地适应变化",
        "强大的自然愈合力",
        "出色的压力管理能力",
        "长寿的高可能性",
        "偏好积极的生活方式"
      ],
      fate: [
        "目标导向且意志坚强",
        "受外部环境影响良好",
        "经历重要的人生变化",
        "自立型倾向",
        "出色的领导能力",
        "不怕挑战",
        "许多命运的相遇",
        "社会成功的高可能性"
      ]
    };
    const lineTraits = traits[lineType] || [];
    return indices.map(i => lineTraits[i % lineTraits.length] || "");
  }
  
  if (language === 'ja') {
    const traits: Record<string, string[]> = {
      heart: [
        "恋愛生活に満足感を感じる傾向",
        "愛に対して真実で献身的",
        "感情表現が自由",
        "ロマンチックな関係を重視",
        "深い愛情を追求する傾向",
        "関係における安定性を重要視",
        "感情的な絆を大切にする",
        "理想的な愛を夢見るタイプ"
      ],
      head: [
        "創造的で直感的な思考",
        "実用的な問題解決能力",
        "集中力に優れる",
        "分析的思考を好む",
        "論理的で体系的な思考",
        "独創的なアイデアが豊富",
        "学習能力に優れる",
        "詳細な計画を立てることを好む"
      ],
      life: [
        "活力に満ち、エネルギーが豊富",
        "健康な生活を送る可能性が高い",
        "強い生命力と体力",
        "変化によく適応する",
        "自然治癒力が強い",
        "ストレス管理能力に優れる",
        "長寿の可能性が高い",
        "活動的な生活を好む"
      ],
      fate: [
        "目標指向で意志が強い",
        "外部環境の影響をよく受ける",
        "人生で重要な変化を経験",
        "自力で成功するタイプの傾向",
        "リーダーシップ能力に優れる",
        "挑戦を恐れない",
        "運命的な出会いが多い",
        "社会的成功の可能性が高い"
      ]
    };
    const lineTraits = traits[lineType] || [];
    return indices.map(i => lineTraits[i % lineTraits.length] || "");
  }
  
  if (language === 'hi') {
    const traits: Record<string, string[]> = {
      heart: [
        "प्रेम जीवन में संतुष्टि की प्रवृत्ति",
        "प्रेम के प्रति सच्चे और समर्पित",
        "भावनात्मक अभिव्यक्ति स्वतंत्र",
        "रोमांटिक रिश्तों को महत्व देते हैं",
        "गहरे स्नेह की तलाश करते हैं",
        "रिश्तों में स्थिरता को महत्व देते हैं",
        "भावनात्मक बंधन को संजोते हैं",
        "आदर्श प्रेम का सपना देखने वाले"
      ],
      head: [
        "रचनात्मक और सहज सोच",
        "व्यावहारिक समस्या समाधान क्षमता",
        "उत्कृष्ट एकाग्रता",
        "विश्लेषणात्मक सोच को प्राथमिकता",
        "तार्किक और व्यवस्थित सोच",
        "मौलिक विचारों से भरपूर",
        "उत्कृष्ट सीखने की क्षमता",
        "विस्तृत योजना बनाना पसंद करते हैं"
      ],
      life: [
        "जीवन शक्ति और ऊर्जा से भरपूर",
        "स्वस्थ जीवन की उच्च संभावना",
        "मजबूत जीवन शक्ति और सहनशक्ति",
        "परिवर्तनों के साथ अच्छी तरह अनुकूलित",
        "मजबूत प्राकृतिक उपचार शक्ति",
        "उत्कृष्ट तनाव प्रबंधन क्षमता",
        "दीर्घायु की उच्च संभावना",
        "सक्रिय जीवनशैली को प्राथमिकता"
      ],
      fate: [
        "मजबूत इच्छाशक्ति के साथ लक्ष्य-उन्मुख",
        "बाहरी वातावरण से अच्छी तरह प्रभावित",
        "जीवन में महत्वपूर्ण परिवर्तन का अनुभव",
        "स्वयं निर्मित प्रकार की प्रवृत्ति",
        "उत्कृष्ट नेतृत्व क्षमता",
        "चुनौतियों से नहीं डरते",
        "कई भाग्यशाली मुलाकातें",
        "सामाजिक सफलता की उच्च संभावना"
      ]
    };
    const lineTraits = traits[lineType] || [];
    return indices.map(i => lineTraits[i % lineTraits.length] || "");
  }
  
  const traits: Record<string, string[]> = {
    heart: [
      "연애 생활에 만족감을 느끼는 성향",
      "사랑에 대해 진실하고 헌신적",
      "감정 표현이 자유로움",
      "로맨틱한 관계를 중시함",
      "깊은 애정을 추구하는 성향",
      "관계에서 안정성을 중요시함",
      "정서적 유대감을 소중히 여김",
      "이상적인 사랑을 꿈꾸는 타입"
    ],
    head: [
      "창의적이고 직감적인 사고",
      "실용적인 문제 해결 능력",
      "집중력이 뛰어남",
      "분석적 사고를 선호함",
      "논리적이고 체계적인 사고",
      "독창적인 아이디어가 풍부함",
      "학습 능력이 뛰어남",
      "세밀한 계획을 세우는 것을 좋아함"
    ],
    life: [
      "활력이 넘치고 에너지가 풍부",
      "건강한 삶을 누릴 가능성이 높음",
      "강한 생명력과 체력",
      "변화에 잘 적응함",
      "자연 치유력이 강함",
      "스트레스 관리 능력이 뛰어남",
      "장수할 가능성이 높음",
      "활동적인 생활을 선호함"
    ],
    fate: [
      "목표 지향적이고 의지가 강함",
      "외부 환경에 영향을 잘 받음",
      "인생에서 중요한 변화를 경험",
      "자수성가형의 성향",
      "리더십 능력이 뛰어남",
      "도전을 두려워하지 않음",
      "운명적인 만남이 많음",
      "사회적 성공 가능성이 높음"
    ]
  };
  const lineTraits = traits[lineType] || [];
  return indices.map(i => lineTraits[i % lineTraits.length] || "");
}

