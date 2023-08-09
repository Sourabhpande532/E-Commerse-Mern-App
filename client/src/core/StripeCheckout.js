import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";


const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const makePayment = () => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "applications/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        const {status} = response;
        console.log("STATUS", status);
        // cartEmpty();
      })
      .catch((error) => console.log(error));
  };
  /* 
  makePayment is a method which is automatically generated with the help of "stripeKey" base on that you can make request to backend & backend can handle ... should be process the thing token and it expect token as a parameter 
  */

  //Stripe Button
  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey='pk_test_51NdDZpSJ2K4IePIe2ZnEVaqwnwFHEAPRD8gFcKeiyfDZqTtlrUbNyrJyGUMpcqy0AWwjcYDuBar7Xtf5xmAzf0Qj00vG6M19CV'
        token={makePayment}
        amount={getFinalAmount}
        name='Buy Tshirts'
        shippingAddress
        billingAddress
        >
        <button className='btn btn-success'>Pay with Stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to='/signin'>
        <button className='btn btn-warning'>Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className='text-white'>
        Stripe Checkout - {getFinalAmount()}
        {showStripeButton()}
      </h3>
    </div>
  );
};
export default StripeCheckout;
