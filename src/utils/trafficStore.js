// Simple in-memory traffic analytics store

let trafficData = {
  totalRequests: 0,
  apiRequests: 0,
  lastRequestTime: null
};

const recordRequest = (type = "general") => {
  trafficData.totalRequests++;

  if (type === "api") {
    trafficData.apiRequests++;
  }

  trafficData.lastRequestTime = new Date();
};

const getTrafficData = () => trafficData;

module.exports = {
  recordRequest,
  getTrafficData
};
