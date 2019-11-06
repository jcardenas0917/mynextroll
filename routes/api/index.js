const router = require("express").Router();
const userRoutes = require("./profile");
const journalRoutes = require("./journal");
const forumRoutes = require("./forum");
const commentRoutes = require("./comment")


router.use("/profile", userRoutes);
router.use("/journal", journalRoutes);
router.use("/forum", forumRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
