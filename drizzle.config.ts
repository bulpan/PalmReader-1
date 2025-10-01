// 데이터베이스 연결 제거로 인해 Drizzle 설정 비활성화
// import { defineConfig } from "drizzle-kit";

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL, ensure the database is provisioned");
// }

// export default defineConfig({
//   out: "./migrations",
//   schema: "./shared/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

// 더미 설정 (DB 없이 동작)
export default {};
