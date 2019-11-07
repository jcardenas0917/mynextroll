const router = require("express").Router();
const userRoutes = require("./profile");
const journalRoutes = require("./journal");
const forumRoutes = require("./forum");



router.use("/profile", userRoutes);
router.use("/journal", journalRoutes);
router.use("/forum", forumRoutes);


module.exports = router;
