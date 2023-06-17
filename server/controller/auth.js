const User = require("../model/user");
const jwt = require("jsonwebtoken");

const { expressjwt: isAuthCheck } = require("express-jwt");
const { check, validationResult } = require("express-validator");

// SIGNUP
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

// LOGIN
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
      const token = jwt.sign({ _id: user._id }, process.env.SECRETE);

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

// LOGOUT
exports.signout = (req, res) => {
  res.clearCookie("token");
  /*middleware allow this stuff cookie-Parser() we've cookie body itself i.e */
  // console.log("REQ BODY", req.body);
  res.json({ message: "user successfully signout/logout" });
};

// OW TO PROTECTED ROUTE(Middleware)  
exports.isSignedIn = isAuthCheck({
  secret: process.env.SECRETE,
  algorithms: ["HS256"],
  userProperty: "auth",
});
/*isSignedIn:-> it gives us id to ensure that user is protected or not or also give you ensurity it login or not*/


//HOW TO WRITE CUSTOM MIDDLEWARE
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if(!checker){
    return res.status(403).json({
    error: "ACCESS DENIED"  
    })
  }
  next();
};

//CUSTOM MIDDLEWARE(isAdmin);
exports.isAdmin = (req, res, next) => {
  if(req.profile.role === 0){
    return res.status(403).json({
    error: "You are not Admin, ACCESS ADMIN"
    })
  }
  next();
};


