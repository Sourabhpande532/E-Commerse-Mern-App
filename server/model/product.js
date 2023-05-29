/*Section:4 Part 4 product */
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    
    /**********************************************************
    Link with category.js It's concept of Mongoose Populate || Mongoose refference and populate go and explore document
    *************************************************************/
    
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },

   /***********************************************************
    @Idea
    @stock: how many tshrt a'm having.
    @stock: how many till now now you sold. 
    What else you want your t-shrt Shoude be Now I want two thing to be done with t-shrt, 1st want to keep stock as well & also I want to take a look at how many unit I've sold. 
    Why default 0: whenever i,m creating a product I'm selling Nothing 
   ***********************************************************/

    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },

    /************************************************************
    @Aim: want to stored beautiful tshrt that can help us to sell tshrt.
    @buffer🧐: photo is gonna be stored in "data" which is "Buffer"

    !This is How you put your Images into your Database there are variety of way where you don't you put U'r images into db it's sometimes make it heavier here size is small that's why...! extra info belew one
    -In some cases 'll see when you stored this photos into separate folder of s3 of buckets of amazon like and then we pulled the address of that. there are variety of way 
    is how to handle that.
    -if i would be using firebase, i would love to put it on folder and then just pulled out the refference.. here in this one stored in DB  
    *************************************************************/
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
