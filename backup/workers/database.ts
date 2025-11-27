// Cloudflare Workers용 데이터베이스 연결 설정 (비활성화)
// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import { users, palmReadings, userFeedback, type InsertUser, type InsertPalmReading, type InsertUserFeedback, type User, type PalmReading, type UserFeedback } from './schema';
// import { eq, desc } from 'drizzle-orm';

// Workers 환경에서 데이터베이스 연결 (비활성화)
// function createDatabaseConnection() {
//   if (!process.env.DATABASE_URL) {
//     throw new Error('DATABASE_URL environment variable is required');
//   }
//   
//   try {
//     const sql = neon(process.env.DATABASE_URL);
//     const db = drizzle(sql);
//     console.log('Database connection established successfully');
//     return db;
//   } catch (error) {
//     console.error('Failed to connect to database:', error);
//     throw error;
//   }
// }

// 전역 데이터베이스 인스턴스 (비활성화)
// let db: ReturnType<typeof createDatabaseConnection>;

// export function getDatabase() {
//   if (!db) {
//     db = createDatabaseConnection();
//   }
//   return db;
// }

// 스토리지 클래스 (Workers용) - 비활성화
// export class WorkersStorage {
//   private db = getDatabase();

//   async getUser(id: number) {
//     const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
//     return result[0];
//   }

//   async getUserByUsername(username: string) {
//     const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
//     return result[0];
//   }

//   async createUser(insertUser: InsertUser): Promise<User> {
//     const result = await this.db.insert(users).values(insertUser).returning();
//     return result[0];
//   }

//   async savePalmReading(insertReading: InsertPalmReading): Promise<PalmReading> {
//     const result = await this.db.insert(palmReadings).values(insertReading).returning();
//     return result[0];
//   }

//   async getPalmReadingBySessionId(sessionId: string) {
//     const result = await this.db.select().from(palmReadings).where(eq(palmReadings.sessionId, sessionId)).limit(1);
//     return result[0];
//   }

//   async createUserFeedback(insertFeedback: InsertUserFeedback): Promise<UserFeedback> {
//     const result = await this.db.insert(userFeedback).values(insertFeedback).returning();
//     return result[0];
//   }

//   async getAllUserFeedback() {
//     const result = await this.db.select().from(userFeedback).orderBy(desc(userFeedback.createdAt));
//     return result;
//   }

//   async updateUserFeedbackStatus(id: number, status: string) {
//     const result = await this.db.update(userFeedback)
//       .set({ status, updatedAt: new Date() })
//       .where(eq(userFeedback.id, id))
//       .returning();
//     return result[0];
//   }
// }

// Workers용 스토리지 인스턴스 (비활성화)
// export const storage = new WorkersStorage();

// 더미 스토리지 클래스 (DB 없이 동작)
export class DummyStorage {
  async getUser(id: number) {
    throw new Error('Database functionality disabled');
  }

  async getUserByUsername(username: string) {
    throw new Error('Database functionality disabled');
  }

  async createUser(insertUser: any) {
    throw new Error('Database functionality disabled');
  }

  async savePalmReading(insertReading: any) {
    throw new Error('Database functionality disabled');
  }

  async getPalmReadingBySessionId(sessionId: string) {
    throw new Error('Database functionality disabled');
  }

  async createUserFeedback(insertFeedback: any) {
    throw new Error('Database functionality disabled');
  }

  async getAllUserFeedback() {
    throw new Error('Database functionality disabled');
  }

  async updateUserFeedbackStatus(id: number, status: string) {
    throw new Error('Database functionality disabled');
  }
}

// 더미 스토리지 인스턴스
export const storage = new DummyStorage();
