import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories } from "./helper/adminapicall";

const ManageCategory = () => {
  const [category, setCategory] = useState([]);

  const preload = () => {
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCategory(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  // BACK BUTTON
  const goBack = () => (
    <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>
      Admin Home
    </Link>
  );

  return (
    <div>
      <Base title='Manage Categores'>
        <h1>Your Assignment</h1>
        {category.map((cate, index) => {
          return <div key={index}>{cate.name}</div>;
        })}
        {goBack()}
      </Base>
    </div>
  );
};

export default ManageCategory;
