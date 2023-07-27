import React, { useEffect, useState } from "react";
import "../style.css";
import { API } from "../backend.js";
import Base from "./Base";
import { loadCart } from "./helper/cartHelper";
import Card from "./Card";

const Cart = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(()=>{
  setProducts(loadCart())
  },[])

  const loadAllProducts = () => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product,index)=>(
            <Card 
            key={index}
            product={product}
            removeFromCart={true}
            addToCart={false}
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
          <div className='col-6'>{loadAllProducts()}</div>
          <div className='col-6'>{loadCheckout()}</div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
