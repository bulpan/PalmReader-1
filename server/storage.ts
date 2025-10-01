// 데이터베이스 연결 제거 - 메모리 스토리지만 사용
// import { users, palmReadings, userFeedback, type User, type InsertUser, type PalmReading, type InsertPalmReading, type UserFeedback, type InsertUserFeedback } from "@shared/schema";
// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<any>;
  getUserByUsername(username: string): Promise<any>;
  createUser(user: any): Promise<any>;
  savePalmReading(reading: any): Promise<any>;
  getPalmReadingBySessionId(sessionId: string): Promise<any>;
  createUserFeedback(feedback: any): Promise<any>;
  getAllUserFeedback(): Promise<any[]>;
  updateUserFeedbackStatus(id: number, status: string): Promise<any>;
}

export class MemStorage implements IStorage {
  private users: Map<number, any>;
  private palmReadings: Map<number, any>;
  private userFeedbacks: Map<number, any>;
  private currentUserId: number;
  private currentReadingId: number;
  private currentFeedbackId: number;

  constructor() {
    this.users = new Map();
    this.palmReadings = new Map();
    this.userFeedbacks = new Map();
    this.currentUserId = 1;
    this.currentReadingId = 1;
    this.currentFeedbackId = 1;
  }

  async getUser(id: number): Promise<any> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async savePalmReading(insertReading: any): Promise<any> {
    const id = this.currentReadingId++;
    const reading = {
      ...insertReading,
      id,
      createdAt: new Date(),
    };
    this.palmReadings.set(id, reading);
    return reading;
  }

  async getPalmReadingBySessionId(sessionId: string): Promise<any> {
    return Array.from(this.palmReadings.values()).find(
      (reading) => reading.sessionId === sessionId,
    );
  }

  async createUserFeedback(insertFeedback: any): Promise<any> {
    const id = this.currentFeedbackId++;
    const feedback = {
      ...insertFeedback,
      id,
      status: "검토",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.userFeedbacks.set(id, feedback);
    return feedback;
  }

  async getAllUserFeedback(): Promise<any[]> {
    return Array.from(this.userFeedbacks.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async updateUserFeedbackStatus(id: number, status: string): Promise<any> {
    const feedback = this.userFeedbacks.get(id);
    if (feedback) {
      feedback.status = status;
      feedback.updatedAt = new Date();
      this.userFeedbacks.set(id, feedback);
    }
    return feedback;
  }
}

// DB 연결 제거 - 메모리 스토리지만 사용
// export class DatabaseStorage implements IStorage {
//   // DB 관련 코드 모두 주석 처리
// }

// 메모리 스토리지만 사용
let storage: IStorage;

console.log("Initializing memory storage - database functionality disabled");
storage = new MemStorage();

export { storage };
