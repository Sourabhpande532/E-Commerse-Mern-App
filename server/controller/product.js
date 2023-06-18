const Product = require("../model/product");

// RELATED IMAGE UPLOAD
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

/* GET PRODUCT BY ID  */
exports.getProductById = async (req, res, next, id) => {
  try {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
      return res.status(400).json({
        error: "Product Not found",
      });
    }
    req.product = product;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "PRODUCT ERROR !!",
    });
  }
};

/*ADDING T-SHRT TO OUR BACKEND(PRODUCT (T-SHRT)-SECTION) */
exports.createProduct = async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,file)=>{
        if (err) {
            return res.status(400).json({
              error: "Proble with Image file",
            });
          }
        //TODO: PUT restication on field 
    })
     
  } catch (error) {}
};
