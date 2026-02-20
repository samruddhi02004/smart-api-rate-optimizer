const express = require("express");
const router = express.Router();
const { getTrafficData } = require("../utils/trafficStore");

router.get("/stats", (req, res) => {
  res.json({
    success: true,
    traffic: getTrafficData()
  });
});

module.exports = router;
