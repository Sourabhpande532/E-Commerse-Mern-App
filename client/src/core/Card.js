import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "./helper/Image";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  setReload = (f) => f, //Or function(f){return f}, whatever you give it throw it backs!
  reload = undefined, //Neither true or neither false
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  const navigate = useNavigate();

  // TERNARY CALL EITHER CALL FROM DB OR DEFAULT
  const cartTitle = product ? product.name : "A Photo From Gallery";
  const cartDescription = product ? product.description : "Default Description";
  const cartPrice = product ? product.price : "Default $8";


  // ADD TO CART
  const addToCarts = () => {
    addItemToCart(product, () => {
      setRedirect(!reload);
    });
  };

  // NAVIGATE
  const getARedirect = (redirect) => {
    if (redirect) {
      return navigate("/cart");
    }
  };

  // ADD TO CARD(BTN)
  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={addToCarts}
          className='btn btn-block btn-outline-success mt-2 mb-2'>
          Add to Cart
        </button>
      )
    );
  };

  // REMOVE CART(BTN)
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload();
          }}
          className='btn btn-block btn-outline-danger mt-2 mb-2'>
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className='card text-white bg-dark border border-info '>
      <div className='card-header lead'>{cartTitle}</div>
      <div className='card-body'>
        {/* GET REDIRECT */}
        {getARedirect(redirect)}

        {/* IMAGE HELPER CALL TALK TO DB */}
        <Image product={product} />

        <p className='lead bg-success font-weight-normal text-wrap'>
          {cartDescription}
        </p>

        <p className='btn btn-success rounded  btn-sm px-4'>${cartPrice}</p>
        <div className='row'>
          <div className='col-12'>{showAddToCart(addToCart)}</div>
          <div className='col-12'>{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
