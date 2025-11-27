import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Check if we're in deployment environment by looking for built files
  const distPath = path.resolve(import.meta.dirname, "..", "dist", "public");
  const isDeployment = fs.existsSync(distPath) && fs.existsSync(path.join(distPath, "index.html"));
  const hasViteSource = fs.existsSync(path.resolve(import.meta.dirname, "..", "client", "src"));
  
  log(`Built files exist: ${isDeployment}, Vite source exists: ${hasViteSource}`);
  log(`NODE_ENV: ${process.env.NODE_ENV || 'not set'}, REPLIT_DEPLOYMENT: ${process.env.REPLIT_DEPLOYMENT || 'not set'}`);
  
  // Use static serving ONLY in deployment or production, otherwise use Vite
  if (process.env.REPLIT_DEPLOYMENT === '1' || (process.env.NODE_ENV === "production" && isDeployment)) {
    log("Using static file serving (production/deployment mode)");
    serveStatic(app);
  } else if (hasViteSource) {
    log("Using Vite development server");
    await setupVite(app, server);
  } else {
    log("No source found, using minimal serving");
    app.get("*", (req, res) => {
      res.status(404).send("Application not properly configured");
    });
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '3000', 10);
  
  // 로컬 환경에서는 간단한 listen 사용
  if (process.env.NODE_ENV === 'development') {
    server.listen(port, () => {
      log(`serving on port ${port}`);
    });
  } else {
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });
  }
})();
