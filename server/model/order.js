const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.SchemaTypes(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", OrderSchema);

/*
@REF :+ 🔗>https://www.amazon.in/gp/cart/view.html?ref_=nav_cart
->(🥲"clear you'r doubt related to order how the order page is look like")
@KEEP_NOTE: Inside the order we have array & each array insides this order we have products;

@OVERVIEW:-> Whatever you call "name" is it either be "Order page" or "Add to cart/cart" page feel free to name it.

Now, my order is definately associated with "product" Schema as we just see earlier ther'r lot of products so this gonna be array of products but not actually a products the products are in the cart of array (So,😗Need to concern about that)

@🧠STRATEGIES(Products)
 Our page is consist of products which we saw earlier so this is gonna be array of products not actually the products. the products which are in the card I hope u understand that because the when the product is inside the card it is having A new property being introduced like how many quantity of product getting and what is the total of that so we called it as productCartSchema not ye defined but later on use.
@🧠STRATEGIES(transaction_id:{})
  optionally we not mentioned cash on delivery(we'feel free to add that just create a status and create an boolean value or is something like this)
@🧠STRATEGIES(updated) 
 Whenever this order is gonna be placed it's gonna be use by admin of this website as well & admin is gonna provide some updates on order like when was the order placed when I have work on something like So,we'r gonna have a Date filled here that need to be updated:Date.and 
@🧠STRATEGIES(user)
 actually who is placing the order so we need to find out via "user" as well ofcourser so later on we might use this orderSchema & can do lot more thing like push this value or this product things into a the user accout as well it's all a lot more stuff here
 
 Now,it's time to introduced "[productCartSchema]" at top this is not ideal case secnario to defined at top but sometimes need to manage.
 
*/
