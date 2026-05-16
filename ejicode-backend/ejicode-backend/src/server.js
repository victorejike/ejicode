require("dotenv").config();
const app     = require("./app");
const connectDB = require("./config/db");
const logger  = require("./utils/logger");

const PORT = process.env.PORT || 5001;

const start = async () => {
  await connectDB();
  const server = app.listen(PORT, () => {
    logger.info(`ejicode API running on port ${PORT} [${process.env.NODE_ENV}]`);
  });

  // Graceful shutdown
  const shutdown = (sig) => {
    logger.warn(`${sig} received — shutting down gracefully`);
    server.close(() => {
      logger.info("Server closed.");
      process.exit(0);
    });
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT",  () => shutdown("SIGINT"));
};

start();
