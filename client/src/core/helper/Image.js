import React from "react";
import { API } from "../../backend";

const Image = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <div className='rounded border border-success p-2'>
      <img
        src={imageUrl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className='mb-3 rounded'
      />
    </div>
  );
};
/* 
@NOTE:HITTING THIS ROUTE FROM BACKEND 
@LOCATION: 🗃️server/Routes/product/   
🔺router.get("/product/photo/:productId", photo); */

export default Image;
