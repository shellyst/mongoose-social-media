// Gets all the routes hooked into the entire server.
// Imports all the API routes to prefix their endpoint names and package them up.

const router = require("express").Router();
const userRoutes = require("./user-routes");

router.user("/users", userRoutes);

module.exports = router;
