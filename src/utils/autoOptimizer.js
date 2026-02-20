const { getTrafficData } = require("./trafficStore");
const { updateRateConfig, getRateConfig } = require("../config/rateConfig");

const autoOptimizeRate = () => {
  const traffic = getTrafficData();
  const currentConfig = getRateConfig();

  let newMax = currentConfig.max;

  // Simple optimization logic
  if (traffic.apiRequests > 20) {
    newMax = Math.max(2, currentConfig.max - 2);
  } else if (traffic.apiRequests < 5) {
    newMax = currentConfig.max + 2;
  }

  if (newMax !== currentConfig.max) {
    updateRateConfig({ max: newMax });

    console.log("⚡ Auto Rate Limit Adjusted:", {
      old: currentConfig.max,
      new: newMax
    });
  }
};

module.exports = autoOptimizeRate;
