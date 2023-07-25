import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addToCart = true, removeFromCart = false }) => {

  // TERNARY CALL EITHER CALL FROM DB OR DEFAULT 
  const cartTitle = product ? product.name : "A Photo From Gallery"
  const cartDescription = product ? product.description : "Default Description"
  const cartPrice = product ? product.price : "Default $8"

  // ADD TO CARD 
  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={() => {}}
          className='btn btn-block btn-outline-success mt-2 mb-2'>
          Add to Cart
        </button>
      )
    );
  };

  // REMOVE CART  
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
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
        {/* IMAGE HELPER CALL TALK TO DB */}
        <ImageHelper product={product} />

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
