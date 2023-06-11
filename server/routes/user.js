const express = require("express");
const router = express.Router();

// HANDLING USER ROUTE  
const { getUserById, getUser } = require("../controller/user");
const {isSignedIn,isAuthenticated, isAdmin} = require("../controller/auth");

router.param("userId", getUserById); //extract id use it below 
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser)
// @FACT: "userId" name should be same otherwise access DENIED;
// ------UPTO



module.exports = router;

