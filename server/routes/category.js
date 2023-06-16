const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
} = require("../controller/category");

const { isSignedIn, isAdmin, isAuthenticated } = require("../controller/auth");
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

module.exports = router;
