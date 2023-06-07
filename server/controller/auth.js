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

exports.signin = (req, res) => {
  const errors = validationResult(req);

  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "User email does not exist",
        });
      }

      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: "Email and password do not match",
        });
      }

      /*create token */
      const token = jwt.sign({ _id: user._id },process.env.SECRETE);

      /*create cookie */
      res.cookie("token", token, { expire: new Date() + 9999 });

      /*send response to frontend */
      const { _id, name, email, role } = user;
      return res.json({
        message: "User successfully logged in",
        token, // for local storage
        user: { _id, name, email, role },
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: "Internal server error",
      });
    });
};

exports.signout = (req, res) => {
  console.log("REQ BODY", req.body);
  res.json({ message: "user successfully signout" });
};
