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


// UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.profile._id,
      { $set: req.body },
      { new: true, useFindAndModify: false }
    ).select('-salt -encry_password');

    if (!user) {
      return res.status(400).json({
        error: 'You are not authorized to update this user or the update in the database was not successful.',
      });
    }
    //DON'T WANNA SEND TO FRONEND
    user.salt = "";
    user.encry_password = undefined;
    res.json(user);

  } catch (err) {
    return res.status(400).json({
      error: 'An error occurred while updating the user.',
    });
  }
};




