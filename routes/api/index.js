const router = require("express").Router();
const userRoutes = require("./user");
const spotifyRoutes = require("./spotify")

// Book routes
router.use("/user", userRoutes);
router.use("/spotify", spotifyRoutes);

module.exports = router;
