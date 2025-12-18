// TypeScript types for MediaPipe and OpenCV  
declare global {
    interface Window {
        Hands: any;
        cv: any;
        cvReady: boolean;
        adsenseManager: any;
    }
}

// MediaPipe Hand Landmarks
export interface HandLandmarks {
    x: number;
    y: number;
    z: number;
}

// Palm Line Features
export interface LineFeatures {
    present: boolean;
    length: 'short' | 'medium' | 'long';
    depth: 'shallow' | 'medium' | 'deep';
    curve: 'straight' | 'slightly_curved' | 'curved';
    breaks: boolean;
    branches: boolean;
}

// Complete Palm Analysis
export interface PalmFeatures {
    heartLine: LineFeatures;
    headLine: LineFeatures;
    lifeLine: LineFeatures;
    fateLine: LineFeatures;
}

export { };
