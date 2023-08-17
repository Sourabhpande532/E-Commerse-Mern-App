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
            <button className='btn btn-block btn-success'>
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

  return <div>Paymentb
  {showbtdropIn()}
  </div>;
};

export default Paymentb;

/* 
1)Ref:🔗✈️https://www.npmjs.com/package/braintree-web-drop-in-react

2)Ref:🔗✈️
https://developer.paypal.com/braintree/docs/start/hello-client/javascript/v3/

Take a Refference of above Link Npm package!!
Work for Cart.js braintree payment part at last you'll get!
-Inject this one into Cart.js 
-f=>f it mean refrest page instant response back
-Take Refference of 2nd link 



*/
