const express = require("express");
const router = express.Router();
const { updateRateLimit } = require("../controllers/rateController");

router.post("/update-rate-limit", updateRateLimit);

module.exports = router;
