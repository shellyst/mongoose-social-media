const router = require("express").Router();

// Import all API routes from /api/index.js.
const apiRoutes = require("./api");

// Add prefix of '/api' to all of the API routes imported from the 'api' directory.
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("Error!");
});

module.exports = router;
