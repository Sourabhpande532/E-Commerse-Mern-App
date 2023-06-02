const User = require("../model/user");

exports.signup = (req, res) => {
    /* @stategies(Process of saving Data into DB)*/
    const user = new User(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          err: "Not able to save user in DB",
        });
      }
      /*selectively select */
      res.status(200).json({
        name: user.name,
        email: user.email,
        id: user._id,
      });
    });
  };

exports.signout = (req, res) => {
  console.log("REQ BODY", req.body);
  res.json({ message: "user successfully signout" });
};
