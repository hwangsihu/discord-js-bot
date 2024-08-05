const express = require("express"),
  router = express.Router();

// Gets login page
router.get("/", async (req, res) => {
  await req.session.destroy();
  res.redirect(req.client.config.DASHBOARD.failureURL);
});

module.exports = router;
