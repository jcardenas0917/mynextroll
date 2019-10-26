const { ensureAuthenticated } = require("../../config/auth");
const router = require("express").Router();
const userController = require("../../controller/userController");

// Matches with "/api/profile"
router.route("/", ensureAuthenticated)
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/profile/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;