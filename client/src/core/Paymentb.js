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
  });
  return <div>Paymentb</div>;
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
