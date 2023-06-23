const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controller/user");
const { updateStock } = require("../controller/product");

const {getOrderById,createOrder} = require("../controller/order");

// PARAM
router.param("userId",getUserById);
router.param("orderId", getOrderById);

//CREATE AN ORDER
//create
router.post(
    "/order/create/:userId",
    isSignedIn,
    isAuthenticated,
    pushOrderInPurchaseList,
    updateStock,
    createOrder
  );

module.exports = router;
