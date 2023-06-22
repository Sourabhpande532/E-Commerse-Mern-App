const { Order, ProductCart } = require("../model/order");

//GET ORDER BY ID
exports.getOrderById = async (req, res, next, id) => {
  try {
    const order = await Order.findById(id)
      .populate("products.product", "name price")
      .exec();
    if (!order) {
      return res.status(400).json({
        error: "No Order Found In DATABASE",
      });
    }
    req.order = order;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "ORDER ERROR !!",
    });
  }
};
