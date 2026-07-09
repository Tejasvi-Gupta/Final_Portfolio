import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";
import contactRouter from "./routes/contact.js";
import projectsRouter from "./routes/projects.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CORS_ORIGIN || "").split(",").filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : "*",
  })
);
app.use(express.json());

// Basic rate limiting to protect the contact form from abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many requests. Please try again later." },
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/contact", contactLimiter, contactRouter);
app.use("/api/projects", projectsRouter);

app.use((req, res) => res.status(404).json({ error: "Not found" }));

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
