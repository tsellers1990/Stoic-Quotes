const router = require("express").Router();
const quoteRoutes = require("./quotes");

// quote routes
router.use("/quotes", quoteRoutes);

module.exports = router;
