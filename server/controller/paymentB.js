const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "s3p9hsgg28ntz2cr",
  publicKey: "th2p5jyh7w9r6t4x",
  privateKey: "f86d677bff92d50011387fad8f0fd973",
});
/*Ref:🔗✈️https://sandbox.braintreegateway.com/merchants/s3p9hsgg28ntz2cr/users 
ID - It is Mandatory In order to GENERATE Token*/


// GENERATE TOKEN
exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

// SUBMIT PROCESS
exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;

  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    }
  );
};

/* 
-first generate Token 
-Post request come from body via fronted
-Note: code come from 
 ref: 🔗https://developer.paypal.com/braintree/docs/start/hello-server/node
*/
