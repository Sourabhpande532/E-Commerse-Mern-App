const User = require("../model/user");

// -GET ID FROM Param-
exports.getUserById = (req, res, next, id) => {
  User.findById(id)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: "No user was found in DB",
        });
      }
      req.profile = user;
      next();
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Error retrieving user from DB",
      });
    });
};

//GET USER
exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};


