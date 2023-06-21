const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllMethode,
  getAllUniqueCategories
} = require("../controller/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { getUserById } = require("../controller/user");

/*
-PARAM
-Grabbed something from parameter */
router.param("userId", getUserById);
router.param("productId", getProductById);

/*
-POST
-ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION)*/
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

/*
READ:->SOME OPTIMISATION VIA BINARY DATA 
when we createProduct,so productId automatically generated base on that*/

router.get("/product/:productId", getProduct);

// MIDDLEWARE
router.get("/product/photo/:productId", photo); 


//DELETE AND UPDATE TSHRT
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct,
);

// UPDATE AND DELETE TSHRT
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct,
);

//LISTING ROUTE & GET ALL PRODUCTS
router.get("/products", getAllMethode);

// TO GET ALL DISTINCT CATEGORIES
router.get("/products/categories", getAllUniqueCategories)   



module.exports = router;
