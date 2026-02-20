const rateLimit = require("express-rate-limit");
const { getRateConfig } = require("../config/rateConfig");

const dynamicLimiter = (req, res, next) => {
  const config = getRateConfig();

  const limiter = rateLimit({
    windowMs: config.windowMs,
    max: config.max,
    message: {
      success: false,
      message: "Too many requests, please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false
  });

  return limiter(req, res, next);
};

module.exports = dynamicLimiter;
