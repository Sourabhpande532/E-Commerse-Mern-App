import React, { useEffect, useState } from "react";
import "../style.css";
import { API } from "../backend.js";
import Base from "./Base";
import { loadCart } from "./helper/cartHelper";
import Card from "./Card";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([]);
  // FORCE_FULLY RELOAD(For Remove Item From localStorage)
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addToCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => (
    <div>
      <h2>This section is to for checkout</h2>
    </div>
  );

  return (
    <Base title='Cart Page' description='Ready to checkout'>
      <div className='row text-center'>
        <div className='row text-center'>
          <div className='col-6'>
            {products.length > 0 ? (
              loadAllProducts(products)
            ) : (
              <h3>No products in cart</h3>
            )}
          </div>
          <div className='col-6'>Payment section</div>
          {/*<div className='col-6'>
            <StripeCheckout 
            products ={products}
            setReload ={setReload} />
          </div> */}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
