const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory,
} = require("../controller/category");

// AUTH MIDDLEWARE
const { isSignedIn, isAdmin, isAuthenticated } = require("../controller/auth");

// USER ID 
const { getUserById } = require("../controller/user");

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// REAL ROUTES

//CREATING A CATEGORY & 💹SAVING IT
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
/*🔝🔝@😱KEEP_NOTE: Before TEASTING route role shold be 1(Admin)*/

//GET ALL CATEGORIES AT ONCE(READ)
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

// UPDATE THE CATEGORIES(PUT)
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

/*PERFORM A DELETE OPERATION*/
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);
module.exports = router;
