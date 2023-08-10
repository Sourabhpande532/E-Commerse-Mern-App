const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "useYourMerchantId",
  publicKey: "useYourPublicKey",
  privateKey: "useYourPrivateKey",
});

// GENERATE TOKEN 
exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
};

// SUBMIT PROCESS 
exports.processPayment = (req, res) => {
let nonceFromTheClient = req.body.paymentMethodNonce;
let amountFromTheClient = req.body.amount;

gateway.transaction.sale({
    amount: amountFromTheClient,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, (err, result) => {
    if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
  });
  
};

/* 
-first generate Token 
-Post request come from body via fronted
-Note: code come from 
 ref: 🔗https://developer.paypal.com/braintree/docs/start/hello-server/node
*/
