const router = require("express").Router();
const userRoutes = require("./journal");


router.use("/profile", userRoutes);
router.use("/journal", userRoutes);

module.exports = router;
