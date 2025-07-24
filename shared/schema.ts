import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const palmReadings = pgTable("palm_readings", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  imageData: text("image_data").notNull(),
  analysisResult: jsonb("analysis_result").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPalmReadingSchema = createInsertSchema(palmReadings).pick({
  sessionId: true,
  imageData: true,
  analysisResult: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPalmReading = z.infer<typeof insertPalmReadingSchema>;
export type PalmReading = typeof palmReadings.$inferSelect;

export interface PalmAnalysisResult {
  overall: string;
  loveLife: string;
  career: string;
  health: string;
  personality: string;
  lines: {
    heartLine: { present: boolean; description: string; traits: string[] };
    headLine: { present: boolean; description: string; traits: string[] };
    lifeLine: { present: boolean; description: string; traits: string[] };
    fateLine: { present: boolean; description: string; traits: string[] };
  };
  confidence: number;
}
