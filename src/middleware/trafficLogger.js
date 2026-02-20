const { recordRequest } = require("../utils/trafficStore");

const trafficLogger = (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    recordRequest("api");
  } else {
    recordRequest();
  }

  next();
};

module.exports = trafficLogger;
