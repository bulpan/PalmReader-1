import { users, palmReadings, type User, type InsertUser, type PalmReading, type InsertPalmReading, type PalmAnalysisResult } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  savePalmReading(reading: InsertPalmReading): Promise<PalmReading>;
  getPalmReadingBySessionId(sessionId: string): Promise<PalmReading | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private palmReadings: Map<number, PalmReading>;
  private currentUserId: number;
  private currentReadingId: number;

  constructor() {
    this.users = new Map();
    this.palmReadings = new Map();
    this.currentUserId = 1;
    this.currentReadingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async savePalmReading(insertReading: InsertPalmReading): Promise<PalmReading> {
    const id = this.currentReadingId++;
    const reading: PalmReading = {
      ...insertReading,
      id,
      createdAt: new Date(),
    };
    this.palmReadings.set(id, reading);
    return reading;
  }

  async getPalmReadingBySessionId(sessionId: string): Promise<PalmReading | undefined> {
    return Array.from(this.palmReadings.values()).find(
      (reading) => reading.sessionId === sessionId,
    );
  }
}

export const storage = new MemStorage();
