const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin,isSignedIn } = require("../controller/auth");

/*SIGN UP */
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name must be at least 5 chars long"),
    check("email", "Email is required").isEmail(),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password Must be at least +4 chars long")
      .matches(/\d/)
      .withMessage("password must contain a number")
      .not()
      .isIn(["123", "abc", "", "12345", "password", "god"])
      .withMessage("Do not use a common word as the password"),
  ],
  signup
);

/*SIGN IN*/
router.post(
  "/signin",
  [
    check("email","Email is required").isEmail(),
    check("password")
      .isLength({ min: 3 })
      .withMessage("field is required compulsory!")
      .matches(/\d/)
      .withMessage("must contain a number")
  ],
  signin
);

//LOGOUT
router.get("/signout", signout);



// isSignedIn Route(Middleware) 
router.get("/protected",isSignedIn,(req,res)=>{
  // res.send("This is protected route(signin)")
  res.json(req.auth);
})

/*
@KEY_POINTS_ABOVE_MIDDLEWARE🔝🔝
 with bearer we've to logged in token also beside Bearer then actually protected
 -this middleware put this auth into request 
 -this is full authentication exactly which holds id
 -base on this id we'll do lot more testing further
 -auth come from auth controller line no. 156 */



module.exports = router;

/*
In order to bring route we need use 💹Router
ref: -> https://expressjs.com/en/guide/routing.html
*/
