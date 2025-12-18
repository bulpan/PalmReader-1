// 향상된 손금 해석 메타데이터 (ChatGPT 연구 기반)
// 동양(천지인), 서양, 인도 전통 손금술 통합

const PALM_INTERPRETATION_DATABASE = {
    // 감정선 (Heart Line / 天紋)
    heartLine: {
        length: {
            long: {
                kr: "감정선이 길고 뚜렷하여 감정 표현이 풍부하고 애정이 깊습니다. 한 번 사랑하면 오래 지속되며, 상대방에게 진심으로 헌신합니다. 로맨틱한 관계를 중시하며 이상적인 사랑을 추구합니다.",
                traits: ["사랑에 진실", "깊은 애정", "헌신적", "로맨틱"]
            },
            medium: {
                kr: "감정선이 적당한 길이로 균형잡힌 애정 표현을 합니다. 이성적이면서도 감성적인 면을 모두 갖추었으며, 안정적인 연애를 선호합니다.",
                traits: ["균형잡힌 사랑", "안정 추구", "현실적 로맨스"]
            },
            short: {
                kr: "감정선이 짧아 로맨스보다 자기계발과 독립성을 중시합니다. 감정 표현이 절제되어 있으나 내면의 애정은 깊습니다. 이성적인 판단을 우선시합니다.",
                traits: ["독립적", "이성적 사랑", "자제력 강함"]
            }
        },
        curve: {
            curved: {
                kr: "감정선이 아름답게 곡선을 그려 섬세하고 다정다감한 성격입니다. 타인의 감정을 잘 읽으며 공감 능력이 뛰어납니다. 예술적 감각과 낭만성이 풍부합니다.",
                traits: ["공감 능력 우수", "섬세함", "낭만적", "예술가 기질"]
            },
            straight: {
                kr: "감정선이 직선에 가까워 감정 처리가 이성적입니다. 현실적이고 실용적인 사랑관을 가지고 있으며, 안정성을 중시합니다.",
                traits: ["이성적", "현실적", "안정 지향"]
            }
        },
        position: {
            high: {
                kr: "감정선이 높은 위치에서 시작하여 이상주의적 성향이 강합니다. 완벽한 사랑을 꿈꾸며, 정신적 교감을 매우 중요하게 여깁니다.",
                traits: ["이상주의", "정신적 사랑 중시", "완벽주의"]
            },
            low: {
                kr: "감정선이 낮은 위치에 있어 현실적이고 실용적인 사랑을 추구합니다. 육체적, 물질적 안정을 중시하는 경향이 있습니다.",
                traits: ["현실주의", "안정 추구", "실용적"]
            }
        },
        branches: {
            many: {
                kr: "감정선에 많은 가지가 뻗어 있어 다양한 형태의 사랑을 경험합니다. 풍부한 감수성과 넓은 인간관계를 가지고 있으며, 여러 인연을 통해 성장합니다.",
                traits: ["다양한 경험", "폭넓은 인간관계", "변화 추구"]
            },
            few: {
                kr: "감정선이 단순하여 일편단심의 사랑을 합니다. 한 사람에게 집중하며 변하지 않는 마음을 가집니다.",
                traits: ["일편단심", "충성심", "집중력"]
            }
        }
    },

    // 두뇌선 (Head Line / 人紋)
    headLine: {
        length: {
            long: {
                kr: "두뇌선이 길어 사고가 깊고 복잡합니다. 분석력과 추리력이 뛰어나며, 학문이나 연구 분야에 적합합니다. 신중하고 철저한 성격입니다.",
                traits: ["분석력 우수", "신중함", "학구적", "철저함"]
            },
            medium: {
                kr: "두뇌선이 적당한 길이로 균형잡힌 사고를 합니다. 이론과 실무를 조화롭게 다루며, 다재다능한 능력을 갖추었습니다.",
                traits: ["균형잡힌 사고", "다재다능", "유연성"]
            },
            short: {
                kr: "두뇌선이 짧아 직관적이고 빠른 판단을 합니다. 이론보다 행동을 중시하며, 실용적인 문제 해결에 강합니다.",
                traits: ["직관력", "행동파", "실용주의"]
            }
        },
        curve: {
            curved: {
                kr: "두뇌선이 곡선을 그려 창의적이고 예술적인 사고를 합니다. 상상력이 풍부하며 독창적인 아이디어를 많이 냅니다. 감성과 이성을 조화롭게 활용합니다.",
                traits: ["창의성", "예술가 기질", "상상력 풍부", "독창성"]
            },
            straight: {
                kr: "두뇌선이 직선적이어서 논리적이고 체계적인 사고를 합니다. 현실적이고 실용적인 판단력이 뛰어나며, 과학이나 기술 분야에 적합합니다.",
                traits: ["논리적", "체계적", "과학적 사고", "현실주의"]
            }
        },
        depth: {
            deep: {
                kr: "두뇌선이 깊고 뚜렷하여 집중력과 의지력이 강합니다. 한 번 시작한 일은 끝까지 완수하는 끈기가 있으며, 전문가가 될 가능성이 높습니다.",
                traits: ["집중력", "의지력", "끈기", "전문성"]
            },
            shallow: {
                kr: "두뇌선이 얇아 유연하고 적응력이 좋습니다. 여러 분야에 관심을 가지며, 변화에 빠르게 대응합니다.",
                traits: ["유연성", "적응력", "다방면 관심"]
            }
        }
    },

    // 생명선 (Life Line / 地紋)
    lifeLine: {
        length: {
            long: {
                kr: "생명선이 길고 깊어 강한 생명력과 체력을 가지고 있습니다. 건강하고 활력있는 삶을 살 가능성이 높으며, 회복력이 뛰어납니다. 장수의 상입니다.",
                traits: ["강한 생명력", "건강", "장수", "활력"]
            },
            medium: {
                kr: "생명선이 적당한 길이로 표준적인 체력과 건강을 유지합니다. 규칙적인 관리로 건강을 잘 지킬 수 있습니다.",
                traits: ["보통 체력", "건강 관리 필요", "안정적"]
            },
            short: {
                kr: "생명선이 짧아 체력 관리에 주의가 필요합니다. 규칙적인 운동과 건강한 생활습관이 중요하며, 스트레스 관리가 필수입니다.",
                traits: ["체력 관리 필요", "건강 주의", "규칙적 생활 중요"]
            }
        },
        depth: {
            deep: {
                kr: "생명선이 깊고 선명하여 타고난 건강한 체질입니다. 면역력이 강하고 자연 치유력이 뛰어나 질병에 대한 저항력이 높습니다.",
                traits: ["건강체질", "면역력 강함", "치유력 우수"]
            },
            shallow: {
                kr: "생명선이 얇아 섬세한 체질입니다. 건강 관리에 신경 쓰면 장수할 수 있으며, 예방이 중요합니다.",
                traits: ["섬세한 체질", "예방 중요", "건강 관리 필요"]
            }
        },
        curve: {
            wide: {
                kr: "생명선이 넓은 호를 그려 에너지가 풍부하고 활동적입니다. 운동을 좋아하며 야외 활동을 즐깁니다. 대담하고 적극적인 성격입니다.",
                traits: ["활동적", "에너지 넘침", "적극적", "모험심"]
            },
            narrow: {
                kr: "생명선이 좁은 곡선을 그려 신중하고 조심성이 많습니다. 안정적인 생활을 선호하며, 계획적으로 행동합니다.",
                traits: ["신중함", "안정 추구", "계획적"]
            }
        },
        breaks: {
            none: {
                kr: "생명선이 끊김없이 이어져 안정적인 인생을 살 것입니다. 큰 변화나 위기 없이 순탄한 삶을 영위합니다.",
                traits: ["안정적 인생", "순탄함", "지속성"]
            },
            present: {
                kr: "생명선에 끊김이 있어 인생에 중요한 전환점이 있습니다. 환경이나 생활방식의 큰 변화를 경험하나, 이를 통해 성장합니다.",
                traits: ["변화와 전환", "위기와 성장", "적응력"]
            }
        }
    },

    // 운명선 (Fate Line / 玉柱線)
    fateLine: {
        presence: {
            strong: {
                kr: "운명선이 강하고 뚜렷하여 목표 지향적이고 의지가 강합니다. 자신의 운명을 스스로 개척하는 리더십을 가지고 있으며, 큰 성취를 이룰 가능성이 높습니다.",
                traits: ["목표 지향적", "리더십", "강한 의지", "성공 가능성"]
            },
            weak: {
                kr: "운명선이 약하거나 부분적이어서 자유로운 영혼입니다. 정해진 틀보다는 창의적이고 유연한 삶을 살며, 다양한 경험을 중시합니다.",
                traits: ["자유로움", "창의성", "유연성", "다양한 경험"]
            },
            absent: {
                kr: "운명선이 없어 외부의 제약 없이 자유롭게 삶을 설계합니다. 자신만의 길을 개척하며, 전통적 틀에 얽매이지 않습니다.",
                traits: ["독립성", "자유", "개척자 정신"]
            }
        },
        origin: {
            wrist: {
                kr: "운명선이 손목에서 시작하여 어릴 적부터 목표가 명확했습니다. 자수성가형으로 일찍부터 자립하여 성공을 이룹니다.",
                traits: ["자수성가", "조기 성공", "명확한 목표"]
            },
            middle: {
                kr: "운명선이 중간에서 시작하여 중년에 뚜렷한 방향을 찾습니다. 경험을 통해 자신의 길을 발견하고 안정적으로 발전합니다.",
                traits: ["중년 성공", "경험 중시", "점진적 발전"]
            }
        },
        direction: {
            straight: {
                kr: "운명선이 곧게 뻗어 일관되고 꾸준한 삶을 삽니다. 한 분야에서 전문성을 쌓으며 장기적으로 성공합니다.",
                traits: ["일관성", "전문성", "꾸준함"]
            },
            curved: {
                kr: "운명선이 곡선을 그어 다양한 변화와 기회를 경험합니다. 유연하게 적응하며 여러 분야에서 활약합니다.",
                traits: ["다양한 경험", "유연성", "변화 적응"]
            }
        }
    },

    // 결혼선 (Marriage Line / 家風紋)
    marriageLine: {
        count: {
            one: {
                kr: "결혼선이 하나로 뚜렷하여 운명적인 한 사람과 평생을 함께합니다. 진실한 사랑으로 행복한 결혼생활을 영위합니다.",
                traits: ["운명적 사랑", "평생 반려자", "안정된 결혼"]
            },
            multiple: {
                kr: "여러 개의 결혼선이 있어 다양한 연애 경험을 합니다. 각각의 인연에서 배우고 성장하며, 진정한 짝을 찾아갑니다.",
                traits: ["다양한 경험", "학습과 성장", "연애 다수"]
            }
        },
        length: {
            long: {
                kr: "결혼선이 길어 결혼에 대한 열망이 강합니다. 가정과 가족을 매우 중시하며, 헌신적인 배우자가 될 것입니다.",
                traits: ["결혼 열망", "가정 중시", "헌신적"]
            },
            short: {
                kr: "결혼선이 짧아 결혼보다 자아실현을 우선시할 수 있습니다. 독립적이고 자유로운 관계를 선호합니다.",
                traits: ["독립성", "자아실현", "자유로운 관계"]
            }
        }
    },

    // 태양선 (Sun Line / 成功線)
    sunLine: {
        presence: {
            strong: {
                kr: "태양선이 뚜렷하여 성공운과 금운이 매우 좋습니다. 주변의 인정과 명성을 얻으며, 사회적으로 높은 지위에 오를 가능성이 있습니다. 천성의 스타입니다.",
                traits: ["성공운", "금운", "명성", "사회적 지위"]
            },
            weak: {
                kr: "태양선이 약하나 꾸준한 노력으로 성공을 이룰 수 있습니다. 화려하지 않아도 안정적인 성취를 거둡니다.",
                traits: ["노력형 성공", "안정적 성취", "내실"]
            }
        }
    },

    // 건강선 (Health Line)
    healthLine: {
        presence: {
            absent: {
                kr: "건강선이 없어 매우 건강한 편입니다. 타고난 건강 체질로 질병에 대한 걱정이 적습니다.",
                traits: ["우수한 건강", "타고난 체질"]
            },
            present: {
                kr: "건강선이 보이므로 생활습관 관리가 필요합니다. 규칙적인 운동과 식습관, 충분한 휴식을 통해 건강을 유지하세요.",
                traits: ["건강 관리 필요", "생활습관 중요", "예방 중시"]
            },
            broken: {
                kr: "건강선이 끊어져 있어 스트레스나 과로에 주의가 필요합니다. 몸의 신호에 귀 기울이고 적절한 휴식을 취하세요.",
                traits: ["스트레스 주의", "휴식 필요", "몸의 신호 주시"]
            }
        }
    }
};

// 종합 운세 생성 (메타데이터 기반)
function generateDetailedFortune(analysis) {
    const { heartLine, headLine, lifeLine, fateLine } = analysis;

    let fortune = {
        overall: "",
        loveLife: "",
        career: "",
        health: "",
        personality: "",
        traits: [],
        detailedAnalysis: {
            emotional: "",
            intellectual: "",
            physical: "",
            destiny: ""
        }
    };

    // 애정운 (감정선 기반) - 다층적 분석
    if (heartLine.present) {
        const lengthData = PALM_INTERPRETATION_DATABASE.heartLine.length[heartLine.length];
        // slightly_curved는 curved로 매핑
        const curveKey = heartLine.curve === 'slightly_curved' ? 'curved' : heartLine.curve;
        const curveData = PALM_INTERPRETATION_DATABASE.heartLine.curve[curveKey];

        // 안전성 체크
        if (!lengthData || !curveData) {
            console.error('Missing data for heartLine:', { length: heartLine.length, curve: heartLine.curve });
            fortune.loveLife = "감정선 분석 데이터를 처리하는 중 문제가 발생했습니다.";
            fortune.detailedAnalysis.emotional = "데이터 처리 중입니다.";
        } else {
            // 기본 해석
            fortune.loveLife = lengthData.kr + " " + curveData.kr;

            // 가지 분석 추가 (boolean으로 체크)
            if (heartLine.branches) {
                fortune.loveLife += " " + PALM_INTERPRETATION_DATABASE.heartLine.branches.many.kr;
                fortune.traits.push(...PALM_INTERPRETATION_DATABASE.heartLine.branches.many.traits);
            } else {
                fortune.loveLife += " " + PALM_INTERPRETATION_DATABASE.heartLine.branches.few.kr;
                fortune.traits.push(...PALM_INTERPRETATION_DATABASE.heartLine.branches.few.traits);
            }

            // 상세 분석
            fortune.detailedAnalysis.emotional = `감정선 분석 결과, ${lengthData.kr.split('.')[0]}. ${curveData.kr.split('.')[0]}. 이는 ${lengthData.traits.join(', ')} 등의 특성을 나타냅니다.`;

            fortune.traits.push(...lengthData.traits, ...curveData.traits);
        }
    } else {
        fortune.loveLife = "감정선이 뚜렷하지 않아 독립적인 성향이 강합니다. 연애보다 자아실현에 집중하는 경향이 있습니다.";
        fortune.detailedAnalysis.emotional = "감정선이 명확하지 않아 감정 표현이 내면적이고 절제된 편입니다.";
    }

    // 성격 (두뇌선 기반) - 다층적 분석
    if (headLine.present) {
        const lengthData = PALM_INTERPRETATION_DATABASE.headLine.length[headLine.length];
        // slightly_curved는 curved로 매핑
        const curveKey = headLine.curve === 'slightly_curved' ? 'curved' : headLine.curve;
        const curveData = PALM_INTERPRETATION_DATABASE.headLine.curve[curveKey];
        const depthData = PALM_INTERPRETATION_DATABASE.headLine.depth[headLine.depth];

        if (!lengthData || !curveData || !depthData) {
            console.error('Missing data for headLine:', { length: headLine.length, curve: headLine.curve, depth: headLine.depth });
            fortune.personality = "두뇌선 분석 데이터를 처리하는 중 문제가 발생했습니다.";
            fortune.detailedAnalysis.intellectual = "데이터 처리 중입니다.";
        } else {
            // 복합 해석
            fortune.personality = lengthData.kr + " " + curveData.kr + " " + depthData.kr;

            // 상세 분석
            fortune.detailedAnalysis.intellectual = `두뇌선의 ${headLine.length} 길이와 ${headLine.curve} 형태는 ${curveData.traits.join(', ')}의 사고 방식을 보여줍니다. ${depthData.kr.split('.')[0]}는 특징으로, ${depthData.traits.join(', ')}한 면모를 나타냅니다.`;

            fortune.traits.push(...lengthData.traits, ...curveData.traits, ...depthData.traits);
        }
    } else {
        fortune.personality = "두뇌선이 명확하지 않아 유연하고 자유로운 사고를 합니다.";
        fortune.detailedAnalysis.intellectual = "전통적 사고 패턴에 얽매이지 않는 독창적인 면모를 가지고 있습니다.";
    }

    // 건강운 (생명선 기반) - 다층적 분석
    if (lifeLine.present) {
        const lengthData = PALM_INTERPRETATION_DATABASE.lifeLine.length[lifeLine.length];
        const depthData = PALM_INTERPRETATION_DATABASE.lifeLine.depth[lifeLine.depth];
        const curveData = PALM_INTERPRETATION_DATABASE.lifeLine.curve[lifeLine.curve === 'curved' ? 'wide' : 'narrow'];
        const breaksData = PALM_INTERPRETATION_DATABASE.lifeLine.breaks[lifeLine.breaks ? 'present' : 'none'];

        // 복합 해석
        fortune.health = lengthData.kr + " " + depthData.kr + " " + curveData.kr;

        // 끊김 여부 추가
        if (lifeLine.breaks) {
            fortune.health += " " + breaksData.kr;
        }

        // 상세 분석
        fortune.detailedAnalysis.physical = `생명선 분석 결과, ${lengthData.traits.join(', ')}의 특징을 보입니다. ${curveData.kr.split('.')[0]}며, ${depthData.traits.join(', ')}한 체질로 해석됩니다.`;

        fortune.traits.push(...lengthData.traits, ...depthData.traits, ...curveData.traits, ...breaksData.traits);
    } else {
        fortune.health = "생명선이 뚜렷하지 않으나 이는 자유로운 생명력을 의미합니다.";
        fortune.detailedAnalysis.physical = "건강에 특별한 제약이 없으며, 자유롭게 활동할 수 있습니다.";
    }

    // 직업운/성공운 (운명선 기반) - 다층적 분석
    if (fateLine.present) {
        // fateLine.depth가 deep이면 strong, 아니면 weak 사용
        const presenceKey = fateLine.depth === 'deep' ? 'strong' : 'weak';
        const presenceData = PALM_INTERPRETATION_DATABASE.fateLine.presence[presenceKey];
        const directionData = PALM_INTERPRETATION_DATABASE.fateLine.direction[fateLine.curve === 'straight' ? 'straight' : 'curved'];

        // 복합 해석
        fortune.career = presenceData.kr + " " + directionData.kr;

        // 상세 분석
        fortune.detailedAnalysis.destiny = `운명선이 ${fateLine.depth} 깊이로 나타나 ${presenceData.traits.join(', ')}의 특성을 보입니다. ${directionData.kr.split('.')[0]}는 경향은 ${directionData.traits.join(', ')}을 시사합니다.`;

        fortune.traits.push(...presenceData.traits, ...directionData.traits);
    } else {
        const absenceData = PALM_INTERPRETATION_DATABASE.fateLine.presence.absent;
        fortune.career = absenceData.kr;

        fortune.detailedAnalysis.destiny = `운명선이 없다는 것은 ${absenceData.traits.join(', ')}을 의미하며, 정해진 운명보다는 스스로 길을 만들어가는 삶을 살게 됩니다.`;

        fortune.traits.push(...absenceData.traits);
    }

    // 종합 운세 - 더 풍부하게
    const personalityCore = fortune.personality.split('.')[0];
    const healthCore = fortune.health.split('.')[0];
    const loveCore = fortune.loveLife.split('.')[0];
    const careerCore = fortune.career.split('.')[0];

    fortune.overall = `당신의 손금을 종합적으로 분석한 결과, ${personalityCore.toLowerCase()}. 건강과 활력 면에서는 ${healthCore.toLowerCase()}. 애정 관계에서는 ${loveCore.toLowerCase()}는 모습을 보이며, 직업과 성공 면에서는 ${careerCore.toLowerCase()}는 특징이 있습니다. 전반적으로 ${fortune.traits.slice(0, 5).join(', ')} 등의 강점을 가진 분으로 해석됩니다.`;

    // 중복 제거
    fortune.traits = [...new Set(fortune.traits)];

    return fortune;
}

// Export for use in palm-detector.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PALM_INTERPRETATION_DATABASE,
        generateDetailedFortune
    };
}
