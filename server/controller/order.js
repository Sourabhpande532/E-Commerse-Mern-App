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

//CREATE AN ORDER
exports.createOrder = async (req, res) => {
  try {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order);
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(400).json({
      error: "Failed to save your order in DB",
    });
  }
};

// GET ALL ORDER
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "_id name");
    res.json(orders);
  } catch (err) {
    res.status(400).json({
      error: "No Order found in DB",
    });
  }
};

//ORDER STATUS
exports.getOrderStatus = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};

//UPDATE THE ORDER STATUS
exports.updateStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.body.orderId,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({
      error: "Cannot update order status",
    });
  }
};
