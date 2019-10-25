const router = require("express").Router();
const userRoutes = require("./profile");

// Book routes
router.use("/profile", userRoutes);

module.exports = router;
