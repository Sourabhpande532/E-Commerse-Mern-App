const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controller/auth");

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




router.get("/signout", signout);

module.exports = router;

/*
In order to bring route we need use 💹Router
ref: -> https://expressjs.com/en/guide/routing.html
*/
