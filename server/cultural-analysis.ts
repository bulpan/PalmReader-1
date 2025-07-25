import type { CulturalContext } from "@shared/schema";

// 문화권별 분석 데이터
export const CULTURAL_ANALYSIS = {
  western: {
    overallTemplates: [
      "Your palm reveals a balanced personality with strong intuitive abilities. The heart line suggests you approach love with sincerity and will form meaningful relationships throughout your life.",
      "You possess a harmonious character that earns trust from those around you. A strong life line indicates you will lead a healthy and vital life.",
      "You have both artistic sensitivity and logical thinking, showing a well-rounded personality. Your head line suggests great potential for achievement in creative fields.",
      "You are born with natural leadership and strong willpower. A clear fate line indicates very high potential for achieving your goals.",
      "You combine a warm heart with deep thinking abilities. The harmony between your heart and head lines suggests success in human relationships.",
      "You have an independent and progressive nature with excellent ability to pioneer your own path.",
      "You are thoughtful and considerate, providing great help to those around you. You possess abilities in healing and service."
    ],
    loveTemplates: [
      "Your heart line starting below the index finger indicates you take a leading role in romance. Approaching relationships with sincerity will lead to deep love.",
      "The length and depth of your heart line show you are serious and devoted in love. A meeting with an ideal partner awaits you.",
      "You have strong romantic tendencies with rich emotional expression. Your deep consideration for partners suggests high potential for happy relationships.",
      "You prefer stable and lasting relationships. Once you commit, you show unwavering and sincere love.",
      "You pursue balanced love with minimal emotional fluctuations. You will build mature relationships based on mutual understanding and respect.",
      "You seek passionate and honest love. Your free emotional expression and excellent ability to convey sincerity to partners stands out."
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
      "당신은 강한 직감력과 창의성을 가진 분입니다. 감정선의 특성으로 보아 사랑에 대해 진실하며, 인생에서 의미 있는 관계들을 만들어갈 것입니다.",
      "균형잡힌 성격으로 주변 사람들에게 신뢰받는 분입니다. 생명선이 강하여 건강하고 활력 넘치는 삶을 살아갈 것으로 보입니다.",
      "예술적 감성과 논리적 사고를 모두 갖춘 조화로운 성격입니다. 두뇌선의 특성상 창의적인 분야에서 큰 성취를 이룰 가능성이 높습니다.",
      "타고난 리더십과 강한 의지력을 가진 분입니다. 운명선이 뚜렷하여 목표하는 바를 이루어낼 가능성이 매우 높습니다.",
      "따뜻한 마음과 깊은 사고력을 겸비한 분입니다. 감정선과 두뇌선의 조화로 인간관계에서도 성공할 것으로 보입니다.",
      "독립적이고 진취적인 성향을 가진 분입니다. 자신만의 길을 개척해 나가는 능력이 뛰어납니다.",
      "세심하고 배려심 깊은 성격으로 주변 사람들에게 큰 도움이 되는 분입니다. 치유와 봉사의 능력을 가지고 있습니다."
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
      "आपके हस्तरेखा से पता चलता है कि आपमें प्रबल अंतर्ज्ञान और रचनात्मकता है। हृदय रेखा की विशेषताओं से लगता है कि आप प्रेम के मामले में सच्चे हैं और जीवन में अर्थपूर्ण रिश्ते बनाएंगे।",
      "आप संतुलित व्यक्तित्व के स्वामी हैं जिन पर आसपास के लोग भरोसा करते हैं। मजबूत जीवन रेखा दर्शाती है कि आप स्वस्थ और जीवंत जीवन जिएंगे।",
      "आपमें कलात्मक संवेदना और तार्किक सोच दोनों हैं, जो एक संतुलित व्यक्तित्व दर्शाता है। मस्तिष्क रेखा की विशेषताओं से लगता है कि रचनात्मक क्षेत्रों में आपकी बड़ी उपलब्धियां हो सकती हैं।",
      "आपमें जन्मजात नेतृत्व और दृढ़ इच्छाशक्ति है। स्पष्ट भाग्य रेखा दर्शाती है कि आपके लक्ष्य पूरे होने की संभावना बहुत अधिक है।",
      "आपमें स्नेहपूर्ण हृदय और गहरी सोच दोनों हैं। हृदय रेखा और मस्तिष्क रेखा के तालमेल से लगता है कि मानवीय रिश्तों में भी आप सफल होंगे।",
      "आपका स्वभाव स्वतंत्र और प्रगतिशील है। अपना रास्ता बनाने की आपकी क्षमता उत्कृष्ट है।",
      "आप विचारशील और दयालु व्यक्तित्व के स्वामी हैं जो आसपास के लोगों की बड़ी मदद करते हैं। आपमें चिकित्सा और सेवा की क्षमताएं हैं।"
    ],
    loveTemplates: [
      "हृदय रेखा तर्जनी के नीचे से शुरू होने से पता चलता है कि प्रेम में आप अग्रणी भूमिका निभाते हैं। सच्चे मन से साथी के साथ व्यवहार करने से गहरे प्रेम का मिलना संभव है।",
      "हृदय रेखा की लंबाई और गहराई से पता चलता है कि प्रेम में आप गंभीर और समर्पित रहेंगे। आदर्श साथी के साथ मिलना आपका इंतजार कर रहा है।",
      "आपमें रोमांटिक प्रवृत्ति प्रबल है और भावना अभिव्यक्ति समृद्ध है। साथी के प्रति गहरी सहानुभूति के कारण खुशहाल प्रेम की संभावना अधिक है।",
      "आप स्थिर और निरंतर रिश्तों को प्राथमिकता देते हैं। एक बार मन तय कर लेने पर अटल और सच्चा प्रेम दिखाएंगे।",
      "भावनाओं में उतार-चढ़ाव कम और संतुलित प्रेम की तलाश करते हैं। आपसी समझ और सम्मान पर आधारित परिपक्व रिश्ता बनाएंगे।",
      "भावुक और सच्चे प्रेम की तलाश करने वाले हैं। भावना अभिव्यक्ति स्वतंत्र है और साथी तक अपना सच्चा मन पहुंचाने की क्षमता उत्कृष्ट है।"
    ],
    careerTemplates: [
      "भाग्य रेखा स्पष्ट होने से पता चलता है कि आप लक्ष्य-उन्मुख हैं और सफलता की संभावना अधिक है। रचनात्मक क्षेत्रों या कला संबंधी व्यवसाय में बड़ी उपलब्धियां हासिल कर सकते हैं।",
      "नेतृत्व प्रबल और प्रगति उत्कृष्ट होने से संगठन में महत्वपूर्ण भूमिका मिलेगी। प्रबंधन या व्यावसायिक क्षेत्रों में विशेष पहचान बना सकते हैं।",
      "विस्तृत और विश्लेषणात्मक सोच के आधार पर पेशेवर क्षेत्रों में सफलता की संभावना अधिक है। निरंतर अध्ययन से और भी विकास हो सकता है।",
      "लोगों के साथ संवाद की क्षमता उत्कृष्ट होने से सेवा या शिक्षा क्षेत्र में सफलता मिलेगी। दूसरों की मदद करने वाले काम में संतुष्टि मिलेगी।",
      "रचनात्मक विचार समृद्ध होने से नए क्षेत्रों के विकास के लिए उपयुक्त हैं। नवाचार व्यवसाय या तकनीकी क्षेत्रों में विशेष पहचान बना सकते हैं।",
      "सावधान और जिम्मेदार होने से विशेष तकनीकी पदों में सफलता की संभावना अधिक है। सटीकता की आवश्यकता वाले क्षेत्रों में उत्कृष्ट क्षमता दिखाएंगे।"
    ]
  }
};

export function getCulturalAnalysis(context: CulturalContext) {
  return CULTURAL_ANALYSIS[context] || CULTURAL_ANALYSIS.eastern;
}