const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/forum/

router.route("/")
    .get(userController.showAllPosts)
    .post(userController.createPost)

module.exports = router;