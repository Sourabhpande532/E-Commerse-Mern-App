const User = require("../model/user");

const { check, validationResult } = require('express-validator');

exports.signup = async (req, res) => {
/* @__PROCESS_OF_SAVING_TO_DB*/
  try {
    const errors = validationResult(req);
    /*actually binds this validationresult with request.body*/
    
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }
    const user = new User(req.body);
    await user.save();
  /* @_SELECTIVELY_PICK */
    res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
      message: "User Sucessfully ADD To DATABASE"
    });
    
  } catch (err) {
    res.status(400).json({
      err: "Not able to save user in DB",
    });
  }
};


exports.signout = (req, res) => {
  console.log("REQ BODY", req.body);
  res.json({ message: "user successfully signout" });
};
