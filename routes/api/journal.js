
const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/journal/

router.route("/user/:user")
    .get(userController.findOneJournal)

router.route("/")
    .post(userController.createJournal);
module.exports = router;