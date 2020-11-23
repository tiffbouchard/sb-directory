const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/users");

/*---------- Public Routes ----------*/
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/newuser", userCtrl.newUser);
// router.get("/all", userCtrl.getAllProfiles);
// router.get("/public/:id", userCtrl.userPublicPosts);
// router.get("/:id", userCtrl.userPosts);

/*---------- Protected Routes ----------*/

module.exports = router;
