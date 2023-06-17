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
    res.json({
      category,
      success: true,
      message: "Successfully created category",
    });
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
exports.updateCategory = async (req, res) => {
  try {
    const category = req.category;
    category.name = req.body.name;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({
      error: "Failed to update category",
    });
  }
};

/*PERFORM A DELETE OPERATION*/
exports.removeCategory = async (req, res) => {
  try {
    const category = req.category;
    await category.deleteOne();
    res.json({
      message: `Successfully deleted category: ${category}`,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: "Failed to delete the category",
    });
  }
};
