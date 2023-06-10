const User = require("../model/user");


// -GET ID FROM Param-
exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "No user was found in DB",
        });
      }
      req.profile = user;
      next();
    });
  };

 //GET USER
  exports.getUser = (req,res)=>{
    //TODO: get back for set password
    return res.json(req.profile);
  }



/*
*/