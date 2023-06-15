const express = require("express");
const router = express.Router();

const {getCategoryById} = require("../controller/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controller/auth");
const { getUserById } = require("../controller/user");

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

module.exports = router;
