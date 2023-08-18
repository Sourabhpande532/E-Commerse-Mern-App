import React, { useEffect, useState } from "react";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/paymentbhelper";
import { createOrder } from "./helper/orderHelper";
import { isAuthenticated } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const Paymentb = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then((info) => {
      console.log("INFORMATION", info);
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const showbtdropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
              /* coming from docs */
            />
            <button className='btn btn-block btn-success' onClick={onPurchase}>
              Buy
            </button>
          </div>
        ) : (
          <h3>Please login or add something to cart</h3>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);
  /*getToken is going to fire Custom token which is getmeToken*/

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      // Payment Collect Data
      const paymentData = {
        paymentMethodNonce: nonce,
        // Ammount which we need to charge
        amount: getAmount(),
      };
      processPayment(userId, token, paymentData)
        .then((response) => {
          setInfo({ ...info, success: response.success });
          console.log("Payment Success");
          // const orderData = {
          //   products: products,
          //   transaction_id: response.transaction.id,
          //   amount: response.transaction.amount,
          // };
          // createOrder(userId, token, orderData);
          // // EMPTY CART
          // cartEmpty(() => {
          //   console.log("Did we got a crash?");
          // });
          // // FORCE RELOAD
          // setReload(!reload);
        })
        .catch((error) => {
          setInfo({ loading: false, success: false });
          console.log("Payment FAILED");
        });
    });
  };

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  /*
  Q)what is nonce here onPurchase?
    🎯docs mention nonce that's why 
  -from where this nonce is coming up Remember we use-
   -🎯instance: {}, in stat see above which we haven't talke 
   -🎯This is that phase where API talk to braintree & braintree get back to use with nonce this is the one we atually interact here (info.instance);
  */

  return (
    <div>
      <h2>Your bill is {getAmount()}$</h2>
      {showbtdropIn()}
    </div>
  );
};

export default Paymentb;

/* 
1)Ref:🔗✈️https://www.npmjs.com/package/braintree-web-drop-in-react

2)Ref:🔗✈️
https://developer.paypal.com/braintree/docs/start/hello-client/javascript/v3/

Take a Refference of above Link Npm package!!
Work for Cart.js braintree payment part at last you'll get!
-🎯Inject this one into Cart.js 
-🎯f=>f it mean refrest page instant response back
-🎯Take Refference of 2nd link 
*/
