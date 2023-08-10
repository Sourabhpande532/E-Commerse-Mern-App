const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated } = require("../controller/auth");
const { getToken, processPayment } = require( "../controller/paymentB" );

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);

router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);

module.exports = router;

/* 
Need to define two route 
-Get: to generate the token 
-Post: to submit the information 
-visit website braintree.paypal "Explore 'simple Server'"copy code of get & post 

*/
