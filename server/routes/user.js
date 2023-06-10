const express = require("express");
const router = express.Router();

// HANDLING USER ROUTE  
const { getUserById, getUser } = require("../controller/user");
const {isSignedIn,isAuthenticated,isAdmin} = require("../controller/auth");

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, isAdmin, getUser)
// ------UPTO



module.exports = router;

