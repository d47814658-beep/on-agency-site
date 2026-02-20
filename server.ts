import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";

// OpenRouter API Key provided by user
const OPENROUTER_API_KEY = "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";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production (if needed, though usually handled by nginx/platform)
    // For this environment, we rely on Vite middleware in dev, and build output in prod.
    // But since we are running `tsx server.ts` in dev, this block handles dev.
    // In production, the build command runs `vite build`, and the start command runs `node server.js` (compiled) or `tsx server.ts`.
    // We need to serve the `dist` folder in production.
    const path = await import("path");
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
