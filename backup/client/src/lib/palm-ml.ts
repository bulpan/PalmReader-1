import type { PalmFeatures } from "./palm-preprocess";

export interface MlInsights {
  traitScores: Record<string, number>;
  dominantTrait: string;
  energyLevel: number;
  growthFocus: string;
  summary: string;
}

const TRAIT_LABELS = ["intuition", "vitality", "creativity", "stability"] as const;
const GROWTH_FOCUS = {
  intuition: "감성과 직관을 신뢰하며 결정을 내려보세요.",
  vitality: "규칙적인 생활과 운동으로 에너지를 꾸준히 유지하세요.",
  creativity: "새로운 아이디어를 실험하고 표현의 폭을 넓혀보세요.",
  stability: "일상의 루틴과 관계에서 균형과 신뢰를 강화하세요.",
};

const SUMMARY_TEMPLATES = {
  intuition:
    "섬세한 직감과 통찰력이 강하게 나타납니다. 작은 변화 속에서도 의미를 발견해 주변을 이끄는 스타일입니다.",
  vitality:
    "탄탄한 체력과 추진력이 돋보입니다. 장기 프로젝트에서도 꾸준한 에너지로 목표를 이루는 유형입니다.",
  creativity:
    "자유로운 사고와 표현력이 풍부합니다. 새로운 조합과 시도로 자신만의 결과물을 만들어내는 스타일입니다.",
  stability:
    "균형감각과 현실 감각이 뛰어나며, 중요한 순간마다 침착하게 방향을 잡아주는 역할을 합니다.",
};

const WEIGHTS = [
  1.1, -0.3, 0.2, 0.1, // brightness
  -0.2, 1.3, 0.4, 0.3, // contrast
  0.1, 0.2, 1.1, -0.1, // totalLines
  0.3, 0.6, -0.2, 0.8, // averageLength
  0.9, -0.4, 0.2, 0.1, // averageAngle
  0.8, -0.5, 0.5, 0.2, // dominantAngle
] as const;

const BIASES = [0.2, 0.1, -0.05, 0.0] as const;

let tfPromise: Promise<typeof import("@tensorflow/tfjs")> | null = null;

function loadTf() {
  if (!tfPromise) {
    console.log("[ML] TensorFlow.js 모듈 동적 import 시작...");
    tfPromise = import("@tensorflow/tfjs").then(module => {
      console.log("[ML] TensorFlow.js 모듈 import 완료");
      return module;
    });
  }
  return tfPromise;
}

function normalizeFeatures(features: PalmFeatures) {
  const { brightness, contrast, lineMetrics } = features;
  return [
    brightness / 255,
    contrast / 255,
    Math.min(lineMetrics.totalLines, 120) / 120,
    Math.min(lineMetrics.averageLength, 400) / 400,
    (lineMetrics.averageAngle + 180) / 360,
    (lineMetrics.dominantAngle + 180) / 360,
  ];
}

export async function inferPalmInsights(features: PalmFeatures): Promise<MlInsights> {
  console.log("[ML] TensorFlow.js 로딩 중...");
  const tf = await loadTf();
  console.log("[ML] TensorFlow.js 로딩 완료");
  
  console.log("[ML] 특징 벡터 정규화 중...");
  const inputVector = normalizeFeatures(features);
  console.log(`[ML] 입력 벡터 크기: ${inputVector.length}`);

  console.log("[ML] 신경망 추론 실행 중...");
  const probabilities = tf.tidy(() => {
    const input = tf.tensor2d([inputVector], [1, inputVector.length]);
    const weight = tf.tensor2d(WEIGHTS, [inputVector.length, TRAIT_LABELS.length]);
    const bias = tf.tensor1d(BIASES);
    const logits = input.matMul(weight).add(bias);
    const softmax = tf.softmax(logits);
    return softmax.arraySync() as number[][];
  });
  console.log("[ML] 추론 완료");

  const scores = probabilities[0];
  const traitScores = Object.fromEntries(scores.map((score, idx) => [TRAIT_LABELS[idx], score]));
  const dominantIndex = scores.indexOf(Math.max(...scores));
  const dominantTrait = TRAIT_LABELS[dominantIndex];
  console.log(`[ML] 주요 성향: ${dominantTrait} (점수: ${scores[dominantIndex].toFixed(3)})`);

  return {
    traitScores,
    dominantTrait,
    energyLevel: Math.min(100, Math.round((scores[1] + scores[3]) * 60 + features.contrast / 4)),
    growthFocus: GROWTH_FOCUS[dominantTrait],
    summary: SUMMARY_TEMPLATES[dominantTrait],
  };
}

