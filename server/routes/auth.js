const express = require("express");
const router = express.Router();
const {signout,signup}= require("../controller/auth")

router.get("/signout", signout)
router.post("/signup",signup);

module.exports = router;



/*
In order to bring route we need use 💹Router
ref: -> https://expressjs.com/en/guide/routing.html
*/