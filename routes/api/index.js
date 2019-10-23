const router = require("express").Router();
const userRoutes = require("./profile");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
