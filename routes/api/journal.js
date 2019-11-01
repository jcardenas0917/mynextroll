
const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/journal/

router.route("/user/:user")
    .get(userController.findOne)

router.route("/")
    .post(userController.create);
module.exports = router;