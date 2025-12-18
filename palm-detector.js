// Palm Detector - Real Computer Vision-based Palm Reading
// Using MediaPipe Hands + OpenCV.js

let openCvReady = false;
let mediaPipeReady = false;
let hands = null;
let currentImage = null;

// DOM Elements (with safety checks for React app compatibility)
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const selectBtn = document.getElementById('selectBtn');
const previewSection = document.getElementById('previewSection');
const imagePreview = document.getElementById('imagePreview');
const detectionCanvas = document.getElementById('detectionCanvas');
const analyzeBtn = document.getElementById('analyzeBtn');
const progressSection = document.getElementById('progressSection');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resultsSection = document.getElementById('resultsSection');
const errorMessage = document.getElementById('errorMessage');

// Check if running in standalone mode (has all DOM elements)
const isStandaloneMode = uploadArea && imageInput && selectBtn && analyzeBtn;

console.log(`🔍 Palm Detector Mode: ${isStandaloneMode ? 'Standalone' : 'React Integration'}`);

// Initialize when OpenCV is ready
function onOpenCvReady() {
    console.log('✅ OpenCV.js loaded');
    openCvReady = true;
    checkAllLibrariesLoaded();
}

// Initialize MediaPipe Hands
function initializeMediaPipe() {
    hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });

    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5
    });

    console.log('✅ MediaPipe Hands initialized');
    mediaPipeReady = true;
    checkAllLibrariesLoaded();
}

// Check if all libraries are loaded
function checkAllLibrariesLoaded() {
    if (openCvReady && mediaPipeReady) {
        console.log('✅ All libraries loaded successfully');
    }
}

// Initialize MediaPipe when script loads
if (typeof Hands !== 'undefined') {
    initializeMediaPipe();
} else {
    window.addEventListener('load', () => {
        setTimeout(initializeMediaPipe, 1000);
    });
}

if (isStandaloneMode) {
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });
}

// Handle Image Upload
function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        currentImage = new Image();
        currentImage.onload = () => {
            imagePreview.src = e.target.result;
            previewSection.classList.add('active');
            resultsSection.classList.remove('active');
            errorMessage.classList.remove('active');
        };
        currentImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Analyze Button Click
if (isStandaloneMode) {
    analyzeBtn.addEventListener('click', async () => {
        if (!openCvReady || !mediaPipeReady) {
            showError('라이브러리 로딩 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        try {
            analyzeBtn.disabled = true;
            progressSection.classList.add('active');

            // Reset all steps
            for (let i = 1; i <= 5; i++) {
                document.getElementById(`step${i}`).classList.remove('active', 'completed');
            }

            // Step 1: Detect hand with MediaPipe
            activateStep(1, '손 검출 중...', 10);
            await sleep(800); // Simulate processing time for UX
            const handLandmarks = await detectHand(currentImage);
            completeStep(1);
            await sleep(300);

            // Step 2: Extract palm region
            activateStep(2, '손바닥 영역 추출 중...', 30);
            await sleep(600);
            const palmRegion = extractPalmRegion(currentImage, handLandmarks);
            completeStep(2);
            await sleep(300);

            // Step 3: Detect palm lines with OpenCV
            activateStep(3, '손금 선 검출 중...', 50);
            await sleep(1000);
            const detectedLines = detectPalmLines(palmRegion);
            completeStep(3);
            await sleep(300);

            // Step 4: Classify and analyze lines
            activateStep(4, '선 분석 중...', 70);
            await sleep(800);
            const analysis = analyzePalmLines(detectedLines, handLandmarks);
            completeStep(4);
            await sleep(300);

            // Step 5: Generate fortune
            activateStep(5, '운세 생성 중...', 90);
            await sleep(600);
            const fortune = generateFortune(analysis);
            updateProgress(100, '완료!');
            completeStep(5);
            await sleep(500);

            // Hide progress and show ad
            progressSection.classList.remove('active');

            // Show ad section with timer
            showAdWithTimer(fortune, analysis);

        } catch (error) {
            console.error('Analysis error:', error);
            showError('분석 중 오류가 발생했습니다: ' + error.message);
            progressSection.classList.remove('active');
            analyzeBtn.disabled = false;
        }
    });
}

// Helper function to sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Activate a progress step
function activateStep(stepNumber, message, progress) {
    updateProgress(progress, message);
    const step = document.getElementById(`step${stepNumber}`);
    step.classList.add('active');
}

// Complete a progress step
function completeStep(stepNumber) {
    const step = document.getElementById(`step${stepNumber}`);
    step.classList.remove('active');
    step.classList.add('completed');
}

// Show ad with countdown timer
function showAdWithTimer(fortune, analysis) {
    const adSection = document.getElementById('adSection');
    const adTimer = document.getElementById('adTimer');
    const adTimerText = document.getElementById('adTimerText');
    const adSkipBtn = document.getElementById('adSkipBtn');

    adSection.classList.add('active');

    let timeLeft = 5; // 5 seconds countdown
    adTimer.textContent = timeLeft;
    adTimerText.textContent = `${timeLeft}초`;

    const countdown = setInterval(() => {
        timeLeft--;
        adTimer.textContent = timeLeft;
        adTimerText.textContent = `${timeLeft}초`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            adSkipBtn.disabled = false;
            adSkipBtn.classList.add('enabled');
            adSkipBtn.textContent = '✨ 결과 확인하기 ✨';

            // Add click handler to show results
            adSkipBtn.onclick = () => {
                adSection.classList.remove('active');
                displayResults(fortune, analysis);
                analyzeBtn.disabled = false;
            };
        }
    }, 1000);
}

// Detect hand using MediaPipe
async function detectHand(image) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        hands.onResults((results) => {
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                resolve(results.multiHandLandmarks[0]);
            } else {
                reject(new Error('손을 감지할 수 없습니다. 손바닥이 명확하게 보이는 사진을 사용해주세요.'));
            }
        });

        hands.send({ image: canvas });
    });
}

// Extract palm region from image
function extractPalmRegion(image, landmarks) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Calculate palm bounding box
    const palmPoints = [0, 1, 2, 5, 9, 13, 17]; // Wrist and base of fingers
    let minX = 1, minY = 1, maxX = 0, maxY = 0;

    palmPoints.forEach(idx => {
        const point = landmarks[idx];
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
    });

    // Add padding
    const padding = 0.05;
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX = Math.min(1, maxX + padding);
    maxY = Math.min(1, maxY + padding);

    // Crop to palm region
    const cropX = minX * image.width;
    const cropY = minY * image.height;
    const cropW = (maxX - minX) * image.width;
    const cropH = (maxY - minY) * image.height;

    canvas.width = cropW;
    canvas.height = cropH;
    ctx.drawImage(image, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

    return canvas;
}

// Detect palm lines using OpenCV
function detectPalmLines(palmCanvas) {
    const src = cv.imread(palmCanvas);
    const gray = new cv.Mat();
    const enhanced = new cv.Mat();
    const edges = new cv.Mat();
    const lines = new cv.Mat();

    try {
        // Convert to grayscale
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

        // Enhance contrast with CLAHE
        const clahe = new cv.CLAHE(2.0, new cv.Size(8, 8));
        clahe.apply(gray, enhanced);

        // Apply Gaussian blur to reduce noise
        cv.GaussianBlur(enhanced, enhanced, new cv.Size(5, 5), 0);

        // Detect edges with Canny
        cv.Canny(enhanced, edges, 30, 90);

        // Detect lines with HoughLinesP
        cv.HoughLinesP(edges, lines, 1, Math.PI / 180, 30, 20, 10);

        // Convert lines to array
        const detectedLines = [];
        for (let i = 0; i < lines.rows; i++) {
            const x1 = lines.data32S[i * 4];
            const y1 = lines.data32S[i * 4 + 1];
            const x2 = lines.data32S[i * 4 + 2];
            const y2 = lines.data32S[i * 4 + 3];

            const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

            detectedLines.push({ x1, y1, x2, y2, length, angle });
        }

        return detectedLines;

    } finally {
        src.delete();
        gray.delete();
        enhanced.delete();
        edges.delete();
        lines.delete();
    }
}

// Analyze and classify palm lines
function analyzePalmLines(lines, landmarks) {
    const palmHeight = 100; // normalized
    const palmWidth = 100;

    const classified = {
        heartLine: [],
        headLine: [],
        lifeLine: [],
        fateLine: []
    };

    // Classify lines based on position and angle
    lines.forEach(line => {
        const relY = (line.y1 + line.y2) / 2;
        const absAngle = Math.abs(line.angle);

        // Heart line: top horizontal line
        if (relY < palmHeight * 0.3 && absAngle < 30 && line.length > 30) {
            classified.heartLine.push(line);
        }
        // Head line: middle horizontal line
        else if (relY >= palmHeight * 0.3 && relY < palmHeight * 0.6 && absAngle < 30 && line.length > 30) {
            classified.headLine.push(line);
        }
        // Fate line: vertical line
        else if (absAngle > 60 && absAngle < 120 && line.length > 40) {
            classified.fateLine.push(line);
        }
        // Life line: curved line (remaining significant lines)
        else if (line.length > 25) {
            classified.lifeLine.push(line);
        }
    });

    // Extract features for each line type
    const analysis = {
        heartLine: extractLineFeatures(classified.heartLine, 'heart'),
        headLine: extractLineFeatures(classified.headLine, 'head'),
        lifeLine: extractLineFeatures(classified.lifeLine, 'life'),
        fateLine: extractLineFeatures(classified.fateLine, 'fate')
    };

    return analysis;
}

// Extract features from detected lines
function extractLineFeatures(lines, type) {
    if (lines.length === 0) {
        return {
            present: false,
            length: 'short',
            depth: 'shallow',
            curve: 'straight',
            breaks: false,
            branches: false,
            count: 0
        };
    }

    // Find the longest line as the main line
    const mainLine = lines.reduce((longest, line) =>
        line.length > longest.length ? line : longest
    );

    const totalLength = lines.reduce((sum, line) => sum + line.length, 0);
    const avgLength = totalLength / lines.length;

    return {
        present: true,
        length: avgLength > 60 ? 'long' : avgLength > 35 ? 'medium' : 'short',
        depth: lines.length > 3 ? 'deep' : lines.length > 1 ? 'medium' : 'shallow',
        curve: Math.abs(mainLine.angle) > 15 ? 'curved' : Math.abs(mainLine.angle) > 5 ? 'slightly_curved' : 'straight',
        breaks: lines.length > 2,
        branches: lines.length > 4,
        count: lines.length,
        mainLength: mainLine.length,
        mainAngle: mainLine.angle
    };
}

// Generate fortune based on analysis (using metadata database)
function generateFortune(analysis) {
    console.log('🔮 generateFortune called with analysis:', analysis);

    // Use the metadata-based generation if available
    if (typeof generateDetailedFortune !== 'undefined') {
        try {
            console.log('✅ Using generateDetailedFortune from metadata');
            const result = generateDetailedFortune(analysis);
            console.log('✅ Generated fortune:', result);
            return result;
        } catch (error) {
            console.error('❌ Error using metadata fortune:', error);
            console.error('Stack:', error.stack);
            // Fall back to simple generation
        }
    } else {
        console.warn('⚠️ generateDetailedFortune not defined, using fallback');
    }

    // Fallback simple generation
    const { heartLine, headLine, lifeLine, fateLine } = analysis;

    // Generate interpretations
    let loveLife = '감정이 풍부하고 사랑에 진실한 성향입니다.';
    if (heartLine.present) {
        if (heartLine.length === 'long' && heartLine.curve === 'curved') {
            loveLife = '감정을 자유롭게 표현하며 깊은 사랑을 추구합니다. 로맨틱한 관계를 중시하고 헌신적인 사랑을 합니다.';
        } else if (heartLine.length === 'short') {
            loveLife = '독립적인 성향이 강하며 로맨스보다 자기계발에 관심이 많습니다.';
        } else if (heartLine.depth === 'deep') {
            loveLife = '사랑에 진지하고 깊은 애정을 가지고 있습니다. 한 번 사랑하면 오래 지속됩니다.';
        }
    }

    let personality = '균형잡힌 사고방식을 가지고 있습니다.';
    if (headLine.present) {
        if (headLine.curve === 'curved') {
            personality = '창의적이고 예술적 감각이 뛰어납니다. 직관력이 강하고 상상력이 풍부합니다.';
        } else if (headLine.length === 'long' && headLine.depth === 'deep') {
            personality = '사고가 명확하고 집중력이 뛰어납니다. 논리적이고 분석적인 능력이 탁월합니다.';
        } else if (headLine.curve === 'straight') {
            personality = '현실적이고 실용적인 사고방식을 가지고 있습니다. 체계적으로 문제를 해결합니다.';
        }
    }

    let health = '전반적으로 건강한 삶을 유지할 것입니다.';
    if (lifeLine.present) {
        if (lifeLine.length === 'long' && lifeLine.depth === 'deep') {
            health = '활력이 넘치고 생명력이 강합니다. 체력이 좋고 회복력이 뛰어납니다.';
        } else if (lifeLine.curve === 'curved') {
            health = '에너지가 풍부하고 활동적인 생활을 선호합니다. 운동과 야외활동을 즐깁니다.';
        } else if (lifeLine.breaks) {
            health = '생활방식에 변화가 있을 수 있습니다. 건강 관리에 주의를 기울이면 좋습니다.';
        }
    }

    let career = '자신만의 길을 개척해 나가는 성향입니다.';
    if (fateLine.present) {
        if (fateLine.depth === 'deep') {
            career = '목표 지향적이고 의지가 강합니다. 리더십이 뛰어나 큰 성공을 거둘 수 있습니다.';
        } else if (fateLine.breaks) {
            career = '외부 환경의 영향을 받아 커리어에 변화가 많을 수 있습니다. 다양한 경험을 하게 됩니다.';
        } else {
            career = '안정적인 커리어를 추구하며 점진적으로 발전해 나갑니다.';
        }
    } else {
        career = '자유로운 영혼으로 정해진 길보다는 창의적인 분야에서 빛을 발합니다.';
    }

    const overall = `${personality.split('.')[0]}. ${health.split('.')[0]}. 애정면에서는 ${loveLife.split('.')[0].toLowerCase()}며, 직업적으로는 ${career.split('.')[0].toLowerCase()}는 모습을 보입니다.`;

    return {
        overall,
        loveLife,
        career,
        health,
        personality,
        traits: ['균형잡힌', '활력있는', '진실한', '실용적', '창의적'],
        detailedAnalysis: {
            emotional: `감정선 분석: ${loveLife}`,
            intellectual: `두뇌선 분석: ${personality}`,
            physical: `생명선 분석: ${health}`,
            destiny: `운명선 분석: ${career}`
        }
    };
}

// Display results
function displayResults(fortune, analysis) {
    document.getElementById('overallResult').textContent = fortune.overall;
    document.getElementById('loveResult').textContent = fortune.loveLife;
    document.getElementById('careerResult').textContent = fortune.career;
    document.getElementById('healthResult').textContent = fortune.health;

    // Display personality traits tags
    const traitsContainer = document.getElementById('traitsContainer');
    traitsContainer.innerHTML = '';
    if (fortune.traits && fortune.traits.length > 0) {
        fortune.traits.forEach(trait => {
            const tag = document.createElement('span');
            tag.className = 'trait-tag';
            tag.textContent = trait;
            traitsContainer.appendChild(tag);
        });
    } else {
        traitsContainer.innerHTML = '<p style="color: #888;">성격 특성을 분석 중입니다...</p>';
    }

    // Display detailed analysis if available
    if (fortune.detailedAnalysis) {
        document.getElementById('emotionalAnalysis').textContent = fortune.detailedAnalysis.emotional || '감정선 데이터를 분석 중입니다.';
        document.getElementById('intellectualAnalysis').textContent = fortune.detailedAnalysis.intellectual || '두뇌선 데이터를 분석 중입니다.';
        document.getElementById('physicalAnalysis').textContent = fortune.detailedAnalysis.physical || '생명선 데이터를 분석 중입니다.';
        document.getElementById('destinyAnalysis').textContent = fortune.detailedAnalysis.destiny || '운명선 데이터를 분석 중입니다.';
    }

    // Display line details
    const lineDetails = document.getElementById('lineDetails');
    lineDetails.innerHTML = '';

    const lineTypes = [
        { name: '감정선', key: 'heartLine', color: 'heart', emoji: '❤️' },
        { name: '두뇌선', key: 'headLine', color: 'head', emoji: '🧠' },
        { name: '생명선', key: 'lifeLine', color: 'life', emoji: '💚' },
        { name: '운명선', key: 'fateLine', color: 'fate', emoji: '⭐' }
    ];

    lineTypes.forEach(({ name, key, color, emoji }) => {
        const lineData = analysis[key];
        const card = document.createElement('div');
        card.className = 'line-card';

        const features = lineData.present ? `
      <div class="line-feature">
        <span class="feature-label">존재 여부</span>
        <span class="feature-value">✅ 검출됨</span>
      </div>
      <div class="line-feature">
        <span class="feature-label">길이</span>
        <span class="feature-value">${lineData.length === 'long' ? '길음' : lineData.length === 'medium' ? '보통' : '짧음'}</span>
      </div>
      <div class="line-feature">
        <span class="feature-label">깊이</span>
        <span class="feature-value">${lineData.depth === 'deep' ? '깊음' : lineData.depth === 'medium' ? '보통' : '얕음'}</span>
      </div>
      <div class="line-feature">
        <span class="feature-label">곡선</span>
        <span class="feature-value">${lineData.curve === 'curved' ? '굽음' : lineData.curve === 'slightly_curved' ? '살짝 굽음' : '직선'}</span>
      </div>
      <div class="line-feature">
        <span class="feature-label">검출된 선 수</span>
        <span class="feature-value">${lineData.count}개</span>
      </div>
    ` : `
      <div class="line-feature">
        <span class="feature-label">존재 여부</span>
        <span class="feature-value">❌ 미검출</span>
      </div>
    `;

        card.innerHTML = `
      <h4>
        <span class="line-badge ${color}"></span>
        ${emoji} ${name}
      </h4>
      ${features}
    `;

        lineDetails.appendChild(card);
    });

    resultsSection.classList.add('active');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Update progress
function updateProgress(percent, text) {
    progressFill.style.width = percent + '%';
    progressText.textContent = text;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
    setTimeout(() => {
        errorMessage.classList.remove('active');
    }, 5000);
}
