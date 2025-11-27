let opencvPromise: Promise<any> | null = null;

// OpenCV.js 경로 (로컬 파일 우선, 없으면 CDN 시도)
const OPENCV_LOCAL = "/opencv.js"; // public 폴더에 배치
const OPENCV_CDNS = [
  "https://docs.opencv.org/4.10.0/opencv.js",
  "https://docs.opencv.org/4.9.0/opencv.js",
  "https://docs.opencv.org/4.8.0/opencv.js",
  "https://docs.opencv.org/4.7.0/opencv.js",
  "https://docs.opencv.org/4.6.0/opencv.js",
  "https://docs.opencv.org/4.5.5/opencv.js",
];

export function loadOpenCV(): Promise<any> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("OpenCV can only be loaded in the browser."));
  }

  if (window.cv && typeof window.cv === "object" && window.cv.Mat) {
    return Promise.resolve(window.cv);
  }

  if (opencvPromise) {
    return opencvPromise;
  }

  opencvPromise = new Promise((resolve, reject) => {
    const TIMEOUT_MS = 30000; // 30초 타임아웃
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let isResolved = false;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const handleResolve = (cv: any) => {
      if (isResolved) return;
      isResolved = true;
      cleanup();
      console.log("[OpenCV] ✅ 로딩 완료!");
      resolve(cv);
    };

    const handleReject = (error: Error) => {
      if (isResolved) return;
      isResolved = true;
      cleanup();
      console.error("[OpenCV] ❌ 로딩 실패:", error);
      reject(error);
    };

    // 타임아웃 설정
    timeoutId = setTimeout(() => {
      handleReject(new Error(`OpenCV 로딩 타임아웃 (${TIMEOUT_MS}ms 초과). 네트워크 연결을 확인해주세요.`));
    }, TIMEOUT_MS);

    // 기존 스크립트가 있는지 확인 (모든 CDN URL 체크)
    let existingScript: HTMLScriptElement | null = null;
    for (const cdnUrl of OPENCV_CDNS) {
      existingScript = document.querySelector<HTMLScriptElement>(`script[src="${cdnUrl}"]`);
      if (existingScript) break;
    }
    
    if (existingScript) {
      console.log("[OpenCV] 기존 스크립트 발견, 로딩 대기 중...");
      
      // 이미 로드된 경우
      if (window.cv && typeof window.cv === "object" && window.cv.Mat) {
        handleResolve(window.cv);
        return;
      }

      existingScript.addEventListener("load", () => {
        console.log("[OpenCV] 스크립트 로드 완료, 런타임 초기화 대기 중...");
        // onRuntimeInitialized가 이미 호출되었을 수 있음
        if (window.cv && typeof window.cv === "object" && window.cv.Mat) {
          handleResolve(window.cv);
        } else if (window.cv && typeof window.cv === "object") {
          // 런타임 초기화 대기
          const checkInterval = setInterval(() => {
            if (window.cv && window.cv.Mat) {
              clearInterval(checkInterval);
              handleResolve(window.cv);
            }
          }, 100);
          
          // 10초 후에도 초기화되지 않으면 실패
          setTimeout(() => {
            clearInterval(checkInterval);
            if (!isResolved) {
              handleReject(new Error("OpenCV 런타임 초기화가 완료되지 않았습니다."));
            }
          }, 10000);
        } else {
          handleReject(new Error("OpenCV 객체를 찾을 수 없습니다."));
        }
      });
      
      existingScript.addEventListener("error", (e) => {
        console.error("[OpenCV] 스크립트 로드 실패", e);
        handleReject(new Error("OpenCV 스크립트 로드 실패"));
      });
      return;
    }

    // 로컬 파일 우선, 없으면 CDN 시도
    let cdnIndex = -1; // -1은 로컬 파일 시도
    
    const tryLoadFromCDN = (index: number) => {
      let OPENCV_SRC: string;
      
      if (index === -1) {
        // 로컬 파일 시도
        OPENCV_SRC = OPENCV_LOCAL;
        console.log(`[OpenCV] 로컬 파일 시도: ${OPENCV_SRC}`);
      } else if (index >= OPENCV_CDNS.length) {
        handleReject(new Error("모든 OpenCV 소스에서 로드에 실패했습니다. /public/opencv.js 파일을 다운로드하거나 네트워크 연결을 확인해주세요."));
        return;
      } else {
        OPENCV_SRC = OPENCV_CDNS[index];
        console.log(`[OpenCV] CDN ${index + 1}/${OPENCV_CDNS.length} 시도: ${OPENCV_SRC}`);
      }
      
      const script = document.createElement("script");
      script.src = OPENCV_SRC;
      script.async = true;
      script.defer = false;
      script.crossOrigin = "anonymous";

      script.onload = () => {
        console.log("[OpenCV] 스크립트 로드 완료, 런타임 초기화 대기 중...");
        
        // 이미 초기화된 경우
        if (window.cv && typeof window.cv === "object" && window.cv.Mat) {
          handleResolve(window.cv);
          return;
        }

        if (window.cv && typeof window.cv === "object") {
          // onRuntimeInitialized 콜백 설정
          if (window.cv["onRuntimeInitialized"]) {
            const originalCallback = window.cv["onRuntimeInitialized"];
            window.cv["onRuntimeInitialized"] = () => {
              console.log("[OpenCV] 런타임 초기화 완료!");
              // UI 업데이트를 위해 짧은 지연
              setTimeout(() => {
                if (originalCallback) originalCallback();
                handleResolve(window.cv);
              }, 50);
            };
          } else {
            // onRuntimeInitialized가 없으면 폴링으로 확인
            let checkCount = 0;
            const checkInterval = setInterval(() => {
              checkCount++;
              if (checkCount % 10 === 0) {
                console.log(`[OpenCV] 런타임 초기화 대기 중... (${checkCount * 100}ms)`);
              }
              if (window.cv && window.cv.Mat) {
                clearInterval(checkInterval);
                console.log("[OpenCV] 런타임 초기화 완료!");
                handleResolve(window.cv);
              }
            }, 100);
            
            setTimeout(() => {
              clearInterval(checkInterval);
              if (!isResolved) {
                handleReject(new Error("OpenCV 런타임 초기화가 완료되지 않았습니다."));
              }
            }, 10000);
          }
        } else {
          handleReject(new Error("OpenCV 객체를 찾을 수 없습니다."));
        }
      };

      script.onerror = (e) => {
        console.error(`[OpenCV] CDN ${index + 1} 로드 실패, 다음 CDN 시도...`);
        // 다음 CDN 시도
        tryLoadFromCDN(index + 1);
      };

      document.body.appendChild(script);
    };

    tryLoadFromCDN(0);
  });

  return opencvPromise;
}

