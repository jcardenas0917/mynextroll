
const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/profile"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/profile/:id"
router
    .route("/:id")
    .get(userController.findById)
    .delete(userController.remove);

router.route("/email/:email")
    .get(userController.findOne)
    .put(userController.update)
module.exports = router;