const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup } = require("../controller/auth");

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
router.get("/signout", signout);

module.exports = router;

/*
In order to bring route we need use 💹Router
ref: -> https://expressjs.com/en/guide/routing.html
*/
