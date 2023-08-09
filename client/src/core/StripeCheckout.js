import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";

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

  const makePayment = ()=>{
  // 
  }
  /* 
  makePayment is a method which is automatically generated with the help of "stripeKey" base on that you can make request to backend & backend can handle ... should be process the thing token and it expect token as a parameter 
  */

  //Stripe Button
  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
       stripeKey=""
       token={makePayment}
       amount={getFinalAmount}
       name="Buy Tshirts"
       shippingAddress=""
       
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
