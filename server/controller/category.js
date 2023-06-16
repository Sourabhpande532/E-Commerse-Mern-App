const Category = require("../model/category");

/* GET CATEGORY FROM PARAM */
exports.getCategoryById = async (req, res, next, id) => {
  try {
    const cate = await Category.findById(id).exec();
    if (!cate) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }
    req.category = cate;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Category not found in DB",
    });
  }
};

/*CREATING A CATEGORY & SAVING IT*/
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.json({ category });
  } catch (err) {
    return res.status(400).json({
      error: "NOT able to save category in DB",
    });
  }
};

/*GET ALL CATEGORIES AT ONCE(READ) 
getCategory:->extracting single id from getCategoryById
getAllCategory:-> for fetching all categories
*/

exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.json(categories);
  } catch (err) {
    return res.status(400).json({
      error: "No categories found",
    });
  }
};

// UPDATE THE COLLECTION
exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update category"
      });
    }
    res.json(updatedCategory);
  });
};

