const { updateRateConfig } = require("../config/rateConfig");

exports.updateRateLimit = (req, res) => {
  const { windowMs, max } = req.body;

  if (!windowMs || !max) {
    return res.status(400).json({
      success: false,
      message: "windowMs and max are required"
    });
  }

  updateRateConfig({
    windowMs: parseInt(windowMs),
    max: parseInt(max)
  });

  res.json({
    success: true,
    message: "Rate limit updated successfully",
    newConfig: { windowMs, max }
  });
};
