export type PalmLineType = "horizontal" | "vertical" | "diagonal";

export interface PalmLineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  angle: number;
  type: PalmLineType;
}

export interface PalmFeatures {
  brightness: number;
  contrast: number;
  lineMetrics: {
    totalLines: number;
    averageLength: number;
    averageAngle: number;
    verticalLines: number;
    horizontalLines: number;
    diagonalLines: number;
    dominantAngle: number;
  };
  lineSegments: PalmLineSegment[];
  dimensions: { width: number; height: number };
  originalImageDataUrl: string;
  previewDataUrl?: string;
}

interface FeatureResult {
  features: PalmFeatures;
  buffer: ArrayBuffer;
}

function createOffscreenCanvas(width: number, height: number) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

async function readFileToArrayBuffer(file: File) {
  return await file.arrayBuffer();
}

async function drawFileToCanvas(file: File, maxWidth = 1024, maxHeight = 1024) {
  const imageBitmap = await createImageBitmap(file);
  const ratio = Math.min(maxWidth / imageBitmap.width, maxHeight / imageBitmap.height, 1);
  const canvas = createOffscreenCanvas(
    Math.floor(imageBitmap.width * ratio),
    Math.floor(imageBitmap.height * ratio),
  );
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context is not available.");
  ctx.drawImage(
    imageBitmap,
    0,
    0,
    imageBitmap.width,
    imageBitmap.height,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  return { canvas, ctx };
}

function calculateBrightnessAndContrast(imageData: ImageData) {
  const { data } = imageData;
  const pixelCount = data.length / 4;
  let total = 0;
  let totalSquared = 0;

  for (let i = 0; i < data.length; i += 4) {
    const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    total += luminance;
    totalSquared += luminance * luminance;
  }

  const brightness = total / pixelCount;
  const variance = totalSquared / pixelCount - brightness * brightness;
  const contrast = Math.sqrt(Math.max(variance, 0));

  return { brightness, contrast };
}

// 간단한 가우시안 블러 (Canvas API)
function applyBlur(imageData: ImageData, radius = 2): ImageData {
  const { data, width, height } = imageData;
  const blurred = new ImageData(width, height);
  const blurredData = blurred.data;
  
  // 간단한 박스 블러 (가우시안 근사)
  const kernelSize = radius * 2 + 1;
  const kernel: number[] = [];
  for (let i = 0; i < kernelSize; i++) {
    kernel.push(1 / kernelSize);
  }
  
  // 수평 블러
  const temp = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let k = -radius; k <= radius; k++) {
        const px = Math.max(0, Math.min(width - 1, x + k));
        const idx = (y * width + px) * 4;
        r += data[idx] * kernel[k + radius];
        g += data[idx + 1] * kernel[k + radius];
        b += data[idx + 2] * kernel[k + radius];
        a += data[idx + 3] * kernel[k + radius];
      }
      const outIdx = (y * width + x) * 4;
      temp[outIdx] = r;
      temp[outIdx + 1] = g;
      temp[outIdx + 2] = b;
      temp[outIdx + 3] = a;
    }
  }
  
  // 수직 블러
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let k = -radius; k <= radius; k++) {
        const py = Math.max(0, Math.min(height - 1, y + k));
        const idx = (py * width + x) * 4;
        r += temp[idx] * kernel[k + radius];
        g += temp[idx + 1] * kernel[k + radius];
        b += temp[idx + 2] * kernel[k + radius];
        a += temp[idx + 3] * kernel[k + radius];
      }
      const outIdx = (y * width + x) * 4;
      blurredData[outIdx] = r;
      blurredData[outIdx + 1] = g;
      blurredData[outIdx + 2] = b;
      blurredData[outIdx + 3] = a;
    }
  }
  
  return blurred;
}

// 손금 라인 감지 (어두운 선 찾기)
function detectPalmLines(imageData: ImageData): Uint8ClampedArray {
  const { data, width, height } = imageData;
  const lines = new Uint8ClampedArray(width * height);
  
  // 그레이스케일 변환 및 평균 밝기 계산
  const grayscale: number[] = [];
  let totalBrightness = 0;
  
  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    grayscale.push(gray);
    totalBrightness += gray;
  }
  
  const avgBrightness = totalBrightness / grayscale.length;
  const darkThreshold = avgBrightness * 0.70; // 평균의 70% 이하를 어두운 영역으로
  
  console.log(`[라인감지] 평균 밝기: ${avgBrightness.toFixed(2)}, 어두운 임계값: ${darkThreshold.toFixed(2)}`);
  
  // 어두운 픽셀 찾기
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const brightness = grayscale[idx];
      
      if (brightness < darkThreshold) {
        lines[idx] = 255;
      } else {
        lines[idx] = 0;
      }
    }
  }
  
  return lines;
}

// 라인 추적 및 연결
function traceAndConnectLines(darkPixels: Uint8ClampedArray, width: number, height: number): PalmLineSegment[] {
  const segments: PalmLineSegment[] = [];
  const visited = new Set<number>();
  const minLineLength = 25;
  
  // 손바닥 영역 (손가락/손목 제외)
  const isInPalmArea = (x: number, y: number) => {
    if (y < height * 0.25 || y > height * 0.85) return false;
    if (x < width * 0.05 || x > width * 0.95) return false;
    return true;
  };
  
  // 라인 추적 함수
  const traceLine = (startX: number, startY: number, dirX: number, dirY: number): PalmLineSegment | null => {
    const path: [number, number][] = [];
    let x = startX;
    let y = startY;
    let consecutiveHits = 0;
    let consecutiveMisses = 0;
    const maxMisses = 5;
    
    for (let i = 0; i < 200; i++) {
      if (!isInPalmArea(x, y)) break;
      
      const key = Math.floor(y) * width + Math.floor(x);
      if (visited.has(key)) break;
      
      if (darkPixels[key] > 128) {
        visited.add(key);
        path.push([x, y]);
        consecutiveHits++;
        consecutiveMisses = 0;
      } else {
        consecutiveMisses++;
        if (consecutiveMisses > maxMisses) break;
      }
      
      x += dirX;
      y += dirY;
    }
    
    if (path.length < minLineLength) return null;
    
    const start = path[0];
    const end = path[path.length - 1];
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    const length = Math.hypot(dx, dy);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    
    let type: PalmLineType = "diagonal";
    const absAngle = Math.abs(angle);
    if (absAngle < 25 || absAngle > 155) {
      type = "horizontal";
    } else if (absAngle > 65 && absAngle < 115) {
      type = "vertical";
    } else {
      type = "diagonal";
    }
    
    return { x1: start[0], y1: start[1], x2: end[0], y2: end[1], length, angle, type };
  };
  
  // 손바닥 영역에서 라인 검색
  const step = 5;
  const startY = Math.floor(height * 0.25);
  const endY = Math.floor(height * 0.85);
  const startX = Math.floor(width * 0.05);
  const endX = Math.floor(width * 0.95);
  
  const directions: [number, number][] = [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [1, 1], [-1, -1], [1, -1], [-1, 1],
  ];
  
  for (let y = startY; y < endY; y += step) {
    for (let x = startX; x < endX; x += step) {
      const key = y * width + x;
      if (visited.has(key) || darkPixels[key] < 128) continue;
      
      for (const [dirX, dirY] of directions) {
        const segment = traceLine(x, y, dirX, dirY);
        if (segment && segment.length > minLineLength) {
          segments.push(segment);
          break;
        }
      }
    }
  }
  
  return segments;
}

export async function extractPalmFeatures(file: File): Promise<FeatureResult> {
  try {
    console.log("[전처리] 이미지를 캔버스로 변환 중...");
    const { canvas, ctx } = await drawFileToCanvas(file);
    console.log(`[전처리] ✅ 캔버스 변환 완료: ${canvas.width}x${canvas.height}`);
    
    console.log("[전처리] 이미지 데이터 URL 생성 중...");
    const baseImageDataUrl = canvas.toDataURL("image/jpeg", 0.9);
    console.log("[전처리] ✅ 이미지 데이터 URL 생성 완료");
    
    console.log("[전처리] ImageData 추출 중...");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log("[전처리] ✅ ImageData 추출 완료");
    
    console.log("[전처리] 밝기/대비 계산 중...");
    const { brightness, contrast } = calculateBrightnessAndContrast(imageData);
    console.log(`[전처리] ✅ 밝기: ${brightness.toFixed(2)}, 대비: ${contrast.toFixed(2)}`);

    console.log("[전처리] 블러 적용 중...");
    const blurred = applyBlur(imageData, 2);
    console.log("[전처리] ✅ 블러 적용 완료");

    console.log("[전처리] 손금 라인 감지 중...");
    const darkLines = detectPalmLines(blurred);
    console.log("[전처리] ✅ 어두운 선 감지 완료");

    console.log("[전처리] 라인 추적 및 연결 중...");
    const segments = traceAndConnectLines(darkLines, canvas.width, canvas.height);
    console.log(`[전처리] ✅ 라인 추적 완료: ${segments.length}개 라인 검출`);

    // 라인 메트릭 계산
    let totalLength = 0;
    let totalAngle = 0;
    let verticalLines = 0;
    let horizontalLines = 0;
    let diagonalLines = 0;
    let dominantAngle = 0;
    let maxLength = 0;
    
    segments.forEach(segment => {
      totalLength += segment.length;
      totalAngle += segment.angle;
      
      if (segment.type === "horizontal") {
        horizontalLines++;
      } else if (segment.type === "vertical") {
        verticalLines++;
      } else {
        diagonalLines++;
      }
      
      if (segment.length > maxLength) {
        maxLength = segment.length;
        dominantAngle = segment.angle;
      }
    });

    // 중복 제거 및 정렬 (긴 라인 우선)
    segments.sort((a, b) => b.length - a.length);
    const uniqueSegments: PalmLineSegment[] = [];
    const used = new Set<string>();
    
    for (const seg of segments) {
      const key = `${Math.floor(seg.x1/10)},${Math.floor(seg.y1/10)}`;
      if (!used.has(key)) {
        used.add(key);
        uniqueSegments.push(seg);
        if (uniqueSegments.length >= 50) break; // 최대 50개만
      }
    }

    const finalLineCount = uniqueSegments.length;
    const averageLength = finalLineCount ? totalLength / finalLineCount : 0;
    const averageAngle = finalLineCount ? totalAngle / finalLineCount : 0;
    console.log(`[전처리] ✅ 라인 분석 완료: 총 ${finalLineCount}개 라인 (평균 길이: ${averageLength.toFixed(2)})`);

    console.log("[전처리] 미리보기 이미지 생성 중...");
    const previewCanvas = createOffscreenCanvas(canvas.width, canvas.height);
    const previewCtx = previewCanvas.getContext("2d");
    let previewDataUrl: string | undefined;
    
    if (previewCtx) {
      // 항상 원본 이미지를 미리보기 캔버스에 그리기
      previewCtx.drawImage(canvas, 0, 0);
      
      // 라인이 있으면 그리기
      if (uniqueSegments.length > 0) {
        const COLORS: Record<PalmLineType, string> = {
          horizontal: "#f87171", // 빨간색 - 심장선
          vertical: "#34d399",   // 초록색 - 생명선
          diagonal: "#a78bfa",   // 보라색 - 두뇌선
        };
        
        previewCtx.lineWidth = 4;
        previewCtx.lineCap = "round";
        previewCtx.globalAlpha = 0.9;
        
        uniqueSegments.forEach(segment => {
          previewCtx.strokeStyle = COLORS[segment.type];
          previewCtx.shadowColor = COLORS[segment.type];
          previewCtx.shadowBlur = 3;
          previewCtx.beginPath();
          previewCtx.moveTo(segment.x1, segment.y1);
          previewCtx.lineTo(segment.x2, segment.y2);
          previewCtx.stroke();
        });
        
        previewCtx.shadowBlur = 0;
        console.log(`[전처리] ✅ 미리보기 이미지 생성 완료 (${uniqueSegments.length}개 라인 표시)`);
      } else {
        console.log("[전처리] ⚠️ 감지된 라인이 없지만 원본 이미지 표시");
      }
      
      // 항상 미리보기 이미지 생성 (라인이 없어도)
      previewDataUrl = previewCanvas.toDataURL("image/png");
    }

    console.log("[전처리] 원본 파일 버퍼 읽기 중...");
    const buffer = await readFileToArrayBuffer(file);
    console.log("[전처리] ✅ 원본 파일 버퍼 읽기 완료");
    console.log("[전처리] ✅✅✅ 모든 전처리 완료!");

    return {
      buffer,
      features: {
        brightness,
        contrast,
        lineMetrics: {
          totalLines: finalLineCount,
          averageLength,
          averageAngle,
          verticalLines,
          horizontalLines,
          diagonalLines,
          dominantAngle,
        },
        lineSegments: uniqueSegments,
        dimensions: { width: canvas.width, height: canvas.height },
        originalImageDataUrl: baseImageDataUrl,
        previewDataUrl,
      },
    };
  } catch (error) {
    console.error("[전처리] ❌❌❌ 전처리 중 오류 발생:", error);
    if (error instanceof Error) {
      console.error("[전처리] 에러 메시지:", error.message);
      console.error("[전처리] 스택 트레이스:", error.stack);
    }
    throw error;
  }
}

