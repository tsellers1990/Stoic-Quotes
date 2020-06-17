const router = require("express").Router();
const jobRoutes = require("./quotes");

// Job routes
router.use("/quotes", jobRoutes);

module.exports = router;
