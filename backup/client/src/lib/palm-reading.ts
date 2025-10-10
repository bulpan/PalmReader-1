// Palm reading utility functions based on traditional palmistry

export interface PalmLineFeatures {
  length: 'short' | 'medium' | 'long';
  depth: 'shallow' | 'medium' | 'deep';
  curve: 'straight' | 'slightly_curved' | 'curved';
  breaks: boolean;
  branches: boolean;
}

export interface PalmLineAnalysis {
  heartLine: PalmLineFeatures;
  headLine: PalmLineFeatures;
  lifeLine: PalmLineFeatures;
  fateLine?: PalmLineFeatures;
}

// Traditional palm reading interpretations based on WikiHow guide
export const palmReadingInterpretations = {
  heartLine: {
    startUnderIndex: "연애 생활에 만족한다",
    startUnderMiddle: "사랑에 관한한 이기적이다",
    startInMiddle: "쉽게 사랑에 빠진다",
    straightAndShort: "로맨스에 별반 관심이 없다",
    touchesLifeLine: "사랑에 쉽게 상처받는다",
    longCurved: "감정을 자유롭게 표현한다",
    parallelToHead: "감정을 잘 조절한다",
    wavy: "많은 연인관계, 진지한 관계는 별로 없다",
    circles: "슬프거나 우울증이 있다",
    broken: "정서적 트라우마가 있다"
  },
  headLine: {
    short: "정신적 성취보다 신체적 성취를 선호한다",
    curvedSloping: "창의적이다",
    separatedFromLife: "모험적이며 삶에 대한 열정이 있다",
    wavy: "주의가 산만하다",
    deepLong: "사고가 분명하고 집중을 잘한다",
    straight: "현실적인 사고방식을 갖고 있다",
    circles: "감정적 위기를 맞을 수 있다",
    broken: "사고에 일관성이 없다",
    multipleCrosses: "중대한 결정을 내리는 계기가 있다"
  },
  lifeLine: {
    closeToThumb: "피곤을 쉽게 느낀다",
    curved: "에너지가 풍부하다",
    longDeep: "활력이 넘친다",
    shortFaint: "다른 사람에게 휘둘리기 쉽다",
    semicircleBreak: "힘과 열정이 넘친다",
    straightNearEdge: "인간관계에 조심성이 많다",
    multiple: "활력이 넘친다",
    circles: "병원 신세를 지거나 상해를 입을 수 있다",
    broken: "생활방식에 갑작스런 변화가 온다"
  },
  fateLine: {
    deep: "운명에 의해 지배를 강하게 받는다",
    brokenChanging: "외부 힘으로 인해 삶에서 많은 변화를 맞이한다",
    joinsLifeAtStart: "자수성가형으로 일찍부터 포부를 갖고 성장한다",
    joinsLifeInMiddle: "타인의 이해관계에 자신의 것을 포기해야 한다"
  }
};

export function interpretPalmLines(analysis: PalmLineAnalysis): {
  personality: string;
  loveLife: string;
  career: string;
  health: string;
} {
  const { heartLine, headLine, lifeLine, fateLine } = analysis;
  
  // Heart line interpretation for love life
  let loveInterpretation = "감정이 풍부하고 사랑에 진실한 성향을 보입니다.";
  if (heartLine.length === 'long' && heartLine.curve === 'curved') {
    loveInterpretation = palmReadingInterpretations.heartLine.longCurved;
  } else if (heartLine.length === 'short') {
    loveInterpretation = palmReadingInterpretations.heartLine.straightAndShort;
  }

  // Head line interpretation for personality
  let personalityInterpretation = "균형잡힌 사고방식을 가지고 있습니다.";
  if (headLine.curve === 'curved') {
    personalityInterpretation = palmReadingInterpretations.headLine.curvedSloping;
  } else if (headLine.length === 'long' && headLine.depth === 'deep') {
    personalityInterpretation = palmReadingInterpretations.headLine.deepLong;
  }

  // Life line interpretation for health
  let healthInterpretation = "전반적으로 건강한 삶을 유지할 것입니다.";
  if (lifeLine.length === 'long' && lifeLine.depth === 'deep') {
    healthInterpretation = palmReadingInterpretations.lifeLine.longDeep;
  } else if (lifeLine.curve === 'curved') {
    healthInterpretation = palmReadingInterpretations.lifeLine.curved;
  }

  // Fate line interpretation for career
  let careerInterpretation = "자신만의 길을 개척해 나가는 성향입니다.";
  if (fateLine?.depth === 'deep') {
    careerInterpretation = palmReadingInterpretations.fateLine.deep;
  } else if (fateLine?.breaks) {
    careerInterpretation = palmReadingInterpretations.fateLine.brokenChanging;
  }

  return {
    personality: personalityInterpretation,
    loveLife: loveInterpretation,
    career: careerInterpretation,
    health: healthInterpretation
  };
}
