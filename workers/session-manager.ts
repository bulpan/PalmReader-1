// Cloudflare Workers용 세션 관리
import { nanoid } from 'nanoid';

export interface SessionData {
  id: string;
  userId?: string;
  createdAt: Date;
  lastAccessed: Date;
  data: Record<string, any>;
}

export class SessionManager {
  private sessions: Map<string, SessionData> = new Map();
  private readonly maxAge = 24 * 60 * 60 * 1000; // 24시간

  createSession(userId?: string): string {
    const sessionId = nanoid();
    const now = new Date();
    
    this.sessions.set(sessionId, {
      id: sessionId,
      userId,
      createdAt: now,
      lastAccessed: now,
      data: {}
    });

    // 정리 작업 (만료된 세션 제거)
    this.cleanupExpiredSessions();
    
    return sessionId;
  }

  getSession(sessionId: string): SessionData | null {
    const session = this.sessions.get(sessionId);
    
    if (!session) {
      return null;
    }

    // 세션 만료 확인
    const now = new Date();
    if (now.getTime() - session.lastAccessed.getTime() > this.maxAge) {
      this.sessions.delete(sessionId);
      return null;
    }

    // 마지막 접근 시간 업데이트
    session.lastAccessed = now;
    return session;
  }

  updateSession(sessionId: string, data: Record<string, any>): boolean {
    const session = this.getSession(sessionId);
    
    if (!session) {
      return false;
    }

    session.data = { ...session.data, ...data };
    session.lastAccessed = new Date();
    return true;
  }

  deleteSession(sessionId: string): boolean {
    return this.sessions.delete(sessionId);
  }

  private cleanupExpiredSessions(): void {
    const now = new Date();
    
    for (const [sessionId, session] of this.sessions.entries()) {
      if (now.getTime() - session.lastAccessed.getTime() > this.maxAge) {
        this.sessions.delete(sessionId);
      }
    }
  }

  // 세션 통계
  getSessionStats() {
    return {
      totalSessions: this.sessions.size,
      activeSessions: Array.from(this.sessions.values()).filter(
        session => new Date().getTime() - session.lastAccessed.getTime() < this.maxAge
      ).length
    };
  }
}

// 전역 세션 매니저 인스턴스
export const sessionManager = new SessionManager();
