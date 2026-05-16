const express      = require("express");
const cors         = require("cors");
const helmet       = require("helmet");
const morgan       = require("morgan");
const rateLimit    = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const compression  = require("compression");

const routes        = require("./routes");
const errorHandler  = require("./middleware/errorHandler");
const notFound      = require("./middleware/notFound");
const logger        = require("./utils/logger");

const app = express();

// ── Security ─────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin:      process.env.CLIENT_URL || "*",
  credentials: true,
}));

// ── Rate limiting ─────────────────────────────────────────
app.use(rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max:      Number(process.env.RATE_LIMIT_MAX)        || 100,
  message:  { success: false, message: "Too many requests, please try again later." },
}));

// ── Body parsing ──────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use((req, res, next) => {
  sanitizeObject(req.body);
  next();
});
app.use(cookieParser());
app.use(compression());

// ── HTTP logging ──────────────────────────────────────────
app.use(morgan("combined", { stream: { write: (msg) => logger.http(msg.trim()) } }));

// ── Health check ──────────────────────────────────────────
app.get("/health", (req, res) =>
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() })
);

// ── API Routes ────────────────────────────────────────────
const prefix = process.env.API_PREFIX || "/api/v1";
app.use(prefix, routes);

// ── 404 & Error handlers ──────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;

function sanitizeObject(value) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach(sanitizeObject);
    return;
  }

  Object.keys(value).forEach((key) => {
    if (key.startsWith("$") || key.includes(".")) {
      delete value[key];
      return;
    }
    sanitizeObject(value[key]);
  });
}
