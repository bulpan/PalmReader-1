import { users, palmReadings, type User, type InsertUser, type PalmReading, type InsertPalmReading, type PalmAnalysisResult } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL environment variable is not set. Falling back to memory storage.");
      throw new Error("DATABASE_URL environment variable is required");
    }
    try {
      const sql = neon(process.env.DATABASE_URL);
      this.db = drizzle(sql);
      console.log("Database connection established successfully");
    } catch (error) {
      console.error("Failed to connect to database:", error);
      throw error;
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async savePalmReading(insertReading: InsertPalmReading): Promise<PalmReading> {
    const result = await this.db.insert(palmReadings).values(insertReading).returning();
    return result[0];
  }

  async getPalmReadingBySessionId(sessionId: string): Promise<PalmReading | undefined> {
    const result = await this.db.select().from(palmReadings).where(eq(palmReadings.sessionId, sessionId)).limit(1);
    return result[0];
  }
}

// Use database storage in production, memory storage in development for faster iteration
let storage: IStorage;

try {
  if (process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
    console.log("Initializing database storage for production");
    storage = new DatabaseStorage();
  } else {
    console.log("Initializing memory storage for development");
    storage = new MemStorage();
  }
} catch (error) {
  console.error("Failed to initialize database storage, falling back to memory storage:", error);
  storage = new MemStorage();
}

export { storage };
