const User = require("../model/user");
const Order = require("../model/order");

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
    ).select("-salt -encry_password");

    if (!user) {
      return res.status(400).json({
        error:
          "You are not authorized to update this user or the update in the database was not successful.",
      });
    }
    //DON'T WANNA SEND TO FRONEND
    user.salt = "";
    user.encry_password = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: "An error occurred while updating the user.",
    });
  }
};

// USING POPULATE FROM OTHER COLLECTION
// exports.userPurchasedList = async (req, res) => {
//   try {
//     const order = await Order.find({ user: req.profile._id }).populate(
//       "user",
//       "_id name email"
//     );
//     if (!order) {
//       return res.status(400).json({
//         error: "No Order in this Account.",
//       });
//     }
//     return res.json(order);
//   } catch (error) {
//     return res.status(400).json({
//       error: "An error occurred while updating the user.",
//     });
//   }
// };

exports.userPurchasedList = (req, res) => {
  Order.find({ user: req.profile._id })
    .populate("user", "_id name email")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "No Order in this Account",
        });
      }
      return res.json(order); //wih this we get entire object from model/order
    });
};

/* MIDDLEWARE TO UPDATE PURCHASE */
// exports.pushOrderInPurchaseList = (req, res, next) => {
//   let purchases = [];
//   req.body.order.products.forEach((product) => {
//     purchases.push({
//       _id: product._id,
//       name: product.name,
//       description: product.description,
//       category: product.category,
//       quantity: product.quantity,
//       amount: req.body.order.amount,
//       transaction_id: req.body.order.transaction_id,
//     });
//   });
//   /* stored All this into a DB@ */
//   User.findOneAndUpdate(
//     { _id: req.profile._id },
//     { $push: { purchases: purchases } },
//     { new: true },
//     (err, purchases) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Unable to save purchase List",
//         });
//       }
//       next();
//     }
//   );
// }
exports.pushOrderInPurchaseList = async (req, res, next) => {
  try {
    let purchases = [];
    req.body.order.products.forEach((product) => {
      purchases.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        category: product.category,
        quantity: product.quantity,
        amount: req.body.order.amount,
        transaction_id: req.body.order.transaction_id,
      });
    });
    /* Store all this into a DB */
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.profile._id },
      { $push: { purchases: purchases } },
      { new: true }
    ).exec();

    if (!updatedUser) {
      return res.status(400).json({
        error: "Unable to save purchase list",
      });
    }
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Unable to save purchase list",
    });
  }
};


