const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/comment/

router.route("/")
    .get(userController.getComments)
    .post(userController.createComment)

module.exports = router;