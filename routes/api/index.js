const router = require("express").Router();
const userRoutes = require("./profile");
const journalRoutes = require("./journal");


router.use("/profile", userRoutes);
router.use("/journal", journalRoutes);

module.exports = router;
