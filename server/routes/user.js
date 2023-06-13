const express = require("express");
const router = express.Router();

// HANDLING USER ROUTE
const { getUserById, getUser,updateUser,userPurchasedList} = require("../controller/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");

// PARAM
router.param("userId", getUserById); //extract id use it below

// GET
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
/* @FACT: "userId" name should be same otherwise access DENIED; */
/*------UPTO*/

// PUT 
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)

// GET
   router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchasedList)
   /*
   -we have router.params middleware populated here
   -which is gonna only look forword this getUserById here & populate everything in a req.profile*/


module.exports = router;
