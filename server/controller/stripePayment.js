// const { v4: uuidv4 } = require("uuid");
// const stripe = require("stripe")(
//   "sk_test_51NdDZpSJ2K4IePIet6f00cPGWM4gP4mg0FMp9xgJ2mhB0i6lWbExzhiaM6Ekiqmy7FZZJCSdl2uPtJToQIZOp2e400TfLHnPIM"
// );

// exports.makePayment = (req, res) => {
//   const { token, products } = req.body;
//   console.log("PRODUCTS", products);

//   let ammount = 0;
//   products.map((p) => {
//     ammount = ammount + p.price;
//   });

//   const idempotencyKey = uuidv4();

//   return stripe.customers
//     .create({
//       /* BASE ON WE CREATE customers */
//       email: token.email,
//       source: token.id,
//     })
//     .then((customers) => {
//       stripe.charges
//         .create(
//           {
//             ammount: ammount * 100,
//             currency: "usd",
//             customers: customers.id,
//             receipt_email: token.email,
//             description: "a test account",
//             shipping: {
//               name: token.card.name,
//               address: {
//                 line1: token.card.address_line1,
//                 line2: token.card.address_line2,
//                 city: token.card.address_city,
//                 country: token.card.address_country,
//                 postal_code: token.card.address_zip,
//               },
//             },
//           },
//           { idempotencyKey }
//         )
//         .then((result) => res.status(200).json(result))
//         .catch((err) => console.log(err));
//     });
// };


/*
@REFFERENCE: 
SECRET_KEY COME FROM Stripe dashboard!!
-🎯Need to extract some information via Token from req.body
-🎯token consist of bunch of information that probably we need 
-🎯one more we need access of product also that can also extract from req.body;
-🎯we'll be sharing information from req.body!
-🎯to make sure we get all the product in the array formate use console.log(products);
-🎯Need to loop is mandatory for calculating final ammount 
-🎯for clarification go to fronted check stripeCheckout.js check "getFinalAmount" method

-🎯idempotencyKey it's mandatory to keep this one To not double charge from use it generate id 
-🎯it responsible for not charge($) again it generate uniq id if there is any network issue

Then return is essentional here we create a customer,charge a customer,finally return response back from user! 
-🎯in the response .then() inside once the customer created we'r ready to charge like stripe.charges.create() need to pass information here what ammount you deduct,what currency you charge, & by default you set idempotencyKey
-🎯once after this again call .then() for everything successfully add it
-🎯create
-🎯shipping:{ name:token.cart.name} it further loads a few cart you can grabbed information like that name:token.cart.name(instead .name you can optionally fire this one .address_countrey,.address_currency..read docs)

*/
