// Dynamic rate limit configuration

let rateConfig = {
  windowMs: process.env.RATE_WINDOW_MS
    ? parseInt(process.env.RATE_WINDOW_MS)
    : 60000,
  max: process.env.RATE_MAX
    ? parseInt(process.env.RATE_MAX)
    : 5
};

const getRateConfig = () => rateConfig;

const updateRateConfig = (newConfig) => {
  rateConfig = { ...rateConfig, ...newConfig };
};

module.exports = {
  getRateConfig,
  updateRateConfig
};
