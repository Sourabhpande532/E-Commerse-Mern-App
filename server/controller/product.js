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
exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

/*PHOTO MIDDLEWARE */
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

//DELETE AND UPDATE TSHRT
exports.deleteProduct = async (req, res) => {
  try {
    let product = req.product;
    await product.deleteOne();
    res.json({
      message: "Deletion was a success",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Failed to delete the product",
    });
  }
};

// UPDATE AND DELETE TSHRT
exports.updateProduct = async (req, res) => {
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

    //UPDATION CODE
    let product = req.product;
    product = _.extend(product, fields);

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
      error: "UPADATION OF PRODUCT FAILED",
    });
  }
};

// LISTING ROUTE & GET ALL PRODUCTS
exports.getAllMethode = async (req, res) => {
  try {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    const products = await Product.find()
      .select("-photo")
      .populate("category")
      .sort([[sortBy, "asc"]])
      .limit(limit)
      .exec();
    if (products.length === 0) {
      return res.status(400).json({
        error: "No products found",
      });
    }
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: "Failed to retrieve products",
    });
  }
};

// TO GET ALL DISTINCT CATEGORIES
exports.getAllUniqueCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    res.status(400).json({
      error: "No category found",
    });
  }
};


// MIDDLEWARE(UPDATE YOUR INVENTORY)
exports.updateStock = async (req, res, next) => {
  let myOperation = req.body.order.products.map((prod) => {
    return {
      updateOne: {
        filter: { _id: prod._id },
        update: { $inc: { stock: -prod.count, sold: +prod.count } },
      },
    };
  });
  //it expect three things here read docs
  await Product.bulkWrite(myOperation, {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error:
          "Bulk Operation Failed: why we call this we perform two operation here i.w",
      });
    }
    next();
  });
};
