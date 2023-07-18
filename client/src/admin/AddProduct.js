import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper";

const AddProduct = () => {
  const { user, token } = isAuthenticated();

  const [values, setValue] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  //DISTRUCTURING
  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  // PRELOAD
  const preload = () => {
    // CALL API TO DISPLAY ALL CATEGORY
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        setValue({ ...values, error: data.error });
      } else {
        setValue({ ...values, categories: data, formData: new FormData() });
        console.log("CATE:", categories);
      }
    });
  };

  // USE EFFECT
  useEffect(() => {
    preload();
  }, []);


  // HANDLE CHANGE EVENT
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValue({ ...values, [name]: value });
  };
  /* FOR REFFERENCE SEE 
   const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === "file" ? files[0] : value;
  
    setValue({ ...values, [name]: newValue });
  }; */
  
  
  // ON SUBMIT EVENT
  const onSubmit = () => {
    //
  };

  // PRODUCT CREATE FORM
  function createProductForm() {
    return (
      <form>
        <span>Post photo</span>
        <div className='form-group'>
          <label className='btn btn-block btn-success'>
            <input
              onChange={handleChange("photo")}
              type='file'
              name='photo'
              accept='image'
              placeholder='choose a file'
            />
          </label>
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("name")}
            name='photo'
            className='form-control'
            placeholder='Name'
            value={name}
          />
        </div>
        <div className='form-group'>
          <textarea
            onChange={handleChange("description")}
            name='photo'
            className='form-control'
            placeholder='Description'
            value={description}
          />
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("price")}
            type='number'
            className='form-control'
            placeholder='Price'
            value={price}
          />
        </div>
        <div className='form-group'>
          <select
            onChange={handleChange("category")}
            className='form-control'
            placeholder='Category'>
            <option>Select</option>
            {categories &&
              categories.map((cate, index) => {
                return (
                  <option key={index} value={cate._id}>
                    {cate.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("quantity")}
            type='number'
            className='form-control'
            placeholder='Quantity'
            value={stock}
          />
        </div>
        <button
          type='submit'
          onClick={onSubmit}
          className='btn btn-outline-success mb-3'>
          Create Product
        </button>
      </form>
    );
  }
  return (
    <Base
      title='Add a Product here'
      description='Welcome to create product section'
      className='container bg-info p-4'>
      <Link to='/admin/dashboard' className='btn btn-md btn-dark mb-3'>
        Admin Home
      </Link>
      <div className='row bg-dark text-white rounded'>
        <div className=' col-md-8 offset-md-2'>
          <h1 className=' text-white'>{createProductForm()}</h1>
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
