import React, { useEffect, useState } from "react";
import "../style.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  // LOAD ALL PRODUCT
  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  // USE EFFECT
  useEffect(() => {
    loadAllProduct();
  }, []);

  console.log("API Is", API);
  return (
    <Base title='Home Page' description='Welcome to tshrt Store'>
      {/* BY The Time It Consider Aa a Cards Below Button */}
      <div className='row text-center'>
        <h1 className='text-white'> All Of Tshirts</h1>
        <div className='row'>
          {products.map((product, index) => {
            return (
              <div key={index} className='col-4 mb-4'>
                <Card product={product}/>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
