require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Traffic analytics middleware
const trafficLogger = require("./src/middleware/trafficLogger");
app.use(trafficLogger);

// Dynamic rate limiter
const apiLimiter = require("./src/middleware/rateLimiter");
app.use("/api", apiLimiter);

// Routes
const rateRoutes = require("./src/routes/rateRoutes");
const analyticsRoutes = require("./src/routes/analyticsRoutes");
const autoOptimizeRate = require("./src/utils/autoOptimizer");

app.use("/admin", rateRoutes);
app.use("/analytics", analyticsRoutes);

// Test routes
app.get("/", (req, res) => {
  res.send("🚀 Smart API Rate Optimizer Backend Running");
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "API working successfully!",
    timestamp: new Date()
  });
});

// Error handler (must be last middleware)
const errorHandler = require("./src/middleware/errorHandler");
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 5000;

// Run optimization every 30 seconds
setInterval(() => {
  autoOptimizeRate();
}, 30000);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
