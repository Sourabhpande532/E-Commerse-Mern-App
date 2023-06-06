const User = require("../model/user");
const jwt = require("jsonwebtoken");

const { expressjwt: isAuthCheck } = require("express-jwt");
const { check, validationResult } = require("express-validator");

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
      message: "User Sucessfully ADD To DATABASE",
    });
  } catch (err) {
    res.status(400).json({
      err: "Not able to save user in DB",
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const errors = validationResult(req);

    const { email, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg,
      });
    }
    /*match email from Frontend(user) to DATABASE exit or not */
    await User.findOne({ email }, (err, user) => {
      if (err || !user) {
        res.status(400).json({
          error: "User Email Does Not Exit",
        });
      }

      /*check for weather password match or not(form:📂model/user/)*/
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: "Email and password do not match",
        });
      }

      /*Signin process */

      /*creating a token */
      const token = jwt.sign({ _id: user._id }, process.env.PRAVATEKEY);


      /*put token into cookie */
      res.cookie("token", token, { expire: new Date() + 9999 });

      /*Send responce to frontend one for react becasue don't have any idea */
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role}});
    });

  } 
  catch (err) {
    // res.status(400).json({
    //   err: "Invalid credentionalss",
    // });
    console.log(err);
  }
  //ref:tp.js(title:💹Sending token into cookies)
};


exports.signout = (req, res) => {
  console.log("REQ BODY", req.body);
  res.json({ message: "user successfully signout" });
};
