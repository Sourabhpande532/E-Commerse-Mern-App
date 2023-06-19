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
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        }
        resolve({ fields, files });
      });
    });

    //RESTICATION ON FIELDS
    const { name, description, price, category, stock } = fields;
    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    /* This product is being created with these fields */
    let product = new Product(fields);

    //HANDLE FILE & CHECK SIZE
    if (files.photo) {
      if (files.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      // INCLUDING THE FILE IN PRODUCT
      product.photo.data = fs.readFileSync(files.photo.filepath);
      product.photo.contentType = files.photo.type;
    }
    //SAVE TO DB PHOTPS
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Failed to create product",
    });
  }
};

/*READ:->SOME OPTIMISATION VIA BINARY DATA */
exports.getProduct = (req,res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};
