const Category = require("../model/category");

/* GET CATEGORY FROM PARAM */
exports.getCategoryById = async (req, res, next, id) => {
    try {
      const cate = await Category.findById(id).exec();
      if (!cate) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
    } catch (err) {
      return res.status(400).json({
        error: "Category not found in DB"
      });
    }
  };
  
  
